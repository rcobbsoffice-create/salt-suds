import React from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard container">
      <div className="admin-header">
        <h1>Admin <span className="highlight-blue">Dashboard</span></h1>
        <p>Manage bookings and services for Salt & Suds.</p>
      </div>

      <div className="admin-stats-grid">
        <div className="stat-card glass-effect">
          <h3>Total Bookings</h3>
          <p className="stat-value">24</p>
        </div>
        <div className="stat-card glass-effect">
          <h3>Revenue (MTD)</h3>
          <p className="stat-value">$3,420</p>
        </div>
        <div className="stat-card glass-effect">
          <h3>Pending Inquiries</h3>
          <p className="stat-value">5</p>
        </div>
      </div>

      <div className="admin-main">
        <div className="bookings-table-wrapper glass-effect">
          <h3>Recent Bookings</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Doe</td>
                <td>Standard Clean</td>
                <td>Feb 15, 2026</td>
                <td><span className="status-badge pending">Pending</span></td>
                <td><button className="btn-small">Confirm</button></td>
              </tr>
              {/* More rows will be dynamic */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
