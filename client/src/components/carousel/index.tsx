import { CardAuto } from "../../components/card";
import { Carousel } from "../../pages/Home/styles";
import swipeRight from "../../assets/swipeRight.png"
import swipeLeft from "../../assets/swipeLeft.png"
import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../../services";

export const CarouselHome = ({data}: any) => {
    const carousel = useRef<any>(null)

    const handleLeftClick = (event:any) => {
        event.preventDefault()
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (event:any) => {
        event.preventDefault()
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

  return (
    <div className="divCarousel">
        <button className="swipe1" onClick={handleLeftClick}><img src={swipeLeft} alt="scroll left"/></button>
        <Carousel ref={carousel} >
            {data.map((item: any) => {
                return <CardAuto item={item}/>
            })}
        </Carousel>
        <button className="swipe2" onClick={handleRightClick}><img className="swipe" src={swipeRight} alt="scroll right"/></button>
    </div>
  )
};
  
  
