import * as UserController from './user.controller'

const router = require('express').Router()

router.post('/join', UserController.join)

export const UserRouter = router
