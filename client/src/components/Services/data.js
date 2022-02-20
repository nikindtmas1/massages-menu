import * as service from '../Services/massagesService';

const host = 'http://localhost:5000';
service.settings.host = host;

export async function getAll(){
    let massages = await service.get(host + '/massages');
    let result = Object.values(massages);
    return result;
};

