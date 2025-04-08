import React from "react";
import mocknew1 from '../assets/images/mocknew1.png';
import mock02 from '../assets/images/mocknew02.png';
import mock03 from '../assets/images/mocknew03.png';
import mock04 from '../assets/images/copy04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://dislmcgill.github.io/pandas-query-generator/" target="_blank" rel="noreferrer"><img src={mocknew1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dislmcgill.github.io/pandas-query-generator/" target="_blank" rel="noreferrer"><h2>Synthetic Pandas Query Generator 🐼</h2></a>
                <p>Led a development team to design and implement a synthetic query generator tool, automating data generation processes and achieving an 80\% increase in efficiency by using Python and Pandas</p>
            </div>
            <div className="project">
                <a href="https://www.loom.com/share/9f4d752581e74058bd995e7638810d1a" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.loom.com/share/9f4d752581e74058bd995e7638810d1a" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.overleaf.com/read/whxhrqpfjjqh#7d4eee" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.overleaf.com/read/whxhrqpfjjqh#7d4eee" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;