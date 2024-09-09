import * as Yup from 'yup';

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Category Name is required'),
  shortNote: Yup.string().required('Short Note is required'),
});
