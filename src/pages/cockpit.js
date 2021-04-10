import React, {Component} from 'react'
import {postArcData, 
    getCurrDateTime, 
    getArcData,
    anID_Cmd_Lst_Gen} from '../utils/sh'


class Settings extends Component{
    constructor(props){
        super(props)
        this.state={
            "cmd_an_id" : "",
            "r_usr_an_id" : "",
            "c_usr_an_id" : "",
            "r_usr_code_name" : "",
            "cmd_exec_name" : "",
            "cmd_exec_params" : "{time_sec : '0'}",
            "cmd_exec_data" : "0",
            "cmd_status" : "UNEXECUTED",
            "cmd_op1" : "0",
            "cmd_op2" : "0",
            "cmd_op3" : "0",
            "cmd_date_created" : "0000-00-00 00:00:00",
            "cmd_date_executed" : getCurrDateTime()
        }
    }

    componentDidMount = async () =>{
        const getCmd_Lst_USR_AN_ID = await anID_Cmd_Lst_Gen()
        this.setState({"cmd_lst_an_id": getCmd_Lst_USR_AN_ID})

        const getR_Name_And_ID = await getArcData('http://localhost:3000/api/arc_db/arc_r_users/')

        localStorage.setItem("cmd_lst_data", JSON.stringify(getR_Name_And_ID.data));
    }

    componentWillUnmount = async (event) =>{
        
    }
   
    handleSubmit = async (event) =>{
        event.preventDefault()
        const data = this.state
        const uri = 'http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_item'
        
        postArcData(uri, data)
        console.log(data)
        window.location.reload();
    }
    
    handleInputChange = async (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">

            <form onSubmit={this.handleSubmit}>
                
            </form>
        </div>
        )
    }
}

export default Settings