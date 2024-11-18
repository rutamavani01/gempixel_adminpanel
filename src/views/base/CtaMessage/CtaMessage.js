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
  CCollapse,
} from '@coreui/react';
import Select from 'react-select';

const CtaMessage = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [overlayLabel, setOverlayLabel] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [buttonText, setButtonText] = useState('Learn more');

  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (option) => setSelectedOption(option);

  const [formData, setFormData] = useState({
    name: '',
    question: '',
    options: ['', ''],
    overlayBgColor: '#008aff',
    overlayTextColor: '#ffffff',
    buttonBgColor: '#ffffff',
    buttonTextColor: '#000000',
    votePlaceholder: 'Vote',
    thankYouMessage: 'Thanks for voting!',
    labelBgColor: '#ffffff',
    position: { value: 'bottom-right', label: 'Bottom Right' }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const options = [
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
  ];

  return (
    <CCardBody>
      {/* <CRow className="cta-message-editor"> */}
      <CCardHeader>CTA Message</CCardHeader>
      <p className='qr-name'>Create a small popup with a message and a link to a page or product.</p>
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
                      <p className='ctaContact-span  text-muted'>Logo should be square with a maximum size of 100x100. To remove the image, click on the upload field and then cancel it.</p>
                    </div>
                  </div>
                </div>

                <div className='col-12 d-flex'>
                  <div className='col-6' >
                    <div className="mb-3" style={{ width: '99%' }}>
                      <CFormLabel htmlFor="customMessage" className='qr-name'>Custom Message (Max: 140 chars)</CFormLabel>
                      <CFormTextarea
                        id="customMessage"
                        placeholder="e.g. Get a $10 discount with any purchase more than $50"
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        maxLength="140" className='qr-name' rows={5}
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="mb-3 " style={{ width: '99%' }}>
                      <CFormLabel htmlFor="overlayLabel" className='qr-name'>Overlay Label</CFormLabel>
                      <CFormInput
                        type="text"
                        id="overlayLabel"
                        placeholder="e.g. Promo"
                        value={overlayLabel}
                        onChange={(e) => setOverlayLabel(e.target.value)} className='qr-name'
                      />
                    </div>
                  </div>
                </div>

                <div className='col-12 d-flex'>
                  <div className='col-6'>
                    <div className="mb-3" style={{ width: '99%' }}>
                      <CFormLabel htmlFor="buttonLink" className='qr-name'>Button Link</CFormLabel>
                      <CFormInput
                        type="text"
                        id="buttonLink"
                        placeholder="e.g. http://domain.com/"
                        value={buttonLink}
                        onChange={(e) => setButtonLink(e.target.value)} className='qr-name'
                      />
                      <p className='ctaContact-span text-muted'> If you remove the button text below but add a link here, the whole overlay will be linked to this when clicked.</p>

                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="mb-3" >
                      <CFormLabel htmlFor="buttonText" className='qr-name'>Button Text</CFormLabel>
                      <CFormInput
                        type="text"
                        id="buttonText"
                        placeholder="e.g. Learn more"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)} className='qr-name'
                      />
                    </div>
                  </div>
                </div>

              </CForm>
            </CCardBody>
          </CCard>

          {/* Appearance Customization */}
          <CCard className="mb-3 mt-3 qr-name">
            <CButton
              color="blue"
              className="w-100 text-start p-3 qr-name"
              onClick={() => setAppearanceOpen(!appearanceOpen)}
            >
              <span style={
                { color: '#3b7ddd', fontWeight: '500' }
              }>+ Appearance Customization</span>
            </CButton>
            <CCollapse visible={appearanceOpen}>
              <CCardBody>
                <CRow>
                  <CCol md="4" className="mb-3">
                    <label>Overlay Background Color</label>
                    <CFormInput
                      type="color"
                      name="overlayBgColor"
                      value={formData.overlayBgColor}
                      onChange={handleInputChange}
                    />
                  </CCol>
                  <CCol md="4" className="mb-3">
                    <label>Overlay Text Color</label>
                    <CFormInput
                      type="color"
                      name="overlayTextColor"
                      value={formData.overlayTextColor}
                      onChange={handleInputChange}
                    />
                  </CCol>
                  <CCol md="4" className="mb-3">
                    <label>Label Background Color</label>
                    <CFormInput
                      type="color"
                      name="labelBgColor"
                      value={formData.labelBgColor}
                      onChange={handleInputChange}
                    />
                  </CCol>
                  <CCol md="4" className="mb-3">
                    <label>Label Text Color</label>
                    <CFormInput
                      type="color"
                      name="labelTextColor"
                      value={formData.labelTextColor}
                      onChange={handleInputChange}
                    />
                  </CCol>
                  <CCol md="4" className="mb-3">
                    <label>Button Background Color</label>
                    <CFormInput
                      type="color"
                      name="buttonBgColor"
                      value={formData.buttonBgColor}
                      onChange={handleInputChange}
                    />
                  </CCol>
                  <CCol md="4" className="mb-3">
                    <label>Button Text Color</label>
                    <CFormInput
                      type="color"
                      name="buttonTextColor"
                      value={formData.buttonTextColor}
                      onChange={handleInputChange}
                    />
                  </CCol>
                </CRow>
                <div className="mt-3 col-2 qr-name">
                  <label>Overlay Position</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    isSearchable
                  />
                </div>
              </CCardBody>
            </CCollapse>
          </CCard>
        </CCol>

        {/* Preview Section */}
        <CCol md={3} className="text-start p-2 ps-3">
          <CCard className="cta-preview" style={{ borderRadius: '7px', overflow: 'hidden', position: 'relative' }}>
            {/* Promo Ribbon */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '-45px',
              width: '120px',
              transform: 'rotate(45deg)',
              backgroundColor: formData.labelBgColor,
              color: formData.labelTextColor,
              textAlign: 'center',
              padding: '2px 0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontSize: '10px', fontWeight: 'bold'
            }}>
              Promo
            </div>
            <CCardBody
              style={{
                backgroundColor: formData.overlayBgColor,
                color: formData.overlayTextColor,
              }}
            >
              <p className='m-0 mb-3'>Your text here</p>
              <a
              
                href="#"
                className="ctaContact-span"
                style={{
                  display: 'inline-block',
                  padding: '5px 10px',
                  backgroundColor: formData.buttonBgColor,
                  color: formData.buttonTextColor,
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Learn more
              </a>
            </CCardBody>
          </CCard>
        </CCol>
      </div>
      <CButton color="primary" type="button" className='qr-name mt-3'>
        Create
      </CButton>
      {/* </CRow> */}
    </CCardBody>
  );
};

export default CtaMessage;
