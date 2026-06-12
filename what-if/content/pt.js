const whatif_single_pt = [
    "E se a gravidade desligasse exatamente por 1 minuto todos os dias?",
    "E se os animais pudessem falar, mas só reclamassem do tempo?",
    "E se todos os oceanos fossem substituídos por suco de laranja?",
    "E se você só pudesse se mover pulando como um canguru?",
    "E se cada mentira fizesse seu nariz crescer de verdade como o do Pinóquio?",
    "E se as nuvens fossem feitas de algodão-doce doce?",
    "E se as pessoas brilhassem no escuro quando estivessem felizes?",
    "E se o dinheiro realmente crescesse nas árvores do quintal?",
    "E se os humanos não precisassem dormir de jeito nenhum?",
    "E se todos os insetos crescessem até o tamanho de cães médios?",
    "E se rir alto fizesse você flutuar no ar?",
    "E se só pudéssemos comer giz de cera colorido?",
    "E se nosso reflexo no espelho tivesse sua própria personalidade?",
    "E se os brinquedos ganhassem vida só quando todos em casa estivessem dormindo?",
    "E se os dinossauros nunca tivessem se extinguido e vivessem entre nós como animais de estimação?",
    "E se as árvores pudessem caminhar para um novo lugar quando ficassem entediadas?",
    "E se as sombras pudessem pregar peças e se mover independentemente de nós?",
    "E se o chocolate fosse o alimento mais saudável da Terra?",
    "E se pudéssemos gravar e reproduzir nossos sonhos como filmes?",
    "E se os animais de estimação se tornassem os chefes e os humanos tivessem que obedecê-los?",
    "E se cada escada virasse um escorregador depois do pôr do sol?",
    "E se as janelas da sala de aula mostrassem o tempo de amanhã?",
    "E se sua mochila só aceitasse itens que combinassem com o humor de hoje?",
    "E se os semáforos mudassem com base no som mais alto por perto?",
    "E se os livros da biblioteca esquecessem o final até de manhã?",
    "E se cada árvore deixasse cair uma ferramenta útil em vez de folhas?",
    "E se os sapatos fizessem um ritmo diferente para cada emoção?",
    "E se as portas lembrassem da última música que ouviram?",
    "E se o oceano seguisse o horário escolar em vez da lua?",
    "E se os cartões postais chegassem antes de serem escritos?",
    "E se uma colher de chuva pudesse acender uma lâmpada pequena por uma hora?",
    "E se sua sombra sempre apontasse para o objeto escondido mais próximo?",
    "E se cada música que você cantarolasse atraísse um inseto diferente?",
    "E se as prateleiras do supermercado se reorganizassem pela dificuldade do quebra-cabeça?",
    "E se os espelhos mostrassem a pessoa que você ajudou mais recentemente?",
    "E se os lápis ficasse mais longos cada vez que você resolvesse um problema?",
    "E se as nuvens pudessem ser guardadas em potes e abertas depois?",
    "E se os ônibus escolhessem sozinhos a rota mais curta?",
    "E se cada receita mudasse dependendo de quem estivesse cozinhando?",
    "E se os sinos da escola só tocasse para alunos que terminaram o trabalho?",
    "E se cada cidade tivesse um rio subterrâneo escondido de música?",
    "E se a primeira neve apagasse instantaneamente cada pegada?",
    "E se os teclados digitassem a próxima palavra que você estivesse prestes a pensar?",
    "E se as plantas de casa pudessem explicar suas necessidades em uma frase?",
    "E se os aniversários acontecessem quando sua cor favorita mudasse?",
    "E se os mapas se atualizassem sempre que alguém movesse uma cadeira?",
    "E se os livros na estante trocassem de lugar quando ninguém estivesse olhando?",
    "E se o vento carregasse bilhetinhos em vez de folhas?",
    "E se cada balão contasse a verdade sobre onde esteve?",
    "E se uma batida na parede revelasse se alguém estava atrás dela?"
];

