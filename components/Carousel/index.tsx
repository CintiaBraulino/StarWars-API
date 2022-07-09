import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
import starWars1 from '../../assets/star-wars-1.jpg';
import starWars2 from '../../assets/star-wars-2.jpg';
import starWars3 from '../../assets/star-wars-3.jpg';
import starWars4 from '../../assets/star-wars-4.jpg';
import starWars5 from '../../assets/star-wars-5.jpg';

const CarouselInitial = () => {
    return (
        <div>
        <Carousel showArrows={true} showThumbs={true}>
            <div>
                <Image src={starWars1} alt="image1" width={1600} height={900}/>
                <p className="legend">Que a Força esteja com você!</p>
            </div>
            <div>
                <Image src={starWars2} alt="image1"width={1600} height={900}/>
                <p className="legend">Seus olhos podem te enganar, não confie neles.</p>
            </div>
            <div>
                <Image src={starWars3} alt="image1"width={1600} height={900}/>
                <p className="legend">A capacidade de falar não torna você inteligente.</p>
            </div>
            <div>
                <Image src={starWars4} alt="image1"width={1600} height={900}/>
                <p className="legend">Sua falta de fé é irritante.</p>
            </div>
            <div>
                <Image src={starWars5} alt="image1"width={1600} height={850}/>
                <p className="legend">Seu foco determina sua realidade.</p>
            </div>
        </Carousel>
      </div>
    );
  }
  
  export default CarouselInitial;