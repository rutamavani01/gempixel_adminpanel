import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CListGroup,
  CListGroupItem,
  CRow, CButton
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <CRow>
      <CCardHeader className='mb-4'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='qr-name'>
            <h5>Channels</h5>
          </div>
          <div className='qr-name'>
            <CButton
              className='qr-name'
              color="primary"
              style={{ marginRight: '10px' }}
            // onClick={() => setModalVisible(true)}
            >
              Create 
            </CButton>
          </div>
        </div>
      </CCardHeader>
        <CCard>
      <CCardBody>
          <div className='qr-name' style={{ textAlign: 'center' }}>
            <p>No content found. You can create some.</p>
            <CButton
              style={{ backgroundColor: '#5856d6', color: 'white' }}
              className='qr-name'
              onClick={() => setModalVisible(true)}
            >
              Create a Custom Splash
            </CButton>
          </div>
      </CCardBody>
        </CCard>
    </CRow>
  )
}

export default ListGroups
