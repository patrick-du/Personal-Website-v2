import React from 'react';
import PostTop from '../layout/PostTop';
import PhotoWrapper from '../layout/PhotoWrapper';
import Fade from 'react-reveal/Fade';
import FooterLink from '../layout/FooterLink';

const Weatherly = () => {
  return (
    <div className="container-fluid px-0">
      <img
        src={require(`../../assets/userAuth.png`)}
        className="topProjectImage"
      />

      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Side Project" title="User Authentication" />
          <hr className="my-3" />
          <p className="general-font">
            User Authentication is a web & mobile boilerplate application for
            account registration, login, and updates. I developed this app for
            implementation in future projects as well as practice with Node
            (Express) and MongoDB.
          </p>
          <PhotoWrapper
            path="userAuth5.png"
            desc="User Registration, User Login"
          />
          <p className="general-font">
            User Authentication provides a secure way for users to register and
            login to their account without third-party strategies. I utilized
            Passport JS, an authentication middleware, and adopted their local
            username and password authentication strategy. I stored the accounts
            into MongoDB, a non-relational database, and retrieved data through
            the application's endpoints.
          </p>

          <PhotoWrapper
            path="userAuth6.png"
            desc="Account Screen, Update Account Details"
          />

          <p className="general-font">
            This app was developed with Node (Express) and MongoDB. View the
            full project on{' '}
            <a
              href="https://github.com/patrick-du/auth-bp"
              target="_blank"
              className="hvr-underline-blue blue"
            >
              Github
            </a>{' '}
            or{' '}
            <a
              href="https://patrickdu-userauth-boilerplate.herokuapp.com"
              target="_blank"
              className="hvr-underline-blue blue"
            >
              try it yourself
            </a>
            .
          </p>
          <hr />
        </Fade>

        <FooterLink
          path="/work/weatherly"
          title="Up Next"
          subtitle="Weatherly"
        />
      </div>
    </div>
  );
};

const styles = {};

export default Weatherly;
