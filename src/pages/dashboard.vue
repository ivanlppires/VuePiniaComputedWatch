<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-list>
        <v-list-item v-for="(item, index) in store.getUsers" :key="index">
            {{ item.first }} {{ item.last }} - {{  item.email }}
        </v-list-item>
    </v-list>
</template> 

<script setup>
import { useAppStore } from '@/stores/app.js'

const store = useAppStore()

</script>