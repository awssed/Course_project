var xhr = new XMLHttpRequest();
xhr.open("GET", "XML/Tours.xml", false);
xhr.send();
xmlDoc = xhr.responseXML;

var x = xmlDoc.getElementsByTagName("tour");
var l = x.length;
var tour = ``;
var main = document.querySelector("main");
var img, from, to, date_from, date_return, hotel_class,amount, desc;
for (var i = 0; i < l; i++) {
  img = x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue;
  from = x[i].getElementsByTagName("from")[0].childNodes[0].nodeValue;
  to = x[i].getElementsByTagName("to")[0].childNodes[0].nodeValue;
  date_from = x[i].getElementsByTagName("date_from")[0].childNodes[0].nodeValue;
  date_return =
    x[i].getElementsByTagName("date_return")[0].childNodes[0].nodeValue;
  hotel_class =
    x[i].getElementsByTagName("hotel_class")[0].childNodes[0].nodeValue;
    amount =
    x[i].getElementsByTagName("amount")[0].childNodes[0].nodeValue;
  desc = x[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
  console.log(from);
  main.innerHTML += `<div>
      <img src="${img}" alt="" />
      <div>
        <p class="inf">
          <span class="from"><img src="Photo_tours/flight_takeoff.svg" alt=""/>${from}</span>
          <span class="to"><img src="Photo_tours/flight_land.svg" alt="" />${to}</span>
          <span class="date_from"><img src="Photo_tours/event.svg" alt="" />${date_from}</span>
          <span class="date_return"><img src="Photo_tours/event.svg" alt="" />${date_return}</span>
          <span class="category"><img src="Photo_tours/hotel_class.svg" alt="" />${hotel_class}</span>
          <span class="cost"><img src="Photo_tours/local_atm.svg" alt="" /> ${amount} за человека</span>

        </p>
        <p class="desc">
          ${desc}
        </p>
        </div>
        <label for="tour1"></label>
        <input type="button" class="open_form" id="tour1" >
      </div>`;
  console.log(tour);
  main.insertAdjacentHTML("beforeend", tour);
}
let submit_but=document.getElementById('subm');
const xhttp = new XMLHttpRequest();
xhttp.open('POST', "XML/people.xml", true);
xhttp.setRequestHeader('Content-type', 'text/xml');
submit_but.addEventListener('click',function(){
  const name=document.getElementById('name').value;
  const patronymic=document.getElementById('patronymic').value;
  const surname=document.getElementById('surname').value;
  const mob_number=document.getElementById('mob_number').value;
  const mail=document.getElementById('mail').value;
  const xmlData = `<person><name>${name}</name></person>`;
  xhttp.send(xmlData);
})


