import React from "react";
import DataLatestNews from "./DataLatestNews";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./LatestNews.css";

const LatestNews = () => {
    const data = DataLatestNews;

    return (
    <div className="latest-news-container">
        <div className="container my-5">
            <div className="title-latestnews text-center mb-4">
                <span className="d-block text-muted">Latest Updates</span>
                <h5>Our Latest News</h5>
            </div>

            <div className="row gy-4">
            {data.map((item, index) => (
                <div className="col-md-6 col-lg-3 news-card" key={index}>
                <Card className="h-100 shadow-sm">
                    <Card.Img variant="top" src={item.img1} alt="Main news" />
                    <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <img
                        src={item.img2}
                        alt="Person"
                        style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        }}
                        />
                        <span className="fw-semibold">{item.Name}</span>
                        <span className="text-muted ms-3">
                        <i className="fa-solid fa-calendar-days me-1"></i>{item.date}
                        </span>
                    </div>
                    <Card.Text>{item.description}</Card.Text>
                    <Button className="btn-primary-custom">
                        Read More <i className="fa-solid fa-angle-right ms-1"></i>
                    </Button>
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
};

export default LatestNews;