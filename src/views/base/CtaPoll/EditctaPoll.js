import React, { useState } from 'react';
import { CButton, CCard, CCardBody, CCol, CCollapse, CForm, CFormInput, CRow, CProgress, CProgressBar } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'

const EditctaPoll = () => {
    const navigate = useNavigate()

    // UI state
    const [textLabelsOpen, setTextLabelsOpen] = useState(false);
    const [appearanceOpen, setAppearanceOpen] = useState(false);

    // searchable drop down
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (option) => setSelectedOption(option);

    // Position options

    const options = [
        { value: 'bottom-left', label: 'Bottom Left' },
        { value: 'bottom-right', label: 'Bottom Right' },
    ];

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [formData, setFormData] = useState({
        name: '',
        question: '',
        options: ['', ''],
        overlayBgColor: '#ffffff',
        overlayTextColor: '#000000',
        buttonBgColor: '#000000',
        buttonTextColor: '#ffffff',
        votePlaceholder: 'Vote',
        thankYouMessage: 'Thanks for voting!',
        position: { value: 'bottom-right', label: 'Bottom Right' }
    });

    // Handle option change
    const handleOptionChange = (index, value) => {
        setFormData((prevData) => {
            const newOptions = [...prevData.options];
            newOptions[index] = value;
            return { ...prevData, options: newOptions };
        });
    };

    // Add new option
    const addOption = (e) => {
        e.preventDefault();
        if (formData.options.length < 10) {
            setFormData((prevData) => ({
                ...prevData,
                options: [...prevData.options, ''],
            }));
        }
    };

    // Handle form submission
    const handleCreate = () => {
        // Filter out empty options
        const validOptions = formData.options.filter(opt => opt.trim() !== '');
        const finalData = {
            ...formData,
            options: validOptions
        };
        localStorage.setItem('ctaPollData', JSON.stringify(finalData));
        navigate('/base/navs');
    };

    const pollData = {
        question: "What is your favorite color?",
        options: [
            { name: "Red", count: 0 },
            { name: "Purple", count: 0 },
            { name: "Blue", count: 0 }
        ],
        totalVotes: 0
    };

    return (
        <CCardBody>
            <h5>CTA Poll</h5>
            <p className='qr-name'>Create a quick poll where users will be able to answer it upon visit.</p>

            <div className='row'>
                {/* Left Column - Form */}
                <div className='col-8'>
                    <CForm>
                        <CCard className='p-3 mb-3'>
                            <CRow>
                                {/* Name Input */}
                                <CCol md="12" className='mb-3'>
                                    <label className="qr-name"><b>Name</b></label>
                                    <CFormInput
                                        name="name"
                                        value={formData.name}
                                        placeholder="e.g. Poll"
                                        onChange={handleInputChange}
                                        className='qr-name'
                                    />
                                </CCol>

                                {/* Question Input */}
                                <CCol md="12" className='mb-3'>
                                    <label className="qr-name"><b>Question</b></label>
                                    <CFormInput
                                        name="question"
                                        value={formData.question}
                                        placeholder="e.g. What is your favorite color?"
                                        onChange={handleInputChange}
                                        className='qr-name'
                                    />
                                </CCol>

                                {/* Options */}
                                <CCol md="12">
                                    <h6>Options (max 10)</h6>
                                    <p className='qr-name'>You can add up to 10 options for each poll. To add an extra option click Add Option above. To ignore a field, leave it empty.</p>

                                    {formData.options.map((option, index) => (
                                        <CFormInput
                                            key={index}
                                            value={option}
                                            className='mb-2 qr-name'
                                            placeholder={`#${index + 1}`}
                                            onChange={(e) => handleOptionChange(index, e.target.value)}
                                        />
                                    ))}

                                    {formData.options.length < 10 && (
                                        <button className='qr-name add-btn' onClick={addOption}>
                                            +Add
                                        </button>
                                    )}
                                </CCol>

                            </CRow>
                        </CCard>

                        {/* Text Labels Section */}
                        <CCard className="mb-3">
                            <CButton
                                color="blue"
                                className="w-100 text-start p-3 qr-name ctaContact-blue-colour"
                                onClick={() => setTextLabelsOpen(!textLabelsOpen)}
                            >
                                <CIcon icon={cilPlus} className='ctaContact-blue-colour' /> <span className='ctaContact-blue-colour'>Text Labels</span>
                            </CButton>
                            <CCollapse visible={textLabelsOpen}>
                                <CCardBody>
                                    <CRow>
                                        <CCol md="6">
                                            <label className="mb-2 qr-name">Vote Button Text</label>
                                            <CFormInput
                                                name="votePlaceholder"
                                                value={formData.votePlaceholder}
                                                onChange={handleInputChange}
                                                className='qr-name'
                                            />
                                        </CCol>
                                        <CCol md="6">
                                            <label className="mb-2 qr-name">Thank You Message</label>
                                            <CFormInput
                                                name="thankYouMessage"
                                                value={formData.thankYouMessage}
                                                onChange={handleInputChange} className='qr-name'
                                            />
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCollapse>
                        </CCard>

                        {/* Appearance Customization */}
                        <CCard className="mb-3">
                            <CButton
                                color="blue"
                                className="w-100 text-start p-3 qr-name "
                                onClick={() => setAppearanceOpen(!appearanceOpen)}
                            >
                                <CIcon icon={cilPlus} className='ctaContact-blue-colour ' /><span className='ctaContact-blue-colour'> Appearance Customization</span>
                            </CButton>
                            <CCollapse visible={appearanceOpen}>
                                <CCardBody>
                                    <CRow>
                                        <CCol md="6" className="mb-3">
                                            <label className='qr-name'>Overlay Background Color</label>
                                            <CFormInput
                                                type="color"
                                                name="overlayBgColor"
                                                value={formData.overlayBgColor}
                                                onChange={handleInputChange}
                                            />
                                        </CCol>
                                        <CCol md="6" className="mb-3">
                                            <label className='qr-name'>Overlay Text Color</label>
                                            <CFormInput
                                                type="color"
                                                name="overlayTextColor"
                                                value={formData.overlayTextColor}
                                                onChange={handleInputChange}
                                            />
                                        </CCol>
                                        <CCol md="6" className="mb-3">
                                            <label className='qr-name'>Button Background Color</label>
                                            <CFormInput
                                                type="color"
                                                name="buttonBgColor"
                                                value={formData.buttonBgColor}
                                                onChange={handleInputChange}
                                            />
                                        </CCol>
                                        <CCol md="6" className="mb-3">
                                            <label className='qr-name'>Button Text Color</label>
                                            <CFormInput
                                                type="color"
                                                name="buttonTextColor"
                                                value={formData.buttonTextColor}
                                                onChange={handleInputChange}
                                            />
                                        </CCol>
                                    </CRow>

                                    <div className="mt-3">
                                        <label className='qr-name'>Overlay Position</label>
                                        <div className='col-2'>
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
                        </CCard>

                        <CButton
                            color="primary"
                            className="mt-3 qr-name "
                            onClick={handleCreate}

                        >
                            Create
                        </CButton>
                    </CForm>
                </div>

                {/* Right Column - Preview */}
                <div className='col-4'>
                    <CCard className='p-3' style={{
                        backgroundColor: formData.overlayBgColor,
                        color: formData.overlayTextColor
                    }}>
                        <h6>{formData.question || 'Your question here?'}</h6>

                        {formData.options.map((option, index) => (
                            <div key={index} className="mb-2">
                                {option || `# ${index + 1}`}
                            </div>
                        ))}

                        <CButton
                            style={{
                                backgroundColor: formData.buttonBgColor,
                                color: formData.buttonTextColor,
                                border: 'none',
                                marginTop: '10px',
                                width: '20%',
                                fontSize: '12px',
                            }}
                        >
                            {formData.votePlaceholder}
                        </CButton>
                    </CCard>

                    <CCard className="p-3 mt-4">
                        <p><strong>Poll Results</strong></p>
                        <h6>{pollData.question}</h6>

                        {pollData.options.map((option, index) => (
                            <div key={index}>
                                <p className="qr-name m-0">{option.name} {option.count}</p>
                                <CProgress className="mb-2" height={20}>
                                    <CProgressBar
                                        value={pollData.totalVotes > 0 ? (option.count / pollData.totalVotes) * 100 : 5} 
                                        color="#1A85C2"
                                        style={{ minWidth: '20px' , backgroundColor:'#1A85C2'}}  
                                    >
                                        {option.count}
                                    </CProgressBar>
                                </CProgress>
                            </div>
                        ))}

                        <p className="qr-name m-0">Total: {pollData.totalVotes}</p>
                    </CCard>

                </div>
            </div>

        </CCardBody>
    )
}

export default EditctaPoll