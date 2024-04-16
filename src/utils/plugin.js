export default function (id) {
  console.log('自定义插件',id);
  return function (name) {
    // 会按照咱们resolvers的顺序 来执行 如果被element的reslove处理了 咱们的就不会在使用他的
    console.log(id == 1?'方法':"组件",name);
  }
}