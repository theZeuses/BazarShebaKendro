import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import jQuery from 'jquery';
import {Container, Modal, Button, Form} from 'react-bootstrap';
import './FarmerList.css';

function FarmerList() {

    const [show, setShow] = useState(false);
    const [removeShow, setRemoveShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRemoveClose = () => setRemoveShow(false);
    const handleRemoveShow = () => setRemoveShow(true);

    return (
        <div className="maindiv">
            <div className="container">
                <div className="text-left">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header">
                                <h1>Farmers List</h1>
                            </div>
                            <p>Here are all the farmers in database.. </p>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Search by keyword...</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-lg-offset-4 search-field">
                            <input type="search" id="search" className="form-control" placeholder="keyword" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table" id="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Krishi Card Number</th>
                                    <th>District</th>
                                    <th>Thana</th>
                                    <th>Post Code</th>
                                    <th>Phone No</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td><img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="thumbnail" /></td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>MD Shamil Hossain</td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>..12237</td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>Jessore</td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>Kotowali</td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>7800</td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>017127347</td>
                                        <td style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                            <Button className="btn btn-success btn-sm" onClick={handleShow}>
                                                Details
                                            </Button>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={handleRemoveShow}>
                                                Remove
                                            </button>                   
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                        <hr></hr>
                    </div>
                </div>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Farmer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                        <h3>Name:</h3>
                        <h3>Krishi Card Naumber:</h3>
                        <h3>Phone No</h3>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Update
                    </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={removeShow} onHide={handleRemoveClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Are you sure to remove?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Name:</h3>
                        <h3>Krishi Card Number:</h3>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleRemoveClose}>
                        Close
                    </Button>
                    <Button className="btn btn-danger" onClick={handleRemoveClose}>
                        Proceed
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default FarmerList
