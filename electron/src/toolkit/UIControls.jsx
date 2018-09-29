import ChannelsSlider from './ChannelsSlider.jsx';
import ToggleButton from './ToggleButton.jsx';
import SampleSourceSelector from './SampleSourceSelector.jsx';
import SliderSet from './SliderSet.jsx';

export default () => (
  <div>
    <h2>On/Off</h2>
    <ToggleButton />
    <h2>Channels</h2>
    <ChannelsSlider />
    <h2>Sample Source</h2>
    <SampleSourceSelector />
    <h2>Spread Inclusive</h2>
    <SliderSet
      sliderSetName='spreadInclusive'
      sliders={[
        {
          name: 'from',
          min: 0,
          max: 10 
        },
        {
          name: 'to',
          min: 0,
          max: 10
        },
      ]}
      defaults={{from: 0, to: 1}}
    />
    <h2>Deviate</h2>
    <SliderSet
      sliderSetName='deviate'
      sliders={[
        {
          name: 'from',
          min: 0,
          max: 1.0
        },
        {
          name: 'to',
          min: 0,
          max: 1.0
        },
      ]}
      defaults={{from: 0, to: 1}}
    />
  </div>
);