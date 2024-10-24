import { Typography } from "@mui/material";
import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StyledBusinessUnits = styled.div<{ bgColor: string }>(({ bgColor }) => ({
  width: "20rem",
  height: "5rem",
  padding: "10px",
  boxSizing: "border-box",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "1rem",
  backgroundColor: bgColor,
  textAlign: "center",
  "&:first-of-type": {
    marginLeft: 0,
  },

  h3: {
    margin: "0",
  },
  p: {
    margin: 0,
  },
}));

const RiskScoreCircle = styled("div")({
  width: "10rem",
  height: "10rem",
  backgroundColor: "orange",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "5%",
  p: {
    fontWeight: "bold",
    fontSize: "24px",
  },
});

const ChartContainer = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});

const Dashboard: React.FC = () => {
  const doughnutChatData = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Dataset",
        data: [60, 40],
        backgroundColor: ["#2d8c43", "#d71216"],
        hoverBackgroundColor: ["#2d8c43", "#d71216"],
      },
    ],
  };

  const barChartData = {
    labels: ["May", "June", "July", "August", "Sept", "Oct"],
    datasets: [
      {
        label: "Distribution of Risk Score. Lowest to Highest",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // This makes the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Container>
        <StyledBusinessUnits bgColor="#52c6ff">
          <h3>Total Risk Units</h3>
          <p>3</p>
        </StyledBusinessUnits>
        <StyledBusinessUnits bgColor="#d71216">
          <h3>Total Nexus Issues</h3>
          <p>3</p>
        </StyledBusinessUnits>
        <StyledBusinessUnits bgColor="#fd7922">
          <h3>Total Container Vulnerabilities</h3>
          <p>2</p>
        </StyledBusinessUnits>
        <StyledBusinessUnits bgColor="#fed077">
          <h3>Total Secrity Issues</h3>
          <p>3</p>
        </StyledBusinessUnits>
      </Container>

      <ChartContainer>
        <RiskScoreCircle>
          <Typography variant="body2" component="div">
            Average Risk Score
          </Typography>
          <p>6/10</p>
        </RiskScoreCircle>
        <div style={{ width: "50%" }}>
          <Typography
            variant="h6"
            component="div"
            style={{ textAlign: "center" }}
          >
            Risk Distibution
          </Typography>
          <Bar data={barChartData} options={options} />
        </div>

        <section>
          <div style={{ width: "100%" }}>
            <Typography
              variant="h6"
              component="div"
              style={{ textAlign: "center" }}
            >
              Application Compliance
            </Typography>
            <Doughnut data={doughnutChatData} />
          </div>
        </section>
      </ChartContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export default Dashboard;
