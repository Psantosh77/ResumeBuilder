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

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  from: Yup.number().required("Required"),
  to: Yup.number().required("Required"),
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
  const [val, SetVal] = useState();
  const onSubmit = (values) => {
    console.log(values);
    SetVal(values);
    console.log(val.projectName);
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Project Name</TableCell>
              <TableCell align="left">{val.projectName}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Project start From</TableCell>
              <TableCell align="left">{val.from}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Project Completed on </TableCell>
              <TableCell align="left">{val.to}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Mentor</TableCell>
              <TableCell align="left">{val.mentor}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Team Size</TableCell>
              <TableCell align="left">{val.teamSize}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Key Skill</TableCell>
              <TableCell align="left">{val.skill}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">Key Skill</TableCell>
              <TableCell align="left">{val.skill}</TableCell>
            </TableRow>

            </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProjectComponent;
