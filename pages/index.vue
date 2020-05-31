<template>
  <div />
</template>

<script>
import { log } from '../utils/logger';

export default {
    async fetch ({ store, app, env }) {
        const data = await app.$axios.$get('https://cdn.jsdelivr.net/npm/bangumi-data@0.3/dist/data.json');
        log('获取bangumi-data');
        store.commit('init', data);
    },
    mounted () {
    }
};
</script>
