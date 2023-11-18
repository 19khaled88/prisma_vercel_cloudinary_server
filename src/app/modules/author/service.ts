import { Author, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


const createUserService = async (data: any): Promise<Author | null> => {
    const response = await prisma.$transaction(async transactionClient => {
        const isExist = await transactionClient.author.findFirst({
            where: {
                email: data.email
            }
        })
        if (isExist) {
            throw new Error('User already exist!')
        }
        const create = await transactionClient.author.create({
            data: data
        })
        
        return create
    })
    return response
}

const getAllAuthor = async (): Promise<Author[] | null> => {
    const response = await prisma.$transaction(async transactionClient => {
        const result = await transactionClient.author.findMany({ })
        
        return result
    })
    return response
}

const getSingleAuthor = async (id: number) => {
    const response = await prisma.$transaction(async transactionClient => {
        const result = await transactionClient.author.findFirst({
            where: {
                id: id
            }
        })
        return result
    })
    return response
}

const updateAuthor = async (id: number, payload: Partial<Author>) => {
    const response = await prisma.$transaction(async transactionClient => {
        const result = await transactionClient.author.update({
            where: {
                id: id
            },
            data: payload
        })
        return result
    })
    return response
}

const deleteAuthor = async (id: number) => {
    const response = await prisma.$transaction(async transactionClient => {
        const result = await transactionClient.author.delete({
            where: {
                id: id
            }
        })
        return result
    })
    return response
}

const deleteAllAuthor=async()=>{
    const response = await prisma.$transaction(async transactionClient => {
        const result = await transactionClient.author.deleteMany({})
        return result
    })
    return response
}



export const authorService = {
    createUserService,
    getAllAuthor,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor,
    deleteAllAuthor
}