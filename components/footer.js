import stylesheet from 'styles/index.scss'

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 mt-4" itemScope itemType="http://schema.org/WPFooter">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <div className="container-fluid text-xs-left text-md-left">
        <div className="row">

            <div className="col-md-6" itemScope itemType="http://schema.org/Brand">
                <h4><a id="cta" href="/">amagazi</a></h4>
                <p>A full-service creative company experienced in branding, business strategy,
              and crafting share-worthy consumer experiences.<br/><br/>We don't walk the line, we create it.</p>
            </div>

            <div className="col-md-4" itemScope itemType="http://schema.org/ContactPage">
                <h4>contact us</h4>
                <ul className="list-unstyled" itemScope itemType="http://schema.org/PostalAddress">
                    <li>
                      7155 old katy road, ste. s255
                    </li>
                    <li>
                      houston, tx 77024
                    </li>
                    <li>
                      <a href="tel:832-304-5500">832.304.5500</a>
                    </li>
                    <li>
                      <a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">hello@amagazi.com</a>
                    </li>
                </ul>
            </div>

            <div className="col-md-2">
                <h4>follow us</h4>
                <ul className="list-unstyled">
                    <li>
                        <a href="https://www.linkedin.com/company/amagazi/" rel="noopener noreferrer" target="_blank">linkedin</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/amagaziagency" rel="noopener noreferrer" target="_blank">twitter</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/amagazi" rel="noopener noreferrer" target="_blank">facebook</a>
                    </li>
                    <li>
                        <a href="https://www.medium.com/@amagazi" rel="noopener noreferrer" target="_blank" itemScope itemType="http://schema.org/Blog">the scoop</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright py-3 text-center" itemScope itemType="http://schema.org/WPFooter">
        <p>© 2018 copyright |
        <a href="/privacy"> privacy </a></p>
    </div>

    </footer>
  )
};

export default Footer;
