import React, {useState, useEffect} from 'react'
import $ from 'jquery';
import '../../src/lib/snes-ctrl/styles.css'
import {postArcData, 
        patchArcData,
        btnStyle, 
        anID_C_Gen, 
        arc_ctrl_table__POST,
        arc_c_usrs__GET,
        arc_r_usrs__GET,
        arc_cmd_list_table__GET,
        arc_ctrl_table__GET,
        arc_ctrl_table__PATCH
} from '../utils/sh'

function Cockpit(){
    

    var createdOrUpdate = 'create'
    const [consoleTextAreaValue, setConsoleTextAreaValue] = useState([
        "Startng Up Console...."
    ]);
    const [c_usr_data, setC_Usr_Data] = useState(null)
    const [r_usr_data, setR_Usr_Data] = useState(null)
    const [c_ctrl_data, setCtrl_Data] = useState(null)
    
    const [appVars, setAppVars] = useState({
        setOrNotSet1 : "[Not Set]",
        setOrNotSet2 : "[Not Set]",
        red_or_Green_Txt1 : "text-red-700 font-bold text-lg",
        red_or_Green_Txt2 : "text-red-700 font-bold text-lg",
        isConnected: "false",
        botConnectedID: "",
        botConnectedName: "",
        selectedCtrlID:"",
        selectedCtrlName:"",
        default_option: <option value="0"  >-- Pick Control --</option>
    });
    const [ctrl_fields, setHandleFieldChange] = useState({
        ctrl_id : "0",
        ctrl_an_id : "0",
        c_usr_an_id : "0"
    });

    useEffect(async() =>{
        const response_arc_c_users = await fetch(arc_c_usrs__GET)
        const response_arc_r_users = await fetch(arc_r_usrs__GET)
        const response_arc_ctrl_table = await fetch(arc_ctrl_table__GET)

        const data_arc_c_users = await response_arc_c_users.json()
        const data_arc_r_users = await response_arc_r_users.json()
        const data_arc_ctrl_data = await response_arc_ctrl_table.json()

        const optionList_C_Usr = Object.entries(data_arc_c_users).map(key => {
            return(
                <option text={key[1].c_usr_name} value={key[1].c_usr_an_id}  >{key[1].c_usr_name}</option>
            )
        })

        const optionList_R_Usr = Object.entries(data_arc_r_users).map(key => {
            return(
                <option text={key[1].r_usr_code_name} value={key[1].r_usr_an_id}  >{key[1].r_usr_code_name}</option>
            )
        })


        setC_Usr_Data(optionList_C_Usr)
        setR_Usr_Data(optionList_R_Usr)

    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        
        const cus = localStorage.getItem('createOrUpdate_State')
        
        if(cus === 'create'){
    
            postArcData(arc_ctrl_table__POST, ctrl_fields)
            alert("Your controls have been created!")
            
        }else if(cus === 'update'){
            //since we can only update by id, we need to get the id
            patchArcData(arc_ctrl_table__PATCH, ctrl_fields, ctrl_fields.ctrl_id)
            alert("Your controls have been updated!")
        }
    }

    async function handleC_Usr_Set(key) {
        
    }

    async function execCtrlOperation(key) {
        console.log(key)
        setConsoleTextAreaValue(prevState => [
            ...prevState,
            '\r\n' + key
        ])

        $('#mainConsole').scrollTop($('#mainConsole')[0].scrollHeight);
    }

    async function handleControllerClick(event) {

        const controllerID = event.target.attributes.data1.value
        
        if(controllerID === 'ctrl_arrow_up'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_arrow_down'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_arrow_left'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_arrow_right'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_index_left'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_index_right'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_btn_y'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_btn_x'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_btn_b'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_btn_a'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_btn_start'){
            execCtrlOperation(controllerID)
        }else if(controllerID === 'ctrl_btn_select'){
            execCtrlOperation(controllerID)
        }

        console.log(event)
    }

    async function handleBotSelect(event) {
        setAppVars(prevState => {
            return { 
                ...prevState,
                setOrNotSet1: prevState = "[Set!]",
                botConnectedID: prevState = event.target.value,
                botConnectedName: prevState = event.target.options[event.target.selectedIndex].text,
                red_or_Green_Txt1: prevState = "text-green-700 font-bold text-lg"
            }
        })
    }

    async function handleControllerSelect(event) {
        
        setAppVars(prevState => {
            return { 
                ...prevState,
                setOrNotSet2: prevState = "[Set!]",
                botConnectedID: prevState = event.target.value,
                botConnectedName: prevState = event.target.options[event.target.selectedIndex].text,
                red_or_Green_Txt2: prevState = "text-green-700 font-bold text-lg"
            }
        })
    }
    
    return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">
            
            <div >
                <div className="container">
                    <div className="bumper bumper--left" data1="ctrl_index_left" onClick={handleControllerClick}></div>
                    <div className="bumper bumper--right" data1="ctrl_index_right" onClick={handleControllerClick}></div>
                    <div className="controller">
                        <div className="controller__cord"></div>
                        <div className="left-pad">
                        <div className="dpad">
                            <div className="dpad__button button--vertical">
                            <div className="dpad__arrow arrow--top" data1="ctrl_arrow_up"  onClick={handleControllerClick}></div>
                            <div className="dpad__arrow arrow--bottom" data1="ctrl_arrow_down"  onClick={handleControllerClick}></div>
                            </div>
                            <div className="dpad__button button--horizontal">
                            <div className="dpad__center">
                                <div className="dpad__circle"></div>
                            </div>
                            <div className="dpad__arrow arrow--left" data1="ctrl_arrow_left"  onClick={handleControllerClick}></div>
                            <div className="dpad__arrow arrow--right" data1="ctrl_arrow_right"  onClick={handleControllerClick}></div>
                            </div>
                        </div>
                        </div>
                        <div className="middle-pad">
                        <div className="logo">
                            <h1 className="logo__header">Super Lonaris</h1>
                            <h2 className="logo__byline">Automated Remote Control System</h2>
                        </div>
                        <div className="start-select">
                            <div className="start-select__button button--start" >
                            <div className="start-select__interior" data1="ctrl_btn_start" onClick={handleControllerClick}></div>
                            </div>
                            <div className="start-select__button button--select" >
                            <div className="start-select__interior" data1="ctrl_btn_select" onClick={handleControllerClick}></div>
                            </div>
                        </div>
                        </div>
                        <div className="right-pad">
                        <div className="right-controls">
                            <div className="right-controls__circle"></div>
                            <div className="button-group button-group--top">
                            <div className="button-group__button button--x" data1="ctrl_btn_x" onClick={handleControllerClick}></div>
                            <div className="button-group__button button--y" data1="ctrl_btn_y" onClick={handleControllerClick}></div>
                            </div>
                            <div className="button-group button-group--bottom">
                            <div className="button-group__button button--a"  data1="ctrl_btn_a" onClick={handleControllerClick}></div>
                            <div className="button-group__button button--b" data1="ctrl_btn_b" onClick={handleControllerClick}></div>
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
                    <textarea id="mainConsole" value={consoleTextAreaValue} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="5" readOnly></textarea>
                </div>
                <div>
                    <div className="border-4 border-blue-600">
                        <h1 className="text-xl">Choose your robot and configuration:</h1>
                        <div className="flex flex-wrap">

                                <div className="w-1/3 h-20 flex items-center">
                                    <label htmlFor=""><b>1. </b></label>
                                    <select className="p-2 rounded" name="c_usr_an_id" onChange={handleBotSelect}>
                                        <option value="0"  >-- Pick Your Bot --</option>
                                        {r_usr_data}
                                    </select>
                                </div>
                                <div className="w-1/6 h-20 flex items-center">
                                    <span className={appVars.red_or_Green_Txt1}>{appVars.setOrNotSet1}</span>
                                </div>
                                <div className="w-1/6 h-20 flex items-center">
                                    <button onClick={handleC_Usr_Set} className={btnStyle}>
                                        Connect
                                    </button>
                                </div>
                                <div className="w-1/6 h-20 flex items-center">
                                    <button onClick={handleC_Usr_Set} className={btnStyle}>
                                        Get Status
                                    </button>
                                </div>
                                <div className="w-1/6 h-20 flex items-center">
                                    <button onClick={handleC_Usr_Set} className={btnStyle}>
                                        test
                                    </button>
                                </div>
                        </div>
                        <div className="flex flex-wrap">

                                <div className="w-1/3 h-20 flex items-center">
                                    <label htmlFor=""><b>2. </b></label> 
                                    <select className="p-2 rounded" name="r_usr_an_id" onChange={handleControllerSelect}>
                                        <option value="0"  >-- Pick Control --</option>
                                         {c_usr_data}
                                    </select>
                                </div>
                                <div className="w-1/3 h-20 flex items-center">
                                    <span className={appVars.red_or_Green_Txt2}>{appVars.setOrNotSet2}</span>
                                </div>
                                
                        </div>
                        <div className="flex flex-wrap">
                                
                                
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Cockpit