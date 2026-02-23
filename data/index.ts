export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experience', link: '#Experience' },
  { name: 'Contact', link: '#contact' },
  { name: 'Skills', link: '#skills' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: ' justify-end md:justify-start',
    img: '/client.png',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a Full Stack Application',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'GFL - Global Foundation for Learning',
    des: 'A non-profit educational platform empowering students worldwide with essential skills in communication, critical thinking, and comprehensive learning development.',
    img: '/project-pics/GFL.png',
    iconLists: [
      '/projects-icons/go.svg',
      '/projects-icons/cup.svg',
      '/projects-icons/ed.svg',
      '/projects-icons/book.svg',
      '/projects-icons/reward.svg',
    ],
    link: 'https://gurukulamforlife.org',
  },
  {
    id: 2,
    title: 'TRIX OS – Custom Linux Operating System',
    des: 'Lightweight, minimal operating system built on the Debian Linux kernel, designed for speed, stability, and efficient resource usage.',
    img: '/project-pics/MiniOs.jpg',
    iconLists: [
      '/projects-icons/linux.svg',
      '/projects-icons/debian.svg',
      '/projects-icons/git.svg',
      '/projects-icons/server.svg',
    ],
    link: 'https://www.fedoraproject.org/workstation/download/',
  },
  {
    id: 3,
    title: 'Currently viewing - Minimalize modern portfolio',
    des: 'Crafting modern digital experiences using Next.js, Tailwind CSS, and Aceternity UI.',
    img: '/project-pics/portfolio.png',
    iconLists: [
      '/re.svg',
      'next.svg',
      'js.svg',
      '/ts.svg',
      '/tail.svg',
      '/three.svg',
    ],
    link: 'https://portfolio-v2-one-self.vercel.app',
  },
  {
    id: 4,
    title: 'Portfolio-v1',
    des: 'Developed my first portfolio using HTML, CSS, and JavaScript, following clean structure and logical coding practices.',
    img: '/project-pics/pV1.png',
    iconLists: ['html.svg', 'css.svg', '/js.svg', '/projects-icons/git.svg'],
    link: 'https://ak003x.github.io/Portfolio',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'React.js',
    img: '/react .svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'Next.js',
    img: '/next.svg',
  },
  {
    id: 3,
    name: 'Node.js',
    img: '/node.svg',
  },
  {
    id: 4,
    name: 'aceternity UI',
    img: '/acui.png',
  },
  {
    id: 5,
    name: 'MongoDB',
    img: '/mdb.svg',
  },
  {
    id: 6,
    name: 'Java',
    img: '/java.svg',
  },
  {
    id: 7,
    name: 'Rest Api',
    img: '/rest.svg',
  },
  {
    id: 8,
    name: 'Tailwind css',
    img: '/tailwind.svg',
  },
  {
    id: 9,
    name: 'MySql',
    img: '/mySql.svg',
  },
  {
    id: 10,
    name: 'JavaScript',
    img: '/js.svg',
  },
  {
    id: 11,
    name: 'Typescript',
    img: '/typescript.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Contributed to the development of a scalable web application using React.js and modern UI practices, improving user experience, performance, and overall interface responsiveness.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Open Source Developer',
    desc: 'Actively contributed to open-source projects by developing new features, fixing bugs, improving documentation, and collaborating with global contributors through Git and GitHub workflows.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Software Developer',
    desc: 'Delivered custom web and mobile applications for clients, transforming business requirements into scalable, production-ready solutions using modern development technologies.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    desc: 'Developed and maintained interactive, user-centric web interfaces using modern frontend technologies, emphasizing performance, scalability, and clean code standards.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git1.svg',
    link: 'https://github.com/Ak003x',
    color: '#ffffff',
  },
  {
    id: 2,
    img: '/mail.svg',
    link: 'mailto:aakash.velu.003@gmail.com',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/akash003/',
    color: '#0A66C2',
  },
];
