import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const environment = import.meta.env;


function App() {
    
    return (
        <APIProvider apiKey={environment.VITE_GOOGLEMAPS_API_KEY} libraries={['places']}
                onLoad={() => console.log('Maps API has loaded.')}>
            {/* Google Maps Background */}
            <div style={{ 
                position: "fixed", 
                top: 0, 
                left: 0, 
                width: "100vw", 
                height: "100vh", 
                zIndex: -1 
            }}>
                <Map
                    defaultZoom={2}
                    defaultCenter={{ lat: 0, lng: 0 }}
                    onCameraChanged={(ev) =>
                        console.log('Camera changed:', ev.detail.center, 'Zoom:', ev.detail.zoom)
                    }
                    options={{
                        disableDefaultUI: true,          // Turns off *most* controls
                        zoomControl: false,              // Explicitly disable zoom buttons
                        fullscreenControl: false,        // Disable fullscreen toggle
                        streetViewControl: false,        // Disable Street View Pegman
                        mapTypeControl: false,           // Disable Map/Satellite toggle
                        scaleControl: false,             // Disable scale bar
                        rotateControl: false,            // Disable compass/rotate control
                        clickableIcons: false,           // Disable POI popups
                        keyboardShortcuts: false,        // Disable + / - keyboard zoom
                        gestureHandling: "greedy",       // (Optional) Control drag/zoom behavior
                    }}

                />
            </div>

            {/* UI area */}

            <div id="ui-wrapper">
                <Header />
                <Navigation
                    onStartSelected={(place) => {
                        const lat = place.geometry.location.lat();
                        const lng = place.geometry.location.lng();
                        console.log('Start coordinates:', lat, lng);
                    }}
                    onEndSelected={(place) => {
                        const lat = place.geometry.location.lat();
                        const lng = place.geometry.location.lng();
                        console.log('End coordinates:', lat, lng);
                    }}
                />

            </div>
        </APIProvider>
    
        
    );
}

export default App;