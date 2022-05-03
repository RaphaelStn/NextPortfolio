import { Image, Button } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import Link  from "next/link"
import {useRouter} from 'next/router'
import navPosts from '../public/locales/navPosts.json'


const LocaleToggleButton = () => {
    const {locale, asPath } = useRouter()
    let l = JSON.stringify(navPosts.lang.filter(p => p.locale === locale).map((langs) => {
        return langs.content
        }))
    l = l.replace("[", "")
    l = l.replace("]", "")
    l = l.replaceAll(`"`, "")

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div 
            style={{display: 'inline-block'}}
            initial={{y: -20, opacity:0}}
            animate={{y:0, opacity: 1}}
            exit={{y:20, opacity:0}}
            transition={{duration:0.2}}
            >
                <Link href={asPath} locale={l}>
                    <Button
                    width="40px"
                    height="40px"
                    mr="10px"
                    >
                        <Image 
                        src={`/images/${l}.png`}
                        maxWidth="20px"
                        wrap="wrap"
                        align="center"
                        display="inline-block"
                        />
                    </Button> 
                </Link>
            </motion.div>
        </AnimatePresence>
    )
}

export default LocaleToggleButton