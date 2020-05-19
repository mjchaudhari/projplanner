<template>
  <transition name="fade">
    <div class="mod-window">
        <div class="mod-backdrop">
        </div>
        <div class="mod-content sketchy-border ">
            <div class="mod-header">
                <h1>
                    {{title}}
                </h1>
            </div>
            <div class="mod-body">
                <slot/>
            </div>
            <div class="mod-footer">
                <button type="button" class="btn btn-lg btn-success" @click="ok">Ok</button>
                <button type="button" class="btn btn-lg btn-primary" @click="cancel">Cancel</button>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    title: String
  },
  methods:{
    ok(){
      this.$emit("ok")
    },
    cancel(){
      this.$emit("cancel")
    }
  }
}
</script>

<style>

</style>