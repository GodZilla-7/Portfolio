import React, { useEffect } from "react";

const Eyes = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll('.eye');
    const anchor = document.getElementById('anchor');
    
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    function calculateAngle(mouseX, mouseY, anchorX, anchorY) {
      const deltaX = mouseX - anchorX;
      const deltaY = mouseY - anchorY;
      const radian = Math.atan2(deltaY, deltaX);
      return radian * (180 / Math.PI);
    }

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const angleDeg = calculateAngle(mouseX, mouseY, anchorX, anchorY);

      eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    });
  }, []);

  return (
    <div className="eyes">
      <img id="anchor" src="./bg.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="200px" />
      <img className="eye" width="16px" style={{ borderRadius: "20px", rotate: "170deg", top: "56px", right: "67.5px" }} src="./eye.png" />
      <img className="eye" width="16px" style={{ borderRadius: "20px", rotate: "170deg", top: "50px", right: "104px" }} src="./eye.png" />
    </div>
  );
};

export default Eyes;
