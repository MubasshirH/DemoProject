import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {

        axios.get("")

    }

    render() {
        return (
            <div style={{textAlign:"center", marginTop:"20px"}}>
                <h1>Hello, {'<USER>'}</h1>
                <p>Welcome Back.</p>
            </div>
        )
    }
}

export default Home
