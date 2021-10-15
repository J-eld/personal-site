import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import styles from 'styles/ProjectImageCarousel.module.css'
import clsx from 'clsx'
import Slider from 'react-slick'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function ProjectImageCarousel({ folder, numberOfPhotos }) {
    const [photos, setPhotos] = useState([])
    const [activePhoto, setActivePhoto] = useState(0)

    const slider = useRef(null);

    const lockVerticalScrollWhenHorizontalSwiping = (direction) => {
        const isHorizontal = direction !== 'vertical';
        if (isHorizontal) {
        // Will be released when the gesture finish even if the slide has no changed.
        disableBodyScroll(slider.current);
        }
    };  

    const releaseBodyScroll = () => enableBodyScroll(slider.current);

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div>
            <img
            className={clsx(styles.arrows, styles.nextArrow)}
            onClick={onClick}
            src="/rightArrow.svg"
            />
            </div>
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div>
            <img
            className={clsx(styles.arrows, styles.prevArrow)}
            onClick={onClick}
            src="/leftArrow.svg"
            />
            </div>
        );
    }

    useEffect(() => {
        let photoArray = []
        for (let i = 1; i <= numberOfPhotos; i++) {
            photoArray.push('/' + folder + '/photo' + i + '.png')
        }
        setPhotos(photoArray)
    }, [])

    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidestoScroll: numberOfPhotos,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <div className={styles.carouselRoot} onTouchEnd={releaseBodyScroll}>
            <Slider ref={slider} swipeEvent={lockVerticalScrollWhenHorizontalSwiping} enableVerticalScroll {...settings} className={styles.carousel}>
               {photos.map((photo, index) => (
                   <Image priority key={index} src={photo} width={1920} height={1080} />
               ))}
            </Slider>
        </div>
    )
}
