import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';
import HyperLink from '../../../components/HyperLink';

const UWBlueprint = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <WorkImage photo="uwblueprint2" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Leadership Experience" title="UW Blueprint" />
          <hr className="my-3" />
          <p>
            UW Blueprint is a group of students dedicated to building and
            promoting technology for social good. We partner with non-profit
            organizations to provide technology services such as websites,
            mobile applications, analysis tools—free of charge.
          </p>
          <p>
            All of our work is open source and can be found on{' '}
            <HyperLink link="https://github.com/uwblueprint/" text="GitHub" />.
          </p>
          <hr />
          <p>
            <b>Raising the Roof (RTR)</b>
          </p>
          <p>
            <b>Role: </b>
            Project Developer
          </p>
          <p>
            <b>Duration: </b>
            January to April 2021
          </p>
          <p>
            <b>Technologies: </b>
            React, Node (Express), GraphQL (Apollo), PostgreSQL, Docker
          </p>
          <p>
            <b>Contribution: </b>
            Developed a storefront to support homelessness across Canada for
            Raising the Roof’s annual fundraising campaign, impacting 200+
            partner agencies
          </p>
          <p>
            View the web app on{' '}
            <HyperLink link="https://building-up.netlify.app/" text="Netlify" />
            .
          </p>
          <PhotoWrapper img="uwblueprint9.png" />
          <PhotoWrapper img="uwblueprint10.png" />
          <PhotoWrapper img="uwblueprint11.png" />
          <hr />
          <p>
            <b>Region of Waterloo Paramedic Services (PSV) </b>
          </p>
          <p>
            <b>Role: </b>
            Project Developer
          </p>
          <p>
            <b>Duration: </b>
            September to December 2020
          </p>
          <p>
            <b>Technologies: </b>
            React, TypeScript, Node (Express), GraphQL (Apollo), PostgreSQL,
            Docker
          </p>
          <p>
            <b>Contribution: </b>
            Built a web platform that digitizes the paramedic workflow to
            support patient triaging and real-time updates during mass casualty
            events
          </p>
          <hr />
          <p>
            <b>Social Development Centre Waterloo Region (SDC) </b>
          </p>
          <p>
            <b>Role: </b>
            Project Developer
          </p>
          <p>
            <b>Duration: </b>
            January to April 2020
          </p>
          <p>
            <b>Technologies: </b>
            React, TypeScript, Ruby on Rails, Docker
          </p>
          <p>
            <b>Contribution: </b>
            Developed a web app that improves the accessibility of social
            services for 1000+ Waterloo residents through interactive flowcharts
          </p>
          <p>
            View the web app on{' '}
            <HyperLink
              link="https://guarded-plains-51025.herokuapp.com/"
              text="Heroku"
            />{' '}
            .
          </p>
          <PhotoWrapper img="uwblueprint3.png" />
          <PhotoWrapper img="uwblueprint4.png" />
          <PhotoWrapper img="uwblueprint5.png" />
        </Fade>
        <FooterLink
          path="/work/applyboard"
          title="Up Next"
          subtitle="ApplyBoard"
        />
      </div>
    </div>
  );
};

export default UWBlueprint;
