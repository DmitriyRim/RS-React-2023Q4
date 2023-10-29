import { Component } from 'react';
import { Search } from './components/Search/Search';
import './App.css';
import { Main, MainProps } from './components/Main/Main';

interface AppProps {}

interface AppState {
  data: MainProps[];
  loading: boolean;
  showError: boolean;
}

class App extends Component<AppProps, AppState> {
  public state = {
    data: [],
    loading: false,
    showError: false,
  };

  private getContent = (queryString: string = ''): Promise<Response> => {
    return fetch(`https://swapi.dev/api/people/?search=${queryString}`);
  };

  private buttonHandle = async () => {
    this.setState({ loading: false });
    const queryString = localStorage.getItem('search');

    const response = await this.getContent(queryString || '');
    const data = await response.json();

    this.setState({ data: data.results, loading: true });
  };

  private showError = () => {
    this.setState({ showError: true });
  };

  public componentDidMount(): void {
    this.buttonHandle();
  }

  render() {
    if (this.state.showError) {
      throw new Error('Писец');
    }
    return (
      <>
        <h1>The Star Wars</h1>
        <button onClick={this.showError}>Error</button>
        <Search handle={this.buttonHandle} />
        <hr />
        {this.state.loading ? (
          <Main data={this.state.data} />
        ) : (
          <div className="loader"></div>
        )}
      </>
    );
  }
}

export default App;
