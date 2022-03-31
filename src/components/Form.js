import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
width:50%; 
margin:auto;
border: 1px solid black;
border-radius: 10px; 
background-color:beige;
padding:0 3% 3% 3%;
box-shadow: 3px 5px grey;
`
const CreateForm = (props)=>{
    // create a new group and add it to the group list
    const[currentGroupName,setCurrentGroupName] = useState(''); 
    return(
        <FormWrapper>
            <h2>Create New Group</h2>
            <form>
                <label for="Group Name">
                    <input
                        type="text"
                        name="groupName" 
                        placeholder="ex: Project-Slippi"
                        value={currentGroupName}
                        onChange={(event)=>setCurrentGroupName(event.target.value)}
                    />
                </label>
                <input
                type="submit"
                value="Create Group"
                onClick={(event)=>{event.preventDefault(); props.createGroup(currentGroupName);setCurrentGroupName('')}}
                />
            </form>
        </FormWrapper>
    )
}
export default CreateForm