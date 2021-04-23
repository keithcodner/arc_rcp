import React, {useState, useEffect} from 'react'
import $ from 'jquery';
import {postArcData, 
        patchArcData,
        btnStyle, 
        anID_C_Gen, 
        arc_ctrl_table__POST,
        arc_c_usrs__GET,
        arc_cmd_list_table__GET,
        arc_c_usrs__AN_GET,
        arc_ctrl_table__GET
} from '../utils/sh'

function ControlsComponent(){
    
    let createdOrUpdate = 'create'

    const [appVars, setAppVars] = useState({
        setOrNotSet : "Not Set",
        red_or_Green_Txt : "text-red-700 font-bold text-lg",
        default_option: <option value="0"  >-- Pick Control --</option>
    });

    const [c_usr_data, setC_Usr_Data] = useState(null)
    const [c_cmd_lst_data, setC_Cmd_List] = useState(null)
    const [ctrl_fields, setHandleFieldChange] = useState({
        ctrl_an_id : "0",
        c_usr_an_id : "0",
        ctrl_arrow_up : "0",
        ctrl_arrow_down : "0",
        ctrl_arrow_left : "0",
        ctrl_arrow_right : "0",
        ctrl_index_left : "0",
        ctrl_index_right : "0",
        ctrl_btn_y : "0",
        ctrl_btn_x : "0",
        ctrl_btn_b : "0",
        ctrl_btn_a : "0",
        ctrl_btn_start : "0",
        ctrl_btn_select : "0",
        ctrl_combo_1 : "0",
        ctrl_combo_2 : "0",
        ctrl_combo_3 : "0",
        ctrl_combo_4 : "0",
        ctrl_combo_5 : "0",
        ctrl_combo_6 : "0"
    });

    useEffect(async() =>{
        const response_arc_c_users = await fetch(arc_c_usrs__GET)
        const response_arc_cmd_list_table = await fetch(arc_cmd_list_table__GET)

        const data_arc_c_users = await response_arc_c_users.json()
        const data_arc_cmd_lst = await response_arc_cmd_list_table.json()

        const optionList_C_Usr = Object.entries(data_arc_c_users).map(key => {
            return(
                <option value={key[1].c_usr_an_id}  >{key[1].c_usr_name}</option>
            )
        })

        const optionList_C_Cmd_List = Object.entries(data_arc_cmd_lst).map(key => {
            return(
                <option value={key[1].cmd_lst_an_id}  >{key[1].cmd_exec_name}</option>
            )
        })

        setC_Usr_Data(optionList_C_Usr)
        setC_Cmd_List(optionList_C_Cmd_List)
 
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();

        if(createdOrUpdate == 'create'){
            setHandleFieldChange({
                ...ctrl_fields, [event.target.name]: event.target.value
            })
    
            postArcData(arc_ctrl_table__POST, ctrl_fields)
            
        }else if(createdOrUpdate == 'update'){
            setHandleFieldChange({
                ...ctrl_fields, [event.target.name]: event.target.value
            })
    
            //patchArcData(arc_ctrl_table__POST, ctrl_fields)
            console.log(ctrl_fields)
        }
    }

    async function handleFieldChange(event) {

        const getCtrl_AN_ID = await anID_C_Gen()
        setHandleFieldChange({
            ...ctrl_fields, 
            [event.target.name]: event.target.value,
            ctrl_an_id: getCtrl_AN_ID
        })

    
    }

    async function resetSelectToDefault(){
        $('select[name="ctrl_arrow_up"]').val('0');
        $('select[name="ctrl_arrow_down"]').val('0');
        $('select[name="ctrl_arrow_left"]').val('0');
        $('select[name="ctrl_arrow_right"]').val('0');
        $('select[name="ctrl_btn_a"]').val('0');
        $('select[name="ctrl_btn_b"]').val('0');
        $('select[name="ctrl_btn_x"]').val('0');
        $('select[name="ctrl_btn_y"]').val('0');
        $('select[name="ctrl_btn_select"]').val('0');
        $('select[name="ctrl_btn_start"]').val('0');
        $('select[name="ctrl_index_left"]').val('0');
        $('select[name="ctrl_index_right"]').val('0');
    }

    async function handleFieldChange_usr(event) {

        createdOrUpdate = 'create'
        resetSelectToDefault()


        const check_c_usr_ANID = event.target.value
        const check_ctrl_ANID_raw = await fetch(arc_ctrl_table__GET) 
        const check_ctrl_ANID_json = await check_ctrl_ANID_raw.json()
        const check_ctrl_ANID_loop = Object.entries(check_ctrl_ANID_json).map(key => {
            if(key[1].c_usr_an_id == check_c_usr_ANID){
                createdOrUpdate = 'update'

                $('select[name="ctrl_arrow_up"]').val(key[1].ctrl_arrow_up);
                $('select[name="ctrl_arrow_down"]').val(key[1].ctrl_arrow_down);
                $('select[name="ctrl_arrow_left"]').val(key[1].ctrl_arrow_left);
                $('select[name="ctrl_arrow_right"]').val(key[1].ctrl_arrow_right);
                $('select[name="ctrl_btn_a"]').val(key[1].ctrl_btn_a);
                $('select[name="ctrl_btn_b"]').val(key[1].ctrl_btn_b);
                $('select[name="ctrl_btn_x"]').val(key[1].ctrl_btn_x);
                $('select[name="ctrl_btn_y"]').val(key[1].ctrl_btn_y);
                $('select[name="ctrl_btn_select"]').val(key[1].ctrl_btn_select);
                $('select[name="ctrl_btn_start"]').val(key[1].ctrl_btn_start);
                $('select[name="ctrl_index_left"]').val(key[1].ctrl_index_left);
                $('select[name="ctrl_index_right"]').val(key[1].ctrl_index_right);

                console.log(key[1].c_usr_an_id + ' ~ u')
            }
        })
        
        if(createdOrUpdate == 'create'){
            setHandleFieldChange({
                ...ctrl_fields, [event.target.name]: event.target.value
            })
    
            setAppVars(newState => {
                return { 
                    setOrNotSet: newState = "Set! [CREATE MODE]",
                    red_or_Green_Txt : newState = "text-green-700 font-bold text-lg",
                    default_option: newState = <option value="0"  >-- Pick Control --</option>
                }
            })

        }else if(createdOrUpdate == 'update'){
            setHandleFieldChange({
                ...ctrl_fields, [event.target.name]: event.target.value
            })
    
            setAppVars(newState => {
                return { 
                    setOrNotSet: newState = "Set! [UPDATE MODE]",
                    red_or_Green_Txt : newState = "text-green-700 font-bold text-lg",
                    default_option: newState = <option value="0"  >-- Pick Control --</option>
                }
            })
            /* 
                ctrl_an_id = d3b7735896, 
                c_usr_an_id = QWERT125, 
                up = ABC12345, 
                down = ABC12346, 
                left = ABC12347, 
                right = ABC12348
            */
        }
    }

    async function handleC_Usr_Set() {
        console.log(ctrl_fields)
        
    }
   
    return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">

            <div className="border-4 border-blue-600">
                <div className="flex flex-wrap">

                        <div className="w-1/4 h-20 flex items-center">
                            <label htmlFor=""><b> Choose a user:</b></label>
                         </div>
                        <div className="w-1/4 h-20 flex items-center">
                            <select className="p-2 rounded" name="c_usr_an_id" onChange={handleFieldChange_usr}>
                            <option value="0"  >-- Pick User --</option>
                                {c_usr_data}
                             </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center">
                            <button onClick={handleC_Usr_Set} className={btnStyle}>
                                test
                            </button> 
                        </div>
                        <div className="w-1/4 h-20 flex items-center">
                            <span className={appVars.red_or_Green_Txt}>{appVars.setOrNotSet}</span>
                        </div>
                </div>
            </div>

            <div className="border-4 border-blue-600">
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                            <label htmlFor=""><b>Arrow Up: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_up">
                                {appVars.default_option} {c_cmd_lst_data}
                             </select>
                         </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Arrow Down: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_down">
                                {appVars.default_option} {c_cmd_lst_data}
                             </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Arrow Left: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_left">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Arrow Right: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_right">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button A: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_a">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button B: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_b">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button X: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_x">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Y: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_y">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Index-Left: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_index_left">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Index-Right: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_index_right">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Start: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_start">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        <div className="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Select: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_select">
                                {appVars.default_option} {c_cmd_lst_data}
                            </select>
                        </div>
                        

                        <button className={btnStyle}>
                            Submit/Update
                        </button> 
                </form>
            </div>
        </div>
    )
    
}

export default ControlsComponent