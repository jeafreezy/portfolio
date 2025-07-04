
import IntegrationLogo from "@/public/organizations/integration_environment_energy_gmbh_logo.jpeg";
import SpatialnodeLogo from "@/public/organizations/spatialnode_logo.jpeg";
import RuralFarmersHubLogo from "@/public/organizations/rural_farmers_hub.png";
import IWMILogo from "@/public/organizations/iwmi_logo.png";
import UniMunsterLogo from "@/public/schools/uni_munster_logo.png";
import FUTALogo from "@/public/schools/futa_logo.png";
import UJILogo from "@/public/schools/uji_logo.jpeg";
import YouthMappersLogo from "@/public/organizations/youthmappers_logo.png";
import RivnauticsImage from "@/public/projects/ship_image.png";
import HOTLogo from "@/public/organizations/hot_logo.png";
import MediumLogo from "@/public/blogs/medium_logo.webp";
import HashnodeLogo from "@/public/blogs/hashnode_logo.png";
import NigeriaSE4ALLLogo from "@/public/organizations/nigeria_se4all_logo.jpg";
import GISLoungeLogo from "@/public/blogs/gislounge_logo.jpg";
import EarthObservationImage from "@/public/projects/kc_earth_oberservation.jpg";
import NigeriaSE4ALLImage from "@/public/projects/nigeriase4all_screenshot.png";
import SpatialnodeImage from "@/public/projects/spatialnode_screenshot.png";
import LocomotiveImage from "@/public/projects/locomotive.jpeg";
import GISFestImage from "@/public/projects/gisfest.png";
import SotMImage from "@/public/projects/sotmafrica.png";
import GitHubImage from "@/public/projects/github_logo.png";
import GeospatialAnalysisWithSQLImage from "@/public/projects/geospatial_analysis_with_sql.png";
import LimpopoDTImage from "@/public/projects/limpopo.png";
import PythonForGeospatialAnalysisImage from "@/public/projects/learning_python_for_geospatial_analysis.jpg";
import SpringerPublicationImage from "@/public/projects/springer_publication.webp";
import FOSS4GEuropeImage from "@/public/projects/foss4geurope_logo.png";
import GoogleScholarImage from "@/public/projects/google_scholar.png";
import OSMChangesetsImage from "@/public/projects/osm_changesets.png";
import fAIrImage from "@/public/projects/fair_ui.png";
import { MediaCategory, ProjectCategory, ProjectTag } from "./enums";

