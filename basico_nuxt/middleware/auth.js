export default ({ redirect }) => {
    const loggedIn = false;
    console.log('auth middleware');

    if (!loggedIn) {
        return redirect('/');
    }
}