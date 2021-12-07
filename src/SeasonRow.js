import React from 'react'
import { TableRow, TableCell} from '@material-ui/core'
import EpisodeRow from './EpisodeRow';
import SelectSwitch from './SelectSwitch';


const SeasonRow = (props) => {
    const collapseable = props.seasons.length > 0 ? true : false;
    const {toggleEpisodeList} = props;
    var value = false;
    const parseDate = (timestamp) => {
        var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
        var date = new Date(timestamp);
        let year = date.getFullYear();
        let month = monthNames[date.getMonth() + 1].substring(0,3);
        let day = date.getDate();
        if (day<10) {
          day = "0" + day;
        }
        return `${month} ${day}, ${year}`;
    }
    const listSeasons = props.seasons.map((season, index) => {
        return(
        <>
            <tr key={season.season_id} className ={`seasonRowTitles srow${props.idRow} closed ${(props.seasons.length - 1) == index ? "lastRow" : ""}`} >
                <td width="12%" align="center" className="col1 collapseable">
                    <div class={`linesSeason linesSeason${season.season_id}`}>
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
                    <div className="tdContent">Season </div>
                </td>
                <td width="8%" className={`col4`}>
                    <div className="tdContent">S{season.season_number}</div>
                </td>
                <td width="8%" className={`col5`}>
                    <div className="tdContent">{season.episode_count}</div>
                </td>
                <td width="24%" className={`col6`}>
                    <div className="tdContent">{parseDate(season.publish_timestamp)}</div>
                </td>
                <td width="20%" className={`col7`}>
                    <SelectSwitch 
                        value = {value}
                        type = {"Season"}
                        id = {season.season_id}
                        parentID = {props.parentID}
                    />
                    <div className="tdContent">All seasons</div>
                </td>
            </tr>
            {season.episodes.map((episode)=>{
                return(
                    <>
                        <tr key={episode.episode_id} className ={`episodeRowTitles eprow${season.season_id} closed ${(season.episodes.length - 1) == index ? "lastRow" : ""}`} >
                            <td  align="center" className={`col1`}>
                            <div class="linesEpisode">
                                <div class="linesEpisode-1">
                                
                                </div>
                            </div>
                                <div className="tdContent">{episode.episode_id}</div>
                            </td>
                            <td  className={`col2`}>
                                <div className="tdContent">{episode.episode_name}</div>
                            </td>
                            <td  className={`col3`}>
                                <div className="tdContent">Episode</div>
                            </td>
                            <td  className={`col4`}>
                                <div className="tdContent">--</div>
                            </td>
                            <td  className={`col5`}>
                                <div className="tdContent">EP{episode.episode_number}</div>
                            </td>
                            <td  className={`col6`}>
                                <div className="tdContent">{episode.publish_timestamp}</div>
                            </td>
                            <td  className={`col7`}>
                                <SelectSwitch 
                                    value = {value}
                                    type = {"Episode"}
                                    id = {episode.episode_id}
                                    parentID = {season.season_id}
                                />
                                <div className="tdContent">Per episode</div>
                            </td>
                        </tr>
                    </>
                )
            })}
        </>
    )});
    return listSeasons;
  };
  
export default SeasonRow;