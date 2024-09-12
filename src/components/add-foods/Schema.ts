import * as Yup from "yup";

export const Schema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  category_id: Yup.string().required("Product category is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .min(1, "Price must be at least 1"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1"),
  unit: Yup.string().required("Unit is required"),
  description: Yup.string().required("Product description is required"),
});
