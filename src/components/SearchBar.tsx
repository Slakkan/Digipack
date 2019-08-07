import * as React from "react";

export interface SearchBarProps {
  data: object;
  filters: string[];
  category?: string;
}

export interface SearchBarState {
  filter: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = { filter: this.props.filters[0] };
  handleFilters(e:any) {
    console.log(e.target.name)
  }
  render() {
    return (
      <div>
        <select name="filter" onChange={(e) => this.handleFilters(e)} >
          {this.props.filters.map((filter, index) => (
            <option key={`option${index}`} >{filter}</option>
          ))}
        </select>
        <input name="input" placeholder="largo x ancho x alto cm ej: 49x38x24" />
      </div>
    );
  }
}

export default SearchBar;
