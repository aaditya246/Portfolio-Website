const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/**
 * Sends a contact form submission to the backend.
 *
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.email
 * @param {string} [payload.subject]
 * @param {string} payload.message
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const sendContactMessage = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Something went wrong. Please try again.',
      }
    }

    return {
      success: true,
      message: data.message || 'Your message has been sent successfully.',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Unable to reach the server. Please check your connection and try again.',
    }
  }
}