import React from 'react'

import { FaCartPlus,FaRegStar  } from "react-icons/fa6";
import { AiFillFileAdd,AiFillTwitterSquare,AiFillCarryOut } from "react-icons/ai";
import { TiHomeOutline  } from "react-icons/ti";
import { FaLinkedin,FaInstagramSquare,FaReact,FaRegCalendarAlt    } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import img1 from "./images/1.jpeg"
import img2 from "./images/2.jpeg"
import img3 from "./images/3.jpeg"
import img4 from "./images/4.jpeg"
import img5 from "./images/Doctors/WhatsApp Image 2025-08-04 at 6.18.12 PM.jpeg"
import img6 from "./images/Doctors/WhatsApp Image 2025-08-04 at 6.19.00 PM.jpeg"
import img7 from "./images/News/pic1.a3848a1189e2114e1b47.jpg"
import img8 from "./images/News/pic2.67db6c474a828bd7a0cd.jpg"
import img9 from "./images/News/pic3.89b8315141d75bd31ced.jpg"
import img10 from "./images/News/pic5.44c2a54210474d223a99.jpg"
import img11 from "./images/News/pic4.28ea761e88293ca4d821.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import './About.css'
export default function About() {
  const PatientsSaying = [
  { id: 1, img: img1},
  { id: 2, img: img2},
  { id: 3, img: img3},
  { id: 4, img: img4},
  { id: 5, img: img5},
  { id: 6, img: img6},

];
var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        };
  return (
    <>
    <section>
<div>
  <div >
<h1 className='address text-center'>About us</h1>
  </div>
  <div className='text-center'>
<div className="btn-group btngroup " role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary "><a className='text-light text-decoration-none' href="/"><TiHomeOutline color="white" size={20}/> Home</a></button>
  <button type="button" className="btn btn-primary mx-0 disabled">/</button>
  <button type="button" className="btn btn-primary mx-0 disabled">About us</button>
</div>
</div>
     
  <div className="container my-4 ">
    <div className="images-grid mb-auto mt-5">
      <img className='img1 mt-5 rounded-5' src={img1} height={200} width={250} alt="" />
      <img className='img2 rounded-5' src={img2} height={250} width={250} alt="" />
      <img className='img1 rounded-5' src={img3} height={270} width={250} alt="" />
      <img className='img2 rounded-5' src={img4} height={300} width={250} alt="" />
    </div>
    {/* images */}

    <div className="info-section mx-5 mt-4">
   <h3 className='h3about'> About Us</h3><br /><br />
      <div className="about-us">
        <h1 className='h1about'>The Great Place Of Medical Hospital Center </h1>
 <p>We Provide Special Tips and Advices Of Health Care Treatment and High Level Of Best Technology Involved In Our Hospital</p>
      </div><br /><br/><br/>

       <FaCartPlus color='blue' size={25}  /> Emergency help 

       <span className='d-inline-block fa1'><AiFillFileAdd color='green' size={25} />  Qualified doctors</span>
        <br/><br/><br /><br />
       <FaRegStar color='red' size={25} /> Best professionals 
       <span className='d-inline-block fa2'> <AiFillCarryOut color='darkorchid' size={25} /> Medical Treatment</span> 
      
      
       <br /><br /><br />

       <div className='text-center'>
      <button type="button" className="btn btn-success my-5">Read More</button>

       </div>
       
    </div>
    {/* info about */}
  </div>
</div>
</section>
{/* Section 1 */}

<section className='con2'>
  <div className='d-flex justify-content-around '>

<div className="card rounded-5  my-5">
  <div className="content">
    <h1 className="heading text-danger">120</h1>
    <h5 className="para"> Years With You </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
<div className="card rounded-5 my-5">
  <div className="content">
    <h1 className="heading text-danger">400</h1>
    <h5 className="para"> Awards </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
<div className="card rounded-5 my-5">
  <div className="content">
    <h1 className="heading text-danger">250</h1>
    <h5 className="para"> Doctors </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
<div className="card rounded-5 my-5">
  <div className="content">
    <h1 className="heading text-danger">800</h1>
    <h5 className="para"> Satisfied Client </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
</div>
</section>
{/* Section 2 */}

<section className='my-3'>
<p className='text-center pdoc fs-4 '>Our Doctors</p>
<h1 className='text-center hdoc  '>Meet Best Doctors </h1>

<div className='d-flex justify-content-around '>

<div className="card card1 rounded-5  my-5">
  <img src={img5} className='img my-3 rounded-5' alt="" />
  <div className="content">
    <h4 className=" text-danger">Dr.Mahmoud Ali</h4>
    <h6 className="job"> Cardiologist</h6>
   
    <a href=""className='icon' > <AiFillTwitterSquare className='text-center' size={30}/><a href=""><FaLinkedin size={30}/></a><a href=""><FaInstagramSquare size={30}/></a>   </a>
    
  </div>
</div>
<div className="card card1 rounded-5  my-5">
  <img className='img my-3 rounded-5' src={img6} alt="" />
  <div className="content">
    <h4 className=" text-danger">Dr.Alaa Ahmed</h4>
    <h6 className="job"> Chiropractor </h6>
      <a href=""className='icon' > <AiFillTwitterSquare className='text-center' size={30}/><a href=""><FaLinkedin size={30}/></a><a href=""><FaInstagramSquare size={30}/></a>   </a>
  </div>
</div>
<div className="card card1 rounded-5  my-5">
  <img className='img my-3 rounded-5' src={img4} alt="" />
  <div className="content">
    <h4 className=" text-danger">Dr.Sara Mohamed</h4>
    <h6 className="job"> Dentist </h6>
      <a href=""className='icon' > <AiFillTwitterSquare className='text-center' size={30}/><a href=""><FaLinkedin size={30}/></a><a href=""><FaInstagramSquare size={30}/></a>   </a>
  </div>
</div>


</div>
 
  </section>
{/* Section 3 */}

<section className='my-3  '>
  <div className='text-center'>
<p className='text-center pdoc fs-4 '>Testimonial</p>
<h1 className='text-center hdoc  '>See What Are The Patients <br /> Saying About us</h1>
    </div> 

    <div className='d-flex  '>
 
<div className=" diagram-container  my-3" >
<div className="center-shape"><FaReact size={250} color='darkorange' /></div>
      {PatientsSaying.map((Patients, index) => (
        <div key={Patients.id} className={`Patients-circle colmd position-${index + 1} `}>
          <img className='rounded-5' key={index} src={Patients.img} width={70} alt="" />

      
          
        </div>
))}
    </div>
<div class>
  
</div>
 <div className="testimonial-box rounded-5 p-xxl-5">
          <p className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam? Officia, facere explicabo voluptas quas dicta temporibus impedit inventore, sapiente reprehenderit suscipit dolores! Ut minima odit tempora ratione deserunt doloribus quidem quo dicta, tenetur totam vero error aliquam cupiditate accusamus eius at, quis asperiores. Iste nam placeat adipisci quod fuga!</p>
          <h5 className="mt-3">John Deo</h5>
          <p>PATIENT</p>
          <div className="arrows">
            <button className="btn btn-light text-light bg-dark me-2 rounded-3">← Last</button>
            <button className="btn btn-light text-light bg-dark rounded-3">Next →</button>
          </div>
        </div>
      </div>

</section>
{/* Seciton 4 */}

<section className='my-3'>
 <div className='text-center my-3'>
<p className='text-center pdoc fs-4 '>Latest News</p>
<h1 className='text-center hdoc  '>Our Latest News</h1>
    </div> 

    <div className='mx-5'>
<Slider {...settings}>


<a href="" className=''>
 <div className="card7" style={{width: '18rem'}}>
  <img src={img7} className="rounded-3 mb-3 mt-3" width={250}  alt="" />  
  <div className="card-body d-inline">

    <div className='d-flex dcarsoul'>
        <span><img src={img1} className='rounded-circle d-inline-block' width={25} alt="" /> Martina</span>                    <span className='d-inline-block fa3'><FaRegCalendarAlt/> 20 Jul 2025</span>
        </div>

    <h5 className="card-title hcarsoul mb-3">In this hospital there are special surgeon</h5>
    <button type="button" className="btn btn-outline-primary">Read More <SlArrowRight  /></button>

  </div>
</div>
</a>
<a href="" className=''>
 <div className="card7" style={{width: '18rem'}}>
  <img src={img8} className="rounded-3 mb-3 mt-3" width={250}  alt="" />  
  <div className="card-body d-inline">

    <div className='d-flex dcarsoul'>
        <span><img src={img5} className='rounded-circle d-inline-block' width={25} alt="" /> jon</span>                    <span className='d-inline-block fa3'><FaRegCalendarAlt/> 20 Jul 2025</span>
        </div>

    <h5 className="card-title hcarsoul mb-3">In this hospital there are special surgeon</h5>
    <button type="button" className="btn btn-outline-primary">Read More <SlArrowRight  /></button>

  </div>
</div>
</a>
<a href="" className=''>
 <div className="card7" style={{width: '18rem'}}>
  <img src={img9} className="rounded-3 mb-3 mt-3" width={250}  alt="" />  
  <div className="card-body d-inline">

    <div className='d-flex dcarsoul'>
        <span><img src={img10} className='rounded-circle d-inline-block' width={25} alt="" /> Micel</span>                    <span className='d-inline-block fa3'><FaRegCalendarAlt/> 20 Jul 2025</span>
        </div>

    <h5 className="card-title hcarsoul mb-3">In this hospital there are special surgeon</h5>
    <button type="button" className="btn btn-outline-primary">Read More <SlArrowRight  /></button>

  </div>
</div>
</a>
<a href="" className=''>
 <div className="card7" style={{width: '18rem'}}>
  <img src={img11} className="rounded-3 mb-3 mt-3" width={250}  alt="" />  
  <div className="card-body d-inline">

    <div className='d-flex dcarsoul'>
        <span><img src={img4} className='rounded-circle d-inline-block' width={25} alt="" /> Shery</span>                    <span className='d-inline-block fa3'><FaRegCalendarAlt/> 20 Jul 2025</span>
        </div>

    <h5 className="card-title hcarsoul mb-3">Health Will Be A Thing Of The Past And Here's Why</h5>
    <button type="button" className="btn btn-outline-primary">Read More <SlArrowRight  /></button>

  </div>
</div>
</a>
<a href="" className=''>
 <div className="card7" style={{width: '18rem'}}>
  <img src={img3} className="rounded-3 mb-3 mt-3" width={250} height={185}  alt="" />  
  <div className="card-body d-inline">

    <div className='d-flex dcarsoul'>
        <span><img src={img2} className='rounded-circle d-inline-block' width={25} alt="" /> Carlos</span>                    <span className='d-inline-block fa3'><FaRegCalendarAlt/> 20 Jul 2025</span>
        </div>

    <h5 className="card-title hcarsoul mb-3">In this hospital there are special surgeon</h5>
    <button type="button" className="btn btn-outline-primary">Read More <SlArrowRight  /></button>

  </div>
</div>
</a>
<a href="" className=''>
 <div className="card7" style={{width: '18rem'}}>
  <img src={img4} className="rounded-3 mb-3 mt-3" width={250} height={185}  alt="" />  
  <div className="card-body d-inline">

    <div className='d-flex dcarsoul'>
        <span><img src={img3} className='rounded-circle d-inline-block' width={25}   alt="" /> Samul</span>                    <span className='d-inline-block fa3'><FaRegCalendarAlt/> 20 Jul 2025</span>
        </div>

    <h5 className="card-title hcarsoul mb-3">Can you get a diflucan prescription online?</h5>
 <button type="button" className="btn btn-outline-primary">Read More <SlArrowRight  /></button>

  </div>
</div>
</a>




          </Slider>
    </div>

</section>
{/* Section 5 */}
    </>
  )
}
