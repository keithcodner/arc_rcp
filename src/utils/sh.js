import axios from 'axios'

//------------------ASYNC-----------------------------
export async function postArcData(apiLink, data){
    try{
        axios
            .post(apiLink, data)
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }catch(e){
        console.log(e)
    }

}

export async function genRUserANID(apiLink, data){
    try{
        
    }catch(e){
        console.log(e)
    }

}

export async function genCUserANID(apiLink, data){
    try{
        
    }catch(e){
        console.log(e)
    }

}

//------------------NON - ASYNC-----------------------------

export function getCurrDateTime(){
    try{
        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' + 
            ('00' + date.getUTCHours()).slice(-2) + ':' + 
            ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
            ('00' + date.getUTCSeconds()).slice(-2);
        //console.log(date)
        return date

    }catch(e){
        console.log(e)
    }

}


