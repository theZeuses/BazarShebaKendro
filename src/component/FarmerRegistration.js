import React, {useEffect, useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import jQuery from 'jquery';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import './FarmerRegistration.css';

function FarmerRegistration() {

    const [selectedFile, setSelectedFile] = useState();
    const initialPreview = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
    const [preview, setPreview] = useState(initialPreview);
    const hiddenFileInput = useRef(null);

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(initialPreview)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <div className="maindiv">
            <div className="container bootstrap snippet">
                <div className="row">
                    <div className="page__header">
                        <h1>Farmer Registration</h1>
                    </div>
                </div>
                <Form className="form" method="post" enctype="multipart/form-data">
                    <div className="row">
                        <div className="col-sm-3">     
                            <div className="text-center">
                                <img src={preview} className="avatar img-circle img-thumbnail" alt="avatar" />
                                <h6>Upload a profile photo...</h6>
                                <input type="file" name='image' className="text-center center-block file-upload" ref={hiddenFileInput} onChange={onSelectFile}></input>
                                <input type="button" value="Browse..." id="selectFile" className="text-center center-block" onClick={handleClick} />
                            </div>            
                        </div>
                        <div className="col-sm-9">  
                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <div className="text-left">
                                        <label><h4>Full Name</h4></label>
                                    </div>
                                    <Form.Control className="form-control" type="text" placeholder="Enter Fullname" />
                                </Form.Group>
                            </div>    

                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <div className="text-left">
                                        <label><h4>Krishi Card Number</h4></label>
                                    </div>
                                    <Form.Control className="form-control" type="text" placeholder="Enter the krishi card number" />
                                    <Form.Text className="text-muted">
                                    <div className="text-left">We'll never share your krishi card number with anyone else.</div>
                                    </Form.Text>
                                </Form.Group>
                            </div>     

                            
                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="exampleForm.ControlSelect1">
                                    <div className="text-left">
                                        <label><h4>District</h4></label>
                                    </div>
                                    <Form.Control as="select" className="form-control custom__col">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>                                              
                            </div>
                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="exampleForm.ControlSelect1">
                                    <div className="text-left">
                                        <label><h4>Thana</h4></label>
                                    </div>
                                    <Form.Control as="select" className="form-control custom__col">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>                                              
                            </div>
                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="exampleForm.ControlSelect1">
                                    <div className="text-left">
                                        <label><h4>Post Code</h4></label>
                                    </div>
                                    <Form.Control as="select" className="form-control custom__col">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>                                              
                            </div>

                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <div className="text-left">
                                        <label><h4>Phone No<small>(bkash/nogod active)</small></h4></label>
                                    </div>
                                    <Form.Control className="form-control" type="password" placeholder="Enter a password" />
                                    <Form.Text className="text-muted">
                                    <div className="text-left">Please never share your password with anyone else.</div>
                                    </Form.Text>
                                </Form.Group>
                            </div> 

                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <div className="text-left">
                                        <label><h4>Password</h4></label>
                                    </div>
                                    <Form.Control className="form-control" type="password" placeholder="Enter a password" />
                                    <Form.Text className="text-muted">
                                    <div className="text-left">Please never share your password with anyone else.</div>
                                    </Form.Text>
                                </Form.Group>
                            </div> 

                            <div className="col-xs-6">
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <div className="text-left">
                                        <label><h4>Re-type Password</h4></label>
                                    </div>
                                    <Form.Control className="form-control" type="password" placeholder="Re-type the password" />
                                </Form.Group>
                            </div>                                           
                        
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="text-left">
                                        <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default FarmerRegistration
