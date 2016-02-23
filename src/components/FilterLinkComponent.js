import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import { setVisibilityFilterAction, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/filterActions';


class FilterLinkComponent extends Component {

    constructor () {
        super();
    }

    render() {
        if( this.props.visibilityFilter == this.props.filterValue ) {
            return (<span> {this.props.filterDisplayName} </span> );
        }
        else {
            return (
                <a 
                    href="#"
                    onClick={ (e) => {
                        e.preventDefault();
                        this.props.updateFilterCb(this.props.filterValue);
                    }} 
                >
                    {this.props.filterDisplayName}
                </a>
            );
        }
    }
}

export default connect( (state) => {
    return { visibilityFilter : state.visibilityFilter }
} )(FilterLinkComponent);