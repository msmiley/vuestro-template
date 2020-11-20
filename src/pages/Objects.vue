<template>
  <vuestro-container no-wrap>
    <vuestro-card cols=3 color="var(--vuestro-orange)">
      <template #heading>
        <span>List Example</span>
        <vuestro-container no-grow gutter="none">
					<vuestro-button pill @click="onNew" variant="success" value>
					  <template #icon>
  						<vuestro-icon name="plus"></vuestro-icon>
						</template>
						New
					</vuestro-button>
					<vuestro-button round no-border @click="reload">
						<vuestro-icon name="sync-alt" :pulse="loading"></vuestro-icon>
					</vuestro-button>
				</vuestro-container>
      </template>
      <vuestro-list-item v-for="i in items" :key="i.name" :selected="selectedItem == i" @click="onClick(i)">
        <template #title>{{ i.name }}</template>
        <template #description>{{ i.description }}</template>
        <template #buttons>
          <vuestro-button round no-border size="sm" @click="onEdit(i)">
            <vuestro-icon name="pen"></vuestro-icon>
          </vuestro-button>
          <vuestro-button round no-border size="sm" variant="danger" @click="onDelete(i)">
            <vuestro-icon name="trash"></vuestro-icon>
          </vuestro-button>
        </template>
      </vuestro-list-item>
    </vuestro-card>
    <vuestro-card cols=9>
      <vuestro-panel>
        <template #title>Details</template>
        <vuestro-container>
          <vuestro-object-browser :data="selectedItem"></vuestro-object-browser>
        </vuestro-container>
      </vuestro-panel>
    </vuestro-card>
  </vuestro-container>
</template>

<script>

/* global Vuex */

export default {
  name: 'Objects',
  data() {
    return {
      loading: false,
      selectedItem: null,
      items: [
        {
          name: 'Example Item 1',
          description: 'Has a description',
          created: new Date(),
          opened: false,
          clicked: 0,
        },
        {
          name: 'Example Item 2',
          description: 'Has a description',
          created: new Date(),
          opened: false,
          clicked: 0,
        }
      ],
    };
  },
  computed: {
    ...Vuex.mapGetters(['exampleData']),
  },
  methods: {
    onNew() {
      this.items.push({
        name: `Example Item ${this.items.length + 1}`,
        description: 'Has a description',
        created: new Date(),
        opened: false,
        clicked: 0,
      });
    },
    onClick(i) {
      i.clicked += 1;
      this.selectedItem = i;
    },
    onEdit(i) {
      alert(`looks like you want to edit ${JSON.stringify(i)}`);
    },
    onDelete(i) {
      alert(`looks like you want to delete ${JSON.stringify(i)}`);
    },
  },
};

</script>

<style scoped>

</style>