class UserController{
    async create(request, response){
        const {name, email, password, password_confirm} = request.body;

        if(!name)
        return response.json({message: 'nome é necessário'});
        
        if(!email)
        return response.json({message: 'email é necessário'});

        if(!password)
        return response.json({message: 'senha é necessária'});

        if(!password_confirm)
        return response.json({message: 'senha é necessária'});

        
        if(password !== password_confirm)
        return response.json({message: 'senha discrepantes'});

        
        return response.json({message: 'tudo ok'});

    }
}

module.exports = new UserController();