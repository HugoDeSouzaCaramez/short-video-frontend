import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@nabendu82</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          {/*Causava bug na renderização com react-dom >= 18 por isso npm install react@17.0.2 react-dom@17.0.2*/}
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>I am a Windows PC</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://e7.pngegg.com/pngimages/588/875/png-clipart-compact-disc-manufacturing-disk-storage-cd-player-cd-rom-dvd-cdr-cd-player-thumbnail.png"
        alt="video footer"
      />
    </div>
  );
};
export default VideoFooter;
