import React from 'react'

import {Layout} from '../layout';

const Settings = () => (
    <Layout>
        <h1 className="text-2xl">Settings:</h1>
        <h2 className="text-1xl">Add A Command:</h2>

        <form className="flex flex-col space-y-8 w-1/2 m-auto">
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
        </form>
    </Layout>
);

export default Settings