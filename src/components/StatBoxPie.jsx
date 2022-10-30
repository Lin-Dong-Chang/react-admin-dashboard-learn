import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PieChartChartjs from "./PieChartChartjs"
import { useState } from "react";
import Grid from "@material-ui/core/Grid";

let GridItemObj2 = {
    title: "Calibration",
    subtitle: "First Task",
    labels: ["Success", "A Failed", "B Failed", "C Failed"],
    datasets: [
      {
        data: [80, 20, 10, 30],
        backgroundColor: ["#228B02", "#B22202", "#F08008", "#FFC00C"]
      }
    ],
    total: 140
  }

const StatBoxPie = ({ icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [chartData, setChartData] = useState({
    labels: GridItemObj2.labels,
    datasets: GridItemObj2.datasets
  });



  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ width: 1/2 }}>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {GridItemObj2.title}
          </Typography>
        </Box>
        <Box sx={{ width: 1/2 }}>
          <PieChartChartjs chartData={chartData} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {GridItemObj2.subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {GridItemObj2.total}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBoxPie;
