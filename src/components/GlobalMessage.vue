<template>
    <div>
        <h3>{{ title }}</h3>

        <div class="p-2">
            <MarkdownEditor v-model="text" />
        </div>
        <div class="p-2 d-flex flex-row flex-wrap justify-content-between">
            <div class="d-flex flex-row flex-wrap">
                <BButton variant="primary" :disabled="text == original" @click="onResetClick">
                    Zurücksetzen
                </BButton>
                &nbsp;&nbsp;&nbsp;
                <BButton variant="primary" :disabled="text == ''" @click="onCleanupClick">
                    Löschen
                </BButton>
            </div>
            <BButton :variant="text == original ? 'primary' : 'danger'" :disabled="text == original"
                @click="onSaveClick">
                Speichern
            </BButton>
        </div>
    </div>
</template>

<script>

export default {
    name: "GlobaleNachricht",
    data() {
        return {
            text: ''
        };
    },
    computed: {
        title() {
            let title = "Globale Nachricht";
            return title;
        },

    },
    methods: {
        onSaveClick() {
            console.log("Saved");
        },
        onResetClick() {
            this.text = '';
            console.log("Reset");
        },
        onCleanupClick() {
            this.text = '';
        },
    },
    watch: {
        original(newV) {
            this.text = newV;
        },
    },
    created() {
        this.text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    }
};
</script>

<style scoped>
.textarea {
    height: 55vh;
    min-height: 30px;
}
</style>
