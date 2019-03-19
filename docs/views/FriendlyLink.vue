<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <ul class="list clearfix no-list-style">
        <li
          v-for="item in friendlylinkList"
          :key="item.link"
          class="item fl"
          @click="onHandleVisit(item.link)"
        >
          <img :src="item.icon" class="icon" alt="icon">
          <div class="detail">
            <p class="title">{{ item.name }}</p>
          </div>
        </li>
      </ul>

      <ul class="list clearfix no-list-style">
        <li
          v-for="item in learnList"
          :key="item.link"
          class="item fl"
          @click="onHandleVisit(item.link)"
        >
          <img :src="item.icon" class="icon" alt="icon">
          <div class="detail">
            <p class="title">{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendlylinkList: [
        {
          icon:
            "https://www.w3cplus.com/sites/all/themes/w3cplusV2/favicon.ico",
          name: "W3CPlus",
          link: "https://www.w3cplus.com/",
          description: ""
        },
        {
          icon: "http://www.alloyteam.com/favicon.ico",
          name: "AlloyTeam",
          link: "http://www.alloyteam.com/",
          description: ""
        },
        {
          icon: "https://www.html.cn/favicon.ico",
          name: "html中文网",
          link: "https://www.html.cn/",
          description: ""
        },
        {
          icon: "https://medium.com/favicon.ico",
          name: "medium",
          link: "https://medium.com/",
          description: ""
        }
      ],
      learnList: [
        {
          icon:
            "https://www.gstatic.com/devrel-devsite/vd93acc801b2ca40996c3d3af42fda68a31a452afd3dccab01446b6f5e8d85a31/tensorflow/images/favicon.png",
          name: "TensorFlow for JavaScript",
          link: "https://www.tensorflow.org/js/",
          description: ""
        },
        {
          icon:
            "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png",
          name: "PWA(Progressive Web Application)",
          link:
            "https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",
          description: ""
        },
        {
          icon: "http://webassembly.org.cn/favicon.ico",
          name: "WebAssembly",
          link: "http://webassembly.org.cn/",
          description: ""
        },
        {
          icon: "https://www.apollographql.com/favicon.ico",
          name: "ApolloGraphQL",
          link: "https://www.apollographql.com/",
          description: ""
        }
      ]
    };
  },
  methods: {
    onHandleVisit(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style lang="stylus" scoped>
.list {
  margin: 20px -10px;
}

.item {
  margin: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid $borderColor;
  border-radius: 5px;
  cursor: pointer;
}

.icon {
  width: 32px;
  height: 32px;
  float: left;
}

.detail {
  padding-left: 10px;
  word-break: break-all;
  overflow: hidden;

  .title {
    margin: 5px 0 0 0;
  }
}
</style>
