$(function(){
	var fruits = [];
	var wallet = 100;
	var UserFruits = [0,0,0,0];

	fruits.push(new Fruit('Apples', 2));
	fruits.push(new Fruit('Bananas', .75));
	fruits.push(new Fruit('Grapes', 3.01));
	fruits.push(new Fruit('Oranges', 1.58));
	updatWallet(wallet);



	//test that our fruits array is working
	//console.log(fruits[0].name);

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	function Fruit(name, price){
		this.name = name;
		this.price = price;
	}

	// edit the wallet ammount
	// possibly add locale to the ammount
	function updatWallet(ammount){
		$('#wallet').html('<h3>Total:$'+ ammount + '</h3>');
	}
	function updateFruit(arr){
		for (var i = 0; i < arr.length; i++) {
			$().arr[i]
		}
	}


});
