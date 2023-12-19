import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Basic Information", "Select Batch"];

function StepperComponent({ activeStep }) {
  return (
    <div style={{ marginTop: 50 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default StepperComponent;
