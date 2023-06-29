import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {FiNavigation} from 'react-icons/fi'
import {BsFillSunriseFill} from 'react-icons/bs'
import {BsFillSunsetFill} from 'react-icons/bs'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {BsSun} from 'react-icons/bs'
import './Card1.css'; // Import the CSS file


class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFahrenheit: true
    };
  }

  toggleUnits = () => {
    this.setState((prevState) => ({
      isFahrenheit: !prevState.isFahrenheit
    }));
  }

  render() {
    const { isFahrenheit } = this.state;

    return (
      <div className="card-container">
        <Card className="main-card">
          <Card.Body>
            <div className="button-container">
              <button className="plus-button">+</button>
              <div className="carousel-dots">
                <span className="carousel-dot"></span>
                <span className="carousel-dot"></span>
                <span className="carousel-dot"></span>
              </div>
              <span className="switch-label-f">C°</span>
              <div className={`switch ${isFahrenheit ? 'on' : ''}`} onClick={this.toggleUnits}></div>
              <span className="switch-label-c">F°</span>
            </div>

            <div className="country">
            <FiNavigation className="nav-bar-icon" />
            <h6 className='cn'>New York,USA</h6>
            <BsFillSunriseFill className="sunrise-icon" />
            <h6 className='time'>07:19</h6>
            <h6 className='date'>Today 28 Sept</h6>
            <BsFillSunsetFill className="sunset-icon" />
            <h6 className='time-1'>19:32</h6>
            </div>

          <div className='temperature'>
           <AiOutlineLeft className="left"/>
           <h1 className='temp'>27°</h1>
           <AiOutlineRight className="right"/>
           <BsSun className='sun'/>
           <h6 className='condition'>Sunny</h6>
          </div>
            
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Card1;
