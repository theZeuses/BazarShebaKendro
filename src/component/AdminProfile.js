import React from 'react';
import './AdminProfile.css';

function AdminProfile() {
    return (
        <div>
                <div class="main-content">
                    <div class="container mt-7">
                    <h2 class="mb-5">Admin</h2>
                    <div class="row">
                        <div class="col-xl-8 m-auto order-xl-1">
                        <div class="card bg-secondary shadow">
                            <div class="card-header bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                <h3 class="mb-0">Md Shamil Hossain</h3>
                                </div>
                                <div class="col-4 text-right">
                                <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                </div>
                            </div>
                            </div>
                            <div class="card-body">
                            <form>
                                <h6 class="heading-small text-muted mb-4">User information</h6>
                                <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-6">
                                    <div class="form-group focused">
                                        <label class="form-control-label" for="input-username">Username</label>
                                        <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" />
                                    </div>
                                    </div>
                                    <div class="col-lg-6">
                                    <div class="form-group">
                                        <label class="form-control-label" for="input-email">Email address</label>
                                        <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="you@example.com" />
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                    <div class="form-group focused">
                                        <label class="form-control-label" for="input-first-name">First name</label>
                                        <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" />
                                    </div>
                                    </div>
                                    <div class="col-lg-6">
                                    <div class="form-group focused">
                                        <label class="form-control-label" for="input-last-name">Last name</label>
                                        <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-md-12">
                                    <div class="form-group focused">
                                        <label class="form-control-label" for="input-address">Address</label>
                                        <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" type="text" />
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">
                                    <div class="form-group focused">
                                        <label class="form-control-label" for="input-city">City</label>
                                        <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value="New York" />
                                    </div>
                                    </div>
                                    <div class="col-lg-4">
                                    <div class="form-group focused">
                                        <label class="form-control-label" for="input-country">Country</label>
                                        <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="United States" />
                                    </div>
                                    </div>
                                    <div class="col-lg-4">
                                    <div class="form-group">
                                        <label class="form-control-label" for="input-country">Postal code</label>
                                        <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">About me</h6>
                                <div class="pl-lg-4">
                                <div class="form-group focused">
                                    <label>About Me</label>
                                    <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
           {/* <div className="adminProfile__summary">
                <h3>Summary</h3>
                <div className="adminProfile__summary__farmerNumber">
                    <div className="adminProfile__summary__farmerNumber__number">
                        <h4>Total Farmers Added</h4>
                        <h5>99999999999999999999</h5>
                    </div>
                </div>
                <div className="adminProfile__summary__productNumber">
                    <div className="adminProfile__summary__productNumber__number">
                        <h4>Total Products Added</h4>
                        <h5>9999999999999999999999999</h5>
                    </div>
                </div>
                <div className="adminProfile__summary__productAmount">
                    <div className="adminProfile__summary__productAmount__number">
                        <h4>Summary</h4>
                        <h5>0</h5>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}

export default AdminProfile
