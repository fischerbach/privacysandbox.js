# privacysandbox.js

Repository: https://github.com/fischerbach/privacysandbox.js

This JS library contains my experiments around Google Chrome's Privacy Sandbox.

I have not yet decided which way this is going. 
Currently, it tries to bring some Privacy Sandbox APIs to unsupported browsers, such as Firefox, Safari or... Chrome :)

## Usage
```html
<script src='privacysandbox.min.js'></script>

```

## Privacy Sandbox

### Federated Learning of Cohorts
This implementation stores user browsing history in localStorage (only within one domain) and generates cohort_id using simhash algorithm.

After including `privacysandbox.min.js` file on website, library checks if `document.interestCohort` API is available. If not, replaces it with custom implementation `PrivacySandbox.floc.interestCohort`.

You can force such behaviour by using:
```js
PrivacySandbox.force();
```

You can also disable FLoC:
```js
PrivacySandbox.floc.disable();

// or pass fixed cohort id:
PrivacySandbox.floc.disable('437737');
```

## TODO
- [ ] remove browserify and simhash dependency
- [ ] add cross-domain storage libraries drop-in
- [ ] implement rest of APIs
### FLoC
- [ ] frequency of cohort_id recreating
- [ ] custom cohort function
