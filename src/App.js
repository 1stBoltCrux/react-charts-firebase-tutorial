import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import { firebaseConfig } from './config/firebaseConfig'
import firebase from 'firebase'



class App extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
    let db = firebase.firestore()

    db.collection('users').get().then((snapshot) => {
      let dataArray = [];
      snapshot.docs.forEach((doc) => {
        let newData = doc.data()

        dataArray.push(newData)

      })
          this.setState({
            data: dataArray
          })
    })
  }
  constructor(props){
    super(props);

    this.state = {
      data: null
    }
  }
  render() {
    let chartThing;
    if (this.state.data) {
      chartThing = <Chart data={this.state.data}/>
    } else {
      chartThing = '';
    }
    return (
      <div className="App">
    {chartThing}
      </div>
    );
  }
}

export default App;
