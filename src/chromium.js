//Run Chrome Canary with FLoC enabled.
//Remember to replace path to Chrome executable

const {execFile} = require('child_process');

execFile('/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary', ['--enable-blink-features=InterestCohortAPI','--enable-features="FederatedLearningOfCohorts:update_interval/10s/minimum_history_domain_size_required/1,FlocIdSortingLshBasedComputation,InterestCohortFeaturePolicy"',['http://127.0.0.1:8080']], err => {
    console.log('Chrome Canary with FLoC enabled');
});