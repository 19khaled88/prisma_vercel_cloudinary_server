"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("../modules/author/route");
const authorRootRoute = express_1.default.Router();
const ModuleRoute = [
    {
        path: '/author',
        routes: route_1.AuthorRouter
    }
];
ModuleRoute.forEach(routes => authorRootRoute.use(routes.path, routes.routes));
exports.default = authorRootRoute;
