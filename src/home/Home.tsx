import { Container, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Card, Stack, Link, IconButton } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import ganancias from "@/src/fake/fake"
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

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
        <br/>
        <Button style={{fontWeight:"bold"}} variant="contained"  href="/mercaderia">
          Lista de Productos y Precios
        </Button>
        <br />
        <br/>
        <Button style={{fontWeight:"bold"}}variant="contained"  href="/notificaciones">
          Notificaciones/Noticias
        </Button>
        <Link to="/sobrenosotros" style={{ textDecoration: 'none' }}>
      {/* Usamos IconButton para que sea clickeable y tenga estilo de botón */}
      <IconButton>
        <FingerprintIconIcon />
      </IconButton>
    </Link>
      </Stack>
      </>
  );
};

export default Home;
