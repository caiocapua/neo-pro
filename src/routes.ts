import { Router } from 'express'
import { ProcessController } from './controllers/ProcessController'

const routes = Router()

routes.get('/compact', new ProcessController().handle)

export { routes }