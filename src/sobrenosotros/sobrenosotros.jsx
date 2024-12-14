import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const SobreNosotros = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Conoce más sobre quiénes somos y lo que hacemos.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              La Aplicación
            </Typography>
            <Typography variant="body1" paragraph>
              La aplicación fue desarrollada con el propósito de proporcionar una herramienta útil y accesible tanto para PYMEs, como para particulares o cualquier persona interesada en organizar y gestionar de manera más eficiente los aspectos esenciales de un negocio. Su objetivo es facilitar la tarea de mantener un negocio en orden, simplificando el acceso a herramientas clave que permiten optimizar la toma de decisiones diarias.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              ¿Qué Funciones Tiene la Aplicación?
            </Typography>
            <Typography variant="body1" paragraph>
              La aplicación está diseñada con múltiples funcionalidades que buscan cubrir las necesidades más comunes de los emprendedores. Una de las características más destacadas, y que fue la idea central en su creación, es la capacidad de calcular la inflación. Esta función resulta crucial en contextos económicos inestables del país, ya que permite ajustar precios y costos de manera precisa, tomando en cuenta las fluctuaciones del mercado.
            </Typography>
            <Typography variant="body1" paragraph>
              Además de esta función central, la aplicación ofrece varias opciones que facilitan la administración del negocio. Por ejemplo, permite guardar los datos de mayoristas, proveedores o supermercados de confianza, incluyendo su dirección exacta. Esta información se puede almacenar para facilitar la búsqueda en el mapa, lo que ahorra tiempo y esfuerzo al momento de localizar un punto de venta específico.
            </Typography>
            <Typography variant="body1" paragraph>
              La aplicación también incluye una función de notificaciones, que permite a los usuarios establecer recordatorios personalizados. Estos recordatorios pueden incluir notas importantes o tareas pendientes, con la opción de definir una fecha y hora específicas para que la notificación suene, ayudando a organizar el día a día de forma efectiva.
            </Typography>
            <Typography variant="body1" paragraph>
              Otra función útil es la "Lista de Productos", que te permite agregar productos al inventario, incluyendo el nombre, marca, precio y stock. Esta herramienta facilita la gestión de inventarios y ventas, ayudando a mantener todo organizado.
            </Typography>
            <Typography variant="body1" paragraph>
              Como agregado, tiene también una calculadora, que puede ser útil para realizar cálculos rápidos relacionados con los productos, precios y otros aspectos financieros del negocio.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SobreNosotros;
