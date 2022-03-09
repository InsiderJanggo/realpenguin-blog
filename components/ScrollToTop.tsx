import { FC, useEffect, useState } from "react";
import styles from '@/styles/ScrollToTop.module.css'
import Image from "next/image";

const ScrollToTop: FC = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };
    
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    

    return(
        <div className={styles.scroll_to_top}>
        {isVisible && 
          <div onClick={scrollToTop}>
             <Image src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png'  width={70} height={73} alt='Go to top'/>
          </div>}
      </div>
    )
}   

export default ScrollToTop;