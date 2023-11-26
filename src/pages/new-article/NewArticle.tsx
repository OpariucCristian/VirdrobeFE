import React, { useState } from "react";
import { Box, Button, Input, InputLabel, Link, TextField } from "@mui/material";
import { Formik } from "formik";
import { initialValues } from "./InitialValues";
import styles from "./NewArticle.module.scss";
import { useNavigate } from "react-router-dom";
import {
  collectionStore,
  addNewArticle,
} from "../../reducers/collectionReducer";

const NewArticle = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<string>("");

  return (
    <>
      <Button onClick={() => navigate("/")}>{"< Back"}</Button>
      <Button onClick={() => console.log(collectionStore.getState())}>
        {"log"}
      </Button>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: any = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            const valuesWithId = {
              ...values,
              id: collectionStore.getState().collection.length,
            };
            collectionStore.dispatch(addNewArticle(valuesWithId));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box className={styles.formInputsContainer}>
              <TextField
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                label="Name"
              />

              <TextField
                type="text"
                name="brand"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.brand}
                label="Brand"
              />

              <TextField
                type="text"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
                label="Type"
              />

              <Input
                type="file"
                name="image"
                onChange={(e: any) => {
                  handleChange(e);
                  setImageFile(URL.createObjectURL(e.target.files[0]));
                }}
                onBlur={handleBlur}
                value={values.image}
                inputProps={{ accept: "image/gif, image/jpeg, image/png" }}
              />

              <TextField
                type="text"
                name="size"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.size}
                label="Size"
              />

              <TextField
                type="text"
                name="color"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.color}
                label="Color"
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Box>
            <img src={imageFile} width={250} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default NewArticle;
