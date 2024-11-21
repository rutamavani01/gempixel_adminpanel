import React from 'react'
import { CCard, CCardHeader, CNavLink, CCardBody, CButton, CInputGroup, CFormInput, CFormSelect, CRow, CCol, CLink } from '@coreui/react';
import { useNavigate } from 'react-router-dom'

const Typography = () => {
  const navigate = useNavigate()
  return (
    <>
      <h6 className='title-text'>QR Codes</h6>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='qr-name'>
                  <span>0 QR Codes / Unlimited</span>
                  <span style={{ marginLeft: '20px' }}>23 scans</span>
                </div>
                <div className='qr-name'>
                  <button className='qr-name button' color="primary" style={{ marginRight: '10px' }}>Create QR</button>
                  <button className='qr-name button' style={{backgroundColor:'#000000'}} color="dark">Bulk QR</button>
                </div>
              </div>
            </CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3 qr-name">
                <CFormInput className='qr-name' placeholder="Search for QR Codes" />
                <CFormSelect className='qr-name'>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                </CFormSelect>
              </CInputGroup>
              <div className='qr-name' style={{ textAlign: 'center', padding: '20px 0' }}>
                <p>No content found. You can create some.</p>
                <button  className='qr-name button'
                  onClick={() => {
                    console.log('Navigating to QR code')
                    navigate('/theme/qrcode')
                  }}
                >
                  Create QR
                </button>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Typography;