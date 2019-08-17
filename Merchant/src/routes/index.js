import express from 'express'

import { getMerchant,listMerchants } from '../controller/merchants'


const router = express.Router()

router.get('/listMerchants/:id', getMerchant)
router.get('/listMerchants', listMerchants)

 
module.exports = router