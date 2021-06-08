import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import styles from "../../styles/SearchBar.module.css";
import AssessmentData from "../AssessmentData/AssessmentData";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            selectedAddress: '',
            errorMessage: '',
            gmapsLoaded: false,
          };
    }

    /* 
      Handle change from the PlacesAutocomplete when the user types their address.
      Simply sets state.
    */
    handleChange = (address) => {
        this.setState({
            address,
            errorMessage: '',
        })
    }

    /* 
      Handles errors from the PlacesAutocomplete when an error is thrown. 
      Sets the error message and clears suggestions.
    */
    handleError = (status, clearSuggestions) => {
      this.setState({ errorMessage: status }, () => {
        clearSuggestions();
      });  
    }

    /*
      Handles address selection from PlacesAutocomplete.
      Sets the selected address which is used to render the assessment
      also sets the address to set the ensure the autocomplete is set to the selected value.
    */
    handleSelect = selected => {
      this.setState({selectedAddress: selected, address: selected});
    }

    /* 
      This will result in render() being called twice
      however this is required due to the need to use google.maps.LatLang to create an object to send to PlacesAutocomplete prop
      we load the google script at the end of the body as soon as the component mounts
      then upon the js loading, the callback initGoog is called that sets gmapsLoaded, which we check in order to render PlacesAutocomplete.

      Details: https://github.com/hibiken/react-places-autocomplete/issues/57

      Not really optimal, as this is bad for performance..
    */
    componentDidMount(){
      const { gmapsLoaded } = this.state;
      if(gmapsLoaded === false){
        window.initGoog = () => this.setState({gmapsLoaded: true});
        const gmapScript = document.createElement(`script`)
        gmapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places&callback=initGoog`
        document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScript)
      }
    }

    render() {
        const {
            address,
            selectedAddress,
            errorMessage,
            gmapsLoaded
        } = this.state;

        /* 
          Search options for the google api.
          location = latitude and longitude of the city of Gatineau, in combination with 'radius' biases result to Gatineau.
          componentRestrictions = restricts results to Canada.
          radius = 30000 metres, in combination with 'location' biases result to Gatineau.
          types = will only return 'address' types for predictions, as only addresses would have assessments.
        */
        return (
          <div className={styles.searchbarcontainer}>
            {gmapsLoaded && (
              <PlacesAutocomplete
                onChange={this.handleChange}
                value={address}
                shouldFetchSuggestions={address.length > 3}
                onError={this.handleError}
                onSelect={this.handleSelect}
                searchOptions={{
                  location: new window.google.maps.LatLng(
                    45.476543,
                    -75.701271
                  ),
                  componentRestrictions: {
                    country: "CA",
                  },
                  radius: 30000,
                  types: ["address"],
                }}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => {
                  return (
                    <div className={styles.searchbarinnercontainer}>
                      <input
                        className={styles.searchbarinput}
                        {...getInputProps({ placeholder: "Enter Address..." })}
                      />
                      <div className={styles.searchresultcontainer}>
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          return (
                            <div {...getSuggestionItemProps(suggestion)}>
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }}
              </PlacesAutocomplete>
            )}

            {/* 
              When a suggestion is selected, we set the address.
              When the address is selected, we request the API to render the assessment.
            */}
            {this.state.selectedAddress.length > 0 && <AssessmentData address={selectedAddress}/>}

            {/* If we have an error message, write it.*/}
            {errorMessage.length > 0 && <div>{this.state.errorMessage}</div>}
          </div>
        );
    }
}

export default SearchBar;