import React, {Component} from 'react'
import {Layout} from '../layout';

class RegisterUser extends Component{
    handleSubmit = (event) =>{
        event.preventDefault()
        alert();
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
    }
    
    
    render(){
        return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">
        <h1 className="text-2xl">Create User</h1>
        <form  >

            <div className="flex flex-col text-left">
                <label htmlFor="">Username: </label>
                <input type="text" className="p-2 rounded" name="username"/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Password: </label>
                <input type="password" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Email:</label>
                <input type="email" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 1: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 2: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">User Type: </label>
                <input type="text" className="p-2 rounded" id=""/>
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