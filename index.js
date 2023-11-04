(async() =>{
    const Sequelize = require('sequelize');
    const database = require('./db');
    const Motorista = require('./models/motorista');
    const Cnh = require('./models/cnh');
    const Veiculo = require('./models/veiculo');
    const Seguro = require('./models/seguro');
    const Sede = require('./models/sede');
    const Endereco = require('./models/endereco');
    const Locacao = require('./models/locacao');

    await database.sync({force:true});

    const novoEndereco = await Endereco.create({
        rua: 'Rua das Flores',
        numero: '48',
        bairro: 'Monte Carlo',
        cidade: 'Campo Grande',
        uf: 'MS'
    })

    const novoMotorista = await Motorista.create({
        cpf: '012345678',
        nome: 'Alfredo dos Santos',
        dataNasc: '1980-12-07',
        rg: '3216547',
        id_endereco: novoEndereco.id
    })

    const novaCnh = await Cnh.create({
        nro_cnh: '98765432101',
        tipo_cnh: 'D',
        validade: '2025-05-04',
        cpf_motorista: novoMotorista.cpf
     })

    const novoSeguro = await Seguro.create({
        numeroApolice:'987654',
        valorMensalidade: 456.20,
        valorFranquia: 2000.00,
        tipoCobertura: 'Total'
    })

    const novaSede = await Sede.create({
        cidade: 'Campo Grande',
        uf: 'MS',
        telefone: '(67)3025-4085'
    })

    const novoCarro = await Veiculo.create({
        placa:'QAP3421',
        modelo: 'UNO',
        marca: 'FIAT',
        cor: 'branco',
        ano: '2021',
        chassi: '123ABC123ACB123AB',
        nro_seguro: novoSeguro.numeroApolice,
        id_sede: novaSede.id
    })

    const novaLocacao =  await Locacao.create({
        data_locacao: '02-04-2023',
        valor: 450.25,
        status: 'finalizada',
        MotoristumCpf: novoMotorista.cpf,
        VeiculoPlaca: novoCarro.placa
    })
    console.log(novaLocacao)

    })();