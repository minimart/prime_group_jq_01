$(function(){
	var fruits = [];
	var wallet = 100;

	var applesAverage = [];
	var bananasAverage = [];
	var grapesAverage = [];
	var orangesAverage = [];

	fruits.push(new Fruit('Apples', 2));
	fruits.push(new Fruit('Bananas', .75));
	fruits.push(new Fruit('Grapes', 3.01));
	fruits.push(new Fruit('Oranges', 1.58));
	updateWallet(0);
	updateFruit(fruits);
	updateInventory(fruits);


	$('input').on('click', function(){
		var pickedFruit = $(this).attr("id");
		var pickedIndex = 0;
		var purchasedPrice = 0;

		switch(pickedFruit){
			case "Apples":
				if(fruits[0].price < wallet){
				fruits[0].quantity +=1;
				pickedIndex = 0;
				purchasedPrice = fruits[0].price;
				applesAverage.push(purchasedPrice);
				// console.log(fruits[0].price);
				averagePrice(applesAverage, 'Apples');
				updateWallet(fruits[pickedIndex].price);

			} else {
				alert('You\'re broke!');
			}
				break;
			case "Bananas":
			if(fruits[1].price < wallet){
				fruits[1].quantity += 1;
				pickedIndex = 1;
				purchasedPrice = fruits[1].price;
				bananasAverage.push(purchasedPrice);
				averagePrice(bananasAverage, 'Bananas');
				} else {
								alert('You\'re broke!');
				}
				break;
			case "Grapes":
			if(fruits[2].price < wallet){
				fruits[2].quantity += 1;
				pickedIndex = 2;
				purchasedPrice = fruits[2].price;
				grapesAverage.push(purchasedPrice);
				averagePrice(grapesAverage, 'Grapes');
				updateWallet(fruits[pickedIndex].price);
				} else {
							alert('You\'re broke!');
				}
				break;
			case "Oranges":
			if(fruits[3].price < wallet){
				fruits[3].quantity += 1;
				pickedIndex = 3;
				purchasedPrice = fruits[3].price;
				orangesAverage.push(purchasedPrice);
				averagePrice(orangesAverage, 'Oranges');
				updateWallet(fruits[pickedIndex].price);
				} else {
							alert('You\'re broke!');
				}
				break;
		}
		updateInventory(fruits);
		// updateWallet(fruits[pickedIndex].price);
		// alert(pickedFruit);

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

	// edit the wallet amount
	// possibly add locale to the amount
	function updateWallet(amount){
		wallet = wallet - amount;
		$('#wallet').html('<h3>Total:$'+ wallet.toFixed(2) + '</h3>');
	}
	//update the price of the fruit on the page
	function updateFruit(arr){
		for (var i = 0; i < arr.length; i++) {
			// console.log(' existing fruit price ' + fruits[i].price);
			var randomNewNumber = randomNumber(-50, 50);
			// console.log(' randomized number ' + randomNewNumber);
			var fruitsPriceMulti = fruits[i].price * 100;
			fruitsPriceMulti += randomNewNumber;
			fruitsPriceMulti /= 100;
			// fruits[i].price = fruitsPriceMulti;

			if(fruitsPriceMulti > 9.99) {
				fruitsPriceMulti = 9.99;
			} else if (fruitsPriceMulti < .5){
				fruitsPriceMulti = .5;
			}
			fruits[i].price = fruitsPriceMulti;


			fruitsPriceMulti = fruitsPriceMulti.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
			// console.log(' new total' + fruitsPriceMulti);

			$('#' + fruits[i].name).children('h3').text(fruitsPriceMulti);

		}

	}
	// updates the amount of each fruit in the inventory
	function updateInventory(arr){
		for (var i = 0; i < arr.length; i++){
			$('#num' + fruits[i].name).text(fruits[i].quantity);
		}
	}

	var intervalID = setInterval(newMarket, 15000);
	function newMarket(){
		updateFruit(fruits);

	}
	function averagePrice(fruitPriceArray, f){

		var total = 0;
		for(var i=0; i< fruitPriceArray.length; i++){
			total += fruitPriceArray[i];
		}
		var average = (total/fruitPriceArray.length).toLocaleString('en-us', {style: 'currency', currency: 'USD'});
		// console.log(average);
		$('.' + f).text(average);
		}

});
