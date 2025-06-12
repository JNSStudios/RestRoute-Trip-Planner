export default function Navigation() {
    return (
        <div id="navigation" className="funnel-sans-300 dropshadow">
            
            {/* Section for Start and End location inputs */}
            <div className="location-inputs">
                <label htmlFor="start-location">Start:</label>
                <input type="text" className="location" id="start-location" placeholder="Enter Start" />
            </div>
            <div className="location-inputs">
                <label htmlFor="start-location">End:</label>
                <input type="text" className="location" id="end-location" placeholder="Enter Destination" />
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
                            <input type="checkbox" name="restStopTypes" value="restArea" />
                            Rest Areas
                        </label>
                        <label>
                            <input type="checkbox" name="restStopTypes" value="gasStation" />
                            Gas Stations
                        </label>
                        <label>
                            <input type="checkbox" name="restStopTypes" value="food" />
                            Food Stops
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Lodging Types</legend>
                        <label>
                            <input type="checkbox" name="lodgingTypes" value="hotel" />
                            Hotels
                        </label>
                        <label>
                            <input type="checkbox" name="lodgingTypes" value="motel" />
                            Motels
                        </label>
                        <label>
                            <input type="checkbox" name="lodgingTypes" value="campground" />
                            Campgrounds
                        </label>
                    </fieldset>
                </div>
            </details>

            {/* big GO button to begin searching */}

        </div>
    );
}