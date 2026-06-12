const whatif_single_es = [
    "¿Y si la gravedad se apagara exactamente durante 1 minuto todos los días?",
    "¿Y si los animales pudieran hablar, pero solo se quejaran del clima?",
    "¿Y si todos los océanos fueran reemplazados por jugo de naranja?",
    "¿Y si solo pudieras moverte saltando como un canguro?",
    "¿Y si cada mentira hiciera que tu nariz creciera literalmente como la de Pinocho?",
    "¿Y si las nubes estuvieran hechas de dulce algodón de azúcar?",
    "¿Y si la gente brillara en la oscuridad cuando está feliz?",
    "¿Y si el dinero realmente creciera en los árboles del patio trasero?",
    "¿Y si los humanos no necesitaran dormir en absoluto?",
    "¿Y si todos los insectos crecieran hasta el tamaño de perros medianos?",
    "¿Y si reír a carcajadas te hiciera flotar en el aire?",
    "¿Y si solo pudiéramos comer crayones de colores?",
    "¿Y si nuestro reflejo en el espejo tuviera su propia personalidad?",
    "¿Y si los juguetes cobraran vida solo cuando todos en la casa estuvieran dormidos?",
    "¿Y si los dinosaurios nunca se hubieran extinguido y vivieran entre nosotros como mascotas?",
    "¿Y si los árboles pudieran caminar a un nuevo lugar cuando se aburrieran?",
    "¿Y si las sombras pudieran gastar bromas y moverse independientemente de nosotros?",
    "¿Y si el chocolate fuera el alimento más saludable de la Tierra?",
    "¿Y si pudiéramos registrar y reproducir nuestros sueños como películas?",
    "¿Y si las mascotas se convirtieran en los jefes y los humanos tuvieran que obedecerlas?",
    "¿Y si cada escalera se convirtiera en un tobogán después del atardecer?",
    "¿Y si las ventanas del aula mostraran el clima de mañana?",
    "¿Y si tu mochila solo aceptara cosas que coincidieran con el estado de ánimo de hoy?",
    "¿Y si los semáforos cambiaran según el sonido más fuerte cercano?",
    "¿Y si los libros de la biblioteca olvidaran su final antes de la mañana?",
    "¿Y si cada árbol dejara caer una herramienta útil en lugar de hojas?",
    "¿Y si los zapatos hicieran un ritmo diferente para cada emoción?",
    "¿Y si las puertas recordaran la última canción que escucharon?",
    "¿Y si el océano siguiera el horario escolar en lugar de la luna?",
    "¿Y si las postales llegaran antes de ser escritas?",
    "¿Y si una cucharada de lluvia pudiera encender una lámpara pequeña durante una hora?",
    "¿Y si tu sombra siempre apuntara al objeto oculto más cercano?",
    "¿Y si cada canción que tarareas atrajera un insecto diferente?",
    "¿Y si los estantes del supermercado se reorganizaran según la dificultad del rompecabezas?",
    "¿Y si los espejos mostraran a la persona a la que más recientemente ayudaste?",
    "¿Y si los lápices se alargaran cada vez que resolvieras un problema?",
    "¿Y si las nubes pudieran guardarse en frascos y abrirse más tarde?",
    "¿Y si los autobuses eligieran solos la ruta más corta?",
    "¿Y si cada receta cambiara según quién estuviera cocinando?",
    "¿Y si las campanas de la escuela solo sonaran para los alumnos que terminaran su trabajo?",
    "¿Y si cada ciudad tuviera un río subterráneo oculto de música?",
    "¿Y si la primera nieve borrara al instante cada huella?",
    "¿Y si los teclados escribieran la siguiente palabra que estuvieras a punto de pensar?",
    "¿Y si las plantas de interior pudieran explicar sus necesidades en una sola frase?",
    "¿Y si los cumpleaños ocurrieran cuando cambiara tu color favorito?",
    "¿Y si los mapas se actualizaran cada vez que alguien moviera una silla?",
    "¿Y si los libros de un estante intercambiaran lugares cuando nadie mirara?",
    "¿Y si el viento llevara notitas pequeñas en lugar de hojas?",
    "¿Y si cada globo contara la verdad sobre dónde había estado?",
    "¿Y si un golpe en la pared revelara si alguien estaba detrás de ella?"
];

