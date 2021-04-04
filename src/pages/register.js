import React, {Component} from 'react'
import {Layout} from '../layout';

class Register  extends Component{

    constructor(props){
        super(props)
        this.state={
            r_usr_an_id : "ASDF124",
            r_usr_code_name : null,
            r_usr_ip : "2.3.4.6",
            r_usr_status : "In-Active",
            r_usr_type : null,
            r_usr_op1 : null,
            r_usr_op2: null,
            r_usr_date_created : "2021-03-05T05:55:57.000Z"
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const  data = this.state
        alert(data);
        console.log(data);
        postRegisterData("test");
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async postRegisterData(test){

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