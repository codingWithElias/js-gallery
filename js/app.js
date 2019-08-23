/*
 * Gallery
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: August 8, 2019
 */
  
 var albums = document.getElementById('albums');
 var images = document.getElementById('images');
 var box = document.getElementById('box');
 var gTitle = document.getElementById('gTitle');

 document.addEventListener('DOMContentLoaded', loadAlbum());


 function loadAlbum(){
 	for (let i = 0; i < gallery.length; i++) {
	    albums.innerHTML += 
	    `
	    <div class="album" id="${gallery[i].albumId}" onclick="openAlbum(${i})">
	      <div class="title">
	        <i>${gallery[i].albumName}</i>
	        <span>(${gallery[i].albumImgsURL.length})</span>
	      </div>
	    </div>
	    `;
	    let albumRef = document.getElementById(gallery[i].albumId);
	    let poster = "url('img/albums/" + gallery[i].albumName + "/" + gallery[i].albumImgsURL[0]+"')";
		albumRef.style.background = poster;
	}
 }

function openAlbum(id) {
	albums.innerHTML = "";
	gTitle.querySelector("span").style.display = "inline-block";
	gTitle.querySelector("i").innerHTML = gallery[id].albumName;

	for(let i = 0; i < gallery[id].albumImgsURL.length; i++){
		images.innerHTML +=
		`
		<div class="image" onclick="openImg(${id}, ${i})">
		  <img src="img/albums/${gallery[id].albumName +'/'+gallery[id].albumImgsURL[i]}">
		</div>
		`;
   }
}

function openImg(id, index){
	if(index < 0) return 0;
	box.innerHTML = 
	`
	<div class="disp">
		<span class="rmv" onclick="minmImg()">x</span>
		<span class="nx" onclick="openImg(${id}, ${index+1})"><i>&raquo;</i></span>
	    <span class="pre" onclick="openImg(${id}, ${index-1})"><i>&laquo;</i></span>
	    <img src="img/albums/${gallery[id].albumName +'/'+gallery[id].albumImgsURL[index]}">
	</div>
	`;
	if (index + 1 ==  gallery[id].albumImgsURL.length) {
		document.querySelector('.nx').style.display= "none";
	}

	if (index == 0) {
		document.querySelector('.pre').style.display= "none";
	}

	box.style.display = "block";
}

function minmImg(){
	box.style.display = "none";
}

function backTo(){
  
    albums.innerHTML = "";
    images.innerHTML = "";
	gTitle.querySelector("span").style.display = "none";
	gTitle.querySelector("i").innerHTML = "Albums";
    loadAlbum();
}