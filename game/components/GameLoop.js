import { useEffect, useRef, useState } from "react";
import CustomText from "./CustomText";

export default function GameLoop({ children }) {
  const [time, setTime] = useState(0);
  const lastFrameTime = useRef(performance.now());
  const frameInterval = 250;
  const accumulatedTime = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const update = (now) => {
      const delta = now - lastFrameTime.current;
      lastFrameTime.current = now;
      accumulatedTime.current += delta;


      while (accumulatedTime.current >= frameInterval) {
        setTime((prev) => +(prev + frameInterval).toFixed(2));
        accumulatedTime.current -= frameInterval;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      {children}
      <CustomText>
        Elapsed Time: {(time / 1000).toFixed(2)}s
      </CustomText>
    </>
  );
}