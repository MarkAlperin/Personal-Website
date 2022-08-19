import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ResCard from "./ResCard";

const theme = createTheme();
const localRandiAuth = localStorage.getItem("localRandiAuth");

export default function ResPage(props) {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();
  const date = new Date();

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = async () => {
    const reservationData = await axios.get(
      `http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/${process.env.REACT_APP_DB_NAME}`
    );
    setReservations(reservationData.data);
  };

  const cancelReservation = async (id, madeByRandi) => {
    if (localRandiAuth || !madeByRandi) {
      await axios
        .delete(
          `http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/${process.env.REACT_APP_DB_NAME}/${id}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("ERROR: ", err);
        });
      getReservations();
    } else {
      alert("You must be Randi to cancel a reservation");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TwoColumnsContainer>
        <ResListContainer>
          <TitleContainer>
            {/* <ArrowBackIcon onClick={() => navigate("/tennis-time")} /> */}
            <Typography component="h1" variant="h5">
              Future Bookings
            </Typography>
          </TitleContainer>
          {!reservations.length && (
            <Typography variant="body1">No reservations</Typography>
          )}
          {Array.isArray(reservations) &&
            reservations
              .filter((reservation) => !reservation.isScheduled)
              .map((reservation) => (
                <ResCard
                  reservation={reservation}
                  date={date}
                  key={reservation._id}
                  cancelReservation={cancelReservation}
                />
              ))}
        </ResListContainer>
        <ResListContainer>
          <TitleContainer>
            <Typography component="h1" variant="h5">
              Booked Reservations
            </Typography>
          </TitleContainer>
          {!reservations.length && (
            <Typography variant="body1">No reservations</Typography>
          )}
          {Array.isArray(reservations) &&
            reservations
              .filter((reservation) => reservation.isScheduled)
              .map((reservation) => (
                <ResCard
                  reservation={reservation}
                  date={date}
                  key={reservation._id}
                  cancelReservation={cancelReservation}
                />
              ))}
        </ResListContainer>
      </TwoColumnsContainer>
    </ThemeProvider>
  );
}

const TwoColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResListContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  justify-content: "center";
  align-items: "center";
  margin-top: 6%;
  width: 35%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 6%;
`;

const TypographyContainer = styled.div`
  display: flex;
  align-self: center;
`;
