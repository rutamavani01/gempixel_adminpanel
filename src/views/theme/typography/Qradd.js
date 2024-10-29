import React from 'react'
import { CCard, CCardHeader, CNavLink, CCardBody, CButton, CInputGroup, CFormInput, CFormSelect, CRow, CCol, CLink } from '@coreui/react';
import { useNavigate } from 'react-router-dom'

const Typography = () => {
  const navigate = useNavigate()
  return (
    <>
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
                  <CButton className='qr-name' color="primary" style={{ marginRight: '10px' }}>Create QR</CButton>
                  <CButton className='qr-name' color="dark">Bulk QR</CButton>
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
                <CButton style={{backgroundColor:'#5856d6', color:'white'}} className='qr-name'
                  onClick={() => {
                    console.log('Navigating to QR code')
                    navigate('/theme/qrcode')
                  }}
                >
                  Create QR
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Typography;