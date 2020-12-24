import React from 'react'
import { render } from 'react-dom'
import "./styles.scss";

const Greeting = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <div id="image"></div>
        </div>
    )
}

render(
    <Greeting />,
    document.getElementById('target')
)