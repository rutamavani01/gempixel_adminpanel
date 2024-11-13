import React from 'react';
import { CCard, CCardBody, CCardHeader, CButton, CContainer, CRow, CCol } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBoatAlt, cilCheckCircle, cilContact, cilImage, cilMagnifyingGlass, cilMediaSkipBackward, cilPaperclip, cilSmokeSlash, cilSquare, cilTerminal } from '@coreui/icons'; import { useNavigate } from 'react-router-dom';

const Overlaycreate = () => {
    const navigate = useNavigate();
    const cards = [
        { image: <CIcon icon={cilMagnifyingGlass} height={45} width={45} />, title: 'CTA Contact', description: 'Create a contact form where users will be able to contact you via email.', route: '/base/CtaContact' },
        { image: <CIcon icon={cilCheckCircle} height={45} width={45} />, title: 'CTA Poll', description: 'Create a quick poll where users will be able to answer it upon visit.', route: '/base/CtaPoll' },
        { image: <CIcon icon={cilSquare} height={45} width={45} />, title: 'CTA Message', description: 'Create a small popup with a message and a link to a page or a product.', route: '/base/CtaMessage' },
        { image: <CIcon icon={cilContact} height={45} width={45} />, title: 'CTA Newsletter', description: 'Create a small popup form to collect emails from users.', route: '/base/CtaNewsletter' },
        { image: <CIcon icon={cilImage} height={45} width={45} />, title: 'CTA Image', description: 'Create a small popup with an image of your choice.', route: '/base/CtaImage' },
        { image: <CIcon icon={cilPaperclip} height={45} width={45} />, title: 'Coupon', description: 'Create a small popup with a coupon code that users can use.', route: '/base/CtaCoupon' }
    ];


    return (
        <CContainer>
            <CCardHeader>Create a CTA Overlay</CCardHeader>
            <CRow>
                <CCardBody className=" col-8 p-3 qr-name">
                    {/* <CCardBody> */}
                    <CRow>
                        {cards.map((card, index) => (
                            <CCol md={4} className="mb-4" key={index}>
                                <CCard>
                                    <CCardBody>
                                        <div className="text-center mb-3">
                                            <i className="icon-placeholder mb-2" style={{ fontSize: '2rem' }}></i>
                                        </div>
                                        <div className="text-center mb-3">
                                            {card.image}
                                        </div>

                                        <h5 className="text-center qr-name">{card.title}</h5>
                                        <p className="text-center">{card.description}</p>
                                        <div className="text-center qr-name">
                                            <CButton
                                                color="primary"
                                                className="qr-name"
                                                onClick={() => navigate(card.route)}
                                            >
                                                Create
                                            </CButton>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        ))}
                    </CRow>
                    {/* </CCardBody> */}
                </CCardBody>
                <CCardBody className=" col-2 p-3">
                    {/* <CCardHeader>CTA Overlay</CCardHeader> */}
                    {/* <CCard> */}
                    <CCardBody>
                        <CCard className='p-2 mb-4'>
                            <div className='col-12 d-flex  justify-content-between qr-name mb-3'>
                                <div className='col-6'>
                                    <p className='qr-name m-0'>CTA Overlay</p>
                                </div>
                                <div className='col-6 '>
                                    <p className='qr-name d-flex justify-content-end m-0'>3 / Unlimited </p>
                                </div>
                            </div>
                            <div className='line'> </div>
                        </CCard>

                        <CCard className='p-2 qr-name'>
                            <p className="mt-2">What is a CTA Overlay?</p>
                            <p>
                                An overlay page allows you to display a small non-intrusive overlay on the destination website to advertise your product or your services. You can also use this feature to send a message to your users. You can customize the message and the appearance of the overlay right from this page. As soon as you save it, the changes will be applied immediately across all your URLs using this type. Please note that some secured and sensitive websites such as google.com or facebook.com do not work with this feature. You can have unlimited overlay pages and you can choose one for each URL.
                            </p>
                        </CCard>
                    </CCardBody>
                    {/* </CCard> */}
                </CCardBody>
            </CRow>
        </CContainer>
    );
};

export default Overlaycreate;
