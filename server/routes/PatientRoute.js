import express from "express";
import * as patientControl from "../controllers/PatientControllers";
import PatientInfos from "../models/Patient";

const patientRouter = express.Router()

//Add Submit POST Route
patientRouter.post("/create",patientControl.createPatient)

//Read Route
patientRouter.get("/read/:id",patientControl.getPatient)

//Update Submit POST Route
patientRouter.post('/edit/:id', patientControl.updatePatient)

//Delete Route
patientRouter.delete('/delete/:id',patientControl.deletePatient)

//Get All Route
patientRouter.get("/getAll",patientControl.getAllPatient)


export default patientRouter;