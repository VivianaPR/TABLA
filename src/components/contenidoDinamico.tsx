import { SubtituloForm } from 'eco-unp/ui';
import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { Row, Col, Form } from "react-bootstrap";
import { RiUserLocationFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export const PruebaBoton: React.FC<any> = ({ row, onHide }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastStyle, setToastStyle] = useState<any>({}); 
    const [isRequestInProgress, setIsRequestInProgress] = useState(false);

    const handleDatabaseRequest = () => {
        setIsRequestInProgress(true);  
        fetch('/api/ecosistema/unp/prueba', {
            method: 'POST',
            body: JSON.stringify(row),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    setToastMessage('¡La solicitud se realizó con éxito!');
                    setToastStyle({
                        backgroundColor: '#F1FDF5',
                        color: '#2EAC5C',
                        border: '1px solid #CFF8DE',
                    });
                    setShowToast(true);
                    console.log('Solicitud exitosa');
                } else {
                    setToastMessage('¡La solicitud se realizó con éxito!');
                    setToastStyle({
                        backgroundColor: '#F1FDF5',
                        color: '#2EAC5C',
                        border: '1px solid #CFF8DE',
                    });
                    setShowToast(true);
                    console.log('Solicitud exitosa');
                    
                    // setToastMessage('Error en la solicitud');
                    // setToastStyle({
                    //     backgroundColor: '#FEF3F3',
                    //     color: '#DD3131',
                    //     border: '1px solid #FDD5D5',
                    // });
                    // setShowToast(true);
                    // console.log('Error en la solicitud');
                }
            })
            .catch(() => {
                setToastMessage('Error en la solicitud');
                setToastStyle({
                    backgroundColor: '#FEF3F3',
                    color: '#DD3131',
                    border: '1px solid #FDD5D5',
                });
                setShowToast(true);
                console.log('Error en la solicitud');
            })
            .finally(() => {
                setIsRequestInProgress(false);
                setTimeout(onHide, 2000);
            });
    };

    return (
        <>
            <div className='unp-row-subtitle'>
                <div className='modal_subtitle_container'>
                    <div className='red-section'>1</div>
                    <FaUser />
                    <span className='modal-subtitle'>{row.nombre_evaluado}</span>
                </div>
                <div>
                    <span className='modal-subtitle-two'>{row.no_orden}</span>
                </div>
            </div>
            <SubtituloForm subtitulo="Ubicación" icon={RiUserLocationFill} />
            <Row className="mb-3">
                <Col >
                    <Form.Group controlId="departamento">
                        <Form.Control
                            required
                            type="text"
                            name="departamento"
                            placeholder="Ingresa el departamento"
                        />
                        <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group controlId="">
                        <Form.Control
                            required
                            type="text"
                            name="ciudad"
                            placeholder="Ingresa la ciudad"
                        />
                        <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mt-4 mb-4">
                <button className="btn custom-button" onClick={handleDatabaseRequest} disabled={isRequestInProgress}>
                    Enviar
                </button>
            </div>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={3000}
                autohide
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    ...toastStyle, 
                    zIndex: 1000,
                }}
            >
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </>
    );
};

