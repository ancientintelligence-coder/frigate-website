import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Zoho SMTP transporter using your existing settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.zoho.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // STARTTLS on port 587
  auth: {
    user: process.env.SMTP_USER || "it@flplindia.com",
    pass: process.env.SMTP_PASS || "FlplIt@123",
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Route to the correct team based on service selected
    const toEmails =
      service === "Ecommerce"
        ? ["it@flplindia.com"]
        : ["rpchoudhary@fll.co.in"];

    const serviceLabel =
      service === "Ecommerce" ? "Frigate E-commerce" : "Frigate Transport";

    // Email to the internal team
    const internalMail = {
      from: `"Frigate Logistics Website" <it@flplindia.com>`,
      to: toEmails.join(", "),
      subject: `New Enquiry — ${serviceLabel} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0A1628; padding: 24px 32px;">
            <h2 style="color: #D4A843; margin: 0; font-size: 20px;">New Website Enquiry</h2>
            <p style="color: #C0C8D8; margin: 4px 0 0; font-size: 13px;">${serviceLabel}</p>
          </div>
          <div style="padding: 32px; background: white;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 120px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;"><a href="mailto:${email}" style="color: #0A1628;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">
                  <span style="background: #D4A843; color: #0A1628; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 700;">${serviceLabel}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top; padding-top: 14px;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; padding-top: 14px; line-height: 1.6;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
            <p style="color: #999; font-size: 11px; margin: 0;">This enquiry was submitted via frigatelogistics.in</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the person who submitted the form
    const autoReply = {
      from: `"Frigate Logistics Ltd" <it@flplindia.com>`,
      to: email,
      subject: `Thank you for your enquiry — Frigate Logistics Ltd`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0A1628; padding: 24px 32px;">
            <h2 style="color: #D4A843; margin: 0; font-size: 20px;">Frigate Logistics Ltd</h2>
            <p style="color: #C0C8D8; margin: 4px 0 0; font-size: 13px;">Your enquiry has been received</p>
          </div>
          <div style="padding: 32px; background: white;">
            <p style="font-size: 15px; color: #333;">Dear ${name},</p>
            <p style="font-size: 14px; color: #555; line-height: 1.7;">
              Thank you for reaching out to <strong>Frigate Logistics Ltd</strong>. We have received your enquiry regarding <strong>${serviceLabel}</strong> and our team will get back to you within <strong>24 hours</strong>.
            </p>
            <div style="background: #f9f5e8; border-left: 4px solid #D4A843; padding: 16px 20px; margin: 24px 0; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; font-size: 13px; color: #555;">Your message:</p>
              <p style="margin: 8px 0 0; font-size: 14px; color: #333; line-height: 1.6;">${message}</p>
            </div>
            <p style="font-size: 14px; color: #555; line-height: 1.7;">
              If you need immediate assistance, please contact our team directly:
            </p>
            ${service === "Ecommerce" ? `
              <p style="font-size: 13px; color: #555;">📞 +91 99246 26900<br/>📧 sunil@fll.co.in · hardik@fll.co.in</p>
            ` : `
              <p style="font-size: 13px; color: #555;">📞 +91 93272 34001<br/>📧 rpchoudhary@fll.co.in</p>
            `}
            <p style="font-size: 14px; color: #333; margin-top: 24px;">Warm regards,<br/><strong>Frigate Logistics Ltd</strong></p>
          </div>
          <div style="background: #0A1628; padding: 16px 32px; text-align: center;">
            <p style="color: #C0C8D8; font-size: 11px; margin: 0;">G-1, Vaibhav Residency, Opp. Shivam Tenament, Vadodara, Gujarat — 390012</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(internalMail);
    await transporter.sendMail(autoReply);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
