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
import CIcon from '@coreui/icons-react'
import { cilPaint, cilSearch } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const ListGroups = () => {
  const navigate = useNavigate()
  return (
    <CCardBody>
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

      <CCard className=' p-2  mb-3'>
        <CRow className=' row justify-content-between align-items-center p-0'>
          <CCol sm='9' className='qr-name'>
            <h5 className='d-inline'> 0 </h5>Custom Splash Pages / Unlimited
          </CCol>
          <CCol sm='2'>
            <div className='input-box text-start'>
              <input type='text' className='qr-name d-inline me-1 border-0 focus-ring ' placeholder='Search for Custome Splas' /><CIcon className='d-inline' width={'7%'} icon={cilSearch} size='sm-2' customClassName="nav-icon text-end" />
            </div>
          </CCol>
        </CRow>
      </CCard>

      <CCard>
        <CCardBody>
          <div className='qr-name' style={{ textAlign: 'center' }}>
            <p>No content found. You can create some.</p>
            {/* <CButton
              style={{ backgroundColor: '#5856d6', color: 'white' }}
              className='qr-name'
              onClick={() => setModalVisible(true)}
            >
              Create a Custom Splash
            </CButton> */}

            <CButton style={{ backgroundColor: '#5856d6', color: 'white' }} className='qr-name'
              onClick={() => {
                navigate('/base/Customesplash')
              }}
            >
                  Create a Custom Splash
            </CButton>
          </div>
        </CCardBody>
      </CCard>

    </CCardBody>
  )
}

export default ListGroups