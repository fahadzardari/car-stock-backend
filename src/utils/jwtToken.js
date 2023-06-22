import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../config/envVariables.js"

export function getToken(email) {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "24h" });
}
