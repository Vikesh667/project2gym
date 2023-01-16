import React, { useState } from "react";
//import { Link } from "react-router-dom";

import style from "./HomeModules/Training.module.css";
const TrainingSection = () => {
  const [isclick, setIsclick] = useState(true);

  return (
    <section id='meetourteam' style={{ backgroundColor: 'black' }} className={style.MeetOurTeamContainer}>
      {isclick?(

        <> <br />
        <div style={{ color: 'white' }}>
            <h1 style={{ textAlign: 'center', margin: 'auto', color: 'red', fontWeight: 'bold' }}>Meet Our Team</h1>
            <div>
                <br />
                <p style={{ textAlign: 'center', margin: 'auto', wordWrap: 'break-word' }}> We are a team of experienced people nutrition. Sports and fitness passionate experts with
                    talent <br /> and knowledge unsurpassed in the industry. Get to know us. </p>
                <br />
                <br />
            </div>
            <div style={{
               display:'inline-grid', justifyContent: 'center', display:'flex', width: 'auto', height: 'auto'
            }}>
                <div  >
                    <img src="https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=612x612&w=0&k=20&c=0wMa1MYxt6HHamjd66d5__XGAKbJFDFQyu9LCloRsYU=" alt="Jorden" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Amitee Loiselle</h3>
                    <p style={{ textAlign: "center" }}>Fitness Coach</p>
                </div>
                <div >
                    <img src="https://media.istockphoto.com/id/665330152/photo/fit-woman-talking-to-her-trainer.jpg?s=612x612&w=0&k=20&c=EzqDg1WnAJL0j-qHkUZYIETR1NhuzRUpiKBnm3JorT4=" alt="Jonny" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>brandon stark</h3>
                    <p style={{ textAlign: "center" }}>Crossfit Cach</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1203148800/photo/portrait-of-personal-trainer-at-the-gym.jpg?s=612x612&w=0&k=20&c=0AaQkvGJsansvfq1ov0znw2-a69CiaBlPoIEEVVG8Ns=" alt="June" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Pepper pots</h3>
                    <p style={{ textAlign: "center" }}>Crossfit Coach</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/972722822/photo/smiling-young-sportswoman-pointing-by-finger-on-schedule-on-digital-tablet-in-personal-trainer.jpg?s=612x612&w=0&k=20&c=jibXfkg-s-9Z1wdfQak-RD2j_LZ_NGL3kmuSL1QJvrY=" alt="Janny" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Ricky Wotson</h3>
                    <p style={{ textAlign: "center" }}>Body Building</p>
                </div>
            </div>
            <br />
            <button onClick={()=>{setIsclick(false)}} className={style.SeeTheWholeTeamButton}  style={{ margin: '0 auto', display: 'block', fontSize: '20px' }} >View Entire Team</button>
            <br />
            <br />
        </div>
        
         </>
      ):(
        <>


       <br />
        <div style={{ color: 'white' }}>
            <h1 style={{ textAlign: 'center', margin: 'auto', color: 'red', fontWeight: 'bold' }}>Meet Our Team</h1>
            <div>
                <br />
                <p style={{ textAlign: 'center', margin: 'auto', wordWrap: 'break-word' }}> We are a team of experienced people nutrition. Sports and fitness passionate experts with
                    talent <br /> and knowledge unsurpassed in the industry. Get to know us. </p>
                <br />
                <br />
            </div>
            <div style={{
                display: 'inline-grid', justifyContent: 'center', display: 'flex', width: 'auto', height: 'auto'
            }}>
                <div  >
                    <img src="https://media.istockphoto.com/id/1072395722/photo/fitness-trainer-at-gym.jpg?s=612x612&w=0&k=20&c=3VBLCgbxG3bGNRp9Sc3tN_7G-g_DxXhGk9rhuZo-jkE=" alt="John" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>john abrahim</h3>
                    <p style={{ textAlign: "center" }}>Fitness Coach</p>
                </div>
                <div >
                    <img src="https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=" alt="yonng" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Shan chii yonng</h3>
                    <p style={{ textAlign: "center" }}>Crossfit Cach</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1257975511/photo/portrait-of-fitness-instructor-in-the-gym-after-reopening.jpg?s=612x612&w=0&k=20&c=nnpmjXufYsze3wkWwwWO2xrVyRmreQV1zopnW5rb4ww=" alt="coddy" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Coddy rodes</h3>
                    <p style={{ textAlign: "center" }}>Crossfit Coach</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1040501222/photo/portrait-of-a-personal-trainer-in-the-gym.jpg?s=612x612&w=0&k=20&c=Xdmp8LM2OCBkwtbWELRkYoQlsT9OZECtq--7gE5BPLg=" alt="Mathive mordoack " style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Ron Richardson</h3>
                    <p style={{ textAlign: "center" }}>Body Building</p>
                </div>
            </div>
            <br />
           
            
            <br />
        </div>





        
         





        <br />
        <div style={{ color: 'white' }}>
           
            <div style={{
                display: 'inline-grid', justifyContent: 'center', display: 'flex', width: 'auto', height: 'auto'
            }}>
               <div  >
                    <img src="https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=612x612&w=0&k=20&c=0wMa1MYxt6HHamjd66d5__XGAKbJFDFQyu9LCloRsYU=" alt="Jorden" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Amitee Loiselle</h3>
                    <p style={{ textAlign: "center" }}>Fitness Coach</p>
                </div>
                <div >
                    <img src="https://media.istockphoto.com/id/665330152/photo/fit-woman-talking-to-her-trainer.jpg?s=612x612&w=0&k=20&c=EzqDg1WnAJL0j-qHkUZYIETR1NhuzRUpiKBnm3JorT4=" alt="Jonny" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>brandon stark</h3>
                    <p style={{ textAlign: "center" }}>Crossfit Cach</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1203148800/photo/portrait-of-personal-trainer-at-the-gym.jpg?s=612x612&w=0&k=20&c=0AaQkvGJsansvfq1ov0znw2-a69CiaBlPoIEEVVG8Ns=" alt="June" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Pepper pots</h3>
                    <p style={{ textAlign: "center" }}>Crossfit Coach</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/972722822/photo/smiling-young-sportswoman-pointing-by-finger-on-schedule-on-digital-tablet-in-personal-trainer.jpg?s=612x612&w=0&k=20&c=jibXfkg-s-9Z1wdfQak-RD2j_LZ_NGL3kmuSL1QJvrY=" alt="Janny" style={{
                        height: 'auto', maxWidth: '100%', backgroundSize: 'contain',
                    }} />
                    <br />
                    <br />
                    <h3 style={{ textAlign: "center" }}>Ricky Wotson</h3>
                    <p style={{ textAlign: "center" }}>Body Building</p>
                </div>
            </div>
            <br />
            <button onClick={()=>{setIsclick(true)}} className={style.SeeTheWholeTeamButton}  style={{ margin: '0 auto', display: 'block', fontSize: '20px' }}>less Team</button>
            <br />
            <br />
        </div>




        
         </>
      )}

        </section>
  );
};

export default TrainingSection;


