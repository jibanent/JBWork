/**
  TASKS ACTION
 */

import axios from "../../plugins/axios";

const getTasks = async (
  { commit },
  { currentUserId = null, routeName = "tasks" }
) => {
  commit("SET_LOADING", true);
  try {
    let url;
    if (routeName === "tasks") {
      url = `/api/tasks?user=${currentUserId}`;
    }

    if (routeName === "tasks-department") {
      url = `/api/tasks/department?manager=${currentUserId}`;
    }

    const result = await axios.get(url);

    if (result.status === 200) {
      commit("SET_TASKS", result.data.tasks);
      commit("SET_MY_TASK_STATS", result.data.stats);
      commit("SET_LOADING", false);
      return { error: false };
    }
  } catch (error) {
    commit("SET_LOADING", false);
    return {
      error: true,
      message: error.response
    };
  }
};

const getTaskDetail = async ({ commit }, { taskId }) => {
  commit("SET_LOADING", true);
  try {
    const result = await axios.get(`/api/tasks/show/${taskId}`);
    console.log("getTaskDetail", result);

    commit("SET_LOADING", false);
    if (result.status === 200) {
      commit("SET_TASK_DETAIL", result.data.task);
      return { error: false };
    }
  } catch (error) {
    commit("SET_LOADING", false);
    return {
      error: true,
      message: error.response
    };
  }
};

export default {
  getTasks,
  getTaskDetail
};
