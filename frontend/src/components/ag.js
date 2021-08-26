'use strict';
import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from "react-redux";
import { getProducts } from "../store/actions/productsA";

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
        console.log(data)
      params.api.setRowData(data.slice(0, 50));
    };

    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  };

  
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <div className="example-wrapper" style={{ width: '100%', height: '400px' }}>

        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            defaultColDef={{
              flex: 1,
              minWidth: 100,
              sortable: true,
              filter: true,
            }}
            autoGroupColumnDef={{ minWidth: 200 }}
            groupDefaultExpanded={1}
            onGridReady={onGridReady}
            rowData={rowData}
          >
            <AgGridColumn field="country" rowGroup={true} hide={true} />
            <AgGridColumn field="athlete" minWidth={180} />
            <AgGridColumn field="age" />
            <AgGridColumn field="year" />
            <AgGridColumn field="date" minWidth={150} />
            <AgGridColumn field="sport" minWidth={150} />
            <AgGridColumn field="gold" />
            <AgGridColumn field="silver" />
            <AgGridColumn field="bronze" /> 
            <AgGridColumn field="total" />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = ({ ProductsR }) => ({ ProductsR });
export default connect(mapStateToProps, { getProducts})(GridExample);
