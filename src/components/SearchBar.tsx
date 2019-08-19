import * as React from "react";

import "../styles/components/SearchBar";

export interface SearchBarProps {
  data: any[];
  filters: string[];
  category?: string;
}

export interface SearchBarState {
  filter: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = {
    filter: this.props.filters[0],
  };
  constructor(props:SearchBarProps) {
    super(props)
    this.input = null
  }
  input: HTMLInputElement | null;
  handleFilters(e: any) {
    if (e.target.name === "filter") {
      //@ts-ignore
      this.input.value = ""
    }
  }
  render() {
    return (
      <div className="search-container">
        <select
          className="dropdown"
          name="filter"
          onChange={e => this.handleFilters(e)}
        >
          {this.props.filters.map((filter, index) => (
            <option key={`option${index}`}>{filter}</option>
          ))}
        </select>
        <input
          className="text-input"
          name="input"
          placeholder="ej: 49x38x24"
          ref={c => this.input = c}
        />
      </div>
    );
  }
}

export default SearchBar;
