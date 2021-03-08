import React, { useReducer } from "react";

const initFormData = {
    name: 'xiaofeng',
    age: 18,
    nationality: "汉族"
}

function reducer(state, action) {
    switch (action.type) {
        case "patch":
            return {...state, ...action.formData};
        case "reset":
            return initFormData;
        default:
            throw new Error("你传的啥玩意");
    }
}

export function SubmitInfoForm() {
    const [formData, dispatch] = useReducer(reducer, initFormData);
    const onSubmit = () => {
        console.log(formData);
    }
    const onReset = () => {
        dispatch({type: "reset"});
    }
    return (
        <div>
            <div>姓名：</div>
            <div><input value={formData.name} onChange={e => dispatch({type: "patch", formData: { name: e.target.value }})}></input></div>
            <div>年龄：</div>
            <div><input value={formData.age} onChange={ e => dispatch({type: "patch", formData: {age: e.target.value}}) }></input></div>
            <div>民族：</div>
            <div><input value={formData.nationality} onChange={ e => dispatch({type: "patch", formData: {nationality: e.target.nationality}}) }></input></div>

            <button onClick={ () => onSubmit() }>提交</button>
            <button onClick={ () => onReset() }>重置</button>
        </div>
    )
}

