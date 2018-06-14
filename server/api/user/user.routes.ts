import * as UserController from './user.controller'

const router = require('express').Router()

router.post('/join', UserController.join)
router.post('/login', UserController.login)

export const UserRouter = router