const whatif_chain_pt = [
    {
        start: "E se a gravidade desligasse exatamente por 1 minuto todos os dias?",
        steps: ["Pessoas e objetos flutuam no ar.", "Todo mundo bate a cabeça no teto.", "Capacetes se tornam moda obrigatória em ambientes fechados."],
        end: "Capacetes se tornam moda obrigatória em ambientes fechados."
    },
    {
        start: "E se os animais pudessem falar, mas só reclamassem do tempo?",
        steps: ["Cães se recusam a passear na chuva e protestam alto.", "As vendas de guarda-chuvas especiais para cães disparam.", "A previsão do tempo é feita perguntando aos pombos."],
        end: "A previsão do tempo é feita perguntando aos pombos."
    },
    {
        start: "E se todos os oceanos fossem substituídos por suco de laranja?",
        steps: ["O oceano fica muito ácido e doce.", "Os peixes desenvolvem mutações para sobreviver ao ácido cítrico.", "Os tubarões ficam viciados em açúcar e nadam mais rápido."],
        end: "Os tubarões ficam viciados em açúcar e nadam mais rápido."
    },
    {
        start: "E se você só pudesse se mover pulando como um canguru?",
        steps: ["Caminhar e correr se tornam estritamente impossíveis.", "Os tetos de todas as casas são construídos 3 vezes mais altos.", "As calçadas são substituídas por trampolins gigantes."],
        end: "Trampolins substituem todas as calçadas da cidade."
    },
    {
        start: "E se cada mentira fizesse seu nariz crescer de verdade como o do Pinóquio?",
        steps: ["Políticos têm narizes de 3 metros de comprimento.", "Portas de escritórios e casas precisam ser alargadas.", "Aparar o nariz se torna uma rotina matinal diária."],
        end: "Aparar o nariz se torna uma rotina matinal diária."
    },
    {
        start: "E se as nuvens fossem feitas de algodão-doce doce?",
        steps: ["Chove água açucarada e pegajosa.", "Todos os carros e ruas ficam incrivelmente pegajosos.", "Lava-jatos são substituídos por máquinas lambedoras."],
        end: "Lava-jatos são substituídos por máquinas lambedoras."
    },
    {
        start: "E se as árvores pudessem caminhar para um novo lugar quando ficassem entediadas?",
        steps: ["Florestas mudam constantemente de layout da noite para o dia.", "Mapas de GPS ficam inúteis e desatualizados em horas.", "As pessoas constroem casas sobre rodas para seguir suas árvores favoritas."],
        end: "As pessoas constroem casas sobre rodas para seguir suas árvores favoritas."
    },
    {
        start: "E se pudéssemos gravar e reproduzir nossos sonhos como filmes?",
        steps: ["Cinemas de sonhos se tornam mais populares que salas de cinema normais.", "As pessoas vendem seus melhores pesadelos como blockbusters de terror.", "Capacetes bloqueadores de sonhos são vendidos para proteger a privacidade do sono."],
        end: "Capacetes bloqueadores de sonhos são vendidos para proteger a privacidade do sono."
    },
    {
        start: "E se os dinossauros nunca tivessem se extinguido e vivessem entre nós como animais de estimação?",
        steps: ["Tiranossauros substituem cães de guarda em quintais grandes.", "Cidades precisam construir caminhões gigantes para limpar cocô de dinossauro.", "Mini-triceratops se tornam uma raça popular para apartamentos."],
        end: "Mini-triceratops se tornam uma raça popular para apartamentos."
    },
    {
        start: "E se as sombras pudessem se mover independentemente de nós?",
        steps: ["Sombras escapam à noite para festejar sem seus donos.", "As pessoas acordam com a sombra de outra pessoa grudada nelas.", "Uma nova profissão de caçadores de sombras é inventada para devolver sombras fugitivas."],
        end: "Uma nova profissão de caçadores de sombras é inventada."
    },
    {
        start: "E se as bicicletas só pudessem se mover sobre linhas pintadas?",
        steps: [
            "As estradas começariam a parecer livros de colorir gigantes.",
            "Engenheiros de trânsito trabalhariam junto com artistas.",
            "As cidades repintariam as rotas toda noite para mantê-las claras."
        ],
        end: "Pintores de rua se tornariam tão importantes quanto construtores de estradas."
    },
    {
        start: "E se cada cadeira da sala de aula só pudesse ser usada uma vez por dia?",
        steps: [
            "As escolas rotacionariam cadeiras entre salas diferentes.",
            "Os alunos começariam a carregar tapetes de assento pessoais.",
            "Empresas de móveis projetariam sistemas de troca mais rápidos."
        ],
        end: "Compartilhar assentos se tornaria uma rotina escolar normal."
    },
    {
        start: "E se os cafés servissem bebidas apenas em copos transparentes?",
        steps: [
            "Os clientes começariam a notar camadas, cores e erros.",
            "Baristas competiriam através do design das bebidas.",
            "Os cardápios se tornariam mais visuais e baseados em cores."
        ],
        end: "A apresentação das bebidas se tornaria parte do pedido."
    },
    {
        start: "E se cada porta só abrisse depois de uma rima curta?",
        steps: [
            "As pessoas inventariam rimas de entrada para cada prédio.",
            "As escolas ensinariam etiqueta de rimas.",
            "Ninguém esqueceria as chaves, mas muitos esqueceriam o verso."
        ],
        end: "A poesia se tornaria útil na vida diária."
    },
    {
        start: "E se cada estação de metrô cheirasse a uma fruta?",
        steps: [
            "Os passageiros lembrariam as estações pelo cheiro em vez dos letreiros.",
            "Os sistemas de transporte começariam a usar o cheiro como ferramenta de navegação.",
            "Anunciantes tentariam marcar bairros inteiros pelo aroma."
        ],
        end: "As cidades começariam a usar cheiros como parte da navegação."
    },
    {
        start: "E se uma meia perdida sempre se teletransportasse para o cesto de roupa suja mais próximo?",
        steps: [
            "As pessoas parariam de procurar debaixo das camas.",
            "A posição do cesto de roupa se tornaria uma estratégia séria.",
            "Quartos limpos seriam planejados em torno de zonas de cestos."
        ],
        end: "Cestos de roupa se tornariam o móvel mais importante da casa."
    },
    {
        start: "E se as baterias do celular só carregassem enquanto você segurasse o aparelho com as duas mãos?",
        steps: [
            "As pessoas agendariam pausas de carregamento como reuniões.",
            "Suportes para celular se tornariam populares em todos os lugares.",
            "Cafés criariam salas especiais de carregamento."
        ],
        end: "Carregar se tornaria um hábito social em vez de algo solitário."
    },
    {
        start: "E se cada livro da biblioteca sussurrasse um fato ao ser aberto?",
        steps: [
            "Os leitores começariam a caçar livros surpreendentes.",
            "Bibliotecários organizariam as estantes por nível de curiosidade.",
            "Estudar se sentiria mais como explorar um labirinto."
        ],
        end: "Bibliotecas se tornariam labirintos vivos de fatos."
    },
    {
        start: "E se ler uma receita em voz alta a mudasse ligeiramente?",
        steps: [
            "Chefs começariam a memorizar receitas em vez de lê-las em voz alta.",
            "Receitas em áudio precisariam de testes cuidadosos.",
            "Rotinas de cozinha dependeriam de tom, ritmo e silêncio."
        ],
        end: "Cozinhar se tornaria uma mistura de leitura e performance."
    },
    {
        start: "E se a sombra de cada árvore apontasse para a fonte de água mais próxima?",
        steps: [
            "Caminhantes começariam a seguir sombras de árvores de propósito.",
            "Parques plantariam árvores como guias de trilha.",
            "Apps de mapa comparariam sombras com dados de GPS."
        ],
        end: "Árvores se tornariam ajudantes naturais de navegação."
    },
    {
        start: "E se cada vez que alguém mentisse, seus sapatos chiassem?",
        steps: [
            "A honestidade se tornaria algo que você pode ouvir.",
            "Discursos públicos de repente ficariam muito mais silenciosos.",
            "Empresas de calçados começariam a fabricar filtros anti-chiado."
        ],
        end: "Verificar a verdade se tornaria uma indústria de calçados."
    },
    {
        start: "E se os botões do elevador só pudessem ser pressionados em pares?",
        steps: [
            "As pessoas teriam que coordenar suas escolhas de andar.",
            "O tráfego nos prédios ficaria mais lento, mas mais planejado.",
            "Amigos começariam a pegar elevadores juntos de propósito."
        ],
        end: "Subir ou descer se tornaria uma atividade social."
    },
    {
        start: "E se cada caixa de correio entregasse um item surpresa extra?",
        steps: [
            "As pessoas checariam o correio com mais empolgação.",
            "Itens inesperados criariam novos hábitos de organização.",
            "Seguro postal se tornaria muito mais popular."
        ],
        end: "O correio pareceria uma loteria diária."
    },
    {
        start: "E se um copo d'água derramado virasse um mapa pequeno?",
        steps: [
            "Acidentes começariam a se transformar em pistas.",
            "Crianças e detetives estudariam poças com mais cuidado.",
            "Jogos de leitura de mapas usariam poças de água como quebra-cabeças."
        ],
        end: "Bagunças começariam a carregar informação."
    },
    {
        start: "E se cada balão estourado liberasse uma frase falada?",
        steps: [
            "Crianças guardariam balões para mensagens.",
            "Festas ficariam cheias de anúncios acidentais.",
            "Fabricantes de balões imprimiriam avisos e etiquetas de mensagem."
        ],
        end: "Balões se tornariam portadores secretos de bilhetes."
    }
];

