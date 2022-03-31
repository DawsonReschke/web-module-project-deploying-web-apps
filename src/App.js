import {useState}  from 'react'
import { Redirect, Route, useHistory} from 'react-router-dom';
import CreateForm from "./components/Form"
import Group from "./components/Team/Group"
import GroupList from "./components/Team/GroupList"
import Login from "./components/Login"
import './App.css';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display:block;
font-size:2.2rem;
width:50%;
margin: 2% auto;
border:1px solid black;
border-radius:10px;
padding:1%;
box-shadow:1px 1px 10px grey;

`

const currentGroups = [{groupId:1313, groupName:'React Study Group',members:[{username:'Dawson',email:'dawsonreschke@gmail.com'}],messages:[{email:'dawsonreschke@gmail.com',message:'hello world'}]},{groupId:1024,groupName:'Vue Study Group',members:[],messages:[]}]
const removeUser = (groups, groupId, currentUser)=>{
  // return a NEW array without the current user in the specified group
  let temp = [...groups]
  return temp.map(val=>{
    if(val.groupId === groupId){
      val.members = val.members.filter(user => user!==currentUser); 
    }
    return val; 
  })
}
const newMessage = (groups,groupId,user,message)=>{
  let temp = [...groups]
  return temp.map(val=>{
    if(val.groupId===groupId){
      val.messages.push({email:user.email,message})
    }
    return val; 
  })
}

function App() {
  let history = useHistory(); 
  const [groups, setGroups] = useState(currentGroups);
  const [currentGroup, setCurrentGroup] = useState(null); 
  const [currentUser,setCurrentUser] = useState(null); 
  const createGroup = (group)=>{
    if(!group) return; 
      setGroups([...groups,{groupId:generateGroupId(),groupName:group,members:[],messages:[]}])
    console.log(groups)
  }
  // recursive method for generating a unique ID for new groups 
  const generateGroupId = ()=>{
    const newID =  Math.floor(Math.random() * 999999)
    return !groups.find(val=>val.groupId === newID) ? newID : generateGroupId(); 
  }
  const joinNewGroup=(group)=>{
    // make the user join the group, add the user to the groups member list
    let temp = [...groups]; 
    temp = temp.map(val=>{
      if(val.groupId === group){
        val.members.push(currentUser)
      }
      return val; 
    })
    setGroups(temp);
    console.log(groups)
    setCurrentGroup(group)
    history.push(`/teams/${group}`)
  }
  const leaveGroup = (id)=>{
    // remove the user from the group, set current group = null
    setGroups(removeUser(groups,id,currentUser))
    setCurrentGroup(null); 
    history.push('/home')
  }
  const updateMessages=(message)=>{
    setGroups(newMessage(groups,currentGroup,currentUser,message))
  }
  return (
    <div className="App">
      <ContainerDiv>
        <Route path={'/teams/:teamID'}>
          <Group user={currentUser} updateMessages={(m)=>updateMessages(m)} leaveGroup={leaveGroup} groupList={groups}/>
        </Route>
        <Route path={'/login'}>
          <Login login={setCurrentUser}/>
        </Route>
        <Route path={'/home'}>
          {console.log('current user:',currentUser)}
            <CreateForm createGroup={createGroup}/>
            <GroupList joinGroup={joinNewGroup} groupList={groups}/>
        </Route>
        {!currentUser && <Redirect to="/login"/>}
      </ContainerDiv>
    </div>
  );
}

export default App;
