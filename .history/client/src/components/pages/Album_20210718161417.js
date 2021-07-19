import React, { Component } from 'react'
import Axios from 'axios';

export default class Album extends Component {
constructor(props) {
    super(props)

    this.state = {
        users :[]        
    }
}
 componentDidMount(){
     Axios.get('http://localhost:5000/users/')
.then(function (response) {
  this.setState({
    users: response.data,
});
})
.catch(function (error) {
  console.log(error);
})
 };

    render() {
        return (
            {
                 { users.lenght >0 ? (
           
            <tbody>
                 <tr>
                   <td>{this.state.id}</td>
                   <td>{this.state.username}</td>
                   <td>{this.state.email}</td>
                 </tr>
            </tbody>

       ):(
         <h1>No data available!</h1>
       )
         
      }
            }
        )
    }
}
