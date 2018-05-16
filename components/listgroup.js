import stylesheet from 'styles/index.scss';

const ListGroup = () => {
  return (
    <div className="case-group" itemScope itemType="http://schema.org/ItemList">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <div class="col-md-4">
        <div class="list-group" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-cpg-list" data-toggle="list" href="#list-cpg" role="tab" aria-controls="cpg">cpg</a>
          <a class="list-group-item list-group-item-action" id="list-con-list" data-toggle="list" href="#list-con" role="tab" aria-controls="con">construction</a>
          <a class="list-group-item list-group-item-action" id="list-law-list" data-toggle="list" href="#list-law" role="tab" aria-controls="law">law</a>
          <a class="list-group-item list-group-item-action" id="list-edu-list" data-toggle="list" href="#list-edu" role="tab" aria-controls="edu">education</a>
          <a class="list-group-item list-group-item-action" id="list-fin-list" data-toggle="list" href="#list-fin" role="tab" aria-controls="fin">financial</a>
          <a class="list-group-item list-group-item-action" id="list-health-list" data-toggle="list" href="#list-health" role="tab" aria-controls="health">healthcare</a>
          <a class="list-group-item list-group-item-action" id="list-hosp-list" data-toggle="list" href="#list-hosp" role="tab" aria-controls="hosp">hospitality</a>
        </div>
      </div>
      <div class="col-md-8 case-studies">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-cpg" role="tabpanel" aria-labelledby="list-cpg-list" itemScope itemType="http://schema.org/Organization">
            <h3>snacktime bonding</h3>
            <h4>opportunity</h4>
              <p>Gain market share in the growing snack category and create an ownable
              and entertaining solution to reposition snacktime as a fun, cross-generational family activity.</p>
            <h4>strategy</h4>
              <p>Reworked the traditional product package graphics and typography to evolve
              the brand’s personality, expand the audience, and help create a distinct snacktime experience.</p>
            <h4>success</h4>
              <p>Positioned the brand’s core values of fun, taste, family, and excitement which rejuvenated shopper
                perception of the brand’s rich and iconic heritage. Our team utilized this concept for the rebrand
                of product line extensions in the same fashion.</p>

            <hr className="case-divider"/>

            <h3>staycation of smiles</h3>
            <h4>opportunity</h4>
              <p>Create a family-friendly and memorable way to drive product sales within the Hispanic market.</p>
            <h4>strategy</h4>
              <p>Partnered with Walmart to create an activity and product-pairing guide for family staycations.</p>
              <p>Beyond in-store sampling, shoppers received activity ideas and product suggestions (i.e. games, movies, etc.) for the family to enjoy together.</p>
            <h4>success</h4>
              <p>The event resulted in a 471% sales lift the day of the in-store demo, which significantly impacted both brand
                sales and retailer’s general sales. The brand effectively reached and connected with Hispanic moms for the first
                time at a major retail level.</p>

            <hr className="case-divider"/>

            <h3>craveable satisfaction</h3>
            <h4>opportunity</h4>
              <p>Develop and grow brand awareness for a product line launch at a major retailer.</p>
            <h4>strategy</h4>
              <p>Created a 360-degree digital engagement platform based on the overarching concept:
                <i> As craveable and satisfying as a restaurant meal</i>.</p>
            <h4>success</h4>
              <p>Secured first-time competitive brand placement in robust soup, sauces, sides category
                at major retail level, which increased shoppers’ selection for restaurant-quality dinnertime.</p>
          </div>

          <div class="tab-pane fade" id="list-con" role="tabpanel" aria-labelledby="list-con-list" itemScope itemType="http://schema.org/HomeAndConstructionBusiness">
              <h3>building business</h3>
              <h4>opportunity</h4>
                <p>Establish a high level of client trust and credibility
                within the construction industry in order to attract more RFP opportunities.</p>
              <h4>strategy</h4>
                <p>Designed a modern, informative, and user-friendly website to engage prospective clients through an interactive user-flow.</p>
                <p>Created brand messaging that emphasized notable projects, safety, and expertise.</p>
                <p>Incorporated bold and contemporary web design elements which translated beyond web.</p>
              <h4>success</h4>
                <p>This digital rebrand broke the mold within traditional category messaging and design. This new brand perception gained more consulting
                contracts and RFP wins for the company.</p>
          </div>

          <div class="tab-pane fade" id="list-law" role="tabpanel" aria-labelledby="list-law-list" itemScope itemType="http://schema.org/LegalService">
              <h3>lucky ticket</h3>
              <h4>opportunity</h4>
                <p>Design a new logo and create a brand strategy to acquire and increase new-client traffic.</p>
              <h4>strategy</h4>
                <p>Created insight-driven, humorous brand messaging through print and OOH to elicit legal trust and guidance for new clients.</p>
              <h4>success</h4>
                <p>Increased brand awareness and created a unique messaging approach that engaged clients through relatable human insight:
                <i> Behind every traffic ticket, there’s a story that matters. A story with the power to successfully dispute what most people
                  accept—a tainted driving record and an increased insurance rate.</i></p>
          </div>

          <div class="tab-pane fade" id="list-edu" role="tabpanel" aria-labelledby="list-edu-list" itemScope itemType="http://schema.org/EducationalOrganization">
              <h3>class above the rest</h3>
              <h4>opportunity</h4>
                <p>Increase brand awareness, student enrollment, and donor contribution.</p>
              <h4>strategy</h4>
                <p>Implemented a digital campaign across social media platforms to maximize reach within target audience.</p>
                <p>Positioned the school as an exclusive and elite educational institution to resonate with parents’ motivation for enrollment.</p>
              <h4>success</h4>
                <p>Increased parent/student enrollment leads and campaign engagement due to stats-based messaging: 100% of our graduates are accepted
                to the private high school of their choice.</p>
          </div>

          <div class="tab-pane fade" id="list-fin" role="tabpanel" aria-labelledby="list-fin-list" itemScope itemType="http://schema.org/FinancialService">
            <h3>coming soon</h3>
          </div>

          <div class="tab-pane fade" id="list-health" role="tabpanel" aria-labelledby="list-health-list" itemScope itemType="http://schema.org/MedicalOrganization">
            <h3>coming soon</h3>
          </div>

          <div class="tab-pane fade" id="list-hosp" role="tabpanel" aria-labelledby="list-hosp-list" itemScope itemType="http://schema.org/LodgingBusiness">
            <h3>coming soon</h3>
          </div>
        </div>
      </div>
  </div>

  )
};

export default ListGroup;