const whatif_deduction_pt = [
    {
        start: "E se o chocolate fosse o alimento mais saudável da Terra?",
        end: "Dentistas quebram completamente."
    },
    {
        start: "E se os humanos não precisassem dormir de jeito nenhum?",
        end: "O conceito de 'horário noturno' é proibido pelas prefeituras."
    },
    {
        start: "E se todos os insetos crescessem até o tamanho de cães médios?",
        end: "Mosquiteiros são substituídos por portões de garagem de aço."
    },
    {
        start: "E se rir alto fizesse você flutuar no ar?",
        end: "Clubes de comédia são construídos com tetos acolchoados."
    },
    {
        start: "E se os animais de estimação se tornassem os chefes da casa?",
        end: "Humanos são obrigados a usar coleiras e dormir em tapetes."
    },
    {
        start: "E se os brinquedos ganhassem vida só quando todos em casa estivessem dormindo?",
        end: "Crianças ficam acordadas por dias tentando pegar seus ursos de pelúcia."
    },
    {
        start: "E se nosso reflexo no espelho tivesse sua própria personalidade?",
        end: "As pessoas compram um segundo espelho para discutir com o próprio reflexo."
    },
    {
        start: "E se a chuva caísse em cores aleatórias em vez de água?",
        end: "Roupas brancas são proibidas por lei para evitar manchas de arco-íris."
    },
    {
        start: "E se as plantas gritassem quando você as cortasse?",
        end: "Cortadores de grama são substituídos por tesouras delicadas para podar plantas."
    },
    {
        start: "E se os livros se lessem em voz alta sozinhos quando abertos?",
        end: "Bibliotecas se tornam os lugares mais barulhentos e caóticos da Terra."
    }
];
