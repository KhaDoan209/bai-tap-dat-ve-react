import React, { Component } from 'react';
import { connect } from 'react-redux';
class Form extends Component {
   state = {
      userInfor: {
         name: '',
         numberOfSeats: 0,
      },
   };
   handleOnChange = (event) => {
      event.preventDefault();
      let { value, name } = event.target;
      let userInfor = { ...this.props.userInfor };
      userInfor[name] = value;
      console.log(userInfor);

      // let action = {
      //    type: 'LUU_USER_INFOR',
      //    userInfor: userInfor,
      // };
      // this.props.dispatch(action);
   };
   submitForm = (event) => {
      event.preventDefault();

      console.log(this.state);
   };
   render() {
      return (
         <div className='col-4 text-white'>
            <h5 className='pt-2'>
               Fill The Required Details Below And Select Your Seats
            </h5>
            <div>
               <form>
                  <div className='form-group'>
                     <label htmlFor='name'>Your Name</label>
                     <input
                        onChange={this.handleOnChange}
                        name='name'
                        type='text'
                        className='form-control'
                     />
                  </div>
                  <div className='form-group'>
                     <label htmlFor='numberOfSeats'>Number of seats</label>
                     <input
                        onChange={this.handleOnChange}
                        name='numberOfSeats'
                        type='text'
                        className='form-control'
                     />
                  </div>
                  <button
                     onClick={this.submitForm}
                     type='submit'
                     className='btn btn-primary'
                  >
                     Confirm
                  </button>
               </form>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (rootReducer) => {
   return {
      userInfor: rootReducer.datVePhimReducer.userInfor,
   };
};

const ComponentForm = connect(mapStateToProps)(Form);

export default ComponentForm;
