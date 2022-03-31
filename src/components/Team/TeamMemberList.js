import React from "react";

const MemberList = (props)=>{
    return(
        <div>
            <ul>
            {
                props.members.map((val)=>{
                    return(
                        <h4 key={val.email}>
                            {val.username}
                        </h4>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default MemberList