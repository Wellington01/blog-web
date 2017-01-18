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
}