import { motion } from "framer-motion"
import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { routeAnimation, stagger, fadeInUp } from '../animation'
import ServiceCard from "../components/ServiceCard"
import { services } from "../data"

const index = ({ endpoint }: { endpoint: any }) => {
    return (
        <motion.div
            className="flex flex-col px-6 pt-1 flex-grow"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h5 className="my-3 font-medium">
                ヘルスケア企業でフロントエンドの開発に携わっています。
                仕事ではReact.js, Html/Cssを主に使用。Webアプリやサイトを作っています。
                個人開発ではNext.js、React.jsを使用。node.jsでバックエンドの開発も行っています。
            </h5>
            <div
                className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow"
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="grid gap-6 md:grid-cols-2"
                >
                    {services.map(service => (
                        <motion.div
                            variants={fadeInUp}
                            key={service.title}
                            className="bg-gray-200 dark:bg-dark-200 rounded-lg col-span-2 lg:col-span-1"
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default index


// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//     //const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//     //const data = await res.json()

//     return {

//         props: {
//             endpoint: process.env.VERCEL_URL
//         }
//     }
// }

export const getStaticProps = async (context: GetStaticPropsContext) => {
    // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
    // const data = await res.json()

    return {

        props: {
            endpoint: process.env.VERCEL_URL
        }
    }
}