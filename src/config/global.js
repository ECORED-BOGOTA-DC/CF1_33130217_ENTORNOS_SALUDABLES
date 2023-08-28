export default {
  global: {
    componenteFormativo:
      'Marco normativo y lineamientos de entornos saludables',
    descripcionCurso:
      'Uno de los Objetivos de Desarrollo Sostenible (ODS), es apuntar al mejoramiento de los entornos, integrando el sector de la salud, el cual fomenta entornos saludables de tal manera que, en los territorios, se implementen acciones que influyan sobre determinantes sociales de la salud, con proyectos cooperativos y participativos, de ahí la importancia de capacitar a profesionales del sector salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Políticas favorecedoras de los entornos saludables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'A nivel internacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'A nivel nacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Por entorno',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lineamiento de entornos saludables',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130217_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1. A nivel internacional',
      referencia:
        'OMS. (2020). Declaración de Adelaida sobre la salud en todas las políticas: hacia una gobernanza compartida en pro de la salud y el bienestar.',
      tipo: 'Documento',
      link: 'https://apps.who.int/iris/handle/10665/44391',
    },
    {
      tema: '2. Lineamiento de entornos saludables',
      referencia:
        'Ministerio de Protección Social. (2006). Lineamientos Nacionales para la Aplicación y el Desarrollo de las Estrategias de Entornos Saludables.',
      tipo: 'Documento',
      link:
        'https://www3.paho.org/col/index.php?option=com_docman&view=download&category_slug=publicaciones-ops-oms-colombia&alias=28-lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-estrategias-de-entornos-saludables&Itemid=688',
    },
  ],
  glosario: [
    {
      termino: 'Enfoques de los entornos',
      significado:
        'los enfoques planteados son de derechos, diferencial, de género, de curso de vida y de determinantes sociales.',
    },
    {
      termino: 'Entorno comunitario',
      significado:
        'en este entorno ubicar las políticas sociales actuales: la política social del Gobierno Nacional está enfocada en la reducción de la pobreza y la promoción de la equidad.',
    },
    {
      termino: 'Entorno hogar',
      significado:
        'el hogar, en un sentido amplio es el escenario de acogida y afecto en el que transcurre parte de la vida de los seres humanos, fundamental desde la perspectiva de familia, el hogar familiar, para el inicio de la vida y de la primera infancia.',
    },
    {
      termino: 'Entorno laboral',
      significado:
        'en este entorno existe la política pública de salud y seguridad en el trabajo entendiendo la salud laboral como la reducción y/o eliminación de los factores de riesgo dentro del centro de trabajo.',
    },
    {
      termino: 'Entornos saludables',
      significado:
        'el entorno o ambiente, es el espacio físico, social y cultural, en donde un individuo, su familia y su comunidad, mora cotidianamente. (vivienda, escuela, lugar de trabajo, vecindario, vereda, municipio, ciudad) y donde forma relaciones sociales que determinan una manera de vivir y de ser.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la república de Colombia. (2020). <em>Proposición no. 13.</em>',
      link:
        'https://www.camara.gov.co/sites/default/files/2020-05/COMISION%20II%20ORDEN%20DEL%20DIA%20MARTES%2012%20DE%20MAYO%20DE%202020.pdf',
    },
    {
      referencia:
        'MinSalud. (2.015). <em>El ABC de los entornos saludables.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/abc-entornos-saludables.pdf',
    },
    {
      referencia:
        'MinSalud. (2016). <em>Lineamientos Nacionales de entornos.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf',
    },
    {
      referencia: 'MSPS. (2022). <em>Qué es género.</em>',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/promocion-social/Paginas/genero.aspx',
    },
    {
      referencia:
        'PNUD. (2022). <em>Guía para la transversalización de género.</em>',
      link:
        'https://www.undp.org/es/chile/publications/gu%C3%ADa-para-la-transversalizaci%C3%B3n-de-g%C3%A9nero',
    },
    {
      referencia:
        'UNDP. (2.022). ¿Qué son los Objetivos de Desarrollo Sostenible?',
      link: 'https://www.undp.org/es/sustainable-development-goals',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Patricia Díaz Gutiérrez',
          cargo: 'Experto Temático',
          centro:
            'Regional Huila, Centro de la Industria la Empresa y los Servicios',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
