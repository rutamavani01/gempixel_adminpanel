import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { useState } from 'react';
import * as XLSX from 'xlsx';

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const [showChannel, setShowchannel] = useState(false);
  const [showPixel, setShowpixel] = useState(false);

  function exportToExcel(data, filename = 'data.xlsx') {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, filename);
  }

  const handleActionChange = (event) => {
    if (event.target.value === "Add to Campaign") {
      setShowModal(true); // Show modal
    }
    if (event.target.value === "Add to Channel") {
      setShowchannel(true); // Show modal
    }
    if (event.target.value === "Add Pixels") {
      setShowpixel(true); // Show modal
    }
    if (event.target.value === "Export") {
      const data = [
        { Name: "John", Age: 30 },
        { Name: "Doe", Age: 25 }
      ];
      exportToExcel(data);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowchannel(false);
    setShowpixel(false);
  };
  return (
    <div className='col-12 row justify-content-between'>
      <h6 className='title-text'>Archived Links</h6>
      <div className='col-8'>
        <CCol>
          <CCard>
            <CCardBody>
              <div>
                <select
                  className="px-3 py-2 border rounded-md bg-white qr-name"
                  onChange={handleActionChange}
                >
                  <option value="">0 Selected</option>
                  <option value="Archive Selected">Unarchive Selected</option>
                  <option value="Add to Campaign">Add to Campaign</option>
                  <option value="Add to Channel">Add to Channel</option>
                  <option value="Add Pixels">Add Pixels</option>
                  <option value="Export">Export</option>
                  <option value="Delete Selected">Delete Selected</option>
                </select>
                {showModal && (
                  <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header qr-name">
                          <h5 className="modal-title qr-name">Add to Campaign</h5>
                          <button
                            type="button"
                            className="btn-close qr-name"
                            onClick={closeModal}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p className='qr-name '>Campaigns</p>
                          <select style={{ width: '100%', padding: '5px' }} className='qr-name'>
                            <option>None</option>
                          </select>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary qr-name p-1"
                            style={{ padding: '0px 12px' }}
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button type="button" style={{ backgroundColor: '#28a745', color: 'white', padding: '3px 12px' }} className="btn  qr-name ">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {showChannel && (
                  <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header qr-name">
                          <h5 className="modal-title qr-name">Add to Channels</h5>
                          <button
                            type="button"
                            className="btn-close qr-name"
                            onClick={closeModal}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p className='qr-name '>Channels</p>
                          <select style={{ width: '100%', padding: '5px' }} className='qr-name'>
                            <option>No result found</option>
                          </select>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary qr-name p-1"
                            style={{ padding: '0px 12px' }}
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button type="button" style={{ backgroundColor: '#28a745', color: 'white', padding: '3px 12px' }} className="btn  qr-name ">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {showPixel && (
                  <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header qr-name">
                          <h5 className="modal-title qr-name">Add Pixels</h5>
                          <button
                            type="button"
                            className="btn-close qr-name"
                            onClick={closeModal}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p className='qr-name '>Pixel</p>
                          <select style={{ width: '100%', padding: '5px' }} className='qr-name'>
                            <option>No result found</option>
                          </select>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary qr-name p-1"
                            style={{ padding: '0px 12px' }}
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button type="button" style={{ backgroundColor: '#28a745', color: 'white', padding: '3px 12px' }} className="btn  qr-name ">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </div>
      <div className='col-4'>
        <CCard className='p-2 mb-4'>
          <div className='col-12 d-flex  justify-content-between qr-name mb-3'>
            <div className='col-6'>
              <p className='qr-name m-0'>Links</p>
            </div>
            <div className='col-6 '>
              <p className='qr-name d-flex justify-content-end m-0'>3 / Unlimited </p>
            </div>
          </div>
          <div className='line'> </div>
        </CCard>
        <CCard className='p-2'>
          <div className='col-12 qr-name mb-3'>
            <p className='m-0 text-muted '><b>Export Links</b></p>
            <p className='text-muted'>This tool allows you to generate a list of urls in CSV format. Some basic data such clicks will be included as well.</p>
            <CButton className='qr-name' value="Export" style={{ backgroundColor: 'black', color: 'white', padding: '4px 10px', borderRadius: '3px' }}>Export</CButton>
          </div>
        </CCard>
      </div>
    </div>
  )
}

export default Cards
