import React from "react";
import { Select, MenuItem, Container } from "@material-ui/core";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: undefined,
    };
  }

  handleDateChange = (e) => {
    console.log(e.target.value);
  };

  renderMenuItems = () => {
    const cityList = this.props.cities;
    return cityList.map((item) => (
      <MenuItem key={item.id} value={item.name}>
        {item.name}
      </MenuItem>
    ));
  };

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col s12">
            <Select
              onChange={this.props.onSearchChange}
              defaultValue={this.props.cities[0]["name"]}
              value={this.props.selectedCity}
              fullWidth
            >
              {this.renderMenuItems()}
            </Select>
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
