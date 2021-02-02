import patientInfos from "../models/Patient";

export const createPatient = async (req,res)=>{

    console.log(req.body)
    const newPatient = await patientInfos.create(req.body);

    res.status(201).json({
        status:"success",
        newPatient
    })
}
    export const getPatient = (req,res)=>{
        patientInfos.findById(req.params.id, (err, patientInfos)=>{
            if(err){
                // console.log(err)
            } else {
                console.log(patientInfos)
                 res.status(200).json({
                    status:"success",
                    patientInfos
                })
              
            }  
        })
}


//Update controll function
export const updatePatient = (req,res)=>{
    let patient= {};
    patient.patientName=req.body.patientName;
    patient.phone=req.body.phone;
    patient.home=req.body.home;
    patient.email=req.body.email;

    let query = {_id:req.params.id}
    patientInfos.updateOne(query, patient,  (err)=>{
        if(err){
            console.log(err)
            return;
        }else{
           
            res.status(201).json({
                status:"Updated success",
                patientInfos
            })
          
            
        }
    })
  }
  //Delete controll function
  export const deletePatient = (req,res) => {
    conslog('Deleted')
    let query = {_id:req.params.id}
    patientInfos.deleteOne(query, (err) => {
        if(err){
            console.log(err)
        }else console.log('success');
        res.send('Deleted Successfully')
        })
    }

      //Get All controll function
export const getAllPatient = (req,res) => {
    patientInfos.find({}).then((patients)=> {
        res.send(patients)
    }).catch((e) => {
        res.status(500).send(e)
    })
    }