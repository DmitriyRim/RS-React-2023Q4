import { Component } from 'react';

export interface MainProps {
  data: {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
  }[];
}

export class Main extends Component<MainProps> {
  render() {
    return (
      <ul>
        {this.props.data.length
          ? this.props.data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))
          : 'Not found'}
      </ul>
    );
  }
}
