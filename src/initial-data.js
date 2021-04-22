const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Watch my favorite show'},
    'task-3': {id: 'task-3', content: 'my favorite show'},
    'task-4': {id: 'task-4', content: 'Watch my show'},
    'task-5': {id: 'task-5', content: 'garbage'},
    'task-6': {id: 'task-6', content: 'show'},
    'task-7': {id: 'task-7', content: 'my '},
    'task-8': {id: 'task-8', content: 'Watch'},
  },
  columns: {
    'column-1':{
      id: 'column-1',
      title: 'Folder 1',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2':{
      id:'column-2',
      title: 'Folder 2',
      taskIds: ['task-3', 'task-4'],
    },
    'column-3':{
      id:'column-3',
      title: 'Done',
      taskIds:['task-5','task-6']
    },
    'column-4':{
      id:'column-4',
      title: 'Done',
      taskIds:['task-7','task-8']
    },
  },
  columnOrder: ['column-1','column-2','column-3','column-4'],
}

export default initialData;