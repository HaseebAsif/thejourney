import React from "react";
import Profile from "../../components/profile";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/Provider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "81.7vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "82.9vh",
    },
  },
}));

export default function index() {
  const context = React.useContext(AuthContext);
  const classes = useStyles();
  const { user } = context;
  const router = useRouter();
  return (
    <Layout>
      <div className={classes.root}>
        <Profile />
      </div>
    </Layout>
  );
}
