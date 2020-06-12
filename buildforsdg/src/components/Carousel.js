import React, { Component } from 'react';
import Donor from "./DonorBtn";
import Carousel from 'react-bootstrap/Carousel';

class Slides extends Component {
    
    render() {
        return (
            <header className=" relative" >
                
            <Carousel fade={true} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/undercover/image/upload/v1591966073/BuildForSDG/Images/e6ofs8ywq0s3tjba26q9.jpg"
                        alt="First slide"
                        height="500"/>
                    <Carousel.Caption>
                        <h3 className="animated slideInLeft" style={{animationDelay: "1s"}}>JOIN OVER MILLION PEOPLE SUPPORTING CROWDFUNDING....</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/undercover/image/upload/v1591966113/BuildForSDG/Images/e11ls31lc8iictsnn9jy.jpg"
                        alt="Third slide"
                        height="500"
                       
                    />

                    <Carousel.Caption>
                    <h3 class="animated zoomIn" style={{animationDelay: "1s"}}>If we are to reach real peace in this world… we shall have to begin with Youth.</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/undercover/image/upload/v1591966088/BuildForSDG/Images/qol3uo2knctmswkshpit.jpg"
                        alt="Third slide"
                        height="500"
                       
                    />

                    <Carousel.Caption>
                    <h3 class="animated zoomIn" style={{animationDelay: "1s"}}>““We showed that we are united and that we, young people, are unstoppable.”— Greta Thunberg</h3>
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