
export const getToken = () => {
    return sessionStorage.getItem("token");
}

export const setToken = (token) => {
    sessionStorage.setItem("token", token);
}

export const deleteToken = () => {
    sessionStorage.removeItem("token");
}