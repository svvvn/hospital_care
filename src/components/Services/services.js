import React from 'react';
import './services.css';
import { TiHomeOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const cardsData = [
  {
    image: require('../assets/service1.jpg'),
    title: 'Diagnostics',
    description: 'We help you checking your health.',
  },
  {
    image: require('../assets/service2.jpg'),
    title: 'Treatment',
    description: 'We help you checking your health.',
  },
  {
    image: require('../assets/service3.jpg'),
    title: 'Surgery',
    description: 'We help you checking your health.',
  },
  {
    image: require('../assets/service4.jpg'),
    title: 'Emergency',
    description: 'We help you checking your health.',
  },
  {
    image: require('../assets/service5.jpg'),
    title: 'Vaccine',
    description: 'We help you checking your health.',
  },
  {
    image: require('../assets/service6.jpg'),
    title: 'Qualified Doctors',
    description: 'We help you checking your health.',
  }
];

const Services = () => {
  return (
    <div className="services-section">
      {/* ===== Header Section ===== */}
      <div className="services-header">
        <div className="circle"></div>
        <div className="plus-sign">+</div>
        <div className="text-center">
          <h1>Services</h1>
          <div className="btn-group btngroup" role="group" aria-label="Basic example">
            <Link to="/home" className="btn btn-primary text-light text-decoration-none">
              <TiHomeOutline color="white" size={20} /> Home
            </Link>
            <button type="button" className="btn btn-primary mx-0 disabled">/</button>
            <button type="button" className="btn btn-primary mx-0 disabled">Services</button>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
      <div className="section-gap"></div>

      {/* ===== Cards Section ===== */}
      <div className="cards-container">
        <div className="cards-row">
          {cardsData.slice(0, 3).map((card, index) => (
            <div className="card-item" key={index}>
              <img 
                src={card.image} 
                alt={card.title} 
                className="card-image"
                onMouseEnter={(e) => e.currentTarget.style.animation = 'shake 0.5s ease-in-out'}
                onMouseLeave={(e) => e.currentTarget.style.animation = ''}
              />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
              <Link 
                to={`/services/${card.title.toLowerCase().replace(' ', '-')}`}
                className="card-button"
              >
                View More
              </Link>
            </div>
          ))}
        </div>

        <div className="cards-row">
          {cardsData.slice(3).map((card, index) => (
            <div className="card-item" key={index + 3}>
              <img 
                src={card.image} 
                alt={card.title} 
                className="card-image"
                onMouseEnter={(e) => e.currentTarget.style.animation = 'shake 0.5s ease-in-out'}
                onMouseLeave={(e) => e.currentTarget.style.animation = ''}
              />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
              <Link 
                to={`/services/${card.title.toLowerCase().replace(' ', '-')}`}
                className="card-button"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Stats Section ===== */}
      <section className='con2'>
        <div className='d-flex justify-content-around flex-wrap'>
          <div className="card rounded-5 my-5 p-3 text-center">
            <div className="content">
              <h1 className="heading text-danger">120</h1>
              <h5 className="para">Years With You</h5>
              <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
          </div>
          <div className="card rounded-5 my-5 p-3 text-center">
            <div className="content">
              <h1 className="heading text-danger">400</h1>
              <h5 className="para">Awards</h5>
              <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
          </div>
          <div className="card rounded-5 my-5 p-3 text-center">
            <div className="content">
              <h1 className="heading text-danger">250</h1>
              <h5 className="para">Doctors</h5>
              <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
          </div>
          <div className="card rounded-5 my-5 p-3 text-center">
            <div className="content">
              <h1 className="heading text-danger">800</h1>
              <h5 className="para">Satisfied Client</h5>
              <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;