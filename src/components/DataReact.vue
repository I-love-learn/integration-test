<script setup>
// ^--------------------------  markRaw
const object = {
  name: 'test',
  age: 18,
  // 可以自己加上__v_skip属性，这样它就不会被响应式处理了。 markRaw就是做了这么一个处理。
  // __v_skip: true,
  __v_isReadonly: true,
  children: [
    {
      address: '北京'
    }
  ]
}



// const 响应式对象 = reactive(object)
// const 浅响应式对象 = shallowReactive(object)
// console.log(isReactive(浅响应式对象.children)); // false 浅响应式对象的深层不具备响应式

// const 浅响应式对象对象包裹的响应式对象 = shallowReactive(响应式对象)
// console.log(浅响应式对象对象包裹的响应式对象 === 响应式对象); // true 如果传入的是一个reactive 则将其返回出来

// const t1 = { a: 1 }

// const p1 = new Proxy(t1, {})
// const p2 = new Proxy(p1, {});
// const p3 = new Proxy(p2, {});
// console.log(p3); // 是一个proxy代理proxy代理proxy 代理{a:1}的对象


// const proxy响应式对象 = shallowReactive(p1)

// console.log(proxy响应式对象); // 两层proxy
// 这里证明 shallowReactive内部进行了处理 如果传入的是一个reactive 则将其返回出来
// @这里也就证明了 shallowReactive 对已经代理了的对象不进行代理操作。 可能其内部使用了isReactive 方法吧。
// console.log(isReactive(浅响应式对象对象包裹的响应式对象.children)); // true  因为shallowReactive 本身就是不递归只对对象根属性进行代理操作 如果我们传入的对象本身就是深度响应式了 那么其深层的属性依然具备响应式。  也不是这么多废话 其实内部进行了判断如果是isReactive为true 直接就返回传入的内容了

// const 用reactive处理的浅响应式对象 = reactive(浅响应式对象)
// console.log(isReactive(用reactive处理的浅响应式对象.children[0])); // false 同理reactive对浅响应式对象无效

// @shallowReactive 对reactive对象使用无效
// // reactive无法 对shallowReactive对象使用 返回的还是浅响应的


// console.log(用reactive处理的浅响应式对象 === 浅响应式对象); // true
// const markraw = markRaw(响应式对象)

// console.log(markraw); // proxy
// console.log(isReactive(markraw));
// const markraw3 = markRaw(浅响应式对象)
// console.log(markraw3 === 浅响应式对象); // true

// console.log(markraw); // proxy markraw对reactive对象使用 返回reactive对象本身 markraw不会将代理对象转成不可代理对象  也就是markRaw只可以对普通对象使用 让其不可以被代理

// markraw shallowReactive reactive内部都有互相处理的逻辑 逻辑就是直接返回传进去的对象
// proxy创建时必须要设置 第二个参数对象 不然报错
// const markRaw = new Proxy(object, {})
// console.log(markRaw); // proxy vue自己封装的对象 有内部标识我们自己使用proxy的话 vue是不认的

// const abc = new Proxy(object, {})
// console.log(abc);
// console.log(isProxy(abc)); // false  isProxy是vue3 内部的判断方式 仅仅能判断vue自身的reactive和shallowReactive对象等响应式对象 咱们自己new proxy的不可以
// 检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。
// readonly shallowReadonly 创建的是只读代理

// const markraw2 = markRaw(object)

// console.log(markraw2); // object
// console.log(markraw === react); // true
// console.log(markraw2 === react); // false
// const shallowReact2 = shallowReactive(react)
// console.log(markraw2 === shallowReact2); // false

// const markRaw处理的对象 = markRaw(reactive响应式对象)
// const shallowReactive处理的reactive对象 = shallowReactive(reactive响应式对象)

// console.log(markRaw处理的对象 === shallowReactive处理的reactive对象); // true

// markRaw shallowReactive 和reactive 互相处理都会返回自身

// const 响应式对象 = reactive(markraw2)
// console.log(isReactive(响应式对象)); // true
// console.log(响应式对象);

