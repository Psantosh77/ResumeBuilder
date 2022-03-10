

import React from "react";

import {Grid, makeStyles,Card,CardContent,CardActions,Button,CardHeader,FormControl} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import "./Education.css"

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

//Data
const initialValues = {
 
  matriculation:"",
  matriculationPassingYear:"",
  matriculationPercentge:"",
  
  intermediate:"",
  intermediatePassingYear:"",
  intermediatePercentage:"",

  graduation:"",
  gradualtionPassingYear:"",
  graduationPercentage:"",

};
 

 



//validation schema
let validationSchema = Yup.object().shape({
  matriculation:Yup.string().required("required"),
  matriculationPassingYear:Yup.date().required("Rwquired"),
  matriculationPercentge:Yup.number().required("Rwquired"),
  
  intermediate:Yup.string().required("required"),
  intermediatePassingYear:Yup.date().required("Rwquired"),
  intermediatePercentage:Yup.number().required("Rwquired"),

  graduation:Yup.string().required("required"),
  gradualtionPassingYear:Yup.date().required("Required"),
  graduationPercentage:Yup.number().required("Rwquired"),

  
  
  
//   password: Yup.string()
//     .matches(
//       lowercaseRegEx,
//       "Must contain one lowercase alphabetical character!"
//     )
//     .matches(
//       uppercaseRegEx,
//       "Must contain one uppercase alphabetical character!"
//     )
//     .matches(numericRegEx, "Must contain one numeric character!")
//     .matches(lengthRegEx, "Must contain 6 characters!")
//     .required("Required!")
});

const EducationComponent = () => {
  const classes = useStyle();

  const onSubmit = (values) => {
    console.log(values);
  };

 
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="Education Qualification"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={12}>
                        <Field
                          label="Matriculation"
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="matriculation"
                          value={values.matriculation}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                      <Field
                      label="Passing Year"
                      variant="outlined"
                      fullWidth
                      name="gradualtionPassingYear"
                      value={values.gradualtionPassingYear}
                      type="date"
                      component={TextField}
                      id="date56"
                    />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                      <Field
                        label="Percentage"
                        variant="outlined"
                        fullWidth
                        name="matriculationPercentge"
                        value={values.matriculationPercentge}
                        component={TextField}
                      />
                    </Grid>


                      <Grid item xs={12} sm={6} md={12}>
                     
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <Field
                          label="Intermediate or Equivalent"
                          variant="outlined"
                          fullWidth
                          name="intermediate"
                          value={values.intermediate}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Passing Year"
                          variant="outlined"
                          fullWidth
                          name="intermediatePassingYear"
                          value={values.intermediatePassingYear}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Percentage"
                          variant="outlined"
                          fullWidth
                          name="intermediatePercentage"
                          value={values.intermediatePercentage}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <Field
                          label="Graduation"
                          variant="outlined"
                          fullWidth
                          name="graduation"
                          value={values.graduation}
                          type="text"
                          component={TextField}
                        />
                      </Grid>

                      
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Passing Year"
                          variant="outlined"
                          fullWidth
                          name="gradualtionPassingYear"
                          value={values.gradualtionPassingYear}
                          type="date"
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Percentage"
                          variant="outlined"
                          fullWidth
                          name="graduationPercentage"
                          value={values.graduationPercentage}
                          type="text"
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
                    Submit
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EducationComponent;
