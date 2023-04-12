import axios from './axios';
import {AxiosResponse} from "axios"
import { Task } from '@/interfaces/Task';


//resgatar todas as tasks presente no backend
export const getTasks = async ():Promise<AxiosResponse<Task[]>> => await axios.get('/tasks');

//resgatar apenas uma unica tarefa selecionada pelo id
export const getTask = async (id:string):Promise<AxiosResponse<Task>> => await axios.get('/tasks/' + id);

//criar task para registrar no backend - Post
export const createTask = async (task: Task) => await axios.post('/tasks', task);


//update task
export const updateTask = async (id: string, task: Task) => await axios.put('/tasks/' + id, task);

//delete
export const deleteTask = async (id:string):Promise<AxiosResponse<Task>> => await axios.delete('/tasks/' + id);