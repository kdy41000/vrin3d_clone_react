import React from 'react';

function Section({ id, videoSource, children }) {
  return (
    <div id={id} className="sc-gvLeZx fJCXLf">
      <div className="sc-cPzCod nmnyx content" style={{position: "absolute", top: "0px", bottom: "unset"}}>
        <video width="100%" height="100%" loop muted playsInline autoPlay>
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="sc-iMOaIs eVJoZ"></div>
      </div>
      <div className="MuiStack-root sc-fFfCVn fbmimk css-1lxwves">
        {children}
      </div>
    </div>
  );
}

export default Section;