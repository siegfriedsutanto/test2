import React from 'react'
import { TableRow, TableCell} from '@material-ui/core'


const EpisodeRow = (props) => {
    const listEpisodes = props.episodes.map((episode, index) => (
        <tr key={episode.episode_id} className ="episodeRowTitles" >
            <td  align="center" className="collapseable">
                {episode.episode_id}
            </td>
            <td  className={`panel-list-text`}>
                {episode.episode_name}
            </td>
            <td  className={`panel-list-values`}>
                Episode
            </td>
            <td  className={`panel-list-values`}>
                --
            </td>
            <td  className={`panel-list-values`}>
                EP{episode.episode_number}
            </td>
            <td  className={`panel-list-values`}>
                {episode.publish_timestamp}
            </td>
            <td  className={`panel-list-values`}>
                Per episode
            </td>
        </tr>
        
    ));
    return listEpisodes;
  };
  
export default EpisodeRow;