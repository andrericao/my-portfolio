// TUDO AQUI É IMPORTADO DO CONTROLLER OU MIDDELWARE
import express from 'express';
import multer from 'multer' ;
// const upload = multer({ storage: storage });
const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb( null, 'uploads' );
	},

	filename: (req, file, cb) => {
		cb( null, new Date().toUTCString() + file.originalname);
	}
});

const upload = multer({ storage: storage });

import * as controllers from '../controllers/editControllers.js';

import { validateBody } from '../middlewares/validateMid.js';

router.get('/login', controllers.getAllLogin);
router.post('/login', validateBody, controllers.postLogin);
router.delete('/login/:id', controllers.deleteLogin);
router.put('/login/:id', validateBody, controllers.updateLogin);

router.get('/cabecalho', controllers.getAllCabecalho);
router.post('/cabecalho', validateBody, controllers.postCabecalho);
router.delete('/cabecalho/:id', controllers.deleteCabecalho);
router.put('/cabecalho/:id', validateBody, controllers.updateCabecalho);

router.get('/banner', controllers.getAllBanner);
router.post('/banner', validateBody, upload.single('imagem_banner'), controllers.postBanner);
router.delete('/banner/:id', controllers.deleteBanner);
router.put('/banner/:id', validateBody, upload.single('imagem_banner'), controllers.updateBanner);

router.get('/cards', controllers.getAllCards);
router.post('/cards', validateBody, upload.single('emoticon'), controllers.postCards);
router.delete('/cards/:id', controllers.deleteCards);
router.put('/cards/:id', validateBody, upload.single('emoticon'), controllers.updateCards);

router.get('/servicos', controllers.getAllServicos);
router.post('/servicos', validateBody, upload.single('video'), controllers.postServicos);
router.delete('/servicos/:id', controllers.deleteServicos);
router.put('/servicos/:id', validateBody, upload.single('video'), controllers.updateServicos);

router.get('/catalogos', controllers.getAllCatalogos);
router.post('/catalogos', validateBody, upload.single('imagem'), controllers.postCatalogos);
router.delete('/catalogos/:id', controllers.deleteCatalogos);
router.put('/catalogos/:id', validateBody, upload.single('imagem'), controllers.updateCatalogos);

router.get('/pq_nos', controllers.getAllPq_nos);
router.post('/pq_nos', validateBody, upload.single('imagem'), controllers.postPq_nos);
router.delete('/pq_nos/:id', controllers.deletePq_nos);
router.put('/pq_nos/:id', validateBody, upload.single('imagem'), controllers.updatePq_nos);

router.get('/motivos', controllers.getAllMotivos);
router.post('/motivos', validateBody, upload.single('icone'), controllers.postMotivos);
router.delete('/motivos/:id', controllers.deleteMotivos);
router.put('/motivos/:id', validateBody, upload.single('icone'), controllers.updateMotivos);

router.get('/elogios', controllers.getAllElogios);
router.post('/elogios', validateBody, upload.single('imagem'), controllers.postElogios);
router.delete('/elogios/:id', controllers.deleteElogios);
router.put('/elogios/:id', validateBody, upload.single('imagem'), controllers.updateElogios);

router.get('/footer_esquerdo', controllers.getAllFooter_esquerdo);
router.post('/footer_esquerdo', validateBody, upload.single('icone'), controllers.postFooter_esquerdo);
router.delete('/footer_esquerdo/:id', controllers.deleteFooter_esquerdo);
router.put('/footer_esquerdo/:id', validateBody, upload.single('icone'), controllers.updateFooter_esquerdo);

router.get('/footer_direito', controllers.getAllFooter_direito);
router.post('/footer_direito', validateBody, controllers.postFooter_direito);
router.delete('/footer_direito/:id', controllers.deleteFooter_direito);
router.put('/footer_direito/:id', validateBody, controllers.updateFooter_direito);

router.get('/rodape', controllers.getAllRodape);
router.post('/rodape', validateBody, controllers.postRodape);
router.delete('/rodape/:id', controllers.deleteRodape);
router.put('/rodape/:id', validateBody, controllers.updateRodape);

export { 
	router,
	upload,
};