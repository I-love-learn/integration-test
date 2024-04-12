<script setup>
import { useGlobal, useStore } from '@/store'
import { coolPostStart, delRoomPerson } from '@/api/request'
// vantpicker是被动态组件使用的 因此需要导入 不属于动态导入的范畴
import VantPicker from '@/components/VantPicker.vue';
import SetUp from '@/components/SetUp.vue';
import FlexVue from '@/components/FlexVue.vue';
console.log(SetUp);
console.log(VantPicker);
// flag 控制哪个模块显示
const flag = ref(0)
// visible 控制弹窗显示
const visible = ref(false)
const visible2 = ref(false)

// 点击事件 切换flag
function clickEvent(e) {
  console.log(e);
}

// ^-------------------------- 数组async
const ARRAY = [1, 2, 3, 4, 5]

const fetch = function () {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove({ code: 200, message: { name: 'test' } })
    }, 2000);
  })
}
// async的作用是将一个函数变为异步函数，在其中可以使用await关键字，将异步操作变为同步操作 await会阻塞后面的代码运行，但不会阻塞async外部的代码执行
async function print() {
  console.log('我执行'); // 1
}
print()
// async只会改变await后续代码的执行时机 但是不会改变异步任务的执行时机
function TestAsyncFunc() {
  ARRAY.forEach(async (item) => {
    console.log(0); // 2 这里的async函数打印0 是同步的
    const res = await fetch() // await需要等待 但下面的打印1 和 这里的回调不是同一级 因此不会阻塞1的打印
    // 可以
    console.log(res.message) // 4

    // some 回调如果是 async异步 只会执行一次 因为some是同步的，如果使用异步则始终返回true

    // promise的状态 只会改变一次 如果我们想要测试 则每次都return 一个新的promise
    ARRAY.some(async (item) => {
      if (item === 1) {
        console.log(0);
        const res = await fetch()
        console.log(res.message)
        return true
      }
    })
  })
  console.log(1); // 3 
}

TestAsyncFunc()
// $--------------------------- 数组async结束

// ^--------------------------- 对象劫持
const object = {
  a: 1,
  b: 2,
  c: { d: 3 }
}
Object.defineProperty(object, 'a', {
  get() {
    return 3
  },
  set() {
  }
})

console.log(Object.getOwnPropertyDescriptor(object, 'a'));

// 如果被劫持那么getOwnPropertyDescriptor 会有get和set属性

// $--------------------------- 对象劫持结束

// ^--------------------------- 对象代理

const proxy = new Proxy(object, {
  get(target, key, receiver) {
    console.log(target, key, receiver);
    // 没有这个的话 代理对象不会返回2 但是如果通过控制台查看这个proxy的话 可以看到target然后 可以通过target源对象 点击a 触发劫持的get return 2
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(target, key, value, receiver);
    return Reflect.set(target, key, value, receiver)
  }
})
// console.log(proxy.target); // undefined proxy上不存在这个属性 但是控制台可以查看
// proxy.toString() // proxy执行toString方法 会去触发get key此时是Symbol(Symbol.toStringTag)
// Number(proxy) // 先触发Symbol(Symbol.toStringTag) 分别执行valueOf 和toString 然后又会触发Symbol(Symbol.toStringTag)  结合js高级那本书看这里
// Boolean(proxy) // 没反应
// new Object(proxy) // 没反应
// new Array(proxy) 无反应
// console.log(Object.prototype.toString.call(proxy)); // [object Object] 这个方式无法判定是不是proxy   https://blog.csdn.net/zhongqw_00/article/details/123479614 不过可以采用这种方式


// Symbol.toStringTag  object对象自带的默认symbol属性 当对象执行tostring方法的时候 会从其身上读取Symbol.toStringTag 获取其值 作为[object xxx]后面的值 表示对象的类型 这个值是可以覆盖的

const obj1 = { a: 1, b: 2 }

