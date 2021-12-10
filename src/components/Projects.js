import React from 'react';

import '../App.css';
import './Projects.css';

import ProjectCard from './Project.js';

import {
    Row,
    Col,
    Container
} from 'react-bootstrap';

function Projects () {

    const keyTakeawaysTitco = [
	"Similar discrimination and reclassification",
	""
    ]
    
    return (
	<div className="Projects-base">
	  <header className="App-header">
	    <p>
	      <span>Projects</span>
	    </p>
	  </header>
	  <Container>
	    <Row>
	      <Col sm>
		<ProjectCard
		    title="Predicting Mortality"
		    summary =
		    "
		    Comparison of triage performance of Revised Trauma Score, GAP score, Gerdin et al. 
		    model, KTS score. with clinicians.	  
		"
		    pic="titco.png"
		    githubLink="https://github.com/itslwg/prediction_models_vs_clinicians"
		    pubmedLink="https://pubmed.ncbi.nlm.nih.gov/32075827/" 
		    websiteLink="https://www.titco.org/"
		    keyTakeaways={keyTakeawaysTitco}
		/>
	      </Col>
	      <Col sm>
		<ProjectCard
		    title="Predicting Default"
		    summary =
		    "
		    Unsupervised learning for dimensionality reduction of financial statement 
		    information for predicting default.
		"
		    pic="Froda.jpeg"
		    githubLink="https://github.com/itslwg/fsdr"
		    websiteLink="https://www.titco.org/"
		    keyTakeaways={keyTakeawaysTitco}
		/>
	      </Col>
	      <Col sm>
		<ProjectCard
		    title="Forecasting Avalanches"
		    summary =
		    "
		    Replicating risk assessments made by forecasting experts using 
		    deep learning methods for ordinal regression. 
		"
		    pic="sdsc.png"
		githubLink="https://github.com/itslwg/oraf"
		websiteLink="https://datascience.ch/project/deapsnow-improving-snow-avalanche-forecasting-by-data-driven-automated-predictions/"
		    keyTakeaways={keyTakeawaysTitco}
		/>
	      </Col>
	    </Row>
	  </Container>
	</div>
    );
}

export default Projects;
