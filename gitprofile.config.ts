// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Yami98', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Yami98/Kuhaku', 'YYami98/osu-web', 'Yami98/osu-wiki'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Kuhaku Discord Bot',
          description:
            'A custom-built bot developed using the native Node.js module, integrating with the osu! API for retrieving game data and MongoDB as the database solution. ',
          imageUrl:
            'https://cdn.discordapp.com/avatars/1040658705978499072/3bd3b2b0c4fe710c8e6ab6ea392b9317.webp',
          link: 'https://github.com/Yami98/Kuhaku',
        },
        {
          title: 'Web Base Application for Almadina Company',
          description:
            'A web application developed for Almadina Company, built using the Laravel framework and powered by a MySQL database. This application provides a reliable and efficient solution tailored to meet the company operational needs.',
          imageUrl:
            'https://drive.google.com/u/0/drive-viewer/AKGpihb2Paf0YqnXb2zFK2kDqLBZGGYQWsFct2DQ9Nekfcz9tg7GHeRlMOnDue2T6yl15ucDH7PFxwTC-kztOFwpsUOTCwToDjnl1fo=s1600-rw-v1',
          link: '',
        },
        {
          title: 'Kuhaku Web',
          description:
            'A web application developed for Almadina Company, built using the Laravel framework and powered by a MySQL database. This application provides a reliable and efficient solution tailored to meet the company operational needs.',
          imageUrl:
            'https://media.discordapp.net/attachments/548675026191253536/1048503100417249341/Long_Kuhaku.png?ex=6759411b&is=6757ef9b&hm=ac8d6aadaa6f40dd5f140dbdf877b36b3113556e4faf99d796a570462bae3fcb&=&format=webp&quality=lossless&width=1195&height=434',
          link: '',
        },
        {
          title: 'Tanoshinde Mini Tournament (TMT) Website',
          description:
            'A web application developed for TMT Web, utilizing the Laravel framework and MySQL database to ensure seamless performance and robust data management. The application integrates the osu! API to provide dynamic osu! features and includes a custom-built referee system with real-time match monitoring and live chat functionality, enhancing the user experience for competitive gameplay.',
          imageUrl:
            'https://i.ppy.sh/ddc859e725aaa96e274e0650f9ede6a8a2bbd3af/68747470733a2f2f696d6775722d617263686976652e7070792e73682f646973636f72642f3837383232383035313139303737313733322d313132343332343736383131323435353731302d486f73742e706e67',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ahyana Ilham Wibisono',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ahyana-ilham-wibisono',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'cookie.kouma',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ahyanailhamwibisono@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Node.js',
    'Mongodb',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
  ],
  experiences: [
    {
      company: 'PT. Almadina Cahaya Iman',
      position: 'Director',
      from: 'September 2022',
      to: 'August 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Universitas Muhammadiyah Surakarta',
      degree: 'Bachelor of Computer Science ',
      from: '2017',
      to: '2022',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: '', // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
     // 'light',
     // 'dark',
      'cupcake',
     // 'bumblebee',
     // 'emerald',
     // 'corporate',
     // 'synthwave',
     // 'retro',
     // 'cyberpunk',
     // 'valentine',
     // 'halloween',
      //'garden',
     // 'forest',
     // 'aqua',
     // 'lofi',
     // 'pastel',
     // 'fantasy',
     // 'wireframe',
     // 'black',
     // 'luxury',
     // 'dracula',
     // 'cmyk',
     // 'autumn',
    //  'business',
     // 'acid',
    //  'lemonade',
    //  'night',
    //  'coffee',
    //  'winter',
    //  'dim',
    //  'nord',
    //  'sunset',
    //  'procyon',
   ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
