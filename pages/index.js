import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button } from "@material-ui/core";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [service, setService] = useState(1000);
  const [bookingTime, setBookingTime] = useState(new Date());
  const [salon, setSalon] = useState("");

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const handleChangeSalon = (event) => {
    setSalon(event.target.value);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Container
            maxWidth="sm"
            style={{
              padding: 24,
              backgroundColor: "gainsboro",
              borderRadius: 12,
              boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
            }}
          >
            <h1>Place your booking</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                style={{ margin: 4 }}
                id="firstName"
                label="First name"
                variant="filled"
                value={firstName}
                handleChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                style={{ margin: 4 }}
                id="lastName"
                label="Last name"
                variant="filled"
                value={lastName}
                handleChange={(e) => setLastName(e.target.value)}
              />
              <Select
                labelId="service"
                id="service"
                style={{ margin: 4 }}
                value={service}
                variant="filled"
                onChange={handleChange}
              >
                <MenuItem value={1000}>Hair cut</MenuItem>
                <MenuItem value={1001}>Hair cut with beard</MenuItem>
                <MenuItem value={1002}>Beard</MenuItem>
              </Select>
              <DateTimePicker
                style={{ margin: 4 }}
                label="Time"
                inputVariant="filled"
                value={bookingTime}
                onChange={setBookingTime}
              />
              <Select
                labelId="salon"
                id="salon"
                style={{ margin: 4 }}
                value={salon}
                variant="filled"
                onChange={handleChangeSalon}
              >
                <MenuItem value={1000}>Priyanth salon dehiwala</MenuItem>
                <MenuItem value={1001}>pamunuwa salon</MenuItem>
                <MenuItem value={1002}>mahragama salon</MenuItem>
              </Select>
              <Button style={{ margin: 4 }} variant="contained" color="primary">
                Place booking
              </Button>
            </div>
          </Container>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span className={styles.logo}>Accoon Systems</span>
          </a>
        </footer>
      </div>
    </MuiPickersUtilsProvider>
  );
}
