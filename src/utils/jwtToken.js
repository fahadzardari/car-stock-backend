import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../config/envVariables.js"

export function getToken(user) {
  return jwt.sign({ email: user.email , username: user.username  }, SECRET_KEY, { expiresIn: "24h" });
}
export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}
