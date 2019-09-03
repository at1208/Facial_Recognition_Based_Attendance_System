import React from 'react';
import './developers.css'

const Developer = () => {
  return <div className='container-fluid'>

            <div className='row b0 text-center'>
                   <div className='col-sm-4 shadow c1'>
                     <h1 className='b2'>Aman Tiwari</h1>
                     <span>Frontend Integration with Machine Learning(OpenCV) API</span>
                   </div>

                  <div className='col-sm-4 shadow c1'>
                     <h1 className='b2 '>Anmol Raj Chauhan</h1>
                     <span> Use OpenCV for Facial Recognition</span>
                  </div>

                  <div className='col-sm-4 shadow c1'>
                    <h1 className='b2 '>Jatin Kumar Singh</h1>
                    <span> Database Integration </span>
                  </div>
            </div>
            <hr/>
     </div>
}
export default Developer;
