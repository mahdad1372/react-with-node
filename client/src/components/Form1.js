import React from 'react';

class Form1 extends React.Component{
    
    constructor()
    {
        super();

        this.state = {
            _id : '',
            Name : '',
            Age : '',
            City : '',
            isEdited : false
        }
    }

    infoChange = (event) => {
        const { name , value } = event.target;

        this.setState({
            [name] : value
        })
    }
    
    infoSubmit = (event) => {
    if( !this.state.isEdited){
        let data = {
            isEdited : this.state.isEdited ,
            Name : this.state.Name ,
            Age : this.state.Age ,
            City : this.state.City
        }
        this.props.myData(data);
    }
    else{
        let data = {
            isEdited : this.state.isEdited ,
            _id : this.state._id,
            Name : this.state.Name ,
            Age : this.state.Age ,
            City : this.state.City
        }
        this.props.myData(data);
    }
       
    }

    componentWillReceiveProps(props){
        console.log(props.setForm);
        if(props.setForm._id != null){
            this.setState({
                isEdited : true ,
                _id : props.setForm._id,
                Name : props.setForm.Name,
                Age : props.setForm.Age ,
                City : props.setForm.City
            })
        }
    }

    render(){
        return(
           
           
            <form onSubmit={this.infoSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="email">اسم :</label>
                <input type="text" className="form-control" id="email" placeholder="Enter name"
                onChange={ this.infoChange}
                name="Name" 
                value = {this.state.Name}/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">سن :</label>
                <input type="text" className="form-control" id="pwd" placeholder="Enter age"
                onChange={ this.infoChange}
                name="Age" 
                value = {this.state.Age} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">شهر :</label>
                <input type="text" className="form-control" id="pwd" placeholder="Enter city" 
                onChange={ this.infoChange}
                name="City" 
                value = {this.state.City} />
              </div>
              {/* <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div> */}
              <button type="submit" className="btn btn-primary">{ this.state.isEdited ? 'ویرایش' : 'ثبت'}</button>
            </form>
         
        )
    }
}

export default Form1;