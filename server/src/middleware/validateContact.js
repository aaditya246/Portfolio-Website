import { body, validationResult } from 'express-validator'

/**
 * Validation rules for the contact form submission.
 */
export const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters.'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),

  body('subject')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 150 })
    .withMessage('Subject cannot exceed 150 characters.'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required.')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters.'),
]

/**
 * Middleware that checks validation results and returns errors if any.
 */
export const validateContact = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    })
  }

  next()
}