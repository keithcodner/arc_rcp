import React, {Component} from 'react'
//import {postArcData} from '../utils/sh'
import {Layout} from '../layout';

class Register  extends Component{

    constructor(props){
        super(props)
        this.state={
            "r_usr_an_id" : "ASDF124",
    "r_usr_code_name" : "ARCANE4545",
    "r_usr_ip" : "2.3.4.6",
    "r_usr_status" : "In-Active",
    "r_usr_type" : "DevBot",
    "r_usr_op1" : "0",
    "r_usr_op2" : "0",
    "r_usr_date_created" : "2021-03-05T05:55:57.000Z"
        }
    }
   
    handleSubmit = (event) =>{
        event.preventDefault()
        const  data = this.state
        const  uri = 'http://localhost:3000/api/arc_db/arc_r_users/r_usrs';
        alert(data);
        console.log(data);
        //postArcData(uri, data);

        try{
             let result =  fetch('http://localhost:3000/api/arc_db/arc_r_users/r_usrs',{
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({"r_usr_an_id" : "ASDF124",
                "r_usr_code_name" : "ARCANE4545",
                "r_usr_ip" : "2.3.4.6",
                "r_usr_status" : "In-Active",
                "r_usr_type" : "DevBot",
                "r_usr_op1" : "0",
                "r_usr_op2" : "0",
                "r_usr_date_created" : "2021-03-05T05:55:57.000Z"})
            });
        }catch(e){
            console.log(e)
        }
    
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    render(){
        const{robot_name} = this.state

        return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">
            <h1 className="text-2xl">Register Robot</h1>
            <form onSubmit={this.handleSubmit}>

                <div className="flex flex-col text-left">
                    <label htmlFor="">Robot Name: </label>
                    <input type="text" className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_code_name"/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Robot Type: </label>
                    <input type="text" className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_type"/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Option 1:</label>
                    <input type="text" className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_op1"/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Option 2: </label>
                    <input type="text" className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_op2"/>
                </div>

                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Submit
                </button>
            </form>
        </div>
        )
    }
}

export default Register