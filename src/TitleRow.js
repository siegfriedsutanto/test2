import React from 'react';
import { TableRow, TableCell, Switch} from '@material-ui/core';
import SeasonRow from './SeasonRow';
import SelectSwitch from './SelectSwitch';


const TitleRow = (props) => {
    const collapseable = props.type === "Series" ? true : false;
    const {toggleSeasonList} = props;
    var value = false;
    return (
        <tr key={props.ID} className ="rowTitles">
            <td width="12%" align="center" className={`col1 ${collapseable ? "collapseable" : ""}`}>
                {collapseable ? <div class="collapseImg" onClick={toggleSeasonList} data-id={props.ID}><div class="linesTitle">

                </div></div> : ""}
                <div className="tdContent">{props.ID}</div>
            </td>
            <td width="20%" className={`col2`}>
                <div className="tdContent">{props.name}</div>
            </td>
            <td width="8%" className={`col3`}>
                <div className="tdContent">{props.type}</div>
            </td>
            <td width="8%" className={`col4`}>
                <div className="tdContent">{props.season}</div>
            </td>
            <td width="8%" className={`col5`}>
                <div className="tdContent">{props.episode}</div>
            </td>
            <td width="24%" className={`col6`}>
                <div className="tdContent">{props.published}</div>
            </td>
            <td width="20%" className={`col7`}>
                <SelectSwitch 
                    value = {value}
                />
                <div className="tdContent">{props.programmable}</div>
            </td>
        </tr>
    );
  };
  
export default TitleRow;