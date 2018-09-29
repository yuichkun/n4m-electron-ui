import { Component } from 'react';
import io from '../utils/io';
import Slider from '@material-ui/lab/Slider';
import Label from './Label.jsx';

export default class SliderSet extends Component {
  constructor(props) {
    super(props);
    this.state = props.defaults;
  }
  render() {
    return (
      <div>
        {this.renderParameters()}
        {this.renderSliders()}
      </div>
    );
  }

  renderParameters() {
    const params = [];
    for (const key in this.state) {
      const value = this.state[key];
      params.push(<Label label={key} value={value} />);
    }
    return params;
  }

  renderSliders() {
    const { sliders } = this.props;
    return sliders.map((slider, i) => (
      <Slider key={i} min={ slider.min } max={ slider.max } value={ this.state[slider.name] } onChange={(e,value)=>{this.handleChange(slider.name, value)}} />
    )) 
  }
  handleChange(name, value) {
    this.setState(
      {
        [name]: value
      }
    );
    io.emit('dispatch', { [this.props.sliderSetName]: this.state });
  }
}
