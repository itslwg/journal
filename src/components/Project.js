import React from 'react';

import {
    Card
} from 'react-bootstrap';

import { AiOutlineGithub } from 'react-icons/ai';
import { SiPubmed } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

function ProjectCard(props) {
    return (
	<Card
	    className="shadow-lg p-3 mb-5 bg-white rounded"
	    style={{ width: '20rem' }}
	>
	  <Card.Img variant="top" src={props.pic} fluid/>
	  <Card.Body>
	    <Card.Title>{props.title}</Card.Title>
	    <Card.Text>
	      {props.summary}
	    </Card.Text>
	    <Card.Link href={props.githubLink} >
	      {props.githubLink ? <AiOutlineGithub size={50} /> : ""}
	    </Card.Link>
	    <Card.Link href={props.pubmedLink}>
	      {props.pubmedLink ? <SiPubmed size={50} /> : ""}
	    </Card.Link>
	    <Card.Link href={props.websiteLink}>
	      {props.websiteLink ? <BsGlobe size={50} /> : ""}
	    </Card.Link>
	  </Card.Body>
	</Card>
    );
}

export default ProjectCard;
