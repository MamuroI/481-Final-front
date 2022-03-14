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
                <Grid container item xs={12} className={classes.searchBox}>
                    <Input
                        placeholder="search for something"
                        className={classes.inputBox}
                        value={controller.searchText}
                        onChange={(e) =>
                            controller.setSearchText(e.target.value)
                        }
                        required
                    />
                </Grid>
                <Grid container item xs={12} className={classes.btnGroup}>
                    <Grid container item xs={3} justifyContent="center">
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => controller.handleSearchTitle()}
                        >
                            Search Title
                        </Button>
                    </Grid>
                    <Grid container item xs={3} justifyContent="center">
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => controller.handleSearchIngredient()}
                        >
                            Search Ingredient
                        </Button>
                    </Grid>
                    <Grid container item xs={3} justifyContent="center">
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => controller.handleGetFav()}
                        >
                            Get Favorite
                        </Button>
                    </Grid>
                    <Grid container item xs={3} justifyContent="center">
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => controller.handleSearchFav()}
                        >
                            Search Favorite
                        </Button>
                    </Grid>
                </Grid>

                <Grid container item xs={12} className={classes.showFav}>
                    {controller.result?.map((item, index) => {
                        return (
                            <Grid
                                container
                                item
                                justifyContent="center"
                                alignItems="center"
                                className={classes.tableBox}
                                key={index}
                            >
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    justifyContent="flex-end"
                                >
                                    {
                                        controller.favOption === 0?
                                        <Typography
                                        className={classes.addBtn}
                                        onClick={() =>
                                            controller.handleAddFav(
                                                item.index
                                            )
                                        }
                                    >
                                        Add Fav
                                    </Typography>
                                        :
                                        <Typography
                                        className={classes.deleteBtn}
                                        onClick={() =>
                                            controller.handleRemoveFav(
                                                item.index
                                            )
                                        }
                                    >
                                        Delete Fav
                                    </Typography>
                                    }
                                    
                                </Grid>
                                <Typography variant="h4">
                                    {item.Title}
                                </Typography>
                                {/* <img src={require(`../../../assets/images/${item.Image_Name}.jpg`)} 
                                className={classes.image} /> */}
                                <Grid container item xs={12}>
                                    <Typography className={classes.textSizeH}>
                                        Ingredients
                                    </Typography>
                                    <Typography className={classes.textSizep}>
                                        {item.Ingredients}
                                    </Typography>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Typography className={classes.textSizeH}>
                                        Instruction
                                    </Typography>
                                    <Typography className={classes.textSizep}>
                                        {item.Instructions}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    })}
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
        height: "auto",
        justifyContent: "center",
    },
    logoutBox: {
        height: 50,
        justifyContent: "flex-end",
        margin: "15px 15px 0 0",
    },
    logoutBtn: {
        color: "white",
        background: "black",
        borderRadius: 6,
        height: 50,
        width: 100,
    },
    searchBox: {
        justifyContent: "center",
    },
    inputBox: {
        width: 800,
    },
    button: {
        color: "white",
        background: "red",
        borderRadius: 6,
        height: 50,
        width: "70%",
        marginTop: 30,
    },
    tableBox: {
        background: "lightblue",
        borderRadius: 10,
        width: 700,
        height: "auto",
        margin: 30,
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
    },
    showFav: {
        margin: 30,
        justifyContent: "space-around",
    },
    textSizeH: {
        fontSize: 18,
        fontWeight: 600,
    },
    textSizep: {
        fontSize: 16,
    },
    addBtn: {
        color: "green",
        cursor: "pointer",
    },
    deleteBtn: {
        color: "red",
        cursor: "pointer",
    },
}));

export default withController(HomeProvider)(Home);
