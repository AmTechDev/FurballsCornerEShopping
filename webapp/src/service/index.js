export const adminverification = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.uiRoles)) return false;
    const { uiRoles } = currentUser;
    if(uiRoles.includes("admin")) return true;

    return false;
}