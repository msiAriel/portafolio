<script setup>
import DataServices from '@/services/DataServices';
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'

const personId = ref('')

onMounted(() => {
    const route = useRoute()
    personId.value = route.params.id
})
</script>
<template>
    <div>
        {{ personId }}
    </div>
</template>