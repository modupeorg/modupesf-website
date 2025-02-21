"use server";

import { ActionResponse, ScholarshipFormData } from "@/lib/types";
import arcjet, { detectBot, fixedWindow, request, shield } from "@arcjet/next";
import { google, sheets_v4 } from "googleapis";
import { z } from "zod";
import { googleAuth } from "../googleAuth";

// Strong validation schema with meaningful error messages
const scholarshipSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  dob: z.string().trim().min(1, "Date of Birth is required"),
  email: z.string().trim().email("Invalid email format"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\+?[\d\s-()]+$/, "Invalid phone number format"),
  homeAddress: z.string().trim().min(1, "Home Address is required"),
  stateOfResidence: z.string().trim().min(1, "State of Residence is required"),
  currentUniversity: z.string().trim().min(1, "Current University is required"),
  levelOfStudy: z.string().trim().min(1, "Level of Study is required"),
  fieldOfStudy: z.string().trim().min(1, "Field of Study is required"),
  graduationYear: z.string().trim().min(1, "Graduation Year is required"),
  cgpa: z.string().trim().min(1, "CGPA is required"),
});

// Constants to avoid magic strings
const SHEET_RANGE = "Sheet1!A:L";
const ERROR_MESSAGES = {
  GOOGLE_CONNECTION: "Unable to establish connection with Google services",
  VALIDATION_ERROR: "Please correct the form errors",
  SUBMISSION_ERROR: "Unable to process your submission. Please try again",
  SUCCESS: "Scholarship application successfully submitted!",
} as const;

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE",
      allow: [],
    }),

    fixedWindow({
      mode: "LIVE",
      window: "1m",
      max: 5,
    }),
  ],
});

export async function submitScholarshipForm(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!spreadsheetId) {
    console.error("Missing GOOGLE_SPREADSHEET_ID environment variable");
    return createErrorResponse(ERROR_MESSAGES.GOOGLE_CONNECTION);
  }

  try {
    const req = await request();
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return createErrorResponse(
          "Too many registration attempts. Please try again later"
        );
      }

      if (decision.reason.isBot()) {
        return createErrorResponse(
          "This request has been identified as automated. If this is a mistake, please an email."
        );
      }

      return createErrorResponse("Request denied for security reasons");
    }

    const rawData = extractFormData(formData);
    const validatedData = await validateFormData(rawData);

    if (!validatedData.success) {
      return handleValidationError(validatedData.error, formData);
    }

    const sheets = await initializeGoogleSheets();
    if (!sheets) {
      return createErrorResponse(ERROR_MESSAGES.GOOGLE_CONNECTION);
    }

    const success = await appendToGoogleSheets(
      sheets,
      spreadsheetId,
      validatedData.data
    );

    return success
      ? { success: true, message: ERROR_MESSAGES.SUCCESS }
      : createErrorResponse(ERROR_MESSAGES.SUBMISSION_ERROR);
  } catch (error) {
    console.error("Scholarship submission error:", error);
    return createErrorResponse(ERROR_MESSAGES.SUBMISSION_ERROR);
  }
}

// Helper functions
function extractFormData(formData: FormData): ScholarshipFormData {
  return {
    firstName: (formData.get("firstName") as string)?.trim() ?? "",
    lastName: (formData.get("lastName") as string)?.trim() ?? "",
    dob: (formData.get("dob") as string)?.trim() ?? "",
    email: (formData.get("email") as string)?.trim() ?? "",
    phoneNumber: (formData.get("phoneNumber") as string)?.trim() ?? "",
    homeAddress: (formData.get("homeAddress") as string)?.trim() ?? "",
    stateOfResidence:
      (formData.get("stateOfResidence") as string)?.trim() ?? "",
    currentUniversity:
      (formData.get("currentUniversity") as string)?.trim() ?? "",
    levelOfStudy: (formData.get("levelOfStudy") as string)?.trim() ?? "",
    fieldOfStudy: (formData.get("fieldOfStudy") as string)?.trim() ?? "",
    graduationYear: (formData.get("graduationYear") as string)?.trim() ?? "",
    cgpa: (formData.get("cgpa") as string)?.trim() ?? "",
  };
}

async function validateFormData(data: ScholarshipFormData) {
  return scholarshipSchema.safeParseAsync(data);
}

function handleValidationError(error: z.ZodError, formData: FormData) {
  console.error("Validation failed:", error.flatten().fieldErrors);
  return {
    success: false,
    message: ERROR_MESSAGES.VALIDATION_ERROR,
    errors: error.flatten().fieldErrors,
    inputs: extractFormData(formData),
  };
}

async function initializeGoogleSheets() {
  const auth = await googleAuth();
  if (!auth) {
    console.error("Google authentication failed");
    return null;
  }

  try {
    return google.sheets({ auth, version: "v4" });
  } catch (error) {
    console.error("Google Sheets initialization error:", error);
    return null;
  }
}

async function appendToGoogleSheets(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  data: ScholarshipFormData
): Promise<boolean> {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: SHEET_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.firstName,
            data.lastName,
            data.dob,
            data.email,
            data.phoneNumber,
            data.homeAddress,
            data.stateOfResidence,
            data.currentUniversity,
            data.levelOfStudy,
            data.fieldOfStudy,
            data.graduationYear,
            data.cgpa,
          ],
        ],
      },
    });

    return response.status === 200;
  } catch (error) {
    console.error("Google Sheets append error:", error);
    return false;
  }
}

function createErrorResponse(message: string): ActionResponse {
  return { success: false, message };
}
