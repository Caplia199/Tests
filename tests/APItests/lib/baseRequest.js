const config = require('../../../playwright.config');

const baseURLapi = config.use.baseURLapi;

export class BaseRequest {

    // async getAll(url){
    //     let getAll = await request.get(baseURLapi+url , {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });
            
    //     return getAll;
    // };

    async getOne(request, url, id){
        let getOne = await request.get(`${baseURLapi}${url}` , {
            headers: {
                'accept': 'application/json'
            },
        });
            
        return getOne;
    };

};


