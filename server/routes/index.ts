import { Router} from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    //retorna o que tiver na base de dados
    res.send(tasks);
});

//criar
router.post('/tasks', async (req, res) => {
    const {title, description} = req.body 

    const task = new Task({title, description})
    await task.save();
    res.json(task);
});

//get tasks by id 
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        //validacao para ver se a tarefa existe
        if(!task) return res.status(404).json({message: 'Task not found'});
        res.send(task);
    } catch (error){
        return res.status(500).send(error)
    }
});

//delete task
router.delete('/tasks/:id', async (req, res) => {
    try {
        //findByIdAndDelete from mongoose
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({message: 'Task not found'});
        res.json(task);

    }catch(error) {
        return res.status(500).send(error)
    }
});

//update tasks
    //findByIdAndUpdate from mongoose
router.put('/tasks/:id', async (req, res) => {
    const updatedTasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    res.json(updatedTasks);
});


export default router;