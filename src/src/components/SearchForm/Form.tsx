import { Formik, Form, Field } from "formik";
import type { FormikHelpers } from "formik";
import { useId } from "react";
import * as Yup from "yup";

//: Відправка форми
// #region
// interface OrderFormValues {
//   username: string;
//   email: string;
// }

// const initialValues: OrderFormValues = {
//   username: "",
//   email: "",
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>,
//   ) => {
//     console.log("Order data:", values);
//     actions.resetForm();
//   };
//   return (
//     <Formik
//       initialValues={{
//         username: "",
//         email: "",
//       }}
//       onSubmit={() => {}}
//     >
//       <Form>
//         <Field type="text" name="username"></Field>
//         <Field type="email" name="email"></Field>
//         <button type="submit">Place orders</button>
//       </Form>
//     </Formik>
//   );
// }
// #endregion

// : Типи полів
// #region

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: string;
}

const initialValues: OrderFormValues = {
  username: "",
  email: "",
  deliveryTime: "",
};

const OrderFromSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Ivalid email format")
    .required("Email is required"),
});

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>,
  ) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OrderFromSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="email" />

        <label htmlFor={`${fieldId}-deliveryTime`}>
          Preferred delivery time
        </label>
        <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
          <option value="">--Chose delivery time--</option>
          <option value="morning">Morning (8:00-12:00)</option>
          <option value="afternoon">Afternoon (12:00-16:00)</option>
          <option value="evening">Evening (16:00-20:00)</option>
        </Field>
      </Form>
    </Formik>
  );
}
// #endregion
