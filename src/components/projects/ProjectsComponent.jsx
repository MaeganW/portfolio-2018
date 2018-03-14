import React, { Component } from 'react';
import { Image, Dimmer, Button, Header } from 'semantic-ui-react';

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
    id: 'trillo',
    href: 'http://google.com',
    content: 'All-In-One responsive Travel Website built using Flexbox, SCSS, and custom css animations (Built by Maegan Womble - designed by Jonas Schmedtmann).'
  },
  {
    src: colorGame,
    id: 'colorGame',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: gamma,
    id: 'gamma',
    href: 'http://google.com',
    content: "A responsive web design built for a fictional photo app utilizing the Bootstrap framework. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: metaVidz,
    id: 'metaVidz',
    href: 'http://google.com',
    content: "A working Youtube search engine with a simple and clean interface. Completed as an assignment for Eduonix's Projects in JavaScript and jQuery Online Course."
  },
  {
    src: jsClock,
    id: 'jsClock',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: cssVariables,
    id: 'cssVariables',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: drumKit,
    id: 'drumKit',
    href: 'http://google.com',
    content: 'Hello.'
  },
  {
    src: flexPanel,
    id: 'flexPanel',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: paintApp,
    id: 'paintApp',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: scroll,
    id: 'scroll',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: shiftSelect,
    id: 'shiftSelect',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: patatap,
    id: 'patatap',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: typeAhead,
    id: 'typeAhead',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: pomodoro,
    id: 'pomodoro',
    href: 'http://google.com',
    content: 'A clean design work-flow timer based off of the famous "Pomodoro Technique" with adjustable session and break lengths. Keeps track of number of completed sessions. Employs stop and pause throughout sessions with a simple click of the mouse.'
  },
  {
    src: okCrime,
    id: 'okCrime',
    href: 'http://google.com',
    content: 'Here is some content.'
  },
  {
    src: todo,
    id: 'todo',
    href: 'http://google.com',
    content: 'Here is some content.'
  }
];


export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
  }

  render() {
    const imgBlocks = projectImgs.map((project) => (
      <div className="projects_container">
        {(this.state.active === project.id) ?
        (
          <div
            className={`projects_mask projects_mask_${project.id}`}
            onMouseLeave={() => this.setState({ active: '' })}
            href={project.href}
            target='_blank'
            >
            <h3>
              {project.id}
            </h3>
            <p>
              {project.content}
            </p>
            <Button primary>Link</Button>
          </div>
        )
        : (
          <img
            onMouseEnter={() => this.setState({ active: project.id })}
            className="projects_img"
            src={project.src}
          />
        )}
      </div>
    ));

    return (
      <div className="projects">
        {imgBlocks}
      </div>
    );
  }
}
