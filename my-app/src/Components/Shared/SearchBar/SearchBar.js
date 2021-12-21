import { useState } from "react";
import {Button, TextField} from '@material-ui/core';

function SearchBar(){
    const [inputValue,setInputValue]=useState("");

    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.prevent.default()
    }
    return(
        <form onSubmit={handleSubmit}>
            <TextField  variant="outlined" color="primary" type="text" placeholder="Name/Position" onChange={handleChange}></TextField>
            {/* <input value={inputValue}  onChange={handleChange}/> */}
            <Button variant="contained" color ="primary" type="button" title="Search" size="large">
                Search
            </Button>            
        </form>
    )
}
export default SearchBar