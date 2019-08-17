class Location{
	constructor(name, city, zipCode, adress, image, website){
		this.name = name;
		this.city = city;
		this.zipCode = zipCode;
		this.adress = adress;
		this.image = image;
		this.website = website;

	}
	
	display(){$("#containerRow").append(
			`<div class="col-lg-3 col-md-6 mb-4 location">
            <div class="card h-100">
              <a href="${this.website}" target="_blank" ><img class="card-img-top" src="${this.image}" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="${this.website}" target="_blank" >${this.name}</a>
                </h4>
                <h5>${this.adress}, ${this.zipCode} ${this.city} </h5>
              </div>
            </div>
          </div>`)
	}
}



// here you van create new Objects for Location

var charlesChurch = new Location("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "./img/church.jpg", "http://www.karlskirche.at/");
var Zoo = new Location("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "./img/zoo.jpg", "https://www.zoovienna.at/");




// extendes class to create and render Restaurants

class Restaurant extends Location{
	constructor(name, city, zipCode, adress, image,website, phone, type){
		super(name, city, zipCode, adress, image, website);
		this.phone = phone;
		this.type = type;
	}
	display(){$("#containerRow").append(
			`<div class="col-lg-3 col-md-6 mb-4 restaurant opct">
            <div class="card h-100">
              <a href="${this.website}" target="_blank" ><img class="card-img-top hidden-md" src="${this.image}" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="${this.website}" target="_blank" >${this.name}</a>
                </h4>
                <h5>${this.adress}, ${this.zipCode} ${this.city} </h5>
                <p class="card-text">${this.type}</p>
                <p class="card-text">${this.phone}</p>
              </div>
            </div>
          </div>`)
	}

}




// here you van create new Objects for Restaurants

var lemonLeaf = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "./img/thai.jpg", "http://www.lemonleaf.at/", "+43(1)5812308", "Thai-Restaurant")
var sixta = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "./img/sixta.jpg", "http://www.sixta-restaurant.at/", "+43 1 58 528 56 l +43 1 58 528 56", "Traditional Restaurant")




// extendes class to create and render Events

class Events extends Location{
	constructor(name, city, zipCode, adress, image, website, eventDate, eventTime, price){
		super(name, city, zipCode, adress, image, website);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.price = price;
	}
	display(){$("#containerRow").append(
			`<div class="col-lg-3 col-md-6 mb-4 event">
            <div class="card h-100">
              <a href="${this.website}" target="_blank" ><img class="card-img-top" width="100%" src="${this.image}" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="${this.website}" target="_blank" >${this.name}</a>
                </h4>
                <h5>${this.adress}, ${this.zipCode} ${this.city} </h5>
                <p class="card-text">${this.eventDate} - ${this.eventTime}</p>
                <p class="card-text">${this.price}</p>
              </div>
            </div>
          </div>`)

	}
}



// here you van create new Objects for Events 

var kris = new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1,", "./img/kris.jpg", "https://www.stadthalle.com/", "Fr., 15.11.2019", "20:00", "58,50€")
var lenny = new Events("Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1,", "./img/lenny.jpg", "https://www.stadthalle.com/", "Sat, 09.12.2019", "19:30", "47,80€")



// array with all objects

var array = [Zoo, charlesChurch, lemonLeaf, sixta, kris, lenny]




// loop for rendering 

for (var i = 0; i < array.length; i++) {
	array[i].display();
}





// for sorting

	$(document).on("click","#all", function(){
        $(".location").show();
        $(".restaurant").show();
        $(".event").show();

      });

	$(document).on("click","#locations", function(){
        $(".location").show();
        $(".restaurant").hide();
        $(".event").hide();

      });
      
	$(document).on("click","#restaurants", function(){
        $(".location").hide()
        $(".event").hide()
        $(".restaurant").show();


       })

	$(document).on("click","#events", function(){
        $(".location").hide()
        $(".restaurant").hide()
        $(".event").show();
      
      })



