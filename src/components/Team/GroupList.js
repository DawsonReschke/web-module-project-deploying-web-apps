import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const GroupWrapper = styled.div`
border: 1px solid black; 
width:75%;
margin:1% auto;
padding:2%;
border-radius: 10px;
background-color:beige;
box-shadow: inset 5px 3px grey; 
`

const GroupTitle = styled.h3`
    margin:auto;
    width:fit-content;
    padding:1%;
    text-shadow: 1px 1px grey;
    border-bottom: 1px solid black;
`

const MemberWrapper = styled.div`
    border: 1px dotted black;
    width:50%;
    margin:auto; 
`

const JoinButton = styled.button`
    background-color:#6bfdff;
    border:none;
    color:black;
    padding:1%;
    margin:1%;
    transform: scale(1); 
    transition: 0.2s all ease-in-out;
    &:hover{
        background-color: #4e8bed;
        transform: scale(1.1); 
        color:white;
    }
`

const Group = (props)=>{
    const history = useHistory(); 
    const {groupName , groupId, members} = props
    return(
        <GroupWrapper>
            <GroupTitle>{groupName}</GroupTitle>
            <h4>Members:</h4>
            <MemberWrapper>
                {members.length > 0 ? members.map((val)=>{
                    return(
                        <h5 key={val.email}>{val.username}</h5>
                    )
                })
            : <h5>Be the first to join this group!</h5>}
            </MemberWrapper>
            <JoinButton onClick={()=>{props.joinGroup(props.groupId);history.push(`/teams/${groupId}`)}}>Join Group</JoinButton>
        </GroupWrapper>
    )
}


const GroupList = (props) =>{
    const {groupList} = props;
    return(
        <div>
            {
                groupList.map(val=><Group key={val.groupId} joinGroup={props.joinGroup} groupId={val.groupId} groupName={val.groupName} members={val.members} />)
            }
        </div>
    )
}

export default GroupList;