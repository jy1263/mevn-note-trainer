import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user";

export default function init() {
  passport.use(User.createStrategy());
}
