import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";
import { TextField, Box, Paper } from "@mui/material";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'; // Asegúrate de tener esto importado

const containerStyle = {
  width: "100%",
  height: "300px", // Reducir altura del mapa
};

const center = {
  lat: 40.749933,
  lng: -73.98633,
};

const libraries = ["places"];

const App = ({ mayoristas }) => { // Ahora recibimos mayoristas como prop
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(center);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [zoom, setZoom] = useState(13);
  const [markers, setMarkers] = useState([]);
  const autocompleteRef = useRef(null);

  // Función para geocodificar las direcciones de los mayoristas y obtener las coordenadas
  useEffect(() => {
    const fetchMarkers = async () => {
      const newMarkers = [];
      for (const mayorista of mayoristas) {
        try {
          const results = await geocodeByAddress(mayorista.ubicacion);
          const latLng = await getLatLng(results[0]);
          newMarkers.push({
            id: mayorista.id,
            name: mayorista.nombre,
            position: latLng,
            address: mayorista.ubicacion,
          });
        } catch (error) {
          console.error("Error geocodificando la dirección:", error);
        }
      }
      setMarkers(newMarkers);
    };

    fetchMarkers();
  }, [mayoristas]);

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
      setZoom(17);
      setSelectedPlace({
        name: place.name,
        position: { lat: location.lat(), lng: location.lng() },
        address: place.formatted_address,
      });
      setInfoWindowOpen(true);
    } else {
      alert(`No details available for input: '${place.name}'`);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLEMAPSKEY} libraries={libraries}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Paper
          sx={{ padding: 2, marginBottom: 2, maxWidth: 600, width: "100%" }}
        >
          <Autocomplete
            onLoad={(autocomplete) => {
              autocompleteRef.current = autocomplete;
            }}
            onPlaceChanged={onPlaceSelected}
          >
            <TextField
              label="Ingresa una direccion"
              fullWidth
              variant="outlined"
              placeholder="Ingresa una direccion"
              sx={{
                fontSize: "0.875rem",
                height: "45px",
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                },
              }}
            />
          </Autocomplete>
        </Paper>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={zoom}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {/* Marcadores de mayoristas */}
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              onClick={() => {
                setSelectedPlace(marker);
                setInfoWindowOpen(true);
              }}
            >
              {/* InfoWindow asociado a cada marcador */}
              {infoWindowOpen && selectedPlace?.id === marker.id && (
                <InfoWindow
                  position={marker.position}
                  onCloseClick={() => setInfoWindowOpen(false)}
                >
                  <div>
                    <strong>{selectedPlace.name}</strong>
                    <br />
                    <span>{selectedPlace.address}</span>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </Box>
    </LoadScript>
  );
};

export default App;
