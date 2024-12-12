import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

const CalcularInflacion = () => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(null);

    // Valor fijo de la tasa de inflación (por ejemplo, 5%)
    const inflationRate = 5;

    const handleCalculate = () => {
        const number = parseFloat(inputValue);
        if (!isNaN(number)) {
            const calculatedValue = number * (1 + inflationRate / 100);
            setResult(calculatedValue.toFixed(2)); // Redondear a dos decimales
        } else {
            setResult("Por favor, ingrese un número válido.");
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Calculadora de Inflación
            </Typography>
            <Typography variant="h6" gutterBottom>
                Tasa de inflación: {inflationRate}%
            </Typography>
            <TextField
                label="Ingrese un número"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleCalculate}
                style={{ marginTop: "20px" }}
            >
                Calcular
            </Button>
            {result && (
                <Typography variant="h6" style={{ marginTop: "20px" }}>
                    Resultado: {result}
                </Typography>
            )}
        </Container>
    );
};

export default CalcularInflacion;
