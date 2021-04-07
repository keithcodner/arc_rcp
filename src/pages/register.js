import React, {Component} from 'react'
import {postArcData, 
    getCurrDateTime, 
    getArcData, 
    anID_R_Gen, 
    anID_C_Gen} from '../utils/sh'

class Register  extends Component{

    constructor(props){
        super(props)
        this.state={
            r_usr_an_id : anID_R_Gen(),
            r_usr_code_name : null,
            r_usr_ip : "1.1.1.1",
            r_usr_status : "Active",
            r_usr_type : "DevBot",
            r_usr_op1 : "",
            r_usr_op2 : "",
            r_usr_date_created : getCurrDateTime()
        }
    }
   
    handleSubmit = async (event) =>{
        event.preventDefault()
        const data = this.state
        const uri = 'http://localhost:3000/api/arc_db/arc_r_users/r_usrs'
        const uri2 = 'http://localhost:3000/api/arc_db/arc_r_users/'
        const uri3 = 'http://localhost:3000/api/arc_db/arc_r_users/r_usr_an_id/'
        
        //alert(data)
        //console.log(getArcData(uri2))
        //postArcData(uri, this.state)
        //console.log(anIDGen(uri3))
        let mmm = await anID_R_Gen(uri3)
        console.log(mmm)
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    render(){
        //const{r_usr_code_name} = this.state

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