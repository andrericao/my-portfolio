// AQUI COMEÇA A FUNÇÃO 
import { connection } from './connection.js';

export const getAllLogin = async () => {
	const [Login] = await connection.execute('SELECT * FROM login');
	return Login;
};

export const postLogin = async (login) => {
	const { usuario, password } = login;

	const query = 'INSERT INTO login ( usuario, password ) VALUES ( ?, ? )';

	const [createdLogin] = await connection.execute(query, [ usuario, password ]);

	return { insertId: createdLogin.insertId };
};

export const deleteLogin = async ( id ) => {

	const [removeLogin] = await connection.execute('DELETE FROM login WHERE id = ?', [ id ]);
	return removeLogin;

};

export const updateLogin = async (id, datasLogin) => {

	const { usuario, password } = datasLogin;

	const query = 'UPDATE login SET usuario = ?, password = ? WHERE id = ?';

	const [updateLogin] = await connection.execute(query , [ usuario, password, id ]);
	return updateLogin;

};

export const getAllCabecalho = async () => {
	const [cabecalho] = await connection.execute('SELECT * FROM cabecalho');
	return cabecalho;
};

export const postCabecalho = async (cabecalho) => {
	const { logo, menu1, menu2, menu3, contato } = cabecalho;

	const query = 'INSERT INTO cabecalho (logo, menu1, menu2, menu3, contato) VALUES (?, ?, ?, ?, ?)';

	const [createdCabecalho] = await connection.execute(query, [ logo, menu1, menu2, menu3, contato ]);

	return { insertId: createdCabecalho.insertId };
};

export const deleteCabecalho = async ( id ) => {

	const [removeCabecalho] = await connection.execute('DELETE FROM cabecalho WHERE id = ?', [ id ]);
	return removeCabecalho;

};

export const updateCabecalho = async (id, datasCabecalho) => {

	const { logo, menu1, menu2, menu3, contato } = datasCabecalho;

	const query = 'UPDATE cabecalho SET logo = ?, menu1 = ?, menu2 = ?, menu3 = ?, contato = ? WHERE id = ?';

	const [updateCabecalho] = await connection.execute(query , [ logo, menu1, menu2, menu3, contato, id ]);
	return updateCabecalho;

};

export const getAllBanner = async () => {
	const [banner] = await connection.execute('SELECT * FROM banner');
	return banner;
};

export const postBanner = async ( banner ) => {
	const { titulo, subtitulo, botao1, botao2, imagem_banner } = banner;
	//console.log(banner);
	const query = 'INSERT INTO banner ( titulo, subtitulo, botao1, botao2, imagem_banner ) VALUES (?, ?, ?, ?, ?)';

	const [createdBanner] = await connection.execute(query, [ titulo, subtitulo, botao1, botao2, imagem_banner ]);

	return { insertId: createdBanner.insertId };
};

export const deleteBanner = async ( id ) => {
	const [ removeBanner ] = await connection.execute( 'DELETE FROM banner WHERE id = ?', [ id ]);
	return removeBanner;
};

export const updateBanner = async ( id, datasBanner ) => {

	const { titulo, subtitulo, botao1, botao2, imagem_banner } = datasBanner;

	console.log(datasBanner);

	const query = 'UPDATE banner SET titulo = ?, subtitulo = ?, botao1 = ?, botao2 = ?, imagem_banner = ? WHERE id = ?';

	const [ updateBanner ] = await connection.execute( query , [ titulo, subtitulo, botao1, botao2, imagem_banner, id ]);
	
	return updateBanner;

};

export const getAllCards = async () => {

	const [ cards ] = await connection.execute( 'SELECT * FROM cards' );

	return cards;
};

export const postCards = async ( cards ) => {

	const { emoticon, titulo, subtitulo } = cards;

	const query = ' INSERT INTO cards ( emoticon, titulo, subtitulo ) VALUES ( ?, ?, ? ) ';

	const [ createdCards ] = await connection.execute( query , [ emoticon, titulo, subtitulo ]);

	return { insertId: createdCards.insertId };
};

export const deleteCards = async ( id ) => {

	const [ removeCards ] = await connection.execute('DELETE FROM cards WHERE id = ?', [ id ]);
	return removeCards;

};

export const updateCards = async ( id, datasCards ) => {

	const { emoticon, titulo, subtitulo } = datasCards;

	const query = 'UPDATE cards SET emoticon = ?, titulo = ?, subtitulo = ? WHERE id = ?';

	const [ updateCards ] = await connection.execute( query , [ emoticon, titulo, subtitulo, id ]);
	
	return updateCards;

};

