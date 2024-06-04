"use server";

import { Resend } from "resend";
import { EmailTemplate } from "../../components/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      phone,
      email,
      message,
      businessEnglish,
      generalEnglish,
      examPreparation,
      editingYourResearchPaper,
      conversationalEnglish,
    } = body;

    const data = await resend.emails.send({
      from: "Lightning English with Michael <onboarding@resend.dev>",
      to: [`${process.env.EMAIL_TO}`], //`${process.env.EMAIL_TO}`
      subject: "🎉New submission from  !",
      react: EmailTemplate({
        firstName,
        lastName,
        phone,
        email,
        message,
        businessEnglish,
        generalEnglish,
        examPreparation,
        editingYourResearchPaper,
        conversationalEnglish,
      }),
    });

    return Response.json({
      status: 200,
    });
  } catch (error) {
    return Response.json({ error });
  }
}
