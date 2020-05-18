const SET_TASKS = (state, tasks) => {
  state.tasks = tasks;
};

const SET_MY_TASK_STATS = (state, stats) => {
  state.myTotalTask = stats.total_task;
  state.myCompletedTask = stats.completed_task;
};

const SET_TASKS_BY_PROJECT = (state, tasksByProject) => {
  state.tasksByProject = tasksByProject;
}

const SET_TASK_DETAIL = (state, task) => {
  state.task = task;
};

const TOGGLE_DIALOG_SELECT_PROJECT = state => {
  state.showDialogSelectProject = !state.showDialogSelectProject;
};

const SET_MY_ACTIVE_PROJECTS = (state, projects) => {
  state.myActiveProjects = projects;
};

const TOGGLE_TASK_ASSIGNMENT_DIALOG = state => {
  state.showTaskAssignmentDialog = !state.showTaskAssignmentDialog;
};

const TOGGLE_ADD_TASK_DIALOG = state => {
  state.showAddTaskDialog = !state.showAddTaskDialog;
}

const REPLACE_TASK_UPDATED = (state, taskUpdated) => {
  var { tasks } = state;
  const newTasks = tasks.map(item => {
    return {
      from: item.from,
      to: item.to,
      value: item.value.map(task => {
        if (task.id === taskUpdated.id) {
          return { ...task, ...taskUpdated };
        } else {
          return { ...task };
        }
      })
    };
  });
  state.tasks = newTasks;
};

const TOGGLE_TASK_ACTION_OPTION_DIALOG = state => {
  state.showTaskActionOptionsDialog = !state.showTaskActionOptionsDialog;
}

const TOGGLE_EDIT_TASK_DIALOG = state => {
  state.showEditTaskDialog = !state.showEditTaskDialog;
}

const TOGGLE_MY_MEMBERS_DIALOG = state => {
  state.showMyMembersDialog = !state.showMyMembersDialog;
}

export default {
  SET_TASKS,
  SET_TASKS_BY_PROJECT,
  SET_TASK_DETAIL,
  SET_MY_TASK_STATS,
  TOGGLE_DIALOG_SELECT_PROJECT,
  SET_MY_ACTIVE_PROJECTS,
  TOGGLE_TASK_ASSIGNMENT_DIALOG,
  REPLACE_TASK_UPDATED,
  TOGGLE_ADD_TASK_DIALOG,
  TOGGLE_TASK_ACTION_OPTION_DIALOG,
  TOGGLE_EDIT_TASK_DIALOG,
  TOGGLE_MY_MEMBERS_DIALOG
};
