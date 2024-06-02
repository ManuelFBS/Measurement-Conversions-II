import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mtftRoutes from './routes/conversions.routes';

dotenv.config();

const app: Application = express();

// Settings...
app.set('port', process.env.PORT || 8085 || 3000);

// Middlewares...
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());

// Routes...
app.use('/conversions', mtftRoutes);

export default app;
