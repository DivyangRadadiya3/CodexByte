import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProcesstData from "../../data/process/ProcessData.json";
import Tilty from "react-tilty";

const getProcesstData = ProcesstData;

const ProcessOne = () => {
  return (
    <div className="timeline">
      <div className="container left">
        <div className="date">15 Dec</div>
        <i className="icon fa fa-home"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">22 Oct</div>
        <i className="icon fa fa-gift"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">10 Jul</div>
        <i className="icon fa fa-user"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">18 May</div>
        <i className="icon fa fa-running"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">10 Feb</div>
        <i className="icon fa fa-cog"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">01 Jan</div>
        <i className="icon fa fa-certificate"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
    </div>
    // <div className="section section-padding bg-color-light pb--70">
    //     <SectionTitle
    //         subtitle="Process"
    //         title="Process of build website"
    //         description="Our comprehensive website strategy ensures a perfectly crafted website for your business."
    //         textAlignment=""
    //         textColor="mb--90"
    //     />
    //     <div className="container">
    //         {getProcesstData.map((data) => (
    //             <div key={data.id} className={`process-work ${(data.id % 2  === 0) ? "content-reverse" : ""}`}>
    //                 <Tilty perspective={2000}>
    //                     <div className="thumbnail">
    //                         <img src={process.env.PUBLIC_URL + data.thumb} alt="Thumbnail" />
    //                     </div>
    //                 </Tilty>
    //             <div className="content">
    //                 <span className="subtitle">{data.subtitle}</span>
    //                 <h3 className="title">{data.title}</h3>
    //                 <p>{data.paragraph}</p>
    //             </div>
    //         </div>
    //         ))}
    //     </div>
    //     <ul className="shape-group-17 list-unstyled">
    //         <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
    //         <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} alt="Bubble" /></li>
    //         <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
    //         <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
    //         <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
    //         <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
    //     </ul>
    // </div>
  );
};

export default ProcessOne;
