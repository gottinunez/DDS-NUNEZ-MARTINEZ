import {
  Container,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Card,
  Stack,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
const Home = () => {
  return (
    <>
      <Stack
        sx={{
          paddingTop: "5.1%",
          marginTop: "3%",
          paddingRight: "25%",
          paddingLeft: "25%",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ fontWeight: "bold" }}
          variant="contained"
          href="/mayorista"
        >
          Mis Mayoristas
        </Button>
        <br />
        <br />
        <Button
          style={{ fontWeight: "bold" }}
          variant="contained"
          href="/mercaderia"
        >
          Lista de Mercaderia
        </Button>
        <br />
        <br />
        <Button
          style={{ fontWeight: "bold" }}
          variant="contained"
          href="/notificaciones"
        >
          Notificaciones
        </Button>
        <br />
        <br />
        <Button
          style={{ fontWeight: "bold" }}
          variant="contained"
          href="/calcularinflacion"
        >
          Calcular Inflacion
        </Button>
      </Stack>

    </>
  );
};

export default Home;
