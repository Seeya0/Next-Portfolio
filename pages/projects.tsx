import { motion } from 'framer-motion';
import { useState } from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animation';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavBar from '../components/ProjectsNavBar';
import { projects as projectsData } from '../data'
import { Category } from '../type';

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");
    const [showDetail, setShowDetail] = useState<string | null>(null);

    const handleFilterCategory = (category: Category) => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const filterCategory = projectsData.filter((project) => project.category.includes(category));
        setProjects(filterCategory);
        setActive(category);
    }

    return (
        <motion.div
            className="px-5 py-2 overflow-y-scroll"
            style={{ height: "65vh" }}
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ProjectsNavBar handleFilterCategory={handleFilterCategory} active={active} />

            <motion.div
                className="grid grid-cols-12 gap-4 my-3 relative"
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                {
                    projects.map(project => (
                        <motion.div
                            className="cols-span-12 p-2 sm:cols-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg"
                            variants={fadeInUp}
                            key={project.name}
                        >
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects
