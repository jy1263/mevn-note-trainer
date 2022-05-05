import path from "path";

import express from "express";
import mongoose from 'mongoose';

import AuthInit from "./auth";

import AuthRouter from './routes/auth';

import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(process.cwd(), ".env.server")
});

const app = express();

mongoose.connect(process.env.MONGO_URI as any).then(async () => {
  console.log("Connected to MongoDB");
  AuthInit();

  app.use("/auth", AuthRouter);
});

module.exports = app;
