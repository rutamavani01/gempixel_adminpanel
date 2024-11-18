import { CButton, CCard, CCardBody, CCollapse, CNav, CNavItem, CNavLink, CTabContent, CTabPane, CFormSwitch } from '@coreui/react';
import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import CIcon from '@coreui/icons-react';
import { cibMailRu, cibMessenger, cilDrop, cilInbox, cilPencil, cilText } from '@coreui/icons';

const QrCode = () => {
  const [qrName, setQrName] = useState('');
  const [domain, setDomain] = useState('');
  const [selectedStaticType, setSelectedStaticType] = useState('text');
  const [selectedDynamicType, setSelectedDynamicType] = useState('link');

  // Form states
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState('WPA');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [cell, setCell] = useState('');
  const [fax, setFax] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [socialProfiles, setSocialProfiles] = useState([]);
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [showSocialFields, setShowSocialFields] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    url: '',
    startDate: '',
    endDate: '',
    phoneNumber: '', // Add phoneNumber state
    smsMessage: ''   // Add smsMessage state
  });

  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('singleColor');

  const [colors, setColors] = useState({
    background: '#ffffff',
    foreground: '#000000',
    eyeFrame: '#cccccc',
    eye: '#0000ff',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (e) => {
    setColors({ ...colors, [e.target.name]: e.target.value });
  };


  const addAddress = () => {
    setShowAddressFields(true);
  };
  const toggleAddressFields = () => {
    setShowAddressFields(!showAddressFields);
  };

  const addSocialProfile = () => {
    setSocialProfiles([...socialProfiles, '']);
  };

  const toggleSocialFields = () => {
    setShowSocialFields(!showSocialFields);
  };

  const renderForm = () => {
    // For Static QR
    if (selectedStaticType === 'text') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'>  <CIcon icon={cilText}/> Text</p>
          </div>
          <div className='mb-4'>
            <p className='m-1'><b>Your Text</b></p>
            <textarea
              style={{ width: "100%" }}
              className='form-control qr-name'
              placeholder='Your Text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
          </div>
        </div>
      );
    }

    if (selectedStaticType === 'sms') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b>    <span>✉</span> SMS & Message</b></p>
          </div>
          <div className='mb-3'>
            <p className='m-1'><b>Phone Number</b></p>
            <input
              type="text"
              className='form-control qr-name'
              placeholder='e.g 123456789'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <p className='m-1'><b>Message</b></p>
            <textarea
              className='form-control qr-name'
              placeholder='e.g. Job Application'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
        </div>
      );
    }

    if (selectedStaticType === 'wifi') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b> <span>📶</span> WiFi</b></p>
          </div>
          <div className='mb-4'>
            <p className='m-1'><b>Your Text</b></p>
            <textarea
              style={{ width: "100%" }}
              className='form-control qr-name'
              placeholder='Your Text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
          </div>
          <div className='mb-3'>
            <p className='m-1'><b>Network SSID</b></p>
            <input
              type='text'
              className='form-control qr-name'
              placeholder='e.g. MyWiFiNetwork'
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Password</b></p>
            <input
              type='password'
              className='form-control qr-name'
              placeholder='e.g. MyPassword123'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='mb-3 '>
            <p className='m-1'><b>Encryption Type</b></p>
            <select
              className='form-control qr-name'
              value={encryption}
              onChange={(e) => setEncryption(e.target.value)}
            >
              <option value="WEP">WEP</option>
              <option value="WPA">WPA/WPA2</option>
            </select>
          </div>
        </div>
      )
    }

    if (selectedStaticType === 'vcard') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b>   <span>👤</span> Static vCard</b></p>
          </div>
          <div className='mb-3'>
            <p className='m-1'><b>First Name</b></p>
            <input
              type='text'
              className='form-control qr-name'
              placeholder='e.g. John'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Last Name</b></p>
            <input
              type='text'
              className='form-control qr-name'
              placeholder='e.g. Doe'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Organization</b></p>
            <input
              type='text'
              className='form-control qr-name'
              placeholder='e.g. Internet Inc'
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Phone</b></p>
            <input
              type='tel'
              className='form-control qr-name'
              placeholder='e.g. +112345689'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Cell</b></p>
            <input
              type='tel'
              className='form-control qr-name'
              placeholder='e.g. +112345689'
              value={cell}
              onChange={(e) => setCell(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Fax</b></p>
            <input
              type='tel'
              className='form-control qr-name'
              placeholder='e.g. +112345689 '
              value={fax}
              onChange={(e) => setFax(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Email</b></p>
            <input
              type='email'
              className='form-control qr-name'
              placeholder='e.g. someone@domain.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <p className='m-1'><b>Website</b></p>
            <input
              type='url'
              className='form-control qr-name'
              placeholder='e.g. https://domain.com'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          {/* Buttons for adding address and social profiles */}
          <div className="mb-3 qr-name">
            <button className=" add-btn qr-name" onClick={toggleAddressFields}>
              {showAddressFields ? '+ Add Address' : '+ Add Address'}
            </button>
            <button className=" add-btn ms-3 qr-name" onClick={toggleSocialFields}>
              {showSocialFields ? '+ Add Social' : '+ Add Social'}
            </button>
          </div>

          {showAddressFields && (
            <div>
              <div className='mb-3'>
                <p className='m-1'><b>Street</b></p>
                <input
                  type='text'
                  className='form-control qr-name'
                  placeholder='e.g. 123 My Street'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>City</b></p>
                <input
                  type='text'
                  className='form-control qr-name'
                  placeholder='e.g. My City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>State</b></p>
                <input
                  type='text'
                  className='form-control qr-name'
                  placeholder='e.g. My State'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>Zipcode</b></p>
                <input
                  type='text'
                  className='form-control qr-name'
                  placeholder='e.g. 123456'
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>Country</b></p>
                <input
                  type='text'
                  className='form-control qr-name'
                  placeholder='e.g. My Country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
          )}

          {showSocialFields && (
            <div>
              <div className='mb-3'>
                <p className='m-1'><b>Facebook</b></p>
                <input
                  type='url'
                  className='form-control qr-name'
                  placeholder='e.g. https://www.facebook.com/myprofile'
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>Twitter</b></p>
                <input
                  type='url'
                  className='form-control qr-name'
                  placeholder='e.g. https://www.twitter.com/myprofile'
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>Instagram</b></p>
                <input
                  type='url'
                  className='form-control qr-name'
                  placeholder='e.g. https://www.instagram.com/myprofile'
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <p className='m-1'><b>LinkedIn</b></p>
                <input
                  type='url'
                  className='form-control qr-name'
                  placeholder='e.g. https://www.linkedin.com/myprofile'
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>
            </div>
          )}

        </div>
      )
    }

    if (selectedStaticType === 'event') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b><span>📅</span> Event</b></p>
          </div>

          <div className="event-form">
            <div className="form-group mb-3">
              <label htmlFor="title" className='m-1'><b>Title</b></label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control col-12"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description" className='m-1'><b>Description</b></label>
              <textarea
                id="description"
                name="description"
                className="form-control col-12"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="location" className='m-1'><b>Location</b></label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control col-12"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="url" className='m-1'><b>URL</b></label>
              <input
                type="url"
                id="url"
                name="url"
                className="form-control col-12"
                value={formData.url}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <div className="form-group col-6">
                <label htmlFor="startDate" className='m-1'><b>Start</b> </label>
                <input
                  type="datetime-local"
                  id="startDate"
                  name="startDate"
                  className="form-control"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="endDate" className='m-1'><b>End</b> </label>
                <input
                  type="datetime-local"
                  id="endDate"
                  name="endDate"
                  className="form-control"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    // For dynamic QR

    if (selectedStaticType === 'link') {
      return (
        <div>
          <div>
            <div className='mb-3'>
              <p className='m-1'><b> <span>🔗</span> Link</b></p>
            </div>
            <div className="link-form">
              <div className="form-group mb-3">
                <label htmlFor="link" className='m-1'><b>Your Link</b></label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  className="form-control col-12 qr-name"
                  placeholder='https://'
                  value={formData.link}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (selectedStaticType === 'dynamic-email') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b><span>✉</span> Email</b></p>
          </div>
          <div className="email-form">
            <div className="form-group mb-3">
              <label htmlFor="email" className='m-1'><b>Your Email</b></label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control col-12 qr-name"
                placeholder='e.g. someone@domain.com'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="subject" className='m-1'><b>Subject</b></label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control col-12 qr-name"
                placeholder='e.g. Job Application'
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message" className='m-1'><b>Message</b></label>
              <textarea
                id="message"
                name="message"
                className="form-control col-12 qr-name"
                placeholder='e.g. Your message here to be sent as email'
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )
    }

    if (selectedStaticType === 'dynamic-phone') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b> <span>📞</span> Phone</b></p>
          </div>

          <div className="email-form mb-3">
            <label htmlFor="phone" className='m-1'><b>Phone Number</b></label>
            <input type='email'
              id="dynamic-phone"
              name="dynamic-phone"
              className="form-control col-12 qr-name"
              placeholder='e.g. 123456789'

              onChange={handleInputChange}
            />
          </div>
        </div>
      )
    }

    if (selectedStaticType === 'dynamic-sms') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b> <span>✉</span> SMS</b></p>
          </div>
          <div>
            <div className="sms-form">
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber" className='m-1'><b>Phone Number</b></label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control col-12 qr-name"
                  placeholder='123-456-7890'
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="smsMessage" className='m-1'><b>Message</b></label>
                <textarea
                  id="smsMessage"
                  name="smsMessage"
                  className="form-control col-12 qr-name"
                  placeholder='Your SMS Message'
                  value={formData.smsMessage}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    // dynamic vcard

    // if (selectedStaticType === 'dynamic-vcard') {
    //   return (
    //     <div>
    //       <div className='mb-3'>
    //         <p className='m-1'><b>   <span>👤</span> Static vCard</b></p>
    //       </div>
    //       <div className='mb-3'>
    //         <p className='m-1'><b>First Name</b></p>
    //         <input
    //           type='text'
    //           className='form-control qr-name'
    //           placeholder='e.g. John'
    //           value={firstName}
    //           onChange={(e) => setFirstName(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Last Name</b></p>
    //         <input
    //           type='text'
    //           className='form-control qr-name'
    //           placeholder='e.g. Doe'
    //           value={lastName}
    //           onChange={(e) => setLastName(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Organization</b></p>
    //         <input
    //           type='text'
    //           className='form-control qr-name'
    //           placeholder='e.g. Internet Inc'
    //           value={organization}
    //           onChange={(e) => setOrganization(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Phone</b></p>
    //         <input
    //           type='tel'
    //           className='form-control qr-name'
    //           placeholder='e.g. +112345689'
    //           value={phone}
    //           onChange={(e) => setPhone(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Cell</b></p>
    //         <input
    //           type='tel'
    //           className='form-control qr-name'
    //           placeholder='e.g. +112345689'
    //           value={cell}
    //           onChange={(e) => setCell(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Fax</b></p>
    //         <input
    //           type='tel'
    //           className='form-control qr-name'
    //           placeholder='e.g. +112345689 '
    //           value={fax}
    //           onChange={(e) => setFax(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Email</b></p>
    //         <input
    //           type='email'
    //           className='form-control qr-name'
    //           placeholder='e.g. someone@domain.com'
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>

    //       <div className='mb-3'>
    //         <p className='m-1'><b>Website</b></p>
    //         <input
    //           type='url'
    //           className='form-control qr-name'
    //           placeholder='e.g. https://domain.com'
    //           value={website}
    //           onChange={(e) => setWebsite(e.target.value)}
    //         />
    //       </div>

    //       {/* Buttons for adding address and social profiles */}
    //       <div className="mb-3 qr-name">
    //         <button className=" add-btn qr-name" onClick={toggleAddressFields}>
    //           {showAddressFields ? '+ Add Address' : '+ Add Address'}
    //         </button>
    //         <button className=" add-btn ms-3 qr-name" onClick={toggleSocialFields}>
    //           {showSocialFields ? '+ Add Social' : '+ Add Social'}
    //         </button>
    //       </div>

    //       {showAddressFields && (
    //         <div>
    //           <div className='mb-3'>
    //             <p className='m-1'><b>Street</b></p>
    //             <input
    //               type='text'
    //               className='form-control qr-name'
    //               placeholder='e.g. 123 My Street'
    //               value={street}
    //               onChange={(e) => setStreet(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>City</b></p>
    //             <input
    //               type='text'
    //               className='form-control qr-name'
    //               placeholder='e.g. My City'
    //               value={city}
    //               onChange={(e) => setCity(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>State</b></p>
    //             <input
    //               type='text'
    //               className='form-control qr-name'
    //               placeholder='e.g. My State'
    //               value={state}
    //               onChange={(e) => setState(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>Zipcode</b></p>
    //             <input
    //               type='text'
    //               className='form-control qr-name'
    //               placeholder='e.g. 123456'
    //               value={zipcode}
    //               onChange={(e) => setZipcode(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>Country</b></p>
    //             <input
    //               type='text'
    //               className='form-control qr-name'
    //               placeholder='e.g. My Country'
    //               value={country}
    //               onChange={(e) => setCountry(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //       )}

    //       {showSocialFields && (
    //         <div>
    //           <div className='mb-3'>
    //             <p className='m-1'><b>Facebook</b></p>
    //             <input
    //               type='url'
    //               className='form-control qr-name'
    //               placeholder='e.g. https://www.facebook.com/myprofile'
    //               value={facebook}
    //               onChange={(e) => setFacebook(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>Twitter</b></p>
    //             <input
    //               type='url'
    //               className='form-control qr-name'
    //               placeholder='e.g. https://www.twitter.com/myprofile'
    //               value={twitter}
    //               onChange={(e) => setTwitter(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>Instagram</b></p>
    //             <input
    //               type='url'
    //               className='form-control qr-name'
    //               placeholder='e.g. https://www.instagram.com/myprofile'
    //               value={instagram}
    //               onChange={(e) => setInstagram(e.target.value)}
    //             />
    //           </div>

    //           <div className='mb-3'>
    //             <p className='m-1'><b>LinkedIn</b></p>
    //             <input
    //               type='url'
    //               className='form-control qr-name'
    //               placeholder='e.g. https://www.linkedin.com/myprofile'
    //               value={linkedin}
    //               onChange={(e) => setLinkedin(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //       )}

    //     </div>
    //   )
    // }

    if (selectedStaticType === 'application') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b>  <span>📱</span> Application</b></p>
          </div>
          <div>
            <div className='mb-3'>
              <p className='m-1'><b>Link to App Store</b></p>
              <input
                type='url'
                className='form-control qr-name'
                placeholder='https://'
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <p className='m-1'><b>Link to Google Play</b></p>
              <input
                type='url'
                className='form-control qr-name'
                placeholder='https://'
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <p className='m-1'><b>Link for others*</b></p>
              <input
                type='url'
                className='form-control qr-name'
                placeholder='https://'
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>
        </div>
      )
    }

    if (selectedStaticType === 'file') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b>  <span>📱</span> File Upload (Image or PDF)</b></p>
          </div>
          <div className=''>
            <p>This can be used to upload an image or a PDF. Most common uses are restaurant menu, promotional poster and resume.</p>
            <h6>File</h6>
            <div >
              <input className='app-input-box' type='file'></input>
            </div>
          </div>
        </div>
      )
    }

    if (selectedStaticType === 'whatsapp') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b><span>💬</span> Whatsapp</b></p>
          </div>
          <div className='mb-3'>
            <p className='m-1'><b>Phone Number</b></p>
            <input
              type="text"
              className='form-control qr-name'
              placeholder='e.g 123456789'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <p className='m-1'><b>Message</b></p>
            <textarea
              className='form-control qr-name'
              placeholder='e.g. Your message here to be sent as email'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
            />
          </div>
        </div>
      )
    }

    if (selectedStaticType === 'cryptocurrency') {
      return (
        <div>
          <div className='mb-3'>
            <p className='m-1'><b>  <span>₿</span> Cryptocurrency</b></p>
          </div>
          <div className='mb-3'>
            <p>Cryptocurrency</p>
            <div className='d-flex justify-content-start align-items-center'>
              <label className='me-3'>
                <input type='radio' name='bitcoin' id='bitcoin' className='me-1' />
                Bitcoin
              </label>
              <label className='me-3'>
                <input type='radio' name='bitcoin' id='ethereum' className='me-1' />
                Ethereum
              </label>
              <label className='me-3'>
                <input type='radio' name='bitcoin' id='cash' className='me-1' />
                Bitcoin Cash
              </label>
            </div>

          </div>
          <div className='mb-3'>
            <p className='m-1'><b>Wallet Address</b></p>
            <input
              type="text"
              className='form-control qr-name'
              placeholder='e.g. Enter your public wallet address'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
      )
    }

    return null;
  };

  // design
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [size, setSize] = useState(50);
  const [embeddedLogo, setEmbeddedLogo] = useState(false);
  const [selectedMatrixStyle, setSelectedMatrixStyle] = useState(0);
  const [selectedEyeFrame, setSelectedEyeFrame] = useState(0);
  const [selectedEyeStyle, setSelectedEyeStyle] = useState(0);
  const [selectedFrameStyle, setSelectedFrameStyle] = useState(0);

  const socialLogos = [
    { id: 'instagram', icon: <span>📱</span> },
    { id: 'facebook', icon: <span>📱</span> },
    { id: 'youtube', icon: <span>📱</span> },
    { id: 'twitter', icon: <span>📱</span> },
    { id: 'tiktok', icon: <span>📱</span> },
    { id: 'linkedin', icon: <span>📱</span> }
  ];

  const matrixStyles = ['⬛', '⬜', '⬢', '⬣', '⬡', '⬟'];
  const eyeFrames = ['□', '○', '⬭', '◇', '⬪', '⬰'];
  const eyeStyles = ['■', '●', '⬤', '◆', '◉', '◈', '◐', '♦'];
  const frameStyles = ['✕', '⬚', '▭', '⊡', '📱', '❨❩', '📜'];

  const StyleSelector = ({ items, selected, onChange, label }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="d-flex gap-2 flex-wrap">
        {items.map((item, index) => (
          <button
            key={index}
            className={`btn btn-outline-${selected === index ? 'primary' : 'secondary'} p-2`}
            style={{ width: '40px', height: '40px', fontSize: '20px' }}
            onClick={() => onChange(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h4 className='mb-5'> Create QR</h4>
      <div className='col-12 d-flex justify-content-center mb-3'>
        <div className='col-7'>

          <CCard className='mb-3' style={{ width: '98%' }}>
            <CCardBody>
              <div className='mb-4'>
                <p className='qr-name m-1'><b>QR Code Name</b></p>
                <input
                  style={{ width: "100%" }}
                  type='text'
                  className='form-control qr-name'
                  placeholder='e.g. For Instagram'
                  value={qrName}
                  onChange={(e) => setQrName(e.target.value)}
                />
              </div>

              <div className='mb-4 qr-name'>
                <p className='m-1'><b>Domain</b></p>
                <select
                  style={{ width: "100%" }}
                  className='form-control qr-name'
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                >
                  <option value="https://demo.gempixel.com/short">https://demo.gempixel.com/short</option>
                </select>
                <small className='text-muted qr-name'>
                  Choose domain to generate the link with when using dynamic QR codes. Not applicable for static QR codes.
                </small>
              </div>
            </CCardBody>
          </CCard>

          <CCard style={{ width: '98%' }} className='mb-3'>
            <CCardBody>
              {/* static qr */}
              <div className='mb-4 qr-name'>
                <p className='m-1'><b>Static QR</b></p>
                <div className='d-flex flex-wrap gap-2'>

                  <button
                    className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'text' ? 'btn-outline-gray' : 'btn-outline-gray'}`}
                    onClick={() => setSelectedStaticType('text')}
                  >
                    <span><CIcon icon={cilText} /></span> Text
                  </button>

                  <button
                    className={`btn  btn-outline-gray active qr-name ${selectedStaticType === 'sms' ? 'btn-outline-gray' : 'btn-outline-gray'}`}
                    onClick={() => setSelectedStaticType('sms')}
                  >
                    <span>✉</span> SMS & Message
                  </button>

                  <button className={`btn  btn-outline-gray active qr-name ${selectedStaticType === 'wifi' ? 'btn-outline-gray' : 'btn-outline-gray'}`}
                    onClick={() => setSelectedStaticType('wifi')}>
                    <span>📶</span> WiFi
                  </button>

                  <button
                    className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'vcard' ? 'btn-outline-gray' : 'btn-outline-gray'}`}
                    onClick={() => setSelectedStaticType('vcard')}
                  >
                    <span>👤</span> Static vCard
                  </button>

                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'event' ? 'btn-outline-gray' : 'btn-outline-gray'}`}
                    onClick={() => setSelectedStaticType('event')}>
                    <span>📅</span> Event
                  </button>
                </div>
              </div>

              {/* dynamic qr */}
              <div className='mb-4 qr-name'>
                <p className='m-1'><b>Dynamic QR</b></p>
                <div className='d-flex flex-wrap gap-2'>
                  <button
                    className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'link' ? 'btn-outline-gray' : 'btn-outline-gray'}`}
                    onClick={() => setSelectedStaticType('link')}
                  >
                    <span>🔗</span> Link
                  </button>
                  <button
                    className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'dynamic-email' ? 'btn-outline-gray' : 'btn-outline-gray'
                      }`}
                    onClick={() => setSelectedStaticType('dynamic-email')}
                  >
                    <span>✉</span> Email
                  </button>
                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'dynamic-phone' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('dynamic-phone')}>
                    <span>📞</span> Phone
                  </button>
                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'dynamic-sms' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('dynamic-sms')}>
                    <span>✉</span> SMS
                  </button>
                  {/* <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'dynamic-vcard' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('dynamic-vcard')}>
                    <span>👤</span> vCard
                  </button> */}
                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'application' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('application')}>
                    <span>📱</span> Application
                  </button>
                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'file' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('file')}>
                    <span>📁</span> File
                  </button>
                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'whatsapp' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('whatsapp')}>
                    <span>💬</span> Whatsapp
                  </button>
                  <button className={`btn btn-outline-gray active qr-name ${selectedStaticType === 'cryptocurrency' ? 'btn-outline-gray' : 'btn-outline-gray'
                    }`}
                    onClick={() => setSelectedStaticType('cryptocurrency')}>
                    <span>₿</span> Cryptocurrency
                  </button>
                </div>
              </div>

            </CCardBody>
          </CCard>

          <CCard className='qr-name mb-3 single-color' style={{ width: '98%' }}>
            <CCardBody>
              {renderForm()}
            </CCardBody>
          </CCard>

          <CCard className="mb-3 single-color"  style={{ width: '98%' }} onClick={() => setVisible(!visible)}>
            <CCardBody className='qr-name'>
              <CIcon icon={cilDrop} color='dark' className='me-2 single-color' /> Colors
            </CCardBody>
          </CCard>

          <CCollapse style={{ width: '98%' }} visible={visible}>
            <CCard className="mb-3 qr-name">
              <CCardBody>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink className='single-color'
                      active={activeTab === 'singleColor'}
                      onClick={() => setActiveTab('singleColor')}
                    >
                      Single Color
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink className='single-color'
                      active={activeTab === 'gradientColor'}
                      onClick={() => setActiveTab('gradientColor')}
                    >
                      Gradient Color
                    </CNavLink>
                  </CNavItem>
                </CNav>

                <CTabContent>
                  {/* Single Color Tab */}
                  <CTabPane visible={activeTab === 'singleColor'}>
                    <div className="mt-3">

                      <CCardBody className='color-box mb-3'>
                        <div className="d-flex justify-content-start">
                          <div className='col-6'>
                            <p>Background</p>
                            <input
                              type="color"
                              name="background"
                              value={colors.background}
                              onChange={handleColorChange}
                              style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                            />
                          </div>
                          <div className='col-6'>
                            <p>Foreground</p>
                            <input
                              type="color"
                              name="foreground"
                              value={colors.foreground}
                              onChange={handleColorChange}
                              style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                            />
                          </div>
                        </div>
                      </CCardBody>

                      <CCardBody className='color-box'>
                        <div className="mt-3 col-12">
                          <p>Eye Frame Color</p>
                          {/* <div className='color-picker-background' style={{marginLeft: '10px',width:'7%'}}>  */}
                          <input
                            type="color"
                            name="eyeFrame"
                            value={colors.eyeFrame}
                            onChange={handleColorChange}
                            style={{ marginLeft: '10px', width: '5%', padding: '3px' }}
                          />
                          {/* </div> */}
                        </div>
                        <div className="mt-3">
                          <p>Eye Color</p>
                          <input
                            type="color"
                            name="eye"
                            value={colors.eye}
                            onChange={handleColorChange}
                            style={{ marginLeft: '10px', width: '5%', padding: '3px' }}
                          />
                        </div>
                      </CCardBody>

                    </div>
                  </CTabPane>

                  {/* Gradient Color Tab */}
                  <CTabPane visible={activeTab === 'gradientColor'}>
                    <div className="mt-3">

                      <CCardBody className='color-box mb-3'>
                        <div className='col-6 mb-3'>
                          <p>Background</p>
                          <input
                            type="color"
                            name="background"
                            value={colors.background}
                            onChange={handleColorChange}
                            style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                          />
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className='col-6'>
                            <p>
                              Gradient Start</p>
                            <input
                              type="color"
                              name="background"
                              value={colors.background}
                              onChange={handleColorChange}
                              style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                            />
                          </div>
                          <div className='col-6'>
                            <p>Gradient Stop</p>
                            <input
                              type="color"
                              name="foreground"
                              value={colors.foreground}
                              onChange={handleColorChange}
                              style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                            />
                          </div>

                        </div>
                      </CCardBody>

                      <CCardBody className='color-box'>
                        <div className="mt-3 col-12">
                          <p>Eye Frame Color</p>
                          <input
                            type="color"
                            name="eyeFrame"
                            value={colors.eyeFrame}
                            onChange={handleColorChange}
                            style={{ marginLeft: '10px', width: '5%', padding: '3px' }}
                          />
                        </div>
                        <div className="mt-3">
                          <p>Eye Color</p>
                          <input
                            type="color"
                            name="eye"
                            value={colors.eye}
                            onChange={handleColorChange}
                            style={{ marginLeft: '10px', width: '5%', padding: '3px' }}
                          />
                        </div>

                      </CCardBody>

                    </div>
                  </CTabPane>
                </CTabContent>
              </CCardBody>
            </CCard>
          </CCollapse>

          <CCard style={{ width: '98%' }} className="mb-3 qr-name " onClick={() => setIsExpanded(!isExpanded)}>
            <CCardBody className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
              {/* <FaPencilAlt className="me-2" /> */}
              {/* <span>📱</span> */}
              <CIcon icon={cilPencil}/>
              Design
            </CCardBody>
          </CCard>

          {isExpanded && (
            <CCard className="mb-3" style={{ width: '98%' }}>
              <CCardBody>

                <div className='design-box qr-name mb-3'>
                  {/* Social Media Logos */}
                  <div className="d-flex gap-2 mb-4 flex-wrap">
                    {socialLogos.map(logo => (
                      <button
                        key={logo.id}
                        className={`btn ${selectedLogo === logo.id ? 'btn-primary' : 'btn-outline-secondary'}`}
                        style={{ width: '48px', height: '48px', padding: '0' }}
                        onClick={() => setSelectedLogo(logo.id)}
                      >
                        {logo.icon}
                      </button>
                    ))}
                  </div>

                  {/* Custom Logo Upload */}
                  <div className="mb-4">
                    <label className="form-label">Custom Logo</label>
                    <div className="d-flex gap-2">
                      {/* <CButton color="secondary" variant="outline" className="w-100 text-start text-muted">
                      No file chosen
                    </CButton>
                    <CButton color="secondary" variant="outline">
                      Choose File
                    </CButton> */}
                      <input className='app-input-box' type='file'></input>
                    </div>
                  </div>

                  {/* Size Slider */}
                  <div className="mb-4">
                    <label className="form-label">Size</label>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </div>

                  {/* Embedded Logo Toggle */}
                  <div className=" mb-4">
                    <div>
                      <h6 className="mb-1">Embedded Logo</h6>

                    </div>
                    <div className='d-flex justify-content-between align-items-center qr-name'>
                      <div className='col-10'>
                        <small className="text-muted">
                          Logo can now be embedded in the QR code. Please note that embedded logos can sometimes
                          lead to unstable QR codes so please check to make sure the QR works.
                        </small>
                      </div>
                      <div className='col-1'>
                        <CFormSwitch
                          id="embeddedLogo"
                          checked={embeddedLogo}
                          onChange={(e) => setEmbeddedLogo(e.target.checked)}
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div className='design-box qr-name mb-3'>
                  {/* Matrix Style */}
                  <StyleSelector
                    items={matrixStyles}
                    selected={selectedMatrixStyle}
                    onChange={setSelectedMatrixStyle}
                    label="Matrix Style"
                  />

                  {/* Eye Frame */}
                  <StyleSelector
                    items={eyeFrames}
                    selected={selectedEyeFrame}
                    onChange={setSelectedEyeFrame}
                    label="Eye Frame"
                  />

                  {/* Eye Style */}
                  <StyleSelector
                    items={eyeStyles}
                    selected={selectedEyeStyle}
                    onChange={setSelectedEyeStyle}
                    label="Eye Style"
                  />
                </div>

                <div className='design-box qr-name mb-3'>
                  {/* Frame Style */}
                  <StyleSelector
                    items={frameStyles}
                    selected={selectedFrameStyle}
                    onChange={setSelectedFrameStyle}
                    label="Frame Style"
                  />

                  <div className='col-12 d-flex justify-content-start'>
                    <div className='col-6'>
                      <div className='mb-3' style={{ width: '95%' }}>
                        <p className='m-1'><b>Text</b></p>
                        <input type='text' className='form-control qr-name' placeholder='e.g. Scan me' />
                        <span style={{ color: 'gray' }} className='ms-1 mt-1'>Limit of 20 characters</span>
                      </div>
                    </div>

                    <div className='col-6'>
                      <div className='' style={{ width: '95%' }}>
                        <p className='m-1'><b>Font</b></p>
                        <select
                          className='form-control qr-name'
                          value={encryption}
                          onChange={(e) => setEncryption(e.target.value)}
                        >
                          <option style={{ fontFamily: 'Arial' }} value="arial">Arial</option>
                          <option style={{ fontFamily: 'Courier New' }} value="arial">Courier New</option>
                          <option style={{ fontFamily: 'Times New Roman' }} value="arial">Times New Roman</option>
                          <option style={{ fontFamily: 'Comic Sans MS' }} value="arial">Comic Sans MS</option>
                          <option style={{ fontFamily: 'Verdana' }} value="arial">Verdana</option>
                          <option style={{ fontFamily: 'Impact' }} value="arial">Impact</option>
                          <option style={{ fontFamily: 'Tahoma' }} value="arial">Tahoma</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start">
                    <div className='col-6'>
                      <p>Frame Color</p>
                      <input
                        type="color"
                        name="background"
                        id=''
                        value={colors.background}
                        onChange={handleColorChange}
                        style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                      />
                    </div>
                    <div className='col-6'>
                      <p>Text Color</p>
                      <input
                        type="color"
                        name="foreground"
                        id=''
                        value={colors.foreground}
                        onChange={handleColorChange}
                        style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
                      />
                    </div>
                  </div>
                </div>

                <div className='design-box qr-name mb-3'>
                  <p className='m-1'>Margin</p>
                  <input
                    type="text"
                    className='form-control qr-name'
                    placeholder='e.g. 10'
                    value=""
                    id=''
                  />
                  <p className='m-1' style={{ color: 'gray' }}><b>Error Correction</b></p>
                  <p className='m-1' style={{ color: 'gray' }}>Error correction allows better readability when code is damaged or dirty but increase QR data
                  </p>
                </div>
                <select
                  className='form-control qr-name'
                  value={encryption}
                  onChange={(e) => setEncryption(e.target.value)}
                  id=''
                >
                  <option value="l">L (7%)</option>
                  <option value="m">M (15%)</option>
                  <option value="q">Q (25%)</option>
                  <option value="h">H (30%)</option>
                </select>
              </CCardBody>
            </CCard>
          )}

        </div>
        <div className='col-5'>
          <CCard className='mb-3'>
            <CCardBody>
              <p className='m-1'><b>QR Code</b></p>
              <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "300px" }}>
                <div className='border border-2 border-dashed p-4 text-muted'>
                  QR Code Preview
                </div>
              </div>
            </CCardBody>
          </CCard >
          <CCard className='mb-3'>
            <CCardBody>
              <div className='row'>
                <div className='col-6'>
                  <button className='btn preview-btn text-white qr-name w-100'>Preview</button>
                </div>
                <div className='col-6'>
                  <button className='btn generate-btn btn-success qr-name w-100 text-white'>Generate QR</button>
                </div>
              </div>
            </CCardBody>
          </CCard>
          <CCard className='mb-3'>
            <CCardBody>
              <p className='text-muted mb-2 qr-name'>
                You will be able to download the QR code in PDF or SVG after it has been generated.
              </p>
              <p className='text-muted qr-name'>If you are using a fancy design, your QR code might not be readible. If that is the case, you can increase Error Correction to ensure optimal readability. It is recommended to test the QR code before saving it.</p>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
};

export default QrCode;