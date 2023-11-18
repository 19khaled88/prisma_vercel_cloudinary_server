"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL_LOCAL,
    database_url_public: process.env.DATABASE_URL_PUBLIC
    // accessToken: process.env.JWT_ACCESS_SECRET as string,
    // refreshToken: process.env.JWT_REFRESH_SECRET as string,
    // jwt_secret_token:process.env.JWT_SECRET as string,
    // accessTokenKey: process.env.ACCESS_TOKEN_KEY as string,
    // refreshTokenKey: process.env.REFRESH_TOKEN_KEY as string,
    // accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN ,
    // refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
};
