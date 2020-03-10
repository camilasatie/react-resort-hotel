import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus!'
      },
      {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus!'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus!'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus!'
      }
    ]
  };
  render() {
    return (
      <div>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
