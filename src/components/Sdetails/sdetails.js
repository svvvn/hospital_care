import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './sdetails.css';

const availableServices = [
  'diagnostics',
  'treatment',
  'surgery',
  'emergency',
  'vaccine',
  'qualified doctors'
];

const Sdetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!availableServices.includes(serviceId)) {
      navigate('/');
    }
  }, [serviceId, navigate]);

  return (
    <div className="service-details">
      <h2>Service Details: {serviceId}</h2>
      <div className="service-content">
        <p>Detailed information about {serviceId} service will appear here.</p>
      </div>
    </div>
  );
};

export default Sdetails;