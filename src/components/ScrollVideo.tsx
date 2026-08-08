import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';

const SCROLL_VIDEO_SRC = '/video/scroll.mp4';
const SCROLL_LENGTH_VH = 300;

export function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const video = videoRef.current;
    if (!video || !duration || reduceMotion) return;
    video.currentTime = Math.min(duration, Math.max(0, latest * duration));
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    const unlock = () => {
      video.play().then(() => video.pause()).catch(() => {});
    };
    if (video.readyState >= 1) unlock();
    else video.addEventListener('loadedmetadata', unlock, { once: true });
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section className="border-b border-ink-line">
        <video src={SCROLL_VIDEO_SRC} muted loop playsInline autoPlay className="h-[70vh] w-full object-cover" />
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative border-b border-ink-line" style={{ height: `${SCROLL_LENGTH_VH}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={SCROLL_VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>
    </section>
  );
}