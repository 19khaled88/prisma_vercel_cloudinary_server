"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const service_1 = require("./service");
const createAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_1.authorService.createUserService(req.body);
        res.send({
            status: 200,
            success: true,
            message: 'Author created',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const allAuthors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_1.authorService.getAllAuthor();
        res.send({
            status: 200,
            success: true,
            message: 'Authors retrieved',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const singleAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield service_1.authorService.getSingleAuthor(id);
        res.send({
            status: 200,
            success: true,
            message: 'Author retrieved',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield service_1.authorService.deleteAuthor(id);
        res.send({
            status: 200,
            success: true,
            message: 'Author deleted successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield service_1.authorService.updateAuthor(id, req.body);
        res.send({
            status: 200,
            success: true,
            message: 'Author updated successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteAllAuthor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_1.authorService.deleteAllAuthor();
        res.send({
            status: 200,
            success: true,
            message: 'All author deleted successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.AuthorController = {
    createAuthor,
    allAuthors,
    singleAuthor,
    deleteAuthor,
    updateAuthor,
    deleteAllAuthor
};
