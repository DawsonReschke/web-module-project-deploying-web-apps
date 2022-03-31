import React,{useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Login = (props)=>{
    let history = useHistory(); 
    const [currentUserName, setCurrentUserName] = useState(''); 
    const [currentEmail, setCurrentEmail] = useState(''); 
    const updateUserName = (event)=> setCurrentUserName(event.target.value)
    const updateEmail = (event)=> setCurrentEmail(event.target.value)
    const resetForm = () => {setCurrentEmail('');setCurrentUserName('')}  
    return(
    <div>
        <form>
            <label>username
                <input
                type="text"
                name="loginUsername"
                placeholder="username"
                value={currentUserName}
                onChange={updateUserName}
                />
            </label>
            <br/>
            <label>email
                <input
                type="email"
                name="loginEmail"
                placeholder="email@org.com"
                value={currentEmail}
                onChange={updateEmail}
                />
            </label>
            <br/>
            <input
            type="submit"
            value="login"
            onClick={(event)=>{event.preventDefault(); if(currentUserName.length > 0 && currentEmail.length > 0) {props.login({username:currentUserName,email:currentEmail});history.push('/home')}}}
            />
        </form>
    </div>
    )
}
export default Login;