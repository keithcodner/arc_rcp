import React from 'react'

import {Layout} from '../layout';

const RegisterUser = () => (
    <Layout>
        <h1 className="text-2xl">Create User</h1>
        <form className="flex flex-col space-y-8 w-1/2 m-auto">

            <div className="flex flex-col text-left">
                <label htmlFor="">Username: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Password: </label>
                <input type="password" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Email:</label>
                <input type="email" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 1: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">Option 2: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
            <div className="flex flex-col text-left">
                <label htmlFor="">User Type: </label>
                <input type="text" className="p-2 rounded" id=""/>
            </div>
        </form>
    </Layout>
);

export default RegisterUser