import React, { useEffect, useState } from "react";

function Profile() {
  const languages = ["Hello", "Hola", "Bonjour", "नमस्ते", "こんにちは", "你好", "안녕하세요", "Привет", "Ciao", "مرحبا"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-3 mt-2 mb-7 text-center border-bottom">
      <img src="./profile/i.png" alt="Circular Image" className="w-[160px] h-[160px] mb-4 rounded-full overflow-hidden object-cover border-1" />
      <div class="display-5 font-semibold mb-2 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
      {languages[index]}
</div>
      <h1 className="display-6 mb-2 font-bold">I am Gaurav Shukla</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-7">A second-year CSE student at NIT Bhopal and a passionate web developer, constantly exploring new technologies to create impactful websites.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3 mb-5"><a target="_blank" href="https://drive.google.com/file/d/1lGvJQfGWsIReMncgV4kiE8JSciQJNuPv/view?pli=1">Download Resume</a>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Profile;
