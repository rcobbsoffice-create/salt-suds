import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, Calendar, Send, Sparkles } from 'lucide-react';
import './BookingWizard.css';

const STEPS = [
  { id: 'scope', title: 'Scope', icon: <Home size={20} /> },
  { id: 'schedule', title: 'Schedule', icon: <Calendar size={20} /> },
  { id: 'details', title: 'Details', icon: <Send size={20} /> }
];

const HOURLY_RATE = 45; // Base hourly rate in dollars

const BookingWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    rooms: 1,
    bathrooms: 1,
    cleaningType: 'standard',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const calculateHours = () => {
    const base = formData.rooms * 0.75 + formData.bathrooms * 1;
    return formData.cleaningType === 'deep' ? base * 1.5 : base;
  };

  const totalEstimate = (calculateHours() * HOURLY_RATE).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="booking-wizard glass-effect">
      <div className="wizard-header">
        <h2 className="wizard-title">Book Your <span className="highlight-blue">Coastal Clean</span></h2>
        <div className="step-indicator">
          {STEPS.map((step, index) => (
            <div key={step.id} className={`step-item ${index <= currentStep ? 'active' : ''}`}>
              <div className="step-icon">{step.icon}</div>
              <span className="step-name">{step.title}</span>
              {index < STEPS.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </div>

      <div className="wizard-content">
        {currentStep === 0 && (
          <div className="step-pane animate-fade-in">
            <h3 className="pane-title">What's the scope of the clean?</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Number of Rooms</label>
                <input type="number" name="rooms" min="1" value={formData.rooms} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Number of Bathrooms</label>
                <input type="number" name="bathrooms" min="1" value={formData.bathrooms} onChange={handleInputChange} />
              </div>
              <div className="form-group full-width">
                <label>Cleaning Type</label>
                <select name="cleaningType" value={formData.cleaningType} onChange={handleInputChange}>
                  <option value="standard">Standard Coastal Clean</option>
                  <option value="deep">Deep Shore Clean (1.5x time)</option>
                  <option value="move">Move-In/Move-Out</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="step-pane animate-fade-in">
            <h3 className="pane-title">When should we arrive?</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="step-pane animate-fade-in">
            <h3 className="pane-title">Final Details</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Service Address</label>
                <input type="text" name="address" placeholder="123 Ocean Dr, Virginia Beach" value={formData.address} onChange={handleInputChange} required />
              </div>
              <div className="form-group full-width">
                <label>Special Notes</label>
                <textarea name="notes" placeholder="Gate code, pet instructions, etc..." value={formData.notes} onChange={handleInputChange}></textarea>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="wizard-footer">
        <div className="estimate-box">
          <span className="estimate-label">Estimated Total:</span>
          <span className="estimate-amount">${totalEstimate}</span>
          <span className="estimate-hours">({calculateHours().toFixed(1)} hrs @ ${HOURLY_RATE}/hr)</span>
        </div>
        <div className="footer-actions">
          {currentStep > 0 && (
            <button onClick={prevStep} className="btn-secondary btn-icon">
              <ChevronLeft size={20} /> <span>Back</span>
            </button>
          )}
          {currentStep < STEPS.length - 1 ? (
            <button onClick={nextStep} className="btn-primary btn-icon">
              <span>Next</span> <ChevronRight size={20} />
            </button>
          ) : (
            <button className="btn-primary btn-icon btn-submit">
              <Sparkles size={20} /> <span>Confirm Booking</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingWizard;
