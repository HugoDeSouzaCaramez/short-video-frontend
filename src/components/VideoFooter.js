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
