import React, { useState } from "react";

import TestHook from "../hooks/test";

function Home () {
    const [text, setText] = useState('');
    const [names, addName] = TestHook();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {
        console.log(names);
        addName(text);
    }
    
    return (
        <div style={{margin:50}}>
            <div style={{marginBottom:50}}>
                学生一覧： {names.map(name => {
                    return (<span>{name + ", "}</span>)
                })}
            </div>
            <div style={{marginBottom:50}}>
                追加する名前を入力してください。
            </div>
            <div>
                <input 
                    class="input"
                    typ="text"
                    value={text}
                    onChange={handleChange}
                    style={{marginBottom:50, width:200}}
                    
                ></input>
            </div>
            <div>
                <button onClick={handleAdd} style={{marginLeft:50, marginBottom:50}}>
                    確定
                </button>
            </div>
            <div style={{marginBottom:50}}>
                追加する名前: {text}
            </div>
            <div style={{marginBottom:50}}>
                新しい一覧：{names.map(name => {
                    return (<span>{name + ", "}</span>)
                })}
            </div>
        </div>
    );
}

export default Home;