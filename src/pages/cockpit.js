import React, {useState, useEffect, useRef} from 'react'
//import $ from 'jquery';
import '../../src/lib/snes-ctrl/styles.css'
import {
        btnStyle, 
        anID_Cmd_Gen,
        getCurrDateTime,
        postArcData,
        createANID,
        arc_c_usrs__GET,
        arc_r_usrs__GET,
        arc_ctrl_table__AN_GET_By_C_User,
        arc_ctrl_table__GET,
        arc_cmd_table__POST
} from '../utils/sh'

function Cockpit(){
    
    const consoleOutput = useRef(null);

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
    const [controllerMap, setControllerMap] = useState({
        ctrl_index_left : "",
        ctrl_index_right : "",
        ctrl_arrow_up : "",
        ctrl_arrow_down : "",
        ctrl_arrow_left: "",
        ctrl_arrow_right: "",
        ctrl_btn_x: "",
        ctrl_btn_y:"",
        ctrl_btn_a:"",
        ctrl_btn_b: "",
        ctrl_btn_start:"",
        ctrl_btn_select:""
    });
    const [sendCommandData, setSendCommandData] = useState({
        cmd_an_id : "0",
        r_usr_an_id : "0",
        c_usr_an_id : "0",
        r_usr_code_name : "0",
        cmd_exec_name : "0",
        cmd_exec_params : "0",
        cmd_exec_data : "0",
        cmd_status : "0",
        cmd_op1 : "0",
        cmd_op2 : "0",
        cmd_op3 : "0",
        cmd_date_created : "0",
        cmd_date_executed : "1970-01-01 00:00:00"
    })   
    const [idContainer, setIDContainer] = useState({
        ctrl_id : "0",
        ctrl_an_id : "0",
        c_usr_an_id : "0",
        r_usr_an_id : "0"
    });
    const [currentConsoleOutput, setCurrentConsoleOutput] = useState([
        ""
    ]);
    const [consoleTextAreaValue, setConsoleTextAreaValue] = useState([
        "Startng Up Console...."
    ]);

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
        // event.preventDefault();
        
        // const cus = localStorage.getItem('createOrUpdate_State')
        
        // if(cus === 'create'){
    
        //     postArcData(arc_ctrl_table__POST, ctrl_fields)
        //     alert("Your controls have been created!")
            
        // }else if(cus === 'update'){
        //     //since we can only update by id, we need to get the id
        //     patchArcData(arc_ctrl_table__PATCH, ctrl_fields, ctrl_fields.ctrl_id)
        //     alert("Your controls have been updated!")
        // }
    }

    async function sendTest(event) {
        
    }

    async function sendConnectToken(event) {
        
    }

    async function getRobotStatus(event) {
        
    }

    async function updateConsoles(msg) {
        // Add commands to console screen
        setConsoleTextAreaValue(prevState => [
            ...prevState,
            '\n' + msg
        ])

        //update current console
        setCurrentConsoleOutput([msg])

        //Scroll down
        var textarea = document.getElementById('mainConsole');
        textarea.scrollTop = textarea.scrollHeight 
    }

    async function execCtrlOperation(key, mappedCtrl, params="0", datas="0", op1="0", op2="0", op3="0") {
        let keyInput = key + ' => ' + mappedCtrl

        if(idContainer.ctrl_id === "0" || idContainer.ctrl_an_id === "0" || idContainer.c_usr_an_id === "0" || idContainer.r_usr_an_id === "0"){

            //Error message for id validation check
            let ctrlAndRobotNotSetError = "ERROR: Your robot or controls aren't set yet. Set those first and connect to your robot before issuing a command."
            alert('Command was not sent to Robot!')

            //Update cosnole
            updateConsoles(ctrlAndRobotNotSetError)
            
        }else{

            //Update cosnole
            updateConsoles(keyInput)

            //Assign Command
            setSendCommandData(prevState => {
                return{
                    ...prevState,
                    cmd_an_id : prevState = createANID(40),
                    r_usr_an_id : prevState = idContainer.r_usr_an_id,
                    c_usr_an_id : prevState = idContainer.c_usr_an_id,
                    r_usr_code_name : prevState = appVars.botConnectedName,
                    cmd_exec_name : prevState = mappedCtrl,
                    cmd_exec_params : prevState = params,
                    cmd_exec_data : prevState = datas,
                    cmd_status : prevState = "UNEXECUTED",
                    cmd_op1 : prevState = op1,
                    cmd_op2 : prevState = op2,
                    cmd_op3 : prevState = op3,
                    cmd_date_created : prevState = getCurrDateTime(),
                    cmd_date_executed : prevState = "1970-01-01 00:00:00"
                }
            })

            postArcData(arc_cmd_table__POST, sendCommandData)

            console.log(sendCommandData)
        }
    }

    async function handleControllerClick(event) {

        const controllerID = event.target.attributes.data1.value
        const mappedKey = controllerMap
        
        if(controllerID === 'ctrl_arrow_up'){
            execCtrlOperation(controllerID, mappedKey.ctrl_arrow_up, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_arrow_down'){
            execCtrlOperation(controllerID, mappedKey.ctrl_arrow_down, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_arrow_left'){
            execCtrlOperation(controllerID, mappedKey.ctrl_arrow_left, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_arrow_right'){
            execCtrlOperation(controllerID, mappedKey.ctrl_arrow_right, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_index_left'){
            execCtrlOperation(controllerID, mappedKey.ctrl_index_left, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_index_right'){
            execCtrlOperation(controllerID, mappedKey.ctrl_index_right, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_btn_y'){
            execCtrlOperation(controllerID, mappedKey.ctrl_btn_y, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_btn_x'){
            execCtrlOperation(controllerID, mappedKey.ctrl_btn_x, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_btn_b'){
            execCtrlOperation(controllerID, mappedKey.ctrl_btn_b, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_btn_a'){
            execCtrlOperation(controllerID, mappedKey.ctrl_btn_a, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_btn_start'){
            execCtrlOperation(controllerID, mappedKey.ctrl_btn_start, "0", "0", "0", "0", "0")
        }else if(controllerID === 'ctrl_btn_select'){
            execCtrlOperation(controllerID, mappedKey.ctrl_btn_select, "0", "0", "0", "0", "0")
        }

        console.log(event)
    }

    async function handleBotSelect(event) {

        //Console Message
        let robotSelectMessage = "CONSOLE: Your Robot ["+event.target.options[event.target.selectedIndex].text+"] has been selected. "

        //update app vars
        setAppVars(prevState => {
            return { 
                ...prevState,
                setOrNotSet1: prevState = "[Robot Set!]",
                botConnectedID: prevState = event.target.value,
                botConnectedName: prevState = event.target.options[event.target.selectedIndex].text,
                red_or_Green_Txt1: prevState = "text-green-700 font-bold text-lg"
            }
        })
        
        //update ID container
        setIDContainer(prevState => {
            return{
                ...prevState,
                r_usr_an_id : prevState = event.target.value
            }
        })

        //Update cosnole
        updateConsoles(robotSelectMessage)
    }

    async function handleControllerSelect(event) {

        //Console Message
        let controlSelectMessage = "CONSOLE: Your User Controls for ["+event.target.options[event.target.selectedIndex].text+"] have been loaded."
        
        setAppVars(prevState => {
            return { 
                ...prevState,
                setOrNotSet2: prevState = "[User Controls Set!]",
                selectedCtrlID: prevState = event.target.value,
                selectedCtrlName: prevState = event.target.options[event.target.selectedIndex].text,
                red_or_Green_Txt2: prevState = "text-green-700 font-bold text-lg"
            }
        })

        // API request to get controller data
        const resp_selected_controller = await fetch(arc_ctrl_table__AN_GET_By_C_User+event.target.value)
        const selected_data_controller = await resp_selected_controller.json()

        setControllerMap(prevState => {
            return { 
                ...prevState,
                ctrl_index_left: prevState = selected_data_controller.ctrl_index_left,
                ctrl_index_right: prevState = selected_data_controller.ctrl_index_right,
                ctrl_arrow_up: prevState = selected_data_controller.ctrl_arrow_up,
                ctrl_arrow_down: prevState = selected_data_controller.ctrl_arrow_down,
                ctrl_arrow_left: prevState = selected_data_controller.ctrl_arrow_left,
                ctrl_arrow_right: prevState = selected_data_controller.ctrl_arrow_right,
                ctrl_btn_x: prevState = selected_data_controller.ctrl_btn_x,
                ctrl_btn_y: prevState = selected_data_controller.ctrl_btn_y,
                ctrl_btn_a: prevState = selected_data_controller.ctrl_btn_a,
                ctrl_btn_b: prevState = selected_data_controller.ctrl_btn_b,
                ctrl_btn_start: prevState = selected_data_controller.ctrl_btn_start,
                ctrl_btn_select: prevState = selected_data_controller.ctrl_btn_select
            }
        })

        //update ID container
        setIDContainer(prevState => {
            return{
                ...prevState,
                c_usr_an_id: prevState = event.target.value,
                ctrl_id : prevState = selected_data_controller.ctrl_id,
                ctrl_an_id : prevState = selected_data_controller.ctrl_an_id,
            }
        })

        //Update cosnole
        updateConsoles(controlSelectMessage)

        console.log(idContainer)
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
                    <div id="mainConsole" className="overflow-auto h-32 bg-black rounded-lg text-white leading-6" style={{ whiteSpace: 'pre-wrap' }} ref={consoleOutput} abindex='1' readOnly>
                        {consoleTextAreaValue}
                    </div>
                    <div id="currentCommand" className="overflow-auto h-6 bg-purple-900 rounded-lg text-yellow-200 leading-6"  ref={consoleOutput} abindex='1' readOnly>
                        {currentConsoleOutput}
                    </div>
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
                                    <button onClick={sendConnectToken} className={btnStyle}>
                                        Connect
                                    </button>
                                </div>
                                <div className="w-1/6 h-20 flex items-center">
                                    <button onClick={getRobotStatus} className={btnStyle}>
                                        Get Status
                                    </button>
                                </div>
                                <div className="w-1/6 h-20 flex items-center">
                                    <button onClick={sendTest} className={btnStyle}>
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
