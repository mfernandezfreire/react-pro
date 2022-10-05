import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstractions = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>


            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup
                        .string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup
                        .string()
                        .max(10, 'Debe tener 10 caracteres o menos')
                        .required('Requerido'),
                    email: Yup
                        .string()
                        .email('Email no tiene un formato valido')
                        .required('Requerido'),
                    terms: Yup
                        .boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup
                        .string()
                        .notOneOf(['it-junior'], 'Esta opción no es permitida')
                        .required('Requerido')
                })}
            >
                {
                    (formik) => {
                        return (
                            <Form>
                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    placeholder="Manu" />

                                <MyTextInput
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Freire" />

                                <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    placeholder="algo@email.com"
                                    type="email" />

                                <MySelect label="Job Type" name="jobType">
                                    <option value="developer">Pick Something</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="it-senior">IT Senior</option>
                                    <option value="it-junior">IT Junior</option>
                                </MySelect>

                                <MyCheckBox label="Terms and conditions" name="terms" />

                                <button type='submit'>Submit</button>
                            </Form>
                        );
                    }
                }

            </Formik>

        </div>
    )
}
