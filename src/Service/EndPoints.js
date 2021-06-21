import { instance } from './HttpClient'
const NORMALUSERURL = "/signup/normalUser";
const DOCTORURL = "/signup/doctor";

//Normal user Sign up EndPoints 
export const NORMAL_USER_SIGNUP = (bodyContent) => {
    try{
        return instance.post(NORMALUSERURL,JSON.stringify(bodyContent));
    }catch{
        console.log('Error in Normal User Sign-up Route Caused An Error');
    }
}

//Doctor User signup Endpoint
export const DOCTOR_SIGNUP = (bodyContent) => {
    try{
        return instance.post(DOCTORURL,JSON.stringify(bodyContent));
    }catch{
        console.log('The Doctor Sign up Route Caused An Error');
    }
}

//Analyze Form EndPoints
export const ANALYZE_FORM = (current_user_emailId, bodyContent) => {
    try {
        return instance.post("/predictionForm/"+current_user_emailId,JSON.stringify(bodyContent))
    } catch{
        console.log("The Prediction From Caused An Error");
    }
}

//this is the Form that is made inorder to do for the Alternative Project.
export const ANALYZE_FORM_ALTERNATIVE = (current_user_emailId, bodyContent) => {
    try {
        return instance.post("/predictionForm/"+current_user_emailId,JSON.stringify(bodyContent))
    } catch{
        console.log("The Prediction From Caused An Error");
    }
}

//Getting All the Details From the Database EndPoint
export const GET_ALL_PATIENTS_DETAILS = (current_user_emailId) => {
    try {
        return instance.get("/allDetails/"+current_user_emailId)
    } catch{
        console.log("The All Details Route Caused An Error Caused An Error");
    }
}

//Getting the Specific Patient Details
export const GET_SPECIFIC_PATIENT_DETAIL = (current_user_emailId,name_of_patient) => {
    try {
        return instance.get(`/patient/${current_user_emailId}/${name_of_patient}/results`)
    } catch{
        console.log("The Specific Patient Details Route Caused An Error");
    }
}



