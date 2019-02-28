const express = require('express');
const pull = require('pull-stream');
const Client = require('ssb-client');

const app = express();
const port = 3000;

app.use(express.static('view'))

function getInvite(sbot, n) {
  return function readInvite(end, cb) {
    if (end === true) {
      return;
    }
    if (end) {
      return cb(end);
    }
    sbot.invite.create(n, cb);
  };
}

app.get('/invite', (req, res) => {

  const onDone = (invite) => {
        console.log('invite?', invite);
         return res.json({
          invite
        });
  }

  Client((err, sbot) => {
    pull(
      getInvite(sbot, 1),
      pull.take(1),
      pull.drain(onDone)
    )
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
