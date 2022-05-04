<script setup lang="ts">
import ListItemLayout from './ListItemLayout.vue';
import { useTheList } from '../setup/use-the-list';

const { listData, removeListItem } = useTheList();
</script>

<template>
  <ul class="the-list">
    <ListItemLayout head>
      <template #foo>
        foo
      </template>

      <template #bar>
        bar
      </template>

      <template #baz>
        baz
      </template>

      <template #actions>
        actions
      </template>
    </ListItemLayout>

    <li
      v-for="(item, index) of listData"
      :key="index"
      class="list-item"
    >
      <ListItemLayout>
        <template #foo>
          <div>{{ item.foo }}</div>
        </template>

        <template #bar>
          <div>{{ item.bar }}</div>
        </template>

        <template #baz>
          <div>{{ item.baz }}</div>
        </template>

        <template #actions>
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
        </template>
      </ListItemLayout>
    </li>
  </ul>
</template>

<style lang="scss">
.the-list {
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
