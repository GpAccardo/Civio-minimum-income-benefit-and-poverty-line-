import { formatDecimals, formatIntegers, formatEuros } from '../utils/locale';

// Comes from https://observablehq.com/@civio/automatizar-traducciones-visualizaciones
const texts = {
  es: {
    // The title is also the legend: keep each <span> around its words, wherever they end up.
    title:
      'Distancia entre las <span class="mark-benefit">rentas mínimas</span> en Europa y el <span class="mark-threshold">umbral de pobreza</span>',

    householdLegend: 'Tipo de hogar',
    household: {
      single: 'Persona sola',
      couple: 'Pareja',
      family: 'Pareja con 2 hijos',
    },

    // By Eurostat code (Greece is EL, not GR)
    countries: {
      AT: 'Austria',
      BE: 'Bélgica',
      BG: 'Bulgaria',
      CY: 'Chipre',
      CZ: 'República Checa',
      DE: 'Alemania',
      DK: 'Dinamarca',
      EE: 'Estonia',
      EL: 'Grecia',
      ES: 'España',
      FI: 'Finlandia',
      FR: 'Francia',
      HR: 'Croacia',
      HU: 'Hungría',
      IE: 'Irlanda',
      IT: 'Italia',
      LT: 'Lituania',
      LU: 'Luxemburgo',
      LV: 'Letonia',
      MT: 'Malta',
      NL: 'Países Bajos',
      PL: 'Polonia',
      PT: 'Portugal',
      RO: 'Rumanía',
      SE: 'Suecia',
      SI: 'Eslovenia',
      SK: 'Eslovaquia',
    },
    noData: 'Sin datos',
    interactionHint:
      'Filtra por tipo de hogar y por umbral, y pasa el ratón por un país ↓ para ver sus cifras.',
    interactionHintTouch:
      'Filtra por tipo de hogar y por umbral, y toca un país ↓ para ver sus cifras.',
    // With its article: it goes inside sentences ({household} in tooltip and a11y).
    householdNarrative: {
      single: 'una persona sola',
      couple: 'una pareja',
      family: 'una pareja con 2 hijos',
    },
    // Tooltip: one country, the household selected in the filter. Keep the tags around the same
    // words: <b> bold, <strong> bold in the colour of the bar, <i> italics.
    // {household} comes from householdNarrative, {scheme} is the programme's own name (untranslated,
    // from the data) and {term} is povertyTerm or extremeTerm.
    tooltip: {
      // → «En Chipre, una persona sola cobra como máximo 480 € del Ελάχιστο Εγγυημένο Εισόδημα.»
      benefit:
        'En <b>{country}</b>, <b>{household}</b> cobra como máximo {amount} del <i>{scheme}</i>.',
      // When the data gives no programme name
      // → «En Francia, una pareja cobra como máximo 963 € de renta mínima.»
      benefitNoScheme:
        'En <b>{country}</b>, <b>{household}</b> cobra como máximo {amount} de renta mínima.',
      // Follows benefit («esta cantidad» is that amount)
      // → «Esta cantidad está un 56,50 % por debajo del umbral de pobreza del país (1.103 €).»
      below:
        'Esta cantidad está <strong>un {pct} por debajo</strong> del <b>{term}</b> del país ({threshold}).',
      // → «Esta cantidad está un 28,79 % por encima del umbral de pobreza del país (2.714 €).»
      above:
        'Esta cantidad está <strong>un {pct} por encima</strong> del <b>{term}</b> del país ({threshold}).',
      // → «En Bélgica, no hay datos claros sobre la cuantía de la renta mínima para una pareja
      //   con 2 hijos.»
      noAmount:
        'En <b>{country}</b>, no hay datos claros sobre la cuantía de la renta mínima para <b>{household}</b>.',
      // → «No se dispone del umbral de pobreza severa del país.»
      noThreshold: 'No se dispone del <b>{term}</b> del país.',
    },

    // Axis titles, one per side. {reference} comes from referenceNoun
    // → «% que falta para salir de la pobreza» · «% por encima de la pobreza severa»
    axisTitleShortfall: '% que falta para salir de {reference}',
    axisTitleSurplus: '% por encima de {reference}',
    referenceNoun: {
      poverty: 'la pobreza',
      extreme: 'la pobreza severa',
    },
    // Threshold selector
    referenceLegend: 'Umbral de referencia',
    referencePoverty: 'Umbral de pobreza',
    referenceExtreme: 'Umbral de pobreza severa',
    // {term} inside tooltip and screen reader sentences
    povertyTerm: 'umbral de pobreza',
    extremeTerm: 'umbral de pobreza severa',
    // Short labels on the chart, between tick labels. `\n` is a line break.
    thresholdMark: 'Pobreza',
    extremeMark: 'Pobreza\nsevera',

    noRatio: 'Sin datos',
    // noteLabel goes apart because thresholdNote also opens the screen reader description.
    noteLabel: 'Nota:',
    thresholdNote:
      'El umbral de pobreza es el 60 % de la mediana de ingresos de cada país, y el de pobreza severa, el 40 %; ambos, con datos de 2025.',
    // → «…Países excluidos por falta de datos claros sobre la cuantía de la renta mínima:
    //   Eslovaquia, Hungría, Polonia, Rumanía.»
    excludedNote:
      'Las rentas mínimas son de <b>enero de 2026</b>. Países excluidos por falta de datos claros sobre la cuantía de la renta mínima: {countries}.',
    loading: 'Cargando datos…',
    loadError: 'No se han podido cargar los datos',

    source: `Fuente: <a target="_blank" href="https://www.missoc.org/">MISSOC</a>, <a target="_blank" href="https://ec.europa.eu/eurostat/databrowser/view/ilc_li03/default/table?lang=en">Eurostat</a> y páginas oficiales. `,
    // {link} is methodologyLink, as a link → «Para saber más, consulta nuestra metodología.»
    methodology: 'Para saber más, consulta nuestra {link}.',
    methodologyLink: 'metodología',

    // Share/embed texts
    embedViz: 'Incrustar',
    copiedCode: 'Copiado',

    // Accessibility texts
    shareButton: 'Compartir visualización',
    closeShare: 'Cerrar opciones de compartir',
    closeTooltip: 'Cerrar detalle',
    copyEmbed: 'Copiar código para incrustar',
    codeCopied: 'Código copiado al portapapeles',
    loadingEmbed: 'Cargando código…',
    embedError: 'Error al copiar el código',
    opensInNewWindow: '(abre en nueva ventana)',
    logoAlt: 'logo Civio',
    dataListTitle: 'Listado completo de datos',

    // Screen reader texts, heard rather than seen: keep the wording of the tooltip and the title
    // («distancia», «por debajo» / «por encima»). Assembled in a11y/mainChart.js.
    a11y: {
      mainChart: {
        // Opens the description, followed by thresholdNote and howToRead
        // → «Gráfico de puntos con la distancia entre las rentas mínimas y el umbral de pobreza,
        //   o el de pobreza severa, en 23 países europeos y para tres tipos de hogar: una persona
        //   sola, una pareja y una pareja con 2 hijos.»
        shape:
          'Gráfico de puntos con la distancia entre las rentas mínimas y el umbral de pobreza, o el de pobreza severa, en {count} países europeos y para tres tipos de hogar: {households}.',
        howToRead:
          'Una línea vertical marca el umbral: a la izquierda, en rosa, las rentas que quedan por debajo; a la derecha, en azul, las que quedan por encima.',
        // Closes the summary. A state, not an event: it is also read when nothing has changed.
        tableHint: 'La tabla del final recoge el detalle por país.',

        // Countries above the selected threshold: one of the four, depending on how many.
        // → «En ningún país ni tipo de hogar la renta mínima queda por encima del umbral de
        //   pobreza severa.»
        aboveNone: 'En ningún país ni tipo de hogar la renta mínima queda por encima del {term}.',
        // {countries} is a list of countryHouseholds
        // → «La renta mínima solo queda por encima del umbral de pobreza en Luxemburgo para una
        //   pareja y en Dinamarca para una pareja y una pareja con 2 hijos.»
        aboveList: 'La renta mínima solo queda por encima del {term} {countries}.',
        // One item in the list inside aboveList. {country} is a country name; {households} is a
        // comma-joined list from householdNarrative, or allHouseholds.
        // → aboveList fills {countries} with e.g. «en Luxemburgo para una pareja y en Dinamarca
        //   para una pareja y una pareja con 2 hijos»
        // Repeating «en» before each country prevents the two lists from running together by ear.
        countryHouseholds: 'en {country} para {households}',
        allHouseholds: 'todos los hogares',
        // → «Según el tipo de hogar, entre 2 y 6 países tienen una renta mínima por encima del
        //   umbral de pobreza severa.»
        aboveRange:
          'Según el tipo de hogar, entre {min} y {max} países tienen una renta mínima por encima del {term}.',
        // → «En cada tipo de hogar, 3 países tienen una renta mínima por encima del umbral de
        //   pobreza.»
        aboveSame:
          'En cada tipo de hogar, {count} países tienen una renta mínima por encima del {term}.',

        // One item for the focus country (Spain). Joined with commas and used as {items} in
        // focusBelowList/focusAboveList, or as {above}/{below} in focusMixedList.
        // → «un 28 % para una persona sola, un 38 % para una pareja y un 35 % para una pareja
        //   con 2 hijos»
        focusItem: 'un {pct} para {household}',
        // → «En España, la renta mínima está por debajo del umbral de pobreza: un 28 % para una
        //   persona sola, un 38 % para una pareja y un 35 % para una pareja con 2 hijos.»
        focusBelowList: 'En {country}, la renta mínima está por debajo del {term}: {items}.',
        focusAboveList: 'En {country}, la renta mínima está por encima del {term}: {items}.',
        // → «En España, la renta mínima está por encima del umbral de pobreza severa un 8 % para
        //   una persona sola, y por debajo un 6 % para una pareja y un 2 % para una pareja con
        //   2 hijos.»
        focusMixedList:
          'En {country}, la renta mínima está por encima del {term} {above}, y por debajo {below}.',

        // Table caption. The figures in the table carry a sign (−27,96 %, +28,79 %).
        title:
          'Distancia entre la renta mínima y el {term}, por tipo de hogar. En negativo, por debajo; en positivo, por encima.',
        countryColumn: 'País',
      },
      // Under the household filter, announced every time it changes: keep it short.
      // {household} is the filter's own label.
      // → «Pareja: por debajo del umbral de pobreza en 21 de 23 países.»
      scenario: {
        householdChanged: '{household}:',
        someReach: 'por debajo del {term} en {below} de {count} países.',
        // When every country is below → «Persona sola: por debajo del umbral de pobreza en los
        // 23 países.»
        noneReach: 'por debajo del {term} en los {count} países.',
      },
      followingList: 'A continuación tienes el listado con todos los detalles.',
      followingTable: 'A continuación tienes la tabla con todos los detalles.',
    },
  },
  en: {
    title:
      'Difference between <span class="mark-benefit">minimum income benefit</span> and <span class="mark-threshold">poverty line</span> in Europe',

    householdLegend: 'Household type',
    household: {
      single: 'Single person',
      couple: 'Couple',
      family: 'Couple with 2 children',
    },
    // By Eurostat code (Greece is EL, not GR)
    countries: {
      AT: 'Austria',
      BE: 'Belgium',
      BG: 'Bulgaria',
      CY: 'Cyprus',
      CZ: 'Czechia',
      DE: 'Germany',
      DK: 'Denmark',
      EE: 'Estonia',
      EL: 'Greece',
      ES: 'Spain',
      FI: 'Finland',
      FR: 'France',
      HR: 'Croatia',
      HU: 'Hungary',
      IE: 'Ireland',
      IT: 'Italy',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      LV: 'Latvia',
      MT: 'Malta',
      NL: 'Netherlands',
      PL: 'Poland',
      PT: 'Portugal',
      RO: 'Romania',
      SE: 'Sweden',
      SI: 'Slovenia',
      SK: 'Slovakia',
    },
    noData: 'No data',
    interactionHint:
      'Filter by household type and poverty line, and hover over a country name ↓ to see its figures.',
    interactionHintTouch:
      'Filter by household type and poverty line, and touch a country name ↓ to see its figures.',
    householdNarrative: {
      single: 'a single person',
      couple: 'a couple',
      family: 'a couple with 2 children',
    },
    tooltip: {
      // → «In Cyprus, a single person gets a maximum income benefit of 480 € from the Ελάχιστο…»
      benefit:
        'In <b>{country}</b>, <b>{household}</b> gets a maximum income benefit of {amount} from the <i>{scheme}</i>.',
      // When the data gives no programme name
      benefitNoScheme:
        'In <b>{country}</b>, <b>{household}</b> gets a maximum income benefit of {amount}.',
      // {term} is already «poverty line» / «severe poverty line»
      below: 'This amount is <strong>{pct} below</strong> the <b>{term}</b> ({threshold}).',
      above: 'This amount is <strong>{pct} above</strong> the <b>{term}</b> ({threshold}).',
      noAmount:
        'In <b>{country}</b>, we lack clear data on the income benefit for <b>{household}</b>.',
      noThreshold: 'We lack the <b>{term}</b> for this country.',
    },

    axisTitleShortfall: '% to escape {reference}',
    axisTitleSurplus: '% above {reference}',
    referenceNoun: {
      poverty: 'poverty',
      extreme: 'severe poverty',
    },
    referenceLegend: 'Reference value',
    referencePoverty: 'Poverty line',
    referenceExtreme: 'Severe poverty line',
    // Lower case: they go mid-sentence (the selector labels above are the capitalised ones)
    povertyTerm: 'poverty line',
    extremeTerm: 'severe poverty line',
    thresholdMark: 'Poverty',
    extremeMark: 'Severe\npoverty',

    noRatio: 'No ratio',
    noteLabel: 'Note:',
    thresholdNote:
      'We set the poverty threshold at 60% of national median income and the severe poverty line at 40% of national median income.',
    excludedNote:
      'Minimum income data is from <b>January 2026</b>. Countries excluded due to unclear minimum income data: {countries}.',
    loading: 'Loading data…',
    loadError: 'Could not load the data',

    source: `Source: <a target="_blank" href="https://www.missoc.org/">MISSOC</a>, <a target="_blank" href="https://ec.europa.eu/eurostat/databrowser/view/ilc_li03/default/table?lang=en">Eurostat</a> and official sources. `,
    methodology: 'To learn more, see our {link}.',
    methodologyLink: 'methodology',

    // Share/embed texts
    embedViz: 'Embed',
    copiedCode: 'Copied',

    // Accessibility texts
    shareButton: 'Share visualization',
    closeShare: 'Close share options',
    closeTooltip: 'Close detail',
    copyEmbed: 'Copy embed code',
    codeCopied: 'Code copied to clipboard',
    loadingEmbed: 'Loading code…',
    embedError: 'Error copying code',
    opensInNewWindow: '(opens in new window)',
    logoAlt: 'Civio logo',
    dataListTitle: 'Full data listing',

    // Screen reader texts
    a11y: {
      mainChart: {
        shape:
          'Dot chart showing how far the minimum income falls short of the poverty threshold, or of the severe poverty threshold, in {count} European countries and for three household types: {households}.',
        howToRead:
          'A vertical line marks the threshold: to its left, in pink, the countries that fall below it; to its right, in blue, those that go above it.',
        tableHint: 'The table at the end has the detail country by country.',
        aboveNone:
          'Against the {term}, the minimum income does not go above it in any country or household type.',
        // {countries} already starts with «in» (countryHouseholds)
        aboveList: 'Against the {term}, the minimum income only goes above it {countries}.',
        countryHouseholds: 'in {country} for {households}',
        allHouseholds: 'all households',
        aboveRange:
          'Depending on the household type, from {min} to {max} countries have a minimum income benefit above {term}.',
        aboveSame:
          'In each type of household {count} countries have a minimum income benefit above {term}.',
        focusItem: 'a {pct} for {household}',
        focusBelowList: 'In {country} the minimum income benefit is below {term}: {items}.',
        focusAboveList: 'In {country} the minimum income benefit is above {term}: {items}.',
        focusMixedList:
          'In {country}, the income benefit is above the {term} {above} and below {below}.',
        title:
          'Difference between income benefit and {term}, by household type. Negative means below and positive above the poverty line.',
        countryColumn: 'Country',
      },
      scenario: {
        householdChanged: '{household}:',
        someReach: 'below {term} in {below} of {count} countries.',
        noneReach: 'below {term} in {count} countries.',
      },
      followingList: 'The following list has all the details.',
      followingTable: 'The following table has all the details.',
    },
  },
  fr: {
  "title": "Ecart entre le <span class=\"mark-benefit\">revenu minimum</span> et le <span class=\"mark-threshold\">seuil de pauvreté</span> en Europe",
  "householdLegend": "Type de ménage",
  "household": {
    "single": "Personne seule",
    "couple": "Couple",
    "family": "Couple avec 2 enfants"
  },
  "countries": {
    "AT": "Autriche",
    "BE": "Belgique",
    "BG": "Bulgarie",
    "CY": "Chypre",
    "CZ": "Tchéquie",
    "DE": "Allemagne",
    "DK": "Danemark",
    "EE": "Estonie",
    "EL": "Grèce",
    "ES": "Espagne",
    "FI": "Finlande",
    "FR": "France",
    "HR": "Croatie",
    "HU": "Hongrie",
    "IE": "Irlande",
    "IT": "Italie",
    "LT": "Lituanie",
    "LU": "Luxembourg",
    "LV": "Lettonie",
    "MT": "Malte",
    "NL": "Pays-Bas",
    "PL": "Pologne",
    "PT": "Portugal",
    "RO": "Roumanie",
    "SE": "Suède",
    "SI": "Slovénie",
    "SK": "Slovaquie"
  },
  "noData": "Pas de données",
  "interactionHint": "Filtrez par type de ménage et par seuil, puis survolez le nom d’un pays ↓ pour afficher les chiffres.",
  "interactionHintTouch": "Filtrez par type de ménage et par seuil, puis touchez le nom d’un pays ↓ pour afficher les chiffres.",
  "householdNarrative": {
    "single": "une personne seule",
    "couple": "un couple",
    "family": "un couple avec 2 enfants"
  },
  "tooltip": {
    "benefit": "En <b>{country}</b>, <b>{household}</b> peut recevoir au maximum {amount} au titre de <i>{scheme}</i>.",
    "benefitNoScheme": "En <b>{country}</b>, <b>{household}</b> peut recevoir au maximum {amount} de revenu minimum.",
    "below": "Ce montant est <strong>inférieur de {pct}</strong> au <b>{term}</b> ({threshold}).",
    "above": "Ce montant est <strong>supérieur de {pct}</strong> au <b>{term}</b> ({threshold}).",
    "noAmount": "En <b>{country}</b>, il n’existe pas de données suffisamment claires sur le revenu minimum pour <b>{household}</b>.",
    "noThreshold": "Le <b>{term}</b> n’est pas disponible pour ce pays."
  },
  "axisTitleShortfall": "% manquants pour dépasser {reference}",
  "axisTitleSurplus": "% au-dessus de {reference}",
  "referenceNoun": {
    "poverty": "la pauvreté",
    "extreme": "la grande pauvreté"
  },
  "referenceLegend": "Seuil de référence",
  "referencePoverty": "Seuil de pauvreté",
  "referenceExtreme": "Seuil de grande pauvreté",
  "povertyTerm": "seuil de pauvreté",
  "extremeTerm": "seuil de grande pauvreté",
  "thresholdMark": "Pauvreté",
  "extremeMark": "Grande\npauvreté",
  "noRatio": "Pas de données",
  "noteLabel": "Note :",
  "thresholdNote": "Le seuil de pauvreté correspond à 60 % du revenu médian national et celui de grande pauvreté à 40 %.",
  "excludedNote": "Les données sur le revenu minimum datent de <b>janvier 2026</b>. Pays exclus faute de données suffisamment claires : {countries}.",
  "loading": "Chargement des données…",
  "loadError": "Impossible de charger les données",
  "source": "Source : <a target=\"_blank\" href=\"https://www.missoc.org/\">MISSOC</a>, <a target=\"_blank\" href=\"https://ec.europa.eu/eurostat/databrowser/view/ilc_li03/default/table?lang=en\">Eurostat</a> et sources officielles. ",
  "methodology": "Pour en savoir plus, consultez notre {link}.",
  "methodologyLink": "méthodologie",
  "embedViz": "Intégrer",
  "copiedCode": "Copié",
  "shareButton": "Partager le graphique",
  "closeShare": "Fermer les options de partage",
  "closeTooltip": "Fermer le détail",
  "copyEmbed": "Copier le code d’intégration",
  "codeCopied": "Code copié dans le presse-papiers",
  "loadingEmbed": "Chargement du code…",
  "embedError": "Impossible de copier le code",
  "opensInNewWindow": "(s’ouvre dans une nouvelle fenêtre)",
  "logoAlt": "Logo de Civio",
  "dataListTitle": "Tableau complet des données",
  "a11y": {
    "mainChart": {
      "shape": "Graphique à points indiquant l’écart entre le revenu minimum et le seuil de pauvreté ou de grande pauvreté dans {count} pays européens, pour trois types de ménages : {households}.",
      "howToRead": "Une ligne verticale matérialise le seuil : à gauche, en rose, les pays en dessous ; à droite, en bleu, ceux au-dessus.",
      "tableHint": "Le tableau à la fin présente les chiffres pays par pays.",
      "aboveNone": "Par rapport au {term}, le revenu minimum ne dépasse le seuil dans aucun pays ni pour aucun type de ménage.",
      "aboveList": "Par rapport au {term}, le revenu minimum ne dépasse le seuil que {countries}.",
      "countryHouseholds": "en {country} pour {households}",
      "allHouseholds": "tous les types de ménages",
      "aboveRange": "Selon le type de ménage, entre {min} et {max} pays versent un revenu minimum supérieur au {term}.",
      "aboveSame": "Pour chaque type de ménage, {count} pays versent un revenu minimum supérieur au {term}.",
      "focusItem": "de {pct} pour {household}",
      "focusBelowList": "En {country}, le revenu minimum est inférieur au {term} : {items}.",
      "focusAboveList": "En {country}, le revenu minimum est supérieur au {term} : {items}.",
      "focusMixedList": "En {country}, le revenu minimum dépasse le {term} {above}, mais reste en dessous {below}.",
      "title": "Écart entre revenu minimum et {term}, par type de ménage. Les valeurs négatives indiquent un montant inférieur au seuil, les positives un montant supérieur.",
      "countryColumn": "Pays"
    },
    "scenario": {
      "householdChanged": "{household} :",
      "someReach": "en dessous du {term} dans {below} pays sur {count}.",
      "noneReach": "en dessous du {term} dans {count} pays."
    },
    "followingList": "La liste suivante donne tous les détails.",
    "followingTable": "Le tableau suivant donne tous les détails."
  }
},
  it: {
  "title": "Differenza tra <span class=\"mark-benefit\">reddito minimo</span> e <span class=\"mark-threshold\">soglia di povertà</span> in Europa",
  "householdLegend": "Tipo di nucleo familiare",
  "household": {
    "single": "Persona sola",
    "couple": "Coppia",
    "family": "Coppia con 2 figli"
  },
  "countries": {
    "AT": "Austria",
    "BE": "Belgio",
    "BG": "Bulgaria",
    "CY": "Cipro",
    "CZ": "Cechia",
    "DE": "Germania",
    "DK": "Danimarca",
    "EE": "Estonia",
    "EL": "Grecia",
    "ES": "Spagna",
    "FI": "Finlandia",
    "FR": "Francia",
    "HR": "Croazia",
    "HU": "Ungheria",
    "IE": "Irlanda",
    "IT": "Italia",
    "LT": "Lituania",
    "LU": "Lussemburgo",
    "LV": "Lettonia",
    "MT": "Malta",
    "NL": "Paesi Bassi",
    "PL": "Polonia",
    "PT": "Portogallo",
    "RO": "Romania",
    "SE": "Svezia",
    "SI": "Slovenia",
    "SK": "Slovacchia"
  },
  "noData": "Dati non disponibili",
  "interactionHint": "Filtra per nucleo familiare e soglia, poi passa il mouse sul nome di un paese ↓ per vedere i dati.",
  "interactionHintTouch": "Filtra per nucleo familiare e soglia, poi tocca il nome di un paese ↓ per vedere i dati.",
  "householdNarrative": {
    "single": "una persona sola",
    "couple": "una coppia",
    "family": "una coppia con 2 figli"
  },
  "tooltip": {
    "benefit": "In <b>{country}</b>, <b>{household}</b> può ricevere al massimo {amount} attraverso il programma <i>{scheme}</i>.",
    "benefitNoScheme": "In <b>{country}</b>, <b>{household}</b> può ricevere un reddito minimo di {amount}.",
    "below": "Questo importo è <strong>inferiore del {pct}</strong> alla <b>{term}</b> ({threshold}).",
    "above": "Questo importo è <strong>superiore del {pct}</strong> alla <b>{term}</b> ({threshold}).",
    "noAmount": "In <b>{country}</b> non sono disponibili dati chiari sul reddito minimo per <b>{household}</b>.",
    "noThreshold": "La <b>{term}</b> non è disponibile per questo paese."
  },
  "axisTitleShortfall": "% mancanti per superare {reference}",
  "axisTitleSurplus": "% al di sopra di {reference}",
  "referenceNoun": {
    "poverty": "la povertà",
    "extreme": "la povertà grave"
  },
  "referenceLegend": "Soglia di riferimento",
  "referencePoverty": "Soglia di povertà",
  "referenceExtreme": "Soglia di povertà grave",
  "povertyTerm": "soglia di povertà",
  "extremeTerm": "soglia di povertà grave",
  "thresholdMark": "Povertà",
  "extremeMark": "Povertà\ngrave",
  "noRatio": "Dati non disponibili",
  "noteLabel": "Nota:",
  "thresholdNote": "La soglia di povertà corrisponde al 60% del reddito mediano nazionale e quella di povertà grave al 40%.",
  "excludedNote": "I dati sul reddito minimo risalgono a <b>gennaio 2026</b>. Paesi esclusi per mancanza di dati chiari: {countries}.",
  "loading": "Caricamento dei dati…",
  "loadError": "Impossibile caricare i dati",
  "source": "Fonte: <a target=\"_blank\" href=\"https://www.missoc.org/\">MISSOC</a>, <a target=\"_blank\" href=\"https://ec.europa.eu/eurostat/databrowser/view/ilc_li03/default/table?lang=en\">Eurostat</a> e fonti ufficiali. ",
  "methodology": "Per saperne di più, consulta la nostra {link}.",
  "methodologyLink": "metodologia",
  "embedViz": "Incorpora",
  "copiedCode": "Copiato",
  "shareButton": "Condividi il grafico",
  "closeShare": "Chiudi le opzioni di condivisione",
  "closeTooltip": "Chiudi i dettagli",
  "copyEmbed": "Copia il codice di incorporamento",
  "codeCopied": "Codice copiato negli appunti",
  "loadingEmbed": "Caricamento del codice…",
  "embedError": "Errore nella copia del codice",
  "opensInNewWindow": "(si apre in una nuova finestra)",
  "logoAlt": "Logo di Civio",
  "dataListTitle": "Tabella completa dei dati",
  "a11y": {
    "mainChart": {
      "shape": "Grafico a punti che mostra la differenza tra reddito minimo e soglia di povertà o povertà grave in {count} paesi europei, per tre tipi di nuclei familiari: {households}.",
      "howToRead": "Una linea verticale indica la soglia: a sinistra, in rosa, i paesi al di sotto; a destra, in blu, quelli al di sopra.",
      "tableHint": "La tabella finale riporta i dati paese per paese.",
      "aboveNone": "Rispetto alla {term}, il reddito minimo non supera la soglia in nessun paese e per nessun tipo di nucleo familiare.",
      "aboveList": "Rispetto alla {term}, il reddito minimo supera la soglia soltanto {countries}.",
      "countryHouseholds": "in {country} per {households}",
      "allHouseholds": "tutti i nuclei familiari",
      "aboveRange": "A seconda del nucleo familiare, da {min} a {max} paesi prevedono un reddito minimo superiore alla {term}.",
      "aboveSame": "Per ogni tipo di nucleo familiare, {count} paesi prevedono un reddito minimo superiore alla {term}.",
      "focusItem": "del {pct} per {household}",
      "focusBelowList": "In {country}, il reddito minimo è inferiore alla {term}: {items}.",
      "focusAboveList": "In {country}, il reddito minimo è superiore alla {term}: {items}.",
      "focusMixedList": "In {country}, il reddito minimo supera la {term} {above}, ma resta inferiore {below}.",
      "title": "Differenza tra reddito minimo e {term}, per tipo di nucleo familiare. I valori negativi indicano importi inferiori alla soglia, quelli positivi importi superiori.",
      "countryColumn": "Paese"
    },
    "scenario": {
      "householdChanged": "{household}:",
      "someReach": "sotto la {term} in {below} paesi su {count}.",
      "noneReach": "sotto la {term} in {count} paesi."
    },
    "followingList": "L’elenco seguente riporta tutti i dettagli.",
    "followingTable": "La tabella seguente riporta tutti i dettagli."
  }
},
};

class Lang {
  value = $state('es');

  setLang(lang) {
    this.value = texts[lang] ? lang : 'es';
  }

  texts = $derived(texts[this.value]);
  formatDecimals = $derived(formatDecimals[this.value] ?? formatDecimals['es']);
  formatIntegers = $derived(formatIntegers[this.value] ?? formatIntegers['es']);
  formatEuros = $derived(formatEuros[this.value] ?? formatEuros['es']);
}
export const vizLang = new Lang();
