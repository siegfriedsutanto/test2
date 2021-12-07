import React, {Component} from 'react'
import './css/InventoryManager.css'
import searchIcon from './images/search.png';
import { Typography, Grid, Switch } from '@material-ui/core'
import TitleRow from './TitleRow';
import SeasonRow from './SeasonRow';


class InventoryManager extends Component {
  constructor(props) {
    super(props);
    this.state = {

      searchTerm: '',

    };
    this.toggleSeasonList = this.toggleSeasonList.bind(this);
    this.toggleEpisodeList = this.toggleEpisodeList.bind(this);
  }
  
  componentDidMount() {

  }
  
  updateQuery = (term)=>{
    this.setState({searchTerm: term});
  }

  toggleSeasonList = (e) => {
    e.target.classList.toggle("open");
    var rowId = e.target.getAttribute("data-id");
    Array.from(document.getElementsByClassName('srow'+rowId)).forEach((el) => el.classList.toggle('closed'));
  }

  toggleEpisodeList = (e) => {
    console.log("clicked toggleEpisodeList");
    e.target.classList.toggle("open");
    var rowId = e.target.getAttribute("data-id");
    Array.from(document.getElementsByClassName('eprow'+rowId)).forEach((el) => el.classList.toggle('closed'));
    Array.from(document.getElementsByClassName('linesSeason'+rowId)).forEach((el) => el.classList.toggle('open'));
    
  }
  
  parseDate = (timestamp) => {
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

  countTotalEpisodes = (seasons) => {
    let totalEpisodes = 0;
    seasons.map((season, key) => totalEpisodes+= season.episodes.length);
    return totalEpisodes;
  }


  render() {
    const listTitles =  require('./titles.json');
    console.log(listTitles);

    return (
      <Grid container className="inventoryWrapper" id="layout-content" >
        <div className="moduleName">Inventory Manager</div>
        <div className="inputSearchRow">
            <input className = "inputSearch" type="text" name="name" placeholder="Search for titles in inventory" onChange={(event) => this.updateQuery(event.target.value)}/>
            <div className="iconLoop">
                <img src={searchIcon} />
            </div>
        </div>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="bla">
            <div className ="tableTitles">
                <table width="100%">
                    <tr className='tableHeader'>
                        <th width="7%">ID</th>
                        <th width="25%">Title Name</th>
                        <th width="8%" >Type</th>
                        <th width="8%">Season</th>
                        <th width="8%">Episode</th>
                        <th width="32%">Published</th>
                        <th width="12%" >Programmable</th>
                    </tr>

                    {listTitles.filter(item => {
                                if (this.state.searchTerm === '') {
                                  return item;
                                } else if (item.title_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                                    return item;
                                } else if (item.content_type == 'Series'){
                                  let stat = item.seasons.some((season)=>season.season_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                                  if (stat) return item;
                                                                    
                                  let stat2 = item.seasons.some((season)=>season.episodes.some((episode)=> episode.episode_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
                                  if (stat2) return item;
                                }
                            }).map(item=>{
                                return (
                                    item.content_type === "Series" ? 
                                        [<TitleRow
                                          toggleSeasonList = {this.toggleSeasonList}
                                            ID={item.title_id} 
                                            name={item.title_name} 
                                            type={item.content_type}
                                            season={item.content_type === "Series" ? item.seasons.length : "--"}
                                            episode={this.countTotalEpisodes(item.seasons)}
                                            published={this.parseDate(item.publish_timestamp)}
                                            programmable={"All Seasons"}
                                        />,
                                        <SeasonRow
                                            toggleEpisodeList = {this.toggleEpisodeList}
                                            seasons={item.seasons} 
                                            idRow = {item.title_id}
                                            parentID = {item.title_id}
                                        />
                                    ]
                                        :
                                        <TitleRow
                                        ID={item.title_id} 
                                        name={item.title_name} 
                                        type={item.content_type}
                                        season={"--"}
                                        episode={"--"}
                                        published={this.parseDate(item.publish_timestamp)}
                                        programmable={"Single Movie"}
                                        />
                                    
                                )
                    })}
                </table>
            </div>
            </Grid>
      </Grid>
    );
  }
}

export default InventoryManager;