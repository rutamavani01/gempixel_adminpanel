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
import { cilSearch } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { FaEllipsisV, FaEdit, FaTrashAlt } from 'react-icons/fa';

const Navs = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.card')) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showDropdown]);

  const handleEditClick = () => {
    navigate('/base/EditCtaContact');
  };

  return (
    <div>
      <CCardBody>
        <CCardHeader className='mb-4'>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className='qr-name'>
              <h5>CTA Overlay </h5>
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
              <CButton style={{ backgroundColor: '#5856d6', color: 'white' }} className='qr-name'
                onClick={() => {
                  navigate('/base/OverlayCreate')
                }}
              >
                Create a Custom Splash
              </CButton>
            </div>
          </CCardBody>
        </CCard>

        <CCardBody>
          <div className='d-flex' style={{ gap: '20px' }}>
            <div className='card col-6 mt-4 p-2' style={{ position: 'relative', border: '1px solid #ddd', borderRadius: '5px' }}>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <CIcon icon={cilSearch} className='me-2' height={40} width={40} />
                  </div>
                  <div>
                    <h6>ruta</h6>
                    <button className='contact-btn'>Contact</button>
                    <span className='qr-name' style={{ marginLeft: '10px', color: '#888' }}>34 seconds ago</span>
                  </div>
                </div>
                <div onClick={handleClick} style={{ cursor: 'pointer', padding: '5px' }}>
                  ...
                </div>
              </div>
              {showDropdown && (
                <div
                  className='dropdown-menu-custom'
                  style={{
                    position: 'absolute',
                    top: '50px',
                    right: '1px',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    width: '150px',
                    zIndex: 1000,
                  }}
                >
                  <div
                    className='dropdown-item'
                    style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    onClick={handleEditClick}
                  >
                     Edit
                  </div>
                  <div className='dropdown-item' style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    Delete
                  </div>
                </div>
              )}
            </div>


          </div>
        </CCardBody>

      </CCardBody>
    </div>
  )
}

export default Navs