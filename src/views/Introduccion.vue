<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-4
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGM01.pt-4.px-md-5.px-4.mb-4
      .row.justify-content-center.mb-5
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/intro/img01.svg' alt="Imagen decorativa")
        .col(data-aos="fade-left")
          p.mb-0 Para iniciar el desarrollo temático y conceptual de este componente formativo, es importante tener un contexto sobre lo que se tratará en este, por tal motivo, a continuación, se presenta una breve introducción, que lo enrutará en este aprendizaje:
      
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
