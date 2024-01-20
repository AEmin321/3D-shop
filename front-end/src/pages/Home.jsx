import { useSnapshot } from "valtio"
import { motion, AnimatePresence } from "framer-motion"
import state from '../store'
import { CustomButton } from "../components"
import {
    slideAnimation,
    headTextAnimation,
    headContentAnimation,
    headContainerAnimation
} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.isHome && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img className="w-16 h-16 object-contain" src="./cslogo.png" alt="logo" />
                </motion.header>
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className="head-text">
                        Unleash Your Style,<br className="xl:block hidden" /> Your Way.
                        </h1>
                    </motion.div>
                    <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                        <p className="max-w-md font-normal text-gray-600">Custom Style is your <strong>creative playground for personalized expression</strong>. Explore endless possibilities as you design and customize your own shirts, mugs, and more. </p>
                        <CustomButton buttonText="Customize Now" type="filled" customStyle="px-5 py-3 w-fit font-bold text-sm" handleClick={()=>state.isHome=false}/>
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home