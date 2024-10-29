import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'

const Colors = () => {
  return (
    <>
    <h3>Bio Pages</h3>
     <CCard>
      <CCardBody>
        <div className='col-12 d-flex justify-content-between'>
          <div className='col-6'>
           <p className='d-inline me-2'><h4 className='d-inline'>1 </h4>Bio Pages / Unlimited </p> <p className='d-inline me-2'>|</p>
           <p className='d-inline'><h4 className='d-inline'>583</h4> views</p>
          </div>
          <div className='col-6'>
            <input type='text' placeholder='Search for Bio Page'/>
            <select>
              <option>sort by</option>
              <option>Newest</option>
              <option>oldest</option>
              <option>popular</option>
            </select>
            <button className='btn btn-sm btn-primary'>Search</button>
          </div>
        </div>
      </CCardBody>
     </CCard>
    </>
  )
}

export default Colors
