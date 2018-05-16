import React from 'react'
import Head from 'next/head';

import stylesheet from 'styles/index.scss';

import Nav from '../components/navigation';
import Footer from '../components/footer';
import Team from '../components/team';
import TeamSlide from '../components/teamSlide';

const About = () => {
  return (
    <div className="container-fluid" itemScope itemType="http://schema.org/AboutPage">
      <Head>
        <title>about | amagazi</title>
        <meta name="description" content="who we are | provocateurs with purpose"/>
        <meta name="keywords" content="creative agency, business strategy, digital advertising"/>
        <meta name="author" content="amagazi"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Nav/>

      <div className="row top-row">
        <div className="showdeck col-lg-8 order-lg-8" itemScope itemType="http://schema.org/ImageObject">
          <img className="img-fluid float-right" src='/static/lobby.jpg' alt="about us" />
        </div>
        <div className="approach col-lg-4 order-lg-4" itemScope>
          <h1 className="title">who we are</h1>
          <h2 className="subtitles">provocateurs with purpose</h2>
          <p>We are brainy business experts, culture connoisseurs, and catalysts for getting what you want.
					Our expertise includes branding, business strategy, and crafting share-worthy consumer experiences.
					<br/><br/>
					<a id="cta" href="mailto:hello@amagazi.com?subject=Hello, amagazi!" itemScope itemType="http://schema.org/Action">Let’s talk.</a></p>
        </div>
      </div>

      <div className="row body-row">
        <div className="col-md-6 order-lg-1 mr-4" itemScope>
          <h1 className="title">our standard</h1>
          <h2 className="subtitles">exclusive. transparent. responsive. efficient.</h2>
          <p>We are entrepreneurs who have blazed our own trails and have gained lots of business wisdom along the way.
			Simply put, we get it. We don’t believe one size fits all. We curate our teams to custom-fit the needs of our clients.</p>
        </div>

        <div className="idea col-md-5 order-lg-2 subsection" itemScope>
          <h1 className="title">leadership</h1>
          <h2 className="subtitles">motivation through confidence and trust</h2>
          <p>We are idea-creators and problem-solvers. We are well-seasoned in our craft, and in case you’re wondering, we’ve picked up some awards along the way too.</p>
        </div>
      </div>

      <div className="row body-row">
        <div className="col-lg-12" itemScope itemType="http://schema.org/Organization">
          <h1 className="title">the team</h1>
          <h2 className="subtitles">meet the people holding our standards high</h2>
        </div>

        {/* team cards */}
        <Team/>
      </div>

      <TeamSlide/>

      <div className="row body-row">
        <div className="col-md-6 order-lg-1 mr-4" itemScope>
          <h1 className="title">culture</h1>
          <h2 className="subtitles">own it, and own it well</h2>
          <p>We are refined virtuosos. We are your James Bond, your superhero, and your unicorn. We
					prefer timeless style over temporary trends and believe in bold simplicity. We welcome unconventional ideas to solve new challenges.</p>
        </div>

        <div className="pt-xs-4 mt-xs-2 col-md-5 order-lg-2" itemScope>
          <h1 className="title">careers</h1>
          <h2 className="subtitles">where teamwork meets amazing</h2>
          <p>Connect with us at <a id="cta" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!" itemScope itemType="http://schema.org/Action">hello@amagazi.com</a></p>
        </div>
      </div>

      <Footer/>
    </div>
  )
};

export default About;
