import stylesheet from 'styles/index.scss'

const Nav = () => {
  return (
    <div itemScope itemType="http://schema.org/WPHeader">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="/">amagazi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-stretch" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" itemScope itemType="http://schema.org/SiteNavigationElement">
              <a className="nav-link" href="/services">services</a>
            </li>
            <li className="nav-item" itemScope itemType="http://schema.org/SiteNavigationElement">
              <a className="nav-link" href="/about">about</a>
            </li>
            <li className="nav-item" itemScope itemType="http://schema.org/SiteNavigationElement">
              <a className="nav-link" href="/work">work</a>
            </li>
            <li className="nav-item" itemScope itemType="http://schema.org/SiteNavigationElement">
              <a className="nav-link" href="https://medium.com/@amagazi" rel="noopener noreferrer" target="_blank" itemScope itemType="http://schema.org/Blog">the scoop</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
