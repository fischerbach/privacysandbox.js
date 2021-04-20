# Knowledge

## Privacy Sandbox

https://iabtechlab.com/blog/explaining-the-privacy-sandbox-explainers/

### Federated Learning of Cohorts
https://wicg.github.io/floc/#dictdef-interestcohort

https://web.dev/floc/#as-a-web-developer-how-can-i-try-out-floc

#### Chrome's team about FLoC API patching: 
![](docs/floc_forgery.png)
```js
document.interestCohort = function(){ 
    return new Promise( function(resolveCb, rejectCb) {
        payload = {
            id: "12345",
            version: "chrome.1.1"
        };
        resolveCb(payload);
    });
};

(async () => {
    try {
        const interestCohort = await document.interestCohort();
        console.log('document.interestCohort():', interestCohort);
    }catch(error) {
        console.log(error);
    }
})();
```
Source: https://www.reddit.com/r/adops/comments/mu7mxu/floc_is_getting_a_lot_of_flak

### Trust Token API
https://www.chromestatus.com/feature/5078049450098688

https://docs.google.com/document/d/1qUjtKgA7nMv9YGMhi0xWKEojkSITKzGLdIcZgoz6ZkI/edit

https://docs.google.com/document/d/1TNnya6B8pyomDK2F1R9CL3dY10OAmqWlnCxsWyOBDVQ/edit

https://www.chromium.org/updates/trust-token
https://github.com/WICG/trust-token-api/blob/main/README.md

Trust Token API Explainer:\
https://github.com/WICG/trust-token-api/blob/main/README.md