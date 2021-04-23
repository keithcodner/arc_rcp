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
    
    var createdOrUpdate = 'create'
    const [c_usr_data, setC_Usr_Data] = useState(null)
    const [c_cmd_lst_data, setC_Cmd_List] = useState(null)
    const [appVars, setAppVars] = useState({
        setOrNotSet : "Not Set",
        red_or_Green_Txt : "text-red-700 font-bold text-lg",
        default_option: <option value="0"  >-- Pick Control --</option>
    });
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
        
        const cus = localStorage.getItem('createOrUpdate_State')
        
        if(cus === 'create'){
            setHandleFieldChange({
                ...ctrl_fields, [event.target.name]: event.target.value
            })
    
            postArcData(arc_ctrl_table__POST, ctrl_fields)
            alert("Your controls have been created!")
            
        }else if(cus === 'update'){
            setHandleFieldChange({
                ...ctrl_fields, [event.target.name]: event.target.value
            })
    
            //since we can only update by id, we need to get the id
            //patchArcData(arc_ctrl_table__POST, ctrl_fields, ctrl_fields.ctrl_an_id)
            alert("Your controls have been updated!")
        }
    }

    async function handleFieldChange(event) {

        const getCtrl_AN_ID = await anID_C_Gen()
        setHandleFieldChange(prevState => {
            return{
                ...prevState, 
                [event.target.name]: event.target.value,
                ctrl_an_id: getCtrl_AN_ID
            }
        })
        
        
    }

    async function handleFieldChange_usr(event) {

        // clear fields and assume we're creating, logic latter down will determine if we need to update
        createdOrUpdate = 'create'
        resetSelectToDefault()
        resetSelectToDefaultObject()

        //chekc if this person needs an update
        const check_c_usr_ANID = event.target.value
        const check_ctrl_ANID_raw = await fetch(arc_ctrl_table__GET) 
        const check_ctrl_ANID_json = await check_ctrl_ANID_raw.json()
        const check_ctrl_ANID_loop = Object.entries(check_ctrl_ANID_json).map(key => {
            if(key[1].c_usr_an_id === check_c_usr_ANID){
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

                setHandleFieldChange(prevState => {
                    return{
                        ...prevState,
                        c_usr_an_id: check_c_usr_ANID,
                        ctrl_an_id:  key[1].ctrl_an_id,
                        ctrl_arrow_up : key[1].ctrl_arrow_up,
                        ctrl_arrow_down : key[1].ctrl_arrow_down,
                        ctrl_arrow_left : key[1].ctrl_arrow_left,
                        ctrl_arrow_right : key[1].ctrl_arrow_right,
                        ctrl_btn_a : key[1].ctrl_btn_a,
                        ctrl_btn_b : key[1].ctrl_btn_b,
                        ctrl_btn_x : key[1].ctrl_btn_x,
                        ctrl_btn_y : key[1].ctrl_btn_y,
                        ctrl_btn_select : key[1].ctrl_btn_select,
                        ctrl_btn_start : key[1].ctrl_btn_start,
                        ctrl_index_left : key[1].ctrl_index_left,
                        ctrl_index_right : key[1].ctrl_index_right
                    }
                })
                //console.log(key[1].c_usr_an_id + ' ~ u')
            }
        })
        
        //Update vars based on what request they make
        if(createdOrUpdate === 'create'){
            
            setAppVars(prevState => {
                return { 
                    ...prevState,
                    setOrNotSet: prevState = "Set! [CREATE MODE]",
                    red_or_Green_Txt : prevState = "text-green-700 font-bold text-lg"
                }
            })

        }else if(createdOrUpdate === 'update'){
    
            setAppVars(prevState => {
                return { 
                    ...prevState,
                    setOrNotSet: prevState = "Set! [UPDATE MODE]",
                    red_or_Green_Txt : prevState = "text-green-700 font-bold text-lg"
                }
            })
        }

        localStorage.setItem("createOrUpdate_State", createdOrUpdate);
    }

    async function handleC_Usr_Set() {
        console.log(ctrl_fields)
        
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

    async function resetSelectToDefaultObject(){
        setHandleFieldChange({
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
        })
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