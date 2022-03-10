import React from "react";

import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  
  CardActions,
  Button,
  CardHeader,
 
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};




//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(10).required("A phone number is required"),

});

const BasicDetailsComponent = () => {
  const classes = useStyle();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Grid container justify="center" spacing={1}>
        <Grid item md={6}>
          <Card className={classes.padding}>
            <CardHeader title="BASIC DETAILS"></CardHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ dirty, isValid, values, handleChange, handleBlur }) => {
                return (
                  <Form>
                    <CardContent>
                      <Grid item container spacing={1} justify="center">
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={values.firstName}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            value={values.lastName}
                            component={TextField}
                          />
                        </Grid>

                       

                       
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="phone"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            value={values.phone}
                            component={TextField}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        type="Submit"
                        className={classes.button}
                      >
                        SUBMIT
                      </Button>
                    </CardActions>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Grid>
      </Grid>
      
    </>
  );
};

export default BasicDetailsComponent;
