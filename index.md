Repository: [https://github.com/fischerbach/privacysandbox.js](https://github.com/fischerbach/privacysandbox.js)

This JS library contains my experiments around Google Chrome's Privacy Sandbox.

I have not yet decided which way this is going. 
Currently, it tries to bring some Privacy Sandbox APIs to unsupported browsers, such as Firefox, Safari or... Chrome :)

# Usage
## Browser
```html
<script src='privacysandbox.min.js'></script>
```

## Server
```sh
npm install
#for starting Express server:
node server.js

#or, for development:
npm run serve
```


# Privacy Sandbox

## Federated Learning of Cohorts
This implementation stores user browsing history in localStorage (only within one domain) and generates cohort_id using simhash algorithm.

After including `privacysandbox.min.js` file on website, you can get cohort id of the user:
```js
(async () => {
    cohort = await PrivacySandbox.floc.interestCohort();
    url = new URL("https://ads.example/getCreative");
    url.searchParams.append("cohort", cohort);
    creative = await fetch(url);
})();
```

You can replace (or initialize) FLoC API:
```js
PrivacySandbox.floc.force();
```

You can also disable FLoC:
```js
PrivacySandbox.floc.disable();

// or pass fixed cohort id:
PrivacySandbox.floc.disable('437737');
```
