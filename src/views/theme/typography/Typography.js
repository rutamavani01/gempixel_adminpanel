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
                <div>
                  <span>0 QR Codes / Unlimited</span>
                  <span style={{ marginLeft: '20px' }}>23 scans</span>
                </div>
                <div>
                  <CButton color="primary" style={{ marginRight: '10px' }}>Create QR</CButton>
                  <CButton color="dark">Bulk QR</CButton>
                </div>
              </div>
            </CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Search for QR Codes" />
                <CFormSelect>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                </CFormSelect>
              </CInputGroup>
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <p>No content found. You can create some.</p>
                <CButton
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