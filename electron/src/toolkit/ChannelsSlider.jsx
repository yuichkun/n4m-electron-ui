import { Component } from 'react';
import io from '../utils/io';
import Slider from '@material-ui/lab/Slider';
import Label from './Label.jsx';

export default class ChannelsSlider extends Component {
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
        <Slider min={1} max={100} value={this.state.value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
  handleChange(e, _value) {
    const value = parseInt(_value);
    this.setState({value})
    io.emit('dispatch', { channels: value });
  }
}
