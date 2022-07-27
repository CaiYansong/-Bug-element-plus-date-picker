<script>
import demoGif from './assets/bug_demo-element-plus-date-picker.gif';

export default {
  data() {
    return {
      demoGif,
      daterange: "",
      submitStr: '',
    };
  },
  methods: {
    submit(val) {
      console.log("submit");
      this.submitStr = val;
    },
  },
};
</script>

<template>
  <el-date-picker v-model="daterange" @change="submit" type="datetimerange"></el-date-picker>
  <div>daterange: {{daterange}}</div>
  <div>submitStr: {{submitStr}}</div>
  <br />
  <br />
  <ol>
    <li>
      [Bug Report] [Component] [date-picker] el-date-picker 组件，当 type 为
      datetimerange 时，点击 endTime 所在的 date-picker
      选择时间范围后点击确定不触发 change 事件。点击 startTime 所在的
      date-picker 选择时间范围后点击确定可以正常触发 change 事件。
    </li>
    <li>
      [Bug Report] [Component] [date-picker] el-date-picker 组件，当 type 为
      datetimerange 时，点击 endTime 所在的 date-picker
      选择时间范围后点击确定，再次点击 endTime 所在的 date-picker
      时间范围选择面板不出现（需要点击空白处 blur，然后再重新点击 endTime 所在的
      date-picker 才正常）。点击 startTime 所在的 date-picker
      选择时间范围后点击确定，再次点击 endTime 所在的 date-picker
      时间范围选择面板正常出现。
    </li>
  </ol>
  <img :src="demoGif" style="border: 1px solid" />
</template>

<style scoped></style>
