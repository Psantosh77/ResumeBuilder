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
  intershipName: "",
  ifrom: "",
  ito: "",
  imentor: "",
  iteamSize: "",
  iskill: "",
  idescription: "",
};

//validation schema
let validationSchema = Yup.object().shape({
  intershipName: Yup.string().required("Required"),
  ifrom: Yup.date().required("Required"),
  ito: Yup.number(),
  imentor: Yup.string().required("Enter Your Mentor Name"),
  iteamSize: Yup.number().required("Required"),
  iskill: Yup.string().required("Required"),
  idescription: Yup.string().required("required"),

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

const InternshipComponent = () => {
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
            <CardHeader title="Internship"></CardHeader>
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
                            label="Internship Or Certicication"
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="intershipName"
                            value={values.intershipName}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="From"
                            variant="outlined"
                            fullWidth
                            name="ifrom"
                            value={values.ifrom}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="To"
                            variant="outlined"
                            fullWidth
                            name="ito"
                            value={values.ito}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}></Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Mentor"
                            variant="outlined"
                            fullWidth
                            name="imentor"
                            value={values.imentor}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Team Size"
                            variant="outlined"
                            fullWidth
                            name="iteamSize"
                            value={values.iteamSize}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                          <Field
                            label="Key Skill"
                            variant="outlined"
                            fullWidth
                            name="iskill"
                            value={values.iskill}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                          <Field
                            label="Description"
                            variant="outlined"
                            fullWidth
                            name="idescription"
                            value={values.idescription}
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
            Project Name :{val.iprojectName}
          </Typography>

          <Typography  component="div">
            Project Started From :{val.ifrom}
          </Typography>
          <Typography  component="div">
            Project Completed on :{val.ito}
          </Typography>
          <Typography  component="div">
            Mentor :{val.imentor}
          </Typography>
          <Typography  component="div">
            Team Size :{val.iteamSize}
          </Typography>
          <Typography  component="div">
            Key Skill :{val.iskill}
          </Typography>

          <Typography  component="div">
            Description :{val.idescription}
          </Typography>
        </CardContent>
        
      </Card>
    </>
  );
};

export default InternshipComponent;
