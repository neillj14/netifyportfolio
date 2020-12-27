import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jamie Neill | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio for Game and Web developer, Jamie Neill', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'Get to know me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a final year Computer Games Development student at Ulster University in Northern Ireland, I have completed a year of industrial placement at the Northern Ireland Civil Service working on the service desk, digitisation of physical forms via MVC web apps and Hardware management and maintenance for Department for the Economy.',
  paragraphTwo: 'My final year project is a Virtual Reality exercise game that will allow physical therapists to assign work out regimes to a user remotely and monitor their progress via a dashboard, reducing the amount of in-person appointments and allowing the dashboard to detect patterns of decline and schedule checkups dynamically.',
  paragraphThree: 'After graduation I wish to gain employment working in the Games or Software Development industry, as well as grow my Twitch community to be involved in the development of my games',
  resume: 'https://jamieneill.co.uk/files/cv.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kyle.jpg',
    title: 'Benevolent Sabotage',
    info: "A thrid-person action-stealth game where the player must decide who's side they're on",
    info2: "With humanity's reliance on the machine becoming ever greater, one robot must save the world, or will they send it to it's maker?\nThis was a university project that's uninished and just a proof of concept",
    url: 'https://drive.google.com/file/d/1FWo8i3yCjyvi8NOiFVNXx8hqCfwfa5ND/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'taptav.png',
    title: 'Tap Tavern',
    info: 'A university group project where the brief entailed pitching the idea for a game and then developing a prototype.',
    info2: 'The aim of this assignment is to show students that overscoping is very possible and how best to be realistic, a hard truth that we learned as many of the features we thought we would implement were either too hard to do with our limitied experience or too time consuming, on top of this a member of our group injured themselves, putting us at a disadvantage in terms of hands on deck to program the game and deliver the vision.',
    url: 'https://drive.google.com/file/d/1iZcHDD9zzhfaBCLt5eJo_rxqxCBLzB38/view',
    repo: 'https://github.com/neillj14/Tap-Tavern', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'UU Calendar',
    info: 'A Group University Project where the group was tasked with writing a C++ calendar app',
    info2: '',
    url: 'https://github.com/neillj14/C-Console-Calendar-App',
    repo: 'https://github.com/neillj14/C-Console-Calendar-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in Touch',
  btn: '',
  email: 'jamie@jamieneill.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'http://twitter.com/twitchjimbaub',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamie-neill',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/neillj14',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
