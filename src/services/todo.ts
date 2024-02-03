import axios from "axios";
import Todo from "../models/todo";

class TodoService {
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })
        
    async getTodo(){
        const response = await this.http.get<Todo[]>('/todos')
        return response.data;
    }

    async addTodo(title: string, completed:boolean){
        const response = await this.http.post<Todo>('/todos',{title, completed });
        return response.data;
    }

    async removeTodo(id: number){
        const response = await this.http.delete('/todos/' + id);
        return response.data;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();