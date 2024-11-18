<template>
  <div>
    <div class="container-fluid body">
      <div class="row">
        <main role="main">
       
          <BButton variant="primary" :to="'impressum'" class="me-4">Imprint</BButton>
          <BButton :to="'globalmessage'">Global Message</BButton>
          <p>Just switch between the views fast, by clicking the buttons above. The error should appear after a few cycles of fast switching</p>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
    // eslint-disable-next-line
  },
  data() {
  },
};
</script>

<style>
html,
body {
  overflow: hidden;
  padding: 20px;
}

div.md-editor-toolbar-item > svg {
  height: 25px;
  width: 25px;
}
</style>