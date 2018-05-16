import stylesheet from 'styles/index.scss';

const TeamSlide = () => {
  return (
    <div className="row body-row team-slide" itemScope itemType="http://schema.org/ItemList">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

         <div id="multi-item" className="carousel slide carousel-multi-item" data-ride="carousel" data-interval="10000">

    <div className="controls-top" itemScope itemType="http://schema.org/Action">
        <a className="btn-floating" href="#multi-item" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
        <a className="btn-floating" href="#multi-item" data-slide="next"><i className="fa fa-chevron-right"></i></a>
    </div>

    <ol className="carousel-indicators" itemScope itemType="http://schema.org/Action">
        <li data-target="#multi-item" data-slide-to="0" className="active"></li>
        <li data-target="#multi-item" data-slide-to="1"></li>
        <li data-target="#multi-item" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">

            <div className="col-md-4">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/ryan.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Ryan Petersen</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">founder / ceo</h5>
                    <p className="card-text" itemProp="description">Ryan brings new ideas and ambitious thoughts to life. He is our never-ending source of inspiration
                    and gets the job done. He understands how to run a successful business and brings a wide range of
                    business acumen to the table. He has a true sense of the global market which allows him to skillfully
                    connect the dots.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/chrisJ.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Chris Johnsen</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">coo / gc</h5>
                    <p className="card-text" itemProp="description">Chris’s dual approach to solving the toughest business problems is unrivaled. You can count on
                    him to challenge all angles of any obstacle he comes across. His bold approach to problem-solving is one that our
                    clients appreciate. And his thought-driven leadership is one that our team aspires to model each day.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/miguel.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Miguel Nogueras</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">exec. creative director</h5>
                    <p className="card-text" itemProp="description">Miguel has helped shape the ad industry for more than 25 years.
                    He’s seen it all. He keeps our team strategic and forward-thinking and is steadfast
                    in his pursuit of excellence and innovation through communication. Miguel never
                    fails to capture the human connection with his unique storytelling approach.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="carousel-item">

            <div className="col-md-4">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/shaina.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Sha&iacute;na Huntsberry</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">sr. copywriter</h5>
                    <p className="card-text" itemProp="description">Sha&iacute;na writes stories you want to share and headlines you want to embody.
                    She empowers brands with profound narratives that inspire the masses to action. She speaks every
                    language of the brands we work with and uses that language to activate success.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/hillary.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Hillary Hallinan</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">project manager</h5>
                    <p className="card-text" itemProp="description">Hillary brings to the team an impressive background in fashion and retail management.
                    She’s a master at delivering big projects for big clients and has a meticulous eye for detail. Her innate
                    ability to see the big picture is proven everyday through her multigenerational approach to marketing.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/chrisf.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Chris Firnkoess</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">art director</h5>
                    <p className="card-text" itemProp="description">Chris turns beautiful art into strategic design. His years in the marketing industry have groomed
                    him to become one of the most talented creatives in advertising. His fresh perspective on design makes him an invaluable
                    asset to our team, and to our clients.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="carousel-item">

            <div className="col-md-4">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/leonela.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Leonela Guzm&aacute;n</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">full stack developer</h5>
                    <p className="card-text" itemProp="description">Leonela is a scientist and artist of the next-generation digital experience. She always stays
                    ahead of the latest technology and knows how to create a truly captivating user journey. Her approach to digital
                    communication always leads us toward the best path to innovation and creativity.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/forrest.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Forrest McBride</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">producer</h5>
                    <p className="card-text" itemProp="description">Forrest is a video production genius. He has worked on major movies and television series
                    and knows how to articulate narratives through stunning visuals. His work will transport you into an awe-inspiring
                    visual experience.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2" itemScope>
                    <img className="img-fluid" src="/static/team/kristian.png" alt="amagazi team" itemType="http://schema.org/ImageObject"/>
                    <div className="card-body">
                    <h4 className="card-title" itemType="http://schema.org/Person">Kristian Valent&iacute;n</h4>
                    <h5 className="card-title" itemType="http://schema.org/EmployeeRole">jr. account executive</h5>
                    <p className="card-text" itemProp="description">Krist&iacute;an is our client management rock star. He has the impressive ability
                    to seamlessly create the intersection of business strategy and business success. His extensive background organizing major PR events in New York City has proven beneficial
                    in his approach to the business landscape and has furthered his capacity to mobilize the perfect opportunities with the right timing for all of our clients.</p>
                    </div>
                </div>
            </div>

                </div>
            </div>
        </div>
    </div>
  )
};

export default TeamSlide;
