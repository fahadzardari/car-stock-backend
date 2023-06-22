import { SECRET_KEY } from "../config/envVariables.js";
import { verifyToken } from "../utils/jwtToken.js";
export const confirmToken = (req, res, next) => {
        const header = req.headers.authorization;
        if (!header || !header.startsWith("Bearer")) {
        return res
        .status(401)
        .json({ result: "error", message: "Invalid Token" });
        }
        try {
        const token = header.split(" ")[1];
        const decoded = verifyToken(token);
        req.decode = decoded;
        next();
        } catch (error) {
        return res.status(401).json({ result: "error", message: "Invalid Token" });
        }
};