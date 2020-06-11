import React, { Component } from 'react';
import Donor from "./DonorBtn";
import Carousel from 'react-bootstrap/Carousel';

class Slides extends Component {
    
    render() {
        return (
            <header className="" >
                
            <Carousel fade={true} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/Slide1.jpg'}
                        alt="First slide"
                        height="400"
                        width="900"
                    />
                    <Carousel.Caption>
                        <h3 class="animated slideInDown" style={{animationDelay: "1s"}}>JOIN OVER MILLION PEOPLE SUPPORTING CROWDFUNDING....</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/sdgslide.jpg'}
                        alt="Third slide"
                        height="400"
                        width="900"
                    />

                    <Carousel.Caption>
                    <h3 class="animated zoomIn" style={{animationDelay: "1s"}}>JOIN OVER MILLION PEOPLE SUPPORTING CROWDFUNDING....</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
            <Donor/>
            </header>
        )
    }
}
export default Slides;