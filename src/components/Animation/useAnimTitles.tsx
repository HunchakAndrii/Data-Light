import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'

export const useAnimTitles = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const titles = document.querySelectorAll('h2')

    titles.forEach(title => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}
