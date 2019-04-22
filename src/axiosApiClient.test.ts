/// <reference types="jest" />
/// <reference types="axios" />

import Axios from "axios";

test("Axios api test", async () => {
    var url = new URL("https://jsonvat.com/");

    var response = await Axios.get(url.href);

    expect(response.status).toBe(200);
    expect(response.data).toMatchSnapshot();
});