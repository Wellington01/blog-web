export default {
    name: [{
        required: true,
        message: 'Nome é obrigatório.',
        trigger: 'blur'
    }, {
        min: 3,
        message: 'Nome deve conter no mínimo 3 caracteres.',
        trigger: 'blur'
    }],
    category: [{
        required: true,
        message: 'Categoria é obrigatório.',
        trigger: 'change'
    }],
    content: [{
        required: true,
        message: 'Conteúdo é obrigatório.',
        trigger: 'blur'
    }, {
        min: 140,
        max: 8000,
        message: 'Conteúdo deve conter no mínimo 140 caracteres e no máximo 8000.',
        trigger: 'blur'
    }]
}