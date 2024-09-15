import cors from 'cors';

export const corsOptions: cors.CorsOptions = {
  origin: ['http://localhost:3000'],  // ระบุ domain ที่อนุญาต
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};