import CizotiLogo from "@/public/cizoti_logo.png";
import IntegrationLogo from "@/public/integration_environment_energy_gmbh_logo.jpeg";
import SpatialnodeLogo from "@/public/spatialnode_logo.jpeg";
import RuralFarmersHubLogo from "@/public/rural_farmers_hub.png";
import UniMunsterLogo from "@/public/Logo_WWU_Munster.png";
import FUTALogo from "@/public/futa_logo.png";
import UJILogo from "@/public/UJI_logo.jpeg";
import YouthMappersLogo from "@/public/youthmappers_logo.png";
import MediumLogo from "@/public/medium_logo.webp";
import HashnodeLogo from "@/public/hashnode_logo.png";
import NigeriaSE4ALLLogo from "@/public/nigeria_se4all_logo.jpg";
import GISLoungeLogo from "@/public/gislounge_logo.jpg";
import EarthObservationImage from "@/public/projects/kc_earth_oberservation.jpg";
import NigeriaSE4ALLImage from "@/public/projects/nigeriase4all_screenshot.png";
import SpatialnodeImage from "@/public/projects/spatialnode_screenshot.png";
import LocomotiveImage from "@/public/projects/locomotive.jpeg";
import GISFestImage from "@/public/projects/gisfest.png";
import SotMImage from "@/public/projects/sotmafrica.png";
import GitHubImage from "@/public/projects/github_logo.png";
import GeospatialAnalysisWithSQLImage from "@/public/projects/geospatial_analysis_with_sql.png";
import PythonForGeospatialAnalysisImage from "@/public/projects/learning_python_for_geospatial_analysis.jpg";
import SpringerPublicationImage from "@/public/projects/springer_publication.webp";
import FOSS4GEuropeImage from "@/public/projects/foss4geurope_logo.png";
import GoogleScholarImage from "@/public/projects/google_scholar.png";
import OSMChangesetsImage from "@/public/projects/osm_changesets.png";
import { MediaCategory, ProjectCategory, ProjectTag } from "./enums";

