let api = require('../../.keys');

let myHeaders = new Headers({
    "X-API-Key": api.API_Key
    // "User-agent": "Loadup/1.0 AppId/appIdNum (+webUrl;contactEmail)"
});

async function genericGet(path) {
    let call = await fetch(api.APU_URL + path, {
        method: 'GET',
        headers: myHeaders
    });
    return await call.json();
}

async function getManifest() {
    return genericGet('/Destiny2/Manifest/');
}

async function findMatchingUsers(userName) {
    let user = await genericGet(`/User/SearchUsers/?q=${userName}`);
    return user.Response;
}


module.exports = {
    get: genericGet,
    getManifest: getManifest,
    findUser: findMatchingUsers
}