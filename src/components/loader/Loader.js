import React from "react";
import ReactDOM from "react-dom";

import { Audio, Puff, Rings, TailSpin, Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="row text-center p-0 m-0 ">
      <div className="col-sm-12 text-center d-flex justify-content-center m-0 p-0  ">
        <Rings
          className="mx-auto text-center "
          style={{ textAlign: "center" }}
          height="250px"
          width="250px"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </div>
  );
}

export default Loader;
