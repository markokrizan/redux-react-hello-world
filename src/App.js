import React, {Component} from 'react';
import {changeCatName, changeDogName, addCatAge, addDogAge} from './actions';

import {connect} from 'react-redux';

class App extends Component {

  componentDidMount(){
    //These actions override a known property:
    this.props.changeCatName();
    this.props.changeDogName();
    console.log("CURRENT STATE:");
    console.log(this.props.state);
    //These actions add a new property
    this.props.addCatAge();
    this.props.addDogAge();
    console.log("CURRENT STATE:");
    console.log(this.props.state);

  }

  render(){
    console.log("STATE IN RENDER FUNCTION:");
    console.log(this.props.state);
    return (
      <div>
        <h1>Open console - F12</h1>
      </div>
    );
  }
  
}

//map entire state to the component
const mapStateToProps = function(state) {
  return {
    state: state
  }
}

// //map specific props to component
// const mapStateToProps = function(state) {
//   return {
//     catSaysHello: state.catReducer.catReducerProp
//   }
// }


//map action creators that dispatch specific actions you want to use
//pass them in as the seccond parameter
//{changeCatName, changeDogName ...any other methods}
const mapActionsToProps = function(dispatch){
  return{
    changeCatName: () => dispatch(changeCatName()),
    changeDogName: () => dispatch(changeDogName()),
    addCatAge: () => dispatch(addCatAge()),
    addDogAge: () => dispatch(addDogAge()),
  }
}


export default connect(mapStateToProps, mapActionsToProps)(App);
