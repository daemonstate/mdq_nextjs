'use client';

import { HeroParallaxDemo } from './HeroParallaxDemo';
import { ParallaxScrollDemo } from './ParallaxScrollDemo';
import { SparklesPreview } from './SparklesPreview';
import { TextRevealCardPreview } from './TextRevealCardPreview';
import { WavyBackgroundDemo } from './WavyBackgroundDemo';

export default function Page() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return (
    <>
      <HeroParallaxDemo />
      <SparklesPreview />
      <WavyBackgroundDemo />
      {!isTouchDevice && <TextRevealCardPreview />}
      <ParallaxScrollDemo />
    </>
  );
}
