import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Card2.css';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import {Line} from 'react-chartjs-2';
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
class Card2 extends Component {
  render() {
    const data = {
      labels: ['Now', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
      datasets: [
        {
          label: 'Temperature',
          data: [12, 28, 35, 15, 20, 49, 29, 28],
          
          borderColor: 'black',
          borderWidth: 1,
          pointBackgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink'],
          backgroundColor:'#3f9ae5',
          fill: 'origin',
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Temperature (°C)',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            stepSize: 10,
            callback: function(value) {
              return value + '°';
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
    };
    return (
      <div>
        <Card className="weather-card">
          <Card.Body>
            <div className="header-container">
              <div className="header-left">
                <h6 className='head-1'>Welcome back Isabella!</h6>
                <p className='para-1'>Check out today's weather information</p>
              </div>
              <div className="header-right">
                <div className="three-dots">...</div>
                <img src="https://media.licdn.com/dms/image/D5603AQEA8eM8hsn46g/profile-displayphoto-shrink_800_800/0/1664357661766?e=1693440000&v=beta&t=u81VeuF85KzLtUxm9g_o-L3Ad2xpYaWbBbQjbLXKGJ4" alt="Profile" className="profile-image" />
              </div>
            </div>
            <div className="details-heading">
              <h6 className='para-2'>More details of today's weather</h6>
            </div>
            <Card className='hour-card'>
              <h6 className='uc'>Upcoming hours</h6>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Rain precipitation
              </Dropdown.Toggle>
              <DropdownButton variant="success" title="Next days" id="dropdown-basic-1" drop="end">
              </DropdownButton>

              <div className="chart-container">
                <Line
                  data={data}
                  options={options}
                />
              </div>
            </Card>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Card2;
