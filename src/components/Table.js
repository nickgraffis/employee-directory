import React from "react";
import Row from "./Row";
import Col from "./Col";
import Img from "./Img";
import find from "../utils/find";
import order from "../utils/order";

class Table extends React.Component {
  state = {
    results: {},
    orderDirection: true
  };

  componentDidMount() {
    this.getEmployees(20);
  }

  getEmployees = amt => {
    find.employees(amt)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleOrderBy = value => {
    console.log(value, this.state.orderDirection)
    this.setState({
      results: order.by(this.state.results, value, this.state.orderDirection),
      orderDirection: !this.state.orderDirection
    })
  };

  render() {
    console.log(this.state.results)
    return (<>
      <Row>
        <Col size="2" info="Avatar"/>
        <Col size="5" onclick={() => this.handleOrderBy('name')}>
          {`Name ${this.state.orderDirection ? '↑' : '↓'}`}
        </Col>
        <Col size="3" onclick={() =>  this.handleOrderBy('email')}>
          {`Email ${this.state.orderDirection ? '↑' : '↓'}`}
        </Col>
        <Col info="Phone"/>
      </Row>
      {this.state.results.length > 0 ?
        this.state.results.map((result) => {
          return <Row>
            <Img size="2" img={result.picture.thumbnail} />
            <Col size="5" info={`${result.name.first} ${result.name.last}`} />
            <Col size="3" info={result.email} />
            <Col size="2" info={result.phone} />
          </Row>
        })
        : <p className="text-red-400">nothing...</p>
      }
      </>
    );
  }
}

export default Table;
