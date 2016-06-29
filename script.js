$(function(){
	var fruits = [];
	var wallet = 100;
	var averageArray = [];

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
				fruits[0].quantity +=1;
				pickedIndex = 0;
				purchasedPrice = fruits[0].price;
				break;
			case "Bananas":
				fruits[1].quantity += 1;
				pickedIndex = 1;
				purchasedPrice = fruits[1].price;
				break;
			case "Grapes":
				fruits[2].quantity += 1;
				pickedIndex = 2;
				purchasedPrice = fruits[2].price;
				break;
			case "Oranges":
				fruits[3].quantity += 1;
				pickedIndex = 3;
				purchasedPrice = fruits[3].price;
				break;
		}
		updateInventory(fruits);
		updateWallet(fruits[pickedIndex].price);
		averagePrice(purchasedPrice);
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
			//console.log(fruits[i].price);
			$('#' + fruits[i].name).children('h3').text('$' + fruits[i].price);
		}
	}
	// updates the amount of each fruit in the inventory
	function updateInventory(arr){
		for (var i = 0; i < arr.length; i++){
			$('#num' + fruits[i].name).text(fruits[i].quantity);
		}
	}
	// function averagePrice(newData){
	// 	averageArray.push(newData);
	// 	for(var i=0; i< averageArray.length; i++){
	// 		var total += averageArray[i];
	// 		var average = (total/averageArray.length);
	// 	}
	// 	$('')
	// }
});
