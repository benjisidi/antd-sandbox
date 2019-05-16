import React from 'react';
import { AutoComplete } from 'antd';
import countries from './countries';

export class CountryAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: countries};
        this.handleSearch = this.handleSearch.bind(this);
    }
        
    handleSearch(value) {
        this.setState({dataSource: countries.filter(x => x.toLowerCase().indexOf(value.toLowerCase()) > -1)});
    }
    render() {
        return <AutoComplete
            dataSource={this.state.dataSource}
            style={{...this.props.style}}
            onSearch={this.handleSearch}
            placeholder='Enter a country.' />
    }
}