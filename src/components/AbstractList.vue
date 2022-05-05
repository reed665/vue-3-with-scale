<script setup lang="ts">
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="abstract-list">
    <li
      :key="0"
      class="list-item"
    >
      <slot name="head" />
    </li>

    <li
      v-for="(item, index) of data"
      :key="index + 1"
      class="list-item"
    >
      <slot
        name="body"
        :item="item"
        :index="index + 1"
      />
    </li>
  </ul>
</template>

<style lang="scss">
.abstract-list {
  padding-left: 0;
  margin: 24px 0;
  list-style: none;
}

.list-item {
  &:not(:first-child) {
    margin-top: 8px;
  }
}
</style>
