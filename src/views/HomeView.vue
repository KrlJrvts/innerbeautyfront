<template>
    <section id="home">
        <div class="d-flex justify-content-end p-4">
        <a class="btn" @click="pushTo"><i class="fa-solid fa-arrow-right-to-bracket fa-3x"></i></a>
        </div>
        <div class="container homepage">
            <div class="row">
                <div class="col">
                    <h1>Inside beauty Homeview</h1>
                </div>
            </div>
        </div>


    </section>
  <section>


  </section>
</template>

<script>


import router from "@/router";

export default {
  name: 'HomeView',
  components: {

  },
  methods:{
      pushTo() {
          router.push('/login')
      },

  }
}
</script>


<style>

.container{
    width: 100vw;
    height: 40%;
    position: relative;
    top: 30%;
}

h1 {
    color: white;
}
a {
    color: red!important;
    transition: all 500ms ease!important;
    transform: scale(1)!important;
}
a:hover {
    /*transition-duration: 1000ms!important;*/
    transform: scale(1.3) perspective(1px)!important;
}

</style>
