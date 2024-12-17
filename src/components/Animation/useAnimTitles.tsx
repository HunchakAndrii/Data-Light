import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

export const useAnimTitles = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const titles = document.querySelectorAll('h2')

    titles.forEach(title => {
      if (title.classList.contains('not-anim')) {
        return;
      }

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'bottom 20%',
          // markers: true,
          scrub: true,
        },
      })  

      tl.fromTo(
        title,
        { opacity: 0, x: -100, rotation: -10 },
        { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: 'power3.out' }
      )
    })
  }, {})
}
