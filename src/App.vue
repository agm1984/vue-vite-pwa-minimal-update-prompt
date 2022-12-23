<script setup>
import ReloadPrompt from './components/ReloadPrompt.vue';
</script>

<template>
  <div class="nav">
    <router-link :to="{ name: 'index' }">Landing Page</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </div>

  <router-view />

  <ReloadPrompt />
</template>

<style>
  .nav {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
</style>
