import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
    this.setState({data: this.state.data.concat(this.props.count)})
    
  }

  render() {
    const listItems = this.state.data.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <div>
        <h2>Todo</h2>
        <div>
          <button onClick={this.increment}>Add+</button>
          <ul style={{maxHeight: 250, width: 200, borderWidth: 1, borderColor: '#bfbfbf',  overflow: 'auto'}}>{listItems}</ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
