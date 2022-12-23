<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue';

const UPDATE_CHECK_INTERVAL = 20000; // 20sec

const { needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, r) {
    console.log(`Refresh Checker: service worker at: ${swUrl}`);

    r && setInterval(async () => {
        console.log('Refresh Checker: checking for update');
        await r.update();
    }, UPDATE_CHECK_INTERVAL);
  },
});

const close = async () => {
  needRefresh.value = false;
};
</script>

<template>
  <div
    v-if="needRefresh"
    class="pwa-toast"
    role="alert"
  >
    <div class="message">
      <span>New content available, click on reload button to update.</span>
    </div>
    <button v-if="needRefresh" type="button" @click="updateServiceWorker()">Reload</button>
    <button type="button" @click="close()">Close</button>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0px #8885;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
