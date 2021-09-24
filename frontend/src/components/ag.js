import React, { Component } from 'react'
import { connect } from "react-redux";
import * as _ from 'lodash';
import Grid from "./grid";
import {get,post} from "axios";

class UsersView extends Component {
  state = {
    loading: false,
    isSelectedRowData: "",
    isShow: false,
    locked: false,
    dataFixed:[],
    columnDefs: [

      {
        headerName: "Athlete",
        field: "athlete",
        sortable: true,
        filter: false,
        filterParams: {
          filterOptions: ['equals', 'lessThan', 'greaterThan'],
        },
        flex: 1,
      },
      {
        headerName: "Date",
        field: "date",
        sortable: true,

        filter: false,
        resizable: true,
        flex: 1,

      },
      {
        headerName: "Age",
        field: "age",
        sortable: true,
        filter: false,
        resizable: true,
        flex: 1,

      },
      {
        headerName: "Sport",
        field: "sport",
        sortable: true,
        filter: false,
        resizable: false,
        flex: 1,

      },

    ],
    rowData: [],
    searchText: '',
  };
  usersPayload = {};

  async componentDidMount() {
    debugger
 
    this.getData();
  }    



   
  

  async  getData() {

    try {
      let dataList = await fetch("https://www.ag-grid.com/example-assets/olympic-winners.json").then(response =>  response.json()) 
      this.setState({rowData:dataList})
      console.log("dataaa",this.state.rowData)
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }
  




  render() {

    const { loading } = this.state;
    const { isShow } = this.state;

    return (

      <>

        <div className="shadow_white_box full-box mt-0">
          <div className="clients_grid">
            <Grid
              //  frameworkComponent={this.frameworkComponents}
              columnDefs={this.state.columnDefs}
               rowData={this.state.rowData}
              onGridReady={this.onGridReady}
              height='600px'


            >

            </Grid>
          </div>

        </div>

      </>
    )
  }
}

const mapStateToProps = ( { }) => ({  });
export default connect(mapStateToProps, {  })(UsersView);