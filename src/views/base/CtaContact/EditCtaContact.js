import { cilCircle, cilDoubleQuoteSansLeft, cilDoubleQuoteSansRight, cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CCard, CCardBody, CCol, CCollapse, CForm, CFormInput, CFormTextarea, CRow } from '@coreui/react'
import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'

const EditCtaContact = () => {
    const navigate = useNavigate()
    const [textLabelsOpen, setTextLabelsOpen] = useState(false);
    const [appearanceOpen, setAppearanceOpen] = useState(false);

    const options = [
        { value: 'bottom-left', label: 'Bottom Left' },
        { value: 'bottom-right', label: 'Bottom Right' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (option) => {
        setSelectedOption(option);
    };
    const sampleData = `
    {
      "type": "contact",
      "data": {
        "name": "John Smith",
        "email": "johnsmith@company.com",
        "message": "Consequat incididunt elit do sed duis culpa si.",
        "date": "2020-01-01 12:00"
      }
    }`;

    // dynamic form
    const [formBgColor, setFormBgColor] = useState('#ffffff');
    const [formTextColor, setFormTextColor] = useState('#000000');
    const [inputBgColor, setInputBgColor] = useState('#ffffff');
    const [inputTextColor, setInputTextColor] = useState('#000000');
    const [buttonBgColor, setButtonBgColor] = useState('#000000');
    const [buttonTextColor, setButtonTextColor] = useState('#ffffff');

    // State variables for placeholders
    const [namePlaceholder, setNamePlaceholder] = useState('Name');
    const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
    const [messagePlaceholder, setMessagePlaceholder] = useState('Message');
    const [sendPlaceholder, setSendPlaceholder] = useState('Send');

    const [formlabel, setformlabel] = useState('');

    const handleInputChange = (event) => {
        setformlabel(event.target.value);
    };
    return (
        <CCardBody>
            <h5>Ruta CTA Contact</h5>
            <p className='qr-name'>Create a contact form where users will be able to contact you via email. </p>

            <div className='row'>
                <div className='col-8 ' >
                    <CForm className=''>
                        <CCard className='p-3 mb-3'>
                            <CRow>
                                <CCol md="6" className='qr-name'>
                                    <div className="mb-3">
                                        <label htmlFor="name"><b>Name</b></label>
                                        <CFormInput type="text" id="name" className='qr-name' placeholder="e.g. Promo" />
                                        <span></span>
                                    </div>
                                </CCol>
                                <CCol md="6">
                                    <div className="mb-3 qr-name">
                                        <label htmlFor="email"><b>Send Email Address</b></label>
                                        <CFormInput type="email" id="email" className='qr-name' placeholder="Emails from the form will be sent to this address" />
                                    </div>
                                </CCol>
                                <CCol md="6">
                                    <div className="mb-3 qr-name">
                                        <label htmlFor="subject"><b>Email Subject</b></label>
                                        <CFormInput type="text" className='qr-name' id="subject" placeholder="Something you would know where it comes from" />
                                    </div>
                                </CCol>
                                <CCol md="6">
                                    <div className="mb-3 qr-name">
                                        <label htmlFor="formLabel"><b>Form Label</b><span className='ctaContact-span'> leave empty to disable</span></label>
                                        <CFormInput type="text" value={formlabel} className='qr-name' id="formLabel" placeholder="e.g. Need help?" onChange={handleInputChange} />
                                    </div>
                                </CCol>
                                <CCol md="6">
                                    <div className="mb-3 qr-name">
                                        <label htmlFor="formDescription">
                                            <b>Form Description</b>
                                            <span className="ctaContact-span"> leave empty to disable</span>
                                        </label>
                                        <CFormInput
                                            id="formDescription"
                                            className="qr-name"
                                            placeholder="(optional) Provide a description or anything you want to add to the form"
                                        />
                                    </div>
                                </CCol>
                                <CCol md="6">
                                    <div className="mb-3 qr-name">
                                        <label htmlFor="thankYouMessage"><b>Thank You Message</b></label>
                                        <CFormInput type="text" id="thankYouMessage" className='qr-name' placeholder="e.g. Thank you. We will respond asap." />
                                    </div>
                                </CCol>
                            </CRow>
                        </CCard>

                        <CCard className="mb-3" style={{ cursor: "pointer" }}>
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
                                                    <label className="qr-name mb-3">Name Placeholder</label>
                                                    <CFormInput
                                                        placeholder="Name"
                                                        className="qr-name"
                                                        value={namePlaceholder}
                                                        onChange={(e) => setNamePlaceholder(e.target.value)}
                                                    />
                                                    <span className="ctaContact-span">If you want to use a different language, change these.</span>
                                                </CCol>
                                                <CCol md="3">
                                                    <label className="qr-name mb-3">Email Placeholder</label>
                                                    <CFormInput
                                                        placeholder="Email"
                                                        className="qr-name"
                                                        value={emailPlaceholder}
                                                        onChange={(e) => setEmailPlaceholder(e.target.value)}
                                                    />
                                                    <span className="ctaContact-span">If you want to use a different language, change these.</span>
                                                </CCol>
                                                <CCol md="3">
                                                    <label className="qr-name mb-3">Message Placeholder</label>
                                                    <CFormInput
                                                        placeholder="Message"
                                                        className="qr-name"
                                                        value={messagePlaceholder}
                                                        onChange={(e) => setMessagePlaceholder(e.target.value)}
                                                    />
                                                    <span className="ctaContact-span">If you want to use a different language, change these.</span>
                                                </CCol>
                                                <CCol md="3">
                                                    <label className="qr-name mb-3">Send Button Placeholder</label>
                                                    <CFormInput
                                                        placeholder="Send"
                                                        className="qr-name"
                                                        value={sendPlaceholder}
                                                        onChange={(e) => setSendPlaceholder(e.target.value)}
                                                    />
                                                    <span className="ctaContact-span">If you want to use a different language, change these.</span>
                                                </CCol>
                                            </CRow>
                                        </CCardBody>
                                    </CCollapse>
                                </CCol>
                            </CRow>
                        </CCard>


                        <CCard className="mb-3" style={{ cursor: "pointer" }}>
                            <CRow>
                                <CCol md="12">
                                    <CButton
                                        color="blue"
                                        className="w-100 text-start qr-name p-3"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setAppearanceOpen(!appearanceOpen);
                                        }}
                                    >
                                        <CIcon icon={cilPlus} className='ctaContact-blue-colour' /> <span className='ctaContact-blue-colour'>Appearance Customization</span>
                                    </CButton>
                                    <CCollapse visible={appearanceOpen}>
                                        <CCardBody>
                                            <CRow className='qr-name'>
                                                <CCol md="4" className="qr-name mb-5">
                                                    <label className="mb-1">Form Background Color</label>
                                                    <CFormInput type="color" value={formBgColor} onChange={(e) => setFormBgColor(e.target.value)} />
                                                </CCol>
                                                <CCol md="4">
                                                    <label className="mb-1">Form Text Color</label>
                                                    <CFormInput type="color" value={formTextColor} onChange={(e) => setFormTextColor(e.target.value)} />
                                                </CCol>
                                                <CCol md="4">
                                                    <label className="mb-1">Input Background Color</label>
                                                    <CFormInput type="color" value={inputBgColor} onChange={(e) => setInputBgColor(e.target.value)} />
                                                </CCol>
                                                <CCol md="4">
                                                    <label className="mb-1">Input Text Color</label>
                                                    <CFormInput type="color" value={inputTextColor} onChange={(e) => setInputTextColor(e.target.value)} />
                                                </CCol>
                                                <CCol md="4">
                                                    <label className="mb-1">Button Background Color</label>
                                                    <CFormInput type="color" value={buttonBgColor} onChange={(e) => setButtonBgColor(e.target.value)} />
                                                </CCol>
                                                <CCol md="4">
                                                    <label className="mb-1">Button Text Color</label>
                                                    <CFormInput type="color" value={buttonTextColor} onChange={(e) => setButtonTextColor(e.target.value)} />
                                                </CCol>
                                            </CRow>

                                            <p className='qr-name mt-5'>Overlay Position</p>
                                            <div className='col-2'>
                                                <Select
                                                    className='qr-name'
                                                    options={options}
                                                    value={selectedOption}
                                                    onChange={handleChange}
                                                    isSearchable
                                                />
                                            </div>

                                            <hr></hr>

                                            <div className='col-12 qr-name'>
                                                <p className='mb-2'><b>Webhook Notification</b></p>
                                                <input type='text' onFocus={focus} style={{ width: '100%', borderRadius: '4px', borderWidth: '1px', borderColor: 'rgba(184, 184, 184, 0.719)', padding: '5px 4px' }} placeholder='e.g. https://domain.com/path/to/webhook-receiver' />
                                                <span className='ctaContact-span'>If you want to receive a notification directly to your app, add the url to your app's handler and as soon as there is a submission, we will send a notification to this url as well as an email to the address provided above.</span>
                                            </div>

                                        </CCardBody>
                                    </CCollapse>
                                </CCol>
                            </CRow>
                        </CCard>

                        <CRow className="mt-4">
                            <CCol md="12" className="text-start">
                                <CButton color="primary" className='qr-name' onClick={() => {
                                    navigate('/base/navs')
                                }}>Create</CButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </div>

                <div className='col-4'>
                    <CCard className='col-6 mb-3' >
                        <b> <p className='qr-name p-2 text-start m-auto' > Need Help ?</p></b>
                    </CCard>

                    <CCard className="p-3 mt-4 mb-3">
                        <h6>{formlabel ? formlabel : 'Contact Form'}</h6>

                        <label className="qr-name mb-1"><b>{namePlaceholder} </b></label>
                        <CFormInput placeholder="Name" className="qr-name p-2 mb-3" />

                        <label className="qr-name mb-1"><b>{emailPlaceholder}</b></label>
                        <CFormInput placeholder="Email" className="qr-name p-2 mb-3" />

                        <label className="qr-name mb-1"><b>{messagePlaceholder}</b></label>
                        <CFormInput
                            placeholder="Message"
                            className="qr-name p-2 mb-3"
                            as="textarea"
                            rows={3}
                        />

                        <CButton
                            color="dark"
                            style={{ marginTop: '10px', width: 'auto', maxWidth: '90px' }}
                            className="qr-name"
                        >{sendPlaceholder}
                        </CButton>


                    </CCard>

                    <CCard className='p-3 mb-3'>
                        <p className='qr-name mb-3 '><b>Webhook Notification</b></p>
                        <p className='qr-name'>If you add a webhook url, we will send a notification to that url with the contact form data. You will be able to integrate it with your own app or a third-party app. Below is a sample data that will be sent in JSON format via a POST request.</p>
                        <div
                            style={{
                                backgroundColor: '#f8f9fa',
                                padding: '10px',
                                borderRadius: '5px',
                                overflowX: 'auto',
                                maxHeight: '200px',
                                fontFamily: 'monospace'
                            }}
                            className='qr-name text-muted'
                        >
                            <pre style={{ margin: 0 }}>{sampleData}</pre>
                        </div>
                    </CCard>

                </div>

            </div>
        </CCardBody>
    )
}

export default EditCtaContact