import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import contactRoutes from './routes/contact.routes.js'

const app = express()

// Security headers
app.use(helmet())

// CORS — restrict to frontend origin
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-website-pink-five-14.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Trust proxy (needed for correct req.ip behind reverse proxies/hosting platforms)
app.set('trust proxy', 1)

// Body parsing
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Routes
app.use('/api/contact', contactRoutes)

// Root health check
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Aaditya Portfolio API is running.',
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.',
  })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack)
  res.status(500).json({
    success: false,
    message: 'Internal server error.',
  })
})

export default app