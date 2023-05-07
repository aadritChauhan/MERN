import { useEffect, useState } from "react";

export default function Projects() {

    const [project, setProject] = useState([]);

    useEffect(() => {
        async function getProject() {
            try{
            const response = await fetch("/jsonData/project.json");
            const jsondata = await response.json();
            setProject(jsondata);
        }catch(error){ 
         console.error(error);
        }
    }
    getProject();
    }, []);
    return(
             <><h1 className="textAlign">My Projects </h1>
             <div id="projectFlex">
             {project.map((d) => (

             <div id="project">
                    <div key={d.id} className="skillBorder" style={{marginTop:"20px"}}>
                        <h2 className="textAlign textUnder" >{d.title}</h2>
                        <div className="projectContent"><p > {d.content}</p></div>
                    <div className="projectPic">
                    <img src={d.photo} />
                    </div>
                    <div><a href={d.url}>Link to Project</a></div>
                    </div>
             </div>

                ))}
            </div></>          
    );
}