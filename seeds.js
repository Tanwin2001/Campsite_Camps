var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
	{
		name: "Daisy mountains",
		image:
			"https://images.unsplash.com/photo-1587748802181-fe36b5a47b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		subtitle: "It's you favourite Daisy Mountain You want to Visit",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "California",
		image:
			"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		subtitle: "Heavy California, I will Love you can't afford you",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "Santa Clara",
		image:
			"https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		subtitle: "Santa Clara, It's your favoutire",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},

	{
		name: "Sky Dale",
		image:
			"https://images.unsplash.com/photo-1579705299896-2cf594782f15?ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80",
		subtitle: "Touch the skies.",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "Casterly Rocks",
		image:
			"https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
		subtitle: "Clouds Rain on Rocks",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "Beachy Peach",
		image:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
		subtitle: "Sun shines like Lime",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "Isle of Sky",
		image:
			" https://images.unsplash.com/photo-1588946994443-63229c7d2c70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		subtitle: "Dance to the Songs of the Sky.",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "Rivia",
		image:
			"https://images.unsplash.com/photo-1588368390570-6b70134ec8c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		subtitle: "Lighten the sky, with your camp.",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
	{
		name: "Grass Groto",
		image:
			"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
		subtitle: "Sky shines like Grass.",
		days: 3,
		nights: 2,
		description:
			"Rise higher than the mountains with our camping Rise higher than the mountains with our camping trips, smell how it feels when the clouds surround you. Swim deeper than the oceans with us, embrace the cold of the deep seas. Take a part in the most exciting adventures in your life with us. See the life a bit closer than the others.",
	},
];

function seedDB() {
	//Remove existing Campgrounds
	Campground.remove({}, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Removed Campgrounds");
		}
		data.forEach(function (seed) {
			Campground.create(seed, function (err, campground) {
				if (err) {
					console.log(err);
				} else {
					console.log("Added Campground ");
					//Create a Comment
					Comment.create(
						{
							text:
								"Camp around world, to find yourself true self.",
							author: "Homer Simpson",
						},
						function (err, comment) {
							if (err) {
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created New Comment");
							}
						}
					);
				}
			});
		});
	});
}

module.exports = seedDB;
