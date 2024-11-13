import React from 'react'
import classNames from 'classnames'
import { useState } from 'react';
import { X, Globe, User, MoreVertical } from 'lucide-react';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormInput,
  CFormLabel,
  CContainer,
  CForm,
  CNav,
  CNavItem,
  CNavLink,
  CSidebar,
  CSidebarNav,
  CDropdown,
  CDropdownMenu, CDropdownToggle,
  CDropdownItem, CModal, CModalBody, CModalFooter, CModalHeader,

} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilSettings,
  cilTag,
  cilLocationPin,
  cilLink,
  cilDevices,
  cilGlobeAlt,
  cilBorderAll,
  cilWatch,
  cilAsterisk,
  cilOptions
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showForm, setShowForm] = useState(false); // Manages form visibility

  const [showMetaTags, setShowMetaTags] = useState(false); // Manages Meta Tags visibility
  const [showGeoTargeting, setShowGeoTargeting] = useState(false);
  const [showDeepLinking, setShowDeepLinking] = useState(false);
  const [showDeepLinking1, setShowDeepLinking1] = useState(false);
  const [showLanguageTarget, setShowLanguageTarget] = useState(false);
  const [showTargetPixel, setShowTargetPixel] = useState(false);
  const [showExpiration, setShowExpiration] = useState(false);
  const [showABtesting, setShowABtesting] = useState(false);
  const [showparameter, setShowparameter] = useState(false);

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };
  const handleCustomizeClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSettingsClick = () => {
    setShowForm(!showForm)
  }

  const handleMetaTagsClick = () => {
    setShowMetaTags(!showMetaTags);
  };

  const handleGeoTargetingClick = () => {
    setShowGeoTargeting(!showGeoTargeting);
  };

  const handleDeepLinking = () => {
    setShowDeepLinking(!showDeepLinking);
  }

  const handleshowDeepLinking1 = () => {
    setShowDeepLinking1(!showDeepLinking1)
  }

  const handleshowLanguageTarget = () => {
    setShowLanguageTarget(!showLanguageTarget)
  }

  const handleshowTargetPixel = () => {
    setShowTargetPixel(!showTargetPixel)
  }

  const handleshowExpiration = () => {
    setShowExpiration(!showExpiration)
  }

  const handleshowABtesting = () => {
    setShowABtesting(!showABtesting)
  }

  const handleshowparameter = () => {
    setShowparameter(!showparameter)
  }

  // geo target
  const [geoRows, setGeoRows] = useState([{ country: '', region: '', city: '' }]);

  const handleAddRow = () => {
    setGeoRows([...geoRows, { country: '', region: '', city: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...geoRows];
    newRows[index][name] = value;
    setGeoRows(newRows);
  };

  const handleDeleteRow = (index) => {
    const newRows = geoRows.filter((_, i) => i !== index);
    setGeoRows(newRows);
  };

  // deep linking
  const [showDeepLinkingForm, setShowDeepLinkingForm] = useState(false);

  const handleSwitchToggle = () => {
    setShowDeepLinkingForm(!showDeepLinkingForm);
  };


  // device target
  const [deviceRows, setDeviceRows] = useState([{ deviceType: '', os: '', browser: '' }]);

  const handleAddDeviceRow = () => {
    setDeviceRows([...deviceRows, { deviceType: '', os: '', browser: '' }]);
  };

  const handleDeviceInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...deviceRows];
    newRows[index][name] = value;
    setDeviceRows(newRows);
  };

  const handleDeleteDeviceRow = (index) => {
    const newRows = deviceRows.filter((_, i) => i !== index);
    setDeviceRows(newRows);
  };

  // language target
  const [languageRows, setLanguageRows] = useState([{ language: '', proficiency: '' }]);

  // Function to handle adding a new row
  const handleAddLanguageRow = () => {
    setLanguageRows([...languageRows, { language: '', proficiency: '' }]);
  };

  // Function to handle input change
  const handleLanguageInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...languageRows];
    newRows[index][name] = value;
    setLanguageRows(newRows);
  };

  // Function to handle deleting a row
  const handleDeleteLanguageRow = (index) => {
    const newRows = languageRows.filter((_, i) => i !== index);
    setLanguageRows(newRows);
  };

  // expiration
  const [expirationDate, setExpirationDate] = useState('');
  const [clickLimit, setClickLimit] = useState('');

  const handleDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleClickLimitChange = (e) => {
    setClickLimit(e.target.value);
  };


  // Archive selected
  const [showModal, setShowModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [modalType, setModalType] = useState(''); // To handle different modals

  const handleActionChange = (e) => {
    const value = e.target.value;
    if (value === 'Add to Campaign') {
      setModalType('archive');
      setShowModal(true);
    } else if (value === 'Add to Channel') {
      setModalType('channel');
      setShowModal(true);
    } else if (value === 'Add Pixels') {
      setModalType('pixels');
      setShowModal(true);
    }
    setSelectedAction(value);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedAction('');
    setModalType('');
  };

  const handleAdd = () => {
    setShowModal(false);
    setSelectedAction('');
    setModalType('');
  };

  const activities = [
    {
      id: 1,
      pageName: "Sample Demo Page",
      url: "https://demo.gempixel.com/short/demo",
      location: "Santa Clara, United States",
      os: "Mac OS X",
      browser: "Edge",
      type: "Direct, email or others",
      timeAgo: "5 minutes ago",
      language: "EN",
      pageType: "Bio Page"
    },
    {
      id: 2,
      pageName: "Sample Demo Page",
      url: "https://demo.gempixel.com/short/demo",
      location: "Nuremberg, Germany",
      os: "Linux",
      browser: "Firefox",
      type: "Direct, email or others",
      timeAgo: "12 minutes ago",
      language: "EN",
      pageType: "Bio Page"
    },
    {
      id: 3,
      pageName: "Sample Demo Page",
      url: "https://demo.gempixel.com/short/demo",
      location: "Santa Clara, United States",
      os: "Mac OS X",
      browser: "Edge",
      type: "Direct, email or others",
      timeAgo: "5 minutes ago",
      language: "EN",
      pageType: "Bio Page"
    },
    {
      id: 4,
      pageName: "Sample Demo Page",
      url: "https://demo.gempixel.com/short/demo",
      location: "Nuremberg, Germany",
      os: "Linux",
      browser: "Firefox",
      type: "Direct, email or others",
      timeAgo: "12 minutes ago",
      language: "EN",
      pageType: "Bio Page"
    }
  ];

  return (
    <>
      <div className='col-12 row justify-content-start align-items-center section-margin'>
        <div className='col-xl-3 col-lg-3 col-md-3 col-xs-6 col-sm-6  row justify-content-between align-items-center'>
          <div className='mb-3'>
            <CCard>
              <CCardBody>
                <h6>Links</h6>
                <h3>3</h3>
                <p className='mt-4'>+0 Today</p>
              </CCardBody>
            </CCard>
          </div>
          <div className=''>
            <CCard>
              <CCardBody>
                <h6>Links</h6>
                <h3>3</h3>
                <p className='mt-4'>+0 Today</p>
              </CCardBody>
            </CCard>
          </div>
        </div>
        <div className='col-xl-9 col-lg-9 col-md-9 col-xs-6 col-sm-6' style={{ marginLeft: '20px' }}>
          <CCard>
            <CCardBody>
              <MainChart />
            </CCardBody>
          </CCard>
        </div>
      </div>

      <div className='col-12 d-flex justify-content-between qr-name'>
        <div className='col-6 '>
          <CRow style={{ width: '99%' }}>
            <CCol xs={12} className=' qr-name'>
              <CCard className="mb-4">
                <CCardBody className=' qr-name'>
                  <div className="d-flex align-items-center gap-2 mb-3 qr-name">
                    <CFormInput
                      type="url"
                      placeholder="Paste a long link"
                      className="flex-grow-1  qr-name"
                    />
                    <CButton
                      color="light"
                      onClick={handleSettingsClick}
                      className="d-flex align-items-center p-2  qr-name"
                    >
                      <CIcon icon={cilSettings} size="lg" />
                    </CButton>
                    <CButton color="primary" className=' qr-name'>
                      Shorten
                    </CButton>
                  </div>

                  <div className="d-flex justify-content-end gap-2 mb-3  qr-name">
                    <CButton color="light" variant="" className=' qr-name'>
                      Single
                    </CButton>
                    <CButton color="light" variant="" className=' qr-name'>
                      Multiple
                    </CButton>
                  </div>

                  {showForm && (
                    <div className="mt-4 p-4 border rounded bg-light  qr-name">
                      <CRow className="g-3">
                        <CCol md={6}>
                          <div className="mb-3">
                            <label className="form-label ">Domain</label>
                            <CFormSelect className='qr-name'>
                              <option className='qr-name'>https://demo.gempixel.com/short</option>
                            </CFormSelect>
                          </div>
                        </CCol>

                        <CCol md={6}>
                          <div className="mb-3">
                            <label className="form-label">Redirect</label>
                            <CFormSelect className=' qr-name'>
                              <option>Direct</option>
                            </CFormSelect>
                          </div>
                        </CCol>

                        <CCol md={6}>
                          <div className="mb-3">
                            <label className="form-label">Custom Alias</label>
                            <CFormInput className=' qr-name'
                              type="text"
                              placeholder="Type your custom alias here"
                            />
                          </div>
                        </CCol>

                        <CCol md={6}>
                          <div className="mb-3">
                            <label className="form-label">Password Protection</label>
                            <CFormInput className=' qr-name'
                              type="password"
                              placeholder="Type your password here"
                            />
                          </div>
                        </CCol>

                        <CCol md={6}>
                          <div className="mb-3">
                            <label className="form-label qr-name">Channel</label>
                            <CFormSelect className=' qr-name'>
                              <option>None</option>
                            </CFormSelect>
                          </div>
                        </CCol>

                        <CCol md={6}>
                          <div className="mb-3">
                            <label className="form-label qr-name">Description</label>
                            <CFormInput className=' qr-name'
                              type="text"
                              placeholder="Type your description here"
                            />
                          </div>
                        </CCol>
                      </CRow>

                      <CDropdown isOpen={isOpen} style={{ color: 'white' }} toggle={handleCustomizeClick} className="customize-btn mt-3 qr-name">
                        <CDropdownToggle caret className='qr-name'>
                          <CButton style={{ color: 'white' }} className=' qr-name p-0'>
                            <CIcon icon={cilSettings} size="md" className=' qr-name p-0' />  Customize
                          </CButton>
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={handleMetaTagsClick} className=' qr-name'>
                            <CIcon icon={cilTag} size="md" className="me-2" />
                            Meta Tags
                          </CDropdownItem>
                          <CDropdownItem onClick={handleGeoTargetingClick} className=' qr-name'>
                            <CIcon icon={cilLocationPin} size="md" className="me-2" />
                            Geo Targeting
                          </CDropdownItem>
                          <CDropdownItem onClick={handleshowDeepLinking1} className=' qr-name'>
                            <CIcon icon={cilLink} size="md" className="me-2" />
                            Deep Linking
                          </CDropdownItem>
                          <CDropdownItem onClick={handleDeepLinking} className=' qr-name'>
                            <CIcon icon={cilDevices} size="md" className="me-2" />
                            Device Targeting
                          </CDropdownItem>
                          <CDropdownItem onClick={handleshowLanguageTarget} className=' qr-name'>
                            <CIcon icon={cilGlobeAlt} className="me-2" />
                            Language Targeting
                          </CDropdownItem>
                          <CDropdownItem onClick={handleshowTargetPixel} className=' qr-name'>
                            <CIcon icon={cilBorderAll} className="me-2" />
                            Pixels
                          </CDropdownItem>
                          <CDropdownItem onClick={handleshowExpiration} className=' qr-name'>
                            <CIcon icon={cilWatch} className="me-2" />
                            Expiration
                          </CDropdownItem>
                          <CDropdownItem onClick={handleshowABtesting} className=' qr-name'>
                            <CIcon icon={cilAsterisk} className="me-2" />
                            A/B Testing
                          </CDropdownItem>
                          <CDropdownItem onClick={handleshowparameter} className=' qr-name'>
                            <CIcon icon={cilOptions} className="me-2" />
                            Parameters
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>

                      {/* meta tag */}
                      {showMetaTags && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="meta-tags-form qr-name">
                              <h6 className='mb-2 '>  <CIcon icon={cilTag} size="sm" className="me-1" />Meta Tags</h6>
                              <form className='d-flex justify-content-between'>
                                <div className='col-4'>
                                  <label className='mb-1 meta-tag-label '><h6 className='qr-name'>Custom Banner:</h6></label>
                                  <div className='selected-input2' style={{ width: "90%" }} >
                                    <input className='selected-input' type="file" style={{ width: "90%" }} />
                                  </div>
                                </div>
                                <div className='col-4'>
                                  <label className='mb-1 meta-tag-label qr-name'><h6 className='qr-name'>Meta Title:</h6></label>
                                  <input className='selected-input' style={{ width: "90%" }} type="text" placeholder="Enter your custom meta title" />
                                </div>
                                <div className='col-4'>
                                  <label className='mb-1 meta-tag-label'><h6 className='qr-name'>Meta Description:</h6></label>
                                  <input className='selected-input' style={{ width: "90%" }} type="text" placeholder="Enter your custom meta description" />
                                </div>
                              </form>
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* geo target */}
                      {showGeoTargeting && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="geo-targeting-form">
                              <div className='col-12 d-flex justify-content-between'>
                                <div className='col-6'>
                                  <h6 className='mb-2'><CIcon icon={cilLocationPin} size="lg" className="" /> Geo Targeting</h6>
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                  <span><button className='add-btn' onClick={handleAddRow}>+ Add</button></span>
                                </div>
                              </div>
                              {geoRows.map((row, index) => (
                                <form key={index} className='d-flex flex-wrap justify-content-between'>
                                  <div className='col-4 '>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Country:</h6></label>
                                    <input
                                      name="country"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter country"
                                      value={row.country}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Region:</h6></label>
                                    <input
                                      name="region"
                                      className='selected-input'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter region"
                                      value={row.region}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>City:</h6></label>
                                    <input
                                      name="city"
                                      className='selected-input'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter city"
                                      value={row.city}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>

                                  <button
                                    className='delete-btn btn-danger d-block mt-2 mb-3'
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleDeleteRow(index);
                                    }}
                                    type="button"
                                  >
                                    <span>Delete</span>
                                  </button>
                                </form>
                              ))}
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* deep linking */}
                      {showDeepLinking1 && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className='col-12 d-flex justify-content-between'>
                              <div className='col-9'>
                                <h6>Deep Linking</h6>
                                <p className='deeplink-p'>
                                  Enable this feature to force apps to open when visiting on mobile or open app store if app is not installed.
                                </p>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='flexSwitchCheckDefault'
                                  onChange={handleSwitchToggle}
                                  checked={showDeepLinkingForm}
                                />
                              </div>
                            </div>

                            {/* Conditional rendering for additional content when the switch is turned on */}
                            {showDeepLinkingForm && (
                              <div className="mt-3">
                                <p>
                                  To use deep links, you will need to define a main URL that will be used for all other devices, an app-specific URL for iPhone/iPad and/or Android, and the associated app store URL. You need to use the Device Targeting to set the correct app links for the associated devices.
                                </p>

                                <div className="mb-3">
                                  <label htmlFor="appStoreLink" className="form-label">Link to App Store</label>
                                  <input type="text" className="form-control qr-name" id="appStoreLink" placeholder="https://" />
                                </div>

                                <div className="mb-3">
                                  <label htmlFor="googlePlayLink" className="form-label">Link to Google Play</label>
                                  <input type="text" className="form-control qr-name" id="googlePlayLink" placeholder="https://" />
                                </div>
                              </div>
                            )}
                          </CCardBody>
                        </CCard>
                      )}

                      {/* device target */}
                      {showDeepLinking && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="device-targeting-form">
                              <div className='col-12 d-flex justify-content-between'>
                                <div className='col-6'>
                                  <h6 className='mb-2'>
                                    <CIcon icon={cilLink} className="" /> Device Targeting
                                  </h6>
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                  <span>
                                    <button className='add-btn' onClick={handleAddDeviceRow}>+ Add</button>
                                  </span>
                                </div>
                              </div>

                              {deviceRows.map((row, index) => (
                                <form key={index} className='d-flex flex-wrap justify-content-between'>
                                  <div className='col-6'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Device Type:</h6></label>
                                    <input
                                      name="deviceType"
                                      className='selected-input'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter device type"
                                      value={row.deviceType}
                                      onChange={(event) => handleDeviceInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-6'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Operating System:</h6></label>
                                    <input
                                      name="os"
                                      className='selected-input'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter operating system"
                                      value={row.os}
                                      onChange={(event) => handleDeviceInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-12 mt-2'>
                                    <label className='meta-tag-label'><h6 className='qr-name'> Browser:</h6></label>
                                    <input
                                      name="browser"
                                      className='selected-input '
                                      style={{ width: "100%" }}
                                      type="text"
                                      placeholder="Enter browser"
                                      value={row.browser}
                                      onChange={(event) => handleDeviceInputChange(index, event)}
                                    />
                                  </div>

                                  <button
                                    className='delete-btn d-block btn-danger d-block mt-2 mb-3'
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleDeleteDeviceRow(index);
                                    }}
                                    type="button"
                                  >
                                    <span>Delete</span>
                                  </button>
                                </form>
                              ))}
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* Language Targeting */}
                      {showLanguageTarget && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="language-targeting-form">
                              <div className='col-12 d-flex justify-content-between'>
                                <div className='col-6'>
                                  <h6 className='mb-2'>
                                    <CIcon icon={cilGlobeAlt} className="me-1" /> Language Targeting
                                  </h6>
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                  <span>
                                    <button className='add-btn' onClick={handleAddLanguageRow}>+ Add</button>
                                  </span>
                                </div>
                              </div>

                              {languageRows.map((row, index) => (
                                <form key={index} className='d-flex flex-wrap justify-content-between'>
                                  <div className='col-6'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Language:</h6></label>
                                    <input
                                      name="language"
                                      className='selected-input'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter language"
                                      value={row.language}
                                      onChange={(event) => handleLanguageInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-6'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Proficiency:</h6></label>
                                    <input
                                      name="proficiency"
                                      className='selected-input'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter proficiency"
                                      value={row.proficiency}
                                      onChange={(event) => handleLanguageInputChange(index, event)}
                                    />
                                  </div>

                                  <button
                                    className='delete-btn btn-danger d-block mt-2 mb-3'
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleDeleteLanguageRow(index);
                                    }}
                                    type="button"
                                  >
                                    <span>Delete</span>
                                  </button>
                                </form>
                              ))}
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* target pixel  */}
                      {showTargetPixel && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="language-targeting-form">
                              <div className='col-12 d-flex justify-content-between'>
                                <div className='col-12'>
                                  <h6 className='mb-2'>
                                    <CIcon icon={cilBorderAll} className="me-1" />Targeting Pixels
                                  </h6>
                                  <p>Add your targeting pixels below from the list. Please make sure to enable them in the pixels settings.</p>
                                </div>

                              </div>

                              {languageRows.map((row, index) => (
                                <form key={index} className='d-flex flex-wrap justify-content-between'>
                                  <div className='col-12'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Language:</h6></label>
                                    <input
                                      name="language"
                                      className='selected-input'
                                      style={{ width: "100%" }}
                                      type="text"
                                      placeholder="Enter language"
                                      value={row.language}
                                      onChange={(event) => handleLanguageInputChange(index, event)}
                                    />
                                  </div>
                                </form>
                              ))}
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* expiration */}
                      {showExpiration && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="language-targeting-form">
                              <div className='col-12 '>
                                <h6 className='mb-2'>
                                  <CIcon icon={cilAsterisk} className="me-2" /> Expiration
                                </h6>
                                <p className='expiration-p'>
                                  Links can be expired based on the amount of clicks or a specific date.
                                  You can also set a URL to redirect when the link expires.
                                </p>
                              </div>
                              <div className='row'>
                                <div className='col-6 mb-2'>
                                  <p className='mb-0'><b>Link Expiration</b></p>
                                  <p className='mb-1'>Set an expiration date to disable the link.</p>
                                  <input
                                    type='date'
                                    className='form-control qr-name'
                                    value={expirationDate}
                                    onChange={handleDateChange}
                                  />
                                </div>
                                <div className='col-6'>
                                  <p className='mb-0'><b>Click Limit</b></p>
                                  <p>Limit the number of clicks.</p>
                                  <input
                                    type='number'
                                    className='form-control qr-name'
                                    placeholder='e.g. 100'
                                    value={clickLimit}
                                    onChange={handleClickLimitChange}
                                  />
                                </div>

                              </div>

                              <div className='col-12'>
                                <p className='mb-0'><b>Expiration Redirect</b></p>
                                <p>Set a link to redirect traffic to when the short link expires.</p>
                                <input type='text' className='selected-input' style={{ width: '100%' }} placeholder='Type the url to redirect user to' />
                              </div>
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* A/B testing */}
                      {showABtesting && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="geo-targeting-form">
                              <div className='col-12 d-flex justify-content-between'>
                                <div className='col-6'>
                                  <h6 className='mb-2'><CIcon icon={cilLocationPin} size="sm" className="" /> Geo Targeting</h6>
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                  <span><button className='add-btn' onClick={handleAddRow}>+ Add</button></span>
                                </div>
                              </div>
                              {geoRows.map((row, index) => (
                                <form key={index} className='d-flex flex-wrap justify-content-between'>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Country:</h6></label>
                                    <input
                                      name="country"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter country"
                                      value={row.country}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Region:</h6></label>
                                    <input
                                      name="region"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter region"
                                      value={row.region}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>City:</h6></label>
                                    <input
                                      name="city"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter city"
                                      value={row.city}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>

                                  <button
                                    className='delete-btn btn-danger d-block mt-2 mb-3'
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleDeleteRow(index);
                                    }}
                                    type="button"
                                  >
                                    <span>Delete</span>
                                  </button>
                                </form>
                              ))}
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                      {/* parameter */}
                      {showparameter && (
                        <CCard className='mt-3'>
                          <CCardBody>
                            <div className="geo-targeting-form">
                              <div className='col-12 d-flex justify-content-between'>
                                <div className='col-6'>
                                  <h6 className='mb-2'><CIcon icon={cilLocationPin} size="sm" className="me-1" /> Geo Targeting</h6>
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                  <span><button className='add-btn' onClick={handleAddRow}>+ Add</button></span>
                                </div>
                              </div>
                              {geoRows.map((row, index) => (
                                <form key={index} className='d-flex flex-wrap justify-content-between'>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Country:</h6></label>
                                    <input
                                      name="country"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter country"
                                      value={row.country}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>Region:</h6></label>
                                    <input
                                      name="region"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter region"
                                      value={row.region}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>
                                  <div className='col-4'>
                                    <label className='meta-tag-label'><h6 className='qr-name'>City:</h6></label>
                                    <input
                                      name="city"
                                      className='selected-input qr-name'
                                      style={{ width: "90%" }}
                                      type="text"
                                      placeholder="Enter city"
                                      value={row.city}
                                      onChange={(event) => handleInputChange(index, event)}
                                    />
                                  </div>

                                  <button
                                    className='delete-btn btn-danger d-block mt-2 mb-3'
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleDeleteRow(index);
                                    }}
                                    type="button"
                                  >
                                    <span>Delete</span>
                                  </button>
                                </form>
                              ))}
                            </div>
                          </CCardBody>
                        </CCard>
                      )}

                    </div>
                  )}
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs={12}>
              <CCard>
                <CCardBody>
                  <h6 className="mb-4">Recent Links</h6>
                  <div>
                    <select
                      className="px-3 py-2 border rounded-md bg-white"
                      value={selectedAction}
                      onChange={handleActionChange}
                    >
                      <option value="">Actions</option>
                      <option value="Archive Selected">Archive Selected</option>
                      <option value="Add to Campaign">Add to Campaign</option>
                      <option value="Add to Channel">Add to Channel</option>
                      <option value="Add Pixels">Add Pixels</option>
                      <option value="Export">Export</option>
                      <option value="Delete Selected">Delete Selected</option>
                    </select>
                  </div>
                </CCardBody>
              </CCard>

              {showModal && (
                <CModal visible={showModal} onClose={handleCancel}>
                  <CModalHeader closeButton>
                    <h6 className="text-lg font-medium">
                      {modalType === 'archive' && 'Add to Archive'}
                      {modalType === 'channel' && 'Add to Channel'}
                      {modalType === 'pixels' && 'Add Pixels'}
                    </h6>
                  </CModalHeader>
                  <CModalBody>
                    {modalType === 'archive' && (
                      <div className="mb-4 qr-name">
                        <label className="d-block text-sm font-medium text-gray-700 mb-1 qr-name ">Archives</label>
                        <select style={{ width: '100%' }} className="w-full px-3 py-2 border rounded-md bg-white qr-name" defaultValue="none">
                          <option value="none qr-name">None</option>
                          <option value="archive1 qr-name">Archive 1</option>
                          <option value="archive2 qr-name">Archive 2</option>
                        </select>
                      </div>
                    )}
                    {modalType === 'channel' && (
                      <div className="mb-4">
                        <label className="d-block text-sm font-medium text-gray-700 mb-1 qr-name">Channels</label>
                        <select style={{ width: '100%' }} className="w-full px-3 py-2 border rounded-md bg-white qr-name" defaultValue="none">
                          <option value="none">None</option>
                          <option value="channel1">Channel 1</option>
                          <option value="channel2">Channel 2</option>
                        </select>
                      </div>
                    )}
                    {modalType === 'pixels' && (
                      <div className="mb-4">
                        <label className="d-block text-sm font-medium text-gray-700 mb-1">Pixels</label>
                        <select style={{ width: '100%' }} className="w-full px-3 py-2 border rounded-md bg-white qr-name" defaultValue="none">
                          <option value="none">None</option>
                          <option value="pixel1">Pixel 1</option>
                          <option value="pixel2">Pixel 2</option>
                        </select>
                      </div>
                    )}
                  </CModalBody>
                  <CModalFooter className='qr-name'>
                    <CButton color="secondary" className='qr-name' onClick={handleCancel}>Cancel</CButton>
                    <CButton color="success" className='qr-name text-white' onClick={handleAdd}>Add</CButton>
                  </CModalFooter>
                </CModal>
              )}
            </CCol>

          </CRow>
        </div>
        <div className='col-6'>
          <div className="p-4 dashboard-2nd-box">
            <div className="d-flex justify-content-between items-center mb-4">
              <h4 className="text-xl font-semibold">Recent Activity</h4>
              <MoreVertical className="w-5 h-5" />
            </div>

            <div className="space-y-4">
              {activities.map(activity => (
                <div key={activity.id} className="bg-white rounded-lg shadow p-4 mb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">

                      <div className="d-flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 pagetype rounded-md text-xs font-medium bg-green-100 text-green-800">
                          {activity.pageType}
                        </span>
                        <span className="font-medium text-gray-900">{activity.pageName}</span>
                      </div>

                      {/* URL */}
                      <a href={activity.url} className="text-blue-600 text-sm dashboard-box2-a hover:underline block ">
                        {activity.url}
                      </a>

                      {/* Details Row */}
                      <div className="d-flex flex-wrap detail-row items-center gap-2 text-sm text-gray-600">
                        {/* Location with Flag */}
                        <div className="d-flex items-center gap-1">
                          {activity.location.includes("United States") ? (
                            <span className="text-lg">🇺🇸</span>
                          ) : (
                            <span className="text-lg">🇩🇪</span>
                          )}
                          <span>{activity.location}</span>
                        </div>

                        {/* OS Icon */}
                        <div className="d-flex items-center gap-1">
                          {activity.os === "Mac OS X" ? (
                            <span className="text-lg">🍎</span>
                          ) : (
                            <span className="text-lg">🐧</span>
                          )}
                          <span>{activity.os}</span>
                        </div>

                        {/* Browser Icon */}
                        <div className="d-flex items-center gap-1">
                          {activity.browser === "Edge" ? (
                            <span className="text-lg">🌐</span>
                          ) : (
                            <span className="text-lg">🦊</span>
                          )}
                          <span>{activity.browser}</span>
                        </div>

                        {/* Access Type */}
                        <div className="d-flex items-center gap-1">
                          <Globe className="w-2 h-2" />
                          <span>{activity.type}</span>
                        </div>

                        {/* Language */}
                        <div className="d-flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{activity.language}</span>
                        </div>
                      </div>
                    </div>

                    {/* Time */}
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {activity.timeAgo}
                    </span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default Dashboard;