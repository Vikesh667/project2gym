import React from "react";

// import image1 from '../../assets/img1.jpg';
// import image2 from '../../assets/images/clean-design.jpg';
// import image3 from '../../assets/images/great-support.jpg';
// import image4 from '../../assets/images/easy-customise.jpg';
// import image5 from '../../assets/images/unlimited-features.jpg';
// import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div style={{color:'red', backgroundColor:'black'}} className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Variety of Training. High-Quality Exercise Equipment. </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              // cover={<img alt="Modern Design" src={image1} />}
              cover = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/330px-Ludovic_and_Lauren_%288425515069%29.jpg" class="d-block w-100" alt="..."/>
            >
              <Meta title="Thriving Community." />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
               cover= <img alt="Test" src="https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/1595964580/DSC_2453-800.jpg?VersionId=.Bddkyyzmv8cZ9ky4MltKZfHiiVmFq_d"></img>
            >
              <Meta title="Well-Designed Space and Facility" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src="https://www.theglobeandmail.com/resizer/SVMd30ZlepeiprEQYovdtSN1aec=/1200x0/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/tgam/RV7HT2OT6FEO7INUBJH7F3UXWU.jpg" />}
            >
              <Meta title="Member Amenities and Privileges." />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src="https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2019/03/tonal.jpg" />}
            >
              <Meta title="Digital Fitness Platform" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src="https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/ISSA_956x537_resourcebeat.jpg?VersionId=Ripun8trizwE_XB_LF52KtAmF1ucbHOv"/>}
            >
              <Meta title="Personal Training Services." />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src="https://media.istockphoto.com/id/664962460/photo/happy-couple-enjoying-the-sauna-together.jpg?s=612x612&w=0&k=20&c=6nHoUe23NPXFpKdHYBQLnNjzv9W7UuNj8HTx7RJ9hiI=" />}
            >
              <Meta title="Steam, Sauna, and Spa Facilities." />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
