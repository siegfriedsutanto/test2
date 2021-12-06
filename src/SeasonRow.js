import React from 'react'
import { TableRow, TableCell} from '@material-ui/core'
import EpisodeRow from './EpisodeRow';


const SeasonRow = (props) => {
    const collapseable = props.seasons.length > 0 ? true : false;
    const {toggleEpisodeList} = props;
    const listSeasons = props.seasons.map((season, index) => (
        <tr key={season.season_id} className ={`seasonRowTitles srow${props.idRow} closed ${(props.seasons.length - 1) == index ? "lastRow" : ""}`} >
            <td width="12%" align="center" className="col1 collapseable">
                <div class="linesSeason">
                    <div class="linesSeason-1">
                    
                    </div>
                    <div class="linesSeason-2">
                    
                    </div>
                </div>
                {collapseable ? <div class="collapsePlusMinImg" onClick={toggleEpisodeList} data-id={season.season_id}></div> : ""}
                <div className="tdContent">{season.season_id}</div>
            </td>
            <td width="20%" className={`col2`}>
                <div className="tdContent">{season.season_name}</div>
            </td>
            <td width="8%" className={`col3`}>
                <div className="tdContent">Season</div>
            </td>
            <td width="8%" className={`col4`}>
                <div className="tdContent">S{season.season_number}</div>
            </td>
            <td width="8%" className={`col5`}>
                <div className="tdContent">{season.episode_count}</div>
            </td>
            <td width="24%" className={`col6`}>
                <div className="tdContent">{season.publish_timestamp}</div>
            </td>
            <td width="20%" className={`col7`}>
                <div className="tdContent">All seasons</div>
            </td>
        </tr>,
        <EpisodeRow 
            episodes = {season.episodes}
        />
    ));
    return listSeasons;
  };
  
export default SeasonRow;