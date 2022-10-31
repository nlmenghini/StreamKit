window.config = {

	// the url of the DonorDrive API you wish to poll
	api: 'https://extralife.donordrive.com/api/',
	// the resource (events, participants, teams)
	resource: 'participants',
	// the ID of the specific resource to poll
	resourceID: 484208,

	// properties specific to donation-ticker
	donationTicker: {
		// Donation date mask/format
		dateMask: 'MM/DD/YYYY hh:mm a',
		// the duration (in seconds) the "new" badge will display next to a donation
		highlightDuration: 60,
		// donations over this amount will be highlighted in the list (null to ignore highlighting)
		highlightThreshold: 100,
		// the number of donations to return (1-100)
		listLimit: 25
	},

	// properties specific to top-donors
	topDonors: {
		// date mask/format
		dateMask: 'MM/DD/YYYY hh:mm a',
		// the number of donors to return (1-100)
		listLimit: 25
	},

	// properties specific to streaming-thermometer
	streamingThermometer: {
		showDonations: false
	}

};
