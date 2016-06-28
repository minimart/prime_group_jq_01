$(function(){
	var fruits = [];
	var wallet = 100;

	fruits.push(new Fruit('Apples', 2));
	fruits.push(new Fruit('Bananas', .75));
	fruits.push(new Fruit('Grapes', 3.01));
	fruits.push(new Fruit('Oranges', 1.58));
	updatWallet(wallet);
	updateFruit(fruits);
	updateInventory(fruits);

	//event handler for purchasing fruit
	$('main').on('click', function(event){
		var pickedFruit = event.target;
		pickedFruit = pickedFruit.closest("div").id;
		console.log(pickedFruit);
		switch(pickedFruit){
			case "Apples":

		}

	})

	//test that our fruits array is working
	//console.log(fruits[0].name);

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	function Fruit(name, price){
		this.name = name;
		this.price = price;
		this.quantity = 0;
	}

	// edit the wallet ammount
	// possibly add locale to the ammount
	function updatWallet(ammount){
		$('#wallet').html('<h3>Total:$'+ ammount + '</h3>');
	}
	//update the price of the fruit on the page
	function updateFruit(arr){
		for (var i = 0; i < arr.length; i++) {
			//console.log(fruits[i].price);
			$('#' + fruits[i].name).children('h3').text('$' + fruits[i].price);
		}
	}
	function updateInventory(arr){
		for (var i = 0; i < arr.length; i++){
			$('#num' + fruits[i].name).text(fruits[i].quantity);
		}
	}

});