obj1[Symbol.toStringTag] = 'xt'

console.log(obj1.toString());
console.log(Number(obj1)); // NaN  number等不会读取Symbol.toStringTag 仅字符串读取
console.log(({ [Symbol.toStringTag]: 'Foo' }.toString())); // [object Foo]
// 创建一个类 这个类创建的实例对象 读取Symbol.toStringTag的时候 返回xxx
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}

let x = new Collection();

console.log(Object.prototype.toString.call(x)); // [object xxx]

// 解决办法是重写Proxy构造函数

// console.log(Proxy);
// Object.prototype.toString = function () {
//   return 123
// }
// Object.prototype上的方法是可以被重写的
// console.log(Object.prototype.toString);


const abcd = [1, 2, 3]
console.log(abcd.toString()); // 1,2,3
console.log(Object.prototype.toString.call(abcd)); // [object Array] 这也就是为什么更推荐用Object.prototype.toString.call(obj)来判断obj的类型

// https://blog.51cto.com/u_15726982/5504331 因为Number、String，Boolean，Array，RegExp、Date、Function等内置对象均重写了Object原型上的toString方法，作用为将当前数据类型转为字符串类型。 执行不到Object原型上的toString方法 因为Object原型上的toString方法 在Object.prototype上，而前面的包装对象执行的是其包装对象的prototype上的toString方法

console.log(Number.prototype);

console.log(Object.toString === Object.prototype.toString);
console.log(Object.toString);
for (const key in Number) {
  if (Object.hasOwnProperty.call(Number, key)) {
    const element = Number[key];
    console.log(element); // 啥也没有
  }
}
const MyProxy = new Proxy(Proxy, {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
  //拦截 new 操作符，生成 Proxy 实例的时候来拦截
  construct: function (target, argumentsList) {
    //result是new Proxy()生成的原本的实例
    const result = new target(...argumentsList);
    //获取原本实例reslut的类型
    const originToStringTag = Object.prototype.toString.call(result).slice(1, -1).split(' ')[1]
    //改写result的[Symbol.toStringTag]属性，加上被代理的标志
    result[Symbol.toStringTag] = 'Proxy-' + originToStringTag;
    return result;
  },
});

const abc = new MyProxy({ a: 1 }, {})

console.log(abc.toString()); // [object Proxy-Object]
// $--------------------------- 对象代理结束

// ^--------------------------- watch

const obj = reactive({
  data: { d: 1 }
})

// 不可以
watch(obj.data, (newvalue) => {
  console.log(newvalue);
}, {
  deep: true
})
console.log(obj.data, isReactive(obj.data));
watch(() => obj.data, (newvalue) => {
  console.log(newvalue);
}, {
  deep: true
})
// 监听属性不可以 整个监听可以 
watch(obj, (newvalue) => {
  console.log(newvalue);
}, {
  deep: true
})
function assign() {
  obj.data = { a: 1, b: 2 }
  obj.data.d = 6
}
console.log(proxy.a);
proxy.a = 2
proxy.c.d = 5
let a = { c: 1 }

// 不生效 非响应式数据 watch监听无效
watch(() => a.c, (newvalue) => {
  console.log(newvalue);
}, { deep: true })
a.c++
setTimeout(() => {
  a.c++
}, 100);

const emptyObject = reactive({ data: {} })

watch(() => emptyObject.data.a, (newValue) => {
  console.log(newValue); // 会触发 也就是说 getter函数的watch 监听的时候
})
const emptyObject1 = { data: {} }

watch(() => emptyObject1.data.a, (newValue) => {
  console.log(newValue); // 会触发 也就是说 getter函数的watch 别管监听的那个值当前存不存在 只要赋值了 就会触发监听
})
setTimeout(() => {
  emptyObject.data.a = 10
  emptyObject1.data.a = 100 // 不会触发监听
}, 3000);

