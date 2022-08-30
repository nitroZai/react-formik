import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

function YTForm() {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  //   // validate,
  // });

  // console.log("Formik Touched", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          Name:
          <Field type="text" id="name" name="name"></Field>
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          E-mail:
          <Field type="email" id="email" name="email"></Field>
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          Channel:
          <Field type="text" id="channel" name="channel"></Field>
          <ErrorMessage name="channel">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          Comments:
          <Field
            as="textarea"
            id="comment"
            placeholder="Enter your comments here"
            name="comment"
          ></Field>
        </div>

        <div className="form-control">
          Address:
          <Field name="address">
            {(props) => {
              const { field, meta, form } = props;
              return (
                <div>
                  <input type="text" name="address" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          Facebook Profile:
          <Field type="text" name="social.facebook" id="facebook"></Field>
        </div>

        <div className="form-control">
          Twitter Profile:
          <Field type="text" name="social.twitter" id="twitter"></Field>
        </div>

        <div className="form-control">
          Primary Phone Number:
          <Field type="text" name="phoneNumbers[0]" id="primaryPh"></Field>
        </div>

        <div className="form-control">
          Secondary Phone Number:
          <Field type="text" name="phoneNumbers[1]" id="secondaryPh"></Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YTForm;
