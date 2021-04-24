import React, {Component} from 'react'
import {postArcData, 
    getCurrDateTime, 
    getArcData,
    anID_Cmd_Lst_Gen} from '../utils/sh'
import '../../src/lib/snes-ctrl/styles.css'
import { v4 as uuidv4 } from 'uuid';


class Cockpit extends Component{
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

        //localStorage.setItem("cmd_lst_data", JSON.stringify(getR_Name_And_ID.data));
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
            
            <div >
                <div className="container">
                    <div className="bumper bumper--left"></div>
                    <div className="bumper bumper--right"></div>
                    <div className="controller">
                        <div className="controller__cord"></div>
                        <div className="left-pad">
                        <div className="dpad">
                            <div className="dpad__button button--vertical">
                            <div className="dpad__arrow arrow--top"></div>
                            <div className="dpad__arrow arrow--bottom"></div>
                            </div>
                            <div className="dpad__button button--horizontal">
                            <div className="dpad__center">
                                <div className="dpad__circle"></div>
                            </div>
                            <div className="dpad__arrow arrow--left"></div>
                            <div className="dpad__arrow arrow--right"></div>
                            </div>
                        </div>
                        </div>
                        <div className="middle-pad">
                        <div className="logo">
                            <h1 className="logo__header">Super Nintendo</h1>
                            <h2 className="logo__byline">Entertainment System</h2>
                        </div>
                        <div className="start-select">
                            <div className="start-select__button button--start">
                            <div className="start-select__interior"></div>
                            </div>
                            <div className="start-select__button button--select">
                            <div className="start-select__interior"></div>
                            </div>
                        </div>
                        </div>
                        <div className="right-pad">
                        <div className="right-controls">
                            <div className="right-controls__circle"></div>
                            <div className="button-group button-group--top">
                            <div className="button-group__button button--x"></div>
                            <div className="button-group__button button--y"></div>
                            </div>
                            <div className="button-group button-group--bottom">
                            <div className="button-group__button button--a"></div>
                            <div className="button-group__button button--b"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="">
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br />
                    <h1 className="text-xl">Cockpit Console:</h1>
                    <textarea className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="9"></textarea>
                </div>
                <div>
                    <div className="border-4 border-blue-600">
                        <div className="flex flex-wrap">

                                <div className="w-1/4 h-20 flex items-center">
                                    <label htmlFor=""><b> Choose a user:</b></label>
                                </div>
                                <div className="w-1/4 h-20 flex items-center">
                                    <select className="p-2 rounded" name="c_usr_an_id" >
                                    <option value="0"  >-- Pick User --</option>
                                      
                                    </select>
                                </div>
                                <div className="w-1/4 h-20 flex items-center">
                                    <button >
                                        test
                                    </button> 
                                </div>
                                <div className="w-1/4 h-20 flex items-center">
                                    <span ></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cockpit