import React from 'react';
import PostTop from '../layout/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../layout/FooterLink';

const OculysHealthInformatics = () => {
    return (
      <div className="container-fluid mx-auto px-0">
        <img
          src={require(`../../assets/oculysA.png`)}
          className="topProjectImage"
        />
        <div className="projectContainer mx-auto px-0">
          <Fade big>
            <PostTop subtitle="Work Term" title="Oculys Health Informatics" />
            <hr className="my-3" />
            <p className="general-font">Coming soon!</p>
            <hr />
          </Fade>

          <FooterLink
            path="/work/fgfbrands"
            title="Up Next"
            subtitle="FGF Brands"
          />
        </div>
      </div>
    );

}


export default OculysHealthInformatics;