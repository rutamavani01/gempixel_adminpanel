import React from 'react'
import { CCard, CCardBody, CRow, CCol, CFormInput, CFormSelect, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
const Paginations = () => {
  const navigate = useNavigate();
  return (
    <CCardBody>
      <h6 className='title-text'>Bio Pages</h6>
      <CCard className="p-3 mb-3">
        <CRow className="justify-content-between align-items-center">
          {/* Left Section */}
          <CCol sm="8" className="d-flex align-items-center">
            <div className="bio-border pe-3 qr-name">
              <h5 className="d-inline">1</h5> Bio Pages / Unlimited
            </div>
            <div className="ms-3 qr-name">
              <h5 className="d-inline">1069</h5> views
            </div>
          </CCol>

          {/* Right Section */}
          <CCol sm="4">
            <div className="d-flex justify-content-between align-items-center ">
              <CFormInput
                className="qr-name pe-3"
                placeholder="Search for Bio Pages"
              />
              <CFormSelect size='sm' className="ms-3  border-0 qr-name">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Popular</option>
              </CFormSelect>
              <CIcon className="cursor-pointer ms-3" size="xxl" icon={cilSearch} />
            </div>
          </CCol>
        </CRow>
      </CCard>

      <CCard>
        <CCardBody>
          <div className='qr-name' style={{ textAlign: 'center' }}>
            <p>No content found. You can create some.</p>
            <CButton  className='qr-name button'
              onClick={() => {
                navigate('/base/pixel')
              }}
            >
              Add Pixel
            </CButton>
          </div>
        </CCardBody>
      </CCard>


    </CCardBody>
  )
}

export default Paginations
