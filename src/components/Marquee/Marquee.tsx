import './Marquee.scss'
import FastMarquee from 'react-fast-marquee'

export const Marquee = () => {
  const marqueeImages = [
    '/images/marquee/marquee-1.svg',
    '/images/marquee/marquee-2.svg',
    '/images/marquee/marquee-3.svg',
    '/images/marquee/marquee-4.svg',
    '/images/marquee/marquee-5.svg',
  ];

  return (
      <FastMarquee 
        className="marquee" 
        speed={80} 
        pauseOnHover={true}
        gradient={true} 
        gradientColor={'#172224'} 
        gradientWidth={'15px'}>
          {marqueeImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`marquee-img-${index}`}
              className="marquee__img"
            />
          ))}
      </FastMarquee>
  )
}
