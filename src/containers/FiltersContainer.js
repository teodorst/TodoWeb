import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import FilterLinkComponent from '../components/FilterLinkComponent.js'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, setVisibilityFilterAction } from '../actions/filterActions.js'

class FiltersContainer extends Component {

    constructor() {
        super();
        this.updateFilter = this.updateFilter.bind(this);
    }

    render() {
        return (
            <div>
                SHOW: {" "}
                <FilterLinkComponent 
                    filterDisplayName={"All"}
                    filterValue={SHOW_ALL}
                    updateFilterCb = {this.updateFilter}
                />
                {" "}
                <FilterLinkComponent 
                    filterDisplayName={"Active"} 
                    filterValue={SHOW_ACTIVE}
                    updateFilterCb = {this.updateFilter}
                />
                {" "}
                <FilterLinkComponent 
                    filterDisplayName={"Completed"} 
                    filterValue={SHOW_COMPLETED}
                    updateFilterCb = {this.updateFilter}
                />
                {" "}
            </div>
        );
    }
    
    updateFilter( newFilter ) {
        this.props.dispatch( setVisibilityFilterAction( newFilter ) );
    }
    
}

export default connect( 
    (state) => { 
        return state; 
    }
)(FiltersContainer);