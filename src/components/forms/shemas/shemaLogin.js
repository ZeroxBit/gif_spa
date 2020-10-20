import * as Yup from "yup";

export const LoginShema = Yup.object().shape({
    email: Yup.string()
        .email("Ingrese un email valido")
        .max(50, "Maximo 50 caracteres")
        .required("Este campo es requerido"),

    password: Yup.string()
        .min(4, "Mínimo 2 caracteres")
        .max(30, "Maximo 40 caracteres")
        .required("Este campo es requerido"),
});

export const INITIAL_VALUES_LOGIN = {
    email: "",
    password: ""
};
