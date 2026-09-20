"use server";

type FormState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  if (!email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  // Placeholder - log to console in production this would send email/save to DB
  console.log("Contact form submission:", { name, email, message });

  // In production, integrate with email service (Resend, SendGrid, etc.)
  // For now, we simulate a successful submission
  return { success: true };
}
