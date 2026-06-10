import nodemailer from 'nodemailer'

/**
 * Nodemailer transporter configured from environment variables.
 */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

/**
 * Sends a notification email to the site owner and an auto-reply to the sender.
 *
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} [data.subject]
 * @param {string} data.message
 */
export const sendContactEmails = async ({ name, email, subject, message }) => {
  const ownerSubject = subject
    ? `Portfolio Contact: ${subject}`
    : `New Portfolio Contact from ${name}`

  // Email to site owner
  const ownerMailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: ownerSubject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          ${
            subject
              ? `<tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0;">${subject}</td>
                </tr>`
              : ''
          }
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f4f4f5; border-radius: 8px;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  }

  // Auto-reply to sender
  const autoReplyMailOptions = {
    from: `"Aaditya" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thanks for reaching out!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">Hi ${name},</h2>
        <p>Thanks for getting in touch through my portfolio. I've received your message and will get back to you as soon as possible.</p>
        <div style="margin-top: 16px; padding: 16px; background: #f4f4f5; border-radius: 8px;">
          <p style="margin: 0; font-weight: bold;">Your message:</p>
          <p style="margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px;">Best regards,<br/>Aaditya</p>
      </div>
    `,
  }

  await Promise.all([
    transporter.sendMail(ownerMailOptions),
    transporter.sendMail(autoReplyMailOptions),
  ])
}

export default transporter