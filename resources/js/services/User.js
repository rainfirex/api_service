const store = (user) => {
    localStorage.setItem('email', user.email);
    localStorage.setItem('api_token', user.api_token);
}

const load = () => {
    const user = {
        email: localStorage.getItem('email'),
        api_token: localStorage.getItem('api_token')
    };

    user.auth =
        user.api_token !== null &&
        user.email !== null;

    if (user.auth) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.api_token;
    }
    return user;
}

const remove = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('api_token');

    axios.defaults.headers.common['Authorization'] = null;
}

export { store, load, remove }