const whatif_chain_es = [
    {
        start: "¿Y si la gravedad se apagara exactamente durante 1 minuto todos los días?",
        steps: ["Las personas y los objetos flotan en el aire.", "Todos se golpean la cabeza contra el techo.", "Los cascos se convierten en moda obligatoria para interiores."],
        end: "Los cascos se convierten en moda obligatoria para interiores."
    },
    {
        start: "¿Y si los animales pudieran hablar, pero solo se quejaran del clima?",
        steps: ["Los perros se niegan a pasear bajo la lluvia y protestan en voz alta.", "Las ventas de paraguas especiales para perros se disparan.", "El pronóstico del tiempo se hace preguntando a las palomas."],
        end: "El pronóstico del tiempo se hace preguntando a las palomas."
    },
    {
        start: "¿Y si todos los océanos fueran reemplazados por jugo de naranja?",
        steps: ["El océano se vuelve muy ácido y dulce.", "Los peces desarrollan mutaciones para sobrevivir al ácido cítrico.", "Los tiburones se vuelven adictos al azúcar y nadan más rápido."],
        end: "Los tiburones se vuelven adictos al azúcar y nadan más rápido."
    },
    {
        start: "¿Y si solo pudieras moverte saltando como un canguro?",
        steps: ["Caminar y correr se vuelven estrictamente imposibles.", "Los techos de todas las casas se construyen 3 veces más altos.", "Las aceras son reemplazadas por trampolines gigantes."],
        end: "Los trampolines reemplazan todas las aceras de la ciudad."
    },
    {
        start: "¿Y si cada mentira hiciera que tu nariz creciera literalmente como la de Pinocho?",
        steps: ["Los políticos tienen narices de 3 metros de largo.", "Las puertas de oficinas y casas deben ensancharse.", "Recortarse la nariz se convierte en una rutina diaria por la mañana."],
        end: "Recortarse la nariz se convierte en una rutina diaria por la mañana."
    },
    {
        start: "¿Y si las nubes estuvieran hechas de dulce algodón de azúcar?",
        steps: ["Llueve agua azucarada pegajosa.", "Todos los autos y calles se vuelven increíblemente pegajosos.", "Los lavados de autos son reemplazados por máquinas lamedoras."],
        end: "Los lavados de autos son reemplazados por máquinas lamedoras."
    },
    {
        start: "¿Y si los árboles pudieran caminar a un nuevo lugar cuando se aburrieran?",
        steps: ["Los bosques cambian constantemente de diseño de la noche a la mañana.", "Los mapas de GPS se vuelven inútiles y obsoletos en horas.", "La gente construye casas sobre ruedas para seguir a sus árboles favoritos."],
        end: "La gente construye casas sobre ruedas para seguir a sus árboles favoritos."
    },
    {
        start: "¿Y si pudiéramos registrar y reproducir nuestros sueños como películas?",
        steps: ["Los cines de sueños se vuelven más populares que las salas de cine normales.", "La gente vende sus mejores pesadillas como éxitos de terror.", "Se venden cascos bloqueadores de sueños para proteger la privacidad del sueño."],
        end: "Se venden cascos bloqueadores de sueños para proteger la privacidad del sueño."
    },
    {
        start: "¿Y si los dinosaurios nunca se hubieran extinguido y vivieran entre nosotros como mascotas?",
        steps: ["Los tiranosaurios reemplazan a los perros guardianes en los patios grandes.", "Las ciudades deben construir camiones gigantes para limpiar el popó de dinosaurio.", "Los minitriceratops se convierten en una raza popular para apartamentos."],
        end: "Los minitriceratops se convierten en una raza popular para apartamentos."
    },
    {
        start: "¿Y si las sombras pudieran moverse independientemente de nosotros?",
        steps: ["Las sombras se escapan de noche para ir de fiesta sin sus dueños.", "La gente se despierta con la sombra de otra persona pegada a ella.", "Se inventa la profesión de atrapasombras para devolver las sombras fugitivas."],
        end: "Se inventa una nueva profesión de atrapasombras."
    },
    {
        start: "¿Y si las bicicletas solo pudieran moverse sobre líneas pintadas?",
        steps: [
            "Las carreteras empezarían a parecer libros de colorear gigantes.",
            "Los ingenieros de tráfico trabajarían junto con artistas.",
            "Las ciudades repintarían las rutas cada noche para mantenerlas claras."
        ],
        end: "Los pintores de calles se volverían tan importantes como los constructores de carreteras."
    },
    {
        start: "¿Y si cada silla del aula solo pudiera usarse una vez al día?",
        steps: [
            "Las escuelas rotarían las sillas entre diferentes salas.",
            "Los estudiantes empezarían a llevar cojines personales.",
            "Las empresas de muebles diseñarían sistemas de intercambio más rápidos."
        ],
        end: "Compartir asientos se convertiría en una rutina escolar normal."
    },
    {
        start: "¿Y si las cafeterías solo sirvieran bebidas en vasos transparentes?",
        steps: [
            "Los clientes empezarían a notar capas, colores y errores.",
            "Los baristas competirían a través del diseño de las bebidas.",
            "Los menús se volverían más visuales y basados en el color."
        ],
        end: "La presentación de las bebidas se convertiría en parte del pedido."
    },
    {
        start: "¿Y si cada puerta solo se abriera después de una rima corta?",
        steps: [
            "La gente inventaría rimas de entrada para cada edificio.",
            "Las escuelas enseñarían etiqueta de rimas.",
            "Nadie olvidaría sus llaves, pero muchos olvidarían el verso."
        ],
        end: "La poesía se volvería útil en la vida diaria."
    },
    {
        start: "¿Y si cada estación de metro oliera a una fruta?",
        steps: [
            "Los viajeros recordarían las estaciones por el olor en lugar de los letreros.",
            "Los sistemas de transporte empezarían a usar el olor como herramienta de navegación.",
            "Los anunciantes intentarían marcar barrios enteros por el aroma."
        ],
        end: "Las ciudades empezarían a usar los olores como parte de la navegación."
    },
    {
        start: "¿Y si un calcetín perdido siempre se teletransportara al cesto de ropa sucia más cercano?",
        steps: [
            "La gente dejaría de buscar debajo de las camas.",
            "La ubicación del cesto de ropa se convertiría en una estrategia seria.",
            "Las habitaciones limpias se planificarían alrededor de zonas de cestos."
        ],
        end: "Los cestos de ropa se convertirían en el mueble más importante de la casa."
    },
    {
        start: "¿Y si las baterías del teléfono solo se cargaran mientras lo sostenías con ambas manos?",
        steps: [
            "La gente programaría pausas de carga como reuniones.",
            "Los soportes para teléfonos se volverían populares en todas partes.",
            "Las cafeterías crearían salas especiales de carga."
        ],
        end: "Cargar se convertiría en un hábito social en lugar de algo solitario."
    },
    {
        start: "¿Y si cada libro de la biblioteca susurrara un dato al abrirlo?",
        steps: [
            "Los lectores empezarían a buscar libros sorprendentes.",
            "Los bibliotecarios organizarían los estantes por nivel de curiosidad.",
            "Estudiar se sentiría más como explorar un laberinto."
        ],
        end: "Las bibliotecas se convertirían en laberintos vivos de datos."
    },
    {
        start: "¿Y si leer una receta en voz alta la cambiara ligeramente?",
        steps: [
            "Los cocineros empezarían a memorizar recetas en lugar de leerlas en voz alta.",
            "Las recetas de audio necesitarían pruebas cuidadosas.",
            "Las rutinas de cocina dependerían del tono, el ritmo y el silencio."
        ],
        end: "Cocinar se convertiría en una mezcla de lectura y actuación."
    },
    {
        start: "¿Y si la sombra de cada árbol apuntara a la fuente de agua más cercana?",
        steps: [
            "Los excursionistas empezarían a seguir las sombras de los árboles a propósito.",
            "Los parques plantarían árboles como señales de sendero.",
            "Las apps de mapas compararían sombras con datos de GPS."
        ],
        end: "Los árboles se convertirían en ayudantes naturales de navegación."
    },
    {
        start: "¿Y si cada vez que alguien mintiera, sus zapatos chirriaran?",
        steps: [
            "La honestidad se volvería algo que se puede escuchar.",
            "Los discursos públicos de repente se volverían mucho más silenciosos.",
            "Las empresas de zapatos empezarían a fabricar filtros anti-chirrido."
        ],
        end: "Verificar la verdad se convertiría en una industria del calzado."
    },
    {
        start: "¿Y si los botones del ascensor solo pudieran presionarse en pares?",
        steps: [
            "La gente tendría que coordinar sus elecciones de piso.",
            "El tráfico en los edificios sería más lento pero más planificado.",
            "Los amigos empezarían a tomar ascensores juntos a propósito."
        ],
        end: "Subir o bajar se convertiría en una actividad social."
    },
    {
        start: "¿Y si cada buzón entregara un objeto sorpresa extra?",
        steps: [
            "La gente revisaría el correo con más emoción.",
            "Los objetos inesperados crearían nuevos hábitos de clasificación.",
            "El seguro postal se volvería mucho más popular."
        ],
        end: "El correo se sentiría como una lotería diaria."
    },
    {
        start: "¿Y si un vaso de agua derramado se convirtiera en un mapa pequeño?",
        steps: [
            "Los accidentes empezarían a convertirse en pistas.",
            "Los niños y los detectives estudiarían los charcos con más cuidado.",
            "Los juegos de lectura de mapas usarían charcos de agua como rompecabezas."
        ],
        end: "Los desastres empezarían a llevar información."
    },
    {
        start: "¿Y si cada globo reventado liberara una frase hablada?",
        steps: [
            "Los niños guardarían globos para mensajes.",
            "Las fiestas se llenarían de anuncios accidentales.",
            "Los fabricantes de globos imprimirían advertencias y etiquetas de mensajes."
        ],
        end: "Los globos se convertirían en portadores secretos de notas."
    }
];

