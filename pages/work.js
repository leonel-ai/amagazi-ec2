import Link from 'next/link';
import Head from 'next/head';

import stylesheet from 'styles/index.scss';

import Nav from '../components/navigation';
import Footer from '../components/footer';
import Accordion from '../components/accordion';
import ListGroup from '../components/listgroup';
import Brands from '../components/brands';

const Work = () => {
  return (
    <div className="container-fluid" itemScope itemType="http://schema.org/WebPage">
      <Head>
        <title>work | amagazi</title>
        <meta name="description" content="for the record | industry innovation"/>
        <meta name="keywords" content="creative agency, business strategy, digital advertising"/>
        <meta name="author" content="amagazi"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Nav/>

      <div className="row top-row">
        <div className="col-lg-12 single-title">
          <h1 className="title">eye candy</h1>
        </div>
      </div>

        <div className="row videos justify-content-around">
          <div className="showdeck col-md-5 order-lg-7 embed-responsive embed-responsive-16by9" itemScope itemType="http://schema.org/VideoObject">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/uuyy212-HQQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen title="show-deck"></iframe>
          </div>
          <div className="showdeck2 col-md-5 order-lg-7 embed-responsive embed-responsive-16by9" itemScope itemType="http://schema.org/VideoObject">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen title="show-deck"></iframe>
          </div>
        </div>

      <div className="row body-row">
        <div className="showdeck col-lg-8 order-lg-8" itemScope itemType="http://schema.org/ImageObject">
          <img className="img-fluid float-right" src='/static/gutier.gif' alt="augmented reality" />
        </div>
        <div className="subsection col-lg-4 order-lg-4" itemScope>
          <h1 className="title">latest projects</h1>
          <h2 className="subtitles">innovation meets impact</h2>
          <p>This digital rebrand broke the mold within the construction category through
          non-traditional, bold, and contemporary web design. Our team also revamped Gutier’s
          brand messaging to emphasize notable projects, safety, and expertise establishing
          the company as a key player in their industry.</p>
        </div>
      </div>

      <div className="row body-row">
        <div className="col-lg-12 single-title">
          <h1 className="title">for the record</h1>
        </div>
      </div>
          <Accordion/>
          <ListGroup/>
          <Brands/>


      <Footer/>
    </div>
  )
};

export default Work;
