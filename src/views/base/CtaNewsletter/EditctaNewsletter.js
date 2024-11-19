import { cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CCard, CCardBody, CButton, CFormInput, CRow, CCol, CCollapse, CFormSelect } from '@coreui/react';
import React from 'react'
import { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'

const EditctaNewsletter = () => {
  const navigate = useNavigate()
  const [textLabelsOpen, setTextLabelsOpen] = useState(false);
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [formData, setFormData] = useState({
    overlayBgColor: '#ffffff',
    overlayTextColor: '#000000',
    buttonBgColor: '#ffffff',
    buttonTextColor: '#000000',
    overlayPosition: 'bottom-left',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [formBgColor, setFormBgColor] = useState('#ffffff');
  const [formTextColor, setFormTextColor] = useState('#000000');
  const [inputBgColor, setInputBgColor] = useState('#ffffff');
  const [inputTextColor, setInputTextColor] = useState('#000000');
  const [buttonBgColor, setButtonBgColor] = useState('#000000');
  const [buttonTextColor, setButtonTextColor] = useState('#ffffff');

  const [buttonPlaceholder, setbuttonPlaceholder] = useState('Name');


  const options = [
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (option) => setSelectedOption(option);


  const handleCreate = () => {
    localStorage.setItem('ctaFormData', JSON.stringify(formData));
    navigate('/base/navs');
  };
  return (
    <CCardBody>
      <h6>CTA Newsletter</h6>
      <p className='qr-name text-muted'>Create a small popup form to collect emails from users.</p>

      <div className='col-12 d-flex justify-content-between'>
        <div className='col-8 '>
          <CCard>
            <div className='col-12 d-flex flex-wrap p-3'>
              <div className='col-6 mb-2'>
                <p className='qr-name m-1'>Name</p>
                <CFormInput type='text' placeholder='e.g.Promo' className='qr-name' style={{ width: '98%' }} />
              </div>
              <div className='col-6 mb-2'>
                <p className='qr-name m-1'>Form Label <span className='ctaContact-span '>leave empty to disable</span></p>
                <CFormInput type='text' placeholder='e.g. Need help?' className='qr-name' style={{ width: '98%' }} />
              </div>
              <div className='col-6 mb-2'>
                <p className='qr-name m-1'>Form Description <span className='ctaContact-span '>leave empty to disable</span></p>
                <CFormInput type='text' placeholder='(optional) Provide a description or anything you want to add to the form.' className='qr-name m-1' style={{ width: '98%' }} />
              </div>
              <div className='col-6 mb-2'>
                <p className='qr-name m-1'>Thank You Message <span className='ctaContact-span '>leave empty to disable</span></p>
                <CFormInput type='text' placeholder='e.g. Thank you.' className='qr-name' style={{ width: '98%' }} />
              </div>

              <hr></hr>

              <div className='col- mb-2'>
                <p className='qr-name m-1'>Webhook Notification <span className='ctaContact-span '>leave empty to disable</span></p>
                <CFormInput type='text' placeholder='e.g. https://domain.com/path/to/webhook-receiver' className='qr-name text-muted' />
                <p className='ctaContact-span'>If you want to receive a notification directly to your app, add the url to your app's handler and as soon as there is a submission, we will send a notification to this url as well as an email to the address provided above.</p>
              </div>
            </div>
          </CCard>

          {/* text label */}
          <CCard className="mb-3 mt-4" style={{ cursor: "pointer" }}>
            <CRow>
              <CCol md="12">
                <CButton
                  color="blue"
                  className="w-100 text-start qr-name p-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTextLabelsOpen(!textLabelsOpen);
                  }}
                >
                  <CIcon icon={cilPlus} className='ctaContact-blue-colour' /> <span className='ctaContact-blue-colour'>Text Labels</span>
                </CButton>
                <CCollapse visible={textLabelsOpen}>
                  <CCardBody>
                    <CRow>
                      <CCol md="3">
                        <label className="qr-name mb-3">Button</label>
                        <CFormInput
                          name="buttonPlaceholder"
                          value={formData.button}
                          onChange={handleInputChange}
                          className='qr-name'
                          placeholder='subscribe '
                        />
                        <span className="ctaContact-span">If you want to use a different language, change these.</span>
                      </CCol>

                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCol>
            </CRow>
          </CCard>

          {/* Appearance Customization */}
          <CCard className="mb-3" style={{ cursor: "pointer" }}>
            <CRow>
              <CCol md="12">
                <CButton
                  color="blue"
                  className="w-100 text-start qr-name p-3"
                  onClick={() => setAppearanceOpen(!appearanceOpen)}
                >
                  <CIcon icon={cilPlus} className='ctaContact-blue-colour' /> <span className='ctaContact-blue-colour'>Appearance Customization</span>
                </CButton>
                <CCollapse visible={appearanceOpen}>
                  <CCardBody>
                    <CRow className="qr-name">
                      <CCol md="4" className="qr-name mb-5">
                        <label className="form-label">Overlay Background Color</label>
                        <CFormInput
                          type="color"
                          name="overlayBgColor"
                          value={formData.overlayBgColor}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol md="4">
                        <label className="form-label">Overlay Text Color</label>
                        <CFormInput
                          type="color"
                          name="overlayTextColor"
                          value={formData.overlayTextColor}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol md="4">
                        <label className="form-label">Button Background Color</label>
                        <CFormInput
                          type="color"
                          name="buttonBgColor"
                          value={formData.buttonBgColor}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol md="4" className='mb-5'>
                        <label className="form-label">Button Text Color</label>
                        <CFormInput
                          type="color"
                          name="buttonTextColor"
                          value={formData.buttonTextColor}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>

                    <div md='12'>
                      <div className='col-2 qr-name'>
                        <label className="form-label">Overlay Position</label>
                        <Select
                          className='qr-name'
                          options={options}
                          value={selectedOption}
                          onChange={handleChange}
                          isSearchable
                        />
                      </div>

                    </div>
                  </CCardBody>
                </CCollapse>

              </CCol>
            </CRow>
          </CCard>

          <CRow className="mt-4">
            <CCol md="12" className="text-start">
              <CButton
                color="primary"
                className='qr-name'
                onClick={handleCreate}
              >
                Create
              </CButton>
            </CCol>
          </CRow>
        </div>

        <div className=" col-4  p-3">
          {/* Newsletter Card */}
          <div className="col-12 mb-4">
            <CCard className="p-3 ">
              <h6>Newsletter</h6>
              <p className='qr-name'>Description</p>
              <div className="d-flex input-box p-2">
                <CFormInput
                  type="email"
                  placeholder="johnsmith@company.com"
                  aria-label="Email"
                  className="me-2 qr-name border-0"
                />
                <CButton color="dark" size='sm' className='qr-name'> Subscribe</CButton>
              </div>
            </CCard>
          </div>
          {/* Webhook Notification */}
          <div className="col-12">
            <CCard className="p-3">
              <h6 className='qr-name mb-5'>Webhook Notification</h6>
              <p className='qr-name'>
                If you add a webhook URL, we will send a notification to that URL
                with the form data. You will be able to integrate it with your own
                app or a third-party app. Below is a sample data that will be sent
                in JSON format via a POST request.
              </p>
              <pre style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '5px', fontSize: '11px' }}>
                {`{
                  "type": "newsletter",
                  "data": {
                    "email": "johnsmith@company.com",
                    "date": "2020-01-01 12:00"
                  }
                }`}
              </pre>
            </CCard>
          </div>
        </div>

      </div>

    </CCardBody>
  )
}

export default EditctaNewsletter