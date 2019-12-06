document.addEventListener("DOMContentLoaded",function () {

	let container = document.getElementsByClassName("container");

	//let div = container.getElementsByTagName('div');
	//let div = document.getElementsByTagName("div");
	for (let i=0;i<container[0].children.length;i++){
		container[0].children[i].addEventListener("click",task_1);
	}
});

function task_1(e) {
	let click_Elem = e.target;

	if (click_Elem){
		if (click_Elem.style.background === "green"){
			click_Elem.style.background = "burlywood";}
		else
			click_Elem.style.background = "green";
	}
}

function task_2(){
	let task2 = document.getElementById("task2");
	document.getElementById("task2").innerText = parseInt(task2.innerText)+1;
}

function add_comment() {
	let textarea = document.getElementsByTagName("textarea"),txt;
	let comment_user = document.querySelector(".comment_user");
	let container_comment = document.querySelector(".container_comment");

	let pre     = document.createElement("pre");
	let avatar  = document.createElement("img");
	let author_date = document.createElement("p");
	const formatDate = date => ('0'+date.getHours()).slice(-2) + ':' + ('0'+date.getMinutes()).slice(-2) + ':' + ('0'+date.getSeconds()).slice(-2)  + ' ' + ('0'+date.getDate()).slice(-2)  + '.' + ('0'+(date.getMonth() + 1)).slice(-2)  + '.' + date.getFullYear();
	avatar.src = "avatar.png";

	author_date.innerText = "Автор: kudnayce " + formatDate(new Date()) ;
	pre.innerHTML = textarea[0].value;

	//newMessage.innerHTML = `<span class="author"><strong>${author}</strong></span><span>(${time()})</span>${txt}`;

	comment_user.appendChild(avatar);
	comment_user.appendChild(author_date);
	comment_user.appendChild(pre);
	container_comment.appendChild(comment_user);
	//textarea[0].value
}

