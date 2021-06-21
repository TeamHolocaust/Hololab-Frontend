//Home Page
import './HomeStyles.css';
import Heart from '../Images/human-heart.png'
import {removeID} from "../JavaScript/Scripts";
export function Home() {
    return(
        <>
           <section className="home" onLoad={removeID}>
               <div className="flex-cont">
                   <div className="flex-child home-glass">
                       <div className="hero-content">
                               <h1>Hololab</h1>
                           <div className="breakdown">
                               <h2>Fast and secure platform made for</h2>
                               <h2 className="grad-h2">your health</h2>
                               <h2>because we care</h2>
                               <p className="intro-text">A machine learning project, blah blah blah,
                               add some text here, LR people do your thing here</p>
                               <div className="button-breakout">
                                   <CusButton/>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="flex-child side">
                       <div className="image-box">
                           <img className="heart-image" src={Heart} alt="Hololab Heart"/>
                       </div>
                   </div>
               </div>
           </section>
        </>
    );
}


function CusButton(){
    return(
        <a href="/">
            <button className="custom-button gradient">Sign in</button>
        </a>
    )
}
