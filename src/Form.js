import React, { useState } from "react";



const Form = (props) => {
    const handleChange = (event) => {
        const {name, value} = event.target;
        props.change(name,value);
        console.log(`Log 1: ${name}`)
        console.log(`Log 2: ${value}`)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
    } ;

    return (
        <form onSubmit={handleSubmit}>

            <label>Name
                <input placeholder="Name" value={props.inputValues.name} type="text" name="name" onChange={handleChange} />
            </label>
            <label>Email
                <input placeholder="Email" value={props.inputValues.email} type="text" name="email" onChange={handleChange} />
            </label>
            <label>Role
                <input placeholder="Role" value={props.inputValues.role} type="text" name="role" onChange={handleChange} />
            </label>
            <input type="submit" value="Button"/>
        </form>
    )
}

export default Form;