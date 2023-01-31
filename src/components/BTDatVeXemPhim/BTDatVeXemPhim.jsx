import React from 'react';
import './BTDatVeXemPhim.scss';

const BTDatVeXemPhim = () => {
   const renderSeat = () => {
      let number = [];
      for (let i = 1; i <= 12; i++) {
         number.push(i);
      }
      return number.map((item) => {
         return <div className='col ghe'>{item}</div>;
      });
   };
   const renderLetter = () => {
      let letters = [];
      for (let i = 0; i < 10; i++) {
         letters.push((i + 10).toString(36));
      }
      return letters.map((item) => {
         return (
            <div className='firstChar py-1 col-12'>
               <div className='col'> {item} </div>
               {renderSeat()}
            </div>
         );
      });
   };

   return (
      <div className='container-fluid px-0'>
         <div className='overlay'></div>
         <img
            className='background-image'
            src='./bgmovie.jpg'
         />
         <div className='container-fluid sub-container'>
            <h1 className='text-center text-white pt-2'>
               Movie Seat Selection
            </h1>
            <div className='row'>
               <div className='col-8 text-center text-light'>
                  <h5>Screen This Way</h5>
                  <div className='screen w-100'></div>
                  <div className='container'>
                     <div className='row'>
                        <div className='col rowNumber'></div>
                        <div className='col rowNumber'>1</div>
                        <div className='col rowNumber'>2</div>
                        <div className='col rowNumber'>3</div>
                        <div className='col rowNumber'>4</div>
                        <div className='col rowNumber'>5</div>
                        <div className='col rowNumber'>6</div>
                        <div className='col rowNumber'>7</div>
                        <div className='col rowNumber'>8</div>
                        <div className='col rowNumber'>9</div>
                        <div className='col rowNumber'>10</div>
                        <div className='col rowNumber'>11</div>
                        <div className='col rowNumber'>12</div>
                     </div>
                     <div className='rowNumber'>{renderLetter()}</div>
                  </div>
               </div>
               <div className='col-4 text-white'>
                  <h5 className='pt-2'>
                     Fill The Required Details Below And Select Your Seats
                  </h5>
                  <div className='d-flex justify-content-center'>
                     <form>
                        <div className='form-group'>
                           <label htmlFor='exampleInputEmail1'>Your Name</label>
                           <input
                              type='email'
                              className='form-control'
                              aria-describedby='emailHelp'
                           />
                        </div>
                        <div className='form-group'>
                           <label htmlFor='exampleInputPassword1'>
                              Number of seats
                           </label>
                           <input
                              type='password'
                              className='form-control'
                           />
                        </div>
                        <button
                           type='submit'
                           className='btn btn-primary'
                        >
                           Confirm
                        </button>
                     </form>
                  </div>
               </div>
               <table className='col-12 table'>
                  <thead>
                     <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Handle</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default BTDatVeXemPhim;
