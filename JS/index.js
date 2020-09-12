generateMerch("necklece");
generateMerch("earring");
generateMerch("bracelet");
generateMerch("ring");

function generateMerch(input) {
  var material = ["gold", "silver"];
  var a = document.querySelector("#" + input + " .row");
  for (var count = 0; count < 12; count++) {
    a.innerHTML += "<div class='col-lg-3 col-md-4 col-sm-6'>" +
      "<img class = 'merch-img " + material[Math.floor(Math.random() * 2)] + "' onclick='merchImageOnClick(event)' src='images/" + input + ".png' alt='example-img'>" +
      "<i class='fas fa-check-square fa-2x select-prod' style='display:none'></i>" +
      "<p>מחיר: "+(Math.floor(Math.random()*950)+50)+"</p></div>";
  }
}

var cartCount = 0;
var totalCheckout=0;
function merchImageOnClick(event) {
  var priceTextContentPath = event.target.parentElement.lastElementChild.textContent;
  if (event.target.parentElement.getElementsByTagName("i")[0].style.display === "none") {
    cartCount++;
    totalCheckout += parseInt(priceTextContentPath.slice(6,priceTextContentPath.length));
    event.target.parentElement.getElementsByTagName("i")[0].style.display = "block";
  } else {
    cartCount--;
    totalCheckout -= parseInt(priceTextContentPath.slice(6,priceTextContentPath.length));
    event.target.parentElement.getElementsByTagName("i")[0].style.display = "none";
  }
  document.getElementsByClassName("cart-counter")[0].textContent = cartCount;
  if (cartCount === 0) {
    document.getElementsByClassName("cart-counter")[0].textContent = "";
  }
}

function checkboxToggle(colorName) {
  var arr = document.getElementById("merch");
  for (var i = 0; i < arr.getElementsByClassName(colorName).length; i++) {
    if (arr.getElementsByClassName(colorName)[i].parentElement.style.display === "none") {
      arr.getElementsByClassName(colorName)[i].parentElement.style.display = "block";
    } else {
      arr.getElementsByClassName(colorName)[i].parentElement.style.display = "none";
    }
  }
}
function shopingCartClick()
{
  alert("בחרת "+cartCount +" מוצרים והסהכ לתשלום הוא: "+totalCheckout+" שח");
}
var rangeMinValue=0;
var rangeMaxValue=1000;
document.getElementsByClassName("number-input")[1].max = rangeMaxValue;
document.getElementsByClassName("number-input")[1].placeholder =rangeMaxValue;
function numberRangeMinValueChange()
{
  rangeMinValue=event.target.value;
  var arr = document.getElementById("merch").getElementsByTagName("img");
  for(var i=0;i<arr.length;i++)
  {
    var cElement = arr[i].parentElement;
    var price = cElement.lastElementChild.textContent.slice(6,cElement.lastElementChild.textContent.left);
    if(parseInt(rangeMinValue) >= parseInt(price))
    {
      cElement.style.display="none";
      // cElement.classList.toggle("hide-item");
    }
    else{
      cElement.style.display="block";
    }
  }
}
function numberRangeMaxValueChange()
{
  rangeMaxValue=event.target.value;
  var arr = document.getElementById("merch").getElementsByTagName("img");
  for(var i=0;i<arr.length;i++)
  {
    console.log(i);
    var cElement = arr[i].parentElement;
    var price = cElement.lastElementChild.textContent.slice(6,cElement.lastElementChild.textContent.left);
    if(parseInt(rangeMaxValue) < parseInt(price))
    {
      cElement.style.display="none";
    }
    else{
      cElement.style.display="block";
    }
  }
}
