const { Pessoas,Telefone} = require('../models')

class PessoasController {
    static async index(req,res)
    {
        const pessoas = await Pessoas.findAll({include:'telefone'})
        console.log(pessoas)
        res.render('index', {
            pessoas:pessoas
        })
    }

    static async cadastro(req,res)
    {
        try {
           const pessoas= await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento,
                
            })
            if(pessoas){
                await Telefone.create({
                    Telefone:req.body.telefone,
                    pessoaId:pessoas.id
                })
            }
            res.redirect('/')
        } catch (error) {
            console.log(error.message)
            res.redirect('/')
        }
    }
    static async show(req,res){
        const pessoas = await Pessoas.findByPk(req.params.id)
        console.log(pessoas)
    }
    static async update(req,res){
        try {
        const pessoas = await Pessoas.findByPk(req.params.id)
        pessoas.nome="novo aluno"
        pessoas.save()
        res.redirect('/')
        } catch (error) {
            
        }
        
    }
    static async deletar(req,res){
        try {
            const pessoas=await Pessoas.findByPk(req.params.id)
            pessoas.destroy()
            res.redirect('/')
        } catch (error) {
            
        }
        console.log('apagou')
    }
}

module.exports = PessoasController