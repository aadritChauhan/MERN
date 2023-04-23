import { useEffect, useState } from "react";


export default function Skills() {
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        async function getSkill() {
            try{
            const response = await fetch("/jsonData/skills.json");
            const jsondata = await response.json();
            setSkill(jsondata);
        }catch(error){ 
         console.error(error);
        }
    }
    getSkill();
    }, []);

   
    return(
        <div className="topMargin" id="skil">
            <h1 className="textAlign">My Skills</h1>
            <div className="skillBorder">
                {skill.map((d) => (
   
                <div className="skillSize" key={d.id}>
                     <h2 className="textUnder">{d.name}</h2>
                     <p >{d.percent}</p>
                    <div style={{backgroundColor:"grey"}}>
                     <div style={{backgroundColor: "blue", height: "20px", width:d.percent}}></div>
                     </div>
                     </div>
                        ))}   
                    </div>
                   </div>                  
    );
}
