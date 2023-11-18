"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get('/single/:id', controller_1.AuthorController.singleAuthor);
router.delete('/delete/:id', controller_1.AuthorController.deleteAuthor);
router.put('/update/:id', controller_1.AuthorController.updateAuthor);
router.post('/create', controller_1.AuthorController.createAuthor);
router.get('/allAuthor', controller_1.AuthorController.allAuthors);
router.delete('/deleteAllAuthor', controller_1.AuthorController.deleteAllAuthor);
exports.AuthorRouter = router;
