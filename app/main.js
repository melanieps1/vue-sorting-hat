Vue.component('sortingHatMessage', {

	template: '<div>\
							<p class="result">I know... <strong>{{ name }}</strong>!</p>\
							<img v-bind:src="image" height="100px">\
							<p><i>{{description}}</i> </p>\
						</div>',

	props: ['name', 'description', 'image']

});

var demo = new Vue({

	el: '#main',

	data: {

		index: 0,
		clicks: 0,
		// houseData: [],
		// nextIdSeeds: 5,
		
		'Houses': [

	    {
	      name: 'Gryffindor',
	      description: 'With a lion as its crest and Professor McGonagall at its head, Gryffindor is the house which most values the virtues of courage, bravery and determination.',
	      image: './images/gryffindor.png'
	    },
	    {
	      name: 'Hufflepuff',
	      description: 'Hufflepuffs value hard work, patience, loyalty, and fair play.  The house has produced its share of great wizards, not least Newt Scamander, author of Fantastic Beasts and Where to Find Them.',
	      image: './images/hufflepuff.png'
	    },
	    {
	      name: 'Ravenclaw',
	      description: 'Ravenclaws prize wit, learning, and wisdom.  It\'s an ethos etched into founder Rowena Ravenclaw diadem: Wit beyond measure is man\'s greatest treasure.',
	      image: './images/ravenclaw.png'
	    },
	    {
	      name: 'Slytherin',
	      description: 'Slytherin produces more than its share of Dark wizards, but also turns out leaders who are proud, ambitious and cunning.  Merlin is one particularly famous Slytherin.',
	      image: './images/slytherin.png'
	    }

	  ]

	},

	// computed: {

	// 	beforeMount: function() {
 //    	this.loadHouseData();    
 //  	},

	// },

	methods: {

		sortMe: function() {
			this.index = Math.round(Math.random() * (4 - 1));
			this.clicks++;
			// console.log("Index: ", this.index);
		},

		// loadHouseData: function() {

  //     this.nextId = localStorage.getItem('nextId');
  //     this.houseData = JSON.parse(localStorage.getItem('houseData'));
  //     if (!this.houseData) {
  //       this.houseData = this.Houses;
  //       this.nextId = this.nextIdSeeds;
  //     }

  //   },

  //   saveHouseData: function() {

  //     localStorage.setItem('houseData', JSON.stringify(this.houseData));
  //     localStorage.setItem('nextId', this.nextId);

  //   },

  	resetHouse: function() {
  		this.clicks = 0;
  	}

	}


});