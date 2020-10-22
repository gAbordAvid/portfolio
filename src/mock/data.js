import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Winnie',
  subtitle: 'I am a frontend developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Hi, my name is Gábor Dávid and I am a frontend developer.',
  paragraphTwo: 'I was born in 1991, Budapest, Hungary. I was always passionate about coding and solving problems. I am really greatful to work what I love.',
  paragraphThree: 'If you want to know more about me, just click the button below.',
  paragraphFour:'👇',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'weather.jpg',
    title: 'Weather App',
    info: 'Simple weather application. You can search for cities from the whole world and see how the weather is going on there.',
    info2: 'Written in HTML, CSS, Vanilla Javascript',
    url: 'https://github.com/gAbordAvid/weatherapp',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'responsive.jpg',
    title: 'Resposive website',
    info: 'Minimalist design, responsive layout, perfect landing page.',
    info2: 'Only HTML and CSS',
    url: 'https://github.com/gAbordAvid/TindogProject',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drumkit.jpg',
    title: 'Drumkit',
    info: 'Get a little music into your life! Try my drumkit for free!',
    info2: 'Written in HTML, CSS and Vanilla Javascript',
    url: 'https://github.com/gAbordAvid/drumkit',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mailto:example@email.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/davidgabor91',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/winnetou911',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/g%C3%A1bor-d%C3%A1vid-81b73317b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gAbordAvid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
