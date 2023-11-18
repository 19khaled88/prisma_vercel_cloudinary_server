import express from 'express'
import { AuthorController } from './controller'

const router = express.Router()


router.get('/single/:id', AuthorController.singleAuthor)
router.delete('/delete/:id', AuthorController.deleteAuthor)
router.put('/update/:id', AuthorController.updateAuthor)
router.post('/create', AuthorController.createAuthor)
router.get('/allAuthor', AuthorController.allAuthors)
router.delete('/deleteAllAuthor', AuthorController.deleteAllAuthor)


export const AuthorRouter = router


