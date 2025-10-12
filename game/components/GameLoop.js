import { useEffect, useRef, useState } from "react";
import CustomText from "./CustomText";

export default function GameLoop({ children }) {
  const [time, setTime] = useState(0);
  const lastFrameTime = useRef(performance.now());
  const accumulator = useRef(0);

  useEffect(() => {
    let animationFrameId;
    const frameInterval = 1000 / 4;

    const update = (now) => {
      const delta = now - lastFrameTime.current;
      lastFrameTime.current = now;
      accumulator.current += delta;

      if (accumulator.current >= frameInterval) {
        setTime((prev) => prev + accumulator.current);
        accumulator.current = 0;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      {children}
      <CustomText>Elapsed Time: {(time / 1000).toFixed(2)}s</CustomText>
    </>
  );
}