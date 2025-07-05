export function bb() {
  console.log(333)
  return () => {
    console.log(4444)
    console.log(4444)
  }
}
const a = 1
