import React, { useState, useRef } from 'react'
import {
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CFormInput,
    CFormLabel,
    CButton,
    CFormText,
    CRow,
} from '@coreui/react'
import { cilBold, cilItalic, cilUnderline, cilStrikethrough, cilTerminal, cilFeaturedPlaylist, cilMedicalCross, cilDrop, cilEuro, cilAccountLogout, cilDelete, cilFont } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const CustomSplash = () => {
    const [formData, setFormData] = useState({
        name: '',
        counter: '',
        linkToProduct: '',
        customTitle: '',
        bannerFile: null,
        avatarFile: null,
        customMessage: ''
    })

    const editorRef = useRef(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0]
        setFormData(prev => ({
            ...prev,
            [fieldName]: file
        }))
    }

    const handleFormat = (command) => {
        document.execCommand(command, false, null)
        editorRef.current.focus()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.customMessage = editorRef.current.innerHTML
        console.log('Form submitted:', formData)

    }

    const handleRemoveFormat = () => {
        document.execCommand('removeFormat', false, null)
        editorRef.current.focus()
    }


    const EditorToolbar = () => (
        <div className="editor-toolbar border p-2 mb-1 rounded bg-light">
            <CButton
                color="light"
                className="me-2"
                onClick={() => handleFormat('bold')}
            >
                <CIcon icon={cilBold} />
            </CButton>
            <CButton
                color="light"
                className="me-2"
                onClick={() => handleFormat('italic')}
            >
                <CIcon icon={cilItalic} />
            </CButton>
            <CButton
                color="light"
                className="me-2"
                onClick={() => handleFormat('underline')}
            >
                <CIcon icon={cilUnderline} />
            </CButton>
            <CButton
                color="light"
                onClick={handleRemoveFormat}
            >
                <CIcon icon={cilFont} />
            </CButton>
        </div>
    )

    return (
        <div>
            <h5 className="mb-5">Create a Custom Splash</h5>
            <CCard>
                <CCardBody>
                    <CRow>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit}>
                                <div className="row mb-4 qr-name">
                                    <div className="col-md-6">
                                        <CFormLabel htmlFor="name"><b>Name</b></CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="e.g. Promo"
                                            className='qr-name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <CFormLabel htmlFor="counter"><b>Counter</b></CFormLabel>
                                        <CFormInput
                                            type="number"
                                            id="counter"
                                            name="counter"
                                            placeholder="e.g. 15"
                                            className='qr-name'
                                            value={formData.counter}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6 qr-name">
                                        <CFormLabel htmlFor="linkToProduct"><b>Link to Product</b></CFormLabel>
                                        <CFormInput
                                            type="url"
                                            id="linkToProduct"
                                            name="linkToProduct"
                                            className='qr-name'
                                            placeholder="e.g. http://domain.com/"
                                            value={formData.linkToProduct}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6 qr-name">
                                        <CFormLabel htmlFor="customTitle"><b>Custom Title</b></CFormLabel>
                                        <CFormInput
                                            type="text"
                                            id="customTitle"
                                            name="customTitle"
                                            className='qr-name'
                                            placeholder="e.g. Get a $10 discount"
                                            value={formData.customTitle}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-4 qr-name">
                                    <div className="col-md-6">
                                        <CFormLabel htmlFor="bannerUpload"><b>Upload Banner</b></CFormLabel>
                                        <CFormInput
                                            type="file"
                                            id="bannerUpload"
                                            accept=".png,.jpg,.jpeg" className='qr-name'
                                            onChange={(e) => handleFileChange(e, 'bannerFile')}
                                        />
                                        <CFormText>
                                            The minimum width must be 980px and the height must be between 250 and 500.
                                            The format must be a PNG or a JPG. Maximum size is 500KB
                                        </CFormText>
                                    </div>
                                    <div className="col-md-6">
                                        <CFormLabel htmlFor="avatarUpload"><b>Upload Avatar</b></CFormLabel>
                                        <CFormInput
                                            type="file"
                                            id="avatarUpload"
                                            accept=".jpg,.png,.jpeg,.gif" className='qr-name'
                                            onChange={(e) => handleFileChange(e, 'avatarFile')}
                                        />
                                        <CFormText>
                                            Avatar must be one the following formats: jpg, png, jpeg, gif and be less than 500kb.
                                        </CFormText>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <CFormLabel className='qr-name'><b>Custom Message</b></CFormLabel>
                                    <div className="custom-editor border rounded">
                                        <EditorToolbar />
                                        <div
                                            ref={editorRef}
                                            className="editor-content p-2 qr-name"
                                            contentEditable
                                            style={{
                                                minHeight: '200px',
                                                outline: 'none',
                                                overflowY: 'auto'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <CButton className='qr-name' type="submit" color="primary">
                                        Create
                                    </CButton>
                                </div>
                            </CForm>
                        </CCardBody>

                    </CRow>
                </CCardBody>
            </CCard>
        </div>
    )
}

// Add these styles to your CSS
const styles = `
.custom-editor {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.editor-toolbar {
  border-bottom: 1px solid #ddd;
}

.editor-content {
  min-height: 200px;
  padding: 10px;
}

.editor-content:focus {
  outline: none;
  background-color: #fff;
}
`

export default CustomSplash