
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


var mugs = [bigMugs, meYou, anger, eighty, nobodycares, omg]


	for (var i = 0; i < mugs.length; i++) {
		var cardDiv = document.createElement('div')
			cardDiv.className = "card text-center my-2 col-3 mx-3"
		var newImg = document.createElement('img')
			newImg.className = "card-img-top img-fluid"
			newImg.src = mugs[i].image
		var cardBodyDiv = document.createElement("div")
			cardBodyDiv.className = "card-body"
		var cardTitle = document.createElement("h4")
			cardTitle.className = "card-title text-center"
		var	cardTitleText = document.createTextNode(mugs[i].name)
		var cardText = document.createElement("p")
			cardText.className = "card-text text-center"
			cardText = document.createTextNode(mugs[i].price)
		var cardButton = document.createElement("button")
			cardButton.className = "btn btn-info"
			cardButton.textContent = "Buy"

			cardDiv.appendChild(newImg)
			cardDiv.appendChild(cardBodyDiv)
			cardTitle.appendChild(cardTitleText)
			cardBodyDiv.appendChild(cardTitle)
			cardBodyDiv.appendChild(cardText)
			cardDiv.appendChild(cardButton)
			document.getElementById('rowDiv').appendChild(cardDiv)

	}	


//how can I get these mugs to line up??
