// 可以监听到对象变化 但仅仅只有一次 第一次
watchEffect(() => {
  console.log(a.c);
})

const obj2 = reactive({
  data: { d: 1 }
})
setTimeout(() => {
  obj2.data.d = 2
}, 1000);
// 如果watchEffect 只使用了某个响应式对象 则只会初始化的时候执行一次 如果使用到了某个值 则那个值变化时候会执行。 当然只要我们用到了那个值 那么就会触发监听 比如这里原本obj2是只打印一次的 但由于我们又在里面去使用了 obj2中data的d 则obj也打印了两次 因为data.d 变化了 所以会执行2次
watchEffect(() => {
  console.log(obj2); // 执行一次
  // console.log(obj2.data); // 执行一次
  console.log(obj2.data.d); // 执行2次
})
// $--------------------------- watch结束

// ^--------------------------- pinia
const global = useGlobal()

let store = useStore()

// 这样可以触发 getter函数
watch(() => global.b, (newvalue) => {
  // 无反应
  console.log(newvalue);
})
// 直接替换store里的某个state是会触发 响应式的 但不会触发watch监听那个属性 但是会触发直接监听state
setTimeout(() => {
  global.b = 123
}, 3000);
console.log(store);
console.log(Object.getOwnPropertyDescriptors(global));
function clean() {
  // 将store的值设置为 null后 dom没有销毁 因为dom没有触发响应式 但再给store.array数组 增加值的时候 会直接报错 无法给null 增加值
  // store = null
  // console.log(store);
  store.array = null // 对store state的重新赋值是可以触发响应式的 想要将state恢复成初始值 使用$reset方法
  setTimeout(() => {
    store.array = [1]
  }, 500);
}

// $--------------------------- 结束

// ^--------------------------- async 开始

async function asyncFunc() {
  // async 中 return 等于 Promise中的reslove返回一个状态 并且这个return 必须是同步的 异步的话返回undefined
  setTimeout(() => {
    return 123
  }, 300);
}
console.log(asyncFunc()); // promise
asyncFunc().then(res => {
  console.log(res);
})

async function Reject() {
  // 此时是执行 reject等于是 抛出错误
  throw new Error('错误的')
}

async function useReject() {
  try {
    Reject().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err); // 这里返回
    })
    await Reject()
    console.log(456);
  } catch (error) {
    console.log(error);
  }
}
useReject()
// reslove 无法throw 错误 因此被then捕获 而async throw错误被catch捕获
Promise.resolve(new Error('123')).then(res => {
  console.log(res); // 这里返回
}).catch((err) => {
  console.log(err);
})
// $--------------------------- async 结束

// 发起请求
async function ajax() {
  coolPostStart().then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
  try {
    const result = await delRoomPerson().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  } catch (error) {
    console.log(error);
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Promise.reject(new Error('错误的')))
    }, 3000);
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })

  new Promise((resolve, reject) => {
    resolve(Promise.reject(123))
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
    return err
  }).then(res => {
    console.log(res);
  })

}

const attr = ref(123)
setTimeout(() => {
  attr.value = 456
}, 10000);


const count = ref(0)
const o1 = reactive({
  count,
  a: 1
})
const v = toRef(o1, 'a')
console.log(v);
v.value++
console.log(o1);
console.log(o1.count); // 0
// console.log(o1.count.value); // undefined

// v-bind 绑定的css
const color = ref('red')
</script>

<script>
export default {
  mounted() {
    console.log(this);
  },
}
</script>

