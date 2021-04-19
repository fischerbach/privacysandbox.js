var simhash = require('simhash')();

var PrivacySandbox = (function() {
	async function _generateCohort(){
		var history = Object.keys(localStorage);
		var cohort_id = parseInt(simhash(history).join(""), 2);
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
			}
		},
		force: function() {
			document.interestCohort = PrivacySandbox.floc.interestCohort;
		}
	};

})();

window.PrivacySandbox = PrivacySandbox;

if (typeof document.interestCohort === "undefined") {
	document.interestCohort = PrivacySandbox.floc.interestCohort;
}