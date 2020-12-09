import React from 'react';
import './InventoryDashboard.css'

function InventoryDashboard() {
    return (
        <div className="inventoryDashboard">
            <div className="inventoryDashboard__report">
                <div className="inventoryDashboard__report__farmerNumber">
                    <div className="inventoryDashboard__report__farmerNumber__number">
                        <h4>Total Farmers</h4>
                        <h5>99999999999999999999</h5>
                    </div>
                </div>
                <div className="inventoryDashboard__report__productNumber">
                    <div className="inventoryDashboard__report__productNumber__number">
                        <h4>Total Products</h4>
                        <h5>9999999999999999999999999</h5>
                    </div>
                </div>
                <div className="inventoryDashboard__report__summary">
                    <div className="inventoryDashboard__report__summary__number">
                        <h4>Summary</h4>
                        <h5>0</h5>
                    </div>
                </div>
            </div>
            <div className="inventoryDashboard__farmerList">
                <h3>Product List</h3>
            </div>
        </div>
    )
}

export default InventoryDashboard
