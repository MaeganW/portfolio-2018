import React from 'react';
import { Image } from 'semantic-ui-react';

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
    href: 'http://google.com'
  },
  {
    src: colorGame,
    href: 'http://google.com'
  },
  {
    src: gamma,
    href: 'http://google.com'
  },
  {
    src: metaVidz,
    href: 'http://google.com'
  },
  {
    src: jsClock,
    href: 'http://google.com'
  },
  {
    src: cssVariables,
    href: 'http://google.com'
  },
  {
    src: drumKit,
    href: 'http://google.com'
  },
  {
    src: flexPanel,
    href: 'http://google.com'
  },
  {
    src: paintApp,
    href: 'http://google.com'
  },
  {
    src: scroll,
    href: 'http://google.com'
  },
  {
    src: shiftSelect,
    href: 'http://google.com'
  },
  {
    src: patatap,
    href: 'http://google.com'
  },
  {
    src: typeAhead,
    href: 'http://google.com'
  },
  {
    src: pomodoro,
    href: 'http://google.com'
  },
  {
    src: okCrime,
    href: 'http://google.com'
  },
  {
    src: todo,
    href: 'http://google.com'
  }
];

const imgBlocks = projectImgs.map((img) => (
  <Image
    src={img.src}
    as='a'
    href={img.href}
    target='_blank'
    fluid='true'
  />
));

const Projects = () => (
  <div className="projects">
    {imgBlocks}
  </div>
);

export default Projects;