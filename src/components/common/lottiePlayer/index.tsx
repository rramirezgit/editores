'use client'
import Lottie from 'lottie-web'
import { CSSProperties, useEffect, useRef } from 'react'

interface LottiePlayerProps {
  animationData: any
  style?: CSSProperties
  id: string
}

export default function LottiePlayer({
  animationData,
  style,
  id
}: LottiePlayerProps) {
  const refLottie = useRef<any>(null)

  useEffect(() => {
    if (refLottie.current) {
      const instance = Lottie.loadAnimation({
        container: document.getElementById(id) as Element, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice' // Supports the same options as the svg element's preserveAspectRatio property
        } // the animation data,
      })
      // Return clean up function here
      return () => instance.destroy()
    }
  }, [refLottie, animationData, id])

  return <div style={style} ref={refLottie} id={id}></div>
}
