import { CButton, CCard, CCardBody, CCol, CCollapse, CFormInput, CFormTextarea, CRow } from '@coreui/react'
import React from 'react'
import { useState } from 'react';
import Select from 'react-select/base';
const CtaCoupon = () => {
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (option) => setSelectedOption(option);

  const [formData, setFormData] = useState({

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

  const options = [
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (

    <CCardBody>
      <h6 className='title-text mb-0'>Coupon</h6>
      <p className='qr-name ctaContact-span'>Create a small popup with a coupon code that users can use.</p>

      <CCardBody>
        <div className='col-12 d-flex flex-wrap'>
          <div className='col-8'>
            <CCard className='p-3'>
              <div className='col-12 d-flex flex-wrap'>
                <div className='col-6 mb-2'>
                  <p className='m-1'>Name</p>
                  <CFormInput type='text' className='qr-name' placeholder='e.g.Promo' style={{ width: '99%' }} />
                </div>
                <div className='col-6'>
                  <p className='m-1'>Coupon Code</p>
                  <CFormInput type='text' className='qr-name'  placeholder='e.g. SAVE20' style={{ width: '99%' }} />
                </div>
                <div className='col-12'>
                  <p className='m-1'>Custom Message (Max: 140 chars)</p>
                  <CFormTextarea rows={5}  className='qr-name' placeholder="e.g. Get a $10 discount with any purchase more than $50"></CFormTextarea>
                </div>
                <div className='col-6'>
                  <p className='m-1'>Button Text</p>
                  <CFormInput type='text' className='qr-name'  placeholder='e.g. Copy' style={{ width: '99%' }} />
                </div>
              </div>
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
            
          </div>
          <div className=" col-4  p-3">
            {/* Newsletter Card */}
            <div className="col-12 mb-4">
              <CCard className="p-3 ">
                <p className='qr-name'>Description</p>
                <div className="d-flex input-box p-2">
                  <CFormInput
                    type="email"
                    value="Coupon"
                    id='email'
                    aria-label="Email"
                    className="me-2 qr-name border-0"
                  />
                  <CButton color="dark" size='sm' className='qr-name'> Copy</CButton>
                </div>
              </CCard>
            </div>
         
          </div>
        </div>




      </CCardBody>



    </CCardBody>
  )
}

export default CtaCoupon