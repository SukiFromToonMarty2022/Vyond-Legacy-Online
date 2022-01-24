module.exports = {
	xmlFail(message = "Sound Saving Failed. Please Try Again another time.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
