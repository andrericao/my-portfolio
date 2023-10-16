import * as models from '../models/editModel.js';

export const getAllLogin = async (_req, res) => {

	const getAll = await models.getAllLogin();

	return res.status(200).json(getAll);
};

export const postLogin = async (req, res) => {
	const postedLogin = await models.postLogin(req.body);
	return res.status(201).json(postedLogin);
};

export const deleteLogin = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteLogin( id );
	return res.status( 204 ).json();

};

export const updateLogin = async ( req, res ) => {

	const { id } = req.params;
	await models.updateLogin( id, req.body) ;
	return res.status( 204 ).json();
};

export const getAllCabecalho = async (_req, res) => {

	const getAll = await models.getAllCabecalho();

	return res.status(200).json(getAll);
};

export const postCabecalho = async (req, res) => {
	const postedCabecalho = await models.postCabecalho(req.body);
	return res.status(201).json(postedCabecalho);
};

export const deleteCabecalho = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteCabecalho( id );
	return res.status( 204 ).json();

};

export const updateCabecalho = async ( req, res ) => {

	const { id } = req.params;
	await models.updateCabecalho( id, req.body) ;
	return res.status( 204 ).json();
};

export const getAllBanner = async (_req, res) => {

	const getAll = await models.getAllBanner(); 

	return res.status(200).json(getAll);
};

export const postBanner = async (req, res) => {

	const datasBanner =   { 
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo, 
		botao1: req.body.botao1, 
		botao2: req.body.botao2, 
		imagem_banner: req.file.path };
		

	const postedBanner = await models.postBanner(datasBanner);

	return res.status(201).json(postedBanner);
};

export const deleteBanner = async ( req, res ) => {
	const { id } = req.params;
	await models.deleteBanner( id );
	return res.status( 204 ).json();
};

export const updateBanner = async ( req, res ) => {

	const { id } = req.params;
	const datasBanner = { 

		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo, 
		botao1: req.body.botao1, 
		botao2: req.body.botao2, 
		imagem_banner: req.file.path };

	await models.updateBanner( id, datasBanner );
	return res.status( 204 ).json();

}; 

export const getAllCards = async ( _req, res ) => {

	const getAll = await models.getAllCards();

	return res.status( 200 ).json( getAll );

};

export const postCards = async ( req, res ) => {
	const datasCards = {
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		emoticon: req.file.path 
	};

	const postedCards = await models.postCards( datasCards );

	return res.status( 201 ).json( postedCards );
};

export const deleteCards = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteCards( id );
	return res.status( 204 ).json();

};

export const updateCards = async ( req, res ) => {

	const { id } = req.params;

	const datasCards = { 
		emoticon: req.file.path,
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo
	};

	await models.updateCards( id, datasCards );
	return res.status( 204 ).json();

}; 

export const getAllServicos = async ( _req, res ) => {

	const getAll = await models.getAllServicos();

	return res.status( 200 ).json( getAll );

};

export const postServicos = async ( req, res ) => {
	
	const datasServicos = {
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		link: req.body.link,
		video: req.file.path
	};

	const postedServicos = await models.postServicos( datasServicos );

	return res.status( 201 ).json( postedServicos );
};

export const deleteServicos = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteServicos( id );
	return res.status( 204 ).json();

};

export const updateServicos = async ( req, res ) => {

	const { id } = req.params;

	const datasServicos = { 
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		link: req.body.link,
		video: req.file.path
	};

	await models.updateServicos( id, datasServicos );
	return res.status( 204 ).json();

};

export const getAllCatalogos = async ( _req, res ) => {

	const getAll = await models.getAllCatalogos();

	return res.status( 200 ).json( getAll );

};

export const postCatalogos = async ( req, res ) => {
	
	const datasCatalogos = {
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		imagem: req.file.path
	};

	const postedCatalogos= await models.postCatalogos( datasCatalogos );

	return res.status( 201 ).json( postedCatalogos );
};

export const deleteCatalogos = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteCatalogos( id );
	return res.status( 204 ).json();

};

export const updateCatalogos = async ( req, res ) => {

	const { id } = req.params;

	

	const datasCatalogos = { 
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		imagem: req.file.path
	};

	await models.updateCatalogos( id, datasCatalogos );
	return res.status( 204 ).json();

};

export const getAllPq_nos = async ( _req, res ) => {

	const getAll = await models.getAllPq_nos();

	return res.status( 200 ).json( getAll );

};

