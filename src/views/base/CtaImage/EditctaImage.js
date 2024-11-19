import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCol, CCollapse, CFormInput, CRow } from '@coreui/react'
import React from 'react'
import Select from 'react-select/base'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditCtaImage = () => {
    const navigate = useNavigate();
    const [appearanceOpen, setAppearanceOpen] = useState(false);
    const [formData, setFormData] = useState({
        overlayBgColor: '#008aff',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


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
            <h6>CTA Image</h6>
            <p className='qr-name text-muted'>Create a small popup with an image of your choice.</p>

            <div className='col-12 d-flex'>
                <div className='col-8'>
                    <CCard>
                        <div className='col-12 d-flex flex-wrap p-3'>
                            <div className='col-6 mb-2'>
                                <p className='qr-name m-1'>Name</p>
                                <CFormInput type='text' placeholder='e.g.Promo' className='qr-name' style={{ width: '98%' }} />
                            </div>
                            <div className='col-6 mb-2'>
                                <p className='qr-name m-1'>Link</p>
                                <CFormInput type='text' placeholder='e.g. Need help?' className='qr-name' style={{ width: '98%' }} />
                                <p className='ctaContact-span ms-1 text-muted'>If you add a link here, the whole overlay will be linked to this when clicked.</p>
                            </div>
                            <div className='col-6 mb-2'>
                                <p className='qr-name m-1'>Logo</p>
                                <CFormInput type='file' className='qr-name' style={{ width: '98%' }} />
                                <p className='ctaContact-span ms-1 text-muted'>Logo should be square with a maximum size of 100x100. To remove the image, click on the upload field and then cancel it.</p>
                            </div>
                            <div className='col-6 mb-2'>
                                <p className='qr-name m-1'>Background Image</p>
                                <CFormInput type='file' className='qr-name' style={{ width: '98%' }} />
                                <p className='ctaContact-span ms-1 text-muted'>Image should be rectangle with a maximum size of 600x150. To remove the image, click on the upload field and then cancel it.</p>
                            </div>
                        </div>
                    </CCard>

                    {/* Appearance Customization */}
                    <CCard className="mb-3 mt-3" style={{ cursor: "pointer" }}>
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
                <div className='col-4 p-4'>
                    <div
                        className="col-9"
                        style={{
                            backgroundColor: formData.overlayBgColor,
                            padding: '15px',
                            borderRadius: '5px',
                        }}
                    ></div>        </div>
            </div>

        </CCardBody>
    )
}

export default EditCtaImage