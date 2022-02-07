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
            "<b> HTML</b>,<b>CSS</b>、<b>React.js</b>を使用してレスポンシブなSPAを作成します。Next.jsを用いてSSRやSSGのサイト作成も可能です。",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "<b>Express </b>や<b>Django </b>などのフレームワークと、apiを使用したバックエンドの構築をすることができます。FirebaseやMogoDBも使用できます。",
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
        about: "日々個人でコードを書いて開発をして技術を高めています。",
    },
    {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
            "現職ではユーザビリティを考えたアプリやサイトの開発をFigmaを使用してデザイナーと一緒に取り組んでいます。",
    },
    {
        Icon: RiComputerLine,
        title: "Communication Skill",
        about:
            "３年間の人事経験から、情報を社内に伝える際や、ミーティングの場で伝わり易い説明や本質を得たファシリテーションができます。",
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
        name: "JavaScript",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Html",
        level: "90",
    },
    {
        Icon: BsCircleFill,
        name: "CSS",
        level: "90",
    },
    {
        Icon: BsCircleFill,
        name: "TypeScript",
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
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "TaleWind",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "BootStrap",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Material UI",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "WordPress",
        level: "45",
    }
];

export const projects: MyProject[] = [
    {
        name: "Moment",
        image_path: "/images/moment.png",
        deployed_url: "https://moment-with-you.netlify.app/login",
        github_url: "https://github.com/Seeya0/Moment_SNSapp",
        category: ["react", "node", "express"],
        description:
            "写真をシェアして瞬間をみんなで共有するアプリです",
        tags: ["React", "API", "Sanity", "TailWind", "Express", "SNS"],
    },
    {
        name: "Film DB",
        image_path: "/images/filmdb.png",
        deployed_url: "https://film-db-next.vercel.app/",
        github_url: "https://github.com/Seeya0/FilmDB_Next",
        category: ["Next", "node"],
        description:
            "映画やドラマをカテゴリー別に閲覧することができます。検索をすることも可能です。",
        tags: ["Next", "API", "Sass", "Material UI", "Express"],
    },
    {
        name: "Vegi Container",
        image_path: "/images/vegicontainer.png",
        deployed_url: "https://vegicontainer-demo.herokuapp.com/#/",
        github_url: "https://github.com/Seeya0/VegiContainer",
        category: ["react", "node"],
        description:
            "傷がついたB級品の野菜や果物を販売するECサイトです",
        tags: ["React", "API", "Redux", "Bootstrap", "Django"],
    },
]