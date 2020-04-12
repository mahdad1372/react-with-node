import React , { createContext , Component } from 'react';
import {Route ,BrowserRouter , Router, Switch , Link} from 'react-router-dom';
import Form1 from '../components/Form1';
import Table from '../components/Table';

const axios = require('axios');

class App extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            data : [] ,
            data2 : "Please",
            editData : [] ,
            style : 'block'
        }
        
    } 


    
     
    create = (data) => {
    
        if(!data.isEdited){
            axios.post("http://localhost:5000/api" , data).then( res => {
                console.log(res);
            this.getAll();
    
            })
        }
        else{
            axios.put("http://localhost:5000/api/update" , data).then( res => {
                console.log(res);
            this.getAll();
    
            })
        }
       
        
    }

    componentDidMount () {
        this.getAll();
       
    }

    getAll(){
        axios.get("http://localhost:5000/api").then( res => {
            console.log(res.data);
            this.setState({
                data : res.data
            })
        })
    }

    

    getone(data){
       
        axios.get(`http://localhost:5000/api/${data._id}`).then( res => {
            console.log(res.data.Name);
            this.setState({
                data2 : res.data.Name ,
                style : 'none'
            })
        })
        // console.log("Mahdad is a good boy")
    }

    delete = (data) => {
        axios.delete(`http://localhost:5000/api/del/${data._id}`).then( res => {
           console.log(res);
           this.getAll();
        })
    }

    update = (data) => {
        console.log(data);
        this.setState({
            editData : data
        })
    }
   
    render(){
        
        return(
            
            <div className="App">

             <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{display: this.state.style}}>
                        <Form1 myData = {this.create} setForm={this.state.editData} />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                         <Table name={this.state.data2} getData = {this.state.data} setData ={this.update} getone={this.getone} del={this.delete}/>
                    </div>
                </div>
                <br/><br/><br/>
                <div>
                <tbody>
                <a className="btn btn-danger text-white" onClick= {() => { this.setState({style:'block'})}}>back</a>

            {
                this.state.data.length > 0 ? 
                (
                    this.state.data.map(user => 
                        <div key={user._id}>
                        <a>{user.Name}</a>
                        <a>{user.Age}</a>
                        <a>{user.City}</a>
                        <td>
                            <Link><a className="btn btn-success text-dark" onClick= {event => {this.getone(user)}}>New</a></Link>
                            </td>
                        <br/><br/>
                    </div>
                   
                    
                    )
                    
                ) : 
                (
                    <tr>
                        <td>No data</td>
                    </tr>
                )
            }
            <a>{this.state.data2}</a>
          </tbody>
            </div>
                
            </div> 
            
            
          </div>
       
        )
       
    }
    
}


export default App;
