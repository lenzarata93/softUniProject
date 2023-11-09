
import { Link } from 'react-router-dom';



const Team =({
    team_name ,
    team_badge,
    team_id,
}) =>

{
return (
    <>
<div className="card-group" >
  <div className="styles.card">
    <img src={team_badge} className="card-img-top" alt="Card image cap" width="25" height="250"/>
    <div className="card-body">
      <h5 className="card-title">{team_name}</h5>
      <Link to={`/team/${team_id}/vote`} className="btn btn-primary">I love it! </Link>
      <Link to={`/team/${team_id}/team`} className="btn btn-primary">For the team </Link>
      <Link to={`/details/${team_id}`} className="btn btn-primary">Statistic </Link>
      <Link to={`/team/${team_id}/lineups`} className="btn btn-primary">LineUps </Link>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>

  </>
);


}
export default Team;