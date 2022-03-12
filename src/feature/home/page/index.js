import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { withController } from "../../../hoc/withController";
import { HomeProvider, useController } from "../controller/";
// import bg from "../../../assets/image/bg.png";
import Input from "../../../components/input";

function Home() {
    const classes = useStyles();
    const controller = useController();
    return (
        <>
            <Grid container className={classes.body}>
                <Grid container item xs={12} className={classes.logoutBox}>
                    <Button
                        variant="contained"
                        className={classes.logoutBtn}
                        onClick={() => controller.handleLogout()}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    body: {
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        height: "100vh",
        justifyContent: "center",
    },
    logoutBox: {
        height: 50,
        justifyContent: 'flex-end',
        margin: '15px 15px 0 0'
    },
    logoutBtn:{
        color: 'white',
        background: 'black',
        borderRadius: 6,
        height: 50,
        width: 100,
        
    }
}));

export default withController(HomeProvider)(Home);
