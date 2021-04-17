import React, {Component} from 'react'
import {postArcData, 
        getCurrDateTime, 
        anID_R_Gen,
        btnStyle} from '../utils/sh'

class Register  extends Component{

     constructor(props){
        super(props)
        this.state={
            "r_usr_an_id" : '',
            "r_usr_code_name" : "",
            "r_usr_ip" : "1.1.1.1",
            "r_usr_status" : "Active",
            "r_usr_type" : "",
            "r_usr_op1" : "",
            "r_usr_op2" : "",
            "r_usr_date_created" : getCurrDateTime()
        }
    }

    componentDidMount = async () =>{
        const getR_USR_AN_ID = await anID_R_Gen()
        this.setState({"r_usr_an_id": getR_USR_AN_ID})
    }
   
    handleSubmit = async (event) =>{
        event.preventDefault()
        const data = this.state
        const uri = 'http://localhost:3000/api/arc_db/arc_r_users/r_usrs'
        
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
        const{r_usr_ip} = this.state

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
                    <select onChange={this.handleInputChange} className="p-2 rounded" name="r_usr_type">
                        <option value="DevBot">DevBot</option>
                        <option value="Sentenal">Sentenal</option>
                        <option value="Optimus">Optimus</option>
                        <option value="UltronMk1">UltronMk1</option>
                    </select>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Bot IP:</label>
                    <input type="text" value={r_usr_ip} className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_ip"/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Option 1:</label>
                    <input type="text" className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_op1"/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Option 2: </label>
                    <input type="text" className="p-2 rounded" onChange={this.handleInputChange} name="r_usr_op2"/>
                </div>

                <button className={btnStyle}>
                Submit
                </button>
            </form>
        </div>
        )
    }
}

export default Register