import FiverrIcon from "@/components/icons/FiverrIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import GoogleScholarIcon from "@/components/icons/GoogleScholarIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import { TGalleryObj, TProjectCategory } from "@/utils/types";
import Gallery1 from "@/public/gallery/1.jpg";
import Gallery2 from "@/public/gallery/2.jpeg";
import Gallery3 from "@/public/gallery/3.jpg";
import Gallery4 from "@/public/gallery/4.jpg";
import Gallery6 from "@/public/gallery/6.jpg";
import Gallery7 from "@/public/gallery/7.jpg";
import Gallery5 from "@/public/gallery/5.jpg";
import PersonIcon from "@/components/icons/PersonIcon";
import ArticleIcon from "@/components/icons/ArticleIcon";
import CodeIcon from "@/components/icons/CodeIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MicrophoneIcon from "@/components/icons/MicrophoneIcon";
import GridIcon from "@/components/icons/GridIcon";
import { ProjectCategory } from "./enums";

// Navigation routes
export const navRoutes: {
  name: string;
  icon: any;
  route: string;
}[] = [
  {
    name: "Home",
    icon: HomeIcon,
    route: "/",
  },
  {
    name: "About",
    icon: PersonIcon,
    route: "/about",
  },
  {
    name: "Articles",
    icon: ArticleIcon,
    route: "/articles",
  },
  {
    name: "Projects",
    icon: GridIcon,
    route: "/projects",
  },
  {
    name: "Talks",
    icon: MicrophoneIcon,
    route: "/speaking",
  },
  {
    name: "Stack",
    icon: CodeIcon,
    route: "/stack",
  },
];

// Social media links
export const socials: {
  url: string;
  title: string;
  icon: any;
}[] = [
  {
    icon: GitHubIcon,
    url: "https://github.com/jeafreezy",
    title: "GitHub",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/emmanueljolaiya",
    title: "LinkedIn",
  },
  {
    icon: TwitterIcon,
    url: "https://twitter.com/jeafreezy",
    title: "Twitter",
  },
  {
    icon: YouTubeIcon,
    url: "https://www.youtube.com/channel/UCdYaK054HlTq49qOJDTh2oA",
    title: "YouTube",
  },
  {
    icon: GoogleScholarIcon,
    url: "https://scholar.google.com/citations?user=TAkvVMUAAAAJ&hl=en",
    title: "Google Scholar",
  },
  {
    icon: FiverrIcon,
    url: "https://www.fiverr.com/jolaiyaemmanuel",
    title: "Fiverr",
  },
];

// Gallery images for the landing page

export const galleryImages: TGalleryObj[] = [
  {
    width: 600,
    height: 800,
    path: Gallery4,
    description:
      "A portrait with the UEFA Cup at Santiago Bernabéu Stadium, Madrid.",
  },
  {
    width: 800,
    height: 600,
    path: Gallery6,
    description:
      "A quick portrait after a late night gym session. Yeah, I love to hit the gym!",
  },

  {
    width: 800,
    height: 600,
    path: Gallery2,
    description: "A clean shot from the #FOSS4G Europe in Tartu, Estonia.",
  },
  {
    width: 600,
    height: 800,
    path: Gallery3,
    description:
      "A quick selfie with Tom Kralidis, one of my geospatial heroes. Met him at the 2024 OGC Hackhathon in Evora, Portugal.",
  },

  {
    width: 600,
    height: 800,
    path: Gallery7,
    description:
      "My best shot yet with Dart. This was two days after I learned it, so I'm proud of it!",
  },
  {
    width: 600,
    height: 800,
    path: Gallery5,
    description: "I love football too!",
  },

  {
    width: 600,
    height: 800,
    path: Gallery1,
    description:
      "Happy mood. A quick portrait after submitting my final data science assignment at UJI, Spain.",
  },
];

// Projects Tags

export const projectCategories: TProjectCategory[] = [
  {
    displayName: "All",
    slug: ProjectCategory.ALL,
  },
  {
    displayName: "Backend",
    slug: ProjectCategory.BACKEND,
  },
  {
    displayName: "Desktop",
    slug: ProjectCategory.DESKTOP,
  },
  {
    displayName: "DevOps",
    slug: ProjectCategory.DEVOPS,
  },
  {
    displayName: "Frontend",
    slug: ProjectCategory.FRONTEND,
  },
  {
    displayName: "Open Source",
    slug: ProjectCategory.OPEN_SOURCE,
  },

  {
    displayName: "Publications",
    slug: ProjectCategory.PUBLICATIONS,
  },
  {
    displayName: "Volunteering",
    slug: ProjectCategory.VOLUNTEERING,
  },
];
