// import {simhash} from 'simhash';

const sjs = require('simhash-js');
const simhash = new sjs.SimHash();

// console.log(simhash.hash("This is a test of the Emergency Blogcast System"));

const PrivacySandbox = (function() {
	async function _generateCohort(){
		var history = Object.keys(localStorage);
		var cohort_id = simhash.hash( history.sort().join("|") );
		return cohort_id;
	}

	async function _interestCohort() {
		return {
			id: await _generateCohort(),
			version: "privacysandbox-js/v1"
		}
	}

	(function _saveVisit(){
		localStorage.setItem(window.location.host + window.location.pathname + window.location.hash, true);
	})();

	return {
		floc: {
			interestCohort: async function() {
				if (typeof document.interestCohort === "undefined"){
					document.interestCohort = _interestCohort
				}
				return _interestCohort();
			},
			disable: function(default_cohort_id) {
				if(typeof default_cohort_id === 'string') {
					document.interestCohort = async function() {
						return {
							id: default_cohort_id,
							version: 'no-algorithm/v1'
						}
					}
				} else {
					document.interestCohort = undefined;
				}
			},
            force: function() {
                document.interestCohort = PrivacySandbox.floc.interestCohort;
            }
		},
	};

})();

module.exports = PrivacySandbox;