// Calculadora.tsx

import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Box, Typography } from '@mui/material';

const Calculadora = () => {
  const [input, setInput] = useState<string>(''); // Para operaciones matemáticas
  const [initialCPI, setInitialCPI] = useState<string>(''); // Para CPI inicial
  const [finalCPI, setFinalCPI] = useState<string>(''); // Para CPI final
  const [inflationResult, setInflationResult] = useState<string>(''); // Para mostrar resultado de inflación

  // Maneja clics en los botones de la calculadora
  const handleClick = (value: string) => {
    setInput(prevInput => prevInput + value);
  };

  // Borra el contenido del input
  const handleClear = () => {
    setInput('');
    setInitialCPI('');
    setFinalCPI('');
    setInflationResult('');
  };

  // Evalúa la expresión matemática
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  // Calcula la inflación y actualiza la barra de entrada con la fórmula
  const handleInflation = () => {
    const initial = parseFloat(initialCPI);
    const final = parseFloat(finalCPI);

    if (!isNaN(initial) && !isNaN(final) && initial !== 0) {
      const inflation = ((final - initial) / initial) * 100;
      setInflationResult(inflation.toFixed(2));
      setInput(`(( ${final} - ${initial} ) / ${initial}) * 100 = ${inflation.toFixed(2)}%`); // Muestra la cuenta en la barra
    } else {
      setInflationResult('Por favor ingresa valores válidos de CPI');
      setInput(''); // Limpiar la barra si los valores no son válidos
    }
  };

  // Maneja las entradas del teclado
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;

      if (key === 'Backspace') {
        // Eliminar un carácter si se presiona 'Backspace'
        setInput(prevInput => prevInput.slice(0, -1));
      } else if (key === 'Enter') {
        // Evaluar la expresión si se presiona 'Enter'
        handleEvaluate();
      } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'].includes(key)) {
        // Agregar el valor de la tecla presionada al input
        setInput(prevInput => prevInput + key);
      }
    };

    // Escuchar los eventos de las teclas
    window.addEventListener('keydown', handleKeyPress);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#c20000", fontWeight: 'bold', marginTop: "5vh" }}
      >
        Calculadora
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <TextField
          label="Ingrese el Calculo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          sx={{ padding: "2", marginBottom: 2, width: 500 }}
          inputProps={{ readOnly: true }}
        />
        
        {/* Campos de entrada para calcular inflación */}
        <TextField
          label="CPI Inicial"
          type="number"
          value={initialCPI}
          onChange={(e) => setInitialCPI(e.target.value)}
          variant="outlined"
          sx={{ marginBottom: 2, width: 500 }}
        />
        <TextField
          label="CPI Final"
          type="number"
          value={finalCPI}
          onChange={(e) => setFinalCPI(e.target.value)}
          variant="outlined"
          sx={{ marginBottom: 2, width: 500 }}
        />
        <Button variant="contained" onClick={handleInflation} sx={{ marginBottom: 2 }}>
          Calcular Inflación
        </Button>
        {inflationResult && (
          <Typography variant="h6" sx={{ color: "#c20000" }}>
            Inflación: {inflationResult}%
          </Typography>
        )}

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('1')}>1</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('2')}>2</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('3')}>3</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('+')}>+</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('4')}>4</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('5')}>5</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('6')}>6</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('-')}>-</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('7')}>7</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('8')}>8</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('9')}>9</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('*')}>*</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('0')}>0</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('.')}>.</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleClear}>C</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => handleClick('/')}>/</Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleEvaluate}
              sx={{ height: '100%' }}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Calculadora;
