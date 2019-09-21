new Vue({
  el: '#app',
  data() {
    return {
      name: '桑白皮',
      age: 26,
      hobby: [
        '玩游戏',
        {name: '编程', order: 4},
        {name: '交朋友', order: 1},
      ],
      family: {
        father: 'xxx',
        mother: 'yyy',
      },
    };
  },
  mounted() {
    this.name = '小白';
    this.age = 27;
    this.hobby.push('睡觉');
    this.family.father = 'zzz';

    console.log(this.name);
    console.log(this.age);
    console.log(this.hobby);
    console.log(this.family);
  },
});
