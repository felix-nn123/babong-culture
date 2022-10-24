import React from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  height: '100%',
  width: '100%',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  gestureHandling: 'greedy',
}

const MapLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA2CpB2hPku6Sivjnh8AItdex87_F46ovE',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <h2
        style={{
          textAlign: 'center',
          color: '#367E18',
          fontWeight: 'bold',
          fontFamily: "'Noto Serif', serif",
        }}
      >
        MAP REPRESENTATION AND LOCATION OF BABONG
      </h2>
      <div
        style={{
          width: '100%',
          height: '400px',
          marginTop: '50px',
          paddingLeft: '0',
        }}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default MapLocation
