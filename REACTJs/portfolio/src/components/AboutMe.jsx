import { useEffect, useState } from "react";

export default function AboutMe() {

    const [aboutMe, setAboutMe] = useState([]);

    useEffect(() => {
        async function getAboutMe() {
            try{
            const response = await fetch("/jsonData/aboutMe.json");
            const jsondata = await response.json();
            setAboutMe(jsondata);
        }catch(error){ 
         console.error(error);
        }
    }
    getAboutMe();
    }, []);


    return(
        <div className="topMargin" id="am">
                <h1 className="textAlign">About Me</h1>  
                <div className="aboutFlex">
                
                  
                        {aboutMe.map((d) => (
                            <div key={d.id}>
                                <h2 className="textAlign textUnder" >{d.heading}</h2>
                
                                <p className="textAlign"> {d.description} </p>
                        </div>
                        ))}   
                        
                 </div>       
        </div>
    );
}