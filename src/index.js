import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import reportWebVitals from './reportWebVitals'

import App from './App';
import Projects from './components/Projects';
import Concepts from './components/Concepts';
import NavigationBar from './components/NavigationBar';

ReactDOM.render(
    <React.StrictMode>
      <div className="main">
	<BrowserRouter basename={process.env.PUBLIC_URL}>
	  <NavigationBar/>
	  <Routes>
	    <Route path="/" element={<App />} />
	    <Route path="concepts" element={<Concepts />} />
	    <Route path="projects" element={<Projects />} />
	    <Route path="projects/gh" component={() => { 
		window.location.href = "https://github.com/itslwg/prediction_models_vs_clinicians"; 
		return null;
	    }}/>
	  </Routes>
	</BrowserRouter>
      </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
