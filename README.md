# 🚗 RestRoute Trip Planner

**RestRoute** is a React-based trip planning web app that helps you automatically find rest stops and lodging along your driving route using the Google Maps API.

Input your start and end destinations, how long you want to drive per day, and how often you'd like to rest — RestRoute calculates your travel segments and locates hotels or rest stops at each break point.

---

## 🔧 Tech Stack

- **React 19**
- **Vite** – lightning-fast dev server and bundler
- **@vis.gl/react-google-maps** – Google Maps integration
- **@googlemaps/markerclusterer** – smart marker grouping
- **Polyline** – decoding Google route polylines
- **ESLint** – code linting and quality control

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JNSStudios/RestRoute-Trip-Planner.git
cd RestRoute-Trip-Planner
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file at the root and add your Google Maps API key:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

Make sure you enable the following APIs in your Google Cloud project:

* Maps JavaScript API
* Directions API
* Places API