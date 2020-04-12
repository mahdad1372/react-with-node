import React , { createContext , Component } from 'react';
import { Link} from 'react-router-dom';
const axios = require('axios');
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(){
        super()
            this.state = {
                name : 'mahdad',
                name2: 'worker',
                style : 'block',
                data2 : "Please",
                data : []
            }
        
    }

    changing = () => {
        this.setState({ name: 'Shahab' , name2 : 'javad' , style: 'none' })
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

    newname = () =>{
        
        this.setState({
            name2 : 'johnny'
        })
    }

    newname3(){
        
        console.log('hello baby');
    }

      getone(data){
       
        axios.get(`http://localhost:5000/api/${data._id}`).then( res => {
            console.log(res.data.Name);
            this.setState({
                data2 : res.data.Name 
                // style : 'none'
            })
        })
        // console.log("Mahdad is a good boy")
    }

    render(){
        return(
           
            <ThemeContext.Provider value={{ posts : this.state.name , posts2 : this.state.name2 , names : this.state.data2 , change : event => {this.newname3()} ,
            data : this.state.data}}>
                {this.props.children}
                <a style={{display:'none'}} className="btn btn-success text-dark" onClick= {event => {this.getone()}}>please</a>
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;











{/* <button onClick={this.changing} style={{display:this.state.style}}>change</button>
                
                {
                this.state.data.length > 0 ? 
                (
                    
                    this.state.data.map(user => 
                        <div key={user._id} style={{display:this.state.style}}>
                        <a>{user.Name}</a>
                        <a>{user.Age}</a>
                        <a>{user.City}</a>
                        <td>
                            
                            <a className="btn btn-success text-dark" onClick= {event => {this.getone(user)}}>New</a>
                            
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


            <div>
            <a>{this.state.data2}</a>
            </div> */}