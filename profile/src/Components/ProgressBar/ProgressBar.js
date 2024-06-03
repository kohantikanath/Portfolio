import { useState, useEffect, useRef } from "react";
import "./ProgressBar.css";

function ProgressBar({ percent, name }) {
  const [currPer, setCurrPer] = useState(0);
  const pRef = useRef(null);

  useEffect(() => {
    let interval;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            interval = setInterval(() => {
              setCurrPer((prev) => {
                const newValue = prev < percent ? prev + 1 : percent;
                if (pRef.current) {
                  pRef.current.style.background = `conic-gradient(#ba2ffb ${
                    3.6 * newValue
                  }deg, rgb(240, 240, 240) 0deg)`;
                }
                return newValue;
              });
            }, 30);
            observer.unobserve(pRef.current); // Stop observing once the animation starts
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (pRef.current) {
      observer.observe(pRef.current);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (pRef.current) observer.unobserve(pRef.current);
    };
  }, [percent]);

  return (
    <div className="cont">
      <div className="progress" ref={pRef}>
        <div className="txt">{`${currPer}%`}</div>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default ProgressBar;
