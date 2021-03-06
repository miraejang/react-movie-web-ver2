import { movieApi } from 'api';
import React from 'react';
import MoviesPresenter from './MoviesPresenter';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      popular: null,
      nowPlaying: null,
      upcoming: null,
      topRated: null,
    };
  }

  componentDidMount = async () => {
    try {
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      const {
        data: { results: topRated },
      } = await movieApi.topRated();
      this.setState({
        popular,
        nowPlaying,
        upcoming,
        topRated,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <MoviesPresenter {...this.state} />;
  }
}

export default MoviesContainer;
