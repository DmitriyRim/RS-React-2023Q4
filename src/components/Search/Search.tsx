import { Component } from 'react';
import './Search.scss';

interface PropsSearch {
  handle: () => void;
}

export class Search extends Component<PropsSearch> {
  public state = {
    defaultString: '',
    currentQueryString: '',
  };
  public componentDidMount(): void {
    const string = localStorage.getItem('search');

    if (string) {
      this.setState({ defaultString: string, currentQueryString: string });
    }
  }
  private searchHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    let string = event.currentTarget.value;

    string = string.trim();
    localStorage.setItem('search', string);
    this.setState({ currentQueryString: string });
  };
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          defaultValue={this.state.defaultString}
          onChange={this.searchHandle}
        />
        <button onClick={this.props.handle}>Search</button>
      </div>
    );
  }
}
