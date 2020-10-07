<template>
<!-- eslint-disable max-len -->
  <div class="container py-5">
    <nav id="sidebar" class="d-flex flex-column justify-content-between align-items-center">
      <ul class="list-unstyled w-100">
        <li class="sidebarItem">
          <a href="https://www.notion.so/Tripresso-f2e-1c1890b308d848be8dcba50232125f08">製作筆記</a>
        </li>
        <li class="sidebarItem">
          <a href="https://www.cakeresume.com/yochen">我的履歷</a>
        </li>
      </ul>
      <p class="h6 text-accent">YU-JUNG, CHEN</p>
    </nav>
    <button type="button" id="sidebarCollapse" class="btn btn-outline-primary">≡</button>

    <loading :active.sync="isLoading" loader="dots"></loading>
    <ul class="row flex-column flex-md-row justify-content-center align-items-center list-unstyled pl-0 pt-3">
      <li class="col-12 col-md-3 dropdown my-2">
        <button class="btn btn-outline-secondary dropdown-toggle w-100"
         type="button" id="sortRating" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
         :class="{active : sort === 'rating_desc' || sort === 'rating_asc'}">
          {{ sort | sortrating }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click.prevent="getTours(1, 10, 'rating_desc');resetRange()">高 至 低</a>
          <a class="dropdown-item" href="#" @click.prevent="getTours(1, 10, 'rating_asc');resetRange()">低 至 高</a>
        </div>
      </li>
      <li class="col-12 col-md-3 dropdown my-2">
        <button class="btn btn-outline-secondary dropdown-toggle w-100"
         type="button" id="sortPrice" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
         :class="{active : sort === 'price_desc' || sort === 'price_asc'}">
          {{ sort | sortprice }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click.prevent="getTours(1, 10, 'price_desc');resetRange()">高 至 低</a>
          <a class="dropdown-item" href="#" @click.prevent="getTours(1, 10, 'price_asc');resetRange()">低 至 高</a>
        </div>
      </li>
    </ul>
    <ul class="row flex-column justify-content-center align-items-center list-unstyled">
      <li class="col-11 col-lg-9 d-flex flex-column flex-md-row px-0 py-0 my-3 tourItem" v-for="item in tours" :key="item.id">
        <img class="card-img tourItemImg" :src="item.image_url">
        <div class="d-flex bg-white flex-column tourItemContent">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <span class="agency mr-2">{{ item.agency }}</span>
              <i class="fas fa-star text-yellow" v-for="(num, index) in item.rating" :key="'Yellow'+index"></i>
              <i class="fas fa-star text-dark" v-for="(num, index) in ( 5 - item.rating)" :key="'Dark'+index"></i>
            </div>
            <h2 class="h6 font-weight-bold my-3">
              <a :href="item.tour_detail_url">
                {{ item.title }}
              </a>
            </h2>
            <ul class="d-flex flex-wrap list-unstyled">
              <li class="badge badge-pill badge-primary mx-1 my-1" v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
          <div class="card-footer d-flex flex-column flex-lg-row justify-content-between align-items-center px-5">
            <VueSlickCarousel class="d-flex justify-content-between cardFooterSlick my-3" v-bind="slickSettings">
              <div v-for="group in item.group" :key="group.id">
                <button type="button" class="btn btn-outline-primary d-flex flex-column mx-auto">
                  <strong class="group">{{ group.date | time }}</strong>
                  <span class="group">可售{{ group.quantity }}位</span>
                </button>
              </div>
            </VueSlickCarousel>
            <p class="mb-0 text-right cardFooterPrice">
              <span class="text-accent h6 font-weight-bold">{{ item.tour_days }}</span>天
              <span class="text-accent h4 font-weight-bold">{{ item.min_price }}</span>元起
            </p>
          </div>
        </div>
      </li>
    </ul>
    <pagination ref="pagi" :pages="page" @changePage="getTours($event, 10 ,sort)"></pagination>
  </div>
</template>

<script>
import $ from 'jquery';

import pagination from '../components/pagination.vue';

$(document).ready(() => {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });
});

export default {
  data() {
    return {
      api: {
        apiPath: 'https://interview.tripresso.com/tour/search',
      },
      tours: [],
      tempTours: {

      },
      sort: 'rating_desc',
      page: {
        totalPage: 0,
        currentPage: 1,
        rowPerPage: 10,
      },
      isLoading: false,
      slickSettings: {
        arrows: true,
        dots: false,
        slidesPerRow: 2,
        autoplay: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesPerRow: 3,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesPerRow: 2,
            },
          },
        ],
      },
    };
  },
  components: {
    pagination,
  },
  methods: {
    getTours(page = 1, rowPerPage = 10, sort = 'rating_desc') {
      this.isLoading = true;
      this.page.currentPage = 1;
      this.sort = sort;
      this.$http.get(`${this.api.apiPath}?page=${page}&row_per_page=${rowPerPage}&sort=${sort}`)
        .then((res) => {
          this.isLoading = false;
          this.tours = res.data.data.tour_list;

          // 100個項目 / 每頁幾個項目  並  無條件進位 = 有幾頁
          this.page.totalPage = Math.ceil(100 / this.page.rowPerPage);

          this.page.currentPage = page;
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          console.log(this.tours);
        });
    },
    resetRange() {
      this.$refs.pagi.setRange();
    },
  },
  filters: {
    sortrating: (sortText) => {
      if (sortText === 'rating_desc') {
        return '評價：高 至 低';
      } if (sortText === 'rating_asc') {
        return '評價：低 至 高';
      }
      return '評價';
    },
    sortprice: (sortText) => {
      if (sortText === 'price_desc') {
        return '價錢：高 至 低';
      } if (sortText === 'price_asc') {
        return '價錢：低 至 高';
      }
      return '價錢';
    },
    time: (time) => {
      const y = time.split('-')[0];
      const m = time.split('-')[1];
      const d = time.split('-')[2];

      const date = new Date(y, m - 1, d);
      let day = date.getDay();
      switch (day) {
        case 0:
          day = '日';
          break;
        case 1:
          day = '一';
          break;
        case 2:
          day = '二';
          break;
        case 3:
          day = '三';
          break;
        case 4:
          day = '四';
          break;
        case 5:
          day = '五';
          break;
        case 6:
          day = '六';
          break;
        default:
          break;
      }

      return `${m}/${d}(${day})`;
    },
  },
  created() {
    this.getTours();
  },
};
</script>
