import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";


function App() {
    
    return (
        <>
            <div id="ui-wrapper">
                <Header/>
                <Navigation/>
            </div>
            

            {/* Google Maps Background */}

            <div style={{ 
                position: "fixed", 
                top: 0, 
                left: 0, 
                width: "100vw", 
                height: "100vh", 
                zIndex: -1 
            }}>
                 <iframe
                    title="Google Maps Background"
                    src="https://www.google.com/maps/embed?pb=!1m0!4v1710000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

      
        
        </>
    );
}

export default App;