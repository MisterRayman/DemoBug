<template>
    <MdEditor language="de-DE" v-model="textModel" :toolbars="whitelist" noUploadImg="true" noMermaid="true"/>
</template>

<script setup>
import { MdEditor, config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import DE_DE from '@vavt/cm-extension/dist/locale/de-DE';

const textModel = defineModel();

const whitelist = [
    "title",
    "-",
    "bold", "italic", "strikeThrough",
    "-",
    "unorderedList", "orderedList", "quote", "link", "image",
    "-",
    "revoke", "next", "prettier",
    "=",
    "pageFullscreen", "fullscreen", "preview", "previewOnly"
];

config({
    editorConfig: {
        languageUserDefined: {
            'de-DE': DE_DE
        },
    }
});
</script>

<script>
export default {
    name: 'MarkdownEditor',
};
</script>