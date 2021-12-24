import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animation"
import Bar from "../components/Bar"
import { languages, tools } from "../data"

const resume = () => {
    return (
        <motion.div
            className="px-6 py-2"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                >
                    <h5 className="my-3 text-2xl font-bold">学歴</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">英文学科</h5>
                        <p className="font-semibold">日本大学, University of Kent(2014-2018)</p>
                        <p className="my-3">海外の大学に留学をしていたため、ビジネスレベルの英語を使えます</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                >
                    <h5 className="my-3 text-2xl font-bold">経歴</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                        <p className="font-semibold">HCS (2021 - on)</p>
                        <p className="my-3">React.jsを主に使用してSPAの開発をしています。</p>
                    </div>
                </motion.div>
            </div>

            {/* Language and tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {
                            tools.map(tool => <Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
