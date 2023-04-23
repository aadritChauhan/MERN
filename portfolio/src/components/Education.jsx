import { useEffect, useState } from "react";

export default function Educations() {

    const [education, setEducation] = useState([]);

    useEffect(() => {
        async function getEducation() {
            try{
            const response = await fetch("/jsonData/education.json");
            const jsondata = await response.json();
            setEducation(jsondata);
        }catch(error){ 
         console.error(error);
        }
    }
    getEducation();
    }, []);

    return(
        
                    <div>
                           <h1 className="textAlign">My Education</h1>  
                           <div className="educationFlexOuter">
                            <div className="educationFlex">    
                        {education.map((d) => (
                               
                                <div key={d.id}>
                                    <h2 className="textAlign"> {d.name} </h2>
                        
                                    <p className="textAlign"> {d.school}  </p>
                               </div>
                        ))}   
                               
                             </div>
                           </div>
                    </div>     
             
    );
}