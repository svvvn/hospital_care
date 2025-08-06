import React, { useState } from 'react';
import './AppointmentForm.css';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { TiHomeOutline } from "react-icons/ti";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>

      
      <div className="booking-header text-center">
      <h1 className="address">Booking</h1><span>+</span>

        <div className="btn-group btngroup mt-3" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary "><a className='text-light text-decoration-none' href="/"><TiHomeOutline color="white" size={20}/> Home</a></button>

          <button type="button" className="btn btn-primary mx-0 disabled">/</button>
          <button type="button" className="btn btn-primary mx-0 disabled">Booking</button>
          
        </div>
      </div>

      
      <div className="appointment-section py-5 d-flex justify-content-center">
        <div className="form-box p-4 rounded-5">
          <h3 className="text-center mb-4 fw-bold text-primary">Book Appointment</h3>
          <Form>
            <Form.Group className="mb-4">
              <Form.Control type="text" placeholder="Select Department" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Select>
                <option>Select Doctor</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-4">
              <InputGroup>
                <Form.Control
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <div className="d-grid">
              <Button className="appoint-btn" size="lg">
                Appointment Now
              </Button>
            </div>
          </Form>
        </div>
      </div>

    </div>
  );
};

export default AppointmentForm;