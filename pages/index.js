import React from 'react'
import Head from 'next/head';

import stylesheet from 'styles/index.scss'
// or to work with plain css
// import stylesheet from 'styles/index.css'
import Nav from '../components/navigation';
import Footer from '../components/footer';


const Home = () => {
  return (
    <div className="container-fluid" itemScope itemType="http://schema.org/WebPage">
      <Head>
        <title>amagazi</title>
        <meta name="description"
              content="A full-service creative company experienced in branding, business strategy,
              and crafting share-worthy consumer experiences. We don't walk the line, we create it."/>
        <meta name="keywords" content="creative agency, business strategy, digital advertising"/>
        <meta name="author" content="amagazi"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Nav/>
        <div className="homepage" itemScope itemType="http://schema.org/ImageObject">
          <img src='/static/homepage.gif' alt="amagazi creative agency" className="img-fluid"/>
        </div>
        <div className="homepage-mobile" itemScope itemType="http://schema.org/ImageObject">
          <img src='/static/homepage-m.gif' alt="amagazi creative agency" className="img-fluid"/>
        </div>


        <div class="footer-copyright py-3 text-center" itemScope itemType="http://schema.org/WPFooter">
          <p>© 2018 copyright |
          <a href="/privacy"> privacy </a></p>
        </div>
    </div>
  )
};

export default Home;
