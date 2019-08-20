import * as React from "react";

import Header from "../components/Header";
import { Slide } from "react-slideshow-image";

const slideImages = ["/images/slide_1.jpg", "/images/slide_2.jpg", "/images/Slide_3.jpg"];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex: number, newIndex: number) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export interface HomeProps {
  userID: string | undefined;
}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          <Slide {...properties}>
            <div className="slide-container">
              <div
                className="slide"
                style={{ backgroundImage: `url(${slideImages[0]})` }}
              />
            </div>
            <div className="slide-container">
              <div
                className="slide"
                style={{ backgroundImage: `url(${slideImages[1]})` }}
              />
            </div>
            <div className="slide-container">
              <div
                className="slide"
                style={{ backgroundImage: `url(${slideImages[2]})` }}
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Home;
