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
      // 要呈現幾個數字
    };
  },
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('changePage', page);
    },
    calcRange(clickPage) {
      // 計算出 點擊頁面 應該產生的 range，並傳遞起始值跟結尾值
      if (clickPage <= Math.ceil(this.rangeLimit / 2)) {
        this.setRange(1, this.rangeLimit);
      } else if (clickPage > this.pages.totalPage - Math.ceil(this.rangeLimit / 2)) {
        const vari = this.rangeLimit - 1;
        this.setRange(this.pages.totalPage - vari, this.pages.totalPage);
      } else {
        const vari = Math.ceil(this.rangeLimit / 2) - 1;
        this.setRange(clickPage - vari, clickPage + vari);
      }
      this.updatePage(clickPage);
    },
    setRange(start = 1, end = this.rangeLimit) {
      // 得到起始值跟結尾值時，依序加入range
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
