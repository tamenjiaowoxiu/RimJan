<template>
  <div>
    <h1>被我抓到了你这个原P！！</h1>
    <div
      class="edit-div"
      v-html="innerText"
      :contenteditable="canEdit"
      @focus="isLocked = true"
      @blur="isLocked = false"
      @input="changeText"
      placeholder="请输入审批意见（必填）"
    ></div>
  </div>
</template>

<script>
export default {
  name: "optest",
  // name: "ContentEditable",
  props: {
    value: {
      type: String,
      default: ""
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerText: this.value,
      isLocked: false
    };
  },
  watch: {
    value() {
      if (!this.isLocked || !this.innerText) {
        this.innerText = this.value;
      }
    }
  },
  methods: {
    changeText() {
      this.$emit("input", this.$el.innerHTML);
    }
  }
}
</script>

<style scoped>
.edit-div {
  width: 100%;
  height: 100%;
  overflow: auto;
  word-break: break-all;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  text-align: left;
}
</style>