export const postPq_nos = async ( req, res ) => {
	
	const datasPq_nos = {
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		imagem: req.file.path
	};

	const postedPq_nos= await models.postPq_nos( datasPq_nos );

	return res.status( 201 ).json( postedPq_nos );
};

export const deletePq_nos = async ( req, res ) => {

	const { id } = req.params;
	await models.deletePq_nos( id );
	return res.status( 204 ).json();

};

export const updatePq_nos = async ( req, res ) => {

	const { id } = req.params;

	

	const datasPq_nos = { 
		titulo: req.body.titulo, 
		subtitulo: req.body.subtitulo,
		imagem: req.file.path
	};

	await models.updatePq_nos( id, datasPq_nos );
	return res.status( 204 ).json();

};

export const getAllMotivos = async ( _req, res ) => {

	const getAll = await models.getAllMotivos();

	return res.status( 200 ).json( getAll );

};

export const postMotivos = async ( req, res ) => {
	
	const datasMotivos = {
		icone: req.file.path,
		motivo: req.body.motivo,
		descricao: req.body.descricao
	};

	const postedMotivos= await models.postMotivos( datasMotivos );

	return res.status( 201 ).json( postedMotivos );
};

export const deleteMotivos = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteMotivos( id );
	return res.status( 204 ).json();

};

export const updateMotivos = async ( req, res ) => {

	const { id } = req.params;

	

	const datasMotivos = { 
		icone: req.file.path,
		motivo: req.body.motivo, 
		descricao: req.body.descricao
		
	};

	await models.updateMotivos( id, datasMotivos );
	return res.status( 204 ).json();

};

export const getAllElogios = async ( _req, res ) => {

	const getAll = await models.getAllElogios();

	return res.status( 200 ).json( getAll );

};

export const postElogios = async ( req, res ) => {
	
	const datasElogios = {
		imagem: req.file.path,
		nome: req.body.nome, 
		empresa: req.body.empresa,
		nota: req.body.nota,
		elogio: req.body.elogio
	};

	const postedElogios= await models.postElogios( datasElogios );

	return res.status( 201 ).json( postedElogios );
};

export const deleteElogios = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteElogios( id );
	return res.status( 204 ).json();

};

export const updateElogios = async ( req, res ) => {

	const { id } = req.params;

	

	const datasElogios = { 
		imagem: req.file.path,
		nome: req.body.nome, 
		empresa: req.body.empresa,
		nota: req.body.nota,
		elogio: req.body.elogio		
	};

	await models.updateElogios( id, datasElogios );
	return res.status( 204 ).json();

};

export const getAllFooter_esquerdo = async ( _req, res ) => {

	const getAll = await models.getAllFooter_esquerdo();

	return res.status( 200 ).json( getAll );

};

export const postFooter_esquerdo = async ( req, res ) => {
	
	const datasFooter = {
		descricao: req.body.descricao, 
		icone: req.file.path
	};

	const postedFooter= await models.postFooter_esquerdo( datasFooter );

	return res.status( 201 ).json( postedFooter );
};

export const deleteFooter_esquerdo = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteFooter_esquerdo( id );
	return res.status( 204 ).json();

};

export const updateFooter_esquerdo = async ( req, res ) => {

	const { id } = req.params;

	const datasFooter_esquerdo = { 
		descricao: req.body.descricao, 
		icone: req.file.path		
	};

	await models.updateFooter_esquerdo( id, datasFooter_esquerdo );
	return res.status( 204 ).json();

};

export const getAllFooter_direito = async ( _req, res ) => {

	const getAll = await models.getAllFooter_direito();

	return res.status( 200 ).json( getAll );

};

export const postFooter_direito = async ( req, res ) => {

	const postedFooter= await models.postFooter_direito( req.body );

	return res.status( 201 ).json( postedFooter );
};

export const deleteFooter_direito = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteFooter_direito( id );
	return res.status( 204 ).json();

};

export const updateFooter_direito = async ( req, res ) => {

	const { id } = req.params;

	await models.updateFooter_direito( id, req.body );
	return res.status( 204 ).json();

};

export const getAllRodape = async ( _req, res ) => {

	const getAll = await models.getAllRodape();

	return res.status( 200 ).json( getAll );

};

export const postRodape = async ( req, res ) => {

	const postedFooter= await models.postRodape( req.body );

	return res.status( 201 ).json( postedFooter );
};

export const deleteRodape = async ( req, res ) => {

	const { id } = req.params;
	await models.deleteRodape( id );
	return res.status( 204 ).json();

};

export const updateRodape = async ( req, res ) => {

	const { id } = req.params;

	await models.updateRodape( id, req.body );
	return res.status( 204 ).json();

};