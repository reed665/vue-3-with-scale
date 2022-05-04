<script setup lang="ts">
import { useTheList } from '../setup/use-the-list';

const { listData, removeListItem } = useTheList();
</script>

<template>
  <ul class="the-list">
    <li
      v-for="(item, index) of listData"
      :key="index"
      class="list-item"
    >
      <div>{{ item.foo }}</div>
      <div>{{ item.bar }}</div>
      <div>{{ item.baz }}</div>
      <div>
        <scale-button
          icon-only
          variant="secondary"
          @click="removeListItem(index)"
        >
          <scale-icon
            name="close-circle"
            accessibility-title="remove"
          />
        </scale-button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.the-list {
  padding-left: 0;
  margin: 24px 0;
}

.list-item {
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 8px;
  }
}
</style>
