import React, { useRef } from "react";
import { gsap } from "gsap";

function Skillcard(props) {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 25;
    const rotateX = ((centerY - y) / centerY) * 25;

    gsap.to(cardRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="col"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        className="card shadow-sm flex flex-col items-center py-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img className="h-20 fit-content" src={props.img} alt={props.title} />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
