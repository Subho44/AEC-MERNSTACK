const Job = require("../models/Job");
const fs = require("fs");

//insert job
exports.createjob = async(req,res)=>{
    try{
        const job = new Job({
            ...req.body,
            logo:req.file ? req.file.filename : "",
        });
        await job.save();
        res.status(201).json(job);
    } catch(err) {
         res.status(401).json({message:err});
    }
}
//view all job
exports.getjob = async(req,res)=>{
    try{
        const jobs = await Job.find();
        res.status(201).json(jobs);
    } catch(err) {
         res.status(401).json({message:err});
    }
}
//singel view
exports.getsingeljob = async(req,res)=>{
    try{
        const job = await Job.findById(req.params.id);
        res.status(201).json(job);
    } catch(err) {
         res.status(401).json({message:err});
    }
}
//update
exports.updatejob = async(req,res)=>{
    try{

        const job = await Job.findById(req.params.id);
        if(req.file&& job.logo) {
            fs.unlinkSync("upload/"+job.logo);
        }
        const updatedjob = await Job.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                logo:req.file ? req.file.filename : job.logo,
            },
            {new:true}
        );
        res.status(201).json(updatedjob);
    } catch(err) {
         res.status(401).json({message:err});
    }
}
//delete job

exports.deletejob = async(req,res)=>{
    try{

        const job = await Job.findById(req.params.id);
        if(job.logo) {
            fs.unlinkSync("upload/"+job.logo);
        }
        await Job.findByIdAndDelete(
            req.params.id,
        );
        res.status(201).json({message:"job delete successfully"});
    } catch(err) {
         res.status(401).json({message:err});
    }
}