export const APP_CONTENT = {
  //Home page content
  header: {
    hero: "Senior Software Engineer.",
    heroBio:
      "Hello 👋, I'm Emmanuel. I love building things, solving complex problems, and creating well-designed software.",
  },
  about: {
    hero: "About me",
    content: {
      firstBlock: "I'm Emmanuel, a software engineer who loves building things and solving complex problems. I've worked on projects spanning Earth observation, geospatial data, and applications in environmental monitoring, sustainable mobility, agriculture, energy, and humanitarian efforts.",
      secondBlock: "My experience includes developing Earth observation pipelines to enhance food security, improving data accessibility in Africa for electrification planning through open data and collaborative mapping, contributing to a digital twin portal for water management, and building web applications that make AI more accessible for humanitarian use. My current technical interests include DevOps, algorithms, deep learning, big data quality, and data engineering.",
      thirdBlock: `I hold an Erasmus Mundus Joint Master's degree in Geospatial Technologies, with a thesis on data quality assessment and enhancement for sustainable water management in IoT-enabled peacekeeping missions in collaboration with the UNGSC. Prior to this, I earned a First-Class Bachelor's degree in Remote Sensing & Geoscience Information Systems, where I developed a geospatial methodology for landfill site identification using night-light satellite imagery.`,
      lastBlock: `Outside of my professional work, I enjoy engaging in physical activities such as playing table tennis, football, and working out at the gym. I also make time to stay updated on the latest developments in geospatial research and enjoy watching conference proceedings and educational tutorials.`,
    }
  },
  workExperience: [
    //{
      //role: "Software Engineer (UI/UX Developer)",
      //roleType: "Contract",
      //period: "2024 - Present",
      //companyName: "Humanitarian OpenStreetMap Team (HOT)",
      //companyLogo: HOTLogo,
    //
    //},
    {
      role: "Geospatial Software Engineer",
      roleType: "Freelance",
      period: "2024",
      companyName: "Internation Water Management Institute (IWMI)",
      companyLogo: IWMILogo,
    },
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
      period: "2020 - 2023",
      companyName: "Integration Environment & Energy GmbH",
      companyLogo: IntegrationLogo,
    },
  ],
  education: [
    {
      degree: "M.sc in Geospatial Technologies",
      period: "2023 - 2025",
      schoolName: "University of Muenster, Munster, Germany",
      schoolLogo: UniMunsterLogo,
      grade: 'Excellent'
    },
    {
      degree: "M.sc in Geospatial Technologies",
      period: "2023 - 2025",
      schoolName: "Jaume I University, Castelló de la Plana, Spain",
      schoolLogo: UJILogo,
      grade: 'Excellent'
    },
    {
      degree: "B.Tech. in Remote Sensing & GIS",
      period: "2015 - 2021",
      schoolName: "The Federal University of Technology, Akure, Nigeria",
      schoolLogo: FUTALogo,
      grade: '1st Class Honors'
    },
  ],
  cvLink:
    "https://drive.google.com/file/d/1dKbW1loRkTdlmukgt8U8RSXJ7Lkm_WRZ/view?usp=sharing",
  // Articles page content.
  articles: {
    hero: "I love to learn, so I write.",
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
          summary:
            "Certainly, the year 2020 would go down in history lane as a memorable one, as a result of several events that happened last year. Like many other people in the world, we as a group looked forward to 2020 with so many expectations and well laid out plans which we were able to execute in the first quarter...",
          link: "https://www.youthmappers.org/post/2020-a-year-we-made-lemons-out-of-lemonade",
        },
        {
          date: "December 30, 2020",
          title: "A Hot Experience with HOT",
          summary:
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
          summary:
            "The advent of the web has transformed everything around us and GIS is no exception. Web-GIS is the pattern or architectural approach for implementing the modern GIS.  It enables the distribution of maps and processing tools without time and location restriction to users.",
          link: "https://www.geographyrealm.com/open-source-web-gis-development-roadmap/",
        },
        {
          date: "June 22, 2021",
          title:
            "6 Open Source Powered Projects to Enrich Your GIS Programming Skills",
          summary:
            "Geospatial programming can be very challenging, especially for a greenhorn in the GIS or programming world. However, building hand-on projects can make it fun, as it’ll help you to gain practical development skills, build your portfolio and resume for your next job and you'll be putting your theoretical knowledge into developing great projects.",
          link: "https://www.geographyrealm.com/6-open-source-powered-projects-to-enrich-your-gis-programming-skills/",
        },
        {
          date: "May 26, 2021",
          title:
            "Mapping Our World, Saving Lives with Humanitarian OpenStreetMap Team",
          summary:
            "Depicting the world and its attributes via mapping has been one of the greatest tools in solving human and environmental problems. The “Mapping our World: Saving Lives” episode of the AfricaGeoConvo Podcast, examines the world of  mapping and volunteering, with Geoffrey Kateregga.",
          link: "https://www.geographyrealm.com/mapping-our-world-saving-lives-with-humanitarian-openstreetmap-team/",
        },
        {
          date: "May 4, 2021",
          title: "Securing a Funded GIS Graduate Program",
          summary:
            "Securing a fully funded graduate program can be a daunting task, but with the right information and strategic positioning, you too can be a scholar. In this article, we would share with you some important information you need to know about securing a graduate program.",
          link: "https://www.geographyrealm.com/securing-a-funded-gis-graduate-program/",
        },
        {
          date: "December 28, 2020",
          title: "WebGIS Section 3: Architecture",
          summary:
            "A picture is worth a thousand words, they say. In that light, my goal in this section is to explain the architectural workflow of a WebGIS without being verbose. It is expedient we understand that there is no de facto WebGIS architecture, workflows are dependent on their application context, however, they all rely on a three-tier client/server architecture.",
          link: "https://www.geographyrealm.com/webgis-section-3-architecture/",
        },
        {
          date: "December 6, 2020",
          title: "WebGIS Section 1 - A Quick Introduction to GIS and WebGIS",
          summary:
            "Welcome to the first section of this series on WebGIS with Opensauce. This section aims to give you a taste of the beauty of Geographic Information Systems(GIS) and Web GIS. At the end of this section, hopefully, you would have an understanding of these terms and be able to explain in simpler and easy-to-digest terms to your friends and coworkers.",
          link: "https://www.geographyrealm.com/section-1-a-quick-introduction-to-gis-and-webgis/",
        },
        {
          date: "December 6, 2020",
          title: "Series: WebGIS Using Open Source Tools",
          summary:
            "Welcome to my series on WebGIS using open source tools and technologies with the Free and Open Source Software for Geospatial Applications (FOSS4G) Stack. This 10 somewhat long-section series aims to introduce you to the beauty of WebGIS and some of the cool things you can pull off with it especially with absolutely free tech stacks.",
          link: "https://www.geographyrealm.com/series-webgis-using-open-source-tools/",
        },
        {
          date: "May 3, 2020",
          title: "Building a Model with ArcGIS ModelBuilder Saves Time",
          summary:
            "In the previous article in this series, Emmanuel Jolaiya provided an introduction to ArcGIS ModelBuilder. In this article, he will be showing users how to use ArcGIS ModelBuilder to develop a model for for analyzing and manipulating GIS Data.",
          link: "https://www.geographyrealm.com/building-a-reusable-model-with-arcgis-modelbuilder-saves-time/",
        },
        {
          date: "May 3, 2020",
          title: "An Introduction to ArcGIS ModelBuilder",
          summary:
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
          summary:
            "Ground-truth data has always been a focus of the Nigerian Energy Support Programme (NESP) to provide a stronger basis for electrification planning in the country. Thus, NESP has partnered with Hanovia Technologies Limited to carry out field surveys in off-grid settlements to collect information about large energy consumers (businesses, productive users, and public institutions), as well as to conduct a light assessment of energy supply in selected settlements.",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/10/26/the-nigeria-se-4-all-off-grid-settlements-survey",
        },
        {
          date: "August 16, 2022",
          title:
            "Exploring Mini-grid Potential And Selecting Potential Sites For Off-grid Mini-grids In Nigeria",
          summary:
            "The Off-grid mini-grids explorer is focusing on settlements that are currently not connected to the national grid. The interactive webmap provides a nationwide view of all the surveyed settlements with distance greater than 10KM away from the national grid. These settlements are considered off-grid and thus a good fit for mini-grids project development.",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/08/16/off-grid-mini-grids-explorer",
        },
        {
          date: "August 16, 2022",
          title: "Power Sector Analytics Explorer",
          summary:
            "The webmap presents infrastructures data such as: high voltage (HV) transmission lines, medium voltage (MV) grid, modelled medium voltage grid, hydropower plants, gas/steam power plants and existing mini-grids available in the country, as well as nationwide settlement clusters and building(rooftop) counts.",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/08/16/power-sector-analytics-explorer",
        },
        {
          date: "June 27, 2022",
          title: "GIS For The Rest Of Us",
          summary:
            "The major barrier in the entry that many new GIS users face is figuring out the right resource and approach to getting started. They become overwhelmed with the numerous resources available online for learning GIS. How do you know which approach to learning GIS is the best? What software do you need to install? What are the fundamental concepts of GIS you need to know?",
          link: "https://nigeriase4all.gov.ng/blog-post/2022/06/27/this-is-a-test-article-about-something-going-on-in-the-minigrid-sector",
        },
      ],
    },
    // dynamically retrieve from RSS Feed
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

  // media page content.
  media: {
    hero: "Global speaker, podcast host, workshop leader.",
    description: `Apart from writing, I enjoy sharing my ideas with others. I do this via speaking at conferences, facilitating workshops, podcasts, and webinars.`,
    media: [
      //chronological ordering
      {
        talkTitle:
          "Advanced Technique for Soil Erosion Classification via Remote Sensing and Ensemble Learning",
        abstract:
          "In this session, we present our research on soil erosion classification using ensemble models, highlighting key methodologies and insights.",
        organizerName: "FOSS4G Europe",
        year: "2024",
        link: "https://youtu.be/WH9O6qQUlDs?si=2DH5eN-xfZV6ICYp",
        category: MediaCategory.CONFERENCE_TALKS,
      },
      //workshops
      {
        talkTitle:
          "Developing an Air Quality Monitoring Dashboard with React (Next JS), TypeScript, Tailwind CSS, and MapLibre GL JS.",
        abstract:
          "The goal of this workshop is to explore the development of dashboards to convey decision making insights using best practices and open source tools.",
        organizerName: "Geomundus",
        year: "2024",
        link: "https://github.com/jeafreezy/workshops/tree/main/2024/airquality-monitoring-dashboard",
        category: MediaCategory.WORKSHOPS,
      },

      {
        talkTitle: "Introduction to GIS",
        abstract:
          "In this workshop, I introduced newcomers to the world of GIS, to support the development of their skills and nurturing professionals who can tackle environmental and societal challenges using GIS technology.",
        organizerName: "University of Ibadan GIS",
        year: "2023",
        link: "https://youtu.be/IUi-dyHWJUg?si=x7AXhjys6duqX-e6",
        category: MediaCategory.WORKSHOPS,
      },
      {
        talkTitle: "QGIS Trainings and Humanitarian Mapping with JOSM",
        abstract:
          "While at Integration, I co-facilitated over 12 physical workshops and mapathons across various locations (and vitually) in the country. These sessions focused on using QGIS for GIS analysis and humanitarian mapping with JOSM.",
        organizerName: "Nigeria Se4all",
        year: "2021-2023",
        link: "https://learning.nigeriase4all.gov.ng/",
        category: MediaCategory.WORKSHOPS,
      },
      {
        talkTitle:
          "Building a Custom Geocoding Service using Open Source Tools",
        abstract:
          "In this workshop, I explored an approach to creating a custom geocoding service with open source tools.",
        organizerName: "GISfest",
        year: "2022",
        link: "https://youtu.be/_YISLCVMC0o?si=nF92fodVrN5xWHN_",
        category: MediaCategory.WORKSHOPS,
      },

      {
        talkTitle: "Introduction to Django Rest Framework",
        abstract:
          "I had the privilege of facilitating a three-day workshop that introduced participants to Django for backend development.",
        organizerName: "Geospatial Developers",
        year: "2022",
        link: "https://youtu.be/LjozbdU9hbw?si=uzpI_wwYqaznx_Pi",
        category: MediaCategory.WORKSHOPS,
      },

      {
        talkTitle: "Introduction to React JS",
        abstract:
          "I had the privilege of facilitating a three-day workshop that introduced participants to React for frontend development.",
        organizerName: "Geospatial Developers",
        year: "2022",
        link: "https://youtu.be/JYvL-ObiRw0?si=UV8UepnF7F1alxe2",
        category: MediaCategory.WORKSHOPS,
      },
      //Podcasts
      {
        talkTitle: "Podcast Host - Africa GeoConvo Podcast",
        abstract:
          "I was a co-host of an innovative podcast focused on all things geospatial in Africa. Though we haven't had time to continue due to much workload recently, I'm  excited about the impact we made through this endeavor.",
        organizerName: "AfricaGeoConvo",
        year: "2020-2022",
        link: "https://linktr.ee/AfricaGeoConvo",
        category: MediaCategory.PODCAST,
      },
      {
        talkTitle: "Spatialnode - A portfolio platform for geospatial people",
        abstract:
          "In this episode, I had a conversation with Opeyemi and Iniobong about Spatialnode.",
        organizerName: "Geospatially Podcast",
        year: "2022",
        link: "https://geospatiallyafrica.com/episodes/spatialnode-a-portfolio-platform-for-geospatial-people",
        category: MediaCategory.PODCAST,
      },
      //Webinars
      {
        talkTitle:
          "R Package Development and Deployment",
        abstract:
          "Upon learning that my classmates were facing challenges with an assignment on R package deployment, I organized and led a webinar to support them. I invited Dennis Irorere, an expert in R programming, as a guest speaker to share his insights on package structure, version control, documentation, and deployment to CRAN. The session provided valuable guidance, enabling my peers to overcome difficulties and complete their assignments successfully.",
        organizerName: "Emmanuel Jolaiya",
        year: "2024",
        link: "https://www.youtube.com/watch?v=PohUwQNhq0U",
        category: MediaCategory.WEBINARS,
        slides: false,
      },
      {
        talkTitle:
          "WHY Geospatial? What to do to become a force in the GIS Industry",
        abstract:
          "I was privileged to be a keynote speaker at the GEOSON Lagos workshop series. In my session, I discussed the importance of GIS and why it remains a dynamic field worth exploring.",
        organizerName: "GEOSON Lagos Chapter",
        year: "2022",
        link: "https://drive.google.com/file/d/1v_XF3VZof1owcUxkmyQRvm_K-GOb4h-G/view?usp=sharing",
        category: MediaCategory.WEBINARS,
        slides: true,
      },
      {
        talkTitle: "Podcasting: Promoting Awareness of Open Geo in Africa",
        abstract:
          "In this session, we discuss how our podcast has advanced awareness and engagement with open source geospatial technology in Africa. Unfortunately it's not recorded :(",
        organizerName: "State of the Map Africa",
        year: "2021",
        link: "https://docs.google.com/presentation/d/1QshLkkmbI-8ESruCvfR78bIRJ3SLrwD-uE2fQ68FkJY/edit?usp=drivesdk",
        category: MediaCategory.CONFERENCE_TALKS,
        slides: true,
      },

      {
        talkTitle: "GIS Technology in Africa",
        abstract:
          "In this interview, I shared a bit about my journey and how GIS helps in our everyday lives.",
        organizerName: "WeDeyCode",
        year: "2020",
        link: "https://youtu.be/oip7_dC2uyY?si=_I31aL4PhE21iVQW",
        category: MediaCategory.PODCAST,
      },

      // Interviews
      {
        talkTitle: "A Discussion with Spatialnode's Emmanuel Jolaiya",
        abstract:
          "Had an interview with the Space in Africa team to discusss about Spatialnode, including its offerings, aims and objectives, and plans for the future.",
        organizerName: "Space in Africa",
        year: "2022",
        link: "https://spaceinafrica.com/2022/07/25/a-discussion-with-spatialnodes-emmanuel-jolaiya/",
        category: MediaCategory.INTERVIEWS,
      },

      //tutorial videos
      {
        talkTitle: "YouTube Videos",
        abstract:
          "In 2020, I began recording YouTube videos and have since created a collection of helpful content on my channel.",
        organizerName: "YouTube",
        year: "2020",
        link: "https://www.youtube.com/channel/UCdYaK054HlTq49qOJDTh2oA",
        category: MediaCategory.TUTORIAL_VIDEOS,
      },
    ],
  },
  // projects page content.
  projects: {
    hero: "Innovative projects showcase.",
    description: `Throughout my career, I've worked on a diverse range of projects, with some being open-source and others proprietary. On this page, I'm showcasing my projects, research papers, volunteering roles, and open-source contributions. These represent some of my proudest accomplishments. If any of these resonate with you, feel free to explore the code (where available) or reach out to discuss them!`,
    projects: [
     // Projects
     {
        title: "fAIr - An AI assisted mapping platform",
        date: "2024 - present",
        image: fAIrImage,
       protected: false,
       shortDescription:
         "I'm contributing as the frontend engineer in a team dedicated to revamping the UI/UX of fAIr, to make the mapping experience smoother for the community.",
       tags: [
         ProjectTag.React,
         ProjectTag.TailwindCSS,
         ProjectTag.MaplibreGLJS,
         ProjectTag.ReactQuery,
         ProjectTag.PMTiles,
         ProjectTag.More,
       ],
       demoLink: "https://fair.hotosm.org",
       categories: [
         ProjectCategory.FRONTEND,
         ProjectCategory.OPEN_SOURCE,
       ],
      },
      // {
      //   title: "Rivnautics - Real-time Ship Tracking Application",
      //   date: "2024 - present",
      //   image: RivnauticsImage,
      //   protected: true,
      //   shortDescription:
      //     "A cross-platform desktop application tailored for inland navigation in Bangladesh. Rivnautics supports real-time monitoring of vessels using AIS, GPS, Compass, and sonar data retrieved via serial ports at seconds interval. I built it from the ground up and contributed to efficient data streaming and marine visualization tailored to the country's riverine ecosystem. Developed for the same client as Locotrack.",
      //   tags: [
      //     ProjectTag.Rust,
      //     ProjectTag.TypeScript,
      //     ProjectTag.DeckGL,
      //     ProjectTag.React,
      //     ProjectTag.MaplibreGLJS,
      //     ProjectTag.More
      //   ],
      //   demoLink: "",
      //   categories: [
      //     ProjectCategory.DESKTOP,
      //     ProjectCategory.FRONTEND,
      //   ],
      // },
      {
        title: "Limpopo Basin Digital Twin",
        date: "2024",
        image: LimpopoDTImage,
        protected: false,
        shortDescription:
          "As a Full Stack Engineer, I contributed to the project by aggregating diverse geospatial and remote sensing datasets, developing efficient data pipelines, and visualizing insights using TerriaJS. I also customized TerriaJS codebase to integrate advanced charting tools and embed an AI-powered chatbot. Deployments of configuration files were automated using Python and AWS.",
        tags: [
          ProjectTag.React,
          ProjectTag.Leaflet,
          ProjectTag.MobX,
          ProjectTag.AWS,
          ProjectTag.CSS3,
          ProjectTag.Python,
          ProjectTag.Cesium,
          ProjectTag.Geoserver,
          ProjectTag.OpenDataCube,
          ProjectTag.More,
        ],
        demoLink: "https://digitaltwins.demos-only.iwmi.org",
        categories: [
          ProjectCategory.FRONTEND,
          ProjectCategory.BACKEND,
        ],
      },
      {
        title: "Spatialnode",
        date: "2022 - present",
        image: SpatialnodeImage,
        protected: false,
        shortDescription:
          "A side project that turned into a startup! I work every weekend on developing Spatialnode, a platform designed for the geospatial community to create an online portfolio of their work in 2 minutes or less and explore geospatial opportunities. This project has exposed me to the entire process of developing a product that works and scales. Through this endeavor, I’ve not only honed my technical skills but also enhanced my soft skills, including project management, teamwork, ideation, and problem-solving.",
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
        title: "Locotrack - Real-time Train Tracking Application",
        date: "2023",
        image: LocomotiveImage,
        protected: true,
        shortDescription:
          "I recently developed a cross-platform desktop application for a client representing a government agency. This was my first experience with cross-platform desktop development. I handled the project end-to-end, including backend development, DevOps, and desktop application development.",
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
        date: "2021-2023",
        image: NigeriaSE4ALLImage,
        protected: false,
        shortDescription:
          "While at Integration, I worked with a team that developed the Nigeria SE4ALL v3.0 webmaps. This platform is designed to help project developers quickly identify potential sites for mini-grid installations and support electrification planning across Nigeria. I also worked on the data quality pipeline for semi-automated upload of surveyed electrification data to OpenStreetMap.",
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
        date: "2023",
        image: EarthObservationImage,
        shortDescription:
          "While at Rural Farmers Hub, I developed an automated Earth observation data pipeline. This project retrieves remote sensing data using STAC, preprocesses it, computes vegetation indices, and exports the results as PNG files for rendering in mobile applications.",
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
        title: "Travel Grant Participant",
        protected: false,
        date: "2024",
        image: FOSS4GEuropeImage,
        shortDescription:
          "I was privileged to receive a travel grant and participate in the recently concluded FOSS4G Europe. I supported the event by assisting at the registration desk and in the session rooms.",
        tags: [ProjectTag.TeamWork],
        demoLink: "https://2024.europe.foss4g.org/",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title: "Technical Lead - GISfest Conference",
        protected: false,
        date: "2022",
        image: GISFestImage,
        shortDescription:
          "I led the technical team in developing and designing promotional tools for the GISfest Conference, including the development of the conference website.",
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
        date: "2017 -  2023",
        image: OSMChangesetsImage,
        shortDescription:
          "With over 1 million changesets, I have made significant contributions to OpenStreetMap (OSM). Although I contribute less frequently now, my experience as a YouthMappers chapter president and research fellow has provided me with a deep understanding of the OSM ecosystem.",
        tags: [ProjectTag.OpenStreetMap],
        demoLink: "https://www.openstreetmap.org/user/Jolaiya%20Emmanuel",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title:
          "Technical and Communications Lead - State of the Map Africa Conference",
        protected: false,
        image: SotMImage,
        date: "2023 - Present",
        shortDescription:
          "I led the technical and communications team in developing and designing promotional tools for the conference, including the development of the conference website.",
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
        date: "2023",
        image: PythonForGeospatialAnalysisImage,
        shortDescription:
          "As a Technical Reviewer, I evaluated book for accuracy, clarity, and technical depth. My role involved ensuring that the material effectively teaches geospatial analysis concepts using Python, and that it aligns with industry best practices. I provided feedback to enhance the learning experience and ensure the course meets high standards of quality and relevance.",
        tags: [ProjectTag.Python],
        demoLink:
          "https://www.packtpub.com/en-de/product/learning-geospatial-analysis-with-python-9781783281138",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title: "Technical Reviewer - Geospatial Analysis with SQL",
        protected: false,
        date: "2023",
        image: GeospatialAnalysisWithSQLImage,
        shortDescription:
          "As a Technical Reviewer, I evaluated book for accuracy, clarity, and technical depth. My role involved ensuring that the material effectively teaches geospatial analysis concepts using SQL, and that it aligns with industry best practices. I provided feedback to enhance the learning experience and ensure the course meets high standards of quality and relevance.",
        tags: [ProjectTag.SQL],
        demoLink:
          "https://www.packtpub.com/en-de/product/geospatial-analysis-with-sql-9781835083147",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      {
        title: "Tutor - Geospatial Developers",
        date: "2022",
        protected: false,
        image: GitHubImage,
        shortDescription:
          "Delivered an introductory course on Django and React to over 300 aspiring geospatial developers across Africa.",
        tags: [ProjectTag.Django, ProjectTag.React],
        demoLink: "https://github.com/ernest19/Geospatial_Developers",
        categories: [ProjectCategory.VOLUNTEERING],
      },
      //Open Source
      {
        title: "Developer - Webmap Compare",
        protected: false,
        date: "2024",
        image: GitHubImage,
        shortDescription:
          "Quickly and interactively compare performace of GeoJSON features on major webmap libraries.",
        tags: [ProjectTag.MaplibreGLJS, ProjectTag.Leaflet],
        demoLink: "https://github.com/jeafreezy/webmap-compare",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Developer - Nigeria Geodata",
        protected: false,
        date: "2024",
        image: GitHubImage,
        shortDescription:
          "I developed a lightweight and efficient Python package designed to streamline access to geospatial data specific to Nigeria. This library is tailored to simplify the work of developers by providing fast, reliable, and easy-to-use tools for geospatial data management. Beyond creating a useful tool for the developer community, this project served as an opportunity to deepen my understanding of the end-to-end process involved in developing and releasing a Python package. From initial design and coding to documentation, testing, and distribution, I gained valuable insights into the complete lifecycle of a Python package.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/jeafreezy/nigeria_geodata",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Contributor - PyGeoAPI",
        protected: false,
        date: "2024",
        image: GitHubImage,
        shortDescription:
          "PygeoAPI is the open-source project that provides a framework for serving geospatial data in compliance with OGC standards. My contribution involved implementing the OGC Processes API, which enables the execution and management of geospatial processing workflows.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/geopython/pygeoapi",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Contributor - Geoserver Rest",
        protected: false,
        date: "2022",
        image: GitHubImage,
        shortDescription:
          "GeoServer REST is a Python library for managing geospatial data in GeoServer. I contributed by resolving several issues to enhance the library's functionality.",
        tags: [ProjectTag.Geoserver, ProjectTag.Python],
        demoLink: "https://github.com/gicait/geoserver-rest",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Contributor - HOTOSM Raw Data API",
        protected: false,
        date: "2022",
        image: GitHubImage,
        shortDescription:
          "Raw Data API is a set of high-performant APIs for transforming and exporting OpenStreetMap (OSM) data in different GIS file formats. My contribution was setting up the documentation for the project using material for mkdocs.",
        tags: [ProjectTag.FastAPI, ProjectTag.Python],
        demoLink: "https://github.com/hotosm/raw-data-api",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Author - Rsgis",
        protected: false,
        date: "2020",
        image: GitHubImage,
        shortDescription:
          "My first Python package is designed to simplify remote sensing operations with Landsat data, making it easier to work with and analyze Landsat satellite imagery.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/jeafreezy/rsgis",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      {
        title: "Contributor - Petroeval",
        date: "2020",
        protected: false,
        image: GitHubImage,
        shortDescription:
          "Petrol Eval is a tool for evaluating and analyzing petroleum data. My contribution involved implementing functionality for reading and processing multiple LAS files.",
        tags: [ProjectTag.Python],
        demoLink: "https://github.com/olawaleibrahim/petroeval",
        categories: [ProjectCategory.OPEN_SOURCE],
      },
      //Publications
      {
        title:
          "An improved methodology for locating and ranking potential hazardous landfill sites at a regional scale using night-time imagery",
        date: "2025",
        protected: false,
        image: GoogleScholarImage,
        shortDescription:
          "Our goal is to develop an improved approach to reducing adminstrative (e.g State or LGA) level suitability analyses, which tend to produce many small, fragmented dump sites. To achieve this, we proposed an approach to regionalize the process, to use fewer, better-located facilities, and achieve a healthier environment using night-light time imagery.",
        tags: [
          ProjectTag.Python,
          ProjectTag.RemoteSensing,
          ProjectTag.ArcGIS,
          ProjectTag.GEE,
        ],
        demoLink:
          "https://rdcu.be/enexk",
        categories: [ProjectCategory.PUBLICATIONS],
      },
      {
        title:
          "Mapping Soil Erosion Classes using Remote Sensing Data and Ensemble Models",
        date: "2024",
        protected: false,
        image: GoogleScholarImage,
        shortDescription:
          "We explored innovative approaches to classifying soil erosion using remote sensing data combined with ensemble modeling techniques.",
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
        date: "2023",
        image: GoogleScholarImage,
        shortDescription:
          "The study utilizes remote sensing data and spatio-temporal analysis techniques to assess the extent and impact of shoreline changes, providing critical insights for coastal management and conservation efforts in Ondo State.",
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
        date: "2022",
        protected: false,
        image: SpringerPublicationImage,
        shortDescription:
          "We employed data collection to analyze electricity access disparities between the FUTA campus and its surrounding communities. The study provides valuable insights for improving energy infrastructure and informing policy planning.",
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
};
