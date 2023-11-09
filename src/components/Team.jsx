import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Team =({
    team_name ,
    team_badge,
}) =>

{
return (
    <>
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title >{team_name}</Card.Title>
        <button>I love it!</button>
        <button>For the team</button>
        <button>Statistic</button>
        <button>LineUps</button>
       
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

  </CardGroup>
  </>
);


}
export default Team;