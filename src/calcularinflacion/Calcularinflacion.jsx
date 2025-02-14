import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

const CalcularInflacion = () => {
    const [inputValue, setInputValue] = useState("");
    const [inflationRate, setInflationRate] = useState(""); // Estado para la tasa de inflación
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const amount = parseFloat(inputValue);
        const rate = parseFloat(inflationRate);
        if (!isNaN(amount) && !isNaN(rate)) {
            const calculatedValue = amount * (1 + rate / 100);
            setResult(calculatedValue.toFixed(2)); // Redondear a dos decimales
        } else {
            setResult("Por favor, ingrese valores válidos.");
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Calculadora de Inflación
            </Typography>
            <TextField
                label="Ingrese un monto"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Ingrese la tasa de inflación (%)"
                variant="outlined"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                fullWidth
                margin="normal"
            />
             <Button 
                variant="contained"
                color="primary"
                href="https://x.com/INDECArgentina"
                style={{ marginTop: "20px", marginRight:"20px" }}
            >
                Saber Inflacion
            </Button>
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
