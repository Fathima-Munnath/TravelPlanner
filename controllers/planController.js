const planData = require('../models/plan')
const getPlans = async(req,res)=>{
    try{
        const plans =await planData.find()
        res.status(200).json(plans)

    }catch (error){
        res.status(500).json({error:error.message})

    }
}


//get products based on id
const getPlanById = async (req,res)=>{
    try{
        const planID = req.params.id
        const plan = await planData.findById(planID)
        
        if(!plan)
            return res.status(404).json({message:"Plan not found"})
        res.status(200).json(plan)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

    
//create plan
const createPlan = async(req,res)=>{
    try{
        const {destination,startDate,endDate,activities} = req.body
        const newPlan = new planData({destination,startDate,endDate,activities})
        await newPlan.save()
        res.status(201).json(newPlan)
    }catch (error){
        res.status(500).json({error:error.message})

    }

}

//update plan
 const updatePlan = async (req,res)=>{
    try{
        const planID = req.params.id
        const plan = await planData.findByIdAndUpdate(planID,req.body,{new:true})
        //plan.destination = .destination
        if(!plan)
            return res.status(404).json({message:'Plan not found'})
        res.status(200).json(plan)

    }catch (error){
        res.status(500).json({error:error.message})
    }
 }
 //delete plan
 const deletePlan= async (req,res)=>{
    try{
        const planID =req.params.id
        const plan = await planData.findByIdAndDelete(planID,req.body,{new:true})
        if(!plan) 
            return res.status(404).json({message:'Plan not found'})
        res.status(200).json({message:"Plan deleted successfully"})

    }catch (error){
        res.status(500).json({error:error.message})

    }
 }


module.exports = {getPlans,getPlanById,createPlan,updatePlan,deletePlan}