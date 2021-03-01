import React, { FC, useState } from "react";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomTextField from "../customTextField";
import { useAuth } from "../../context/authContext";
import { useStyles } from "./styles";

type SignInFormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const EmailSignIn: FC = () => {
  const classes = useStyles();
  const { isSignInForm, signIn, signUp } = useAuth();
  const [loading, setLoading] = useState(false);

  const initialValues: SignInFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signUpFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide a valid email address (abc@xy.z)")
      .required("Required"),
    password: Yup.string().required('Without a password, "None shall pass!"'),
    confirmPassword: isSignInForm()
      ? Yup.string()
      : Yup.string()
          .oneOf([Yup.ref("password")], "Password must be the same.")
          .required("Required"),
  });

  const onSubmit = (data: SignInFormValues) => {
    setLoading(true);
    isSignInForm()
      ? signIn(data.email, data.password)
      : signUp(data.email, data.password);
    setLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpFormSchema}
      onSubmit={onSubmit}
    >
      {({ isValid }) => (
        <Form>
          <Grid container justify="center" spacing={1}>
            <Grid item xs={12}>
              <CustomTextField name="email" label="Email" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                name="password"
                label="Password"
                fullWidth
                type="password"
              />
            </Grid>
            {!isSignInForm() && (
              <Grid item xs={12}>
                <CustomTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  fullWidth
                  type="password"
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                startIcon={
                  loading ? (
                    <CircularProgress
                      size="1rem"
                      className={classes.circular}
                    />
                  ) : null
                }
                disabled={!isValid}
              >
                {isSignInForm()
                  ? loading
                    ? "Signing In"
                    : "Sign In"
                  : loading
                  ? "Signing Up"
                  : "Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EmailSignIn;
