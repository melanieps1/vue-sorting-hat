Vue.component('sortingHatMessage', {

	template: '<p>I know... <strong>{{ name }}</strong>!</p>',

	props: ['name']

});

var demo = new Vue({

	el: '#main',

	data: {

		selectedHouse: '',
		
		'Houses': [

	    {
	      name: 'Gryffindor',
	      description: 'With a lion as its crest and Professor McGonagall at its head, Gryffindor is the house which most values the virtues of courage, bravery and determination.',
	      index: 1
	    },
	    {
	      name: 'Hufflepuff',
	      description: 'Hufflepuffs value hard work, patience, loyalty, and fair play. The house has produced its share of great wizards – not least Newt Scamander, author of Fantastic Beasts and Where to Find Them.',
	      index: 2
	    },
	    {
	      name: 'Ravenclaw',
	      description: 'Ravenclaws prize wit, learning, and wisdom. It\'s an ethos etched into founder Rowena Ravenclaw diadem: Wit beyond measure is man\'s greatest treasure.',
	      index: 3
	    },
	    {
	      name: 'Slytherin',
	      description: 'Slytherin produces more than its share of Dark wizards, but also turns out leaders who are proud, ambitious and cunning. Merlin is one particularly famous Slytherin.',
	      index: 4
	    }

	  ]

	},

	methods: {

		sortMe: function(index) {
			this.randomize();
		},

		randomize: function() {
			var index = Math.round(Math.random() * (4 - 1) + 1);
			console.log("Index: ", index);
		}

	}


});