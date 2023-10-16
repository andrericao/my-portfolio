// TUDO AQUI É IMPORTADO DO MODEL

const validateBody = (req, res, next) => {
	const { body } = req;
	Object.keys(body).forEach( (field) => {
    
		//console.log(body[item])

		if (body[field] === undefined || body[field] === null) {
			return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
		}

		if (body[field] === '') {
			return res.status(400).json({ message: 'O campo não pode ser nulo!' });
		}
	});
	//console.log(body);
	next();
};



export { 
	validateBody,
};