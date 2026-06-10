import rateLimit from 'express-rate-limit'

/**
 * Rate limiter for the contact form endpoint.
 * Allows a maximum of 5 requests per 15 minutes per IP address.
 */
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages sent from this IP. Please try again after 15 minutes.',
  },
})