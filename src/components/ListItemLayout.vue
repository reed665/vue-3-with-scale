<script setup lang="ts">
defineProps({
  head: Boolean,
});
</script>

<template>
  <div
    class="list-item-layout"
    :class="{ head }"
  >
    <div class="cell">
      <slot name="foo" />
    </div>

    <div class="cell">
      <slot name="bar" />
    </div>

    <div class="cell">
      <slot name="baz" />
    </div>

    <div class="cell cell-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item-layout {
  display: flex;
}

.head {
  font-weight: bold;
  color: gray;
  margin-bottom: 24px;
}

.cell {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;

  &-actions {
    flex: 0;
    flex-basis: 60px;
  }
}
</style>
