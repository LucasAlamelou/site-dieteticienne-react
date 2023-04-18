const url = `https://serveur-dieteticienne-ecf.herokuapp.com`;
const urlD = `http://localhost:3900`;

export const getAllergns = async () => {
    const response = await fetch(`${url}/allergns`)
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                return null;
            }
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
    return response;
};

export const getRegimes = async () => {
    const response = await fetch(`${url}/regimes`)
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                return null;
            }
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
    return response;
};

export const getRecettes = async (token) => {
    if (token) {
        const r = await fetch(`${url}/recettes/${token}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.status === 'error') {
                    return null;
                }
                return json;
            })
            .catch((error) => {
                throw new Response('', {
                    status: 404,
                    statusText: error,
                });
            });
        return r;
    } else {
        const resp = await fetch(`${url}/recettes`)
            .then((response) => response.json())
            .then((json) => {
                if (json.status === 'error') {
                    return null;
                }
                return json;
            })
            .catch((error) => {
                throw new Response('', {
                    status: 404,
                    statusText: error,
                });
            });
        return resp;
    }
};

export const addOrModifiyRecette = async (content, isRouteModify) => {
    const routeAddRecette = `/recetteCreate`;
    const routeModifyRecette = `/recetteModify`;

    const requestOptions = {
        method: `${isRouteModify === true ? 'PUT' : 'POST'}`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    };
    const resultat = await fetch(
        `${url}${isRouteModify === true ? routeModifyRecette : routeAddRecette}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                console.error(json.message);
            }
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
    return resultat;
};

export const sendFormContact = async (content) => {
    const routeFormContact = `/formContactCreate`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    };
    const resultat = await fetch(`${url}${routeFormContact}`, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                console.error(json.message);
            }
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
    return resultat;
};

export const postNote = async (content) => {
    const changeNote = `/recetteAddNote`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    };
    const response = await fetch(`${url}${changeNote}`, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                return null;
            }
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
    return response;
};

export const addUser = async (content) => {
    const addUser = `/userCreate`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    };
    const response = await fetch(`${url}${addUser}`, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                return null;
            }
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
    return response;
};

export const getLogin = async (content) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    };
    await fetch(`${url}/userLogin`, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            if (json.status === 'error') {
                console.error(json.message);
                return json;
            }
            window.localStorage.setItem('tokenMyApp', json.token.token);
            window.localStorage.setItem('roleMyApp', json.role);
            return json;
        })
        .catch((error) => {
            throw new Response('', {
                status: 404,
                statusText: error,
            });
        });
};
