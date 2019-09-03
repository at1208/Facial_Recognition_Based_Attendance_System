import React, { Component } from 'react';
import './user_details.css'
import Webcam from "react-webcam";

class User extends Component{
  state = {
    name: '',
    branch: '',
    AddmissionNo: ''
  }

OnInputName = (e) => {
  const name = this.state.name

  this.setState({ name: e.target.value})
}

OnBranchInput = (e) => {
  const branch = this.state.branch

  this.setState({ branch: e.target.value})
}
OnAddmissionInput = (e) => {
  const AddmissionNo = this.state.AddmissionNo

  this.setState({ AddmissionNo: e.target.value})
}

  render(){


    return <div className='container'>
      <h1 className='text-center f1'>PLEASE ENTER YOUR DETAILS</h1>
      <div className='container-fluid'>
            <div className='row g1'>
                  <div className='col-lg j1'>
                    <span className='shadow float-left g2 text-center'>Enter Name </span> <input className='float-right g3' onChange={this.OnInputName} type="text" name="" value={this.state.name} />
                  </div>

                  <div className='col-lg j1'>
                    <span className='shadow float-left g2 text-center'>Enter Branch</span> <input className='float-right g3' onChange={this.OnBranchInput} type="text" name="" value={this.state.branch} />
                  </div>

                  <div className='col-lg j1'>
                    <span className='shadow float-left g2 text-center'>Enter Addmission No.</span> <input className='float-right g3' onChange={this.OnAddmissionInput} type="text" name="" value={this.state.AddmissionNo}/>
                  </div>
            </div>

            <div className='col-lg float-right'>
              <button className='btn v1'>Submit</button>
            </div>

</div>
<div className='  cam'>
<Webcam />;
</div>

    </div>
  }
}
export default User;
