import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    name: yup.string().required('Required Field!!'),
    email: yup.string().email('Enter a Valid Email').required('Required Field!!'),
    phone: yup.string().min(11).required('Required Field')
});