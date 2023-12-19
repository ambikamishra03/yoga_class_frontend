import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";
import Lottie from "react-lottie";

import PageWrapper from "./Animation/PageWrapper";
import animationData from "./Animation/yoga.json";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home() {
  return (
    <PageWrapper>
      <div className="d-flex mx-3 align-items-center h-100">
        <Lottie
          options={animationOptions}
          isClickToPauseDisabled={true}
          className="col-6"
        />
        <div className="col-6 p-5">
          <div className="d-flex flex-column align-items-center gap-3 text-center">
            <Typography
              variant="h3"
              style={{ fontWeight: 400, color: "#065730" }}
            >
              Join Our Club
            </Typography>
            <Typography
              variant="h2"
              style={{ fontWeight: "bold", color: "#0fbd69" }}
            >
              Yoga for you Healthy Life
            </Typography>
            <Typography style={{font: '14px', margin:'30px 10px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vitae consectetur augue. Vestibulum vitae eleifend urna. Fusce
              pretium diam vel felis placerat ultricies. Mauris consequat elit
              congue massa pulvinar, eu suscipit velit laoreet. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Fusce non pretium
              elit.
            </Typography>
            <div style={{ display:'flex',justifyContent:'space-between'}}>
            <Button
              variant="contained"
              component={Link}
              to="registration"
              style={{ margin: '15px'}}
              sx={{ width: "50%" }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="pay"
              style={{ margin: '15px'}}
              sx={{ width: "50%" }}
            >
              Pay Fee
            </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
