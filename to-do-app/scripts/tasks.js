	import { API } from "./env.js";
	import { setUserName } from "./auth.js";
	import { logout } from "./auth.js";
	import { checkUserExists } from "./auth.js";
	import { watchToken } from "./auth.js";
	const authToken = sessionStorage.getItem("authToken");
	const createTaskButtonRef = document.querySelector("#createTaskButton");
	const newTaskRef = document.querySelector("#newTask");
	const inputTaskAlertRef = document.querySelector("#inputTaskAlert");
	const pendingTasksRef = document.querySelector("#pendingTasks");
	const finishedTasksRef = document.querySelector("#finishedTasks");

	let pendingTasks = [];
	let finishedTasks = [];

	// function firstAccess(){


	// }


	const requestHeaders = {
	Accept: "application/json",
	"Content-Type": "application/json",
	Authorization: authToken,
	};



	// Função que irá criar uma tarefa

	function createTask(e) {
	// debuggers
	e.preventDefault();

	if (newTaskRef.value !== "" && newTaskRef.value.length > 3) {
		inputTaskAlertRef.classList.remove("input-task-alert");
		createTaskButtonRef.disabled = false;

		// Informações sobre a Task
		const taskData = {
		description: newTaskRef.value,
		completed: false,
		};

		// Configuração da Request
		var requestConfig = {
		method: "POST",
		headers: requestHeaders,
		body: JSON.stringify(taskData),
		};


		// Realização da Request para criar uma nova Task
		fetch(`${API}/tasks`, requestConfig).then((response) => {
		if (response.ok) {
			response.json().then((data) => {
			console.log(data);
			pendingTasks = [];
			finishedTasks = [];

			getTasks();
			});

		}
		
		});

		newTaskRef.value = "";
	} else {
		inputTaskAlertRef.classList.add("input-task-alert");
		createTaskButtonRef.disable = true;
	}
	}
	// Função que obtém as Tasks criadas pelo usuário logado
	function getTasks() {
	// Configurações da Request
	var requestConfig = {
		method: "GET",
		headers: requestHeaders,
	};

	// Requisição para criar a Task
	fetch(`${API}/tasks`, requestConfig).then((response) => {
		if (response.ok) {
		response.json().then((tasks) => {
			const tasksArray = tasks;
			splitTasks(tasksArray);
			insertTasksInHTML();
		});
		}
	});
	}


	function getUserData() {
	// Configuração da Request
	var requestConfig = {
		method: "GET",
		headers: requestHeaders,
	};

	// Request para obter os Dados do Usuário
	fetch(`${API}/users/getMe`, requestConfig).then(
		(response) => {
		if (response.ok) {
			response.json().then((data) => {
			sessionStorage.setItem(
				"userName",
				`${data.firstName} ${data.lastName}`
			);
			setUserName();
			});
		} else {
		}

		// Obtém as Tasks do usuário logado
		getTasks();

		// Verifica se a API retornou o Status code 401(O número 401 significa que o Token fornecido está inválido)
		if (response.status === 401) {
			// Caso o Token esteja errado será realizado o Logout do usuário na Aplicação
			logout();
		}
		}
	);
	}


	function confirmDeleteTask(task) {
	Swal.fire({
		title: 'Você está certo(a) disso?',
		text: "Você não poderá reverter essa ação!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Sim, exclua a task!'
	}).then((result) => {
		if (result.isConfirmed) {
		deleteTask(task);
		}
	});
	}

	function deleteTask(task) {
	// Configuração da Request
	var requestConfig = {
		method: "DELETE",
		headers: requestHeaders,
	};

	// Request para deletar a task
	fetch(`${API}/tasks/${task}`, requestConfig).then((response) => {
		if (response.ok) {
		response.json().then((tasks) => {
			finishedTasks = [];
			pendingTasks = [];
			getTasks();
		});
		}
	});

	/* Swal.fire(
		'Sucesso!',
		'Sua task foi excluida.',
		'success'
	);*/
	}

	function finishTask(task) {
	console.log(task);

	const taskData = {
		description: task.description,
		completed: true,
	};

	// Configuração da Request
	var requestConfig = {
		method: "PUT",
		headers: requestHeaders,
		body: JSON.stringify(taskData),
	};

	// Realização da Request para criar uma nova tarefa
	fetch(`${API}/tasks/${task.id}`, requestConfig).then((response) => {
		if (response.ok) {
		response.json().then((tasks) => {
			finishedTasks = [];
			pendingTasks = [];
			getTasks();
		});
		}
	});

	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: '🙌Parabéns! Uma tarefa a menos. Próxima...',
		showConfirmButton: false,
		timer: 2000
	})
	}


	function changeStatus(taskIndex) {

	let tasksForInsert = {}
	if (taskIndex.completed) {
		tasksForInsert = { completed: false }
	} else {
		tasksForInsert = { completed: true }
	}
	// configurações do request
	let requestConfig = {
		method: 'PUT',
		headers: requestHeaders,
		body: JSON.stringify(tasksForInsert)
	}
	// Realização da Request para criar uma nova Task
	fetch(`${API}/tasks/${taskIndex.id}`, requestConfig).then(
		response => {
		if (response.ok) {
			finishedTasks = [];
			pendingTasks = [];
			getTasks()
		}

		}
	)


	}

	function addEventListenersToButtonsDone(divReference, arraytask) {
	let arrayReference = divReference.children

	const buttonDoneArray = Array.from(arrayReference)
	buttonDoneArray.map(
		(item, index) => {
		const selecionaDivNotDone = item.children[0]
		// console.log(selecionaDivNotDone)

		const indextaskAtual = arraytask[index]

		selecionaDivNotDone.addEventListener('click', () => changeStatus(indextaskAtual))

		}

	)
	}

	function addEventListenerPending() {


	const itens = Array.from(pendingTasksRef.children);
	console.log(itens)
	itens.map((item, index) => {
		const buttonRef = item.children[0];
		const audioRef = document.querySelector('audio')

		buttonRef.addEventListener("click", () =>
		audioRef.play()
		);
		
		buttonRef.addEventListener("click", () =>
		finishTask(pendingTasks[index]),
		);


	});
	}

	function addEventListenerPendingDelete() {
	const itens = Array.from(pendingTasksRef.children);
	console.log(itens)
	itens.map((item, index) => {
		const buttonRef = item.children[3].children[0];
		console.log(buttonRef)

		buttonRef.addEventListener("click", () =>
		confirmDeleteTask(pendingTasks[index].id)
		);
	});
	}



	function addEventListenerFinishedDelete() {
	const itens = Array.from(finishedTasksRef.children);
	console.log(itens)
	itens.map((item, index) => {
		const buttonRef = item.children[2].children[0];
		console.log(buttonRef)

		buttonRef.addEventListener("click", () =>
		confirmDeleteTask(finishedTasks[index].id)
		);
	});
	}


	function insertTasksInHTML() {
	pendingTasksRef.innerHTML = "";



	pendingTasks.map((task) => {

		const createdAtDate = new Date(task.createdAt)
		const createdAtFormated = new Intl.DateTimeFormat('pt-BR').format(createdAtDate)

		pendingTasksRef.innerHTML += `
			<li class="task animate__animated animate__fadeInDown animate__faster">
			<div class="not-done"></div>
			<audio src="../assets/task_done.mp3"></audio>
			<div class="description">
				<p class="name">${task.description}</p>
				<p class="timestamp">Criada em: ${createdAtFormated}</p>
				</div>
				<div id="trash" class="trash">
				<a class="delete"><i class="fa-solid fa-trash-can"></i></a>
				</div>
			</li>
			`;
	});

	finishedTasksRef.innerHTML = "";

	finishedTasks.map((task) => {

		const createdAtDate = new Date(task.createdAt)
		const createdAtFormated = new Intl.DateTimeFormat('pt-BR').format(createdAtDate)

		finishedTasksRef.innerHTML += `
		<li class="task animate__animated animate__fadeInDown animate__faster">
			<div class="not-done"></div>
			<div class="description">
			<p class="name">${task.description}</p>
			<p class="timestamp">Criada em: ${createdAtFormated}</p>
			</div>
			<div class="trash">
			<a  class="delete"><i class="fa-solid fa-trash-can"></i></a>
			</div>
		</li>
		`;
	});

	addEventListenerPending();
	addEventListenerFinishedDelete()
	addEventListenerPendingDelete()
	addEventListenersToButtonsDone(finishedTasksRef, finishedTasks)
	}

	//Função para separar as tarefas entre pendentes e conluidas
	function splitTasks(tasksArray) {
	tasksArray.map((task) => {
		if (task.completed) {
		finishedTasks.unshift(task);
		} else {
		pendingTasks.unshift(task);
		}
	});
	}

	getUserData();

	createTaskButtonRef.addEventListener("click", (e) => createTask(e));