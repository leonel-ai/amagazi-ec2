import stylesheet from 'styles/index.scss';

import Logos from '../components/logos';

const Brands = () => {
  return (

<div className="brand-group" itemScope itemType="http://schema.org/ItemList">
  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <div className="container text-md-left">
        <div className="row">

            <div className="col-md-4">
                <Logos/>
            </div>

            <hr className="w-100 d-md-none" />

            <div className="col-md-2 mx-auto">

              <div className="row mx-auto justify-content-around">
                <div className="col-xs-6">
                  <ul className="list-unstyled">
                    <li>BMW</li>
                    <li>Cadbury</li>
                    <li>Direct Energy</li>
                    <li>Exxon</li>
                    <li>Campbell's</li>
                    <li>Pepperidge Farm</li>
                  </ul>
                </div>
                <div className="col-xs-6">
                  <ul className="list-unstyled">
                    <li>General Mills</li>
                    <li>Houston Rising</li>
                    <li>Fully Raw</li>
                    <li>LA Economic Development</li>
                    <li>Green Seed Vegan</li>
                    <li>Trelleborg</li>
                  </ul>
                </div>
            </div>
          </div>

          <div className="col-md-2 mx-auto">
            <div className="row mx-auto justify-content-around">
              <div className="col-xs-6">
                <ul className="list-unstyled">
                  <li>Kraft</li>
                  <li>Maxwell House</li>
                  <li>Gutier Roofing</li>
                  <li>Johnsen Law</li>
                  <li>Markowitz Law</li>
                  <li>Miller Lite</li>
                </ul>
              </div>
              <div className="col-xs-6">
                <ul className="list-unstyled">
                  <li>Mission</li>
                  <li>NRG</li>
                  <li>Quilted Northern</li>
                  <li>Monster Worldwide, Inc.</li>
                  <li>SCFD</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-2 mx-auto">
            <div className="row mx-auto justify-content-around">
              <div className="col-xs-6">
                <ul className="list-unstyled">
                  <li>Reliant Energy</li>
                  <li>Rich's Foods</li>
                  <li>Sonic</li>
                  <li>Texaco</li>
                  <li>Tyson</li>
                  <li>VW</li>
                </ul>
              </div>
              <div className="col-xs-6">
                <ul className="list-unstyled">
                  <li>Walmart</li>
                  <li>Saint Theresa Catholic School</li>
                  <li>Webb Gallery</li>
                  <li>Krewe du Optic</li>
                  <li>Old New Orleans Rum</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>

</div>

  )
};

export default Brands;
