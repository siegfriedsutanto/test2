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
    console.log("clicked to show episode");
    e.target.classList.toggle("open");
    var rowId = e.target.getAttribute("data-id");
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


  render() {
    const listTitles =  require('./titles.json');
    console.log(listTitles);
    // var sum = array1.map(function (num, idx) {
    //     return num + array2[idx];
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
                                }
                            }).map(item=>{
                                return (
                                    item.content_type === "Series" ? 
                                        [<TitleRow
                                          toggleSeasonList = {this.toggleSeasonList}
                                            ID={item.title_id} 
                                            name={item.title_name} 
                                            type={item.content_type}
                                            season={item.content_type === "Series" ? item.seasons.length : "-"}
                                            episode={item.content_type === "Series" ? 111 : "-"}
                                            published={this.parseDate(item.publish_timestamp)}
                                            programmable={"All Seasons"}
                                        />,
                                        <SeasonRow
                                            toggleEpisodeList = {this.toggleEpisodeList}
                                            seasons={item.seasons} idRow={item.title_id}
                                        />
                                    ]
                                        :
                                        <TitleRow
                                        ID={item.title_id} 
                                        name={item.title_name} 
                                        type={item.content_type}
                                        season={item.content_type === "Series" ? item.seasons.length : "-"}
                                        episode={item.content_type === "Series" ? 111 : "-"}
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