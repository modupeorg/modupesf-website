import { google } from "googleapis";

export const googleAuth = async () => {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error("Missing GOOGLE_PRIVATE_KEY environment variable");
  }
  const parsedPrivateKey = JSON.parse(privateKey).privateKey;

  if (!clientEmail || !parsedPrivateKey) {
    throw new Error("Missing Google credentials.");
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: parsedPrivateKey,
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });
};
