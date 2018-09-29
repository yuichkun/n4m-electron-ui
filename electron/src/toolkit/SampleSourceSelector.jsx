import { Component } from 'react';
import io from '../utils/io';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SAMPLES = {
  ANTON: 0,
  JONGLY: 1 
};

export default class SampleSourceSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: SAMPLES.ANTON
    };
  }
  render() {
    return (
      <Select value={this.state.value} onChange={this.handleChange.bind(this)}>
        <MenuItem value={SAMPLES.ANTON}>Anton</MenuItem>
        <MenuItem value={SAMPLES.JONGLY}>Jongly</MenuItem>
      </Select>
    );
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
    io.emit('dispatch', { sampleType: value });
  }
}
