var someStuff = [42, 150, 5, 25, 10];


document.getElementById('demo').innerHTML = someStuff;

	document.getElementById('alphabet').addEventListener('click', function(){
		someStuff.sort();
		document.getElementById('demo').innerHTML = someStuff;
});

document.getElementById('demo').innerHTML = someStuff;

	document.getElementById('numbers').addEventListener('click', function(){
		someStuff.sort(function(a,b){
			return a - b;
		});
		document.getElementById('demo').innerHTML = someStuff;
});

























