const axios = require('axios');

exports.handler = async (event, context) => {
    const search = event.queryStringParameters.search;
    const targetURL = `http://www.recipepuppy.com/api/?q=${search}`;

    try {
        const response = await axios.get(targetURL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        }
    }
};
