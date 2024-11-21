import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CPlaceholder,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'


const Placeholders = () => {
  return (
    <CCardBody>
      <CCardHeader className='mb-4'>
        <div className='d-flex justify-content-between '>
          <div className='qr-name'>
            <h6 className='title-text'>Branded Domains</h6>
          </div>
          <div className='qr-name'>
            <button
              className='qr-name button'
              color="primary"
              style={{ marginRight: '10px' }}
              onClick={() => setModalVisible(true)}
            >
              Add Domain
            </button>
          </div>
        </div>
      </CCardHeader>

      <CCard className='p-3 '>
        <p className='m-0 text-muted d-inline'><h5 className='d-inline text-dark'>0</h5> Domains / Unlimited</p>
      </CCard>

      <CCardBody>
        <CCard></CCard>
      </CCardBody>

    </CCardBody>
  )
}

export default Placeholders
