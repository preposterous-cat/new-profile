import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PW,
      },
    });

    // Create Email Message
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `Opportunity Message from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
    
            Message: ${message}
            `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOption);
    // return NextResponse.json({
    //   success: true,

    // });
    return Response.json({
      success: true,
      message: "Your message has been sent!",
    });
  } catch (error) {
    console.error("Error: ", error);
    // return Response.json(
    //   {
    //     success: false,
    //     message: "Sorry! We have internal server error.",
    //   },
    //   { status: 500 }
    // );
    return Response.json({
      success: false,
      message: "Sorry! We have internal server error.",
    });
  }
}