export const getAllServicos = async () => {

	const [ servicos ] = await connection.execute( 'SELECT * FROM servicos' );

	return servicos;
};

export const postServicos = async ( servicos ) => {

	const { titulo, subtitulo, link, video } = servicos;

	const query = ' INSERT INTO servicos ( titulo, subtitulo, link, video ) VALUES ( ?, ?, ?, ? ) ';

	const [ createdServicos ] = await connection.execute( query , [ titulo, subtitulo, link, video ]);

	return { insertId: createdServicos.insertId };
};

export const deleteServicos = async ( id ) => {

	const [ removeServicos ] = await connection.execute(' DELETE FROM servicos WHERE id = ? ', [ id ]);
	return removeServicos;

};

export const updateServicos = async ( id, datasServicos ) => {

	const { titulo, subtitulo, link, video } = datasServicos;

	const query = 'UPDATE servicos SET titulo = ?, subtitulo = ?, link = ?, video = ? WHERE id = ?';

	const [ updateServicos ] = await connection.execute( query , [ titulo, subtitulo, link, video, id ]);
	
	return updateServicos;

};

export const getAllCatalogos = async () => {

	const [ catalogos ] = await connection.execute(' SELECT * FROM catalogos ');

	return catalogos;
};

export const postCatalogos = async ( catalogos ) => {

	const { titulo, subtitulo, imagem } = catalogos;

	console.log( catalogos );

	const query = ' INSERT INTO catalogos ( titulo, subtitulo, imagem ) VALUES ( ?, ?, ? ) ';

	const [ createdCatalogos ] = await connection.execute( query , [ titulo, subtitulo, imagem ]);

	return { insertId: createdCatalogos.insertId };
};

export const deleteCatalogos = async ( id ) => {

	const [ removeCatalogos ] = await connection.execute(' DELETE FROM catalogos WHERE id = ? ', [ id ]);
	return removeCatalogos;

};

export const updateCatalogos = async ( id, datasCatalogos ) => {

	const { titulo, subtitulo, imagem } = datasCatalogos;

	const query = 'UPDATE catalogos SET titulo = ?, subtitulo = ?, imagem = ? WHERE id = ?';

	const [ updateCatalogos] = await connection.execute( query , [ titulo, subtitulo, imagem, id ]);
	
	return updateCatalogos;

};

export const getAllPq_nos = async () => {

	const [ Pq_nos ] = await connection.execute(' SELECT * FROM pq_nos ');

	return Pq_nos;
};

export const postPq_nos = async ( pq_nos ) => {

	const { titulo, subtitulo, imagem } = pq_nos;

	const query = ' INSERT INTO pq_nos ( titulo, subtitulo, imagem ) VALUES ( ?, ?, ? ) ';

	const [ createdPq_nos ] = await connection.execute( query , [ titulo, subtitulo, imagem ]);

	return { insertId: createdPq_nos.insertId };
};

export const deletePq_nos = async ( id ) => {

	const [ removePq_nos ] = await connection.execute(' DELETE FROM pq_nos WHERE id = ? ', [ id ]);
	return removePq_nos;

};

export const updatePq_nos = async ( id, datasPq_nos ) => {

	const { titulo, subtitulo, imagem } = datasPq_nos;

	const query = 'UPDATE pq_nos SET titulo = ?, subtitulo = ?, imagem = ? WHERE id = ?';

	const [ updatePq_nos] = await connection.execute( query , [ titulo, subtitulo, imagem, id ]);
	
	return updatePq_nos;

};

export const getAllMotivos = async () => {

	const [ motivos ] = await connection.execute(' SELECT * FROM motivos ');

	return motivos;
};

export const postMotivos = async ( motivos ) => {

	const { icone, motivo, descricao } = motivos;

	const query = ' INSERT INTO motivos ( icone, motivo, descricao ) VALUES ( ?, ?, ? ) ';

	const [ createdMotivos ] = await connection.execute( query , [ icone, motivo, descricao ]);

	return { insertId: createdMotivos.insertId };
};

export const deleteMotivos = async ( id ) => {

	const [ removeMotivos ] = await connection.execute(' DELETE FROM motivos WHERE id = ? ', [ id ]);
	return removeMotivos;

};

export const updateMotivos = async ( id, datasMotivos ) => {

	const { icone, motivo, descricao } = datasMotivos;

	const query = 'UPDATE motivos SET icone = ?, motivo = ?, descricao = ? WHERE id = ?';

	const [ updateMotivos] = await connection.execute( query , [ icone, motivo, descricao, id ]);
	
	return updateMotivos;

};

