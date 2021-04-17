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
            
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    <div class="bumper bumper--left"></div>
                    <div class="bumper bumper--right"></div>
                    <div class="controller">
                        <div class="controller__cord"></div>
                        <div class="left-pad">
                        <div class="dpad">
                            <div class="dpad__button button--vertical">
                            <div class="dpad__arrow arrow--top"></div>
                            <div class="dpad__arrow arrow--bottom"></div>
                            </div>
                            <div class="dpad__button button--horizontal">
                            <div class="dpad__center">
                                <div class="dpad__circle"></div>
                            </div>
                            <div class="dpad__arrow arrow--left"></div>
                            <div class="dpad__arrow arrow--right"></div>
                            </div>
                        </div>
                        </div>
                        <div class="middle-pad">
                        <div class="logo">
                            <h1 class="logo__header">Super Nintendo</h1>
                            <h2 class="logo__byline">Entertainment System</h2>
                        </div>
                        <div class="start-select">
                            <div class="start-select__button button--start">
                            <div class="start-select__interior"></div>
                            </div>
                            <div class="start-select__button button--select">
                            <div class="start-select__interior"></div>
                            </div>
                        </div>
                        </div>
                        <div class="right-pad">
                        <div class="right-controls">
                            <div class="right-controls__circle"></div>
                            <div class="button-group button-group--top">
                            <div class="button-group__button button--x"></div>
                            <div class="button-group__button button--y"></div>
                            </div>
                            <div class="button-group button-group--bottom">
                            <div class="button-group__button button--a"></div>
                            <div class="button-group__button button--b"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
            </form>
        </div>
        )
    }
}

export default Cockpit