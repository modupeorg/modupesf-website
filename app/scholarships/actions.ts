"use server";

import { ActionResponse, ScholarshipFormData } from "@/lib/types";
import { google, sheets_v4 } from "googleapis";
import { z } from "zod";
import { googleAuth } from "../googleAuth";

// Strong validation schema with meaningful error messages
const scholarshipSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Invalid email format"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\+?[\d\s-()]+$/, "Invalid phone number format"),
});

// Constants to avoid magic strings
const SHEET_RANGE = "Sheet1!A:D";
const ERROR_MESSAGES = {
  GOOGLE_CONNECTION: "Unable to establish connection with Google services",
  VALIDATION_ERROR: "Please correct the form errors",
  SUBMISSION_ERROR: "Unable to process your submission. Please try again",
  SUCCESS: "Scholarship application successfully submitted!",
} as const;

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
    email: (formData.get("email") as string)?.trim() ?? "",
    phoneNumber: (formData.get("phoneNumber") as string)?.trim() ?? "",
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
        values: [[data.firstName, data.lastName, data.email, data.phoneNumber]],
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
