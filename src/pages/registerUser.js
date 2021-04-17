import React, {Component} from 'react'
import {postArcData, 
    getCurrDateTime, 
    getArcData,
    anID_C_Gen} from '../utils/sh'

class RegisterUser extends Component{
    constructor(props){
        super(props)
        this.state={
            "c_usr_an_id":"",
            "r_usr_an_id":"ASDF123",
            "c_usr_name":"",
            "c_usr_pwd":"",
            "c_usr_pwd_hash":"null",
            "c_usr_email":"",
            "c_usr_ip":"localhost",
            "c_usr_status":"Active",
            "c_usr_op1":"0",
            "c_usr_op2":"0",
            "c_usr_type":"User",
            "c_usr_date_created": getCurrDateTime()
        }

        //localStorage.setItem("r_data","{}")
    }

    componentDidMount = async () =>{
        const getC_USR_AN_ID = await anID_C_Gen()
        this.setState({"c_usr_an_id": getC_USR_AN_ID})

        const getR_Name_And_ID = await getArcData('http://localhost:3000/api/arc_db/arc_r_users/')

        localStorage.setItem("r_data", JSON.stringify(getR_Name_And_ID.data));
    }

    componentWillUnmount = async (event) =>{
        
    }
   
    handleSubmit = async (event) =>{
        event.preventDefault()
        const data = this.state
        const uri = 'http://localhost:3000/api/arc_db/arc_c_users/c_usrs'
        
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
        const r_data = JSON.parse(localStorage.getItem('r_data'))
        const optionList = Object.entries(r_data).map(key => {
            return(
                <option value={key[1].r_usr_an_id}  >{key[1].r_usr_code_name}</option>
            )
        })

        return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">
        <h1 className="text-2xl">Create User</h1>
        <form onSubmit={this.handleSubmit}>

            <div className="flex flex-col text-left">
                <label htmlFor="">Username: </label>
                <input onChange={this.handleInputChange} type="text" className="p-2 rounded" name="c_usr_name"/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Password: </label>
                <input onChange={this.handleInputChange} type="password" className="p-2 rounded" name="c_usr_pwd"/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Email:</label>
                <input onChange={this.handleInputChange} type="email" className="p-2 rounded" name="c_usr_email"/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">User Type: </label>
                <select onChange={this.handleInputChange} className="p-2 rounded" name="c_usr_type">
                        <option value="User">User</option>
                        <option value="Power_User">Power User</option>
                        <option value="Admin">Admin</option>
                </select>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Select Robot: </label>
                <select onChange={this.handleInputChange} className="p-2 rounded" name="r_usr_an_id">
                        {optionList}
                    </select>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 1: </label>
                <input onChange={this.handleInputChange} type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 2: </label>
                <input onChange={this.handleInputChange} type="text" className="p-2 rounded" id=""/>
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

export default RegisterUser