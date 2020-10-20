import { setToken } from "./sessionStorage";

export const fakeLogin = (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( formData.email == "admin@admin.com" && formData.password == "admin" ) {
                const tokenFake = "fakeToken";
                setToken(tokenFake);
                return resolve({status: "ok", token: tokenFake})
            } else {
                return resolve({status: "error"})
            }

        }, 500);
    });
}
