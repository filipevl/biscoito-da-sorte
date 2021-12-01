const button = document.getElementById("button"),
	fraseElement = document.getElementById("frase"),
	autorElement = document.getElementById("autor");

button.addEventListener("click", (event) => {
	event.preventDefault();
	fetch("/getPhrase", { method: "GET" }).then(async (response) => {
		const jsonResponse = await response.json(),
			autor = jsonResponse.autor,
			frase = jsonResponse.frase;
		fraseElement.innerHTML = frase;
		autorElement.innerHTML = autor;
	});
});
