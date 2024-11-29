// src/App.tsx
import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, Autocomplete } from "@react-google-maps/api";
import { TextField, Box, Typography, Paper } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.749933,
  lng: -73.98633,
};

const libraries = ["places"]; // Asegúrate de cargar la biblioteca 'places' para usar Autocomplete

const App = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(center);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [zoom, setZoom] = useState(13);
  const autocompleteRef = useRef(null); // Usamos useRef para almacenar la instancia de Autocomplete

  // Función que se ejecuta cuando se selecciona un lugar en el Autocomplete
  const onPlaceSelected = () => {
    const autocomplete = autocompleteRef.current;
    if (!autocomplete) return;

    const place = autocomplete.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      setMarkerPosition({
        lat: location.lat(),
        lng: location.lng(),
      });
      setZoom(17); // Cambia el zoom al nivel 17 cuando se selecciona un lugar
      setSelectedPlace(place);
      setInfoWindowOpen(true);
    } else {
      alert(`No details available for input: '${place.name}'`);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDmUUNxeq1Je45vriZvQTPYUgXWmvXWc00" // Reemplaza con tu API Key
      libraries={libraries}
    >
      <Box sx={{ padding: 2 }}>
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
          <Autocomplete
            onLoad={(autocomplete) => {
              autocompleteRef.current = autocomplete; // Almacena la instancia de Autocomplete
            }}
            onPlaceChanged={onPlaceSelected} // Llama a onPlaceSelected cuando un lugar es seleccionado
          >
            <TextField
              label="Ingresa una direccion"
              fullWidth
              variant="outlined"
              placeholder="Ingresa una direccion"
            />
          </Autocomplete>
        </Paper>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={zoom}
        >
          <Marker position={markerPosition} />
          {infoWindowOpen && selectedPlace && (
            <InfoWindow
              position={markerPosition}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div>
                <strong>{selectedPlace.name}</strong>
                <br />
                <span>{selectedPlace.formatted_address}</span>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </Box>
    </LoadScript>
  );
};

export default App;
