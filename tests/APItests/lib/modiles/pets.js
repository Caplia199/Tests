const { expect } = require('@playwright/test');
const { BaseRequest } = require('../BaseRequest');


export class Pets extends BaseRequest {
    constructor() {
        super();
    }

    // async getAllPets(){
    //     let getAllPets = await super.getAll();
    
    //     return getAllPets;
    // };

    async getOnePets(request, id){
        let getOnePets = await super.getOne(request, 'pet/' + id);
    
        return getOnePets;
    };

};


