export const adminverification = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.rolesUI)) return false;
    const { rolesUI } = currentUser;
    if(rolesUI.includes('admin')) return true;

    return false;
}