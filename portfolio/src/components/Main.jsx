import Educations from "./Education"
import Projects from "./Project"
import AboutMe from "./AboutMe"
import Skills from "./Skill"
import SocialMedias from "./SocialMedia"

export default function Main() {

    return(
        <main>
        <div id="mainFlex">
        <div>
            <img src="/images/main.jpg" alt=""/>
        </div>
        <div id="mainContent">
            <h1>Hello, I'm Aadrit</h1>
            <p className="heightLine">I'm a web developer currently based in toronto, My goal is to help businesses and organizations achieve their online goals through clean, modern, and user-friendly web design.As a full-stack developer, my skills include HTML, CSS, JavaScript, MERN stack, ASP.NET, SQL and I'm also experienced in using various tools such as Git Hub, Figma, PhpMyAdmin to ensure efficient workflow and quality output.</p>
        </div>
        </div>
        
        <Educations />
        <Projects />
        <Skills />
        <AboutMe />
        <SocialMedias />
       
  </main>
  
        
    )
}