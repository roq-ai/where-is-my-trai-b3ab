import * as yup from 'yup';

export const searchValidationSchema = yup.object().shape({
  train_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
