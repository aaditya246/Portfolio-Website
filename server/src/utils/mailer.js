import { Resend } from 'resend'

/**
 * Sends a notification email to the site owner using Resend.
 * Auto-reply to the sender is skipped unless a verified domain is configured.
 *
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} [data.subject]
 * @param {string} data.message
 */
export const sendContactEmails = async ({ name, email, subject, message }) => {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const ownerSubject = subject
    ? `Portfolio Contact: ${subject}`
    : `New Portfolio Contact from ${name}`

  const result = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
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
  })

  if (result.error) {
    throw new Error(result.error.message || 'Failed to send email via Resend')
  }

  return result
}