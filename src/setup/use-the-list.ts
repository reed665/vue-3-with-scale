import { ref, Ref } from 'vue';

interface IListItem {
  foo: string;
  bar: string;
  baz: string;
}

const listData = ref([]) as Ref<IListItem[]>;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 10; i++) {
  listData.value.push({
    foo: `foo ${i}`,
    bar: `bar ${i}`,
    baz: `baz ${i}`,
  });
}

const removeListItem = (index: number) => {
  listData.value.splice(index, 1);
};

// eslint-disable-next-line import/prefer-default-export
export const useTheList = () => ({
  listData,
  removeListItem,
});
