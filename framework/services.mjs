
import axios from 'axios';
import {config} from '../framework/config.mjs';
import {GenerateUsers} from '../framework/fixtures.mjs';

export const createUser = async () => { 
    const url = `${config.baseUrl}/user/createWithList`;
    const user = GenerateUsers()
    const user1 = [user];
    const response = await axios.post(url, user1);
    return {
        status: response.status,
        data: await response.data,
    }
} 

export const getUsers = async() => {
    const url = `${config.baseUrl}/user/Toma`;
    const response = await axios.get(url);
    return {
        status: response.status,
        data: await response.data,
    }
};

export const LogIn = async() => {
    const url = `${config.baseUrl}/user/login?=${process.env.TEST_BASE_LOGIN}&password?=${process.env.TEST_BASE_PASSWORD}`;
    const response = await axios.get(url);
    return {
        status: response.status,
        data: await response.data,
    }
};

export const DELETE = async() => {
    const url = `${config.baseUrl}/user/${process.env.TEST_BASE_LOGIN}`;
    const response = await axios.delete(url);
    return {
        status: response.status,
        data: await response.data,
    }
};


