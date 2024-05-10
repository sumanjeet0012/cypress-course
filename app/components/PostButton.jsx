'use client'

import { Button } from "@mui/material"

export default function PostButton(){

    function handleClick(){
        fetch('http://localhost:3000/examples', {method: 'POST'}).then((data) => {
            data.json().then((data2) => {
                console.log({data2})
            })
        }).catch(() => {
            console.log('An error occured')
        })
    }

    return (
        <Button data-test="post-button" onClick={handleClick}>
            Post Data
        </Button>
    )
}