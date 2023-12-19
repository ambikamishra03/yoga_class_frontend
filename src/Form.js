import { useState } from "react";
import { Button, Alert, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import PageWrapper from "./Animation/PageWrapper";
import Stepper from "./Components/Stepper";
import BasicInfo from "./Components/BasicInfo";
import Batch from "./Components/Batch";

import Submit from "./Services/Submit";

import animationData from "./Animation/verifying.json";
import Submitted from "./Components/Submitted";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Form() {
  let navigate = useNavigate();

  const [activeStep, setStep] = useState(0);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const prevStep = () => {
    setStep(activeStep - 1);
  };

  const nextStep = () => {
    if (activeStep < 1) {
      if (data.name && data.email && data.gender && data.age) {
        setStep(activeStep + 1);
        setError(null);
      } else setError("Enter all Fields");
    } else submit();
  };

  const submit = () => {
    setStep(2);
    Submit(data)
  .then((responseData) => {
    if (responseData.errors) {
      setStep(0);
      setError("Wrong Input");
    } else {
      console.log(responseData.body.id);
      //setData((prev) => ({ ...prev, id: responseData.body.id }));
      setStep(3);
    }
  })
  .catch((err) => {
    console.log(err);
    setStep(0);
    setError("Something Went Wrong");
  });
console.log("Submitted");
  };

  
  return (
    <PageWrapper>
      {activeStep < 2 && <Stepper activeStep={activeStep} />}
      <div className="d-flex flex-column align-items-center">
        {error && <Alert severity="error">{error}</Alert>}
        {activeStep === 0 && <BasicInfo setData={setData} />}
        {activeStep === 1 && <Batch setData={setData} />}
        {activeStep < 2 && (
          <div className="d-flex gap-4 col-6 justify-content-center mt-5">
            {activeStep > 0 && (
              <Button
                variant="contained"
                sx={{ width: "40%" }}
                style={{marginTop:'15px',marginLeft:'25px'}}
                onClick={prevStep}
              >
                Back
              </Button>
            )}

            <Button
              variant="contained"
              style={{marginLeft:'210px',marginTop:'15px'}}
              sx={{ width: "40%" }}
              onClick={nextStep}
            >
              {activeStep === 1 ? "Submit" : "Next"}
            </Button>
          </div>
        )}
      </div>
      {activeStep === 2 && (
        <div className="d-flex flex-column align-items-center">
          <Lottie
            options={animationOptions}
            isClickToPauseDisabled={true}
            height={500}
            width={500}
          />
          <Typography variant="h5">Validating Details...</Typography>
        </div>
      )}
      {activeStep === 3 && <Submitted item="Details" id={data.id} />}
    </PageWrapper>
  );
}

export default Form;
