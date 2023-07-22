import * as yup from 'yup';

export const trainValidationSchema = yup.object().shape({
  name: yup.string().required(),
  current_location: yup.string().required(),
});