// console.log(react === object); // false
// console.log(shallowReact === object); // false
// console.log(markraw2 === object); // true

// // 也就是说 shallowReactive和reactive 都会返回一个新的对象 也就是proxy代理对象 其代理的内容才是源对象 因此他俩返回的proxy对象和源对象不是同一个对象了

// // 而markRaw不会返回新的对象 他只是标记了源对象为不可代理对象

// // 测试markRaw2 是否被冻结了 冻结什么都不可修改 新增 删除 劫持现有属性
// console.log(Object.isFrozen(markraw2)); // false
// // 判断一个 对象 是否可扩展 可扩展就是可以 新增 删除 修改属性
// console.log(Object.isExtensible(markraw2)); // true
// // 判断一个 对象 是否被密封  自身属性不可删除 也不可新增属性 但可以改 也不可劫持
// console.log(Object.isSealed(markraw2)); // false

// markraw2.wife = '小三'

// console.log(markraw2);

// console.log(object);
// const only = readonly(object)
// console.log(Object.isFrozen(only));
// console.log(Object.isExtensible(only)); // true
// console.log(Object.isSealed(only));
// console.log(only === object); // true
// // 这里没有警告提示
// only.age++
// only.a = 123

// const only2 = readonly({ count: 0 })

// // only2.count++ 报警告
// console.log(Object.isFrozen(only2));
// console.log(Object.isExtensible(only2)); // true
// console.log(Object.isSealed(only2));

// console.log(only2); // 0

// const 只读 = readonly(object)

// console.log(只读 === object); // false
// console.log(只读); // proxy readonly别管对对象还是响应式使用  返回的都是proxy
// 只读.a = 1 警告

// const 响应式对象 = reactive(object)

// console.log(object);
// const raw = markRaw(object)

// console.log(raw); // object
// const 响应式 = reactive(raw)
// console.log(响应式 === 响应式对象); // true
// console.log(isReactive(响应式)); // false

// console.log(响应式); // object
// console.log(shallowReactive(raw));

// 如果一个对象先被reactive或者shallowReactive处理过了  他的源对象即便再使用markRaw处理后在使用reactive或者shallowReactive去处理 markRaw后的对象 也依旧是一个响应式对象 如果此前没有被reactive处理 则再使用reactive返回对象自身不会被代理

// const 只读 = readonly(raw)
// console.log(只读 === raw); // true

// 只读.a = 1

// console.log(只读);  被markRaw处理后返回的那个对象 无法被readonly reactive shallowReactive处理 返回的还是markRaw自身

// markRaw处理后的对象会多了个__v_skip属性 估计是为了让reactive和shallowReactive以及readonly识别吧
const rt = reactive(object) // 如果这里对源对象进行了代理处理 下面即便对源对象执行了markRaw 最终还是可以通过reactive转换mk为 响应式对象 如果前面没有被reactive处理 则markRaw处理后返回的mk就是一个不可被代理的响应式对象
const mk = markRaw(object)
console.log(mk);

const mk2 = reactive(mk)
const rt2 = reactive(object)
console.log(rt2 === rt); // true 多次被代理返回同一个对象
// mk2 === rt 不知道vue内部如何处理的
console.log(mk2);
// console.log(reactive(mk)); // 普通对象
setTimeout(() => {
  mk2.name = 'abc' // 有响应式
}, 5000);
// ^--------------------------  markRaw结束
console.log(isReadonly(rt2)); // true
const datasource = {
  name: "张三",
}
const re = reactive(datasource)

const markRawObj = markRaw({
  name: "李四",
  age: 18,
  sex: "男",
  address: "北京",
  children: [
    {
      name: "李四",
      age: 18,
      sex: "男",
      address: "北京",
    },
  ]
})
// re.person = markRawObj

console.log(re);

