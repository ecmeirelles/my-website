export default () => {
    return fetch(
        'http://www.mocky.io/v2/5abd90c02f00006600e6c34c',
        {
            headers: { Accept: 'application/json' },
            method: 'GET'
        }
    ).then((response) => {
        if (!response.ok) {
            throw new Error('Impossible to fetch the information.');
        }
        return response.json();
    }).then((result) => {
        return result;
    });
}