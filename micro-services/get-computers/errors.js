var body = {};
var headers = {
    'Content-Type': 'application/json',
}

module.exports = {

    http_error: function(req, res, info)
    {
        switch (info.code)
        {
            case 400:
                body = { error: true, message: "Bad Request" };
                break;

            case 401:
                body = { error: true, message: "Unauthorized" };
                break;

            case 403:
                body = { error: true, message: "Forbidden" };
                break;

            case 404:
                body = { error: true, message: "Not Found" };
                break;

            case 409:
                 body = { error: true, message: "Conflict" };
                break;

            case 500:
                body = { error: true, message: "Internal Server Error" };
                break;

            default:
                body = { error: true, message: "Bad Request" };
        }

        // res.writeHead(info.code, headers);
        res.write(body);
        res.end()
    },

    http_success: function(req, res, info)
    {
        switch (info.code)
        {
            case 201:
                body = { error: false, message: info.message };
                break;

            default:
                body = { error: false, message: info.message, data: info.data };
        }
        
        // res.writeHead(info.code, headers);
        res.send(body);
    }
};