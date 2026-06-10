import Message from '../models/Message.js'
import { sendContactEmails } from '../utils/mailer.js'

/**
 * POST /api/contact
 * Saves a contact form submission to MongoDB and sends email notifications.
 */
export const submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Save to MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject: subject || '',
      message,
      ipAddress: req.ip,
    })

    // Send emails (notification + auto-reply)
    try {
      await sendContactEmails({ name, email, subject, message })
    } catch (emailError) {
      // Message is saved even if email fails — log but don't fail the request
      console.error('Email sending failed:', emailError.message)
    }

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully. I'll get back to you soon!",
      data: {
        id: newMessage._id,
        createdAt: newMessage.createdAt,
      },
    })
  } catch (error) {
    console.error('Contact submission error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while sending your message. Please try again later.',
    })
  }
}

/**
 * GET /api/contact/health
 * Simple health check endpoint.
 */
export const healthCheck = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Contact API is running.',
  })
}