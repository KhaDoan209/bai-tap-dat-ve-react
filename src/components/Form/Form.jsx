import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
   handleOnChange = (event) => {
      event.preventDefault();
      let { value, name } = event.target;
      let userInfor = { ...this.props.userInfor };
      userInfor[name] = value;
      let action = {
         type: 'LUU_USER_INFOR',
         userInfor: userInfor,
      };
      this.props.dispatch(action);
   };
   //    submitForm = (event) => {
   //       event.preventDefault();
   //       let userInfor = this.handleOnChange();
   //       console.log(userInfor);
   //    };
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
                     onClick={this.handleOnChange}
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
