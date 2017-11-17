
function Mugs(image, name, price) {
	this.image = image
	this.name = name
	this.price = price
}

var bigMugs = new Mugs('img/bigMugs.png', 'I Like Big Mugs', '$5.00')
var meYou = new Mugs('img/meyou.png', 'You, Me', '$6.75')
var anger = new Mugs('img/anger.jpg', 'Anger Mangement Mug', '$8.00')
var eighty = new Mugs('img/eighty.jpeg', 'Turning 80', '$7.00')
var nobodycares = new Mugs('img/nobodycares.jpg', 'Nobody Cares', '$9.00')
var omg = new Mugs('img/omg.jpg', 'OMG', '$5.99')


var mugs = [bigMugs, meYou]


	for (var i = 0; i < mugs.length; i++) {
		var mainDiv = document.getElementById('mainDiv')
		var rowDiv = document.createElement('div')
		rowDiv.className = 'row'
		var colDiv = document.createElement('div')
		colDiv.className = 'my-4 col-4'
		var cardDiv = document.createElement('div')
		cardDiv.className = 'card'
		var newImg = document.createElement('img')
		newImg.className = 'image-size'
		var newH4 = document.createElement('h4')
		var newP = document.createElement('p')
		var newButton = document.createElement('button')
		newButton.textContent="Buy"
		newButton.className = 'btn btn-info'

		newImg.src = mugs[i].image
		newH4 = document.createTextNode(mugs[i].name)
		newP = document.createTextNode(mugs[i].price)

		cardDiv.appendChild(newImg)
		cardDiv.appendChild(newH4)
		cardDiv.appendChild(newP)
		cardDiv.appendChild(newButton)
		colDiv.appendChild(cardDiv)
		rowDiv.appendChild(colDiv)
		document.getElementById('mainDiv').appendChild(rowDiv)

	}	

