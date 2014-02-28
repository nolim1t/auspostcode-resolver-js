var stateresolver = function(pcode) {
	if (!isNaN(parseFloat(pcode))) {
		if ((pcode >= 2600 && pcode <= 2618) || (pcode >= 2900 && pcode <= 2920)) {
			return 'ACT'
		} else if ((pcode >= 3000 && pcode <= 3999) || (pcode >= 8000 && pcode <= 8999)) {
			return 'VIC'
		} else if ((pcode >= 4000 && pcode <= 4999) || (pcode >= 9000 && pcode <= 9999)) {
			return 'QLD'
		} else if (pcode >= 5000 && pcode <= 5999) {
			return 'SA'
		} else if (pcode >= 7000 && pcode <= 7999) {
			return 'TAS'
		} else if (pcode >= 800 && pcode <= 999) {
			return 'NT'
		} else if ((pcode >= 6000 && pcode <= 6796) || (pcode >= 6800 && pcode <= 6999)) {
			return 'WA'	
		} else if ((pcode >= 1000 && pcode <= 1999) || (pcode >= 2000 && pcode <= 2599) || (pcode >= 2619 && pcode <= 2898) || (pcode >= 2921 && pcode <= 2999)) {
			return 'NSW'
		} else {
			return 'ERR'
		}
	} else {
		return 'ERR'
	}
}

module.exports = {
	lookup: stateresolver
}
