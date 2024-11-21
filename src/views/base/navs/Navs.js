import React, { useState, useEffect } from 'react';
import { CBadge, CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';

const Navs = () => {
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({});

  const handleToggleDropdown = (cardId) => {
    setDropdowns((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.card')) {
      setDropdowns({});
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleEditClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <CCardBody>
        <CCardHeader className="mb-4">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="qr-name">
            <h6 className='title-text'>CTA Overlay</h6>
            </div>
            <div className="qr-name">
              <button className="qr-name button" color="primary" style={{ marginRight: '10px' }} onClick={() => {
                navigate('/base/OverlayCreate')
              }}>
                Create
              </button>
            </div>
          </div>
        </CCardHeader>


        <CCard>
          <CCardBody>
            <div className='qr-name' style={{ textAlign: 'center' }}>
              <p>No content found. You can create some.</p>
              <button className='qr-name button'
                onClick={() => {
                  navigate('/base/OverlayCreate')
                }}
              >
                Create a Custom Splash
              </button>
            </div>
          </CCardBody>
        </CCard>

        <CCardBody>
          <div className="d-flex col-12 " style={{ flexWrap: 'wrap' }}>
            {/* Contact Card */}
            <CardWithDropdown
              title="Contact"
              dropdownId="contact"
              dropdowns={dropdowns}
              handleToggleDropdown={handleToggleDropdown}
              handleEditClick={() => handleEditClick('/base/EditCtaContact')}
            />

            {/* Poll Card */}
            <CardWithDropdown
              title="Poll"
              dropdownId="poll"
              dropdowns={dropdowns}
              handleToggleDropdown={handleToggleDropdown}
              handleEditClick={() => handleEditClick('/base/EditctaPoll')}
            />

            {/* Message Card */}
            <CardWithDropdown
              title="Message"
              dropdownId="message"
              dropdowns={dropdowns}
              handleToggleDropdown={handleToggleDropdown}
              handleEditClick={() => handleEditClick('/base/EditctaMessage')}
            />

            {/* Newsletter Card */}
            <CardWithDropdown
              title="Newsletter"
              dropdownId="newsletter"
              dropdowns={dropdowns}
              handleToggleDropdown={handleToggleDropdown}
              handleEditClick={() => handleEditClick('/base/EditctaNewsletter')}
            />

            {/* Image Card */}
            <CardWithDropdown
              title="Image"
              dropdownId="image"
              dropdowns={dropdowns}
              handleToggleDropdown={handleToggleDropdown}
              handleEditClick={() => handleEditClick('/base/EditctaImage')}
            />

            {/* Coupon Card */}
            <CardWithDropdown
              title="Coupon"
              dropdownId="coupon"
              dropdowns={dropdowns}
              handleToggleDropdown={handleToggleDropdown}
              handleEditClick={() => handleEditClick('/base/EditctaCoupon')}
            />
          </div>
        </CCardBody>
      </CCardBody>
    </div>
  );
};

const CardWithDropdown = ({ title, dropdownId, dropdowns, handleToggleDropdown, handleEditClick }) => (
  <div className="d-flex col-6" style={{ gap: '10px' }}>
    <CCard className="card mt-4 p-2" style={{ width: '98%', position: 'relative', border: '1px solid #ddd', borderRadius: '5px' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <CIcon icon={cilSearch} className="me-2" height={40} width={40} />
          <div>
            <h6>ruta</h6>
            <button className="contact-btn">{title}</button>
            <span className="qr-name" style={{ marginLeft: '10px', color: '#888' }}>34 seconds ago</span>
          </div>
        </div>
        <div onClick={() => handleToggleDropdown(dropdownId)} style={{ cursor: 'pointer', padding: '5px' }}>
          ...
        </div>
      </div>
      {dropdowns[dropdownId] && (
        <div
          className="dropdown-menu-custom"
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
            className="dropdown-item"
            style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={handleEditClick}
          >
            Edit
          </div>
          <div className="dropdown-item" style={{ padding: '10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            Delete
          </div>
        </div>
      )}
    </CCard>
  </div>
);

export default Navs;
