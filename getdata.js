function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.id} <br>
        name: ${item.name} <br>
        gender: ${item.gender}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}


function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    id: form.custid.value,
    name: form.name.value,
    gender: form.gender.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}

function updateData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    cid: form.cid2.value,
    cemail: form.cemail.value,
  });

  console.log(raw);
  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/change", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}


function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  url = "http://localhost:3000/customer/delete?cid=" + form.cid.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}

function searchShopOrderData() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/id?cid=" + form.cid1.value;
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}

function searchOrderForItem() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/soils?cid=" + form.iid1.value;
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}

/*function searchShopOrderData() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/id?cid=" + form.cid1.value)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Order ID: ${shop_order.id} <br>
        itemID: ${shop_order.itemID} <br>
        Quantity: ${shop_order.quantity}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}
*/




function getItemList() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/customer/allitems";
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}


