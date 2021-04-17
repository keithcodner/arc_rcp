import React, {Component, useState, useEffect} from 'react'
import useFormFields from '@usereact/use-form-fields'
import {postArcData, 
    getCurrDateTime, 
    getArcData,
    anID_Cmd_Lst_Gen,
    btnStyle} from '../utils/sh'

function ControlsComponent(){

    const [c_usr_data, setC_Usr_Data] = useState(null)
    const [c_cmd_lst_data, setC_Cmd_List] = useState(null)
    const [fields, handleFieldChange] = useFormFields({
        ctrl_an_id : "",
        c_usr_an_id : "",
        ctrl_arrow_up : "",
        ctrl_arrow_down : "",
        ctrl_arrow_left : "",
        ctrl_arrow_right : "",
        ctrl_index_left : "",
        ctrl_index_right : "",
        ctrl_btn_y : "",
        ctrl_btn_x : "",
        ctrl_btn_b : "",
        ctrl_btn_a : "",
        ctrl_btn_start : "",
        ctrl_btn_select : "",
        ctrl_combo_1 : "",
        ctrl_combo_2 : "",
        ctrl_combo_3 : "",
        ctrl_combo_4 : "",
        ctrl_combo_5 : "",
        ctrl_combo_6 : ""
    });

    useEffect(async() =>{
        const response_arc_c_users = await fetch("http://localhost:3000/api/arc_db/arc_c_users")
        const response_arc_cmd_list_table = await fetch("http://localhost:3000/api/arc_db/arc_cmd_list_table/")

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

    async function handleSubmit(e) {
        e.preventDefault();
    
    }

    async function handleC_Usr_Set() {
    }

    
   
    
    
    return(
        <div className="flex flex-col space-y-8 w-1/2 m-auto">

            <div class="border-4 border-blue-600">
                <div class="flex flex-wrap">

                        <div class="w-1/4 h-20 flex items-center">
                            <label htmlFor=""><b> Choose a user:</b></label>
                         </div>
                        <div class="w-1/4 h-20 flex items-center">
                            <select className="p-2 rounded" name="c_usr_an_id" onChange={handleFieldChange}>
                                {c_usr_data}
                             </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center">
                            <button onClick={handleC_Usr_Set} className={btnStyle}>
                                Set
                            </button> 
                        </div>
                        <div class="w-1/4 h-20 flex items-center">
                            <span class="text-red-700">Not Set</span>
                        </div>
                </div>
            </div>

            <div class="border-4 border-blue-600">
                <form onSubmit={handleSubmit} class="flex flex-wrap">
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                            <label htmlFor=""><b>Arrow Up: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_up">
                                {c_cmd_lst_data}
                             </select>
                         </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Arrow Down: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_down">
                                {c_cmd_lst_data}
                             </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Arrow Left: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_left">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Arrow Right: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_arrow_right">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button A: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_a">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button B: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_b">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button X: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_x">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Y: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_y">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Index-Left: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_index_left">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Index-Right: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_index_right">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Start: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_start">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        <div class="w-1/4 h-20 flex items-center flex flex-col text-left">
                        <label htmlFor=""><b>Button Select: </b></label>
                            <select className="p-2 rounded " onChange={handleFieldChange} name="ctrl_btn_select">
                                {c_cmd_lst_data}
                            </select>
                        </div>
                        

                        <button className={btnStyle}>
                            Submit
                        </button> 
                </form>
            </div>
        </div>
    )
    
}

export default ControlsComponent