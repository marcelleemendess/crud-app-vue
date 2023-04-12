// como guardar dados e atulizar: modelo de tarefas
import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        //tarefa concluida ou nao
        type: Boolean,
        default: false
    },
},
{
    //default do mongoo db, para funcionamento interno da biblioteca
    versionKey: false
})

export default model("Task", taskSchema);
//modelo definido para schema 
