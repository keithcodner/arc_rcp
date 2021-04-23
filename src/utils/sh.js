import axios from 'axios'

//------------------GLOBAL VALS-----------------------------
export const btnStyle = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'

//------------------APP SETTINGS -----------------------------
export const api_domain = 'localhost',
 api_port = '3000'

//------------------API LINKS -----------------------------
export const arc_c_usrs__GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_c_users',
 arc_c_usrs__PATCH = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_c_users/c_usr_id/',
 arc_c_usrs__POST = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_c_users/c_usrs',
 arc_c_usrs__DEL = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_c_users/c_usr_id/',
 arc_cmd_list_table__GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_list_table/',
 arc_cmd_list_table__PATCH = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_list_table/cmd_lst_id/',
 arc_cmd_list_table__POST = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_list_table/cmd_list_item',
 arc_cmd_list_table__DEL = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_list_table/cmd_list_item_id/',
 arc_cmd_table__GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_table/',
 arc_cmd_table__PATCH = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_table/cmd_id/',
 arc_cmd_table__POST = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_table/mkcmd',
 arc_cmd_table__DEL = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_table/r_usr_id/',
 arc_ctrl_table__GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_ctrl_table/',
 arc_ctrl_table__PATCH = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_ctrl_table/ctrl_id/',
 arc_ctrl_table__POST = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_ctrl_table/mk_ctrl',
 arc_ctrl_table__DEL = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_ctrl_table/ctrl_id/',
 arc_r_usrs__GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_r_users/',
 arc_r_usrs__PATCH = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_r_users/r_usr_id/',
 arc_r_usrs__POST = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_r_users/r_usrs',
 arc_r_usrs__DEL = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_r_users/r_usr_id/',
 arc_sys_settings__GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_sys_settings',
 arc_sys_settings__PATCH = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_sys_settings/set_id/',
 arc_sys_settings__POST = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_sys_settings/mk_settings',
 arc_sys_settings__DEL = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_sys_settings/set_id/',

 //-----------------------------Search by API Alpha Numeric ID's----------------------------------------------
 arc_c_usrs__AN_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_c_users/c_usr_an_id/',
 arc_r_usrs__AN_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_r_users/r_usr_an_id/',
 arc_sys_settings__AN_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_sys_settings/set_an_id/',
 arc_ctrl_table__AN_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_ctrl_table/ctrl_id/',
 arc_cmd_table__AN_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_table/cmd_id/',
 arc_cmd_list_table__AN_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_list/cmd_lst_id/',

 //-----------------------------Search by API ID's----------------------------------------------
 arc_c_usrs__ID_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_c_users/c_usr_id/',
 arc_r_usrs__ID_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_r_users/r_usr_id/',
 arc_sys_settings__ID_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_sys_settings/set_id/',
 arc_ctrl_table__ID_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_ctrl_table/ctrl_id/',
 arc_cmd_table__ID_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_table/cmd_id/',
 arc_cmd_list_table__ID_GET = 'http://'+api_domain+':'+api_port+'/api/arc_db/arc_cmd_list/cmd_lst_an_id/'

 //-----------------------------Search Related Tables by AN ID's----------------------------------------------
 

//------------------ASYNC FUNCTIONS-----------------------------
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

export const anID_R_Gen = async(apiLink=arc_r_usrs__AN_GET) => {
   
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

export const anID_C_Gen = async(apiLink=arc_c_usrs__AN_GET) => {
   
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

export const anID_Cmd_Lst_Gen = async(apiLink=arc_r_usrs__GET) => {
   
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


//------------------NON - ASYNC FUNCTIONS-----------------------------

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

