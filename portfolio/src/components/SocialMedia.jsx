import { useEffect, useState } from "react";

export default function SocialMedias() {

    const [socialMedia, setSocialMedia] = useState([]);

    useEffect(() => {
      async function getSocialMedia() {
          try{
          const response = await fetch("/jsonData/socialMedia.json");
          const jsondata = await response.json();
          setSocialMedia(jsondata);
      }catch(error){ 
       console.error(error);
      }
  }
  getSocialMedia();
  }, []);
    return(
    <div className="topMargin" id="cc"> 
    <h1 className="textAlign">Contact Me</h1>  
    <div className="socialCenter">   
    <div className="socialFlex">

    {socialMedia.map((d) => (

  <div key={d.id}>
      <h2 className="textUnder"> {d.name}</h2>
      <p>Link: <a href={d.url}>{d.name}</a> </p>       
        <img src={d.photo} className="mediaPic" />
   </div>

))}        
    </div>
      </div>
      </div>                           
    );
}