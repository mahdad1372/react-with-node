import React , {Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class New2 extends Component {
    
    constructor(){
        super()
            this.state = {
                name : 'mahdad'
            }
        
    }
    static contextType = ThemeContext;
    render(){
        
        console.log(this.context.change);
        const {change} = this.context
        return(
           <div>
               
               <a className="btn btn-warning" onClick={() => this.setState({name: this.context.posts2})}>Press</a><br/>
               {this.context.posts2}<br/>
               {this.context.names}<br/>
               {this.state.name}
               
               {this.context.data.map(user => 
                        <div key={user._id}>
                        <a>{user.Name}</a>
                        <a>{user.Age}</a>
                        <a>{user.City}</a>
                        <td>
                            
                        <a className="btn btn-success text-dark" onClick= {change}>New</a>
                            
                            </td>
                        <br/><br/>
                    </div>)}
              
           </div>
        )
    }
}

export default New2;


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