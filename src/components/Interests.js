import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

function Interests() {
  return (
    <div className='skills'>
        <h2 className='h2'>Centre d'intérêts</h2>
        <ul>
            <li><SportsEsportsIcon className='interests' style={{ fontSize: 40 }} />Jeux Vidéo </li>
            <li><LiveTvIcon className='interests' style={{ fontSize: 40 }} />Animés </li>
            <li><TravelExploreIcon className='interests' style={{ fontSize: 40 }} />Voyages </li>
            <li><SportsGymnasticsIcon className='interests' style={{ fontSize: 40 }} />Sports </li>
        </ul>
    </div>
  )
}

export default Interests