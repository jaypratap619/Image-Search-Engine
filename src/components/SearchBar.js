
import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
    state = { val: '' }

    onInputChange = (event) => {
        this.setState({ val: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-11">
                        <form onSubmit={this.onFormSubmit}>
                            <input class="form-control mr-sm-2 text-muted" type="search" onChange={this.onInputChange} value={this.state.val} placeholder="Search for photos" aria-label="Search" />

                        </form>
                    </div>
                    <div onClick={this.onFormSubmit} class="col-1 bg-dark d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon className='vertical-center' style={{color: 'white'}} icon={faSearch} size='1x' />
                    </div>
                </div>

            </div>
        )
    }
}

export default SearchBar;