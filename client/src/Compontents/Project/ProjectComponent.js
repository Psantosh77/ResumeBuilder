import React, { useState } from "react";
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

import Typography from "@mui/material/Typography";

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

//Data
const initialValues = {
  projectName: "",
  from: "",
  to: "",
  mentor: "",
  teamSize: "",
  skill: "",
  description: "",
};

//validation schema
let validationSchema = Yup.object().shape({
  projectName: Yup.string().required("Required"),
  from: Yup.date().required("Required"),
  to: Yup.number(),
  mentor: Yup.string().required("Enter Your Mentor Name"),
  teamSize: Yup.number().required("Required"),
  skill: Yup.string().required("Required"),
  description: Yup.string().required("required"),

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

const ProjectComponent = () => {
  const classes = useStyle();
  const [val, SetVal] = useState([]);

  const onSubmit = (values) => {
    console.log(values);
    SetVal(values);
  };

  return (
    <>
      <Grid container justify="center" spacing={3}>
        <Grid item md={6}>
          <Card className={classes.padding}>
            <CardHeader title="Projects"></CardHeader>
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
                        <Grid item xs={12} sm={6} md={12}>
                          <Field
                            label="Project Name"
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="projectName"
                            value={values.projectName}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="From"
                            variant="outlined"
                            fullWidth
                            name="from"
                            value={values.from}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="To"
                            variant="outlined"
                            fullWidth
                            name="to"
                            value={values.to}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}></Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Mentor"
                            variant="outlined"
                            fullWidth
                            name="mentor"
                            value={values.mentor}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Team Size"
                            variant="outlined"
                            fullWidth
                            name="teamSize"
                            value={values.teamSize}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                          <Field
                            label="Key Skill"
                            variant="outlined"
                            fullWidth
                            name="skill"
                            value={values.skill}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                          <Field
                            label="Description"
                            variant="outlined"
                            fullWidth
                            name="description"
                            value={values.description}
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

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography  component="div">
            Project Name :{val.projectName}
          </Typography>

          <Typography  component="div">
            Project Started From :{val.from}
          </Typography>
          <Typography  component="div">
            Project Completed on :{val.to}
          </Typography>
          <Typography  component="div">
            Mentor :{val.mentor}
          </Typography>
          <Typography  component="div">
            Team Size :{val.teamSize}
          </Typography>
          <Typography  component="div">
            Key Skill :{val.skill}
          </Typography>

          <Typography  component="div">
            Description :{val.description}
          </Typography>
        </CardContent>
        
      </Card>
    </>
  );
};

export default ProjectComponent;
