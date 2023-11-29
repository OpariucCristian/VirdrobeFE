import React, { useCallback, useMemo, useState } from "react";
import {
  Box,
  Button,
  Input,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { Formik } from "formik";
import { initialValues } from "./InitialValues";
import styles from "./NewArticle.module.scss";
import { useNavigate } from "react-router-dom";
import {
  collectionStore,
  addNewArticle,
} from "../../reducers/collectionReducer";
import { articleTypes } from "./ArticleTypes";
import { ToastContainer, toast } from "react-toastify";
import NewArticleToast from "./new-article-toast/NewArticleToast";
import { ROUTES } from "../../routes";
import { ArticleTypesEnum } from "../../constants/ArticleTypesConstant";
import { useDropzone } from "react-dropzone";

const NewArticle = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<string>("");
  const [articleType, setArticleType] = useState<string>(
    ArticleTypesEnum.T_SHIRT
  );

  // const onDrop = useCallback((acceptedFiles) => {
  //   setImageFile(acceptedFiles);
  // }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImageFile(URL.createObjectURL(acceptedFiles[0]));
    },
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  return (
    <>
      <button onClick={() => navigate(ROUTES.WARDROBE)}>asd</button>;
      <Button onClick={() => navigate(ROUTES.DASHBOARD)}>{"< Back"}</Button>
      <Button onClick={() => console.log(collectionStore.getState())}>
        {"log"}
      </Button>
      <Box className={styles.newArticlePageContainer}>
        <h2 className={styles.title}>Let's expand your wardrobe.</h2>
        <Box className={styles.newArticleFormContainer}>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors: any = {};
              if (values.type === "Choose type") {
                errors.type = "Incorrect type";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                const valuesWithId = {
                  ...values,
                  type: articleType !== "Other" ? articleType : values.type,
                  image: imageFile,
                  id: collectionStore.getState().collection.length,
                };
                collectionStore.dispatch(addNewArticle(valuesWithId));
                setSubmitting(false);
                setImageFile("");
                resetForm();
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
                    fullWidth
                  />

                  <TextField
                    type="text"
                    name="brand"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.brand}
                    label="Brand"
                    fullWidth
                  />

                  <Select
                    value={articleType}
                    label="Type"
                    onChange={(e) => setArticleType(e.target.value)}
                    defaultValue="Choose type"
                    fullWidth
                  >
                    {articleTypes.map((article, index) => {
                      return (
                        <MenuItem key={index} value={article.type}>
                          {article.type}
                        </MenuItem>
                      );
                    })}
                  </Select>

                  {articleType === ArticleTypesEnum.OTHER && (
                    <TextField
                      type="text"
                      name="type"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.type}
                      label="Type"
                      fullWidth
                    />
                  )}

                  <TextField
                    type="text"
                    name="size"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.size}
                    label="Size"
                    fullWidth
                  />

                  <TextField
                    type="text"
                    name="color"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.color}
                    label="Color"
                    fullWidth
                  />

                  {/* <Button variant="contained" component="label" fullWidth>
                    <h4>Upload photo</h4>
                    <input
                      type="file"
                      hidden
                      name="image"
                      onChange={(e: any) => {
                        handleChange(e);
                        setImageFile(URL.createObjectURL(e.target.files[0]));
                      }}
                      onBlur={handleBlur}
                      value={values.image}
                      accept={"image/gif, image/jpeg, image/png"}
                    /> */}
                  {/* </Button> */}

                  <Box
                    className={`${styles.baseStyle} ${
                      isDragActive && styles.focusedStyle
                    } ${isDragAccept && styles.acceptStyle} ${
                      isDragReject && styles.rejectStyle
                    }`}
                  >
                    <Box {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p>Drop the files here ...</p>
                      ) : (
                        <p>Drag and drop your picture here</p>
                      )}
                    </Box>
                  </Box>

                  <Tooltip
                    title="Each article needs to at least contain a name and a picture"
                    placement="right-start"
                    arrow
                  >
                    <span>
                      <Button
                        type="submit"
                        // disabled={isSubmitting || !values.name || !values.image}
                        variant="contained"
                        onClick={() =>
                          toast(<NewArticleToast imageFile={imageFile} />)
                        }
                      >
                        <h4>Add to wardrobe</h4>
                      </Button>
                    </span>
                  </Tooltip>
                </Box>
              </form>
            )}
          </Formik>

          <img
            className={styles.newArticlePicture}
            src={imageFile || "/article-placeholder.png"}
            width={500}
            height={500}
          />
        </Box>
      </Box>
    </>
  );
};

export default NewArticle;
