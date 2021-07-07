import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/productsA";
import GridExample from '../../components/ag'
import Header from '../../components/header'
import Footer from '../../components/footer'

class HomeView extends Component {
state = {
  data: []
}

 async componentDidMount() {
     await this.props.getProducts()   
     const allProduct = this.props.ProductsR
     this.setState({data:allProduct})
  }

  render() {
    const allData = this.state.data
    return (
      <> 
      <Header/>
      <div className="api_sec inner_wrpr">
       {allData.map((task, index) => (
           <li key={index}>{task.title}</li>
       ))}
 
       <GridExample/>
      </div>
      <Footer/>
      </>
    ); 
  }
}

const mapStateToProps = ({ ProductsR }) => ({ ProductsR });
export default connect(mapStateToProps, { getProducts})(HomeView);
