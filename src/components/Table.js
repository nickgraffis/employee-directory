import React from "react";
import Row from "./Row";
import Col from "./Col";
import Img from "./Img";
import find from "../utils/find";
import order from "../utils/order";
import filter from "../utils/filter";

class Table extends React.Component {
  state = {
    results: {},
    orderDirection: {
      email: true,
      name: true
    },
    filter: null
  };

  storedData = [];

  componentDidMount() {
    this.getEmployees(20);
  }

  getEmployees = amt => {
    find.employees(amt)
      .then(res => {
        this.setState({ results: res.data.results })
        this.storedData = this.state.results
        console.log(this.storedData)
      })
      .catch(err => console.log(err));
  };

  handleFilterBy = () => {
    if (!this.state.filter) this.state.filter = '♂'
    this.setState({
      results: filter.by(this.storedData, this.state.filter),
      orderDirection: {
        email: this.state.orderDirection.['email'],
        name: this.state.orderDirection.['name']
      },
      filter: this.state.filter == '♂' ? '♀' : '♂'
    })
  }

  handleOrderBy = value => {
    let directions = {}
    if (value === 'email') {
      directions = {
        name: this.state.orderDirection['name'],
        email: !this.state.orderDirection['email']
      }
    } else {
      directions = {
        name: !this.state.orderDirection['name'],
        email: this.state.orderDirection['email']
      }
    }
    this.setState({
      results: order.by(this.state.results, value, this.state.orderDirection[value]),
      orderDirection: {
        email: directions.email,
        name: directions.name
      },
      filter: this.state.filter
    })
  };

  render() {
    return (<>
      <Row>
        <Col fontSize="md" size="1" info="Avatar"/>
        <Col fontSize="md" size="3" sortable="true" onclick={() => this.handleOrderBy('name')}>
          {`Name ${this.state.orderDirection['name'] ? '↑' : '↓'}`}
        </Col>
        <Col fontSize="md" size="4" sortable="true" onclick={() =>  this.handleOrderBy('email')}>
          {`Email ${this.state.orderDirection['email'] ? '↑' : '↓'}`}
        </Col>
        <Col fontSize="md" size="2" info="Phone"/>
        <Col fontSize="md" size="2" sortable="true" info={`Gender ${this.state.filter ? `${this.state.filter}` : '--'}`} onclick={this.handleFilterBy}/>
      </Row>
      {this.state.results.length > 0 ?
        this.state.results.map((result) => {
          return <Row>
            <Img size="1" img={result.picture.thumbnail} />
            <Col size="3" info={`${result.name.first} ${result.name.last}`} />
            <Col size="4" info={result.email} />
            <Col size="2" info={result.phone} />
            <Col size="2" info={result.gender} />
          </Row>
        })
        : <p className="text-red-400">nothing...</p>
      }
      </>
    );
  }
}

export default Table;
