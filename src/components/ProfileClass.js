import React from "react";

class Profile extends React.Component {
  
  constructor(props){
    super(props);
    // create state
    this.state = {
      count:0,
      count2:1,
    }
  }
  
  render(){
    return(
      <div>
        <h1>Class</h1>
        <h1>{this.props.name}</h1>
        <h3>{this.state.count}</h3>
        <button onClick={()=>{
          this.setState({
            count: 1,
          })
        }}>Set Count</button>
        <h3>{this.state.count2}</h3>
      </div>
    )
  }
}

export default Profile;