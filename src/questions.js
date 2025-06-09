const allQuestions = [
  {
    question: `Care este tema principală în „O scrisoare pierdută”?`,
    options: ['iubirea ca revelație', 'cunoașterea poetică', 'corupția politică'],
    correct: 2,
    explanation: `Tema centrală a operei este corupția politică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Cine este autorul operei „Baltagul”?`,
    options: ['Marin Preda', 'Marin Sorescu', 'Mihail Sadoveanu'],
    correct: 2,
    explanation: `Autorul operei este Mihail Sadoveanu, conform programei de bacalaureat.`
  },
  {
    question: `Care este tema principală în „Baltagul”?`,
    options: ['maturizarea lui Felix', 'corupția politică', 'dreptatea și iubirea conjugală'],
    correct: 2,
    explanation: `Tema centrală a operei este dreptatea și iubirea conjugală, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Povestea lui Harap-Alb”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului realism cu influențe romantice, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Plumb” de George Bacovia?`,
    options: ['poezie modernistă', 'basm cult', 'poezie simbolistă'],
    correct: 2,
    explanation: `Opera este o poezie simbolistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['modernism', 'simbolism', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „O scrisoare pierdută”?`,
    options: ['consecințele lăcomiei', 'cunoașterea poetică', 'corupția politică'],
    correct: 2,
    explanation: `Tema centrală a operei este corupția politică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'realism postbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Enigma Otiliei”?`,
    options: ['iubirea ca revelație', 'maturizarea lui Felix', 'moartea și izolarea'],
    correct: 1,
    explanation: `Tema centrală a operei este maturizarea lui Felix, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce gen literar are opera „Leoaică tânără, iubirea”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Leoaică tânără, iubirea” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „Povestea lui Harap-Alb”?`,
    options: ['consecințele lăcomiei', 'corupția politică', 'maturizarea eroului'],
    correct: 2,
    explanation: `Tema centrală a operei este maturizarea eroului, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce gen literar are opera „Plumb”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Plumb” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Enigma Otiliei”?`,
    options: ['realism interbelic', 'neomodernism', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului realism interbelic, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Moara cu noroc”?`,
    options: ['consecințele lăcomiei', 'conflictul între generații', 'moartea și izolarea'],
    correct: 0,
    explanation: `Tema centrală a operei este consecințele lăcomiei, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce specie literară este opera „Eu nu strivesc corola...” de Lucian Blaga?`,
    options: ['comedie de moravuri', 'nuvelă psihologică', 'poezie modernistă'],
    correct: 2,
    explanation: `Opera este o poezie modernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Ion”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Ion” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce specie literară este opera „Plumb” de George Bacovia?`,
    options: ['nuvelă psihologică', 'roman realist', 'poezie simbolistă'],
    correct: 2,
    explanation: `Opera este o poezie simbolistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Cine este autorul operei „Baltagul”?`,
    options: ['Mihail Sadoveanu', 'Ioan Slavici', 'I.L. Caragiale'],
    correct: 0,
    explanation: `Autorul operei este Mihail Sadoveanu, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Leoaică tânără, iubirea”?`,
    options: ['neomodernism', 'realism interbelic', 'simbolism'],
    correct: 0,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „O scrisoare pierdută”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „O scrisoare pierdută” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Ion”?`,
    options: ['Marin Sorescu', 'Mihail Sadoveanu', 'Liviu Rebreanu'],
    correct: 2,
    explanation: `Autorul operei este Liviu Rebreanu, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „O scrisoare pierdută”?`,
    options: ['realism interbelic', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Plumb”?`,
    options: ['George Bacovia', 'Lucian Blaga', 'Ion Creangă'],
    correct: 0,
    explanation: `Autorul operei este George Bacovia, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Baltagul”?`,
    options: ['Mihail Sadoveanu', 'I.L. Caragiale', 'Liviu Rebreanu'],
    correct: 0,
    explanation: `Autorul operei este Mihail Sadoveanu, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Povestea lui Harap-Alb”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'modernism'],
    correct: 0,
    explanation: `Opera aparține curentului realism cu influențe romantice, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Leoaică tânără, iubirea”?`,
    options: ['Nichita Stănescu', 'Ioan Slavici', 'George Călinescu'],
    correct: 0,
    explanation: `Autorul operei este Nichita Stănescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Povestea lui Harap-Alb” de Ion Creangă?`,
    options: ['nuvelă psihologică', 'basm cult', 'dramă modernă'],
    correct: 1,
    explanation: `Opera este o basm cult, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „O scrisoare pierdută”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „O scrisoare pierdută” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce specie literară este opera „Baltagul” de Mihail Sadoveanu?`,
    options: ['nuvelă psihologică', 'poezie simbolistă', 'roman mitic'],
    correct: 2,
    explanation: `Opera este o roman mitic, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Moromeții” de Marin Preda?`,
    options: ['roman realist', 'roman balzacian', 'basm cult'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Enigma Otiliei”?`,
    options: ['modernism', 'realism interbelic', 'neomodernism'],
    correct: 1,
    explanation: `Opera aparține curentului realism interbelic, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Eu nu strivesc corola...”?`,
    options: ['modernism', 'realism postbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului modernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['I.L. Caragiale', 'Ioan Slavici', 'Liviu Rebreanu'],
    correct: 1,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Leoaică tânără, iubirea”?`,
    options: ['Nichita Stănescu', 'Mihail Sadoveanu', 'Marin Preda'],
    correct: 0,
    explanation: `Autorul operei este Nichita Stănescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „O scrisoare pierdută”?`,
    options: ['Marin Sorescu', 'I.L. Caragiale', 'Liviu Rebreanu'],
    correct: 1,
    explanation: `Autorul operei este I.L. Caragiale, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Iona”?`,
    options: ['Marin Sorescu', 'Lucian Blaga', 'Marin Preda'],
    correct: 0,
    explanation: `Autorul operei este Marin Sorescu, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Iona”?`,
    options: ['Marin Sorescu', 'Ioan Slavici', 'Ion Creangă'],
    correct: 0,
    explanation: `Autorul operei este Marin Sorescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Ion”?`,
    options: ['modernism', 'realism interbelic', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['Marin Sorescu', 'I.L. Caragiale', 'Ioan Slavici'],
    correct: 2,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „O scrisoare pierdută”?`,
    options: ['Liviu Rebreanu', 'I.L. Caragiale', 'Mihail Sadoveanu'],
    correct: 1,
    explanation: `Autorul operei este I.L. Caragiale, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Leoaică tânără, iubirea” de Nichita Stănescu?`,
    options: ['poezie neomodernistă', 'poezie modernistă', 'roman balzacian'],
    correct: 0,
    explanation: `Opera este o poezie neomodernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Ion”?`,
    options: ['modernism', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Leoaică tânără, iubirea” de Nichita Stănescu?`,
    options: ['comedie de moravuri', 'poezie neomodernistă', 'roman balzacian'],
    correct: 1,
    explanation: `Opera este o poezie neomodernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Eu nu strivesc corola...”?`,
    options: ['modernism', 'realism cu influențe romantice', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului modernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Moara cu noroc” de Ioan Slavici?`,
    options: ['nuvelă psihologică', 'dramă modernă', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o nuvelă psihologică, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'neomodernism', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „O scrisoare pierdută”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „O scrisoare pierdută” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Iona”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'simbolism'],
    correct: 1,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Moromeții”?`,
    options: ['Marin Preda', 'Lucian Blaga', 'George Bacovia'],
    correct: 0,
    explanation: `Autorul operei este Marin Preda, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'neomodernism', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Ion”?`,
    options: ['iubirea ca revelație', 'consecințele lăcomiei', 'lupta pentru pământ'],
    correct: 2,
    explanation: `Tema centrală a operei este lupta pentru pământ, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Leoaică tânără, iubirea”?`,
    options: ['modernism', 'neomodernism', 'simbolism'],
    correct: 1,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Baltagul”?`,
    options: ['realism cu influențe romantice', 'modernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Baltagul”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Baltagul” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['Marin Preda', 'Ioan Slavici', 'Ion Creangă'],
    correct: 1,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moara cu noroc”?`,
    options: ['modernism', 'simbolism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Povestea lui Harap-Alb” de Ion Creangă?`,
    options: ['comedie de moravuri', 'roman balzacian', 'basm cult'],
    correct: 2,
    explanation: `Opera este o basm cult, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „O scrisoare pierdută”?`,
    options: ['simbolism', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Iona”?`,
    options: ['Marin Sorescu', 'I.L. Caragiale', 'Lucian Blaga'],
    correct: 0,
    explanation: `Autorul operei este Marin Sorescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Plumb”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Plumb” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce specie literară este opera „Enigma Otiliei” de George Călinescu?`,
    options: ['poezie modernistă', 'roman balzacian', 'roman mitic'],
    correct: 1,
    explanation: `Opera este o roman balzacian, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „Baltagul”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Baltagul” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „Baltagul”?`,
    options: ['lupta pentru pământ', 'dreptatea și iubirea conjugală', 'consecințele lăcomiei'],
    correct: 1,
    explanation: `Tema centrală a operei este dreptatea și iubirea conjugală, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Ion”?`,
    options: ['neomodernism', 'realism interbelic', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Leoaică tânără, iubirea” de Nichita Stănescu?`,
    options: ['roman realist', 'poezie neomodernistă', 'basm cult'],
    correct: 1,
    explanation: `Opera este o poezie neomodernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „O scrisoare pierdută”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „O scrisoare pierdută” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Povestea lui Harap-Alb”?`,
    options: ['realism cu influențe romantice', 'realism interbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului realism cu influențe romantice, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Iona” de Marin Sorescu?`,
    options: ['nuvelă psihologică', 'poezie modernistă', 'dramă modernă'],
    correct: 2,
    explanation: `Opera este o dramă modernă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['modernism', 'simbolism', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Ion”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Moromeții”?`,
    options: ['cunoașterea poetică', 'conflictul între generații', 'corupția politică'],
    correct: 1,
    explanation: `Tema centrală a operei este conflictul între generații, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Care este tema principală în „Moara cu noroc”?`,
    options: ['consecințele lăcomiei', 'conflictul între generații', 'dreptatea și iubirea conjugală'],
    correct: 0,
    explanation: `Tema centrală a operei este consecințele lăcomiei, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Cine este autorul operei „Povestea lui Harap-Alb”?`,
    options: ['Marin Sorescu', 'Mihail Sadoveanu', 'Ion Creangă'],
    correct: 2,
    explanation: `Autorul operei este Ion Creangă, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Leoaică tânără, iubirea”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'realism postbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Povestea lui Harap-Alb”?`,
    options: ['George Bacovia', 'Lucian Blaga', 'Ion Creangă'],
    correct: 2,
    explanation: `Autorul operei este Ion Creangă, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['Nichita Stănescu', 'Lucian Blaga', 'Ioan Slavici'],
    correct: 2,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Iona” de Marin Sorescu?`,
    options: ['poezie modernistă', 'dramă modernă', 'roman mitic'],
    correct: 1,
    explanation: `Opera este o dramă modernă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'realism postbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Moara cu noroc”?`,
    options: ['consecințele lăcomiei', 'conflictul între generații', 'moartea și izolarea'],
    correct: 0,
    explanation: `Tema centrală a operei este consecințele lăcomiei, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Cine este autorul operei „Iona”?`,
    options: ['Marin Sorescu', 'Mihail Sadoveanu', 'Lucian Blaga'],
    correct: 0,
    explanation: `Autorul operei este Marin Sorescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Baltagul”?`,
    options: ['Marin Preda', 'Mihail Sadoveanu', 'George Călinescu'],
    correct: 1,
    explanation: `Autorul operei este Mihail Sadoveanu, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'realism postbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce specie literară este opera „Iona” de Marin Sorescu?`,
    options: ['nuvelă psihologică', 'dramă modernă', 'poezie simbolistă'],
    correct: 1,
    explanation: `Opera este o dramă modernă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['simbolism', 'realism interbelic', 'realism postbelic'],
    correct: 0,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moromeții”?`,
    options: ['simbolism', 'realism postbelic', 'neomodernism'],
    correct: 1,
    explanation: `Opera aparține curentului realism postbelic, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Iona”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „Iona” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „Ion”?`,
    options: ['maturizarea lui Felix', 'consecințele lăcomiei', 'lupta pentru pământ'],
    correct: 2,
    explanation: `Tema centrală a operei este lupta pentru pământ, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Eu nu strivesc corola...”?`,
    options: ['Nichita Stănescu', 'Lucian Blaga', 'I.L. Caragiale'],
    correct: 1,
    explanation: `Autorul operei este Lucian Blaga, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Povestea lui Harap-Alb”?`,
    options: ['realism cu influențe romantice', 'simbolism', 'realism postbelic'],
    correct: 0,
    explanation: `Opera aparține curentului realism cu influențe romantice, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Iona” de Marin Sorescu?`,
    options: ['poezie modernistă', 'roman balzacian', 'dramă modernă'],
    correct: 2,
    explanation: `Opera este o dramă modernă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Cine este autorul operei „Moromeții”?`,
    options: ['Marin Preda', 'Marin Sorescu', 'I.L. Caragiale'],
    correct: 0,
    explanation: `Autorul operei este Marin Preda, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Eu nu strivesc corola...”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Eu nu strivesc corola...” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Ion”?`,
    options: ['neomodernism', 'realism postbelic', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Enigma Otiliei” de George Călinescu?`,
    options: ['roman balzacian', 'dramă modernă', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o roman balzacian, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Leoaică tânără, iubirea” de Nichita Stănescu?`,
    options: ['poezie neomodernistă', 'roman balzacian', 'roman mitic'],
    correct: 0,
    explanation: `Opera este o poezie neomodernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'nuvelă psihologică', 'poezie modernistă'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moara cu noroc”?`,
    options: ['neomodernism', 'realism interbelic', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Baltagul”?`,
    options: ['maturizarea eroului', 'dreptatea și iubirea conjugală', 'moartea și izolarea'],
    correct: 1,
    explanation: `Tema centrală a operei este dreptatea și iubirea conjugală, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Baltagul”?`,
    options: ['simbolism', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Plumb”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Plumb” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „Moromeții”?`,
    options: ['consecințele lăcomiei', 'conflictul între generații', 'lupta pentru pământ'],
    correct: 1,
    explanation: `Tema centrală a operei este conflictul între generații, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce gen literar are opera „Leoaică tânără, iubirea”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Leoaică tânără, iubirea” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Baltagul”?`,
    options: ['realism cu influențe romantice', 'realism postbelic', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moromeții”?`,
    options: ['modernism', 'realism postbelic', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului realism postbelic, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „O scrisoare pierdută”?`,
    options: ['Marin Preda', 'I.L. Caragiale', 'Ioan Slavici'],
    correct: 1,
    explanation: `Autorul operei este I.L. Caragiale, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Baltagul”?`,
    options: ['George Călinescu', 'Mihail Sadoveanu', 'Ioan Slavici'],
    correct: 1,
    explanation: `Autorul operei este Mihail Sadoveanu, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Leoaică tânără, iubirea”?`,
    options: ['Nichita Stănescu', 'Lucian Blaga', 'Ioan Slavici'],
    correct: 0,
    explanation: `Autorul operei este Nichita Stănescu, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Ion”?`,
    options: ['Marin Sorescu', 'George Bacovia', 'Liviu Rebreanu'],
    correct: 2,
    explanation: `Autorul operei este Liviu Rebreanu, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Enigma Otiliei”?`,
    options: ['George Călinescu', 'Marin Sorescu', 'Marin Preda'],
    correct: 0,
    explanation: `Autorul operei este George Călinescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Ion”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Ion” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Povestea lui Harap-Alb”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului realism cu influențe romantice, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Enigma Otiliei”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Enigma Otiliei” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moara cu noroc”?`,
    options: ['modernism', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Plumb”?`,
    options: ['George Bacovia', 'Ion Creangă', 'Liviu Rebreanu'],
    correct: 0,
    explanation: `Autorul operei este George Bacovia, conform programei de bacalaureat.`
  },
  {
    question: `Care este tema principală în „Enigma Otiliei”?`,
    options: ['maturizarea lui Felix', 'lupta pentru pământ', 'moartea și izolarea'],
    correct: 0,
    explanation: `Tema centrală a operei este maturizarea lui Felix, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Iona”?`,
    options: ['neomodernism', 'realism', 'simbolism'],
    correct: 0,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['George Călinescu', 'Ioan Slavici', 'Ion Creangă'],
    correct: 1,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Baltagul”?`,
    options: ['modernism', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce specie literară este opera „Moara cu noroc” de Ioan Slavici?`,
    options: ['nuvelă psihologică', 'poezie modernistă', 'dramă modernă'],
    correct: 0,
    explanation: `Opera este o nuvelă psihologică, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'poezie modernistă', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Baltagul” de Mihail Sadoveanu?`,
    options: ['roman realist', 'poezie simbolistă', 'roman mitic'],
    correct: 2,
    explanation: `Opera este o roman mitic, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Care este tema principală în „Povestea lui Harap-Alb”?`,
    options: ['lupta pentru pământ', 'singurătatea existențială', 'maturizarea eroului'],
    correct: 2,
    explanation: `Tema centrală a operei este maturizarea eroului, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Care este tema principală în „Baltagul”?`,
    options: ['iubirea ca revelație', 'corupția politică', 'dreptatea și iubirea conjugală'],
    correct: 2,
    explanation: `Tema centrală a operei este dreptatea și iubirea conjugală, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Cine este autorul operei „Eu nu strivesc corola...”?`,
    options: ['Marin Sorescu', 'Lucian Blaga', 'Ioan Slavici'],
    correct: 1,
    explanation: `Autorul operei este Lucian Blaga, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Eu nu strivesc corola...”?`,
    options: ['Marin Preda', 'Lucian Blaga', 'Liviu Rebreanu'],
    correct: 1,
    explanation: `Autorul operei este Lucian Blaga, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'dramă modernă', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Care este tema principală în „Enigma Otiliei”?`,
    options: ['singurătatea existențială', 'maturizarea lui Felix', 'corupția politică'],
    correct: 1,
    explanation: `Tema centrală a operei este maturizarea lui Felix, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Care este tema principală în „Leoaică tânără, iubirea”?`,
    options: ['iubirea ca revelație', 'consecințele lăcomiei', 'dreptatea și iubirea conjugală'],
    correct: 0,
    explanation: `Tema centrală a operei este iubirea ca revelație, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Care este tema principală în „O scrisoare pierdută”?`,
    options: ['singurătatea existențială', 'consecințele lăcomiei', 'corupția politică'],
    correct: 2,
    explanation: `Tema centrală a operei este corupția politică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'roman mitic', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['Nichita Stănescu', 'Marin Preda', 'Ioan Slavici'],
    correct: 2,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Eu nu strivesc corola...” de Lucian Blaga?`,
    options: ['comedie de moravuri', 'poezie modernistă', 'basm cult'],
    correct: 1,
    explanation: `Opera este o poezie modernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Care este tema principală în „Eu nu strivesc corola...”?`,
    options: ['consecințele lăcomiei', 'cunoașterea poetică', 'moartea și izolarea'],
    correct: 1,
    explanation: `Tema centrală a operei este cunoașterea poetică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „O scrisoare pierdută”?`,
    options: ['simbolism', 'realism interbelic', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Ion”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Ion” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce specie literară este opera „Povestea lui Harap-Alb” de Ion Creangă?`,
    options: ['poezie simbolistă', 'basm cult', 'roman mitic'],
    correct: 1,
    explanation: `Opera este o basm cult, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Cine este autorul operei „O scrisoare pierdută”?`,
    options: ['Nichita Stănescu', 'I.L. Caragiale', 'Ion Creangă'],
    correct: 1,
    explanation: `Autorul operei este I.L. Caragiale, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Moromeții”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moromeții” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Leoaică tânără, iubirea”?`,
    options: ['realism cu influențe romantice', 'neomodernism', 'realism interbelic'],
    correct: 1,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Ion”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Ion” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'poezie neomodernistă', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „O scrisoare pierdută”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „O scrisoare pierdută” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „Eu nu strivesc corola...”?`,
    options: ['Lucian Blaga', 'Mihail Sadoveanu', 'Liviu Rebreanu'],
    correct: 0,
    explanation: `Autorul operei este Lucian Blaga, conform programei de bacalaureat.`
  },
  {
    question: `Cine este autorul operei „Iona”?`,
    options: ['Marin Sorescu', 'Ioan Slavici', 'Liviu Rebreanu'],
    correct: 0,
    explanation: `Autorul operei este Marin Sorescu, conform programei de bacalaureat.`
  },
  {
    question: `Care este tema principală în „Enigma Otiliei”?`,
    options: ['maturizarea lui Felix', 'singurătatea existențială', 'maturizarea eroului'],
    correct: 0,
    explanation: `Tema centrală a operei este maturizarea lui Felix, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce specie literară este opera „Baltagul” de Mihail Sadoveanu?`,
    options: ['poezie modernistă', 'basm cult', 'roman mitic'],
    correct: 2,
    explanation: `Opera este o roman mitic, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Iona” de Marin Sorescu?`,
    options: ['basm cult', 'dramă modernă', 'roman mitic'],
    correct: 1,
    explanation: `Opera este o dramă modernă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['Mihail Sadoveanu', 'Ioan Slavici', 'Liviu Rebreanu'],
    correct: 1,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Ce gen literar are opera „Baltagul”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Baltagul” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Iona”?`,
    options: ['modernism', 'neomodernism', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Moara cu noroc”?`,
    options: ['I.L. Caragiale', 'Ioan Slavici', 'Liviu Rebreanu'],
    correct: 1,
    explanation: `Autorul operei este Ioan Slavici, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Eu nu strivesc corola...” de Lucian Blaga?`,
    options: ['roman realist', 'poezie modernistă', 'dramă modernă'],
    correct: 1,
    explanation: `Opera este o poezie modernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Moara cu noroc” de Ioan Slavici?`,
    options: ['nuvelă psihologică', 'poezie modernistă', 'comedie de moravuri'],
    correct: 0,
    explanation: `Opera este o nuvelă psihologică, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Plumb”?`,
    options: ['modernism', 'simbolism', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului simbolism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Baltagul”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Baltagul” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moara cu noroc”?`,
    options: ['realism interbelic', 'neomodernism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Cine este autorul operei „Eu nu strivesc corola...”?`,
    options: ['George Bacovia', 'Marin Sorescu', 'Lucian Blaga'],
    correct: 2,
    explanation: `Autorul operei este Lucian Blaga, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Eu nu strivesc corola...” de Lucian Blaga?`,
    options: ['poezie modernistă', 'basm cult', 'dramă modernă'],
    correct: 0,
    explanation: `Opera este o poezie modernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Povestea lui Harap-Alb” de Ion Creangă?`,
    options: ['basm cult', 'dramă modernă', 'roman mitic'],
    correct: 0,
    explanation: `Opera este o basm cult, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Cine este autorul operei „Enigma Otiliei”?`,
    options: ['George Călinescu', 'Marin Sorescu', 'Nichita Stănescu'],
    correct: 0,
    explanation: `Autorul operei este George Călinescu, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'dramă modernă', 'roman mitic'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „O scrisoare pierdută” de I.L. Caragiale?`,
    options: ['comedie de moravuri', 'poezie modernistă', 'dramă modernă'],
    correct: 0,
    explanation: `Opera este o comedie de moravuri, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce specie literară este opera „Leoaică tânără, iubirea” de Nichita Stănescu?`,
    options: ['roman realist', 'poezie neomodernistă', 'poezie modernistă'],
    correct: 1,
    explanation: `Opera este o poezie neomodernistă, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Iona”?`,
    options: ['modernism', 'neomodernism', 'realism'],
    correct: 1,
    explanation: `Opera aparține curentului neomodernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Baltagul”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Baltagul” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Ce gen literar are opera „Iona”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 2,
    explanation: `Opera „Iona” aparține genului literar dramatic, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „O scrisoare pierdută”?`,
    options: ['iubirea ca revelație', 'cunoașterea poetică', 'corupția politică'],
    correct: 2,
    explanation: `Tema centrală a operei este corupția politică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Care este tema principală în „Baltagul”?`,
    options: ['iubirea ca revelație', 'singurătatea existențială', 'dreptatea și iubirea conjugală'],
    correct: 2,
    explanation: `Tema centrală a operei este dreptatea și iubirea conjugală, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce specie literară este opera „Enigma Otiliei” de George Călinescu?`,
    options: ['roman realist', 'poezie modernistă', 'roman balzacian'],
    correct: 2,
    explanation: `Opera este o roman balzacian, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Care este tema principală în „Moara cu noroc”?`,
    options: ['maturizarea lui Felix', 'consecințele lăcomiei', 'cunoașterea poetică'],
    correct: 1,
    explanation: `Tema centrală a operei este consecințele lăcomiei, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce specie literară este opera „Ion” de Liviu Rebreanu?`,
    options: ['roman realist', 'poezie neomodernistă', 'dramă modernă'],
    correct: 0,
    explanation: `Opera este o roman realist, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce gen literar are opera „Plumb”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 1,
    explanation: `Opera „Plumb” aparține genului literar liric, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „Plumb”?`,
    options: ['corupția politică', 'dreptatea și iubirea conjugală', 'moartea și izolarea'],
    correct: 2,
    explanation: `Tema centrală a operei este moartea și izolarea, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce gen literar are opera „Moara cu noroc”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Moara cu noroc” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Care este tema principală în „Eu nu strivesc corola...”?`,
    options: ['iubirea ca revelație', 'cunoașterea poetică', 'singurătatea existențială'],
    correct: 1,
    explanation: `Tema centrală a operei este cunoașterea poetică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Cine este autorul operei „Baltagul”?`,
    options: ['George Bacovia', 'Mihail Sadoveanu', 'I.L. Caragiale'],
    correct: 1,
    explanation: `Autorul operei este Mihail Sadoveanu, conform programei de bacalaureat.`
  },
  {
    question: `Ce specie literară este opera „Povestea lui Harap-Alb” de Ion Creangă?`,
    options: ['basm cult', 'dramă modernă', 'poezie simbolistă'],
    correct: 0,
    explanation: `Opera este o basm cult, deoarece respectă caracteristicile speciei.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Povestea lui Harap-Alb”?`,
    options: ['realism cu influențe romantice', 'realism interbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului realism cu influențe romantice, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Ce gen literar are opera „Ion”?`,
    options: ['epic', 'liric', 'dramatic'],
    correct: 0,
    explanation: `Opera „Ion” aparține genului literar epic, deoarece respectă structura acestuia.`
  },
  {
    question: `Cine este autorul operei „O scrisoare pierdută”?`,
    options: ['Marin Sorescu', 'I.L. Caragiale', 'Liviu Rebreanu'],
    correct: 1,
    explanation: `Autorul operei este I.L. Caragiale, conform programei de bacalaureat.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Eu nu strivesc corola...”?`,
    options: ['modernism', 'realism postbelic', 'realism'],
    correct: 0,
    explanation: `Opera aparține curentului modernism, potrivit trăsăturilor de stil și temă.`
  },
  {
    question: `Care este tema principală în „Iona”?`,
    options: ['consecințele lăcomiei', 'lupta pentru pământ', 'singurătatea existențială'],
    correct: 2,
    explanation: `Tema centrală a operei este singurătatea existențială, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Care este tema principală în „Eu nu strivesc corola...”?`,
    options: ['iubirea ca revelație', 'cunoașterea poetică', 'moartea și izolarea'],
    correct: 1,
    explanation: `Tema centrală a operei este cunoașterea poetică, reflectată în acțiune și construcția personajelor.`
  },
  {
    question: `Ce curent literar este ilustrat în opera „Moara cu noroc”?`,
    options: ['modernism', 'simbolism', 'realism'],
    correct: 2,
    explanation: `Opera aparține curentului realism, potrivit trăsăturilor de stil și temă.`
  },
];

export default allQuestions;