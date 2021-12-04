import React from 'react';

import '../App.css';
import './Projects.css';

import { AiOutlineGithub } from 'react-icons/ai';
import { SiPubmed } from 'react-icons/si';

import {
    Card,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Projects() {
    return (
	<div className="Projects-base">
	  <header className="App-header">
	    <p>
	      <span>Projects</span>
	    </p>
	  </header>
	  <Card
	      className="shadow-lg p-3 mb-5 bg-white rounded"
	      style={{ width: '18rem' }}
	  >
	    <Card.Body>
	      <Card.Title>
		Mortality Prediction
	      </Card.Title>
	      <Card.Text>
		Title: Comparison of emergency department trauma triage performance of clinicians and clinical prediction models: a cohort study in India
	      </Card.Text>
	      <Card.Footer>
		<a
		    href="https://github.com/itslwg/prediction_models_vs_clinicians"
		    target='_blank'
		    rel="noopener"
		>
		  <AiOutlineGithub/>
		</a>
		<a
		    href="https://pubmed.ncbi.nlm.nih.gov/32075827/"
		    target='_blank'
		    rel="noopener"
		>
		  <SiPubmed/>
		</a>
	      </Card.Footer>
	    </Card.Body>
	  </Card>
	</div>
    );
}

export default Projects;
