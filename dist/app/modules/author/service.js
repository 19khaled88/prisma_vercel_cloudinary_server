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
exports.authorService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const isExist = yield transactionClient.author.findFirst({
            where: {
                email: data.email
            }
        });
        if (isExist) {
            throw new Error('User already exist!');
        }
        const create = yield transactionClient.author.create({
            data: data
        });
        return create;
    }));
    return response;
});
const getAllAuthor = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield transactionClient.author.findMany({});
        return result;
    }));
    return response;
});
const getSingleAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield transactionClient.author.findFirst({
            where: {
                id: id
            }
        });
        return result;
    }));
    return response;
});
const updateAuthor = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield transactionClient.author.update({
            where: {
                id: id
            },
            data: payload
        });
        return result;
    }));
    return response;
});
const deleteAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield transactionClient.author.delete({
            where: {
                id: id
            }
        });
        return result;
    }));
    return response;
});
const deleteAllAuthor = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield transactionClient.author.deleteMany({});
        return result;
    }));
    return response;
});
exports.authorService = {
    createUserService,
    getAllAuthor,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor,
    deleteAllAuthor
};
