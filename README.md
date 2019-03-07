# express-ssb-invites

small express app that serves up a static html page for getting invites to an ssb pub. see a live example at [ssb.yomills.com](http://ssb.yomills.com).

note: this app does not run scuttlebot. it must be running seperately for the `/invite` route to work.

## usage

```
npm install
pm2 start index.js --name pub-invites
```
