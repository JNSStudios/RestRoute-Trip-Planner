import React, { useEffect, useRef } from 'react';

export default function Navigation({ onStartSelected, onEndSelected }) {
    const startInputRef = useRef(null);
    const endInputRef = useRef(null);

    useEffect(() => {
        if (!window.google || !window.google.maps || !window.google.maps.places) {
        console.error("Google Maps Places API is not loaded.");
        return;
        }

        const startAutocomplete = new window.google.maps.places.Autocomplete(startInputRef.current);
        const endAutocomplete = new window.google.maps.places.Autocomplete(endInputRef.current);

        startAutocomplete.addListener('place_changed', () => {
        const place = startAutocomplete.getPlace();
        if (place && onStartSelected) {
            onStartSelected(place);
        }
        });

        endAutocomplete.addListener('place_changed', () => {
        const place = endAutocomplete.getPlace();
        if (place && onEndSelected) {
            onEndSelected(place);
        }
        });
    }, []);

    return (
        <div id="navigation" className="funnel-sans-300 dropshadow">
        <div className="location-inputs">
            <label htmlFor="start-location">Start:</label>
            <input
            type="text"
            className="location"
            id="start-location"
            placeholder="Enter Start"
            ref={startInputRef}
            />
        </div>
        <div className="location-inputs">
            <label htmlFor="end-location">End:</label>
            <input
            type="text"
            className="location"
            id="end-location"
            placeholder="Enter Destination"
            ref={endInputRef}
            />
        </div>

            
            {/* inputs for durations between breaks */}
            <div className="break-inputs">
                <label htmlFor="break-interval">Take Break every... </label>
                <input
                    type="number"
                    id="break-interval"
                    className="break-interval"
                    min="0"
                    step="any"
                    placeholder="#"
                    required
                />
                <p> Hours</p>

            </div>
            <div className="break-inputs">
                <label htmlFor="break-interval">Lodging every... </label>
                <input
                    type="number"
                    id="break-interval"
                    className="break-interval"
                    min="0"
                    step="any"
                    placeholder="#"
                    required
                />
                <p> Hours</p>
            </div>

            
            {/* dropdown menu for filters */}

            <details className="filters-section">
                <summary>Show Filters</summary>
                <div className="filters-content">
                    <fieldset>
                        <legend>Rest Stop Types</legend>
                        <label>
                            <input type="checkbox" name="restStopTypes" value="restArea" checked />
                            Rest Areas
                        </label>
                        <label>
                            <input type="checkbox" name="restStopTypes" value="gasStation" checked/>
                            Gas Stations
                        </label>
                        <label>
                            <input type="checkbox" name="restStopTypes" value="food" checked/>
                            Food Stops
                        </label>
                    </fieldset>
                    <fieldset>  
                        <legend>Lodging Types</legend>
                        <label>
                            <input type="checkbox" name="lodgingTypes" value="hotel" checked/>
                            Hotels
                        </label>
                        <label>
                            <input type="checkbox" name="lodgingTypes" value="motel" checked />
                            Motels
                        </label>
                        <label>
                            <input type="checkbox" name="lodgingTypes" value="campground" checked/>
                            Campgrounds
                        </label>
                    </fieldset>
                </div>
            </details>

            {/* big GO button to begin searching */}

        </div>
    );
}