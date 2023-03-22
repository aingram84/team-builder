import React, { useState } from "react";
import Form from "./Form"


const initMemberList = [
    {
        name: "1",
        email: "2",
        role: "3"

    },
    {
        name: "4",
        email: "5",
        role: "6"

    },
    {
        name: "7",
        email: "8",
        role: "9"

    }
];

export default function MemberList(props) {
    const [memberList, setMemberList] = useState(initMemberList);
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        role: ""

    });
    const onSubmit = () => {
        setMemberList([inputValues, memberList]);
        setInputValues({
            name: "",
            email: "",
            role: ""
        });
    }
    const onChange = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    }
    return (
        <div className="member-list">
            {memberList.map((member,idx) => (
                <MemberDetails key={idx} member={member} />
            ))}
            <Form inputValues={inputValues} change={onChange} submit={onSubmit} />
        </div>
    )
}

function MemberDetails(props) {
    // const { name, email, role } = props.memberList;


    return (
        <div className="member-details">
            <div className="member-name">
                Name: <em>{props.member.name}</em>
            </div>
            <div className="member-email">
                Email: <em>{props.member.email}</em>
            </div>
            <div className="member-role">
                Role: <em>{props.member.role}</em>
            </div>
        </div>
    );
}

