const express = require('express')
const planRouter = express.Router()
const {getPlans,getPlanById,createPlan,updatePlan,deletePlan} =require('../controllers/planController') 



//localhost:3000/plans
planRouter.get('/',getPlans)

//localhost:3000/products/23453647
planRouter.get('/:id',getPlanById)
//create plan
planRouter.post('/',createPlan)

//update plan
planRouter.patch('/:id',updatePlan)

//delete plan
planRouter.delete('/:id',deletePlan)




module.exports = planRouter
