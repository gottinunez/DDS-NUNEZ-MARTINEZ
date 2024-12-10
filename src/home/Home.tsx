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
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import CalculateIcon from "@mui/icons-material/Calculate";
const Home = () => {
  return (
    <>
      <Stack
        sx={{
          marginTop: "3%",
          paddingRight: "25%",
          paddingLeft: "25%",
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
        <Link
          href="/calculadora"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <CalculateIcon sx={{ fontSize: 50 }} />
        </Link>
        <Box
          sx={{
            paddingTop: "20%",
            paddingBottom: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%", // Ocupa el 70% de la altura de la pantalla
            flexDirection: "column", // Coloca los elementos en columna
          }}
        >
          <Link
            href="/sobrenosotros"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Ordena ícono y texto en columna
                alignItems: "center", // Centra horizontalmente
              }}
            >
              <IconButton
                sx={{
                  width: 80, // Tamaño personalizado
                  height: 80, // Tamaño personalizado
                  backgroundColor: "#ffffff", // Color de fondo del botón
                  color: "black", // Color del ícono
                  "&:hover": {
                    backgroundColor: "#c20000", // Color al pasar el mouse
                    color: "white", // Color del icono
                  },
                }}
              >
                <FingerprintIcon sx={{ fontSize: 50 }} />{" "}
                {/* Ícono más grande */}
              </IconButton>
              <Typography
                sx={{
                  marginTop: "8px", // Espaciado entre ícono y texto
                  fontSize: "16px", // Tamaño del texto
                  color: "black", // Color del texto
                }}
              >
                Sobre Nosotros
              </Typography>
            </Box>
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
