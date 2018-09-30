import React, {Component} from 'react';


class Clock extends Component {
    state = { 
        time: new Date().toLocaleTimeString()  
    }
   
    componentDidMount() {
        
        this.time = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString() 
            })
        },1000) 
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }
   
    render() {
        return (
        <div>
            <h1>Clock-showing-time</h1>
            <h2>It is {this.state.time}.</h2>
        </div>
        )
    }
    
}

export default Clock;