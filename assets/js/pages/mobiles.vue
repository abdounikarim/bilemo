<template>
  <div :id="this.$options.name">
    <h1>Bilemo 📱</h1>
    <ul id="mobiles">
      <li v-for="phone in phones" :key="phone.id">
        {{ phone.id }} - {{ phone.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { findPhones } from '../api/phones';

export default {
  name: 'Mobiles',
  data() {
    return {
      phones: [],
    }
  },
  async mounted() {
    this.phones = await findPhones();
  }
}
</script>
