import React from 'react'
import { render } from 'react-dom'
const Greeting = () => {

  return(
    <>
    <h1>Hello from React</h1>
    <div id="image"></div>
    </>
    )}

render(
    <Greeting />,
    document.getElementById('target')
)