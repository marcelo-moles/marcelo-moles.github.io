// Contenido del portafolio: textos en español e inglés, en un solo lugar.
export const cvFiles = { es: 'cv/CV_Marcelo_Molina_ES.pdf', en: 'cv/CV_Marcelo_Molina_EN.pdf' }

export const content = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Formación',
      contact: 'Contacto',
      projects: 'Proyectos',
      engineering: 'Ingeniería'
    },
    ui: {
      cv: 'CV',
      experience: 'Ver experiencia',
      contact: 'Contactame',
      menu: 'Menú',
      switch: 'EN',
      present: 'Actual',
      roles: [
        'Senior Backend .NET Developer',
        'Especialista en APIs REST',
        'Diseño de microservicios',
        'Clean Architecture · DDD'
      ],
      search: 'Buscar',
      shortcut: 'Ctrl K',
      placeholder: 'Escribí un comando o una sección…',
      noResults: 'Sin resultados',
      copyEmail: 'Copiar email',
      copied: 'Email copiado al portapapeles',
      copy: 'Copiar',
      sections: 'Secciones',
      actions: 'Acciones',
      switchLang: 'Cambiar idioma (ES / EN)',
      downloadCv: 'Descargar CV',
      statsNote: 'Experiencia en números'
    },
    hero: {
      eyebrow: 'Senior Backend .NET Developer',
      name: 'Marcelo Molina',
      intro: 'Analista de Sistemas y desarrollador backend con más de 10 años de experiencia construyendo soluciones empresariales con .NET, C# y SQL Server.',
      focus: ['APIs REST', 'Microservicios', 'Clean Architecture', 'Integración de sistemas'],
      btnProjects: 'Ver proyectos',
      btnGitHub: 'GitHub'
    },
    about: {
      eyebrow: 'Perfil',
      title: 'Sobre mí',
      paragraphs: [
        'Cuento con más de 10 años de experiencia en desarrollo de software, trabajando principalmente con C#, .NET, APIs REST, microservicios y bases de datos.',
        'Mi experiencia incluye entornos empresariales y bancarios, donde participé en el desarrollo de servicios backend, integraciones, lógica de negocio y soluciones orientadas a alta disponibilidad y mantenibilidad.',
        'Me interesa especialmente resolver problemas complejos mediante buenas prácticas de ingeniería, aplicando principios SOLID, Clean Architecture, Domain-Driven Design y patrones de diseño.'
      ],
      stats: [
        { value: '10+', label: 'Años de experiencia' },
        { value: '.NET', label: 'Especialización backend' },
        { value: 'CA', label: 'Clean Architecture' },
        { value: 'DDD', label: 'Domain-Driven Design' },
        { value: 'SOLID', label: 'Principios SOLID' },
        { value: 'API', label: 'Desarrollo de APIs' }
      ]
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia',
      items: [
        {
          role: 'Desarrollador Full Stack',
          org: 'Desarrollador de Software Freelance',
          period: 'Marzo 2014 – Presente',
          bullets: [
            'Desarrollo backend utilizando C# / .NET, Java, Python y Node.js.',
            'Desarrollo frontend utilizando Vue.js y React.js.',
            'Desarrollo de bases de datos y gestión de datos utilizando SQL Server y MongoDB.',
            'Diseño e implementación de APIs REST, lógica de negocio, integraciones y servicios backend.',
            'Trabajo de forma independiente durante todo el ciclo de vida del desarrollo de software, desde el análisis de requerimientos y el diseño de soluciones hasta la implementación y entrega.',
            'Adaptación de la tecnología y la arquitectura a los requerimientos específicos de cada proyecto.'
          ],
          description: 'Desarrollo de software freelance para diferentes clientes y proyectos, trabajando en backend, aplicaciones web, APIs y soluciones de bases de datos.',
          tags: [
            'C#',
            '.NET',
            'Java',
            'Python',
            'Microservices',
            'Node.js',
            'REST API',
            'MongoDB',
            'SQL Server',
            'Vue.js',
            'React.js'
          ]
        },
        {
          role: 'Senior Backend Developer .NET · Java · Analista Funcional',
          org: 'Banco ICBC Argentina',
          period: 'Feb 2024 – May 2026',
          bullets: [
            'Desarrollo de APIs REST y servicios backend con C# .NET y Java',
            'Implementación de lógica de negocio e integraciones entre sistemas.',
            'Desarrollo de microservicios y componentes distribuidos.',
            'Trabajo con bases de datos SQL Server y soluciones NoSQL.',
            'Aplicación de principios SOLID, DDD y Clean Architecture.',
            'Análisis técnico, resolución de incidentes y evolución de servicios existentes.'
          ],
          description: 'Desarrollo de soluciones backend para entornos bancarios, participando en APIs, servicios, integraciones y componentes orientados a procesos críticos del negocio.',
          tags: [
            'C#',
            '.NET 8/9',
            'Java',
            'Python',
            'REST APIs',
            'Microservices',
            'SQL Server',
            'Kafka',
            'Docker',
            'Git',
            'Azure Data Factory',
            'IA: Claude'
          ]
        },
        {
          role: 'Profesor de Sistemas',
          org: 'Instituto Hilet',
          period: 'Mar 2023 – Dic 2023',
          bullets: [
            'Dictado de Algoritmos II, Algoritmos III y Base de Datos.',
            'Formación técnica en programación y SQL.'
          ],
          description: 'Dictado de materias de programación y bases de datos, con formación técnica en Algoritmos y SQL.',
          tags: ['C#', '.NET', 'Algoritmos', 'SQL', 'Bases de datos']
        },
        {
          role: 'Semi - Senior Backend .NET Developer',
          org: 'Visma Latam',
          period: 'Mar 2020 – Sep 2022',
          bullets: [
            'Desarrollo y mantenimiento de APIs REST y servicios backend.',
            'Implementación de lógica de negocio y funcionalidades para aplicaciones empresariales.',
            'Trabajo con arquitecturas orientadas a servicios y principios de Clean Architecture.',
            'Diseño y optimización de consultas y operaciones sobre bases de datos.',
            'Integración entre diferentes servicios y sistemas.',
            'Participación en análisis técnico, resolución de problemas y evolución de aplicaciones.'
          ],
          description: 'Desarrollo backend de soluciones empresariales dentro de un entorno SaaS, trabajando principalmente con .NET, APIs y servicios orientados a negocio.',
          tags: ['.NET', 'C#', 'SQL Server', 'REST APIs', 'Microservices', 'Git', 'Scrum']
        }
      ]
    },
    
        skills: {
      eyebrow: 'Tecnologías',
      title: 'Habilidades Técnicas',
      groups: [
        {
          category: 'Core',
          title: 'Backend',
          icon: 'devicon:csharp',
          items: [
            { name: 'C#', icon: 'devicon:csharp' },
            { name: '.NET', icon: 'devicon:dotnetcore' },
            { name: 'ASP.NET Core', icon: 'devicon:dotnetcore' },
            { name: 'Java', icon: 'devicon:java' },
            { name: 'Python', icon: 'devicon:python' },
            { name: 'Node.js', icon: 'devicon:nodejs' },
            { name: 'REST APIs', icon: 'mdi:api' }
          ]
        },
        {
          category: 'Arquitectura',
          title: 'Arquitectura',
          icon: 'mdi:hexagon-outline',
          items: [
            { name: 'Clean Architecture', icon: 'mdi:layers-outline' },
            { name: 'DDD', icon: 'mdi:sitemap-outline' },
            { name: 'SOLID', icon: 'mdi:code-braces' },
            { name: 'Microservices', icon: 'mdi:source-branch' }
          ]
        },
        {
          category: 'Persistencia',
          title: 'Datos',
          icon: 'mdi:database-outline',
          items: [
            { name: 'SQL Server', icon: 'devicon:microsoftsqlserver' },
            { name: 'MongoDB', icon: 'devicon:mongodb' },
            { name: 'Redis', icon: 'devicon:redis' },
            { name: 'Dapper', icon: 'mdi:database-search-outline' },
            { name: 'Azure Data Factory', icon: 'simple-icons:microsoftazure' }
          ]
        },
        {
          category: 'Sistemas distribuidos',
          title: 'Mensajería',
          icon: 'mdi:message-processing-outline',
          items: [
            { name: 'Kafka', icon: 'simple-icons:apachekafka' },
            { name: 'Event-driven Architecture', icon: 'mdi:transit-connection-variant' }
          ]
        },
        {
          category: 'Infraestructura',
          title: 'DevOps',
          icon: 'mdi:docker',
          items: [
            { name: 'Docker', icon: 'devicon:docker' },
            { name: 'Git', icon: 'devicon:git' },
            { name: 'GitLab', icon: 'devicon:gitlab' },
            { name: 'CI/CD', icon: 'mdi:infinity' }
          ]
        },
        {
          category: 'Web',
          title: 'Frontend',
          icon: 'devicon:vuejs',
          items: [
            { name: 'Vue 3', icon: 'devicon:vuejs' },
            { name: 'React.js', icon: 'devicon:react' },
            { name: 'TypeScript', icon: 'devicon:typescript' },
            { name: 'Vite', icon: 'devicon:vitejs' },
            { name: 'Pinia', icon: 'simple-icons:pinia' }
          ]
        },
        {
          category: 'IA y herramientas de desarrollo',
          title: 'Desarrollo asistido por inteligencia artificial',
          icon: 'simple-icons:claude',
          items: [
            { name: 'Claude', icon: 'simple-icons:claude' },
            { name: 'AI Agents', icon: 'lucide:bot' },
            { name: 'Skills', icon: 'lucide:workflow' },
            { name: 'Project Memory', icon: 'lucide:brain' }
          ]
        }
      ]
    },
    education: {
      eyebrow: 'Académica',
      title: 'Formación académica',
      items: [
        {
          title: 'Licenciatura en Administración',
          org: 'Universidad Nacional de Quilmes',
          period: '2022',
          detail: '4.º año aprobado · Promedio: 9'
        },
        { title: 'Analista de Sistemas', org: 'ISFDyT N.° 32', period: '2003', detail: 'Promedio: 8' },
        {
          title: 'Analista en Administración de Empresas (Especialización Contable)',
          org: 'ISFDyT N.° 32',
          period: '2002',
          detail: 'Promedio: 8,75'
        }
      ]
    },
    contact: {
      eyebrow: 'Hablemos',
      title: 'Contacto',
      text: 'Si tenés un proyecto, una oportunidad o querés conversar sobre backend y arquitectura, escribime.',
      links: [
        {
          label: 'Email',
          value: 'juanmarcelomolina2@gmail.com',
          href: 'mailto:juanmarcelomolina2@gmail.com',
          icon: 'mail'
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/juan-marcelo-molina',
          href: 'https://www.linkedin.com/in/juan-marcelo-molina',
          icon: 'siLinkedin'
        },
        { label: 'WhatsApp', value: '+54 9 223 571-3120', href: 'https://wa.me/5492235713120', icon: 'siWhatsapp' }
      ],
      languages: {
        title: 'Idiomas',
        items: ['Español: nativo', 'Inglés: intermedio (técnico y profesional)']
      },
      availability: 'Disponible para nuevas oportunidades',
      github: { label: 'GitHub', value: 'Repositorios y proyectos' },
      openForm: 'Enviame un mensaje',
      closeForm: 'Cerrar formulario',
      form: {
        title: 'Enviame un mensaje',
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
        cancel: 'Cancelar',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado correctamente!',
        errorRequired: 'Por favor, completá todos los campos.',
        errorSend: 'Ocurrió un error al enviar el mensaje.'
      }
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos destacados',
      github: 'Ver en GitHub',
      noRepo: 'Repositorio privado',
      items: [
        {
          id: 'corporateexpenses',
          title: 'Corporate Expenses',
          description: 'Aplicación backend enfocada en la gestión de gastos, implementada con .NET, Domain-Driven Design, Clean Architecture y MongoDB.',
          status: 'Disponible',
          soon: false,
          tags: ['.NET 8', 'C#', 'DDD', 'Clean Architecture', 'MongoDB', 'Docker'],
          github: 'https://github.com/marcelo-moles/corporate-expenses-code-sample/tree/main'
        },
        {
          id: 'ecommerceapi',
          title: 'E-Commerce API',
          description: 'API backend para una solución de comercio electrónico desarrollada con .NET, MongoDB y principios REST.',
          status: 'Disponible',
          soon: false,
          tags: ['C#', '.NET 8', 'REST API', 'DDD', 'Clean Architecture', 'MongoDB', 'Docker', 'AI'],
          github: 'https://github.com/marcelo-moles/ecommerce-api'
        },
        {
          id: 'apiprocesaarchivos',
          title: 'Api Procesa Archivos',
          description: 'API diseñada para el procesamiento de archivos de texto de gran tamaño, enfocada en rendimiento, confiabilidad y eficiencia en el procesamiento backend.',
          status: 'Próximamente',
          soon: true,
          tags: ['C#', '.NET', 'REST API', 'SQL Server'],
          github: null
        },
        {
          id: 'ai',
          title: 'Plataforma de análisis de datos con IA',
          description: 'Solución basada en IA desarrollada con Python y .NET para analizar archivos de datos de gran tamaño, detectar inconsistencias y posibles anomalías, y persistir los resultados en SQL Server.',
          status: 'Disponible',
          soon: false,
          tags: [
            'Python',
            '.NET',
            'C#',
            'SQL Server',
            'Inteligencia artificial',
            'Análisis de datos',
            'Procesamiento de archivos grandes',
            'IA'
          ],
          github: 'https://github.com/marcelo-moles/AIDataAnalysisPlatform'
        }
      ]
    },
    architecture: {
      eyebrow: 'Ingeniería',
      title: 'Arquitectura',
      description: 'Diseño soluciones backend enfocadas en la separación de responsabilidades, la mantenibilidad, la escalabilidad y la evolución del sistema.',
      layers: {
        clients: {
          label: 'Presentación',
          title: 'Clientes y Sistemas Externos',
          description: 'Aplicaciones web, aplicaciones móviles y consumidores externos'
        },
        api: {
          label: 'Interfaz',
          title: 'API y Servicios',
          description: 'APIs REST, autenticación, validación y endpoints de servicios'
        },
        application: {
          label: 'Aplicación',
          title: 'Capa de Aplicación',
          description: 'Casos de uso, servicios de aplicación, DTOs y orquestación'
        },
        domain: {
          label: 'Núcleo',
          title: 'Capa de Dominio',
          description: 'Reglas de negocio, entidades, objetos de valor y lógica de dominio'
        },
        infrastructure: {
          label: 'Infraestructura',
          title: 'Infraestructura',
          description: 'SQL Server, MongoDB, Redis, Kafka, Docker e integraciones externas'
        }
      },
      principles: {
        clean: {
          title: 'Clean Architecture',
          description: 'Separación clara de responsabilidades y dependencias orientadas hacia el dominio.'
        },
        ddd: {
          title: 'Domain-Driven Design',
          description: 'Modelado del software alrededor del dominio y sus reglas de negocio.'
        },
        solid: {
          title: 'Principios SOLID',
          description: 'Cinco principios para el diseño orientado a objetos que favorecen la mantenibilidad y flexibilidad.'
        },
        microservices: {
          title: 'Microservicios',
          description: 'Servicios independientes con responsabilidades bien definidas y capacidad de evolución.'
        },
        events: {
          title: 'Arquitectura Orientada a Eventos',
          description: 'Comunicación desacoplada mediante eventos y sistemas de mensajería.'
        }
      }
    },
    architectureFlow: {
      eyebrow: 'Arquitectura',
      title: 'Cómo viaja una solicitud',
      caption: 'Un flujo típico en un sistema distribuido: de la API al almacenamiento, con eventos entre servicios.',
      nodes: ['Cliente', 'APIs REST', 'Microservicios .NET', 'SQL Server', 'Kafka'],
      notes: [
        'Solicitud HTTP',
        'Validación y contratos',
        'Reglas de negocio',
        'Persistencia transaccional',
        'Eventos asíncronos'
      ],
      tags: ['Clean Architecture', 'DDD', 'SOLID', 'REST', 'Microservicios']
    },
    layers: {
      title: 'Arquitectura en capas',
      items: [
        {
          label: 'Presentación',
          title: 'Clientes y sistemas externos',
          description: 'Aplicaciones web, aplicaciones móviles y consumidores externos'
        },
        {
          label: 'Interfaz',
          title: 'API y servicios',
          description: 'APIs REST, autenticación, validación y endpoints de servicios'
        },
        {
          label: 'Aplicación',
          title: 'Capa de aplicación',
          description: 'Casos de uso, servicios de aplicación, DTOs y orquestación'
        },
        {
          label: 'Núcleo',
          title: 'Capa de dominio',
          description: 'Reglas de negocio, entidades, objetos de valor y lógica de dominio'
        },
        {
          label: 'Infraestructura',
          title: 'Infraestructura',
          description: 'SQL Server, MongoDB, Redis, Kafka, Docker e integraciones externas'
        }
      ]
    },
    focus: [
      {
        icon: 'code',
        title: 'Backend Engineering',
        body: 'Desarrollo de APIs, servicios y sistemas backend utilizando C#, .NET y ASP.NET Core.'
      },
      {
        icon: 'layers',
        title: 'Software Architecture',
        body: 'Diseño de soluciones aplicando Clean Architecture, DDD, SOLID y principios de diseño orientados a mantenibilidad.'
      },
      {
        icon: 'database',
        title: 'Data & Integration',
        body: 'Trabajo con SQL Server, MongoDB, mensajería, integraciones y procesamiento de datos.'
      }
    ],
    footer: 'Hecho con Vue 3 y Vite.',
    intro: {
      title: '· Hace click sobre el ROBOT ·',
      lines: [
        'iniciando sistema...',
        'cargando perfil de Marcelo Molina',
        'stack: .NET · C# · Java · Python ··· REST APIs · Microservices',
        'Status ok...Bienvenido.'
      ],
      enter: 'Iniciando portafolios...'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      projects: 'Projects',
      engineering: 'Engineering'
    },
    ui: {
      cv: 'CV',
      experience: 'View experience',
      contact: 'Get in touch',
      menu: 'Menu',
      switch: 'ES',
      present: 'Present',
      roles: [
        'Senior Backend .NET Developer',
        'REST API specialist',
        'Microservices design',
        'Clean Architecture · DDD'
      ],
      search: 'Search',
      shortcut: 'Ctrl K',
      placeholder: 'Type a command or a section…',
      noResults: 'No results',
      copyEmail: 'Copy email',
      copied: 'Email copied to clipboard',
      copy: 'Copy',
      sections: 'Sections',
      actions: 'Actions',
      switchLang: 'Switch language (ES / EN)',
      downloadCv: 'Download CV',
      statsNote: 'Experience in numbers'
    },
    hero: {
      eyebrow: 'Senior Backend .NET Developer',
      name: 'Marcelo Molina',
      intro: 'Systems Analyst and backend developer with over 10 years of experience building enterprise solutions with .NET, C# and SQL Server.',
      focus: ['REST APIs', 'Microservices', 'Clean Architecture', 'Systems integration'],
      btnProjects: 'View projects',
      btnGitHub: 'GitHub'
    },
    about: {
      eyebrow: 'Profile',
      title: 'About me',
      paragraphs: [
        'I have over 10 years of experience in software development, working mainly with C#, .NET, REST APIs, microservices and databases.',
        'My experience includes enterprise and banking environments, where I worked on backend services, integrations, business logic and solutions focused on high availability and maintainability.',
        'I am especially interested in solving complex problems through good engineering practices, applying SOLID principles, Clean Architecture, Domain-Driven Design and design patterns.'
      ],
      stats: [
        { value: '10+', label: 'Years of experience' },
        { value: '.NET', label: 'Backend specialization' },
        { value: 'CA', label: 'Clean Architecture' },
        { value: 'DDD', label: 'Domain-Driven Design' },
        { value: 'SOLID', label: 'SOLID principles' },
        { value: 'API', label: 'API development' }
      ]
    },
    experience: {
      eyebrow: 'Career',
      title: 'Experience',
      items: [
        {
          role: 'Full Stack Developer',
          org: 'Freelance Software Developer',
          period: 'March 2014 – Present',
          bullets: [
            'Backend development using C# / .NET, Java, Python and Node.js.',
            'Frontend development using Vue.js and React.js.',
            'Database development and data management using SQL Server and MongoDB.',
            'Designed and implemented REST APIs, business logic, integrations and backend services.',
            'Worked independently throughout the software development lifecycle, from requirements analysis and solution design to implementation and delivery.',
            'Adapted technology and architecture to the specific requirements of each project.'
          ],
          description: 'Freelance software development for different clients and projects, working on backend, web applications, APIs and database solutions.',
          tags: [
            'C#',
            '.NET',
            'Java',
            'Python',
            'Microservices',
            'Node.js',
            'REST API',
            'MongoDB',
            'SQL Server',
            'Vue.js',
            'React.js'
          ]
        },
        {
          role: 'Senior Backend Developer .NET · Java · Functional Analyst',
          org: 'ICBC Bank Argentina',
          period: 'Feb 2024 – May 2026',
          bullets: [
            'Development of REST APIs and backend services using C# .NET and Java',
            'Implementation of business logic and system integrations.',
            'Development of microservices and distributed components.',
            'Work with SQL Server databases and NoSQL solutions.',
            'Application of SOLID, DDD and Clean Architecture principles.',
            'Technical analysis, incident resolution and evolution of existing services.'
          ],
          description: 'Backend development for banking environments, working on APIs, services, integrations and components supporting critical business processes.',
          tags: [
            'C#',
            '.NET 8/9',
            'Java',
            'Python',
            'REST APIs',
            'Microservices',
            'SQL Server',
            'Kafka',
            'Docker',
            'Git',
            'Azure Data Factory',
            'IA: Claude'
          ]
        },
        {
          role: 'Systems Teacher',
          org: 'Instituto Hilet',
          period: 'Mar 2023 – Dec 2023',
          bullets: [
            'Taught Algorithms II, Algorithms III and Databases.',
            'Technical training in programming and SQL.'
          ],
          description: 'Taught programming and database courses, with technical training in Algorithms and SQL.',
          tags: ['C#', '.NET', 'Algorithms', 'SQL', 'Databases']
        },
        {
          role: 'Semi - Senior Backend .NET Developer',
          org: 'Visma Latam',
          period: 'Mar 2020 – Sep 2022',
          bullets: [
            'Development and maintenance of REST APIs and backend services.',
            'Implementation of business logic and features for enterprise applications.',
            'Work with service-oriented architectures and Clean Architecture principles.',
            'Design and optimization of database queries and operations.',
            'Integration between different services and systems.',
            'Participation in technical analysis, problem solving and application evolution.'
          ],
          description: 'Backend development of enterprise solutions within a SaaS environment, mainly working with .NET, APIs and business-oriented services.',
          tags: ['.NET', 'C#', 'SQL Server', 'REST APIs', 'Microservices', 'Git', 'Scrum']
        }
      ]
    },
        skills: {
      eyebrow: 'Technologies',
      title: 'Technical Skills',
      groups: [
        {
          category: 'Core',
          title: 'Backend',
          icon: 'devicon:csharp',
          items: [
            { name: 'C#', icon: 'devicon:csharp' },
            { name: '.NET', icon: 'devicon:dotnetcore' },
            { name: 'ASP.NET Core', icon: 'devicon:dotnetcore' },
            { name: 'Java', icon: 'devicon:java' },
            { name: 'Python', icon: 'devicon:python' },
            { name: 'Node.js', icon: 'devicon:nodejs' },
            { name: 'REST APIs', icon: 'mdi:api' }
          ]
        },
        {
          category: 'Engineering',
          title: 'Architecture',
          icon: 'mdi:hexagon-outline',
          items: [
            { name: 'Clean Architecture', icon: 'mdi:layers-outline' },
            { name: 'DDD', icon: 'mdi:sitemap-outline' },
            { name: 'SOLID', icon: 'mdi:code-braces' },
            { name: 'Microservices', icon: 'mdi:source-branch' }
          ]
        },
        {
          category: 'Persistence',
          title: 'Data',
          icon: 'mdi:database-outline',
          items: [
            { name: 'SQL Server', icon: 'devicon:microsoftsqlserver' },
            { name: 'MongoDB', icon: 'devicon:mongodb' },
            { name: 'Redis', icon: 'devicon:redis' },
            { name: 'Dapper', icon: 'mdi:database-search-outline' },
            { name: 'Azure Data Factory', icon: 'simple-icons:microsoftazure' }
          ]
        },
        {
          category: 'Distributed Systems',
          title: 'Messaging',
          icon: 'mdi:message-processing-outline',
          items: [
            { name: 'Kafka', icon: 'simple-icons:apachekafka' },
            { name: 'Event-driven Architecture', icon: 'mdi:transit-connection-variant' }
          ]
        },
        {
          category: 'Infrastructure',
          title: 'DevOps',
          icon: 'mdi:docker',
          items: [
            { name: 'Docker', icon: 'devicon:docker' },
            { name: 'Git', icon: 'devicon:git' },
            { name: 'GitLab', icon: 'devicon:gitlab' },
            { name: 'CI/CD', icon: 'mdi:infinity' }
          ]
        },
        {
          category: 'Web',
          title: 'Frontend',
          icon: 'devicon:vuejs',
          items: [
            { name: 'Vue 3', icon: 'devicon:vuejs' },
            { name: 'React.js', icon: 'devicon:react' },
            { name: 'TypeScript', icon: 'devicon:typescript' },
            { name: 'Vite', icon: 'devicon:vitejs' },
            { name: 'Pinia', icon: 'simple-icons:pinia' }
          ]
        },
        {
          category: 'AI & Development Tools',
          title: 'AI-Assisted Development',
          icon: 'simple-icons:claude',
          items: [
            { name: 'Claude', icon: 'simple-icons:claude' },
            { name: 'AI Agents', icon: 'lucide:bot' },
            { name: 'Skills', icon: 'lucide:workflow' },
            { name: 'Project Memory', icon: 'lucide:brain' }
          ]
        }
      ]
    },
    education: {
      eyebrow: 'Academic',
      title: 'Academic education',
      items: [
        {
          title: 'Bachelor\'s in Business Administration (Licenciatura en Administración)',
          org: 'Universidad Nacional de Quilmes',
          period: '2022',
          detail: '4th year completed · GPA: 9'
        },
        { title: 'Systems Analyst', org: 'ISFDyT No. 32', period: '2003', detail: 'GPA: 8' },
        {
          title: 'Business Administration Analyst (Accounting specialization)',
          org: 'ISFDyT No. 32',
          period: '2002',
          detail: 'GPA: 8.75'
        }
      ]
    },
    contact: {
      eyebrow: 'Let\'s talk',
      title: 'Contact',
      text: 'If you have a project, an opportunity or want to talk about backend and architecture, get in touch.',
      links: [
        {
          label: 'Email',
          value: 'juanmarcelomolina2@gmail.com',
          href: 'mailto:juanmarcelomolina2@gmail.com',
          icon: 'mail'
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/juan-marcelo-molina',
          href: 'https://www.linkedin.com/in/juan-marcelo-molina',
          icon: 'siLinkedin'
        },
        { label: 'WhatsApp', value: '+54 9 223 571-3120', href: 'https://wa.me/5492235713120', icon: 'siWhatsapp' }
      ],
      languages: {
        title: 'Languages',
        items: ['Spanish: native', 'English: intermediate (technical and professional)']
      },
      availability: 'Available for new opportunities',
      github: { label: 'GitHub', value: 'Repositories and projects' },
      openForm: 'Send me a message',
      closeForm: 'Close form',
      form: {
        title: 'Send me a message',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        cancel: 'Cancel',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        errorRequired: 'Please complete all fields.',
        errorSend: 'An error occurred while sending the message.'
      }
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Featured projects',
      github: 'View on GitHub',
      noRepo: 'Private repository',
      items: [
        {
          id: 'corporateexpenses',
          title: 'Corporate Expenses',
          description: 'Backend application focused on expense management, implemented with .NET, Domain-Driven Design, Clean Architecture and MongoDB.',
          status: 'Available',
          soon: false,
          tags: ['.NET 8', 'C#', 'DDD', 'Clean Architecture', 'MongoDB', 'Docker'],
          github: 'https://github.com/marcelo-moles/corporate-expenses-code-sample/tree/main'
        },
        {
          id: 'ecommerceapi',
          title: 'E-Commerce API',
          description: 'Backend API for an e-commerce solution using .NET, MongoDB and RESTful API principles.',
          status: 'Available',
          soon: false,
          tags: ['C#', '.NET 8', 'REST API', 'DDD', 'Clean Architecture', 'MongoDB', 'Docker', 'AI'],
          github: 'https://github.com/marcelo-moles/ecommerce-api'
        },
        {
          id: 'apiprocesaarchivos',
          title: 'Api Procesa Archivos',
          description: 'API designed for processing large text files, focusing on performance, reliability and efficient backend processing.',
          status: 'Coming soon',
          soon: true,
          tags: ['C#', '.NET', 'REST API', 'SQL Server'],
          github: null
        },
        {
          id: 'ai',
          title: 'AI Data Analysis Platform',
          description: 'AI-powered solution built with Python and .NET for analyzing large data files, detecting inconsistencies and potential anomalies, and persisting analysis results in SQL Server.',
          status: 'Available',
          soon: false,
          tags: [
            'Python',
            '.NET',
            'C#',
            'SQL Server',
            'Artificial Intelligence',
            'Data Analysis',
            'Large File Processing',
            'AI'
          ],
          github: 'https://github.com/marcelo-moles/AIDataAnalysisPlatform'
        }
      ]
    },
    architecture: {
      eyebrow: 'Engineering',
      title: 'Architecture',
      description: 'I design backend solutions focused on separation of concerns, maintainability, scalability and long-term evolution.',
      layers: {
        clients: {
          label: 'Presentation',
          title: 'Clients & External Systems',
          description: 'Web applications, mobile applications and external consumers'
        },
        api: {
          label: 'Interface',
          title: 'API & Services',
          description: 'REST APIs, authentication, validation and service endpoints'
        },
        application: {
          label: 'Application',
          title: 'Application Layer',
          description: 'Use cases, application services, DTOs and orchestration'
        },
        domain: {
          label: 'Core',
          title: 'Domain Layer',
          description: 'Business rules, entities, value objects and domain logic'
        },
        infrastructure: {
          label: 'Infrastructure',
          title: 'Infrastructure',
          description: 'SQL Server, MongoDB, Redis, Kafka, Docker and external integrations'
        }
      },
      principles: {
        clean: {
          title: 'Clean Architecture',
          description: 'Clear separation of responsibilities with dependencies directed toward the domain.'
        },
        ddd: {
          title: 'Domain-Driven Design',
          description: 'Software modeling centered around the domain and its business rules.'
        },
        solid: {
          title: 'SOLID Principles',
          description: 'Five principles for object-oriented design that promote maintainability and flexibility.'
        },
        microservices: {
          title: 'Microservices',
          description: 'Independent services with well-defined responsibilities and room for evolution.'
        },
        events: { title: 'Event-Driven', description: 'Decoupled communication through events and messaging systems.' }
      }
    },
    architectureFlow: {
      eyebrow: 'Architecture',
      title: 'How a request travels',
      caption: 'A typical flow in a distributed system: from the API down to storage, with events between services.',
      nodes: ['Client', 'REST APIs', '.NET Microservices', 'SQL Server', 'Kafka'],
      notes: [
        'HTTP request',
        'Validation & contracts',
        'Business rules',
        'Transactional storage',
        'Async events'
      ],
      tags: ['Clean Architecture', 'DDD', 'SOLID', 'REST', 'Microservices']
    },
    layers: {
      title: 'Layered architecture',
      items: [
        {
          label: 'Presentation',
          title: 'Clients & external systems',
          description: 'Web applications, mobile applications and external consumers'
        },
        {
          label: 'Interface',
          title: 'API & services',
          description: 'REST APIs, authentication, validation and service endpoints'
        },
        {
          label: 'Application',
          title: 'Application layer',
          description: 'Use cases, application services, DTOs and orchestration'
        },
        {
          label: 'Core',
          title: 'Domain layer',
          description: 'Business rules, entities, value objects and domain logic'
        },
        {
          label: 'Infrastructure',
          title: 'Infrastructure',
          description: 'SQL Server, MongoDB, Redis, Kafka, Docker and external integrations'
        }
      ]
    },
    focus: [
      {
        icon: 'code',
        title: 'Backend Engineering',
        body: 'Development of APIs, services and backend systems using C#, .NET and ASP.NET Core.'
      },
      {
        icon: 'layers',
        title: 'Software Architecture',
        body: 'Solution design applying Clean Architecture, DDD, SOLID and design principles focused on maintainability.'
      },
      {
        icon: 'database',
        title: 'Data & Integration',
        body: 'Work with SQL Server, MongoDB, messaging, integrations and data processing.'
      }
    ],
    footer: 'Built with Vue 3 and Vite.',
    intro: {
      title: '· Click on the ROBOT ·',
      lines: [
        'booting system...',
        'loading profile: Marcelo Molina',
        'stack: .NET · C# · Java · Python ··· REST APIs · Microservices',
        'Status ok... Welcome.'
      ],
      enter: 'Starting portfolios...'
    }
  }
}
