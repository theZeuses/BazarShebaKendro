import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import './AdminSideMenu.css';
import jQuery from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import LogIn from './LogIn';
import FarmerRegistration from './FarmerRegistration';
import FarmerList from './FarmerList';
import ProductInput from './ProductInput';
import ProductList from './ProductList';
import InventoryDashboard from './InventoryDashboard';
import AdminProfile from './AdminProfile';


function AdminSideMenu(props) {

    var loader = "";
    var location = "";

    switch (props.component) {
        case "FarmerList":
            loader = <FarmerList />;
            location = " / Farmer / list /";
            break;
        case "FarmerRegistration":
            loader = <FarmerRegistration />;
            location = " / Farmer / Registration /";
            break;
        case "login":
            loader = <LogIn />;
            break;
        case "ProductInput":
            loader = <ProductInput />;
            location = " / Product / Input /";
            break;
        case "ProductList":
            loader = <ProductList />;
            location = " / Product / List /";
            break;
        case "InventoryDashboard":
            loader = <InventoryDashboard />;
            location = " / Inventory Dashboard /";
            break;
        case "AdminProfile":
            loader = <AdminProfile />;
            location = " / User / Profile /";
            break;
        default:
            break;
    }

    useEffect(()=>{
        jQuery(function ($) {   
            $(".sidebar-submenu").slideUp(200);
            if (
                $(this)
                .parent()
                .hasClass("active")
            ) {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                .parent()
                .removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
                $(this)
                .parent()
                .addClass("active");
            }
        });
    })

    useEffect(()=>{
        jQuery(function ($) {            
            $(".sidebar-dropdown > a").click(function() {
                $(".sidebar-submenu").slideUp(200);
                if (
                    $(this)
                    .parent()
                    .hasClass("active")
                ) {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                    .parent()
                    .removeClass("active");
                } else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                    .next(".sidebar-submenu")
                    .slideDown(200);
                    $(this)
                    .parent()
                    .addClass("active");
                }
            });
        
            /*$("#close-sidebar").click(function() {
                $(".page-wrapper").removeClass("toggled");
            });
            $("#show-sidebar").click(function() {
                $(".page-wrapper").addClass("toggled");
            });*/
        
            $("#menu-toggle").click(function() {
                $(".page-wrapper").toggleClass("toggled");
            });        
        });
    },[])


    return (
        
        <div className="MainDiv">
            <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
            <nav class="navbar sticky-top navbar-expand-lg">
                <button class="btn btn-primary" id="menu-toggle" >Admin Menu</button>
                <div className="navbar__location"> {location} </div>        
            </nav>
            <div class="page-wrapper chiller-theme">
                <nav id="sidebar" class="sidebar-wrapper">                
                    <div class="sidebar-content">
                        <div class="sidebar-brand">
                            <Link to="#" className="link">Administrator</Link>
                        </div>
                        <div class="sidebar-header">
                            <div class="user-pic">
                                <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="User picture" />
                            </div>
                            <div class="user-info">
                                <span class="user-name">Jhon
                                    <strong> Smith</strong>
                                </span>
                                <span class="user-role">Administrator</span>
                            </div>
                        </div>
                        <div class="sidebar-menu">
                            <ul>
                                {/*<li class="header-menu">
                                    <span>General</span>
                                </li>*/}
                                <li class="sidebar-dropdown">
                                    <Link to="#" className="link">
                                        <i class="fa fa-id-card"></i>
                                        <span>Farmers</span>
                                        {/*<span class="badge badge-pill badge-warning">New</span>*/}
                                    </Link>
                                    <div class="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="/farmer/register" className="link">Registration</Link>
                                            </li>
                                            <li>
                                                <Link to="/farmer/list" className="link">Farmer List</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="sidebar-dropdown">
                                    <Link to="#" className="link">
                                        <i class="fa fa-th-list"></i>
                                        <span>Products</span>
                                    </Link>
                                    <div class="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="/product/input" className="link">Product Input</Link>
                                            </li>
                                            <li>
                                                <Link to="/product/list" className="link">Product List</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/inventory/dashboard" className="link">
                                        <i class="fa fa-tachometer-alt"></i>
                                        <span>Inventory Dashboard</span>
                                    </Link>
                                </li>
                                <li class="sidebar-dropdown">
                                    <Link to="#" className="link">
                                        <i class="fas fa-user"></i>
                                        <span>User</span>
                                    </Link>
                                    <div class="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="/admin/profile" className="link">Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="link">Account Setting</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="sidebar-dropdown">
                                    <Link to="#" className="link">
                                        <i class="fa fa-shopping-cart"></i>
                                        <span>Arotdar Order</span>
                                    </Link>
                                    <div class="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <Link to="#" className="link">Orders</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="link">In Progress</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="link">Cleared</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="sidebar-footer">
                        <Link to="#" className="link">
                            <i><FontAwesomeIcon icon={faBell} /></i>
                            <span class="badge badge-pill badge-warning notification">3</span>
                        </Link>
                        <Link to="#" className="link">
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            <span class="badge badge-pill badge-success notification">7</span>
                        </Link>
                        <Link to="#" className="link">
                            <i><FontAwesomeIcon icon={faCog} /></i>
                            <span class="badge-sonar"></span>
                        </Link>
                        <Link to="#" className="link">
                            <i><FontAwesomeIcon icon={faSignOutAlt} /></i>
                        </Link>
                    </div>
                </nav>

                {/*Componenet loader */}

                < main class="page-content">
                    <div class="container-fluid">

                        {/*load component*/}

                        {loader}

                    </div>
                </main>

            </div>
        </div>

    )
}

export default AdminSideMenu
