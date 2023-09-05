<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Con el objetivo de lograr un desarrollo sostenible, es necesario implementar acciones en los diferentes entornos, con el fin de lograr procesos articulados que permitan una participación activa de todos los actores sociales, para que de esta manera se generen proyectos que mejoren día a día y con esto suplir las necesidades que se detecten en la comunidad y que propendan por un mejoramiento de su calidad de vida. Por esta razón este componente formativo profundiza en diversos temas necesarios para cumplir con este objetivo y que se esquematizan a continuación:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis resume los temas abordados en el componente formativo, para este caso se profundizó en temas muy relevantes como las políticas favorecedoras para el mejoramiento continuo de calidad de vida, los diversos conceptos de entorno saludable, sus características, marco conceptual entre otros.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
