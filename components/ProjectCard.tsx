import { motion } from "framer-motion"
import Image from "next/image"
import { FunctionComponent } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { fadeInUp, stagger } from "../animation"
import { MyProject } from "../type"

const ProjectCard: FunctionComponent<{
    project: MyProject, showDetail: string | null, setShowDetail: (name: string | null) => void
}> = ({ project: {
    name, image_path, deployed_url, description, github_url, tags
}, showDetail, setShowDetail }) => {

        return (
            <div>
                <Image
                    src={image_path}
                    alt={name}
                    className="cursor-pointer"
                    onClick={() => setShowDetail(name)}
                    width="300"
                    height="150"
                    layout="responsive"
                />
                <p className="my-2 text-center">{name}</p>

                {showDetail === name && (
                    <div
                        className="grid md:grid-cols-2 p-2 md:p-10 rounded-lg absolute top-0 left-0 z-10 w-full h-auto gap-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100"
                    >
                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="border-4 border-gray-100"
                            >
                                <Image
                                    src={image_path}
                                    alt={name}
                                    layout="responsive"
                                    width="300"
                                    height="150"
                                />
                            </motion.div>

                            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
                                <a
                                    href={github_url}
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                >
                                    <AiFillGithub /> <span>Github</span>
                                </a>
                                <a
                                    href={deployed_url}
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                >
                                    <AiFillProject /> <span>Project</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
                            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>{description}</motion.h3>
                            <motion.div variants={fadeInUp}>
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex flex-wrap justify-center py-1 mx-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>

                        <button onClick={() => setShowDetail(null)}
                            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                        >
                            <MdClose size={30} />
                        </button>
                    </div>
                )

                }
            </div>
        )
    }

export default ProjectCard
