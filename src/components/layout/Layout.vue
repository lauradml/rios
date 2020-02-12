<template>
  <div>
    <Header></Header> 
    <slot name="contenido"></slot>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"

export default {
    name: 'TheLayout',
    components: {        
        Header,
        Footer
    }
}
</script>