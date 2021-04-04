import React from 'react'

import {Layout} from '../layout';

const Register = () => (
    <Layout>
        <h1 className="text-2xl">Register Robot</h1>
        <form className="flex flex-col space-y-8 w-1/2 m-auto">

            <div className="flex flex-col text-left">
                <label htmlFor="">Robot Name: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Robot Type: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 1:</label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 2: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
        </form>
    </Layout>
);

export default Register