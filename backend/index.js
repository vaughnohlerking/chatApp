const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "PRIVATE-KEY": "78ca8a27-1ff6-40e8-a316-9ac52fb48681" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// 715a480d-e956-469b-b6b8-612795eebdd6
// 78ca8a27-1ff6-40e8-a316-9ac52fb48681

app.listen(3001);
