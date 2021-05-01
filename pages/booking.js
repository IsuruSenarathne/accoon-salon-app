import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default function Booking() {
    return(
        <Container maxWidth="sm">
            <h1>Place your booking</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField style={{ margin: 4 }} id="filled-basic" label=" " variant="filled" />
            <TextField style={{ margin: 4 }} id="filled-basic" label="Filled" variant="filled" />
            <TextField style={{ margin: 4 }} id="filled-basic" label="Filled" variant="filled" />
            <TextField style={{ margin: 4  }} id="filled-basic" label="Filled" variant="filled" />
            </div>


        </Container>
    )
}