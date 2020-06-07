import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = () => {
    return <div>
        <img src={preloader} alt="loading" style={{ height: '100px' }}/>
    </div>
};

export default Preloader;