import { NextFunction, Request, Response } from "express";
import { authorService } from "./service";


const createAuthor=async(req:Request,res:Response,next:NextFunction)=>{
    
    try {
        const result =await authorService.createUserService(req.body)
        res.send({
            status:200,
            success:true,
            message:'Author created',
            data:result
        })
    } catch (error) {
        next(error)
    }
}

const allAuthors=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result =await authorService.getAllAuthor()
        res.send({
            status:200,
            success:true,
            message:'Authors retrieved',
            data:result
        })
    } catch (error) {
        next(error)
    }
}

const singleAuthor=async(req:Request,res:Response,next:NextFunction)=>{
    const id = parseInt(req.params.id)
    try {
        const result =await authorService.getSingleAuthor(id)
        res.send({
            status:200,
            success:true,
            message:'Author retrieved',
            data:result
        })
    } catch (error) {
        next(error)
    }
}

const deleteAuthor=async(req:Request,res:Response,next:NextFunction)=>{
    const id = parseInt(req.params.id)
    try {
        const result =await authorService.deleteAuthor(id)
        res.send({
            status:200,
            success:true,
            message:'Author deleted successfully',
            data:result
        })
    } catch (error) {
        next(error)
    }
}

const updateAuthor=async(req:Request,res:Response,next:NextFunction)=>{
    const id = parseInt(req.params.id)
    try {
        const result =await authorService.updateAuthor(id,req.body)
        res.send({
            status:200,
            success:true,
            message:'Author updated successfully',
            data:result
        })
    } catch (error) {
        next(error)
    }
}

const deleteAllAuthor =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result =await authorService.deleteAllAuthor()
        res.send({
            status:200,
            success:true,
            message:'All author deleted successfully',
            data:result
        })
    } catch (error) {
        next(error)
    }
}
export const AuthorController ={
    createAuthor,
    allAuthors,
    singleAuthor,
    deleteAuthor,
    updateAuthor,
    deleteAllAuthor
}