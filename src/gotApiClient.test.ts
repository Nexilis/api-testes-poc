/// <reference types="jest" />
/// <reference types="got" />

import got = require("got");

test("Got api test", async () => {
    var url = new URL("https://jsonvat.com/");
    var options: got.GotJSONOptions = {json: true};

    const response = await got(url.href, options);

    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body).toMatchSnapshot();
    expect(body).toMatchObject({"details": "http://github.com/adamcooke/vat-rates"});
});