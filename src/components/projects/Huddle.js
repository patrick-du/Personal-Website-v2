import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic'
import Fade from 'react-reveal/Fade';

const Huddle = () => {
    return (
        <div className="container-fluid mx-auto px-0">
            <img src={require(`../../assets/huddleB.png`)} className="topProjectImage" />

            <div className="projectContainer mx-auto px-0">
                <Fade big>
                    <PostTop subtitle="Side Project" title="Huddle" previous="/work/fgfbrands" next="/work/weatherly" />
                    <p className="s-font">A modern social media application that connects NFL fans while supporting local venues.</p>
                    <p className="s-font">The primary functionalities of Huddle are to allow fans to make picks, bet, and watch live games being streamed at local venues promoted by Huddle.</p>
                    <p className="s-font">As a team, we recognized that professional sports is an enormous product that can connect individuals regardless of age, gender, or race. We wanted to utilize the product of sports by coming up with a way to quantify its fan-fueled competitive aspect while selling it for what it really is, a social excitement.</p>
                    <p className="s-font">Our brainstorming initially began with the concept of simply bringing fans together. However, we soon recognized that they don’t prioritize where they watch games, only who. This led us to the idea of promoting local venues, providing them with an opportunity to gain more customers while also helping us achieve our goal of connecting fans. </p>
                    <p className="s-font">To provide a competitive aspect to the app, we implemented a user rating system based on their pick accuracy. Thus, inclining users to continue to use Huddle in order to broadcast their ability to correctly make picks. </p>
                    <p className="s-font">This app was developed with React Native, Java (Spring), Maven, and MySQL. View the full project on <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
                    <hr />
                </Fade>
                <Fade bottom>
                    <Link to="/work/weatherly" className="linkdec">
                        <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Weatherly</p>
                        </div>
                    </Link>
                </Fade>
            </div>

        </div>
    )

}

const styles = {

}

export default Huddle;