import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer"
import Header from "./components/Header"

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
)