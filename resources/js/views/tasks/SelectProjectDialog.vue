<template>
  <div id="apdialogs" style="display: block;" v-if="showDialog">
    <div class="__customdialog -full __temp __dialog __dialog_ontop __canvas_closable">
      <div class="__closable" @click="closeDialogSelectProject"></div>
      <div class="__dialogwrapperscroller scroll-y forced-scroll">
        <div class="full-mask"></div>
        <div class="__dialogwrapper" style="top: 50%; left: 50%; transform: translate(-50%, -50%)">
          <div class="__dialogwrapper-inner">
            <div class="__dialogmain">
              <div class="__dialogcontent simple-form">
                <div id="custom-selection" class="__apdialog __canvas" style="width: 500px;">
                  <div class="title">
                    {{ $t('tasks.select a project to create task') }}
                    <div class="-dx-close" @click="closeDialogSelectProject"></div>
                  </div>
                  <div class="isearch">
                    <input type="text" :placeholder="$t('tasks.type to quickly search')" />
                  </div>
                  <div class="rh" style="max-height:769px; overflow-y:auto;">
                    <div class="list list-actions no-icon -border">
                      <div
                        class="li item unselectable"
                        v-for="project in projects.data"
                        :key="project.id"
                        @click="openAddTaskDialog(project)"
                      >
                        <div class="ap-xdot -name">{{ project.name }}</div>
                        <div class="-ricon">
                          <span class="ficon-angle-right"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "select-project-dialog",
  props: { projects: { type: Object, default: {} } },
  computed: {
    ...mapState({
      showDialog: state => state.tasks.showDialogSelectProject
    })
  },
  methods: {
    closeDialogSelectProject() {
      this.$store.commit("TOGGLE_DIALOG_SELECT_PROJECT");
    },
    openAddTaskDialog(project) {
      this.$emit("projectSelected", project);
      this.$store.commit("TOGGLE_ADD_TASK_DIALOG");
      this.closeDialogSelectProject();
    }
  }
};
</script>

<style>
</style>
