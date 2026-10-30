import { describe, expect, test } from "bun:test";
import { contactRoles, contactSchema, contactMailto } from "../src/lib/contact-schema";

const valid = { name: "Test Parent", email: "", phone: "9460007938", whatsapp: false, role: "Parent", otherRole: "", message: "School program enquiry" };
describe("contact requirements", () => {
  test("email is optional but must be valid when provided", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
    expect(contactSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false);
  });
  for (const field of ["name", "phone", "role", "message"]) test(`${field} is mandatory`, () => {
    expect(contactSchema.safeParse({ ...valid, [field]: "" }).success).toBe(false);
  });
  test("all requested roles are accepted", () => {
    expect([...contactRoles]).toEqual(["School", "Parent", "Educator", "NGO", "Coach", "Trainer", "Transporter", "Catering", "Press", "Other"]);
    expect(contactRoles.indexOf("School")).toBeLessThan(contactRoles.indexOf("Parent"));
    for (const role of contactRoles) expect(contactSchema.safeParse({ ...valid, role, otherRole: "Community volunteer" }).success).toBe(true);
  });
  test("Other requires a custom role", () => {
    expect(contactSchema.safeParse({ ...valid, role: "Other" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, role: "Other", otherRole: "Volunteer" }).success).toBe(true);
  });
  test("phone accepts 10 to 15 digits and rejects malformed values", () => {
    expect(contactSchema.safeParse({ ...valid, phone: "123" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, phone: "9460007938<script>" }).success).toBe(false);
  });
  test("contact destination is correct and input is encoded", () => {
    const url = contactMailto({ ...valid, message: "Hello & subject=changed" });
    expect(url.startsWith("mailto:hr@kidenture.com?")).toBe(true);
    expect(url).toContain("Hello%20%26%20subject%3Dchanged");
    expect(() => contactMailto({ ...valid, name: "" })).toThrow();
  });
});