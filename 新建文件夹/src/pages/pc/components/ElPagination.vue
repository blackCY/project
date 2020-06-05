<template>
  <el-pagination
    layout="prev, pager, next"
    background
    :total="all.length"
    :current-page="currentPage"
    @current-change="handleCurrentChange"
    :page-size="pageSize"
  ></el-pagination>
</template>

<script>
import { onMounted } from '@vue/composition-api';
export default {
  name: 'PCELPagination',
  props: {
    all: {
      type: Array,
      default: () => [],
      required: true,
    },
    currentData: {
      type: Array,
      default: () => [],
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
      required: false,
    },
    currentPage: {
      type: Number,
      default: 1,
      required: false,
    },
  },
  setup(props, { emit }) {
    const handleCurrentChange = val => {
      const data = props.all.slice((val - 1) * props.pageSize, val * props.pageSize);
      emit('update:currentData', data);
    };

    onMounted(() => {
      const data = props.all.slice(0, props.currentPage * props.pageSize);
      emit('update:currentData', data);
    });

    return { handleCurrentChange };
  },
};
</script>

<style lang="scss">
.el-pagination {
  text-align: center;
  .el-pager {
    li {
      border-radius: 5px !important;
      background-color: #fff !important;
      border: 1px solid #666 !important;
      &.active {
        background-color: $primary-color !important;
        border: none !important;
      }
    }
  }
  .el-pager li.active + li {
    border-left: 1px solid #666 !important;
  }
}
</style>
