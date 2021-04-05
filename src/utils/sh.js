import React, {Component} from 'react'

export async function postArcData(apiLink, data){
    try{
        let result = await fetch(apiLink,{
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data)
        });
    }catch(e){
        console.log(e)
    }

}

