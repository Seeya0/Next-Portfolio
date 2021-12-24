import { RiComputerLine } from 'react-icons/ri'
import { MyProject, MySkill, Service } from './type'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from 'react-icons/bs'


export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend  Development",
        about:
            "<b> HTML</b>,<b>CSS</b>   and <b>React.js</b>を使用してUIに考慮し、レスポンシブなSPAを作成します。Next.jsを使用してSSRやSSGのサイトを作ることもできます！",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "<b>Express </b>や<b>Django </b>などのフレームワークと、apiを使用したバックエンドの構築をすることができます。FirebaseやMogoDBを使ってバックエンドを実装することも可能です。",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "REST APIを用いて<b>django-rest-api</b>  や <b>Node API</b>を使用した開発を行えます。",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "日々コードを書いて技術を高めています。",
    },
    {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
            "<b>Figma</b>を使用してUI/UXのデザインをすることができます。現職ではユーザビリティを考えたアプリの開発をデザイナーと一緒に取り組んでいます。",
    },
    {
        Icon: RiComputerLine,
        title: "Communication Skill",
        about:
            "人事を３年間やっていましたので、人との会話が得意です。情報を社内に伝える際や、ミーティングの場で相手に伝わり易い説明や本質を得たファシリテーションをすることができます。",
    },
]

export const languages: MySkill[] = [
    {
        Icon: BsCircleFill,
        name: "React",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Html/Css",
        level: "90",
    },
    {
        Icon: BsCircleFill,
        name: "TaleWind",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Django",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "50",
    },
]

export const tools: MySkill[] = [
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "Gsuite",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Excel",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Google analytics",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "WordPress",
        level: "45",
    }
];

export const projects: MyProject[] = [
    {
        name: "COVID Tracker",
        description:
            "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        tags: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
            "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        tags: ["React", "firebase", "Framer Motion"],
    },

    {
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
            "Social Media app for developers who can share project,create posts,etc...",
        tags: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },

    {
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        tags: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        tags: ["React", "Django", "Django REST API"],
    },

    {
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        tags: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        tags: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        name: "Football App",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        tags: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
]