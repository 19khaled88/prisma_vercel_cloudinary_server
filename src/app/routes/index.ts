
import express from 'express'
import { AuthorRouter } from '../modules/author/route'

const authorRootRoute = express.Router()



const ModuleRoute = [
    {
        path: '/author',
        routes: AuthorRouter
    }
   
]

ModuleRoute.forEach(routes => authorRootRoute.use(routes.path, routes.routes))

export default authorRootRoute