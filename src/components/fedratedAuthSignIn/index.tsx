import React, { FC } from "react";
import { Grid, Button } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";

import { useAuth } from "../../context/authContext";

const FedratedAuthSignIn: FC = () => {
  const { signInWithAuthProvider } = useAuth();

  return (
    <Grid container spacing={1} justify="center">
      <Grid item sm={4} xs={6}>
        <Button
          startIcon={<FcGoogle />}
          onClick={() => signInWithAuthProvider("GOOGLE")}
          fullWidth
          color="secondary"
          variant="outlined"
        >
          Google
        </Button>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button
          startIcon={<AiFillFacebook />}
          onClick={() => signInWithAuthProvider("FACEBOOK")}
          fullWidth
          color="primary"
          variant="outlined"
        >
          Facebook
        </Button>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button
          startIcon={<AiFillGithub />}
          onClick={() => signInWithAuthProvider("GITHUB")}
          fullWidth
          variant="outlined"
        >
          Github
        </Button>
      </Grid>
    </Grid>
  );
};

export default FedratedAuthSignIn;
