<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{disabled : pages.currentPage === 1}">
                <a class="page-link" href="#" aria-label="Previous"
                 @click.prevent="updatePage(pages.currentPage-1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li class="page-item" v-for="(page, index) in range" :key="index"
            :class="{active : pages.currentPage === page}">
                <a class="page-link" href="#" @click.prevent="calcRange(page)">{{ page }}</a>
            </li>

            <li class="page-item" :class="{disabled : pages.currentPage === pages.totalPage}">
                <a class="page-link" href="#" aria-label="Next"
                 @click.prevent="updatePage(pages.currentPage+1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      range: [],
      rangeLimit: 5,
    };
  },
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('changePage', page);
    },
    calcRange(clickPage) {
      if (clickPage <= Math.ceil(this.rangeLimit / 2)) {
        this.setRange(1, this.rangeLimit);
      } else if (clickPage > this.pages.totalPage - Math.ceil(this.rangeLimit / 2)) {
        this.setRange(this.pages.totalPage - 4, this.pages.totalPage);
      } else {
        this.setRange(clickPage - 2, clickPage + 2);
      }
      this.updatePage(clickPage);
    },
    setRange(start = 1, end = 5) {
      this.range = [];
      for (let i = start; i <= end; i += 1) {
        this.range.push(i);
      }
    },
  },
  created() {
    this.setRange();
  },
};
</script>
