	import { API } from "./env.js";

	const formElement = document.getElementById("sign-up");
	const responseElement = document.getElementById("response");
	const btnEnterRef = document.querySelector("#btnEnter");
	const inputNameRef = document.querySelector("#inputName");
	const inputLastNameRef = document.querySelector("#lastName");
	const inputEmailRef = document.querySelector("#email");
	const inputPasswordRef = document.querySelector("#password");
	const inputConfirmPasswordRef = document.querySelector("#confirmPassword");
	const buttonAutoFillInputsRef = document.querySelector("#autoFillInputs");
	const imgPasswordOne = document.querySelector("#imgPasswordOne");
	const imgPasswordTwo = document.querySelector("#imgPasswordTwo");

	var amountOfAccesses = 0;

	var formErrors = {
	inputName: true,
	lastName: true,
	email: true,
	password: true,
	confirmPassword: true,
	};

	function checkFormValidity() {
	const formErrorsArray = Object.values(formErrors);
	const formValidity = formErrorsArray.every((item) => item === false);
	const password = inputPasswordRef.value;
	const confirmPassword = inputConfirmPasswordRef.value;

	if (password === confirmPassword) {
		btnEnterRef.disabled = !formValidity;
		inputConfirmPasswordRef.parentElement.classList.remove("error");
	} else {
		inputConfirmPasswordRef.parentElement.classList.add("error");
		btnEnterRef.disabled = true;
	}
	}

	function validateInput(inputRef) {
	const inputValid = inputRef.checkValidity();

	if (inputValid) {
		inputRef.parentElement.classList.remove("error");
	} else {
		inputRef.parentElement.classList.add("error");
	}

	formErrors[inputRef.id] = !inputValid;

	checkFormValidity();
	}

	function autoFillInputs(event){

	event.preventDefault();

	inputNameRef.value = 'Velha'
	inputLastNameRef.value = 'Guarda'
	inputEmailRef.value = 'ihaveadream@chopp.forever'
	inputPasswordRef.value = '12345678'
	inputConfirmPasswordRef.value = '12345678'
	}

	function catchData() {
	const data = {
		firstName: formElement["name"].value,
		lastName: formElement["last-name"].value,
		email: formElement["email"].value,
		password: formElement["password"].value,
	};

	return data;
	}

	function sendResponse(response) {
	if (response === 200) {
		Swal.fire("Bem vindo!", "Você foi cadastrado com sucesso!", "success");
		// responseElement.innerHTML = `<span class="ok">usuario criado com sucesso!</span>`
	} else if (response === 400) {
		responseElement.innerHTML = `<span class="err">E-mail já cadastrado!</span>`;
	} else {
		responseElement.innerHTML = `<span class="err">Erro no servidor</span>`;
	}
	}
	function sendData(e) {
	e.preventDefault();

	const config = {
		method: "POST",
		headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		},
		body: JSON.stringify(catchData()),
	};

	fetch(`${API}/users`, config).then((response) => {
		if (response.ok) {
		response.json().then((token) => {
			sessionStorage.setItem("authToken", token.jwt);
			localStorage.setItem('FirstTimeAccessToDo', amountOfAccesses++)
			setTimeout(() => {
			window.location.href = "./tasks.html";
			}, 5000);
		});
		sendResponse(200);
		formElement.reset();
		} else if (response.status >= 400 && response.status < 403) {
		sendResponse(400);
		} else {
		sendResponse();
		}
	});
	}

	imgPasswordOne.addEventListener('click', () => {

	if(inputPasswordRef.type == "password"){
		inputPasswordRef.type = "text"
		imgPasswordOne.src = "../assets/eye-slash.svg"
	} else {
		inputPasswordRef.type = "password"
		imgPasswordOne.src = "../assets/eye.svg"
	}
	});

	imgPasswordTwo.addEventListener('click', () => {

	if(inputConfirmPasswordRef.type == "password"){
		inputConfirmPasswordRef.type = "text"
		imgPasswordTwo.src = "../assets/eye-slash.svg"
	} else {
		inputConfirmPasswordRef.type = "password"
		imgPasswordTwo.src = "../assets/eye.svg"
	}
	});

	imgPasswordOne.addEventListener('mouseout', () => {
	inputPasswordRef.type = 'password';
	imgPasswordOne.src = "../assets/eye.svg";

	});


	imgPasswordTwo.addEventListener('mouseout', () => {
	inputConfirmPasswordRef.type = "password";
	imgPasswordTwo.src = "../assets/eye.svg";

	});

	formElement.addEventListener("submit", (e) => sendData(e));
	inputNameRef.addEventListener("blur", () => validateInput(inputNameRef));
	inputLastNameRef.addEventListener("blur", () =>
	validateInput(inputLastNameRef)
	);

	inputEmailRef.addEventListener("blur", () => validateInput(inputEmailRef));
	inputPasswordRef.addEventListener("blur", () =>
	validateInput(inputPasswordRef)
	);

	inputConfirmPasswordRef.addEventListener("blur", () =>
	validateInput(inputConfirmPasswordRef)
	);
	inputConfirmPasswordRef.addEventListener("keyup", () =>
	validateInput(inputConfirmPasswordRef)
	);

	btnEnterRef.addEventListener("click", checkFormValidity);

	//buttonAutoFillInputsRef.addEventListener('click', (event) => autoFillInputs(event));