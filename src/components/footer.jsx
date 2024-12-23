import React from "react";

function Footer(){

    const getCurrentDay = () => {
        const today = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[today.getDay()];
      };
    return(
<div class="container mb-5">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

    <div class="mb-3 mb-md-0 text-body-secondary ">Have a Good<div class="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"> {getCurrentDay()}
</div>
</div>
  </footer>
</div>
    );
}

export default Footer;