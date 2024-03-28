<script>
export default {
  name: 'SetUp',
  setup(props, { emit, attrs }) {
    console.log(attrs);
    // script return 一个函数 可以不写template 当作函数组件用
    return () => h(
      'div',
      { class: 'setup' },
      [
        h('h1', 'Setup'),
        h('p', 'This is a setup component.'),
        h('h1', attrs)
      ]
    )
  }
}
</script>