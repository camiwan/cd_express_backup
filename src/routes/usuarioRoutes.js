import { Router} from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

//NÃO PODEM SER EXIBIDOS EM UMA APLICAÇAO produção. [obs.: vai depender da regra de negócio do sistema]

//router.get('/', usuarioController.index);
//router.get('/:id', usuarioController.show);

//EM UMA APLICAÇÃO REAL TEMOS salvar, atualizar e deletar APENAS DO USUÁRIO LOGADO
// DEIXAMOS ABERTO O store PARA QUE NOVOS USUÁRIOS POSSAM SE CADASTRAR NO SISTEMA

router.post('/', usuarioController.store);
router.put('/', loginRequired, usuarioController.update);
router.delete('/', loginRequired ,usuarioController.delete);

//HABILITAR UPDATE E DELE COM PASSANDO O PARAMETRO ID APENAS PARA ADMINISTRADORES DO SISTEMA - implementar isso no futuro

// router.put('/:id', usuarioController.update);
// router.delete('/:id', usuarioController.delete);

export default router;
