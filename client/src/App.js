import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Form from "./components/Form";
import Posts from "./components/Posts"
const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src="https://tse3.mm.bing.net/th?id=OIP.H3j7GWHg7v0jR-YeOQavlQHaJf&pid=Api&P=0" alt="memories" height="360" width="200" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={7} >
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    )
}

export default App