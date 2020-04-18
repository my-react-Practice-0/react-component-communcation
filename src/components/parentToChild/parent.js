import React from 'react'
import Child from './child'
export default function parent(props) {
    return (
        <div>
            <Child doWhatever = {props.changeEvent} title={props.title}/>
            <Child doWhatever= {props.noChangeEvent} title={props.title}/>
        </div>
    )
}
