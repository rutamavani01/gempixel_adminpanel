import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
  CFormInput,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect,
  CCard
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSettings,
  cilSun,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { shortenUrl } from './Api'
import { fetchDashboardData } from './Api'

const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');

  const [showForm, setShowForm] = useState(false);
  const handleSettingsClick = () => {
    setShowForm(!showForm)
  }

  const [shortenedData, setShortenedData] = useState(null);
  const [successVisible, setSuccessVisible] = useState(false);

  const handleShortenClick = async () => {
    if (!url) {
      console.error('URL field is empty');
      return;
    }

    try {
      const authToken = localStorage.getItem('authToken'); // Retrieve token

      if (!authToken) {
        console.error('Authentication token is missing. Please log in.');
        return;
      }

      const data = { longurl: url, options: 1 }; // Payload
      const response = await shortenUrl(data, authToken); // API call

      console.log('Shorten Response:', response); // Debug log
      if (response && response.shortUrl && response.qrCodeUrl) {
        setShortenedData(response); // Store response in state
        setSuccessVisible(true); // Show modal
      } else {
        console.error('Unexpected response format:', response);
      }
    } catch (error) {
      console.error('Error occurred:', error.response?.data || error.message);
    }
  };

  const [dashboardData, setDashboardData] = useState(null);

  const fetchAndSetDashboardData = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('Authentication token is missing. Please log in.');
        return;
      }

      const data = await fetchDashboardData(authToken); // Fetch the data
      setDashboardData(data); // Store it in the state
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <CHeader  className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CFormInput
            placeholder="Quick Shortener"
            className="qr-name"
            style={{ borderRadius: '50px', cursor: 'pointer' }}
            onClick={() => setVisible(true)}
            readOnly
          />

          {/* Modal for Quick Shortener */}
          <CModal visible={visible} onClose={() => setVisible(false)} className='qr-name'>
            <CModalHeader closeButton className='qr-name'>
              <CModalTitle style={{ fontSize: '15px' }}>Quick Shortener</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className='d-flex'>
                <div className='col-9'>
                  <CFormInput
                    placeholder="Paste a long link"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className='qr-name mb-4'
                  />
                </div>
                <div className='col-1'>
                  <CButton onClick={() => setShowForm(!showForm)} className="d-flex align-items-center p-2 qr-name">
                    <CIcon icon={cilSettings} size="lg" className='qr-name' />
                  </CButton>
                </div>
                <div className='col-2'>
                  <CButton color="primary" onClick={handleShortenClick} className='qr-name'>
                    Shorten
                  </CButton>
                </div>
              </div>

              {showForm && (
                <div className='col-12 d-flex' style={{ flexWrap: 'wrap' }}>
                  <div className='col-6 qr-name mb-3'>
                    Domain
                    <CFormSelect className='mt-1 qr-name' style={{ width: '95%' }}>
                      <option>https://demo.gempixel.com/short</option>
                    </CFormSelect>
                  </div>
                  <div className='col-6 qr-name mb-3'>
                    Redirect<br></br>
                    <CFormSelect className='mt-1 qr-name' style={{ width: '95%' }}>
                      <option>Redirection</option>
                      <option>Direct</option>
                      <option>Frame</option>
                      <option>Splash</option>
                    </CFormSelect>
                  </div>
                  <div className='col-6 qr-name mb-3'>
                    Custom
                    <p className='text-muted mt-1' style={{ fontSize: '10px' }}>If you need a custom alias, you can enter it below.</p>
                    <CFormInput className='qr-name' placeholder='Type your custom alias here' style={{ width: '95%' }} />
                  </div>
                  <div className='col-6 qr-name mb-3'>
                    Channel
                    <p className='text-muted mt-1' style={{ fontSize: '10px' }}>Assign link to a channel.</p>
                    <CFormSelect className='qr-name' style={{ width: '95%' }}>
                      <option>None</option>
                    </CFormSelect>
                  </div>
                  <div className='col-6 qr-name mb-3'>
                    Password Protection
                    <p className='text-muted mt-1' style={{ fontSize: '10px' }}>By adding a password, you can restrict the access.</p>
                    <CFormInput className='qr-name' placeholder='Type your password here' style={{ width: '95%' }} />
                  </div>
                  <div className='col-6 qr-name mb-3'>
                    Description
                    <p className='text-muted mt-1' style={{ fontSize: '10px' }}>This can be used to identify URLs on your account.</p>
                    <CFormInput className='qr-name' placeholder='Type your description here' style={{ width: '95%' }} />
                  </div>
                </div>
              )}

              {shortenedData && successVisible && (
                <CModal visible={successVisible} onClose={() => setSuccessVisible(false)} className="qr-name">
                  <CModalHeader closeButton className="qr-name">
                    <CModalTitle>Shortened URL</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <p>
                      Shortened Link:{" "}
                      <a href={shortenedData.shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedData.shortUrl}
                      </a>
                    </p>
                    {shortenedData.qrCodeUrl ? (
                      <img src={shortenedData.qrCodeUrl} alt="QR Code" style={{ width: "200px", height: "200px" }} />
                    ) : (
                      <p>No QR Code available</p>
                    )}
                  </CModalBody>
                </CModal>
              )}



            </CModalBody>
          </CModal>

        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader >
  )
}

export default AppHeader
