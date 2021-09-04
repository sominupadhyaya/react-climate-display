import React, { Component } from "react"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"
class App extends Component {
  state = { lat: null, errorMessage: null }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Waiting for User....." />
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

// class App extends Component{
//   state = {time : new Date().toLocaleTimeString()}

// componentDidMount(){
//     setInterval(() => {
//       this.setState({time : new Date().toLocaleTimeString()})
//     }, 1000);
//   }
//   render(){
//     return(
//       <div className="time">
//       The time is {this.state.time}
//     </div>
//   )
// }
// }



export default App
