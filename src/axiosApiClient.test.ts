/// <reference types="jest" />

import Axios from "axios";

test("Axios api test", async () => {
    const url = new URL("https://jsonvat.com/");

    const response = await Axios.get(url.href);

    expect(response.status).toBe(200);
    expect(response.data).toMatchSnapshot();
});
