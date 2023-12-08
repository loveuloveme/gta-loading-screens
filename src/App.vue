<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
(async () => {
    await router.push({ path: '/' });
    router.go(1);
})();
</script>

<template>
    <router-view />
</template>
