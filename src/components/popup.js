import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Check if Helmet works as expected with script tags</h1>
      <p>Check console output - you will see $ is undefined</p>
      <Helmet>

        <script
          src="https://apiv2.popupsmart.com/api/Bundle/363398" async></script>"
        />
        <script>
          {`
            console.log('Test', typeof $);
          `}
        </script>
      </Helmet>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
