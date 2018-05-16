import Link from 'next/link';
import Head from 'next/head';

import stylesheet from 'styles/index.scss';

import Nav from '../components/navigation';
import Footer from '../components/footer';

const Services = () => {
  return (
    <div className="container-fluid" itemScope itemType="http://schema.org/WebPage">
      <Head>
        <title>services | amagazi</title>
        <meta name="description" content="how we think | branding + corporate identity + UX/UI + market research"/>
        <meta name="keywords" content="creative agency, business strategy, digital advertising"/>
        <meta name="author" content="amagazi"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Nav/>

      <div className="row top-row">
        <div className="showdeck col-lg-8 order-lg-8 embed-responsive embed-responsive-16by9" itemScope itemType="http://schema.org/VideoObject">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&amp;showinfo=0" allowFullScreen title="show-deck"></iframe>
        </div>
        <div className="approach col-lg-4 order-lg-4" itemScope>
          <h1 className="title">how we think</h1>
          <h2 className="subtitles">our approach to success</h2>
          <p>We speak human in all we create and only produce work that evokes curiosity. We create the right space
            around the fundamentals which drive human behavior — touch, taste, smell, sound, and sight. We also recognize
            staying ahead in the fast lane of growth and longevity is no easy feat for most businesses — that's where our expertise comes in.
            <br/><br/>
            <a id="cta" href="mailto:hello@amagazi.com?subject=Hello, amagazi!" itemScope itemType="http://schema.org/Action">Let’s connect.</a></p>
        </div>
      </div>

      <div className="row body-row justify-content-center">
        <div className="services col-md-5 mr-md-4" itemScope itemType="http://schema.org/ItemList">
          <h1 className="title">areas we ignite</h1>
          <ul>
            <li>film + video production</li>
            <li>branding + corporate identity</li>
            <li>media planning + digital strategy</li>
            <li>consumer experience + user journey</li>
            <li>market research + analysis</li>
            <li>business strategy</li>
          </ul>
        </div>
        <div className="motto col-md-4 subsection" itemScope>
          <h1 className="title">how we roll</h1>
          <p>We set the bar high for ourselves because our moms taught us never to settle. And neither should you.
            <br/><br/>
            We make change happen.</p>
        </div>
      </div>

      <Footer/>
    </div>
  )
};

export default Services;
