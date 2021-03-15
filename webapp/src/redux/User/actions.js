import typesUser from './types';

export const setCurrentUser = user => ({
    type: typesUser.SET_CURRENT_USER,
    payload: user
})
