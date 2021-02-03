import patientInfos from "../models/Patient";

export const createPatient = async (req,res)=>{

try{
    const newPatient = await patientInfos.create(req.body);
    res.status(201).json({
        status:"success",
        newPatient
            })
        } catch(err){
            res.status(500)
            }
}
    
//Read all controll function

    export const getPatient = async(req,res)=>{
        try{
        const patient = await patientInfos.findById(req.params.id)
                res.status(200).json({
                   status:"success",
                   patient
                
            })
        } catch(err){
            res.status(500)
            }
        
        }

//Update controll function
export const updatePatient = async (req,res)=>{
    let patient= {};
    patient.patientName=req.body.patientName;
    patient.phone=req.body.phone;
    patient.home=req.body.home;
    patient.email=req.body.email;
    let query = {_id:req.params.id}
    try
    {
    const updatePatient = await patientInfos.updateOne(query, patient)
            res.status(200).json({
                status:"Updated success",   
            }) 
    
        
    } catch(err){
        res.status(500)
    }
}
  //Delete controll function
  export const deletePatient = async (req, res) => {

    let query = {_id:req.params.id}
    try
    {
    const patient = await patientInfos.deleteOne(query)
        res.send('Deleted Successfully')      
    } catch(err){
    res.status(500)
    }
}

      //Get All controll function
export const getAllPatient = async (req,res) => {
    try{
    const allPatient = await patientInfos.find({})
        res.send(allPatient)
    } catch(err){
        res.status(500)
        }
  
    }
