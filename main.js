var detail = [];
var editIndex;

function sub() {
  var custumerName = document.getElementById("custumerName").value;
  var phnnum = document.getElementById("phnnum").value;
  var serviceLocation = document.getElementById("serviceLocation").value;
  var issueDescribtion = document.getElementById("issueDescribtion").value;
  var date;
  if (document.getElementById("radio1").checked) {
    date = document.getElementById("radio1").value;
  } else if (document.getElementById("radio2").checked) {
    date = document.getElementById("date").value;
  }
  if (custumerName == "") {
    document.getElementById("alert").innerHTML = "Coustumer name is required";
    return false;
  } else {
    document.getElementById("alert").innerHTML = "";
  }
  if (phnnum < 1) {
    document.getElementById("alert1").innerHTML = "contact number is required";
    return false;
  } else {
    document.getElementById("alert1").innerHTML = "";
  }
  if (serviceLocation < 1) {
    document.getElementById("alert2").innerHTML = "service location is required";
    return false;
  } else {
    document.getElementById("alert2").innerHTML = "";
  }
  if (issueDescribtion < 1) {
    document.getElementById("alert3").innerHTML = "issue describtion is required";
    return false;
  } else {
    document.getElementById("alert3").innerHTML = "";
  }
  if (document.getElementById("radio1").checked) {
    console.log("Any Time")
  }
  else if (date < 1) {
    document.getElementById("alert4").innerHTML = "choose time is required";
  } else {
    document.getElementById("alert4").innerHTML = "";
  }
  console.log(editIndex);
  if (editIndex != undefined) {
    detail.splice(editIndex, 1);
  }
  var obj = {
    custumerName: custumerName,
    phnnum: phnnum,
    serviceLocation: serviceLocation,
    issueDescribtion: issueDescribtion,
    date: date
  };
  detail.push(obj);
  console.log(detail);
  document.getElementById("custumerName").value = '';
  document.getElementById("phnnum").value = '';
  document.getElementById("serviceLocation").value = '';
  document.getElementById("issueDescribtion").value = '';
  $('input[type="radio"]').prop('checked', false);
  contractTable();
}

function dis() {
  document.getElementById("di").style.display = "block";
}

function no() {
  document.getElementById("di").style.display = "none";
}

function contractTable() {
  var html = "";
  editIndex = undefined;
  for (var i = 0; i < detail.length; i++) {
    html += "<tr>";
    html += "<td>" + detail[i].custumerName + "</td>";
    html += "<td>" + detail[i].phnnum + "</td>";
    html += "<td>" + detail[i].serviceLocation + "</td>";
    html += "<td>" + detail[i].issueDescribtion + "</td>";
    html += "<td>" + detail[i].date + "</td>";
    html += '<td><button class="btn btn-danger onclick="Delete(' + i + ')">Delete</button><button class="btn btn-success ml-3" onclick="Edit(' + i + ')">Edit</button></td>';
    html += "</tr>";
  }
  document.getElementById("bodyId").innerHTML = html;
}
function Delete(del) {
  console.log(del);
  detail.splice(del, 1);
  contractTable();
};
function Edit(edi) {
  editIndex = edi;
  console.log(edi);
  console.log(detail);
  console.log(detail[edi]);
  document.getElementById("custumerName").value = detail[edi].custumerName;
  document.getElementById("phnnum").value = detail[edi].phnnum;
  document.getElementById("serviceLocation").value = detail[edi].serviceLocation;
  document.getElementById("issueDescribtion").value = detail[edi].issueDescribtion;
};
function resetInput() {
  $('input[type="text"],textarea').val("");
  $('input[type="radio"]').prop('checked', false);
}