import style from './HomeModules/Training.module.css';
import { Carousel } from 'react-carousel-minimal';
import TrainingSection from './TrainingSection';

import React from 'react'

function Training() {
  const data = [
    {
      image: "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
      caption: "Fitness"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
      caption: "Muscles"
    },
    {
      image: "https://img.freepik.com/free-photo/woman-doing-squats-smith-machine_7502-9063.jpg?w=2000",
      caption: "strength"
    },
    {
      image: "https://www.houstonmethodist.org/-/media/images/contenthub/article-images/exercise/hub_returningtogym_social.jpg?mw=1382&hash=97EB215B1441E3587D4691DE4D99E1F4",
      caption: "Body Building"
    },
    {
      image: "https://goldsgym.in/uploads/blog/compress-strong-man-training-gym-min.jpg",
      caption: "Aerobic"
    },
    {
      image: "https://images.news18.com/ibnkhabar/uploads/2022/09/gym.jpg",
      caption: "Well shape"
    },
    {
      image: "https://img.etimg.com/thumb/msid-92110083,width-1200,height-900,imgsize-79822,overlay-etpanache/photo.jpg",
      caption: "Yoga"
    },
    {
      image: "https://images.indianexpress.com/2020/01/tips-for-gym-beginners_759.jpg",
      caption: "Teamwork"
    },
    {
      image: "https://static.toiimg.com/photo/89118651.cms",
      caption: "Flexibility"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
   <>
    < TrainingSection />
     <div className={style.container}>
      <div style={{ textAlign: "center" }}>
        <h2 id="Training">Training Program </h2>
        <p>Solo he estado aprendiendo español por casi tres años, y mira! Mi español ya es más o menos bueno.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
   
   </>
  )
}

export default Training
