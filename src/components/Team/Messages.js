import React,{useState} from "react";

const validateMessage = (message)=> message.length > 0; 

const InputForm = (props)=>{
    const [currentMessage, setCurrentMessage] = useState('')
    const updateMessage = (event)=> setCurrentMessage(event.target.value)
    return(
        <form>
            <label>
                <br></br>
                <input 
                    type="text"
                    placeholder="type your message here"
                    value={currentMessage}
                    onChange={updateMessage}
                />
            </label>
            <input 
                type='submit'
                value='Send Message'
                onClick={(event)=>{event.preventDefault();if(validateMessage(currentMessage)) props.sendMessage(currentMessage); setCurrentMessage('')}}
            />
        </form>
    )
}

const Messages = (props)=>{
    console.log(props.messages)
    return(
        <div>
            <div>
                {props.messages.map((val,i)=>{
                    return <p key={`${i}-${val.email}`}>{`${props.members.find(member=>member.email === val.email).username}: ${val.message}`}</p>
                })}
            </div>
            <InputForm sendMessage={props.sendMessage}/>
        </div>
        
    )
}

export default Messages; 