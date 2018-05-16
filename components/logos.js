import stylesheet from 'styles/index.scss';

const Logos = () => {
  return (
    <div className="logo-slider">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="carousel slide" data-ride="carousel" data-interval="70000">
        <div className="carousel-inner">
          <div className="carousel-item active" itemScope itemType="http://schema.org/ImageObject">
            <img className="img-fluid d-block w-100" src="/static/logos_01.gif" alt="First slide"/>
          </div>
          <div className="carousel-item" itemScope itemType="http://schema.org/ImageObject">
            <img className="img-fluid d-block w-100" src="/static/logos_02.gif" alt="Second slide"/>
          </div>
          <div className="carousel-item" itemScope itemType="http://schema.org/ImageObject">
            <img className="img-fluid d-block w-100" src="/static/logos_03.gif" alt="Third slide"/>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Logos;
