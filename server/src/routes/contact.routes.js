import express from 'express'
import { submitContactMessage, healthCheck } from '../controllers/contact.controller.js'
import { contactValidationRules, validateContact } from '../middleware/validateContact.js'
import { contactRateLimiter } from '../middleware/rateLimiter.js'

const router = express.Router()

// GET /api/contact/health
router.get('/health', healthCheck)

// POST /api/contact
router.post(
  '/',
  contactRateLimiter,
  contactValidationRules,
  validateContact,
  submitContactMessage
)

export default router