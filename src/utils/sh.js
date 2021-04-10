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

export async function patchArcData(apiLink, data){
    try{
        axios
            .put(apiLink, data)
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

export async function deleteArcData(apiLink, data){
    try{
        axios
            .delete(apiLink, data)
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

export const getArcData = async(apiLink) => {
    try{
        let response= ''
        response = axios.get(apiLink)
        return response
    }catch(e){
        console.log(e)
    }

}

export async function getWhereArcData(apiLink, data){
    try{
        var self = this;
        axios.get(apiLink)
        .then(function (response) {
        console.log(response);
        self.setState({events: response.data})
        })
        .catch(function (error) {
        console.log(error);
        });

        return self
    }catch(e){
        console.log(e)
    }

}

export const anID_R_Gen = async(apiLink='http://localhost:3000/api/arc_db/arc_r_users/r_usr_an_id/') => {
   
        let genID =  ''
        let response = ''

        genID = await createANID(10)
        response = axios.get(apiLink + genID)
        if(response.status === '200'){
            genID = createANID(10)
            return  genID
        }else if(response.status === '404'){
            return  genID
        }

        return  genID
}

export const anID_C_Gen = async(apiLink='http://localhost:3000/api/arc_db/arc_c_users/c_usr_an_id/') => {
   
    let genID =  ''
    let response = ''

    genID = createANID(10)
    response = axios.get(apiLink + genID)
    if(response.status === '200'){
        genID = createANID(10)
        return  genID
    }else if(response.status === '404'){
        return  genID
    }

    return  genID
}

export const anID_Cmd_Lst_Gen = async(apiLink='http://localhost:3000/api/arc_db/arc_r_users/') => {
   
    let genID =  ''
    let response = ''

    genID = createANID(10)
    response = axios.get(apiLink + genID)
    if(response.status === '200'){
        genID = createANID(10)
        return  genID
    }else if(response.status === '404'){
        return  genID
    }

    return  genID
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

export function createANID(len){
        return Math.random().toString(16).substr(2, len);
}

