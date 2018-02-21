import React from 'react';

const MusicDetails = (props) => {
  if(!props.music) return null;
  console.log(props.music);
  return (
    props.music.map( (song, index) => {
      return (
        <div>
          <h5 key={index}>{index + 1}: {song['im:name'].label}</h5>
          <h6>{song['im:artist'].label}</h6>
          <img alt="fdoicjwioc" src={song['im:image'][2].label}/>
        </div>
    )
    })
  )
}

export default MusicDetails;
