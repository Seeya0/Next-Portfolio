import { useTheme } from "next-themes"
import Image from "next/image";
import topIcon from "../public/images/DSC06785.jpg"
import { GiTie } from 'react-icons/gi'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useState } from "react";

const SideBar = () => {
    const { theme, setTheme } = useTheme();
    const [sitelanguage, setSiteLanguage] = useState("English")

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const changeSiteLanguage = () => {
        setSiteLanguage(sitelanguage === "English" ? "Japanese" : "English")
    }

    return (
        <div>
            <Image
                src={topIcon}
                alt="avatar"
                height="128"
                width="128"
                className="w-46 h-32 mx-auto rounded-full"
            />

            <h3 className="my-4 text-3xl font-medium tracking-wide">
                Seiya Yoshioka
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
                フロントエンジニア
            </p>
            <a
                className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center"
                href="public/images/職務経歴書_吉岡誠也_株式会社ヴァージニア御中.pdf"
                download="name"
            >
                <GiTie className="w-6 h-6" />履歴書のダウンロード
            </a>

            {/* SNS icons */}
            <div className="flex justify-around w-9/12 my-5 text-beige mx-auto md:w-full ">
                <a href="https://github.com/Seeya0">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100007774248668">
                    <AiFillFacebook className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/seiya_panda/">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer" />
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
                className="bg-gradient-to-r from-beige to-lightGreen w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none"
                onClick={() => window.open("mailto:vinlandtorfin@gmail.com")}
            >
                Email me
            </button>
            <button
                className="bg-gradient-to-r from-beige to-lightGreen w-8/12 rounded-full py-2 px-5 text-white my-2"
                onClick={changeTheme}
            >
                {theme === "light" ? <span>Dark theme</span> : <span>Light theme</span>}
            </button>
            <button
                className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
                onClick={changeSiteLanguage}
            >
                {sitelanguage === "English" ? <span>Japanese</span> : <span>English</span>}
            </button>
        </div>
    )
}

export default SideBar
