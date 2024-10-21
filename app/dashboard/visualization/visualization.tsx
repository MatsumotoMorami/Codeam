import { motion } from "framer-motion";

export default function VisualizationComponentSet(expand) {
    return (
        <motion.div animate={{
            paddingLeft: expand ? '300px' : '100px',
            paddingRight: '3vw',
            paddingTop: '10vh'
        }} transition={{ duration: 0.2 }}>

        </motion.div>
    )
}