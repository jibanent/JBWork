<template>
  <div id="project-side">
    <task-side-info :currentUser="currentUser" />
    <task-side-members :users="users" v-if="!$auth.isMember()" />
  </div>
</template>

<script>
import TaskSideInfo from "./TaskSideInfo";
import TaskSideMembers from "./TaskSideMembers";
export default {
  name: "task-side",
  components: {
    TaskSideInfo,
    TaskSideMembers
  },
  props: {
    users: { type: Object, default: {} },
    currentUser: { type: Object, default: null }
  }
};
</script>

<style>
</style>
