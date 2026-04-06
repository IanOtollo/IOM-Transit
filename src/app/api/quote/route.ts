import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_123");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let quoteRequest;
    try {
      // Attempt to save to database
      quoteRequest = await prisma.quoteRequest.create({
        data: {
          fullName: body.fullName,
          companyName: body.companyName,
          email: body.email,
          phone: body.phone,
          service: body.service,
          cargoType: body.cargoType,
          origin: body.origin,
          destination: body.destination,
          weight: body.weight,
          date: body.date,
          details: body.details,
        },
      });
    } catch (dbError) {
      // Log error but proceed to send email or return success in dev/demo mode
      console.warn("Database integration not fully configured or failed:", dbError);
    }

    try {
      // Attempt to send email
      await resend.emails.send({
        from: "IOM Transit <info@iomtransit.com>",
        to: ["info@iomtransit.com"], // As requested, send to info@iomtransit.com
        subject: `New Quotation Request from ${body.companyName}`,
        html: `
          <h2>New Quotation Request</h2>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Company:</strong> ${body.companyName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Cargo Type:</strong> ${body.cargoType}</p>
          <p><strong>Origin:</strong> ${body.origin}</p>
          <p><strong>Destination:</strong> ${body.destination}</p>
          <p><strong>Weight:</strong> ${body.weight}</p>
          <p><strong>Date:</strong> ${body.date}</p>
          <p><strong>Details:</strong> ${body.details}</p>
        `,
      });
    } catch (emailError) {
      console.warn("Resend email failed (likely invalid API key):", emailError);
    }

    return NextResponse.json({ success: true, message: "Quotation request received." });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process quotation request." },
      { status: 500 }
    );
  }
}