const whatif_deduction_es = [
    {
        start: "¿Y si el chocolate fuera el alimento más saludable de la Tierra?",
        end: "Los dentistas quiebran por completo."
    },
    {
        start: "¿Y si los humanos no necesitaran dormir en absoluto?",
        end: "El concepto de 'horario nocturno' es prohibido por los ayuntamientos."
    },
    {
        start: "¿Y si todos los insectos crecieran hasta el tamaño de perros medianos?",
        end: "Las mosquiteras se reemplazan por puertas de garaje de acero."
    },
    {
        start: "¿Y si reír a carcajadas te hiciera flotar en el aire?",
        end: "Los clubes de comedia se construyen con techos acolchados."
    },
    {
        start: "¿Y si las mascotas se convirtieran en los jefes de la casa?",
        end: "Los humanos se ven obligados a usar collares y dormir en alfombras."
    },
    {
        start: "¿Y si los juguetes cobraran vida solo cuando todos en la casa estuvieran dormidos?",
        end: "Los niños se quedan despiertos durante días tratando de atrapar a sus ositos de peluche."
    },
    {
        start: "¿Y si nuestro reflejo en el espejo tuviera su propia personalidad?",
        end: "La gente compra un segundo espejo para discutir con su propio reflejo."
    },
    {
        start: "¿Y si la lluvia cayera en colores aleatorios en lugar de agua?",
        end: "La ropa blanca queda prohibida por ley para evitar manchas de arcoíris."
    },
    {
        start: "¿Y si las plantas gritaran cuando las cortaras?",
        end: "Las cortadoras de césped son reemplazadas por tijeras delicadas para podar plantas."
    },
    {
        start: "¿Y si los libros se leyeran en voz alta solos cuando se abren?",
        end: "Las bibliotecas se convierten en los lugares más ruidosos y caóticos de la Tierra."
    }
];
