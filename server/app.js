const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/980369066688663552/Y2y3FUg2UeFBJasJvCbS4UxeR-bffwYTYi7cWNGzDRdmX2ngIIi3-fpeIZdx_39KwHCN");
const IMAGE_URL = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
hook.setUsername('Discord Webhook Node Name');
hook.setAvatar(IMAGE_URL);
app.use(bodyParser.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});
app.post('/', (req, res) => {
    console.log(req.body);
    var s="Name: "+req.body['name']+"\n"+"Email: "+req.body['email']+"\n"+"Message: "+req.body['message'];
    hook.send(s);
    req.body=null;
});
app.listen(port);