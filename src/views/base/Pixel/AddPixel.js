import { CCard, CCardBody, CFormInput } from '@coreui/react';
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
            <h6 className='title-text'>Custom Splash Pages</h6>
            <CCardBody>
                <div className='col-12 d-flex'>
                    <div className='col-8'>
                        <CCard className='p-2'>
                            <div className='col-12 d-flex'>
                                <div className='col-4'>
                                    <p>Pixel Provider</p>
                                    <Select
                                        options={options}
                                        value={selectedOption}
                                        onChange={handleChange}
                                        isSearchable
            
                                        onInputChange={() => { }}
                                        styles={{width: '98%'}}
                                    />
                                </div>
                                <div className='col-4'>
                                    <p>Pixel Provider</p>
                                    <CFormInput placeholder='Shopify Campaign' style={{width:'99%'}} />
                                </div>
                                <div className='col-4'>
                                    <p>Pixel Tag</p>
                                    <CFormInput style={{width:'99%'}} placeholder="e.g. Numerical or alphanumerical values only" />
                                </div>
                            </div>
                        </CCard>

                    </div>
                    <div className='col-4'></div>
                </div>
            </CCardBody>
        </CCardBody>
    );
};

export default AddPixel;