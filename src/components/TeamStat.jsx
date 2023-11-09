import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'https://apiv3.apifootball.com/?action=get_teams'
const key = '2844dc51f890f24149f95bc2b52aec45319e12cc47db66e1e3d30e2ad073cded';

const TeamStat = ()=>{
    const [teamInfo,setTeamInfo] = useState({});
    const [logoUrl, setLogoUrl] = useState('')
    const [stadion,setStadion] = useState({})
    const {id} =useParams();
    useEffect(() => {
        fetch(`${baseUrl}&APIkey=${key}&team_id=${id}`)
            .then(res => res.json())
            .then(data => {
                setTeamInfo(data[0]);
                setStadion(data[0].venue)
                setLogoUrl(data[0].team_badge);
            });

    }, [id]);
    return(
<div>
<h1>{teamInfo.team_name}</h1>
            <p>Founded: {teamInfo.team_founded}</p>
            <p>Country: {teamInfo.team_country}</p>
            <p>Town: {stadion.venue_city}</p>
            <p>Stadion: {stadion.venue_name}</p>
            <p>Capacity: {stadion.venue_capacity}</p>
            <p>Adress : {stadion.venue_address}</p>
         
            {logoUrl && <img src={logoUrl} alt="Team Logo" />}
</div>
    );
}

export default TeamStat;