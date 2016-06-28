$(function(){
	var fruits = [];

	fruits.push(new Fruit('Apples', 2));
	fruits.push(new Fruit('Bananas', .75));
	fruits.push(new Fruit('Grapes', 3.01));
	fruits.push(new Fruit('Oranges', 1.58));

	//test that our fruits array is working
	//console.log(fruits[0].name);

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	function Fruit(name, price){
		this.name = name;
		this.price = price;
	}
});
