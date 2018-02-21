import React from 'react';
import MusicDetails from '../components/MusicDetails';

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allMusic: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {

      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({
        allMusic: data.feed.entry
      })
    })
    request.send();
  }

  render(){
    return (
      <div>
        <h2>TOP 20 LIST</h2>
        <MusicDetails music={this.state.allMusic} />
      </div>
    );
  }

}

export default MusicContainer;
