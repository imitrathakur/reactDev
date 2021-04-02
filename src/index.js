import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JSONDATA from './MOCK_DATA.json';
import {userState, useEffect}  from 'react';

class UserComponent extends React.Component{
  constructor(props){
    super(props);

    this.state  ={
        Users:[],
        message:''
    };
  }
  componentDidMount(){
    fetch("http://localhost:50487/api/User?ClientCode=8595").then(res => res.json())
    .then(
      (result) => {
        this.setState({Users:result});
      }
    );
  }
  OnCreateEmployee=()=>{
    let userInfo={
      Fname: this.refs.Fname.value,
      Lname: this.refs.Lname.value,
      Title: this.refs.Title.value,
      Email: this.refs.Email.value,
      Phone: this.refs.Phone.value
    };

    fetch("http://localhost:50487/api/User",{
      method: "POST",
      headers: {'content-type':'application/JSON'},
      body:JSON.stringify (userInfo)
    }).then(res => res.json()).then(
      (result) => {
        this.setState({message:'new user created'});
      }
    );
  }
  render(){
    return(
      <div>
        <h2>Users</h2>
        <p>
          <label>Fname:<input type="text" ref="Fname"/></label></p> <p>
          <label>Lname:<input type="text" ref="Lname"/></label></p> <p>
          <label>Role:<input type="text" ref="Title"/></label></p> <p>
          <label>Email:<input type="text" ref="Email"/></label></p> <p>
          <label>Phone:<input type="text" ref="Phone"/></label>
        </p><p>
        <button onClick={this.OnCreateEmployee}>Create</button></p>
        <p>{this.state.message}</p>
        <table>
            <thread>
              <tr > 
                <th class="headcol">Fname</th>
                <th class="headcol">Lname</th>
                <th class="headcol">Role</th>
                <th class="headcol">Email</th>
                <th class="headcol">Phone</th>
              </tr>
            </thread>
            <tbody>
              {this.state.Users.map(user=>(
                <tr key={user.Id}>
                      <td class="col-1">{user.Fname}</td>
                      <td class="col-1">{user.Lname}</td>
                      <td class="col-1">{user.Title}</td>
                      <td class="col-1">{user.Email}</td>
                      <td class="col-1">{user.Phone}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
      

    );
  }
}

const element=<UserComponent></UserComponent>

// const element = React.createElement("h1",null,"Welcome to react programming");
// ReactDOM.render(element,document.getElementById("root"));

// const element = React.createElement("div",{className:"testClass"},
// React.createElement("h1",null, "Welcome to react programming"),
// React.createElement("h1",null, "Understanding two differenct elements creation"))
// ReactDOM.render(element,document.getElementById("root"));

// const element =<h1 className="testClass">Welcome to react programming</h1>;

// ReactDOM.render(element,document.getElementById("root"));
// const newElement=<h1 className="testClass">Understanding two differenct elements creation</h1>;
// ReactDOM.render(newElement,document.getElementById("app"));

// const element =(
//     <div className="testclass">
//       <h1>Welcome to react programming</h1>
//       <h1>Understanding two differenct elements creation</h1>
//     </div>
// );
ReactDOM.render(element,document.getElementById("root"));

