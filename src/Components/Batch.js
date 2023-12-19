import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: 20,
  paddingTop: 30,
  paddingBottom: 30,
  fontWeight: "bold",
  fontSize: 30,
  "&:hover": {
    backgroundColor: "#33f293",
  },
}));

export default function Batch({ setData }) {
  const [selected, setSelected] = useState(0);

  return (
    <Box className="col-10 my-5">
      <Typography variant="h4" className="text-center">
        Select the Batch of your Choice
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          xs={6}
          onClick={() => {
            setSelected(1);
            setData((prev) => ({ ...prev, batch: "6-7AM" }));
          }}
        >
          <Item style={{ backgroundColor: selected === 1 ? "#19e337" : null }}>
            6-7AM
          </Item>
        </Grid>
        <Grid
          xs={6}
          onClick={() => {
            setSelected(2);
            setData((prev) => ({ ...prev, batch: "7-8AM" }));
          }}
        >
          <Item style={{ backgroundColor: selected === 2 ? "#19e337" : null }}>
            7-8AM
          </Item>
        </Grid>
        <Grid
          xs={6}
          onClick={() => {
            setSelected(3);
            setData((prev) => ({ ...prev, batch: "8-9AM" }));
          }}
        >
          <Item style={{ backgroundColor: selected === 3 ? "#19e337" : null }}>
            8-9AM
          </Item>
        </Grid>
        <Grid
          xs={6}
          onClick={() => {
            setSelected(4);
            setData((prev) => ({ ...prev, batch: "5-6PM" }));
          }}
        >
          <Item style={{ backgroundColor: selected === 4 ? "#19e337" : null }}>
            5-6PM
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
