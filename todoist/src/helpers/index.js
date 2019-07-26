import { collatedTasks } from '../constants'

export const getCollatedTaks = selectedProject =>
    collatedTasksExist.find(task => task.key === selectedProject);