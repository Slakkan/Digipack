import * as React from "react";

import { Slide } from "react-slideshow-image";

const slideImages = ["/images/slide_1.jpg", "/images/slide_2.jpg", "/images/slide_3.jpg"];

const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex: number, newIndex: number) => {
    // Para uso futuro
  }
};

export interface HomeProps {
}

export interface HomeState {
}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
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
