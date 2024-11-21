import React, { useState } from 'react';
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter
} from '@coreui/react';

const Accordion = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleColorChange = (e) => {
    setColors({ ...colors, [e.target.name]: e.target.value });
  };
  const [colors, setColors] = useState({
    background: '#000000',
    foreground: '#000000',
    eyeFrame: '#cccccc',
    eye: '#0000ff',
  });

  return (
    <CRow>

      <CCol xs="12">
        <CCardHeader className='mb-4'>
          <div className='d-flex justify-content-between '>
            <div className='qr-name'>
              <h6 className='title-text'>Channels</h6>
            </div>
            <div className='qr-name'>
              <button
                className='qr-name button'
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={() => setModalVisible(true)}
              >
                Create Channel
              </button>
            </div>
          </div>
        </CCardHeader>

        <CCard>
          <CCardBody>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='qr-name'>
                <span>0 Channels / Unlimited</span>
              </div>
            </div>
          </CCardBody>
        </CCard>

        <h6 className='mt-4'>My Channels</h6>

        <CModal visible={modalVisible} onClose={() => setModalVisible(false)} centered>
          <CModalHeader onClose={() => setModalVisible(false)} className='qr-name'>Create Channel</CModalHeader>
          <CModalBody className='p-3'>
            <p className='qr-name m-1'><b>Name (required)</b></p>
            <input style={{ width: "100%" }} type='text' />

            <p className='qr-name m-1'><b>Description</b></p>
            <input style={{ width: "100%" }} type='text' />

            <p className='qr-name m-1'><b>Badge Color</b></p>
            <input
              type="color"
              name="background"
              value={colors.background}
              onChange={handleColorChange}
              style={{ marginLeft: '10px', width: '10%', padding: '3px' }}
            />

            <div className='row justify-content-start align-items-center mt-4 qr-name'>
              <div className='col-10'>
                <h6>Star Channel</h6>
                <p>Starred channels will show up in the sidebar navigation for quick access.</p>
              </div>
              <div className='col-1'>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                </div>

              </div>
            </div>

          </CModalBody>
          <CModalFooter className='qr-name'>
            <button className='qr-name' color='secondary' style={{ color: 'white', padding: '2px 3px', borderRadius: '0px' }} onClick={() => setModalVisible(false)}>
              Close
            </button>
            <CButton className='qr-name' style={{ backgroundColor: '#28a745', color: 'white', padding: '2px 3px', borderRadius: '0px' }}>Create Channel</CButton>
          </CModalFooter>
        </CModal>




      </CCol>
    </CRow>
  );
};

export default Accordion;