import { CButton, CCard, CCardBody, CFormInput } from '@coreui/react';
import React, { useState } from 'react';
import Select from 'react-select';

const AddPixel = () => {
    const options = [
        { value: 'bottom-left', label: 'Google Tag Manager' },
        { value: 'bottom-right', label: 'Google Analytics' },
        { value: 'bottom-right', label: 'Google Facebook' },
        { value: 'bottom-right', label: 'Google Ads' },
        { value: 'bottom-right', label: 'LinkedIn' },
        { value: 'bottom-right', label: 'Twitter' },
        { value: 'bottom-right', label: 'AdRoll' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (option) => setSelectedOption(option);

    return (
        <CCardBody>
            <h6 className='title-text'>Add Pixel</h6>
            <CCardBody>
                <div className='col-12 d-flex flex-wrap'>
                    <div className='col-8'>
                        <CCard className='p-3 mt-3'>
                            <div className='col-12 d-flex'>
                                <div className='col-4'>
                                    <div className='' style={{ width: '96%' }}>
                                        <p>Pixel Provider</p>
                                        <Select
                                            options={options}
                                            value={selectedOption}
                                            onChange={handleChange}
                                            isSearchable

                                            onInputChange={() => { }}

                                        />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <p>Pixel Provider</p>
                                    <CFormInput placeholder='Shopify Campaign' style={{ width: '96%' }} />
                                </div>
                                <div className='col-4'>
                                    <p>Pixel Tag</p>
                                    <CFormInput style={{ width: '96%' }} placeholder="e.g. Numerical or alphanumerical values only" />
                                </div>
                            </div>

                            <button color="primary" type="button" className=' mt-3 button' style={{ width: '12%' }}>
                                Add Pixel
                            </button>
                        </CCard>
                    </div>
                    <div className='col-4'>
                        <CCard className='p-3 m-3'>
                            <p>What are tracking pixels?</p>
                            <p>Ad platforms such as Facebook and Adwords provide a conversion tracking tool to allow you to gather data on your customers and how they behave on your website. By adding your pixel ID from either of the platforms, you will be able to optimize marketing simply by using short URLs.</p>
                            <button color="primary" type="button" className='qr-name mt-3 button' style={{ width: '20%' }}>
                                Create
                            </button>
                        </CCard>
                    </div>

                </div>
            </CCardBody>
        </CCardBody>
    );
};

export default AddPixel;