<template>
  <el-container>
    <el-aside width="400px">
      <el-button type="primary" @click="flag = 1">append-to-body</el-button>
      <el-button type="primary" @click="flag = 2">.naive</el-button>
      <el-button type="primary" @click="flag = 3">循环可以使用async吗？</el-button>
      <el-button type="primary" @click="flag = 4">shallowReactive和markRaw</el-button>

      <el-button type="primary" @click="flag = 5">判断对象是否被代理或劫持</el-button>

      <el-button type="primary" @click="flag = 6">watch可以监听一个一开始没有后面又赋值的数据吗</el-button>
      <el-button type="primary" @click="flag = 7">pinia使用时赋值</el-button>
      <el-button type="primary" @click="flag = 8">async异步函数中的return是什么</el-button>
      <el-button type="primary" @click="flag = 9">axios拦截器中的失败函数的return有什么用</el-button>
      <el-button type="primary" @click="flag = 10">动态组件component</el-button>
      <el-button type="primary" @click="flag = 11">折叠菜单组件</el-button>
      <el-button type="primary" @click="flag = 12">setup直接返回一个h可以被页面使用吗</el-button>
      <el-button type="primary" @click="flag = 13">ref不需要.value</el-button>
      <el-button type="primary" @click="flag = 14">测试插槽的flex</el-button>
      <el-button type="primary" @click="flag = 15">测试flex子元素宽度</el-button>
      <el-button type="primary" @click="flag = 16">css v-bind</el-button>
      <el-button type="primary" @click="flag = 17">deep</el-button>
    </el-aside>
    <el-main style="position: relative;">
      <template v-if="flag === 1">
        <el-button type="primary" @click="visible = true">显示弹窗</el-button>
        <div style="position: absolute;top: 100px;left: 100px;">
          <el-dialog title="Basic usage" v-model="visible" class="dialog" :modal="false" width="80%">
            <div>
              element plus 上说当 modal 的值为 false 时，请一定要确保 append-to-body 属性为 true，由于 Dialog 使用 position: relative
              定位，当外层的遮罩层被移除时，Dialog 则会根据当前 DOM 上的祖先节点来定位，因此可能造成定位问题。

              但是经过我测试 并没有发现弹窗不加append-to-body 属性时的定位问题。 因为每次弹窗都会自动添加一个遮罩层。而遮罩层的大小是全屏的，我怀疑是自动append-to了一个遮罩层，因此样式不受影响。

              另外官方建议我们dialog嵌套时要添加append-to-body属性或者是直接写在外面 平级。
            </div>
            <div style="width: 500px;height: 100px;position: relative;">
              <el-dialog title="dialog2" draggable v-model="visible2" :modal="false">
                <div>我是第二个窗口</div>
                <template #footer>
                  <el-button @click="visible2 = false">取 消</el-button>
                  <el-button type="primary" @click="visible2 = false">关闭窗口</el-button>
                </template>
              </el-dialog>
            </div>

            <template #footer>
              <el-button @click="visible = false">取 消</el-button>
              <el-button type="primary" @click="visible2 = true">打开新窗口</el-button>
            </template>
          </el-dialog>
        </div>
      </template>

      <template v-else-if="flag === 2">
        <div>
          首先，明确一点，vue3中的naive没有了。

          直接对子组件使用事件 如果子组件有根节点则直接事件放在 根节点上执行 如果没有根组件则会抛出警告 让用emits写

          Vue 3.x 取消 .native 修饰符
          .native 修饰符在 Vue 3.x 已经移除掉了。取而代之的是，在新增的 emits 选项中定义当前组件真正触发的事件（即，组件事件）。此外，Vue 现在将所有未在组件emits
          选项中定义的事件作为原生事件添加到子组件的根元素中（除非子组件选项中设置了 inheritAttrs: false）。
          https://blog.csdn.net/weixin_44869002/article/details/113176244

          也就是说vue3中 放在子组件身上但并未被emits接收的事件 会直接被认为是.native事件原生事件 v3等于是省略了v2的.native修饰符号 而v2的.native修饰符意思是直接使用原生事件。
          也就是把组件当作一个dom注册一个原生的事件使用。

          v2中 native只能用于组件 意味给组件添加一个原生事件 这个原生事件就是v-on后的那个事件 因为v-on事件就是对原生事件的封装。

          我们可以使用 v-on 指令 (简写为 @) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：v-on:click="handler" 或 @click="handler"。
          https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers 因为编译成虚拟dom的时候就是onClick。

          如果组件根节点绑定了一个事件 然后父组件使用时 绑定了一个相同事件 那么会触发两次 比如子组件input 子组件绑定了input事件 父组件也绑定了此时会触发两次回调
          <test-child-multiple @click="clickEvent" />
          <test-child-single @input="clickEvent" />
        </div>
      </template>

      <template v-else-if="flag === 3">
        <div>
          测试对数组进行遍历的时候回调可不可以使用async

          答案是：可以，但some只会执行一次
        </div>
      </template>

      <template v-else-if="flag === 4">
        <data-react :abc="attr" />
      </template>

      <template v-else-if="flag === 5">
        https://blog.csdn.net/zhongqw_00/article/details/123479614 检测一个对象是否被proxy
      </template>

      <template v-else-if="flag === 6">
        <el-button type="primary" @click="assign">点我赋值</el-button>

        watch使用的时候，如果监听的是一个响应式对象中的某个属性，如果这个属性直接被赋值了，那么不会触发监听，（原因应该是proxy劫持的时候get与set只会触发到本级，比如代理了a对象，修改a对象中b属性
        那么set中target就是a 而不是b，而watch直接监听a.b 只能监听到b内部变化时触发，想要让b赋值时也被监听到
        则需要使用getter函数，内部原理暂不清楚）除非我们监听的时候是getter形式的方式监听的。但这个监听是浅的，仅限于该值被赋值了，需要设置deep:true,而默认的reactive被watch的时候默认就是深度的。
        也就是说 如果需要监听响应式中某个属性的话需要getter函数。
        <div>
          https://www.jb51.net/article/270499.htm#_lab2_0_0

          vue3中watch不可直接监听响应式对象的属性 但写成getter函数的形式则可以监听属性重新赋值时的变化，并且可以通过deep设置成true
        </div>
        <div>
          https://juejin.cn/post/7013312008410005541
          他们都是拿一个属性 简单数据类型举例 但是我测试对象属性也不行啊
        </div>
        <div>
          在Vue 3中，watch选项可以接受一个getter函数作为参数。这个getter函数的作用是用来获取被监听属性的值。当这个被监听属性的值发生变化时，Vue
          3会调用这个getter函数来获取最新的属性值，并触发相应的操作。

          通过使用getter函数，你可以更灵活地控制watch选项的行为。getter函数可以返回任何你想要监听的值，可以是响应式对象的属性，也可以是计算属性的值，甚至可以是一些复杂的逻辑。这样可以让你在watch选项中实现更加灵活和复杂的逻辑处理。

          总的来说，watch选项中的getter函数是用来获取被监听属性的最新值的函数。通过合理地使用getter函数，你可以更好地实现对响应式数据的监听和处理。希望这个解释对你有帮助！如果你有任何其他问题，我很乐意为你解答。
        </div>
      </template>

      <template v-else-if="flag === 7">
        <div>
          {{ store.array }}
        </div>
        <div>{{ global }}</div>
        <el-button type="primary" @click="store.array.push(1)">往store里添加内容</el-button>
        <el-button type="primary" @click="global.e = 1010">往global里添加内容</el-button>
        <el-button type="primary" @click="clean">清空store</el-button>
        <div>直接修改store中state的值是会触发响应式的因为 store的值是响应式的</div>
      </template>

      <template v-else-if="flag === 8">
        <div>
          https://www.cnblogs.com/voxov/p/14575667.html
        </div>
        <div>
          async函数 中默认返回的是 Promise.reslove() 也就是undefined return xx 就等于 return Promise.reslove(xx) 返回一个promise
        </div>
      </template>

      <template v-else-if="flag === 9">
        <div>
          <el-button type="primary" @click="ajax">发起ajax请求</el-button>"
        </div>

        <div>promise resolve一个值 可以被then拿到 resolve一个Promise.reject 可以被catch拿到</div>
        <div>resolve会返回成功状态 then和catch调用会返回一个新的promise</div>
        <div>这也是为什么我们请求拦截和相应拦截器是一个函数了 因为函数执行会返回值 reslove这个函数执行</div>
      </template>

      <template v-else-if="flag === 10">
        <!-- 动态组件是可以传参的 所有被动态组件使用的组件都可以拿到props  is不在props中 -->
        <component :is="VantPicker" a="a" />
      </template>
      <template v-else-if="flag === 11">
        <slide-vue />
      </template>
      <template v-else-if="flag === 12">
        <set-up :attr="attr" />
      </template>
      <template v-else-if="flag === 13">
        <div>
          响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何 ref 属性，同时保持响应性。
        </div>
      </template>
      <template v-else-if="flag === 14">
        <div>
          align-items属性适用于弹性容器（flex container）内部的所有项目（flex items），作用于整个容器内的项目。
        </div>
        <div>
          设置了align-items属性后，flex中的子元素高度会自动根据元素内容撑开，而不会铺满父元素，这一点和定位很像。（也有一些属性设置了高度还是铺满父元素的，比如stretch normal等等） 除了这些属性 其他的都是自适应高度
          https://blog.csdn.net/JHY97/article/details/122334190
          初始值是normal 和拉伸模式一样，所以子元素会铺满父元素，其它center flex-start flex-end是自适应高度。
        </div>
        <div>圣杯布局可以两端写死中间flex：1</div>
        <flex-vue>
          <div>123</div>
          <div style="height: 20px;width: 0;border-left: 1px solid red;"></div>
        </flex-vue>
      </template>
      <template v-else-if="flag === 15">
        <div style="background-color: red;display: flex;justify-content: stretch;height: 80px;">
        <div>456</div><div>678</div>
      </div>
      <div>
        flex的子元素 和定位一样 被内容撑开  高度倒是默认拉伸的
      </div>
      </template>
      <template v-else-if="flag === 16">
      <div class="vb">
        script setup
      </div>
      <div>
        实际的值会被编译成哈希化的 CSS 自定义属性，因此 CSS 本身仍然是静态的。自定义属性会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式地更新。
      </div>
      </template>
      <template v-else-if="flag === 17">
        <div>测试几种deep</div>

        <div>deep的意思是 在当前元素的之前加当前组件的的data-v 而直接写是在元素之后加data-v 导致找不到对应的class</div>

        <!-- 插槽里的data-v 用的是使用他的组件的data-v -->S
      <div class="deep1">
        <el-button class="btn"><el-button>123</el-button></el-button>
      </div>
      <!-- 子组件修改父组件插槽内容样式也可用deep 做法是在子组件的除了根节点外包裹插槽内容盒子外的任意元素加上 deep -->
      <!-- ：deep 不能嵌套 ：deep 否则会不生效 -->
      <slot-test>
        <div>123</div>
      </slot-test>

      <div class="deep2">
        <div class="deep3">
          <div class="deep4">123</div>
        </div>
      </div>
      </template>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
div {
  color: var(--color-blue)
}

.el-container {
  height: 100%;

  .el-aside {
    background-color: #f5f7fa;
    height: 100%;

    .el-button {
      margin: 5px;
    }
  }
}

.vb {
  // v-bind编译后是 css 变量  + 号可写可不写 编译后都是空格
  // 如果想写表达式则需要用引号包裹起来
  color:v-bind('color') !important
}
:deep(.btn){
  color: red;
  .el-button{
    span{
      font-size: 20px;
    }
  }
}
// 不生效
:deep(.deep2){
  :deep(.deep3){
    .deep4 {
      color: red;
    }
  }
}
</style>