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


const projectImgs = [
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
    src: typeAhead,
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