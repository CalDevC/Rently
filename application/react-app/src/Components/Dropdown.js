import { React, Component } from 'react';
import '../CSS/Post.module.css';

//Dropdown menu to be used for category selection

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Outdoor Equipment' };
    this.handleChange = this.handleChange.bind(this);
  }

  //Update value when changed
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          Category:
        </label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Indoor Equipment">Indoor Equipment</option>
          <option value="Outdoor Equipment">Outdoor Equipment</option>
          <option value="Tools">Tools</option>
          <option value="Indoor Equipment/Fitness">Fitness</option>
          <option value="Indoor Equipment/Interior Design">Interior Design</option>
          <option value="Outdoor Equipment/Camping">Camping</option>
          <option value="Outdoor Equipment/Hiking">Hiking</option>
          <option value="Tools/Automotive">Automotive Tools</option>
          <option value="Tools/General">General Tools</option>
        </select>
      </div>

    );
  }
}

export default Dropdown;