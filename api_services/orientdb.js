const config = require('config');
const rp = require('request-promise');

class DB {
  constructor(opt={}) {
    this._dbRef = config.get('orientdb');
  }
  createRequest(type='command', opts='') {
    console.log('requesting');
  }
  testConnect() {
    const {host, portHttp, db, username, password} = this._dbRef;
    const auth = `Basic ${new Buffer(`${username}:${password}`).toString("base64")}`

    rp.get({
      url: `http://${host}:${portHttp}/connect/plcwrr-dev`,
      headers: {
        Authorization: auth,
      }
    })
    .then(result => {
      console.log(result);
      console.log("success");
    })
    .catch(err => {
      console.log(err);
      console.log("error");
    });
  }
}

const aim = new DB();
aim.testConnect();