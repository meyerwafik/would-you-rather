export const SET_SIGNED_USER = "SET_SIGNED_USER";

export function setauthedUser(id) {
    return {
        type: SET_SIGNED_USER,
        id
    }
}