// import react from 'react'
import { useParams } from "react-router-dom";
import MemberList from './TeamMemberList'
import Messages from './Messages'
import styled from "styled-components";
const GroupWrapper = styled.div`
    border: 1px solid black; 
    border-radius: 10px;
    background-color: beige;
    padding:2%;
`
const MembersTitle = styled.h2`
    margin:auto;
    width: 50%; 
    text-shadow:1px 1px grey;
    border-bottom: 1px solid black;  
`

const LeaveButton = styled.button`
    border:none;
    background-color: #6bfdff;
    padding:0.8%;
    margin:1%;
    transform: scale(1); 
    transition: 0.2s all ease; 
    &:hover{
        background-color: #4e8bed;
        transform:scale(1.1);
    }
`

const MessagesWrapper = styled.div`
    border: 1px solid black;
    border-radius: 20px; 
    padding:2%;
`

const Group = (props) =>{
    let {teamID} = useParams(); 
    teamID = parseInt(teamID); 
    const {members, messages} = props.groupList.find(val=> val.groupId === (teamID))
    const {user} = props; 
    return(
        <GroupWrapper>
            <MembersTitle>Members:</MembersTitle>
            <MemberList user={user} members={members}/>
            <h3>Messages:</h3>
            <MessagesWrapper>
                <Messages sendMessage={(m)=>props.updateMessages(m)} user={user} messages={messages} members={members}/>
            </MessagesWrapper>
            <LeaveButton onClick={()=>props.leaveGroup(teamID)}>Leave Group</LeaveButton>
        </GroupWrapper>
    )
}

export default Group; 