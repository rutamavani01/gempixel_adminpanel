import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormTextarea,
  CButton,
  CCol,
  CRow,
  CFormLabel,
} from '@coreui/react';

const CtaMessage = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [overlayLabel, setOverlayLabel] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [buttonText, setButtonText] = useState('Learn more');

  return (
    <CCardBody>
      {/* <CRow className="cta-message-editor"> */}
      <CCardHeader>CTA Message</CCardHeader>
      <p>Create a small popup with a message and a link to a page or product.</p>
      <div className='d-flex'>
        <CCol md={8}>
          <CCard>
            <CCardBody>
              <CForm>
                <div className='col-12 d-flex'>
                  <div className='col-6'>
                    <div className="mb-3" style={{ width: '99%' }}>
                      <CFormLabel htmlFor="name " className='qr-name'>Name</CFormLabel>
                      <CFormInput
                        type="text"
                        id="name"
                        placeholder="e.g. Promo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='qr-name'
                      />
                    </div>
                  </div>
                  <div className='col-6 '>
                    <div className="mb-3" style={{ width: '99%' }}>
                      <CFormLabel htmlFor="name " className='qr-name'>Logo</CFormLabel>
                      <CFormInput
                        type="file"
                        id="file"
                        placeholder="e.g. Promo"
                        value={file}
                        onChange={(e) => setName(e.target.value)}
                        className='qr-name'
                      />
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <div className='col-6'>
                    <div className="mb-3">
                      <CFormLabel htmlFor="customMessage" className='qr-name'>Custom Message (Max: 140 chars)</CFormLabel>
                      <CFormTextarea
                        id="customMessage"
                        placeholder="e.g. Get a $10 discount with any purchase more than $50"
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        maxLength="140" className='qr-name'
                      />
                    </div>
                  </div>
                  <div className='col-6'></div>
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="overlayLabel" className='qr-name'>Overlay Label</CFormLabel>
                  <CFormInput
                    type="text"
                    id="overlayLabel"
                    placeholder="e.g. Promo"
                    value={overlayLabel}
                    onChange={(e) => setOverlayLabel(e.target.value)} className='qr-name'
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="buttonLink" className='qr-name'>Button Link</CFormLabel>
                  <CFormInput
                    type="text"
                    id="buttonLink"
                    placeholder="e.g. http://domain.com/"
                    value={buttonLink}
                    onChange={(e) => setButtonLink(e.target.value)} className='qr-name'
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="buttonText" className='qr-name'>Button Text</CFormLabel>
                  <CFormInput
                    type="text"
                    id="buttonText"
                    placeholder="e.g. Learn more"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)} className='qr-name'
                  />
                </div>

                <CButton color="primary" type="button" className='qr-name'>
                  Create
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Preview Section */}
        <CCol md={3} className="text-start ">
          <CCard className="cta-preview" >
            <CCardBody className='qr-name ' style={{ backgroundColor: '#007bff', color: 'white', position: 'relative' }}>
              {overlayLabel && (
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: 'white',
                  color: '#007bff',
                  padding: '2px 5px',
                  borderRadius: '3px',
                  fontSize: '12px'
                }}>
                  {overlayLabel}
                </span>
              )}
              <p>{customMessage || "Your text here"}</p>
              <a className='qr-name '
                href={buttonLink || "#"}
                style={{
                  display: 'inline-block',
                  padding: '1px 3px',
                  backgroundColor: 'white',
                  color: '#007bff',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                {buttonText}
              </a>
            </CCardBody>
          </CCard>
        </CCol>
      </div>
      {/* </CRow> */}
    </CCardBody>
  );
};

export default CtaMessage;
