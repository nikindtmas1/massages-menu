import * as service from '../Services/massagesService';

const host = 'http://localhost:5000';
service.settings.host = host;

export const login = service.login;
export const register = service.register;
export const logout = service.logout;


export async function getAll(){
    let massages = await service.get(host + '/massages');
    let result = Object.values(massages);
    return result;
};

export async function getOneMassage(id){
    let result = await service.get(host + `/massages/${id}`);
    return result;
};

export async function editMassage(id, data){
    const response = await service.put(host + `/massages/${id}`, data);
    return response
};


export async function getAllFaces(){
    let faces = await service.get(host + '/faces');
    let result = Object.values(faces);
    return result;
};


export async function getAllWaxing(){
    let waxing = await service.get(host + '/waxings');
    let result = Object.values(waxing);
    return result;
};

export async function getOneWaxing(id){
    let result = await service.get(host + `/waxings/${id}`);
    return result;
};

export async function editWaxing(id, data){
    const response = await service.put(host + `/waxings/${id}`, data);
    return response
};