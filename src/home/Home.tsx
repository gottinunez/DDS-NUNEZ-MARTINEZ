import { Container, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Card, Stack } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
const Home = () => {
  return (
    <>
      <Stack sx={{
        marginTop: "20px"
      }}>
        <Button variant="contained" color="primary" href="">
          Buscar Mayoristas
        </Button>
        <br />
        <Button variant="contained" color="primary" href="">
          Lista de Productos y Precios
        </Button>
        <br />
        <Button variant="contained" color="primary" href="">
          Objetivos
        </Button>
        <br />
        <Button variant="contained" color="primary" href="">
          Notificaciones/Noticias
        </Button>
        <br />
      </Stack>
      <PieChart
        series={[
          {
            data: [{ value: 10, color: 'orange' }, { value: 15 }, { value: 20 }] ,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          }
        ]}></PieChart>
    </>
  );
};

export default Home;
