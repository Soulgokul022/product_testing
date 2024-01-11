var overlay_container = document.querySelector(".overlay-container")
var overlay_popup = document.querySelector(".overlay-popup")

                                          ///displaying popup window

function addbook() {
    overlay_container.style.display = "block"
    overlay_popup.style.display = "block"
}

                                          ///hiding  popup window

function cancelbook(event) {
    event.preventDefault()
    overlay_container.style.display = "none"
    overlay_popup.style.display = "none"
}

                                          ///creating variable to store new book


var container=document.querySelector(".container")
var bookname=document.querySelector(".bookname")
var authorname=document.querySelector(".authorname")
var bookdes=document.querySelector(".bookdes")
var button=document.querySelector(".delbtn")

function addbok(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${bookdes.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    authorname.value=""
    bookname.value=""
    bookdes.value=""
    overlay_container.style.display = "none"
    overlay_popup.style.display = "none"
}

function deletebook(event)
{
    event.target.parentElement.remove()
}