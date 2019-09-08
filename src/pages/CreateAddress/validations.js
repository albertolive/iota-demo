import string from 'yup/lib/string';
import object from 'yup/lib/object';

const stringYup = string().trim();

export const Validation = object()
  .shape({
    seed: stringYup
      .required()
      .uppercase()
      .min(81)
      .max(81)
      .matches(/^[A-Z9]*$/, {
        message: 'Only allowed number 9 numbers',
        excludeEmptyString: true
      })
  })
  .strict();
