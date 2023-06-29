import React, { Component } from 'react';
import { CiDroplet } from 'react-icons/ci';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import './Card3.css';
import { BiWind } from 'react-icons/bi';
import {SlSpeedometer} from 'react-icons/sl'
import {FiCloudRain} from 'react-icons/fi'
import {BsSun} from 'react-icons/bs'
import {TbTemperature} from 'react-icons/tb'
import {RiRainyLine} from 'react-icons/ri'

class Card3 extends Component {
  render() {
    return (
      <div>
        <div className="details-container">
          {/* Card-1 */}
          <Card className="details-card">
            <CiDroplet className="water-drop-icon" />
            <p className="details-text">
              <span className="details-value">Humidity</span>
              <br />
              <span className="details-status">
                <span className="details-percentage">82%</span>
                <span className="details-description">bad</span>
              </span>
            </p>
            <div className="captions">
              <p className="caption">good</p>
              <p className="caption">normal</p>
              <p className="caption">bad</p>
            </div>
            <div className="progress-container">
              <ProgressBar className="progress-bar progress-bar-success"  />
              <ProgressBar className="progress-bar progress-bar-success"  />
              <ProgressBar className="progress-bar progress-bar-danger"  />
            </div>
          </Card>

          {/* Card-2 */}
          <Card className="details-card">
            <BiWind className="water-drop-icon" />
            <p className="details-text">
              <span className="details-value">Wind</span>
              <br />
            </p>
           <SlSpeedometer className='speedometer-icon'/>

            <span className="details-km">60 km/h</span>
          </Card>

         {/* Card-3 */}
          <Card className="details-card">
          <FiCloudRain className="water-drop-icon" />
            <p className="details-text">
              <span className="details-value-3">Precipitation</span>
              <br />
              <span className="details-status">
                <span className="details-percentage">1.4 cm</span>
                
              </span>
            </p>
            <div className="captions-3">
              <p className="caption-3">0</p>
              <p className="caption-3">10</p>
              <p className="caption-3">20</p>
              <p className="caption-3">30</p>
              <p className="caption-3">40</p>
              <p className="caption-3">50</p>
              <p className="caption-3">60</p>
              <p className="caption-3">70</p>
              <p className="caption-3">80</p>
              <p className="caption-3">90</p>
             
            </div>
            <div className="progress-container-3">
              <ProgressBar className="progress-bar-3 progress-bar-success"  />
              <ProgressBar className="progress-bar-3 progress-bar-success"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-3 progress-bar-danger-3"  />
            </div>
          </Card>
        {/* Card-4 */}
          <Card className="details-card">
          <BsSun className="water-drop-icon" />
            <p className="details-text">
              <span className="details-value-4">UV index</span>
              <br />
              <span className="details-status">
                <span className="details-percentage">4 </span>
                <span className="details-description">medium</span>
              </span>
            </p>
            <div className="captions-4">
              <p className="caption-4">0-2</p>
              <p className="caption-4">3-5</p>
              <p className="caption-4">6-7</p>
              <p className="caption-4">8-10</p>
              <p className="caption-4">11+</p>
            

            </div>
            <div className="progress-container-4">
              
              <ProgressBar className="progress-bar-4 progress-bar-success"  />
              <ProgressBar className="progress-bar-4 progress-bar-danger"  />
              <ProgressBar className="progress-bar-4 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-4 progress-bar-danger-3"  />
              <ProgressBar className="progress-bar-4 progress-bar-danger-3"  />

            </div>
          </Card>
        {/* Card-5 */}
          <Card className="details-card">
          <TbTemperature className="water-drop-icon" />
            <p className="details-text">
              <span className="details-value-5">Feels like</span>
              <br />
              <span className="details-status">
                <span className="details-percentage">30°</span>
                
              </span>
            </p>
            <div className="captions-5">
              <p className="caption-5">0°</p>
              <p className="caption-5">25°</p>
              <p className="caption-5">50°</p>
            </div>
            <div className="progress-container">
              <ProgressBar className="progress-bar progress-bar-success-5"  />
            </div>
          </Card>
        {/* Card-6 */}
          <Card className="details-card">
          <RiRainyLine className="water-drop-icon" />
            <p className="details-text">
              <span className="details-value-6">Chance of rain</span>
              <br />
              <span className="details-status">
                <span className="details-percentage">42%</span>
                
              </span>
            </p>
            <div className="captions-6">
              <p className="caption-6">0%</p>
              <p className="caption-6">25%</p>
              <p className="caption-6">50%</p>
              <p className="caption-6">75%</p>
              <p className="caption-6">100%</p>
            </div>
            <div className="progress-container">
              <ProgressBar className="progress-bar progress-bar-success-6"  />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Card3;
