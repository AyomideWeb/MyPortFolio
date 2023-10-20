import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, live_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(live_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={link} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
        </motion.div>
    )
}

const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Certificates I have Acquired So Far.</p>
                <h2 className={styles.sectionHeadText}>Certifications.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    These certifications reflect my dedication to continuous learning and my unwavering commitment
                     to remaining at the forefront of the dynamic field of software development. 
                     In the rapidly evolving world of technology, staying current with the latest industry standards 
                     and best practices is not just a choice; it's an imperative.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {certifications.map((certification, index) => (
                    <ProjectCard key={`certification-${index}`}
                        index={index}
                        {...certification}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Certifications, "");