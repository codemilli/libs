import * as EntryController from './entry.controller'

const router = require('express').Router()

router.get('/list', EntryController.getList)
router.post('/', EntryController.create)

export const EntryRouter = router
