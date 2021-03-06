import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tag: ['tag1', 'tag2', 'tag3']
    }
    handleIncrement = () => {
        return this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-scondry btn-sm'>Increment</button>
            </React.Fragment>
        );
    }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount() {
        let { count } = this.state
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;