const allQuestions = [
  {
    question: `Analizează relația dintre temă și construcția personajelor în „O scrisoare pierdută” de I.L. Caragiale.`,
    options: [
      'Tema iubirii este evidențiată prin conflictul Zoe-Trahanache.',
      'Tema corupției politice este reflectată în acțiunile tuturor personajelor principale.',
      'Tema cunoașterii poetice este ilustrată prin discursurile politice.',
      'Tema naturii umane este subliniată prin monologurile lui Tipătescu.'
    ],
    correct: 1,
    explanation: `Corupția politică este tema centrală, iar personajele sunt construite astfel încât să reflecte degradarea morală și compromisurile politice ale epocii.`
  },
  {
    question: `În romanul „Enigma Otiliei”, ce simbolizează casa lui Costache Giurgiuveanu pentru personajul principal și pentru atmosfera romanului?`,
    options: [
      'Oaza de liniște a Otiliei.',
      'Un spațiu al incertitudinii și al conflictelor moștenite.',
      'Simbolul maturizării lui Felix.',
      'Reprezentarea dragostei neîmplinite dintre Otilia și Felix.'
    ],
    correct: 1,
    explanation: `Casa este un spațiu instabil, simbolizând incertitudinea, conflictele de moștenire și tensiunile dintre personaje, contribuind la atmosfera romanului.`
  },
  {
    question: `Care este semnificația motivului drumului în „Baltagul” de Mihail Sadoveanu?`,
    options: [
      'Simbolizează călătoria inițiatică și căutarea adevărului.',
      'Reflectă fuga de responsabilitate a personajului principal.',
      'Evidențiază relația dintre sat și oraș.',
      'Drumul sugerează trecerea timpului și uitarea.'
    ],
    correct: 0,
    explanation: `Drumul parcurge o funcție inițiatică și simbolică, marcând căutarea adevărului și a dreptății de către Vitoria Lipan.`
  },
  {
    question: `În poezia „Plumb” de George Bacovia, ce rol are cromatica în transmiterea mesajului poetic?`,
    options: [
      'Sugerează optimismul și speranța.',
      'Accentuează starea de apăsare și angoasă existențială.',
      'Scoate în evidență frumusețea naturii.',
      'Indică o ruptură între viață și moarte.'
    ],
    correct: 1,
    explanation: `Cromatica (plumb, cenușiu, negru) accentuează atmosfera apăsătoare, depresivă, și transmite angoasa existențială a eului liric.`
  },
  {
    question: `Care dintre următoarele afirmații despre curentul literar ilustrat de „Moromeții” de Marin Preda este adevărată?`,
    options: [
      'Romanul aparține realismului postbelic, evidențiind transformările sociale ale satului românesc.',
      'Este un roman modernist preocupat de introspecția psihologică.',
      'Aparține simbolismului, accentuând starea de melancolie.',
      'Respectă regulile romanului balzacian clasic.'
    ],
    correct: 0,
    explanation: `„Moromeții” aparține realismului postbelic, punând accent pe schimbările sociale și mentalitățile rurale din perioada respectivă.`
  },
  {
    question: `Ce rol are naratorul în „Ion” de Liviu Rebreanu și cum influențează perspectiva cititorului?`,
    options: [
      'Naratorul omniscient permite o distanțare critică față de personaje și acțiune.',
      'Naratorul subiectiv transmite stările emoționale ale lui Ion.',
      'Naratorul este un personaj implicat direct în acțiune.',
      'Naratorul folosește exclusiv perspectiva Otiliei.'
    ],
    correct: 0,
    explanation: `Naratorul omniscient permite o viziune de ansamblu asupra satului, a conflictelor sociale și a motivațiilor personajelor, oferind cititorului o perspectivă critică.`
  },
  {
    question: `Argumentează dacă „Moara cu noroc” de Ioan Slavici poate fi considerată o nuvelă realistă și psihologică.`,
    options: [
      'Da, deoarece accentuează analiza conflictului interior al personajului principal și urmărește consecințele lăcomiei.',
      'Nu, deoarece este o operă lirică.',
      'Da, datorită accentului pus pe dragostea romantică.',
      'Nu, deoarece acțiunea are loc într-un spațiu fantastic.'
    ],
    correct: 0,
    explanation: `Este o nuvelă realistă și psihologică prin analiza minuțioasă a degradării morale a lui Ghiță, pe fondul unei realități sociale bine conturate.`
  },
  {
    question: `Ce elemente de modernitate identifici în poezia „Eu nu strivesc corola de minuni a lumii” de Lucian Blaga?`,
    options: [
      'Utilizarea simbolurilor și a metaforei cunoașterii.',
      'Structura clasică cu rimă împerecheată.',
      'Prezența motivului timpului ciclic.',
      'Accentul pe descrierea naturii rurale.'
    ],
    correct: 0,
    explanation: `Modernitatea poeziei constă în simbolismul metaforei centrale (lumina/cunoașterea), limbajul inovator și viziunea filozofică asupra existenței.`
  },
  {
    question: `Cum se reflectă tema maturizării în „Povestea lui Harap-Alb” de Ion Creangă?`,
    options: [
      'Prin eșecul eroului în a-și depăși condiția.',
      'Prin succesiunea probelor care îl transformă pe Harap-Alb într-un lider responsabil.',
      'Prin accentul pe elementele fantastice.',
      'Prin izolarea eroului de ceilalți.'
    ],
    correct: 1,
    explanation: `Tema maturizării este ilustrată de parcursul inițiatic al eroului, care trece prin numeroase probe, dezvoltându-se și transformându-se într-un lider.`
  },
  {
    question: `Care este rolul simbolului „plumbului” în poezia cu același nume de George Bacovia?`,
    options: [
      'Sugerează libertatea spirituală.',
      'Reprezintă apăsarea existențială și lipsa orizontului.',
      'Indică iubirea ideală.',
      'Evidențiază frumusețea naturii.'
    ],
    correct: 1,
    explanation: `Plumbul este metafora centrală pentru apăsarea sufletească, angoasă și lipsa oricărui orizont de salvare pentru eul poetic.`
  },
  {
    question: `Ce funcție are construcția circulară a romanului „Moromeții” de Marin Preda?`,
    options: [
      'Subminează sensul narativ al romanului.',
      'Ilustrează stagnarea și imobilitatea satului tradițional.',
      'Dă accent pe rolul feminin.',
      'Subliniază evoluția rapidă a societății.'
    ],
    correct: 1,
    explanation: `Construcția circulară sugerează repetitivitate, stagnare și imobilitate în viața satului și a familiei Moromete.`
  },
  {
    question: `Cum contribuie portretizarea personajului Otilia la ambiguitatea romanului „Enigma Otiliei”?`,
    options: [
      'Otilia are un caracter complet previzibil.',
      'Ambiguitatea comportamentului și a intențiilor ei alimentează incertitudinea narativă.',
      'Otilia este exclusiv un simbol al iubirii materne.',
      'Portretizarea ei nu influențează structura romanului.'
    ],
    correct: 1,
    explanation: `Comportamentul ambiguu al Otiliei provoacă incertitudine atât pentru Felix, cât și pentru cititor, alimentând enigma centrală a romanului.`
  },
  {
    question: `Care este importanța elementelor fantastice în „Povestea lui Harap-Alb”?`,
    options: [
      'Nu există elemente fantastice.',
      'Conferă operei caracterul de basm cult și facilitează transmiterea mesajului inițiatic.',
      'Elementele fantastice subminează credibilitatea narațiunii.',
      'Sunt folosite doar ca decor narativ, fără rol tematic.'
    ],
    correct: 1,
    explanation: `Elementele fantastice sunt esențiale pentru definirea operei ca basm cult și pentru susținerea parcursului inițiatic al eroului.`
  },
  {
    question: `Care dintre următoarele trăsături nu este specifică romanului balzacian din „Enigma Otiliei”?`,
    options: [
      'Prezentarea detaliată a mediului social.',
      'Construcția personajelor-simbol.',
      'Accentul pe analiza psihologică profundă.',
      'Utilizarea naratorului omniscient.'
    ],
    correct: 2,
    explanation: `Romanul balzacian pune accent pe frescă socială și narator omniscient, dar analiza psihologică profundă este mai specifică romanului modern.`
  },
  {
    question: `Ce semnificație are titlul romanului „Ion” de Liviu Rebreanu?`,
    options: [
      'Reprezintă destinul colectiv al satului transilvănean.',
      'Este un nume generic pentru țărani.',
      'Sugerează individualizarea destinului unui țăran obsedat de pământ.',
      'Evidențiază relația dintre sat și oraș.'
    ],
    correct: 2,
    explanation: `Titlul individualizează destinul eroului principal, Ion, a cărui obsesie pentru pământ devine motorul întregii acțiuni.`
  },
  {
    question: `Cum se reflectă realismul în nuvela „Moara cu noroc” de Ioan Slavici?`,
    options: [
      'Prin prezentarea fantastică a personajelor.',
      'Prin analiza cauzală a conflictelor sociale și morale.',
      'Prin folosirea exclusivă a monologului interior.',
      'Prin introducerea unui narator subiectiv.'
    ],
    correct: 1,
    explanation: `Realismul se manifestă prin analiza cauzală a degradării morale și sociale, precum și prin prezentarea detaliată a mediului rural.`
  }
];
export default allQuestions;