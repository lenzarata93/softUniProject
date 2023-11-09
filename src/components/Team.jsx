import { Button } from 'bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


const Team =({
    team_name ,
    team_badge,
    team_id,
}) =>

{
return (
    <>
<div class="card-group">
  <div class="card">
    <img src="holder.js/100px160" class="card-img-top" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{team_name}</h5>
      <Link to={`/team/${team_id}/vote`} class="btn btn-primary">I love it! </Link>
      <Link to={`/team/${team_id}/team`} class="btn btn-primary">For the team </Link>
      <Link to={`/team/${team_id}/stat`} class="btn btn-primary">Statistic </Link>
      <Link to={`/team/${team_id}/lineups`} class="btn btn-primary">LineUps </Link>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>

  </>
);


}
export default Team;