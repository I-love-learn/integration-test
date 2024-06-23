import { ref } from "vue"
export function returnARef() {
  const a = ref("")

  return a
}
const a1 = ref("123")
// setInterval(() => {
//   a1.value = a1.value + 1
// }, 500)
export { a1 }

export function returnARef2() {
  const a = ref("123")
  setInterval(() => {
    a.value = a.value + 1
  }, 500)
  return a.value
}
