import React from 'react';

class Table extends React.Component{
    
    constructor()
    {
        super();

       
    }


    render(){
        return(
           
<div className="container">
              
        <table className="table table-striped">
          <thead>
            <tr>
              <th>اسم</th>
              <th>سن</th>
              <th>شهر</th>
              <th>ویرایش</th>
              <th>حذف</th>
        <th>{this.props.name}</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.getData.length > 0 ? 
                (
                    this.props.getData.map(user => 
                        <tr key={user._id}>
                        <td>{user.Name}</td>
                        <td>{user.Age}</td>
                        <td>{user.City}</td>
                        
                        <td><button className="btn btn-warning" onClick= {event => {this.props.setData(user)}}>ویرایش</button></td>
                        <td><button className="btn btn-danger" onClick= {event => {this.props.del(user)}}>حذف</button></td>
                        <td><button className="btn btn-success" onClick= {event => {this.props.getone(user)}}>New</button></td>
                    </tr>
                    
                    )
                    
                ) : 
                (
                    <tr>
                        <td>No data</td>
                    </tr>
                )
            }
          </tbody>
        </table>
        <br/><br/><br/>
        <a>The main part</a>

        {
  this.props.getData.map(user => 
    <div key={user._id}>
      <a>{user.Name}</a>
      </div>
    )
          
        }
      </div>
         
        )
    }
}

export default Table;