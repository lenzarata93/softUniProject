import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'apiv3.apifootball.com/?action=get_teams'
const key = '2844dc51f890f24149f95bc2b52aec45319e12cc47db66e1e3d30e2ad073cded';

const TeamStat = ()=>{
    const [teamInfo,setTeamInfo] = useState({});
    const {id} =useParams();
    useEffect(()=>{
        fetch(`${baseUrl}${key}${id}`)
        .then(res =>res.json())
        .then(data =>console.log(data));

    },[id]);
    return(
<h1>{teamInfo.team_name}</h1>
    );
}

export default TeamStat;