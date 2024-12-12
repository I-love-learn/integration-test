<script setup>
import { VueDraggable } from "vue-draggable-plus"

const list = ref([])
// 上传时 list 上传的图片是object类型 而之前上传的会变成reactive类型
// 就这么简单
// 如果修改状态或者其他 会让它上传时就变成reactive吗
function change(file) {
  file.status = "success"
}

const list2 = ref([{ id: 1 }, { id: 2 }])

const uploadRef = ref()

onMounted(() => {
  // uploadRef.value.querySelector(".el-upload--picture-card")
})
</script>

<template>
  <VueDraggable v-model="list" target=".el-upload-list">
    <el-upload
      :auto-upload="false"
      @on-change="change"
      v-model:file-list="list"
      action=""
      list-type="picture-card"
    ></el-upload>
  </VueDraggable>
  <!-- 只要包裹了 VueDraggable 组件，就可以拖动 -->
  <VueDraggable v-model="list2" class="drag">
    <div v-for="item in list2">{{ item.id }}</div>
    <div>3</div>
    <div>4</div>
  </VueDraggable>

  <VueDraggable target=".el-upload-list">
    <el-upload
      :auto-upload="false"
      @on-change="change"
      v-model:file-list="list"
      action=""
      list-type="picture-card"
      ref="uploadRef"
    ></el-upload>
  </VueDraggable>

  <VueDraggable target="ul">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </ul>
  </VueDraggable>

  <VueDraggable>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <div>4</div>
    <p>5</p>
  </VueDraggable>

  <VueDraggable target="ol">
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <div>4</div>
    </ol>
  </VueDraggable>
  <!-- div元素内部什么元素都可以拖动 如果不设置根元素那么VueDraggable 就是默认的div元素 -->
  <VueDraggable target="div">
    <div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <li>4</li>
      <li>5</li>
      <div>6</div>
      <input type="text" />
      <span>7</span>
      <tr>
        8
      </tr>
      <td>9</td>
      <th>10</th>
      <footer>11</footer>
      <section>12</section>
      <strong>13</strong>

      <img src="../assets/vue.svg" alt="" />
      <iframe
        src="../../background属性测试.html"
        width="150"
        height="150"
        frameborder="0"
      ></iframe>
      <a href="www.baidu.com">baidu</a>
      <colgroup>
        14
      </colgroup>
      <button>15</button>
      <table>
        16
      </table>
    </div>
  </VueDraggable>
  <div>
    <div>
      <div>
        <tr>
          1
        </tr>
        <td>2</td>
        <th>3</th>
        <span>4</span>
        <tr>
          5
        </tr>
        <tr>
          6
        </tr>
        <th>7</th>
        <th>8</th>
        <td>9</td>
      </div>
    </div>
    <div>0000</div>
    <div>
      <tr>
        1
      </tr>
      <tr>
        1
      </tr>
      <td>2</td>
      <td>2</td>
      <th>3</th>
      <th>3</th>
      <span>5</span>
      <td>2</td>
      <span>4</span>
      <td>2</td>
    </div>
  </div>

  <div>
    <tr>
      1
    </tr>
    <td>2</td>
    <span>3</span>
  </div>
  <!-- 如果tr td th 用在div里 tr会被当块元素 td th当行内元素 但它不会和其他行内元素在一行 但如果div里有两个span 则会在一行 不仅如此上下文的其他元素中如果也有span跟tr td 也会变成一行 -->
</template>

<style lang="scss">
.drag {
}
</style>
