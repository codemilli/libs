import * as EntryController from './entry.controller'

const router = require('express').Router()

router.get('/list', EntryController.getList)

export const EntryRouter = router
