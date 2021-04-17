import React, {Component} from 'react'
import {postArcData, 
    getCurrDateTime, 
    getArcData,
    anID_Cmd_Lst_Gen} from '../utils/sh'


class Settings extends Component{
    constructor(props){
        super(props)
        this.state={
            "cmd_lst_an_id" : "",
            "cmd_exec_name" : "",
            "cmd_lst_exec_description" : "",
            "cmd_lst_status" : "Active",
            "cmd_lst_type" : "Action",
            "cmd_lst_date_created" : getCurrDateTime()
        }
    }

    componentDidMount = async () =>{
        const getCmd_Lst_USR_AN_ID = await anID_Cmd_Lst_Gen()
        this.setState({"cmd_lst_an_id": getCmd_Lst_USR_AN_ID})

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
            <h1 className="text-2xl">Manage Settings:</h1>
            <h2 className="text-1xl">Add A Command:</h2>

            <form onSubmit={this.handleSubmit}>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Execution Name: </label>
                    <input onChange={this.handleInputChange} type="text" className="p-2 rounded" name="cmd_exec_name"/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Description: </label>
                    <textarea onChange={this.handleInputChange} type="text" className="p-2 rounded" name="cmd_lst_exec_description"></textarea>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Status:</label>
                    <select onChange={this.handleInputChange} className="p-2 rounded" name="c_usr_type">
                        <option value="Active">Active</option>
                        <option value="In_Active">In-Active</option>
                    </select>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Type: </label>
                    <select onChange={this.handleInputChange} className="p-2 rounded" name="c_usr_type">
                        <option value="Direction">Direction</option>
                        <option value="Action">Action</option>
                        <option value="Idle">Idle</option>
                        <option value="Data">Data</option>
                    </select>
                </div>
                <br />
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Submit
                </button>
            </form>
        </div>
        )
    }
}

export default Settings