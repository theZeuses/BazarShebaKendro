import React, {useEffect, useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import './ProductInput.css';

function ProductInput() {

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
                        <h1>Input New Product</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"> 
                        <div className="text-right">
                            <label><h4>Attach a Photo:</h4></label>
                        </div>                                                                            
                    </div>
                    <div className="col-sm-5">
                        <div className="text-center">
                            <img src={preview} className="avatar img-circle img-thumbnail" alt="avatar" />
                            <input type="file" name='image' className="text-center center-block file-upload" ref={hiddenFileInput} onChange={onSelectFile}></input>
                            <input type="button" value="Browse..." id="selectFile" className="text-center center-block" onClick={handleClick} />
                        </div>                                  
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12"> 
                        <Form className="form" method="post" enctype="multipart/form-data">
                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Product Name:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control className="form-control" type="text" placeholder="Product name" />                        
                                    </Form.Group>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Product Category:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control as="select" className="form-control custom__col">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>                        
                                    </Form.Group>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>
                                            <Form.Group>
                                                <Form.Check 
                                                    inline
                                                    checked
                                                    type="radio"
                                                    id="product-measure-weight"
                                                    name="product-measure"
                                                    label="Weight"
                                                />
                                                <Form.Check 
                                                    inline
                                                    type="radio"
                                                    id="product-measure-piece"
                                                    name="product-measure"
                                                    label="Piece"
                                                />
                                            </Form.Group>
                                        </h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control className="form-control" type="number" placeholder="Product piece or weight in kg" />                        
                                    </Form.Group>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Price:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control className="form-control" type="number" placeholder="Product price in taka" />                        
                                    </Form.Group>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Product Quality:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control as="select" className="form-control custom__col">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>                        
                                    </Form.Group>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Origin Zone:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control as="select" className="form-control custom__col">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>                        
                                    </Form.Group>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Origin Area:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control as="select" className="form-control custom__col">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>                        
                                    </Form.Group>
                                </div>
                            </div> 

                            <div className="row">
                                <div className="col-sm-3"> 
                                    <div className="text-right">
                                        <label><h4>Origin Post Code:</h4></label>
                                    </div>                                                                            
                                </div>
                                <div className="col-sm-9">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Control as="select" className="form-control custom__col">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>                        
                                    </Form.Group>
                                </div>
                            </div> 
                            <br></br>

                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="text-center">
                                        <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInput;
