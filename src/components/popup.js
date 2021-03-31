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
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous"
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
