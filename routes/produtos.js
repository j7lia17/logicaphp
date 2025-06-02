const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosControllers');

router.post('/', produtosController.criarProduto);
router.post('/', produtosController.listarProdutos);
router.post('/:id', produtosController.atualizarProduto);
router.post('/:id', produtosController.deletarProduto);

module.exports = router;