import React from 'react';
import headerimg from '../images/header_files/header.jpg';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';


const Home = () =>{
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h5>We Provide All Health Care Solutions</h5>
                        <h2>Protect Your Health And Take Care To Your Health</h2>
                        <button><a href="#">Read More</a></button>
                        <span>+</span>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header-box">
                        <img src={headerimg} alt="" />
                        <FontAwesomeIcon icon={faCircle} />
                        </div>  
                        
                    </div>
                    </div>
            </div>
        </header>
    )
        }
export default Home;