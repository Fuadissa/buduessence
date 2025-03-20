import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { name, email, message } = await req.json();

    console.log("Environment Variables:");
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
    console.log("RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Budu Essence Contact form submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
}
