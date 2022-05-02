import { IconButton, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import Link  from "next/link"
import {useRouter} from 'next/router'

const LocaleToggleButton = () => {
    const {locale, locales, asPath } = useRouter()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div 
            style={{display: 'inline-block'}}
            key={useColorModeValue('light', 'dark')}
            initial={{y: -20, opacity:0}}
            animate={{y:0, opacity: 1}}
            exit={{y:20, opacity:0}}
            transition={{duration:0.2}}
            >
            {locales.map((l, i) => {
                return (
                <span key={i}>
                    <Link href={asPath} locale={l}>
                    {l}
                    </Link>
                </span>
                );
            })}
            </motion.div>
        </AnimatePresence>
    )
}

export default LocaleToggleButton