import { Container, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Card, Stack } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import ganancias from "@/src/fake/fake"
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
      </Stack>
      <Typography display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        Ganancias:
      </Typography>
      <PieChart
          series={[
            {
              data: ganancias,
            },
          ]}
          {...pieParams}
        />


    </>
  );
};

const pieParams = {
  height: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};

export default Home;
