import React , {Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class New1 extends Component {
    static contextType = ThemeContext;
    render(){
        // console.log(this.context.posts);
        return(
           <div>
               {this.context.posts}
               
           </div>
        )
    }
}

export default New1;