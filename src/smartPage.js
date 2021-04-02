// import Page from 'components/Page';
import React from 'react';
import JSONDATA from 'data/MOCK_DATA.json';
import usersate from 'react';
// import ReactDOM from 'react-dom';
import {
    Input,
  Label,
} from 'reactstrap';


// class smartPage extends React.Component{
//         render() { 
// export class smartPage extends React.Component {
//     render() {
function myPage() {
    const[searchTerm, setsearchterm]= usersate("")
    return (       
        <div className="smartPage">
            <Label for="examplsmartsearch">search text</Label>
            <Input
            type ="text"
            value="start type here"
            onChange ={event => {setsearchterm(event.taret.value);
            }}
            />
            {JSONDATA.filter((val)=>{
            if (searchTerm ==""){
                return val
            }
            else if (val.first_name.toLowercase().includes(searchTerm.toLowercase()))
            {return val}
            }).map ((val,key) => {
            return (
                <div className="user" key={key}>
                    <p>{val.first_name} </p>
                </div> 
                );  })
            }
        </div>
    );  
}
// }
export default myPage;