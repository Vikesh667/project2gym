import { Button } from "antd";
import { Carousel } from "antd";
// import Link from "antd/es/typography/Link";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const items = [
  {
    key: "1",
    title: "Fitness",
    content:
      "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.",
  },
  {
    key: "2",
    title: "Wellness",
    content:
      "If you want something you've never had, you must be willing to do something you've never done.Once you are exercising regularly, the hardest thing is to stop it.” “If you don't make time for exercise, you'll probably have to make time for illness.",
  },
  {
    key: "3",
    title: "Yoga",
    content:
      "Two general theories exist on the origins of yoga. The linear model holds that yoga originated in the Vedic period, as reflected in the Vedic textual corpus, and influenced Buddhism; according to author Edward Fitzpatrick Crangle, this model is mainly supported by Hindu scholars. According to the synthesis model, yoga is a synthesis of non-Vedic and Vedic elements; this model is favoured in Western scholarship.",
  },
];

function AppHero() {
  // const ref = useRef()
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay  >
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h1>{item.title}</h1>
                <h5>{item.content}</h5>
                <div className="btnHolder">
                 <Link to='/SignUp'><Button type="primary" danger>
                    Join Us
                  </Button></Link> 
                </div>
              </div>
              {/* <button style={{color:'blue'}} onClick={()=>{
                  ref.current.next();
              }}>Next</button>
                <button onClick={()=>{
                  ref.current.prev();
              }}>prev</button> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