export const getAllElogios = async () => {

	const [ elogios ] = await connection.execute(' SELECT * FROM elogios ');

	return elogios;
};

export const postElogios = async ( elogios ) => {

	const { imagem, nome, empresa, nota, elogio } = elogios;

	const query = ' INSERT INTO elogios ( imagem, nome, empresa, nota, elogio ) VALUES ( ?, ?, ?, ?, ? ) ';

	const [ createdElogios ] = await connection.execute( query , [ imagem, nome, empresa, nota, elogio ]);

	return { insertId: createdElogios.insertId };
};

export const deleteElogios = async ( id ) => {

	const [ removeElogios ] = await connection.execute(' DELETE FROM elogios WHERE id = ? ', [ id ]);
	return removeElogios;

};

export const updateElogios = async ( id, datasElogios ) => {

	const { imagem, nome, empresa, nota, elogio } = datasElogios;

	const query = 'UPDATE elogios SET imagem = ?, nome = ?, empresa = ?, nota = ?, elogio = ? WHERE id = ?';

	const [ updateElogios] = await connection.execute( query , [ imagem, nome, empresa, nota, elogio, id ]);
	
	return updateElogios;

};

export const getAllFooter_esquerdo = async () => {

	const [ footer_esquerdo ] = await connection.execute(' SELECT * FROM footer_esquerdo ');

	return footer_esquerdo;
};

export const postFooter_esquerdo = async ( footer ) => {

	const { descricao, icone } = footer;

	const query = ' INSERT INTO footer_esquerdo ( descricao, icone ) VALUES ( ?, ? ) ';

	const [ createdFooter_esquerdo ] = await connection.execute( query , [ descricao, icone ]);

	return { insertId: createdFooter_esquerdo.insertId };
};

export const deleteFooter_esquerdo = async ( id ) => {

	const [ removeFooter_esquerdo ] = await connection.execute(' DELETE FROM footer_esquerdo WHERE id = ? ', [ id ]);
	return removeFooter_esquerdo;

};

export const updateFooter_esquerdo = async ( id, datasFooter ) => {

	const { descricao, icone } = datasFooter;

	const query = 'UPDATE footer_esquerdo SET descricao = ?, icone = ? WHERE id = ?';

	const [ updateFooter_esquerdo] = await connection.execute( query , [ descricao, icone, id ]);
	
	return updateFooter_esquerdo;

};

export const getAllFooter_direito = async () => {

	const [ footer_direito ] = await connection.execute(' SELECT * FROM footer_direito ');

	return footer_direito;
};

export const postFooter_direito = async ( footer ) => {

	const { coluna1, coluna2, coluna3 } = footer;

	const query = ' INSERT INTO footer_direito ( coluna1, coluna2, coluna3 ) VALUES ( ?, ?, ? ) ';

	const [ createdFooter_direito ] = await connection.execute( query , [ coluna1, coluna2, coluna3 ]);

	return { insertId: createdFooter_direito.insertId };
};

export const deleteFooter_direito = async ( id ) => {

	const [ removeFooter_direito ] = await connection.execute(' DELETE FROM footer_direito WHERE id = ? ', [ id ]);
	return removeFooter_direito;

};

export const updateFooter_direito = async ( id, datasFooter ) => {

	const { coluna1, coluna2, coluna3 } = datasFooter;

	const query = 'UPDATE footer_direito SET coluna1 = ?, coluna2 = ?, coluna3 = ? WHERE id = ?';

	const [ updateFooter_direito] = await connection.execute( query , [ coluna1, coluna2, coluna3, id ]);
	
	return updateFooter_direito;

};

export const getAllRodape = async () => {

	const [ Rodape ] = await connection.execute(' SELECT * FROM rodape ');

	return Rodape;
};

export const postRodape = async ( footer ) => {

	const { esquerdo, centro, direito } = footer;

	const query = ' INSERT INTO rodape ( esquerdo, centro, direito ) VALUES ( ?, ?, ? ) ';

	const [ createdRodape ] = await connection.execute( query , [ esquerdo, centro, direito ]);

	return { insertId: createdRodape.insertId };
};

export const deleteRodape = async ( id ) => {

	const [ removeRodape ] = await connection.execute(' DELETE FROM rodape WHERE id = ? ', [ id ]);
	return removeRodape;

};

export const updateRodape = async ( id, datasRodape ) => {

	const { esquerdo, centro, direito } = datasRodape;

	const query = 'UPDATE rodape SET esquerdo = ?, centro = ?, direito = ? WHERE id = ?';

	const [ updateRodape] = await connection.execute( query , [ esquerdo, centro, direito, id ]);
	
	return updateRodape;

};