import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            errorMessage: '',
            latitude: null,
            longitude: null,
            isGeocoding: false,
          };
    }

    handleChange = (address) => {
        this.setState({
            address,
            latitude:null,
            longitude:null,
            errorMessage: '',
        })
    }



    render() {
        const {
            address,
            errorMessage,
            latitude,
            longitude,
            isGeocoding
        } = this.state;

        return (
          <div>
            <PlacesAutocomplete
              onChange={this.handleChange}
              value={address}

              shouldFetchSuggestions={address.length > 2}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => {
                return (
                  <div>
                    <input
                      {...getInputProps({ placeholder: "Enter Address..." })}
                    />
                    <div>
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            return (
                                <div {...getSuggestionItemProps(suggestion)}>
                                    <span>{suggestion.description}</span>
                                </div>
                            )
                        })}
                    </div>
                  </div>
                );
              }}
            </PlacesAutocomplete>
          </div>
        );
    }
}

export default SearchBar;