import React from 'react'

export default function child(props) {
    return (
        <div>
            <button onClick={props.doWhatever}>{props.title}</button>
        </div>
    )
}
