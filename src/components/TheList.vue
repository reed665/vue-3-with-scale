<script setup lang="ts">
import AbstractList from './AbstractList.vue';
import ListItemLayout from './ListItemLayout.vue';
import { useTheList } from '../setup/use-the-list';

const { listData, removeListItem } = useTheList();
</script>

<template>
  <AbstractList :data="listData">
    <template #head>
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
    </template>

    <template #body="{ item, index }">
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
              variant="ghost"
              @click="removeListItem(index - 1)"
            >
              <scale-icon
                size="28"
                name="close-circle"
                accessibility-title="remove"
              />
            </scale-button>
          </div>
        </template>
      </ListItemLayout>
    </template>
  </AbstractList>
</template>
