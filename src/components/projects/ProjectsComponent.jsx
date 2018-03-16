import React, { Component } from 'react';
import { Image, Dimmer, Button, Header, Transition, Reveal } from 'semantic-ui-react';

import jsClock from '../../img/projects/JSClock.png';
import cssVariables from '../../img/projects/CSSVariables.png';
import drumKit from '../../img/projects/DrumKit.png';
import flexPanel from '../../img/projects/Flex Panel.png';
import paintApp from '../../img/projects/Paint App.png';
import scroll from '../../img/projects/Scroll.png';
import shiftSelect from '../../img/projects/Shift Select Checkboxes.png';
import typeAhead from '../../img/projects/Type Ahead.png';

import colorGame from '../../img/projects/ColorGame.png';
import gamma from '../../img/projects/Gamma.png';
import metaVidz from '../../img/projects/MetaVidz.png';
import okCrime from '../../img/projects/OKCrime.png';
import pomodoro from '../../img/projects/Pomodoro.png';
import todo from '../../img/projects/Todo.png';
import trillo from '../../img/projects/Trillo.png';
import patatap from '../../img/projects/Patatap.png';


const projectImgs = [
  {
    src: trillo,
    title: 'Trillo',
    id: 'trillo',
    href: 'http://google.com',
    content: 'All-In-One responsive Travel Website built using Flexbox, SCSS, and custom css animations (Built by Maegan Womble - designed by Jonas Schmedtmann).'
  },
  {
    src: colorGame,
    title: 'Color Game',
    id: 'colorGame',
    href: 'http://google.com',
    content: "An RGB Color Game App utilizing animations and DOM manipulation for an interactive and colorful experience. Boasts two separate modes of difficulty that can be replayed endlesssly. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: gamma,
    title: 'Gamma Photo App Site',
    id: 'gamma',
    href: 'http://google.com',
    content: "A responsive web design built for a fictional photo app utilizing the Bootstrap framework. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: metaVidz,
    title: 'MetaVidz',
    id: 'metaVidz',
    href: 'http://google.com',
    content: "A working Youtube search engine with a simple and clean interface. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: jsClock,
    title: 'JS Clock',
    id: 'jsClock',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: cssVariables,
    title: 'CSS Variables Manipulation',
    id: 'cssVariables',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: drumKit,
    title: 'Drum Kit',
    id: 'drumKit',
    href: 'http://google.com',
    content: 'Hello.'
  },
  {
    src: flexPanel,
    title: 'Flex Panel Display',
    id: 'flexPanel',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: paintApp,
    title: 'Canvas Paint App',
    id: 'paintApp',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: scroll,
    title: 'Image Slide in on Scroll',
    id: 'scroll',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: shiftSelect,
    title: 'Select with Shift',
    id: 'shiftSelect',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: patatap,
    title: 'Patatap Clone',
    id: 'patatap',
    href: 'http://google.com',
    content: "A light and fun patatap clone inspired by the original Patatap app. Functions, sounds, and animations are tied to keyboard keys to create a fun interactive experience. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  },
  {
    src: typeAhead,
    title: 'Type Ahead Pokedex Search',
    id: 'typeAhead',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: pomodoro,
    title: 'Pomodoro Timer',
    id: 'pomodoro',
    href: 'http://google.com',
    content: 'A clean design work-flow timer based off of the famous "Pomodoro Technique" with adjustable session and break lengths. Keeps track of number of completed sessions. Employs stop and pause throughout sessions with a simple click of the mouse.'
  },
  {
    src: okCrime,
    title: 'OK Crime',
    id: 'okCrime',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: todo,
    title: 'Todos App',
    id: 'todo',
    href: 'http://google.com',
    content: "A productivity app for the everyday. Add and delete items at will or cross off already completed activities. Completed as an assignment for Colt Steele's The Complete Web Developer Bootcamp Online Course."
  }
];


// export default class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: '',
//     };
//   }

//   render() {
//     const imgBlocks = projectImgs.map((project) => (
//       <div className="projects_block">
//         {(this.state.active === project.id) ?
//         (
//           <div
//             className={`projects_mask projects_mask_${project.id}`}
//             onMouseLeave={() => this.setState({ active: '' })}
//             href={project.href}
//             target='_blank'
//             >
//             <h3>
//               {project.title}
//             </h3>
//             <p>
//               {project.content}
//             </p>
//             <button className="projects_mask_button">See More</button>
//           </div>
//         )
//         : (
//           <img
//             onMouseEnter={() => this.setState({ active: project.id })}
//             className="projects_img"
//             src={project.src}
//           />
//         )}
//       </div>
//     ));

//     return (
//       <div className="projects">
//         {imgBlocks}
//       </div>
//     );
//   }
// }


export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  render() {

    const imgBlocks = projectImgs.map((project) => {
      const visible = (this.state.active === project.id);
      const hidden = !visible;

      return (
        <div>
      <Reveal animated='fade' className="projects_block">
          <Reveal.Content fluid className="projects_visible" visible>
            {/* <div className="projects_visible"> */}
              <Image
                onMouseEnter={() => this.setState({ active: project.id })}
                className="projects_img"
                src={project.src}
              />
            {/* </div> */}
          </Reveal.Content>
          <Reveal.Content
            className={`projects_mask projects_mask_${project.id}`}
            onMouseLeave={() => this.setState({ active: '' })}
            href={project.href}
            target='_blank'
            hidden
            >
            <h3>
              {project.title}
            </h3>
            <p>
              {project.content}
            </p>
            <button className="projects_mask_button">See More</button>
          </Reveal.Content>
      </Reveal>
      </div>
      )
    });

    return (
      <div className="projects">
        {imgBlocks}
      </div>
    );
  }
}
