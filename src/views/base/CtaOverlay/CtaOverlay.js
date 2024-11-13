import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCardBody, CCardHeader, CCol, CRow,CCard } from '@coreui/react'
import React from 'react'

const CtaOverlay = () => {
    return (
        <CCardBody>
            <CCardHeader className='mb-4'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='qr-name'>
                        <h5>CTA Overlay</h5>
                    </div>
                    <div className='qr-name'>
                        <CButton
                            color="primary"
                            style={{ marginRight: '10px' }} className='qr-name '
                            onClick={() => setModalVisible(true)}
                        >
                            Create
                        </CButton>
                    </div>
                </div>
            </CCardHeader>

            <CCard className=' p-2  mb-3'>
                <CRow className=' row justify-content-between align-items-center p-0'>
                    <CCol sm='9' className='qr-name'>
                        <h5 className='d-inline'> 0 </h5>CTA Overlay / Unlimited
                    </CCol>
                    <CCol sm='2'>
                        <div className='input-box text-start'>
                            <input type='text' className='qr-name d-inline me-1 border-0 focus-ring ' placeholder='Search for Custome Splas' /><CIcon className='d-inline' width={'7%'} icon={cilSearch} size='sm' customClassName="nav-icon text-end" />
                        </div>
                    </CCol>
                </CRow>
            </CCard>

        </CCardBody>
    )
}

export default CtaOverlay