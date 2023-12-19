import { useState } from "react";
import { TextField, Typography, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageWrapper from "./Animation/PageWrapper";
import Search from "./Services/Search";
import Payment from "./Components/Payment";
import Submitted from "./Components/Submitted";

function Fee() {
  const [id, setID] = useState("");
  const [error, setError] = useState(null);
  const [isPaying, setPaying] = useState(0);
  const [userData, setData] = useState(null);
  let navigate = useNavigate();

  const search = () => {
    Search(id)
      .then((data) => {
        console.log(data);
        if (data.status) {
          setData(data.body);
          setError(null);
          setPaying(1);
        } else setError("Invalid ID!!");
      })
      .catch(() => setError("Some Error Occured."));
  };

  return (
    <PageWrapper>
      {error && (
        <Alert
          severity="error"
          className="w-50 mx-auto"
          style={{ position: "absolute", top: 50, left: "25%" }}
        >
          {error}
        </Alert>
      )}
      {isPaying == 0 && (
        <div className="d-flex flex-column align-items-center justify-content-center gap-5 h-100">
          <Typography variant="h4">Please Enter your Unique ID</Typography>
          <TextField
            label="Unique ID"
            variant="outlined"
            onChange={(e) => setID(e.target.value)}
          />
          <Button variant="contained" onClick={search}>
            Search
          </Button>
        </div>
      )}
      {isPaying == 1 && <Payment setPaying={setPaying} userData={userData} />}
      {isPaying == 2 && <Submitted item="Payment" />}
    </PageWrapper>
  );
}

export default Fee;
