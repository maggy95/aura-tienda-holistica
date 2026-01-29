
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
    {
        id: 'blog_1',
        slug: 'biomagnetismo-medico-equilibrio-imanes',
        title: 'Biomagnetismo Médico: El equilibrio biofísico a través de los imanes',
        subtitle: 'Cómo la regulación del pH celular restaura el Nivel de Energía Normal (NEN).',
        excerpt: 'Descubre la profundidad técnica de la terapia que utiliza el magnetismo para restaurar la homeostasis biológica y combatir patógenos desde su raíz vibracional.',
        category: 'Salud Física',
        contentType: 'Terapia',
        author: 'Paola Morote',
        date: '15 de Mayo, 2024',
        image: 'https://images.unsplash.com/photo-1631243349375-06d967e89139?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [7, 2],
        content: [
            { type: 'paragraph', text: 'El **Biomagnetismo Médico** no es simplemente una técnica alternativa; es una disciplina basada en la biofísica que entiende al cuerpo humano como un sistema electromagnético complejo. Descubierto por el **Dr. Isaac Goiz Durán en 1988**, este método ha revolucionado la forma en que comprendemos la salud al enfocarse en el terreno biológico: el pH.' },
            { type: 'heading', text: 'El Fundamento: El Terreno Biológico y el pH' },
            { type: 'paragraph', text: 'Nuestras células dependen de un equilibrio ácido-base extremadamente delicado. Un cuerpo sano mantiene un pH cercano a la neutralidad (7.3). Sin embargo, factores como el estrés, la mala alimentación o la carga tóxica ambiental pueden desplazar este pH hacia la acidez o la alcalinidad. Es en estos desequilibrios donde los virus, bacterias, hongos y parásitos encuentran el "caldo de cultivo" perfecto para proliferar.' },
            { type: 'heading', text: '¿Qué dice la ciencia energética?' },
            { type: 'paragraph', text: 'Desde la perspectiva de la bio-frecuencia, cada órgano tiene una firma vibratoria específica. Cuando un imán de neodimio de alta potencia (superior a 1,000 Gauss) se aplica sobre el cuerpo, interactúa con el hierro en la sangre y la polaridad de las membranas celulares. Esta interacción no es invasiva, pero sí profunda, forzando un intercambio iónico que empuja al tejido de vuelta a su **Nivel de Energía Normal (NEN)**.' },
            { type: 'box', title: 'Beneficios Físicos y Energéticos', items: [
                'Neutralización biológica de patógenos (eliminación de virus y bacterias por cambio de pH).',
                'Desinflamación de órganos y articulaciones mediante la mejora de la microcirculación.',
                'Equilibrio del sistema endocrino, regulando la producción hormonal.',
                'Limpieza de la carga electromagnética residual acumulada por el uso de tecnología.',
                'Aceleración de los procesos de reparación tisular tras cirugías o lesiones.'
            ]},
            { type: 'quote', text: 'La salud no es la ausencia de enfermedad, sino el equilibrio perfecto de nuestras cargas eléctricas internas.' },
            { type: 'warning', text: 'Soberanía Sanitaria: Esta terapia es complementaria y no reemplaza el diagnóstico ni el tratamiento médico convencional.' }
        ]
    },
    {
        id: 'blog_2',
        slug: 'velas-soja-vs-parafina-aire-toxico',
        title: 'Velas de Soja vs Parafina: La Ciencia de un Hogar Saludable',
        subtitle: 'Por qué tu vela de supermercado podría estar contaminando tu sistema respiratorio.',
        excerpt: 'Analizamos la diferencia química entre la cera vegetal y los derivados del petróleo. Aprende a elegir una iluminación que cuide tu aura y tus pulmones.',
        category: 'Bienestar',
        contentType: 'Guía',
        author: 'Paola Morote',
        date: '22 de Mayo, 2024',
        image: 'https://images.unsplash.com/photo-1602166946663-1490212df595?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [1, 8],
        content: [
            { type: 'paragraph', text: 'La mayoría de las personas no saben que las velas convencionales de parafina son, esencialmente, un subproducto del petróleo. Al encenderlas, liberan compuestos como benceno y tolueno, conocidos carcinógenos que afectan la calidad del aire interior.' },
            { type: 'heading', text: 'La Revolución de la Cera de Soja' },
            { type: 'paragraph', text: 'La cera de soja es 100% natural, biodegradable y renovable. A diferencia de la parafina, tiene un punto de fusión más bajo, lo que significa que la vela dura hasta un 50% más y distribuye el aroma de aceites esenciales de forma mucho más pura y efectiva.' },
            { type: 'box', title: 'Ventajas de las Velas Aura', items: [
                'Combustión limpia sin hollín negro (carbono).',
                'Biodegradabilidad absoluta: se limpia con agua y jabón.',
                'Mecha de madera FSC que genera un sonido crepitante terapéutico.',
                'Infusión de cristales reales que mantienen su frecuencia tras el quemado.'
            ]},
            { type: 'quote', text: 'Encender una vela de soja es un acto de respeto hacia tu cuerpo y hacia el planeta.' }
        ]
    },
    {
        id: 'blog_3',
        slug: 'banos-sales-hidroterapia-transmutacion',
        title: 'Baños de Sales: Hidroterapia y Transmutación Energética',
        subtitle: 'El ritual milenario para descargar la densidad acumulada en tu cuerpo astral.',
        excerpt: 'El agua y la sal forman un electrolito potente capaz de extraer impurezas físicas y energéticas. Te enseñamos la fórmula exacta para un baño de sanación.',
        category: 'Rituales',
        contentType: 'Guía',
        author: 'Paola Morote',
        date: '28 de Mayo, 2024',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [7, 3],
        content: [
            { type: 'paragraph', text: 'El agua es el mejor conductor de energía que existe. Cuando añadimos sales puras (como las del Himalaya o Epsom), creamos una solución salina que interactúa con nuestra piel mediante ósmosis, permitiendo que el cuerpo absorba magnesio y libere toxinas.' },
            { type: 'heading', text: 'El Proceso de Limpieza Astral' },
            { type: 'paragraph', text: 'Durante el día, interactuamos con personas y entornos que dejan "residuos" en nuestra aura. Un baño de sales de 20 minutos no solo relaja los músculos, sino que neutraliza la carga estática negativa que nos hace sentir cansados o irritables.' },
            { type: 'box', title: 'Tu Receta de Sanación', items: [
                '2 tazas de Sal del Himalaya (para desintoxicar).',
                '1 taza de Sal de Epsom (para el sistema nervioso).',
                '5 gotas de aceite esencial de Lavanda o Incienso.',
                'Un cristal de Cuarzo Cristal para amplificar la intención.'
            ]}
        ]
    },
    {
        id: 'blog_4',
        slug: 'rocios-auricos-escudo-energetico-portatil',
        title: 'Rocíos Áuricos: La ciencia de la bio-resonancia en tu bolsillo',
        subtitle: 'Cómo proteger y elevar tu campo electromagnético personal mediante la aromaterapia vibracional.',
        excerpt: 'Tu aura es una extensión de tu sistema biológico. Aprende a sellarla y fortalecerla usando la química de las plantas y la frecuencia de los cristales.',
        category: 'Protección',
        contentType: 'Guía',
        author: 'Paola Morote',
        date: '20 de Junio, 2024',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [6, 3],
        content: [
            { type: 'paragraph', text: 'En la era de la hiperconectividad, estamos sumergidos en un mar de frecuencias: desde el Wi-Fi hasta las emociones ajenas. Nuestro campo áurico puede debilitarse, volviéndose poroso y permitiendo que energías externas afecten nuestro estado de ánimo.' },
            { type: 'heading', text: 'El Sistema Límbico y la Vibración Molecular' },
            { type: 'paragraph', text: 'Los rocíos áuricos de Aura combinan aceites esenciales de grado terapéutico e elixires de gemas. Al aplicarlos, las moléculas interactúan con tu sistema límbico en segundos, mientras la frecuencia del cristal resuena con tu campo bioeléctrico.' }
        ]
    },
    {
        id: 'blog_5',
        slug: 'tapping-eft-hackear-respuesta-estres',
        title: 'Tapping EFT: El Manual para Hackear tu Respuesta al Estrés',
        subtitle: 'Cómo los puntos de acupresión pueden desactivar la amígdala cerebral en minutos.',
        excerpt: 'La Técnica de Liberación Emocional es una herramienta de psicología energética que permite procesar miedos y traumas de forma somática.',
        category: 'Energía',
        contentType: 'Terapia',
        author: 'Paola Morote',
        date: '02 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [1, 6],
        content: [
            { type: 'paragraph', text: 'El EFT (Emotional Freedom Techniques) postula que la causa de todas las emociones negativas es una interrupción en el sistema energético del cuerpo. Al dar toques suaves en puntos específicos de los meridianos mientras nos enfocamos en el problema, estamos enviando una señal de calma al cerebro.' },
            { type: 'heading', text: 'La Ciencia detrás del "Tapping"' },
            { type: 'paragraph', text: 'Estudios de Harvard muestran que estimular estos puntos reduce drásticamente los niveles de cortisol (la hormona del estrés). Es como decirle a tu sistema nervioso: "Aunque este problema existe, estamos seguros ahora".' }
        ]
    },
    {
        id: 'blog_6',
        slug: 'codigo-emocion-muro-corazon',
        title: 'El Código de la Emoción: Liberando el Muro del Corazón',
        subtitle: 'Identifica y libera las emociones atrapadas que generan bloqueos físicos y relacionales.',
        excerpt: 'Aprende cómo el subconsciente almacena traumas no procesados en forma de energía estancada y cómo liberarlos usando kinesiología y magnetismo.',
        category: 'Energía',
        contentType: 'Terapia',
        author: 'Paola Morote',
        date: '08 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1518112166137-1901c8389607?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [4, 2],
        content: [
            { type: 'paragraph', text: 'Muchas veces sentimos que repetimos patrones o tenemos dolores crónicos sin causa física. El Dr. Bradley Nelson descubrió que estas son "emociones atrapadas": esferas de energía del tamaño de un puño que se alojan en tejidos u órganos.' },
            { type: 'heading', text: '¿Qué es el Muro del Corazón?' },
            { type: 'paragraph', text: 'Para protegernos de un dolor inmenso, el subconsciente crea una barrera energética alrededor del corazón usando emociones atrapadas. Aunque nos protege al principio, a largo plazo nos impide conectar profundamente con los demás y con la abundancia.' }
        ]
    },
    {
        id: 'blog_7',
        slug: 'mesa-cuantica-transmutacion-bloqueos-21-dias',
        title: 'Mesa Cuántica: Geometría Sagrada y Neuroplasticidad Espiritual',
        subtitle: 'Entiende el proceso de transmutación vibracional y el ciclo de manifestación de 21 días.',
        excerpt: 'Explora cómo la radiónica y la intención enfocada pueden reconfigurar tu realidad energética, eliminando bloqueos que impiden tu evolución.',
        category: 'Energía',
        contentType: 'Terapia',
        author: 'Paola Morote',
        date: '10 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [2, 5],
        content: [
            { type: 'paragraph', text: 'La **Mesa Cuántica** es un potente instrumento de sanación basado en los principios de la radiestesia y la radiónica. Funciona como una "computadora espiritual" que nos permite acceder a niveles del subconsciente para detectar desequilibrios invisibles.' },
            { type: 'heading', text: '¿Por qué un ciclo de 21 días?' },
            { type: 'paragraph', text: 'Tras una sesión, el cuerpo necesita aproximadamente 21 días para consolidar una nueva vía neuronal o un cambio en la memoria celular. Durante estas tres semanas, la energía densa se va disolviendo y la nueva información de paz comienza a manifestarse.' }
        ]
    },
    {
        id: 'blog_8',
        slug: 'arte-sahumar-humo-sagrado-intencion',
        title: 'El Arte de Sahumar: Humo Sagrado e Intención Consciente',
        subtitle: 'Guía para purificar tus espacios y elevar la frecuencia de tu hogar.',
        excerpt: 'Sahumar es mucho más que quemar hierbas. Es un diálogo con el espíritu de las plantas para limpiar el ambiente y bendecir nuestros propósitos.',
        category: 'Rituales',
        contentType: 'Guía',
        author: 'Paola Morote',
        date: '15 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [3, 8],
        content: [
            { type: 'paragraph', text: 'Desde tiempos inmemoriales, el humo se ha utilizado como un puente entre lo visible y lo invisible. Al sahumar, estamos usando el elemento aire para movilizar la energía estancada y el elemento fuego para transmutar lo negativo.' },
            { type: 'heading', text: 'Hierbas y sus Propósitos' },
            { type: 'list', items: [
                '**Salvia Blanca:** El purificador por excelencia. Barre con todo.',
                '**Palo Santo:** Sella el espacio con amor y protección.',
                '**Copal:** Abre portales a la divinidad y claridad mental.',
                '**Romero:** Despierta la memoria y la alegría del hogar.'
            ]}
        ]
    },
    {
        id: 'blog_9',
        slug: 'cristales-proteccion-escudo-moderno',
        title: 'Cristales de Protección: Tu Escudo Vibracional Moderno',
        subtitle: 'Aprende a usar Turmalina, Shungit y Obsidiana para blindar tu energía.',
        excerpt: 'En un mundo de saturación digital y emocional, los cristales son aliados estables que nos ayudan a mantener nuestro centro.',
        category: 'Protección',
        contentType: 'Guía',
        author: 'Paola Morote',
        date: '20 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1567605934-2e90c8861d8f?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [2, 4],
        content: [
            { type: 'paragraph', text: 'Los cristales tienen una estructura atómica perfectamente ordenada, a diferencia de los humanos. Esta estabilidad les permite emitir frecuencias constantes que influyen en nuestro campo bioeléctrico por arrastre.' },
            { type: 'heading', text: 'Los 3 Grandes Protectores' },
            { type: 'paragraph', text: 'La Turmalina Negra absorbe la radiación electromagnética. La Shungit es el único mineral natural que contiene fullerenos, potentes antioxidantes energéticos. La Obsidiana actúa como un espejo que nos muestra la sombra para poder sanarla.' }
        ]
    },
    {
        id: 'blog_10',
        slug: 'meditacion-silencio-tecnologia-poder',
        title: 'Meditación: El Silencio como Tecnología de Poder',
        subtitle: 'Cómo 10 minutos de quietud al día reconfiguran tu cerebro y tu destino.',
        excerpt: 'La meditación no es dejar la mente en blanco, es entrenar la atención para ser soberanos de nuestra realidad interna.',
        category: 'Bienestar',
        contentType: 'Artículo',
        author: 'Paola Morote',
        date: '25 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [1, 7],
        content: [
            { type: 'paragraph', text: 'Vivimos en la economía de la atención. Meditar es recuperar el recurso más valioso que tenemos. Al entrar en estados de ondas Alfa o Theta, permitimos que el cuerpo entre en modo de reparación profunda.' },
            { type: 'heading', text: 'Impacto en la Manifestación' },
            { type: 'paragraph', text: 'Una mente coherente genera una realidad coherente. La meditación alinea tus pensamientos con tus emociones, creando la firma vibratoria necesaria para atraer tus deseos más profundos.' }
        ]
    },
    {
        id: 'blog_11',
        slug: 'registros-akashicos-memoria-del-alma',
        title: 'Registros Akáshicos: Accediendo a la Memoria del Alma',
        subtitle: 'Descubre el archivo cósmico donde se guarda el viaje de tu ser a través del tiempo.',
        excerpt: 'Una lectura de registros te brinda claridad sobre tu propósito, contratos álmicos y las raíces de tus desafíos actuales.',
        category: 'Energía',
        contentType: 'Terapia',
        author: 'Paola Morote',
        date: '30 de Julio, 2024',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200',
        relatedProductIds: [5, 4],
        content: [
            { type: 'paragraph', text: 'El Akasha es una palabra sánscrita que significa "sustancia primordial". Es el campo cuántico donde queda registrada cada palabra, pensamiento y acción de cada alma. Acceder a ellos es como consultar la biblioteca de tu propia evolución.' },
            { type: 'heading', text: 'Sanación Akáshica' },
            { type: 'paragraph', text: 'No es solo obtener información; es recibir la energía de tus guías y maestros. El simple hecho de traer a la conciencia el origen de un bloqueo genera una liberación instantánea en el plano presente.' }
        ]
    }
];
