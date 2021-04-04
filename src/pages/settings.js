import React, {Component} from 'react'
import reactDom from 'react-dom';

import {Layout} from '../layout';

class Settings extends Component{
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
            <h1 className="text-2xl">Manage Settings:</h1>
            <h2 className="text-1xl">Add A Command:</h2>

            <form >
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Execution Name: </label>
                    <input type="text" className="p-2 rounded" id=""/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Description: </label>
                    <textarea type="text" className="p-2 rounded" id=""></textarea>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Status:</label>
                    <input type="text" className="p-2 rounded" id=""/>
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="">Command Type: </label>
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

export default Settings