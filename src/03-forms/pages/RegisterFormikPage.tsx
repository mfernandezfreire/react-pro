import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>


            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup
                        .string()
                        .min(2, 'Debe tener 2 o más caracteres')
                        .min(15, 'El nombre debe ser menor de 15 caracteres')
                        .required('Requerido'),
                    email: Yup
                        .string()
                        .email('Email no tiene un formato valido')
                        .required('Requerido'),
                    password1: Yup
                        .string()
                        .min(6, 'Minimo 6 caracteres')
                        .required(),
                    password2: Yup
                        .string()
                        .oneOf([Yup.ref('password1'), null], 'Los passwords no coinciden')
                        .required('Requerido')
                })}
            >
                {
                    ({ handleReset }) => {
                        return (
                            <Form>
                                <MyTextInput
                                    label="Name"
                                    name="name"
                                    placeholder="Manu"
                                />

                                <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="algo@email.com"
                                />

                                <MyTextInput
                                    label="Password"
                                    name="password1"
                                    type="password"
                                />

                                <MyTextInput
                                    label="Confirm Password"
                                    name="password2"
                                    type="password"
                                />

                                <button type='submit'>Submit</button>
                                {/* <button type='reset'>Reset</button> */}
                                <button  onClick={handleReset} >Reset</button>
                            </Form>
                        );
                    }
                }

            </Formik>

        </div>
    )
}
