import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

export default class Pop() {
  return (
    <div className="pop">
      <Helmet>
        <script 
          type="text/javascript" 
          src="https://apiv2.popupsmart.com/api/Bundle/363398" async />
        <script>
          {`
            console.log('Test', typeof $);
          `}
        </script>
      </Helmet>
    </div>
  );
}

export default Pop;