import React from 'react'

function Main(props) {

    console.log(props.peoples);
    return (
        <div >
            <h1>Main</h1>
            <button onClick={props.btnfunc} className={props.style.btn}>button</button>
        </div>
    )
}

export default Main