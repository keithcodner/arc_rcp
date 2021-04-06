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

export async function getArcData(apiLink){
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


