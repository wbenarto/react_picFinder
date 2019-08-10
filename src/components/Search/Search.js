// Class based component RCC Tab
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '',
        images: []
    }


    render() {
        return (
            <div>
                <TextField 
                    name='searchText'
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText='Search For Images'
                    fullWidth={true}
                />
                <br/>
                <SelectField
                    floatingLabelText='Frequency'
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText='Never' />
                    <MenuItem value={2} primaryText='Every Night' />
                    <MenuItem value={3} primaryText='Weeknights' />
                    <MenuItem value={4} primaryText='Weekends' />
                    <MenuItem value={5} primaryText='Weekly' />
                </SelectField>
            </div>
        )
    }
}

export default Search;
