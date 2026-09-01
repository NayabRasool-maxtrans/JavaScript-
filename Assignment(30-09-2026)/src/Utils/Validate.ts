import { User } from "../User/User";

export interface validateuser{ //return field which value is missing
    
    field:string,
    message:string,//message:"name is missing "
}
export function validationError(data:any,update:boolean=false):validateuser[]{
    //return type is validateuser [];
    const error:validateuser[]=[] //[{field:"name",message:"name is missing"}]
    //name
    if(!update || data.name!==undefined){ // chack value is provided or not 
        //update used for post and put values are updated that we too boolean value
        if(typeof data.name !=="string" || data.name.trim()==="" || !data.name){
            error.push({field:"name",message:"name is required"})
        }
    }
    //age 
    if(!update || data.age!==undefined){ //check value is provided or not 
        if(typeof data.age!=="number" || data.age<=0 ){//age is not negative and typeof value is number 
            error.push({
                field:"age",
                message:"age is required"
            })
        }
    }
    //email
    if(!update || data.email!==undefined){//check value is provided or not 
        if(!data.email.includes('@') || typeof data.email!=="string" || !data.email){
         //includes @ means if @ not there then show the error
            error.push({
                field:"email",
                message:"email is required"
            })

        }
        //address

        if(data.address!==undefined || !update){//check value is provided or not 
            if(!data.address ||typeof data.address!=="string" ){
                 error.push({ 
                    //error is type of validateuser[]
                    //push value in that error
                    field:"address",
                    message:"address is required"

                 })
            }
        }
    }

    return error; //return error
}