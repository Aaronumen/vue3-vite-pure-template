import styles from "./demo.module.less"
export default defineComponent({
  setup() {
    const demo = ref("demo page")
    const test = ref("test")
    return () => (
      <>
        {demo.value}
        <div class={styles.test}>{test.value}</div>
      </>
    )
  }
})
