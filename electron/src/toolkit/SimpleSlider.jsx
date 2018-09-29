import { Component } from 'react';
import io from '../utils/io';
import Slider from '@material-ui/lab/Slider';
import Label from './Label.jsx';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  render() {
    return (
      <div>
        <Label label='channels' value={this.state.value} />
        <Slider min={this.props.min} max={this.props.max} value={this.state.value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
  handleChange(e, _value) {
    const value = this.props.shouldParseInt === true ? parseInt(_value) : _value;
    this.setState({value})
    io.emit('dispatch', { [this.props.name]: value });
  }
}
