/// <reference types="jest" />

import got = require("got");

test("Got api test", async () => {
    const url = new URL("https://jsonvat.com/");
    const options: got.GotJSONOptions = {json: true};

    const response = await got(url.href, options);

    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body).toMatchSnapshot();
    expect(body).toMatchObject({details: "http://github.com/adamcooke/vat-rates"});
});
