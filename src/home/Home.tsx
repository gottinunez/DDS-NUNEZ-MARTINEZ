import { Container, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Card, Stack } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import ganancias from "@/src/fake/fake"
import MapComponent from "../mapa/MapComponent.jsx";
const Home = () => {
  return (
    <>
      <Stack sx={{
        marginTop: "3%",
        paddingRight:"25%",
        paddingLeft:"25%"


      }}>
        <Button style={{fontWeight:"bold"}}variant="contained"  href="/mayorista">
          Buscar Mayoristas
        </Button>
        <br />
        <Button style={{fontWeight:"bold"}} variant="contained"  href="/mercaderia">
          Lista de Productos y Precios
        </Button>
        <br />
        <Button style={{fontWeight:"bold"}}variant="contained"  href="/notificaciones">
          Notificaciones/Noticias
        </Button>
      </Stack>
      </>
  );
};

export default Home;