export const APP_CONTENT = {
  header: {
    hero: {
      en: "Earth observation & geospatial software engineer.",
    },
    heroBio: {
      en: "I'm Emmanuel, a software engineer, earth observation (remote sensing) & geospatial expert and founder currently based in Germany. I'm the founder of Spatialnode, a platform that empower geospatial people to showcase their works and explore opportunities.",
    },
  },
  about: {
    hero: {
      en: "I'm Emmanuel Jolaiya. I love to build things.",
    },
    content: {
      firstBlock: `
        I am Emmanuel Jolaiya, an Earth Observation and Geospatial Software Engineer with a special interest in open source software development, innovation, community development, and capacity building.
        I am currently pursuing my Master's in Geospatial Technologies, a joint program between the University of Munster, Germany and UJI, Spain, through the prestigious Erasmus Mundus Scholarship.
      `,
      secondBlock: `My experience includes consulting for organizations such as the World Bank on the Ibadan Urban Flood Management Project, GIZ through the Nigeria Energy Support Programme. My work mostly focus on the intersection of data analysis, Web GIS, software development and automation to provide solutions to problems. My current interests are: Geospatial Algorithms, Spatial SQL, DevOps, and Web GIS.`,
      thirdBlock: `I firmly believe in the power of democratizing access to knowledge and information to foster meaningful social and intellectual development. By empowering informed minds from diverse backgrounds, we can create transformational solutions that address real-world challenges.`,
      lastBlock: `Today, I'm the founder of Spatialnode, where we're building tools and platforms to enrich the geospatial people in showcasing their works and exploring professional opportunities.`,
    },
  },
  articles: {
    hero: {
      en: "I love to learn, so I write.",
    },
    description: `All of my long and short-form thoughts on software development, programming, capacity building, community development, and more, collected in chronological order.`,
    spatialnode: {
      logo: SpatialnodeLogo,
      name: "Spatialnode",
      articles: [],
    },
    youthmappers: {
      logo: YouthMappersLogo,
      name: "YouthMappers",
      articles: [
        {
          date: "January 28, 2021",
          title: "2020 - A Year We Made Lemonade Out of Lemons",
          exceprt:
            "Certainly, the year 2020 would go down in history lane as a memorable one, as a result of several events that happened last year. Like many other people in the world, we as a group looked forward to 2020 with so many expectations and well laid out plans which we were able to execute in the first quarter...",
          link: "https://www.youthmappers.org/post/2020-a-year-we-made-lemons-out-of-lemonade",
        },
        {
          date: "December 30, 2020",
          title: "A Hot Experience with HOT",
          exceprt:
            "The past 10 weeks were an awesome learning experience as three of our community members--Akintola Mercy, Olanrewaju Michael and Ademoyero Victor were opportune to participate in the 2020 HOT Data Quality Internship program.",
          link: "https://www.youthmappers.org/post/a-hot-experience-with-hot",
        },
      ],
    },
    gisLounge: {
      logo: GISLoungeLogo,
      name: "GIS Lounge",
      articles: [
        {
          date: "July 18, 2021",
          title: "Open-Source Web-GIS Development Roadmap",
          exceprt:
            "The advent of the web has transformed everything around us and GIS is no exception. Web-GIS is the pattern or architectural approach for implementing the modern GIS.  It enables the distribution of maps and processing tools without time and location restriction to users.",
          link: "https://www.geographyrealm.com/open-source-web-gis-development-roadmap/",
        },
        {
          date: "June 22, 2021",
          title:
            "6 Open Source Powered Projects to Enrich Your GIS Programming Skills",
          exceprt:
            "Geospatial programming can be very challenging, especially for a greenhorn in the GIS or programming world. However, building hand-on projects can make it fun, as it’ll help you to gain practical development skills, build your portfolio and resume for your next job and you'll be putting your theoretical knowledge into developing great projects.",
          link: "https://www.geographyrealm.com/6-open-source-powered-projects-to-enrich-your-gis-programming-skills/",
        },
        {
          date: "May 26, 2021",
          title:
            "Mapping Our World, Saving Lives with Humanitarian OpenStreetMap Team",
          exceprt:
            "Depicting the world and its attributes via mapping has been one of the greatest tools in solving human and environmental problems. The “Mapping our World: Saving Lives” episode of the AfricaGeoConvo Podcast, examines the world of  mapping and volunteering, with Geoffrey Kateregga.",
          link: "https://www.geographyrealm.com/mapping-our-world-saving-lives-with-humanitarian-openstreetmap-team/",
        },
        {
          date: "May 4, 2021",
          title: "Securing a Funded GIS Graduate Program",
          exceprt:
            "Securing a fully funded graduate program can be a daunting task, but with the right information and strategic positioning, you too can be a scholar. In this article, we would share with you some important information you need to know about securing a graduate program.",
          link: "https://www.geographyrealm.com/securing-a-funded-gis-graduate-program/",
        },
        {
          date: "December 28, 2020",
          title: "WebGIS Section 3: Architecture",
          exceprt:
            "A picture is worth a thousand words, they say. In that light, my goal in this section is to explain the architectural workflow of a WebGIS without being verbose. It is expedient we understand that there is no de facto WebGIS architecture, workflows are dependent on their application context, however, they all rely on a three-tier client/server architecture.",
          link: "https://www.geographyrealm.com/webgis-section-3-architecture/",
        },
        {
          date: "December 6, 2020",
          title: "WebGIS Section 1 - A Quick Introduction to GIS and WebGIS",
          exceprt:
            "Welcome to the first section of this series on WebGIS with Opensauce. This section aims to give you a taste of the beauty of Geographic Information Systems(GIS) and Web GIS. At the end of this section, hopefully, you would have an understanding of these terms and be able to explain in simpler and easy-to-digest terms to your friends and coworkers.",
          link: "https://www.geographyrealm.com/section-1-a-quick-introduction-to-gis-and-webgis/",
        },
        {
          date: "December 6, 2020",
          title: "Series: WebGIS Using Open Source Tools",
          exceprt:
            "Welcome to my series on WebGIS using open source tools and technologies with the Free and Open Source Software for Geospatial Applications (FOSS4G) Stack. This 10 somewhat long-section series aims to introduce you to the beauty of WebGIS and some of the cool things you can pull off with it especially with absolutely free tech stacks.",
          link: "https://www.geographyrealm.com/series-webgis-using-open-source-tools/",
        },
        {
          date: "May 3, 2020",
          title: "Building a Model with ArcGIS ModelBuilder Saves Time",
          exceprt:
            "In the previous article in this series, Emmanuel Jolaiya provided an introduction to ArcGIS ModelBuilder. In this article, he will be showing users how to use ArcGIS ModelBuilder to develop a model for for analyzing and manipulating GIS Data.",
          link: "https://www.geographyrealm.com/building-a-reusable-model-with-arcgis-modelbuilder-saves-time/",
        },
        {
          date: "May 3, 2020",
          title: "An Introduction to ArcGIS ModelBuilder",
          exceprt:
            "Ever wondered how to automate those boring and recurring GIS tasks? Yes, like the kind that involves clipping/masking data, then filling DEMs and then calculating flow accumulation then flow direction then… ",
          link: "https://www.geographyrealm.com/an-introduction-to-arcgis-modelbuilder/",
        },
      ],
    },
    nigeriaSE4ALL: {
      logo: NigeriaSE4ALLLogo,
      name: "Nigeria SE4ALL",
      articles: [
        {
          date: "October 26, 2022",
          title: "The Nigeria Se4all Off-grid Settlements Survey",
          exceprt:
            "Ground-truth data has always been a focus of the Nigerian Energy Support Programme (NESP) to provide a stronger basis for electrification planning in the country. Thus, NESP has partnered with Hanovia Technologies Limited to carry out field surveys in off-grid settlements to collect information about large energy consumers (businesses, productive users, and public institutions), as well as to conduct a light assessment of energy supply in selected settlements.",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/10/26/the-nigeria-se-4-all-off-grid-settlements-survey",
        },
        {
          date: "August 16, 2022",
          title:
            "Exploring Mini-grid Potential And Selecting Potential Sites For Off-grid Mini-grids In Nigeria",
          exceprt:
            "The Off-grid mini-grids explorer is focusing on settlements that are currently not connected to the national grid. The interactive webmap provides a nationwide view of all the surveyed settlements with distance greater than 10KM away from the national grid. These settlements are considered off-grid and thus a good fit for mini-grids project development.",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/08/16/off-grid-mini-grids-explorer",
        },
        {
          date: "August 16, 2022",
          title: "Power Sector Analytics Explorer",
          exceprt:
            "The webmap presents infrastructures data such as: high voltage (HV) transmission lines, medium voltage (MV) grid, modelled medium voltage grid, hydropower plants, gas/steam power plants and existing mini-grids available in the country, as well as nationwide settlement clusters and building(rooftop) counts.",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/08/16/power-sector-analytics-explorer",
        },
        {
          date: "June 27, 2022",
          title: "GIS For The Rest Of Us",
          exceprt:
            "The major barrier in the entry that many new GIS users face is figuring out the right resource and approach to getting started. They become overwhelmed with the numerous resources available online for learning GIS. How do you know which approach to learning GIS is the best? What software do you need to install? What are the fundamental concepts of GIS you need to know?",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/06/27/this-is-a-test-article-about-something-going-on-in-the-minigrid-sector",
        },
      ],
    },
    hashnode: {
      logo: HashnodeLogo,
      name: "Hashnode",
      articles: [],
    },
    medium: {
      logo: MediumLogo,
      name: "Medium",
      articles: [],
    },
  },
  media: {
    hero: {
      en: "I've spoken at conference events all around the world, co-hosted podcasts, and facilitated workshops.",
    },
    description: `Apart from writing, another way I love to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.`,
    media: [
      //talks
      {
        category: MediaCategory.CONFERENCE_TALKS,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            conferenceName: "FOSS4G EUROPE academic track",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "SOTM ON AFRICA GEOCONVO",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "AGDIC ON ILAJE",
            conferenceYear: "",
            link: "",
          },
        ],
      },
      //workshops
      {
        category: MediaCategory.CONFERENCE_WORKSHOPS,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            conferenceName: "GIS FEST",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "NIGERIA SE4ALL TRAININGS",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "GEOMUNDUS (COMING SOON)",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "GEOSPATIAL DEVELOPERS",
            conferenceYear: "",
            link: "",
          },
        ],
      },
      //Podcasts (host)
      {
        category: MediaCategory.PODCAST_HOST,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            podcastName: "AfricaGeoConvo Episodes i appear (use api?)",
            conferenceYear: "",
            link: "",
          },
        ],
      },
      //Podcast (Guest)
      {
        category: MediaCategory.PODCAST_GUEST,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            podcastName: "GEOSPATIALLY",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "WE DEY CODE",
            conferenceYear: "",
            link: "",
          },
        ],
      },
      //Webinars
      {
        category: MediaCategory.WEBINARS,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            podcastName: "GEOSON NIGERIA",
            conferenceYear: "",
            link: "",
          },
          {
            talkTitle: "TypeScript",
            abstract: "My favorite...",
            conferenceName: "UI WEBINAR",
            conferenceYear: "",
            link: "",
          },
        ],
      },
      // Interviews
      {
        category: MediaCategory.INTERVIEWS,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            podcastName: "SPACE IN AFRICA",
            conferenceYear: "",
            link: "",
          },
        ],
      },
      //tutorial videos
      {
        category: MediaCategory.TUTORIAL_VIDEOS,
        activities: [
          {
            talkTitle: "foss4g europe",
            abstract: "My favorite...",
            podcastName: "Youtube videos",
            conferenceYear: "",
            link: "",
          },
        ],
      },
    ],
  },
  stacks: {
    hero: {
      en: "I love to learn, so I write.",
    },
    description: `All of my long and short-form thoughts on software development, programming, capacity building, community development, and more, collected in chronological order.`,
    stacks: [
      {
        title: "Frontend",
        tools: [
          {
            title: "TypeScript",
            exceprt: "My favorite...",
          },
          {
            title: "Javascript",
            exceprt: "",
          },
          {
            title: "React",
            exceprt: ".",
          },
          {
            title: "Next JS",
            exceprt: "",
          },
        ],
      },
      {
        title: "Backend",
        tools: [
          {
            title: "Django",
            exceprt: "My favourite...",
          },
          {
            title: "FastAPI",
            exceprt: "My second favourite...",
          },
          {
            title: "Node",
            exceprt: "Lorem  ipsum...",
          },
        ],
      },
      {
        title: "Styling",
        tools: [
          {
            title: "Tailwind CSS",
            exceprt: "My favourite...",
          },
          {
            title: "CSS3",
            exceprt: "My second favourite...",
          },
          {
            title: "Boostrap, Material UI, Shadcn, Chakra UI etc",
            exceprt: "Lorem  ipsum...",
          },
        ],
      },
      {
        title: "Design",
        tools: [
          {
            title: "Figma",
            exceprt: "My favourite...",
          },
        ],
      },
      {
        title: "Architecture",
        tools: [
          {
            title: "Draw.io",
            exceprt: "My favourite...",
          },
          {
            title: "Excalli Draw",
            exceprt: "My favourite...",
          },
        ],
      },
      {
        title: "Web-GIS",
        tools: [
          {
            title: "MapLlibre GL",
            exceprt: "My favourite...",
          },
          {
            title: "Mapbox GL",
            exceprt: "My favourite...",
          },
          {
            title: "Deck.GL",
            exceprt: "My favourite...",
          },
          {
            title: "Leaflet",
            exceprt: "My favourite...",
          },
          {
            title: "Openlayers",
            exceprt: "My favourite...",
          },
        ],
      },
      {
        title: "Data Analysis",
        tools: [
          {
            title: "Pandas",
            exceprt: "My favourite...",
          },
        ],
      },
      {
        title: "GIS",
        tools: [
          {
            title: "QGIS",
            exceprt: "My favourite...",
          },
          {
            title: "ArcGIS",
            exceprt: "My favourite...",
          },
        ],
      },
    ],
  },
  projects: {
    hero: {
      en: "I love to build things.",
    },
    description: `Throughout my career, I've worked on a variety of projects ranging from webapps, ML models, data pipelines, desktop apps and more, but these are my proudest accomplishments. Many are open-source, while others are protected by NDAs. If any of these resonate with you, feel free to explore the code (if public) and/or reach out to discuss them!`,
    projects: [
      //Projects
      {
        title: "Spatialnode",
        image: SpatialnodeImage,
        protected: false,
        shortDescription:
          "A side project turned to a startup :) I work every weekend on developing Spatialnode for the geospatial community to create an online portfolio of their works in 2 minutes or less and explore geospatial opportunities. This single project alone, has exposed me to the full spectrum of developing a product that works and scale. Not only did I improve on the technical side of things, but also my soft skills (project management, team work, ideating, solving problems, etc).",
        tags: [
          ProjectTag.React,
          ProjectTag.PostGIS,
          ProjectTag.Leaflet,
          ProjectTag.GitHubActions,
          ProjectTag.AWS,
          ProjectTag.GCP,
          ProjectTag.NextJS,
          ProjectTag.Geodjango,
          ProjectTag.Stripe,
          ProjectTag.TailwindCSS,
          ProjectTag.Celery,
          ProjectTag.Redis,
          ProjectTag.Django,
          ProjectTag.More,
        ],
        demoLink: "https://spatialnode.net",
        categories: [
          ProjectCategory.FRONTEND,
          ProjectCategory.DEVOPS,
          ProjectCategory.BACKEND,
        ],
      },
      {
        title: "Real-time Locomotive Tracker",
        image: LocomotiveImage,
        protected: true,
        shortDescription:
          "Recently developed for a client (representing a Government agency). This was my first time developing a cross platform desktop application. I developed it full-stack (backend, DevOps, and desktop) development.",
        tags: [
          ProjectTag.NextJS,
          ProjectTag.FastAPI,
          ProjectTag.Redis,
          ProjectTag.Rust,
          ProjectTag.TypeScript,
          ProjectTag.DeckGL,
          ProjectTag.WebSocket,
          ProjectTag.MaplibreGLJS,
        ],
        demoLink: "",
        categories: [
          ProjectCategory.DESKTOP,
          ProjectCategory.DEVOPS,
          ProjectCategory.FRONTEND,
        ],
      },
      {
        title: "Nigeria SE4ALL WebMap V3.0",
        image: NigeriaSE4ALLImage,
        protected: false,
        shortDescription:
          "While at Integration, I worked with on team that developed the Nigeria SE4ALL v3.0 webmaps. The platform is developed for project developers to find potential sites quickly for mini-grid and support electrification planning in Nigeria.",
        tags: [
          ProjectTag.React,
          ProjectTag.PostGIS,
          ProjectTag.Geoserver,
          ProjectTag.MaplibreGLJS,
          ProjectTag.Geonode,
          ProjectTag.MVT,
        ],
        demoLink: "https://apps.nigeriase4all.gov.ng/minigrid-offgrid",
        categories: [ProjectCategory.FRONTEND],
      },
      {
        title: "Automated Earth Observation Data Pipeline",
        protected: true,
        image: EarthObservationImage,
        shortDescription:
          "While at Rural Farmers Hub, I worked on developing an automated earth observation data pipeline. The project retriees remote sensing data leveraging STAC, preprocesses it, compute vegetation indices, and export the result as a PNG for mobile application rendering.",
        tags: [
          ProjectTag.GDAL,
          ProjectTag.Python,
          ProjectTag.FastAPI,
          ProjectTag.STAC,
          ProjectTag.DigitalOcean,
          ProjectTag.GitHubActions,
        ],
        demoLink: "",
        categories: [ProjectCategory.BACKEND],
      },
      //Volunteering
      {
        title: "Conference Volunteer (FOSS4G Europe)",
        protected: false,
        date: "July 2024",
        image: FOSS4GEuropeImage,
        shortDescription:
          "Privildged to be a travel grant participant at the recently concluded foss4g europe. Supported ith registration desk and in sessionr ooms.",
        tags: [ProjectTag.TeamWork],
        demoLink: "https://2024.europe.foss4g.org/",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title: "GISfest Conference Technical Lead",
        protected: false,
        image: GISFestImage,
        shortDescription:
          "Led the technical team to develop and design promotion tools ...development of the GISfest Conference website.",
        tags: [ProjectTag.NextJS, ProjectTag.TailwindCSS],
        demoLink:
          "https://gisfest-conference-website-bdk7uhzu3-spatialnode-team.vercel.app/",
        categories: [
          ProjectCategory.FRONTEND,
          ProjectCategory.VOLUNTEERING,
          ProjectCategory.OPEN_SOURCE,
        ],
      },
      {
        title: "Advanced OpenStreetMap Contributor",
        protected: false,
        date: "July 21, 2017 - November 07, 2023",
        image: OSMChangesetsImage,
        shortDescription:
          "With over 1million changesets, I contributed to oSM. Led the technical team to develop and design promotioNowaday I rarely contribute, but my experience as a youthmapper regional ambasador, chapter president, gave me have deep understanding of the OSM ecosystem.",
        tags: [ProjectTag.OpenStreetMap],
        demoLink: "https://www.openstreetmap.org/user/Jolaiya%20Emmanuel",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title:
          "State of the Map Africa Conference Technical and Communications Lead",
        protected: false,
        image: SotMImage,
        shortDescription:
          "Led the Website Development & ...development of the State of the Map Africa Conference website.We achieved x and y...",
        tags: [ProjectTag.React, ProjectTag.CSS3, ProjectTag.Ruby],
        demoLink: "https://2023.stateofthemap.africa",
        categories: [
          ProjectCategory.FRONTEND,
          ProjectCategory.VOLUNTEERING,
          ProjectCategory.OPEN_SOURCE,
        ],
      },
      {
        title: "Technical Reviewer - Learning Geospatial Analysis with Python",
        protected: false,
        date: "Jan 1st - Dec 21, 2023.",
        image: PythonForGeospatialAnalysisImage,
        shortDescription:
          "While this is not supposed to be a project, but i'm proud...",
        tags: [ProjectTag.Python],
        demoLink:
          "https://www.packtpub.com/en-de/product/learning-geospatial-analysis-with-python-9781783281138",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title: "Technical Reviewer - Geospatial Analysis with SQL",
        protected: false,
        image: GeospatialAnalysisWithSQLImage,
        shortDescription:
          "While this is not supposed to be a project, but i'm proud...",
        tags: [ProjectTag.SQL],
        demoLink:
          "https://www.packtpub.com/en-de/product/geospatial-analysis-with-sql-9781835083147",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title: "Tutor - Geospatial Developers",
        date: "November 2022",
        protected: false,
        image: GitHubImage,
        shortDescription:
          "Gave an introductory course to Django and React to over 300 aspiring geospatial developers in Africa.",
        tags: [ProjectTag.Django, ProjectTag.React],
        demoLink: "https://github.com/ernest19/Geospatial_Developers",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      //Open Source
      {
        title: "PyGeoAPI",
        protected: false,
        date: "Jan 2020 - Dec. 2023",
        image: GitHubImage,
        shortDescription:
          "PygeoAPI is the.... My contribution was the implementation of the OGC Processess API.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/geopython/pygeoapi",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Geoserver Rest",
        protected: false,
        date: "Jan 2020 - Dec. 2023",
        image: GitHubImage,
        shortDescription:
          "Contributed a few methods to the package. My contribution was...It aimed at making interaction with Geoserver easier.",
        tags: [ProjectTag.Geoserver, ProjectTag.Python],
        demoLink: "https://github.com/gicait/geoserver-rest",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "HOTOSM Raw Data API",
        protected: false,
        date: "Jan 2020 - Dec. 2023",
        image: GitHubImage,
        shortDescription:
          "Raw Data API is a set of high-performant APIs for transforming and exporting OpenStreetMap (OSM) data in different GIS file formats. My contribution was setting up the documentation for the project usin material for mkdocs.",
        tags: [ProjectTag.FastAPI, ProjectTag.Python],
        demoLink: "https://github.com/hotosm/raw-data-api",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Rsgis",
        protected: false,
        date: "Jan 2020 - Dec. 2023",
        image: GitHubImage,
        shortDescription:
          "My first python package aimed at making remote sensing operation with landsat easier.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/jeafreezy/rsgis",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Petroeval",
        date: "Jan 2020 - Dec. 2023",
        protected: false,
        image: GitHubImage,
        shortDescription:
          "Petrol eval is the...My contribution was on reading multiple LAS files.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/olawaleibrahim/petroeval",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      //Publications
      {
        title:
          "Mapping Soil Erosion Classes using Remote Sensing Data and Ensemble Models",
        date: "June 2024",
        protected: false,
        image: GoogleScholarImage,
        shortDescription:
          "While this is not supposed to be a project, but i'm proud...",
        tags: [
          ProjectTag.Python,
          ProjectTag.RemoteSensing,
          ProjectTag.DeepLearning,
        ],
        demoLink:
          "https://isprs-archives.copernicus.org/articles/XLVIII-4-W12-2024/135/2024/",
        categories: [ProjectCategory.PUBLICATIONS],
      },
      {
        title:
          "A Spatio-Temporal Analysis of Shoreline Changes in the Ilaje Coastal Area of Ondo State, Nigeria",
        protected: false,
        date: "October 2023",
        image: GoogleScholarImage,
        shortDescription:
          "While this is not supposed to be a project, but i'm proud...",
        tags: [
          ProjectTag.ArcGIS,
          ProjectTag.DSAS,
          ProjectTag.GEE,
          ProjectTag.RemoteSensing,
        ],
        demoLink: "https://www.mdpi.com/2077-1312/12/1/18",
        categories: [ProjectCategory.PUBLICATIONS],
      },
      {
        title: "Mapping Access to Electricity in Urban and Rural Nigeria",
        date: "November 2022",
        protected: false,
        image: SpringerPublicationImage,
        shortDescription:
          "While this is not supposed to be a project, but i'm proud...",
        tags: [
          ProjectTag.OpenStreetMap,
          ProjectTag.Mapathon,
          ProjectTag.YouthMappers,
        ],
        demoLink:
          "https://link.springer.com/chapter/10.1007/978-3-031-05182-1_12",
        categories: [ProjectCategory.PUBLICATIONS],
      },
    ],
  },
  workExperience: [
    {
      role: "Founder",
      roleType: "Part Time",
      period: "2022 - Present",
      companyName: "Spatialnode",
      companyLogo: SpatialnodeLogo,
    },
    {
      role: "Geospatial Software Engineer",
      roleType: "Part Time",
      period: "2023",
      companyName: "Rural Farmers Hub",
      companyLogo: RuralFarmersHubLogo,
    },
    {
      role: "Geodata Analyst",
      roleType: "Full Time",
      period: "2021 - 2023",
      companyName: "Integration Environment & Energy GmbH",
      companyLogo: IntegrationLogo,
    },
    {
      role: "GIS Developer",
      roleType: "Contract",
      period: "2020 - 2021",
      companyName: "Cizoti Nigeria Limited",
      companyLogo: CizotiLogo,
    },
  ],
  education: [
    {
      degree: "M.sc in Geospatial Technologies",
      period: "2023 - Present",
      schoolName: "University of Muenster, Munster, Germany",
      schoolLogo: UniMunsterLogo,
    },
    {
      degree: "M.sc in Geospatial Technologies",
      period: "2023 - Present",
      schoolName: "Jaume I University, Castelló de la Plana, Spain",
      schoolLogo: UJILogo,
    },
    {
      degree: "B.Tech. in Remote Sensing & GIS",
      period: "2015 - 2021",
      schoolName: "The Federal University of Technology, Akure, Nigeria",
      schoolLogo: FUTALogo,
    },
  ],
  cvLink:
    "https://drive.google.com/file/d/1E5kxIZwaZFpdvVT49j3Jc-7Ifo9gJPgF/view",
};
