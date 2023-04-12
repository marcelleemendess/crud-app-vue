//conexao com a base de dados
import { connect } from 'mongoose';

export const startConnection = async () => {
   try {
    const db = await connect('mongodb+srv://crud-app-vue:crud-app-vue@crud-app-vue.wooo8fz.mongodb.net/?retryWrites=true&w=majority')
    console.log('Database connection established')
   } catch (error) {
    console.error(error);
    
   }
};