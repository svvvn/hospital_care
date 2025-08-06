import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './FAQS.css';
import faqData from './DataFAQS';
import LatestNews from '../LatestNews/LatestNews';

const FAQ = () => {
    const firstHalf = faqData.slice(0, 6);
    const secondHalf = faqData.slice(6);

    return (
        <>
    <div className="container my-4">
        <div className="row">
        <div className="col-12">
            <h5>Faq's</h5>
        </div>

        <div className="col-md-12 col-lg-6">
            <Accordion defaultActiveKey="0">
            {firstHalf.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="mb-2">
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion>
        </div>


        <div className="col-md-12 col-lg-6 mb-4">
            <Accordion defaultActiveKey="0">
            {secondHalf.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index + 6} className="mb-2">
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion>
        </div>
        </div>
    </div>
    <LatestNews/>
    </>
    );
};

export default FAQ;
