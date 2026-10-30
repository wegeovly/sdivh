import { z } from "zod";

export const contactRoles = ["School", "Parent", "Educator", "NGO", "Coach", "Trainer", "Transporter", "Catering", "Press", "Other"] as const;
const plainText = (limit: number) => z.string().trim().min(1, "This field is required.").max(limit, `Use ${limit} characters or fewer.`).refine((value) => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value), "Please remove unsupported characters.");
export const contactSchema = z.object({
  name: plainText(100),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email address.").max(255)]),
  phone: z.string().trim().min(1, "Phone number is required.").max(20, "Enter a valid phone number.").regex(/^\+?[\d ()-]+$/, "Enter a valid phone number.").refine((value) => { const digits = value.replace(/\D/g, ""); return digits.length >= 10 && digits.length <= 15; }, "Use 10 to 15 digits."),
  whatsapp: z.boolean(),
  role: z.enum(contactRoles, { errorMap: () => ({ message: "Select your role." }) }),
  otherRole: z.string().trim().max(100, "Use 100 characters or fewer."),
  message: plainText(1000),
}).superRefine((value, context) => {
  if (value.role === "Other" && !plainText(100).safeParse(value.otherRole).success) context.addIssue({ code: z.ZodIssueCode.custom, path: ["otherRole"], message: "Enter your role (100 characters or fewer)." });
});

export function contactMailto(input: unknown) {
  const value = contactSchema.parse(input);
  const body = `Name: ${value.name}\nRole: ${value.role === "Other" ? value.otherRole : value.role}\nPhone: ${value.phone}\nWhatsApp: ${value.whatsapp ? "Yes" : "No"}\nEmail: ${value.email || "Not provided"}\n\n${value.message}`;
  return `mailto:hr@kidenture.com?subject=${encodeURIComponent("KIDENTURE enquiry")}&body=${encodeURIComponent(body)}`;
}