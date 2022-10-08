import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = { advicce: ''};
  componentDidMount() {
      this.getAdvice();
  }
  getAdvice = () => {
      axios.get('	https://api.adviceslip.com/advice')
            .then((res) => {
              const {advice} = res.data.slip;
              this.setState({
                advicce: advice
              });
              console.log({advice})
            })
            .catch((err) => {
              console.log(err);
            });
  }

  render() {
    return (
      <div className='full'>
        <div className='card'>
          <h2 className='heading'>{this.state.advicce}</h2>
          <button onClick={this.getAdvice}>Get advice</button>
        </div>
      </div>
    )
  }
}

export default App
