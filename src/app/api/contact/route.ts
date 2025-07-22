// /app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${"Anonymous"}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Contact Form Message</h2>
          <p><strong>Message:</strong></p>
          <p>${message || "(no message)"}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending mail:", err);
    return NextResponse.json({ success: false, error: "Email failed to send." }, { status: 500 });
  }
}
