<template>
  <div>

    <h3>Impressum</h3>
    <MarkdownEditor v-model="text" />

    <div class="p-2 d-flex flex-row flex-wrap justify-content-between">
      <div class="d-flex flex-row flex-wrap">
        <BButton variant="primary"
                  :disabled="text===original"
                  @click="onResetClick">
          Zurücksetzen
        </BButton>
      </div>
      <BButton :variant="text===original ? 'primary' : 'danger'"
                :disabled="text===original || text.length===0"
                @click="onSaveClick">
        Speichern
      </BButton>
    </div>

  </div>

</template>


<script>
import {BButton,} from "bootstrap-vue-next";

export default {
  components: {
      // eslint-disable-next-line
    BButton
  },
    // eslint-disable-next-line
  name: "Impressum",
  data() {
    return {
      text: '',
      previewIcon: setTimeout(() => {
        // document.getElementsByClassName("v-md-icon-preview").item(0).click()
      },)
    }

  },
  computed: {

  },
  methods: {
    onSaveClick() {
     console.log("Saved")
    },
    onResetClick() {
      this.text = '';
      console.log("Reset")
    },
  },
  watch: {
    original(newV) {
      this.text = newV;
    },
  },
  created() {
    this.text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
}
</script>

<style scoped>
.editor {
  height: 55vh;
  min-height: 30px;
}

</style>
