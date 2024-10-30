import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Collapses = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CRow>
      <CCardHeader className='mb-4'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='qr-name'>
            <h5>Channels</h5>
          </div>
          <div className='qr-name'>
            <CButton
              color="primary"
              style={{ marginRight: '10px' }} className='qr-name '
              onClick={() => setModalVisible(true)}
            >
              Create a Campaign
            </CButton>
          </div>
        </div>
      </CCardHeader>

      <CCard className='mb-3'>
        <CCardBody>
          <p className='text-muted qr-name'>Campaign List Disabled</p>
          <p className='qr-name'>To create a list page for the campaign, you need a default bio page and public profile settings.</p>
          <p className='qr-name me-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle text-success qr-name">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg> Default Bio
          </p>
          <p className='qr-name me-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle text-danger qr-name">
              <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
            </svg> Public Profile
          </p>
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
          <div className='qr-name' style={{ textAlign: 'center' }}>
            <p>No content found. You can create some.</p>
            <CButton
              style={{ backgroundColor: '#5856d6', color: 'white' }}
              className='qr-name'
              onClick={() => setModalVisible(true)}
            >
              Create a Campaign
            </CButton>
          </div>
        </CCardBody>
      </CCard>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle className='qr-name'>Create a New Campaign</CModalTitle>
        </CModalHeader>
        <CModalBody className='qr-name'>
          <form className='qr-name'>
            <div className="mb-3 qr-name">
              <label htmlFor="campaignName" className="form-label qr-name">Campaign Name (required)</label>
              <input type="text" className="form-control qr-name" id="campaignName" />

              <p htmlFor="campaignName" className="form-label qr-name">Domain</p>
              {/* <input type="text" className="form-control qr-name" id="campaignName" placeholder="Enter campaign name" /> */}
              <select style={{ width: '100%', padding: '4px' }}>
                <option></option>
                <option>https://demo.gempixel.com/short</option>
              </select>

              <label htmlFor="campaignName" className="form-label qr-name">Rotator Slug (optional)</label>
              <input type="text" className="form-control qr-name" id="campaignName" />
              <span>If you want to set a custom alias for the rotator link, you can fill this field.</span>
            </div>
          </form>

          <div className='col-12 d-flex justify-content-between'>
            <div className='col-9'>
              <h6>Deep Linking</h6>
              <p className='deeplink-p'>
                Enable this feature to force apps to open when visiting on mobile or open app store if app is not installed.
              </p>
            </div>
            <div className="form-check form-switch">
              <input
                className='form-check-input'
                type='checkbox'
                id='flexSwitchCheckDefault'
                // onChange={handleSwitchToggle}
                // checked={showDeepLinkingForm}
              />
            </div>
          </div>
        </CModalBody>
        <CModalFooter className='qr-name'>
          <CButton className='qr-name' color="secondary" onClick={() => setModalVisible(false)}>Close</CButton>
          <CButton className='qr-name' color="primary">Save Campaign</CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}

export default Collapses
