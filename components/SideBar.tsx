import { useTheme } from "next-themes"
import Image from "next/image";
import topIcon from "../public/images/avatar-icon.png"
import { GiTie } from 'react-icons/gi'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const SideBar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <Image
                src={topIcon}
                alt="avatar"
                height="128"
                width="128"
                className="w-32 h-32 mx-auto rounded-full"
            />

            <h3 className="my-4 text-3xl font-medium tracking-wide">
                Seiya Yoshioka
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
                Web Developer
            </p>
            <a
                className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center"
                href="addresumefilelater"
                download="name"
            >
                <GiTie className="w-6 h-6" />Download Resume
            </a>

            {/* SNS icons */}
            <div className="flex justify-around w-9/12 my-5 text-green mx-auto md:w-full ">
                <a href="">
                    <AiFillFacebook className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            {/* Info */}
            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
                style={{ marginRight: "-1rem", marginLeft: "-1rem" }}
            >
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Tokyo, Japan</span>
                </div>
                <p className="my-2">vinlandtorfin@gmail.com</p>
            </div>

            {/* Email and Theme */}
            <button
                className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none"
                onClick={() => window.open("mailto:vinlandtorfin@gmail.com")}
            >
                Email me
            </button>
            <button
                className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
                onClick={changeTheme}
            >
                {theme === "light" ? <span>Change Dark theme</span> : <span>Change Light theme</span>}
            </button>
        </div>
    )
}

export default SideBar