// console.log(isReactive(re.person)); // false没有代理 也就是markRaw 不会被reactive代理 但是被reactive代理的使用markRaw 不会失去响应式  想要将reactive的代理转为普通对象 要用toRaw
// console.log(isReactive(re.person.children)); // false  markRaw 处理后的对象 赋值给reactive对象的一个属性 markRaw处理的对象 不会被代理 并且是深度的 其内部属性 也不会被代理，但是如果我们将markRaw中的某个属性赋值给reactive对象的一个属性 会将markRaw处理后的对象的属性转为响应式对象

re.person = markRawObj.children

console.log(isReactive(re.person)); // true  markRaw是浅层api 被markRaw处理后的对象的属性 如果是对象 且赋值给 reactive对象的一个属性 会将markRaw处理后的对象的属性转为响应式对象 因为markRaw处理后的对象只在根属性上有__v_skip属性

const ra = toRaw(re)

console.log(ra === datasource); // true

// vue不推荐我们直接操作原始对象，在有代理对象的情况下。

const attrs = useAttrs()
console.log(attrs);
onBeforeUpdate(() => {
  console.log(attrs); // update触发
})
</script>

<template>
  <div>
    {{ mk2 }}
  </div>
  <div>
    测试shallowReactive和markRaw处理的对象和源对象以及reactive对象还是同一个对象吗？
  </div>
  <div>
    shallowReactive和reactive处理返回的对象都是一个新的代理对象，但是markRaw处理返回的对象和源对象还是同一个对象。
  </div>
  <div>并且markRaw不能将响应式对象还原为普通对象</div>
  <div>markRaw() 和类似
    shallowReactive()都是浅层api，也就是说如果我们使用reactive去代理markRaw()代理的对象，那么reactive()代理的对象还是响应式的，markRaw()代理的对象还是普通对象。
    因为reactive不会改变源对象而是返回一个新对象，shallowReactive同理
  </div>

  <div>markRaw() 应用场景是第三方应用创建的实例，不需要响应式的，比如cesium中的model</div>

  <div>无论是markRaw 还是 readonly 都没有把对象冻结或者密封或者不可扩展</div>

  <div>
    在Vue 3中，vite对象中的__v_skip属性是一个内部属性，用于在Vue的响应式系统中标记一个对象或属性，以指示在进行响应式转换时应该跳过该对象或属性。这个属性通常是在Vue的内部使用的，用于优化响应式系统的性能。

    当一个对象或属性被标记为__v_skip时，Vue会在进行响应式转换时跳过对该对象或属性的处理，从而避免不必要的响应式代理和追踪。这可以提高Vue应用的性能，并减少不必要的计算和内存消耗。

    总的来说，__v_skip属性是Vue内部使用的一个标记，用于优化响应式系统的性能。一般情况下，开发者不需要直接操作或关注这个属性。希望这个解释对您有帮助！如果您有任何其他问题，欢迎继续提问。

    https://blog.csdn.net/qq_52438072/article/details/120493364

    如果markRaw前面有reactive或者shallowReactive处理过 那么markRaw处理后的对象再使用reactive和shallowReactive处理还是响应式对象,即便有v_skip属性
  </div>

  <div>
    可以使用markRaw来标记一个第三方库返回的对象，再赋值给响应式对象此时响应式对象不会对这个markRaw中的内容进行代理。

    虽然v3使用proxy按需代理对象，但是第三方库的对象如果很大层级很深，那么被reactive处理后，每次读取其中的某个属性都会去判断是否需要代理，这样会造成性能问题。 造成页面卡顿。

    vue3是按需代理 使用到某个属性的时候 再去代理。因此性能比vue2要好很多，但是vue3在代理例如cesium模型等一些对象的时候，会十分的卡顿。因为cesium的对象属性非常多，层级非常深，处理起来会很耗费性能。
    并且cesium的模型对象属性还是会一直读取更新模型状态的，导致vue响应式也一直更新，导致页面卡顿。这一点要避免。

    测试出来了 reactive处理是立刻完成的 但是后续数据更新层级太多导致一直更新生成虚拟dom 然后dispatch卡顿了。

    https://www.php.cn/faq/547238.html reactive源码
  </div>
  <div>我是attrs {{ attrs }}</div>
</template>

<style lang="scss" scoped></style>