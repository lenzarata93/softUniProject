import { useEffect, useState } from "react";
import Team from "./Team";
const baseUrl = 'https://apiv3.apifootball.com/?action=get_standings&league_id=';
const apiKey = '2844dc51f890f24149f95bc2b52aec45319e12cc47db66e1e3d30e2ad073cded';
const countryId ='111'

const TeamList = ()=>{
const [teams,setTeams] = useState([]);

useEffect(() => {
    fetch(`${baseUrl}${countryId}&APIkey=${apiKey}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Грешка при извличане на данни: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Отговор от API:', data);
        setTeams(data);
      })
      .catch(error => console.error('Грешка при извличане на отбори:', error));
  }, []);
  
  
    return(
       <>
       {teams.map(team =>(
        <article className="teams" key={team.team_id}>
            <Team {...team} />
        </article>
       ))}
       
       </>
    )};
    export default TeamList;