const expect = require('chai').expect;
const axios = require('axios');
const xmlTojs = require('xml2js').parseString;
const reformat = require('../helpers/response/reformat');

// const GetFlickr = require('../server/controllers/flickr-controller').GetFlickr;

describe('get initial images', () => {
	it('should return from public seed', () => {
		axios.get('https://api.flickr.com/services/feeds/photos_public.gne')
			.then(resp => {
				//expect an object back
				expect(typeof resp).to.equal('object');
				xmlTojs(resp.data, (err, rz) => {
					const imgs = reformat.RefineFlickrImagesArray(rz.feed.entry);
					expect(imgs.length).to.be.greaterThan(0);
				});
			});
	});
});

describe('get search photos by text', () => {
	it('should return photos according to the search term', () => {
        const term = 'test';
		const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=edc0dcfb15e1c7b098d7e0e3c19515e8&text=${term}&content_type=7&per_page=20`;
		expect(url).to.be.equal('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=edc0dcfb15e1c7b098d7e0e3c19515e8&text=test&content_type=7&per_page=20');

		axios.get(url)
			.then(resp => {
				xmlTojs(resp.data, (err, rz) => {
					if (err) {
						next(err);
					} else {
						const photos = reformat.RefineSearchPhotos(rz.rsp.photos[0].photo);
						expect(photos.length).to.be.greaterThan(0);
					}
				});
			});
	});
});
