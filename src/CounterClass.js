import {Component} from 'react';
import {connect} from 'react-redux';

class CounterClass extends Component {
    increment() {
        this.props.increment()
    }

    decrement() {
        this.props.decrement()
    }

    render() {
        return (
            <div>
                <button style={{margin: '10px'}} onClick={this.increment.bind(this)}>Increment</button>
                <button style={{margin: '10px'}} onClick={this.decrement.bind(this)}>Decrement</button>
                <div>
                Value: {this.props.counter} 
                </div>
            </div>
          );
    }
}

const mapStateToProps = (state) => {
    return {counter: state.counter}
}

const mapDispatchToProps = dispatch => {
    return {
        increment: ()=> dispatch({type: 'increment'}),
        decrement: ()=>dispatch({type: 'decrement'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);