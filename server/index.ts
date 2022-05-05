import path from "path";

import express from "express";
import mongoose from 'mongoose';
import passport from "passport";

import User from './models/user';

import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(process.cwd(), ".env.server")
});

const app = express();

mongoose.connect(process.env.MONGO_URI as any).then(async () => {
  const thing = new User({
    username: "test"
  })
  await thing.save();
  app.get("/help", (req, res) => {
    res.send("Hello World!");
  });
});

module.exports = app;
