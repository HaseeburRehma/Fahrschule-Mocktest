import type { Question } from './types';

/**
 * Sixth batch — scene-image questions wired 1:1 to files inside
 * /public/images/quiz/new-image/. Each entry references a unique image
 * file by name. Question text, options and explanations are ORIGINAL
 * (not copied from any catalogue) and are based on observation of the
 * referenced scene plus general German StVO rules. DE + EN are present;
 * AR / TR / RU / PL are intentionally omitted — the UI falls back to EN
 * via `pickText` until translations are added.
 *
 * Image licensing: the images themselves are 3D-rendered driving scenes
 * that look stylistically similar to the official Fragenkatalog and
 * click-learn renders. The application owner is responsible for ensuring
 * they hold a redistribution licence before shipping these to end users.
 */
const IMG = '/images/quiz/new-image/';

export const extraQuestions6: Question[] = [
  // ─────────────── Topic 1.1.02 — Verkehrszeichen / Situationen ───────────────
  {
    id: 'n6-001',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_032.jpg`,
    question: {
      de: 'Am rechten Bordstein steht ein blinder Mensch mit weißem Stock, der die Straße überqueren möchte. Wie verhalten Sie sich?',
      en: 'A blind person with a white cane is standing on the right kerb and wants to cross the road. How do you behave?'
    },
    options: [
      { id: 'a', text: { de: 'Anhalten und das Überqueren ermöglichen', en: 'Stop and let the person cross' } },
      { id: 'b', text: { de: 'Mit der Hupe auf sich aufmerksam machen', en: 'Use the horn to draw attention' } },
      { id: 'c', text: { de: 'Vorsichtig vorbeifahren, weil keine ausdrückliche Vorrangregel gilt', en: 'Carefully drive past — there is no specific priority rule' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Blinde mit weißem Stock genießen besonderen Schutz: anhalten und sicheres Queren ermöglichen, niemals hupen oder bedrängen.',
      en: 'Blind people with a white cane are specially protected: stop and allow safe crossing. Never honk or pressure them.'
    }
  },
  {
    id: 'n6-002',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_039_1.jpg`,
    question: {
      de: 'Sie nähern sich einer Einmündung in eine als „Hauptstraße" ausgeschilderte Straße. Was gilt?',
      en: 'You are approaching a junction with a road signed as "Hauptstraße" (main road). What applies?'
    },
    options: [
      { id: 'a', text: { de: 'Sie müssen den Fahrzeugen auf der Hauptstraße Vorfahrt gewähren', en: 'You must give way to vehicles on the main road' } },
      { id: 'b', text: { de: 'Sie haben Vorfahrt, weil Sie geradeaus weiterfahren', en: 'You have priority because you are going straight' } },
      { id: 'c', text: { de: 'Die Fußgänger auf dem Gehweg dürfen Sie nicht behindern', en: 'You must not obstruct pedestrians on the pavement' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Wer in eine Hauptstraße einfährt, ist wartepflichtig. Beim Einbiegen den Gehweg überqueren – Fußgängern Vorrang lassen.',
      en: 'Entering a main road means you must yield. Crossing the pavement on entry means letting pedestrians pass first.'
    }
  },
  {
    id: 'n6-003',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 5,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_041.jpg`,
    question: {
      de: 'Drei Kinder spielen mit einem Ball auf der Wohnstraße vor Ihnen. Wie reagieren Sie?',
      en: 'Three children are playing with a ball on the residential street ahead. How do you respond?'
    },
    options: [
      { id: 'a', text: { de: 'Tempo deutlich reduzieren und bremsbereit sein', en: 'Reduce speed clearly and stay ready to brake' } },
      { id: 'b', text: { de: 'Hupen, damit die Kinder zur Seite laufen', en: 'Honk so the children jump aside' } },
      { id: 'c', text: { de: 'Erst weiterfahren, wenn die Fahrbahn frei ist', en: 'Only continue once the road is clear' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Kinder handeln unberechenbar — Schrittgeschwindigkeit, bremsbereit, erst weiter, wenn frei. Hupen kann sie erschrecken.',
      en: 'Children are unpredictable — walking pace, ready to brake, only proceed once clear. Honking can scare them.'
    }
  },
  {
    id: 'n6-004',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_041_2.jpg`,
    question: {
      de: 'Sie nähern sich aus weiterer Entfernung Kindern, die auf der Straße Ball spielen. Womit müssen Sie rechnen?',
      en: 'You approach from further away children playing ball on the road. What must you anticipate?'
    },
    options: [
      { id: 'a', text: { de: 'Ein Kind läuft dem Ball unvermittelt vor Ihr Fahrzeug', en: 'A child suddenly runs after the ball in front of your car' } },
      { id: 'b', text: { de: 'Die Kinder bleiben am Rand stehen und lassen Sie passieren', en: 'The children stand at the side and let you pass' } },
      { id: 'c', text: { de: 'Andere Kinder kommen aus Hauseinfahrten hinzu', en: 'More children may appear from driveways' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Bei Kindern immer mit plötzlichem Wechsel rechnen — Geschwindigkeit so wählen, dass auch bei einem Lauf hinter den Ball rechtzeitig gehalten werden kann.',
      en: 'With children always expect sudden movement — choose a speed that lets you stop in time if one chases the ball.'
    }
  },
  {
    id: 'n6-005',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_042.jpg`,
    question: {
      de: 'Zwei Kinder überqueren vor Ihnen die Wohnstraße. Wie verhalten Sie sich?',
      en: 'Two children are crossing the residential street ahead of you. How do you behave?'
    },
    options: [
      { id: 'a', text: { de: 'Anhalten und die Kinder sicher queren lassen', en: 'Stop and let the children cross safely' } },
      { id: 'b', text: { de: 'Mit unverminderter Geschwindigkeit weiterfahren', en: 'Continue at unchanged speed' } },
      { id: 'c', text: { de: 'Mit weiteren, plötzlich querenden Personen rechnen', en: 'Anticipate additional people crossing suddenly' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'In Wohngebieten genießen Fußgänger besonderen Schutz — anhalten, Blickkontakt suchen, mit Nachzüglern rechnen.',
      en: 'In residential areas pedestrians enjoy special protection — stop, seek eye contact, expect more crossers.'
    }
  },
  {
    id: 'n6-006',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 5,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_119.jpg`,
    question: {
      de: 'Rechts steht eine durchgehende Reihe parkender Fahrzeuge, ein kleines Kind tritt mit seinem Spielzeugrad zwischen den Autos hervor. Wie reagieren Sie?',
      en: 'A continuous row of parked vehicles is on the right and a small child is stepping out between them with a toy bike. How do you respond?'
    },
    options: [
      { id: 'a', text: { de: 'Sofort stark abbremsen und notfalls anhalten', en: 'Brake hard immediately and stop if necessary' } },
      { id: 'b', text: { de: 'Etwas weiter links fahren, um Abstand zu vergrößern', en: 'Move slightly further left to widen the gap' } },
      { id: 'c', text: { de: 'Beschleunigen, um den gefährdeten Bereich schnell zu verlassen', en: 'Accelerate to leave the danger zone quickly' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Zwischen parkenden Autos können Kinder jederzeit auftauchen — Bremsen und Seitenabstand vergrößern. Beschleunigen wäre falsch.',
      en: 'Children can appear at any moment between parked cars — brake and widen lateral clearance. Accelerating is wrong.'
    }
  },
  {
    id: 'n6-007',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_121_1.jpg`,
    question: {
      de: 'Sie nähern sich einem mit Verkehrszeichen markierten Fußgängerüberweg. Welche Pflichten haben Sie?',
      en: 'You approach a marked pedestrian crossing indicated by a road sign. What duties apply?'
    },
    options: [
      { id: 'a', text: { de: 'Tempo so anpassen, dass Sie notfalls anhalten können', en: 'Adjust speed so you can stop if necessary' } },
      { id: 'b', text: { de: 'Fußgängern, die queren wollen, das Überqueren ermöglichen', en: 'Allow pedestrians who want to cross to do so' } },
      { id: 'c', text: { de: 'Auf dem Überweg überholen ist erlaubt', en: 'Overtaking on the crossing is permitted' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Am Zebrastreifen gilt Vorrang für querungswillige Fußgänger; Überholen direkt vor und auf dem Überweg ist verboten.',
      en: 'At a zebra crossing pedestrians wanting to cross have priority; overtaking on or right before the crossing is forbidden.'
    }
  },
  {
    id: 'n6-008',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_123.jpg`,
    question: {
      de: 'An einer Kreuzung mit vorgeschriebener Fahrtrichtung „rechts" fahren Sie hinter einem großen Lkw, ein Radfahrer befindet sich zwischen Ihnen und dem Lkw. Was ist zu beachten?',
      en: 'At a junction with mandatory direction "right" you are behind a large truck and a cyclist is between you and the truck. What must you observe?'
    },
    options: [
      { id: 'a', text: { de: 'Der Radfahrer darf vom Lkw beim Abbiegen übersehen werden', en: 'The truck driver may overlook the cyclist when turning' } },
      { id: 'b', text: { de: 'Großen Sicherheitsabstand zum Lkw halten und nicht zwischen Lkw und Bordstein einfahren', en: 'Keep wide clearance to the truck and do not move between the truck and the kerb' } },
      { id: 'c', text: { de: 'Den Radfahrer rechts überholen, um Zeit zu sparen', en: 'Overtake the cyclist on the right to save time' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Toter Winkel beim abbiegenden Lkw ist Lebensgefahr für Radfahrer. Niemals rechts daneben aufrücken, ausreichend Abstand halten.',
      en: 'A turning truck\'s blind spot is deadly for cyclists. Never pull alongside on the right; keep ample clearance.'
    }
  },
  {
    id: 'n6-009',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_131.jpg`,
    question: {
      de: 'Sie fahren durch eine enge, beidseitig zugeparkte Innenstadtstraße mit Radfahrern und Fußgängern. Worauf stellen Sie sich ein?',
      en: 'You drive through a narrow inner-city street with cars parked on both sides plus cyclists and pedestrians. What do you prepare for?'
    },
    options: [
      { id: 'a', text: { de: 'Sich öffnende Autotüren auf beiden Seiten', en: 'Car doors opening on both sides' } },
      { id: 'b', text: { de: 'Plötzlich aussteigende oder querende Personen', en: 'People stepping out or crossing suddenly' } },
      { id: 'c', text: { de: 'Dass kein Sicherheitsabstand zu den Radfahrern nötig ist', en: 'That no safety distance to cyclists is required' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Im dichten innerstädtischen Verkehr sind verdeckte Fußgänger und Türen die häufigsten Gefahren — Tempo raus, breiter Seitenabstand.',
      en: 'In dense city traffic hidden pedestrians and doors are the main risks — slow down, keep wide lateral distance.'
    }
  },
  {
    id: 'n6-010',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_02_132.jpg`,
    question: {
      de: 'Vor Ihnen steht ein PKW mit Wohnwagen-Anhänger am Straßenrand, ein Motorradfahrer hält im Verkehr, eine Person tritt vom Bordstein. Was ist richtig?',
      en: 'A car with caravan trailer is on the kerb ahead, a motorbike is stopped in traffic and a person is stepping off the kerb. What is correct?'
    },
    options: [
      { id: 'a', text: { de: 'Tempo reduzieren und mit weiteren Hindernissen rechnen', en: 'Reduce speed and anticipate more obstacles' } },
      { id: 'b', text: { de: 'Mit ausreichend Seitenabstand am Anhänger vorbeifahren', en: 'Pass the trailer with adequate lateral distance' } },
      { id: 'c', text: { de: 'Den Motorradfahrer ohne Spurwechsel überholen', en: 'Overtake the motorbike without changing lane' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Komplexe Innerortssituation: Tempo runter, Seitenabstand vergrößern, Spurwechsel nur, wenn sicher.',
      en: 'Complex urban situation: slow down, widen clearance, change lane only when safe.'
    }
  },

  // ─────────────── Topic 1.1.03 — Verkehrseinrichtungen / Witterung ───────────
  {
    id: 'n6-011',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.03',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_03_112_1.jpg`,
    question: {
      de: 'Bei Schneefall und glatter Fahrbahn nähern Sie sich einer Kreuzung mit Fußgängerüberwegen. Wie passen Sie Ihre Fahrweise an?',
      en: 'In snowfall on a slippery road you approach a junction with pedestrian crossings. How do you adapt your driving?'
    },
    options: [
      { id: 'a', text: { de: 'Bremsweg wird länger – deutlich früher und sanft bremsen', en: 'Braking distance is longer — brake earlier and gently' } },
      { id: 'b', text: { de: 'Größeren Abstand zum Vordermann halten', en: 'Keep greater distance to the vehicle ahead' } },
      { id: 'c', text: { de: 'Bei Schnee gleiches Tempo wie bei trockener Fahrbahn', en: 'Same speed on snow as on dry road' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schnee verlängert den Brems- und Anhalteweg vielfach. Tempo deutlich reduzieren, Abstand vergrößern, sanft bremsen.',
      en: 'Snow lengthens braking distance several-fold. Cut speed sharply, widen gap, brake gently.'
    }
  },
  {
    id: 'n6-012',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.03',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_03_114.jpg`,
    question: {
      de: 'Sie fahren auf einer Landstraße mit nassem, teilweise schadhaftem Belag in eine leichte Rechtskurve. Welche Maßnahmen sind richtig?',
      en: 'On a rural road with wet, partly damaged surface you approach a gentle right-hand bend. Which actions are correct?'
    },
    options: [
      { id: 'a', text: { de: 'Schon vor der Kurve Tempo reduzieren', en: 'Reduce speed before the bend' } },
      { id: 'b', text: { de: 'In der Kurve nicht ruckartig bremsen oder beschleunigen', en: 'Do not brake or accelerate abruptly within the bend' } },
      { id: 'c', text: { de: 'Auf die linke Fahrbahnhälfte ausweichen', en: 'Move onto the left half of the road' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Bei Nässe und Schadstellen reduziert sich die Reifenhaftung. Vor der Kurve verzögern und gleichmäßig durchfahren.',
      en: 'Wet and damaged surface reduces grip. Slow before the bend and drive through evenly.'
    }
  },
  {
    id: 'n6-013',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.03',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_03_116.jpg`,
    question: {
      de: 'Sie nähern sich bei Schnee einer Kreuzung in der Stadt, der Boden ist verschneit. Was ist zu beachten?',
      en: 'You approach a snow-covered city junction. What do you observe?'
    },
    options: [
      { id: 'a', text: { de: 'Bremsweg kann sich vervielfachen', en: 'Braking distance may multiply' } },
      { id: 'b', text: { de: 'Fahrbahnmarkierungen können unsichtbar sein', en: 'Road markings may be invisible' } },
      { id: 'c', text: { de: 'Sie dürfen schneller fahren, weil Schnee dämpft', en: 'You may drive faster because snow cushions' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schnee verbirgt Markierungen und verdoppelt/verdreifacht den Bremsweg. Sehr langsam, sehr früh bremsen.',
      en: 'Snow hides markings and doubles or triples braking distance. Drive very slowly and brake very early.'
    }
  },

  // ─────────────── Topic 1.1.04 — Sehen bei Nacht ─────────────────────────────
  {
    id: 'n6-014',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.04',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_04_103.jpg`,
    question: {
      de: 'Sie werden bei Nacht durch das Fernlicht eines entgegenkommenden Fahrzeugs geblendet. Wie reagieren Sie?',
      en: 'You are dazzled at night by an oncoming vehicle\'s high beam. How do you react?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit reduzieren und nach rechts auf den Fahrbahnrand schauen', en: 'Reduce speed and look at the right-hand edge of the road' } },
      { id: 'b', text: { de: 'Notfalls anhalten, bis Sie wieder klar sehen', en: 'If necessary stop until you can see clearly again' } },
      { id: 'c', text: { de: 'Selbst auf Fernlicht schalten, um zurückzublenden', en: 'Switch to your own high beam to dazzle back' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Geblendet: Tempo raus, Blick rechts auf den Rand, im Zweifel anhalten. Zurückblenden ist verboten und gefährlich.',
      en: 'When dazzled: slow down, look at the right edge, stop if unsure. Dazzling back is forbidden and dangerous.'
    }
  },
  {
    id: 'n6-015',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.04',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_04_107.jpg`,
    question: {
      de: 'In einer Innenstadt fahren Sie nachts an grell beleuchteten Geschäften und Leuchtreklamen vorbei. Welche Risiken bestehen?',
      en: 'At night you drive through a city with bright shop and neon signs. What risks arise?'
    },
    options: [
      { id: 'a', text: { de: 'Fußgänger und Hindernisse verschwinden im Schatten neben den hellen Lichtern', en: 'Pedestrians and obstacles disappear in shadows next to bright lights' } },
      { id: 'b', text: { de: 'Verkehrszeichen können schlechter erkennbar sein', en: 'Traffic signs may be harder to recognise' } },
      { id: 'c', text: { de: 'Sie dürfen das Tempo erhöhen, weil die Straße gut ausgeleuchtet wirkt', en: 'You may raise speed because the street looks well lit' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Helle Lichter erzeugen tiefe Schattenbereiche. Tempo nicht erhöhen, aufmerksam bleiben.',
      en: 'Bright lights create deep shadows. Do not raise speed; stay attentive.'
    }
  },
  {
    id: 'n6-016',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.1.04',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_04_108.jpg`,
    question: {
      de: 'Sie fahren nachts an einer langen Reihe parkender Fahrzeuge entlang. Warum ist hier besondere Vorsicht geboten?',
      en: 'You drive at night past a long row of parked vehicles. Why is special caution required?'
    },
    options: [
      { id: 'a', text: { de: 'Personen können in dunklen Lücken nicht oder spät erkannt werden', en: 'People in dark gaps are seen late or not at all' } },
      { id: 'b', text: { de: 'Türen können unerwartet aufgehen', en: 'Doors can open unexpectedly' } },
      { id: 'c', text: { de: 'Bei Nacht gilt Sicherheitsabstand nicht', en: 'Safety distance does not apply at night' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Nachts gelten dieselben Regeln, aber Sichtweite ist kürzer. Genug Abstand zu parkenden Autos halten, Tempo anpassen.',
      en: 'Same rules apply at night, but visibility is shorter. Keep distance to parked vehicles, adjust speed.'
    }
  },
  {
    id: 'n6-017',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.04',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_04_111.jpg`,
    question: {
      de: 'In der Dämmerung folgen Sie auf einer Landstraße einem Traktor, der von hinten von der tief stehenden Sonne angestrahlt wird. Was tun Sie?',
      en: 'At dusk on a rural road you follow a tractor lit from behind by the low sun. What do you do?'
    },
    options: [
      { id: 'a', text: { de: 'Abblendlicht einschalten, um besser gesehen zu werden', en: 'Switch on dipped beam to be seen better' } },
      { id: 'b', text: { de: 'Ausreichend Abstand halten und Tempo reduzieren', en: 'Keep ample distance and reduce speed' } },
      { id: 'c', text: { de: 'Sofort überholen, sobald die Sonne blendet', en: 'Overtake immediately as soon as the sun dazzles' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Gegenlicht reduziert Sicht und Reaktion. Abblendlicht zur eigenen Sichtbarkeit, Abstand vergrößern, nicht überstürzt überholen.',
      en: 'Backlight reduces vision. Turn on dipped beam for visibility, widen gap, do not rush an overtake.'
    }
  },

  // ─────────────── Topic 1.1.05 — Abstand / Begegnung ────────────────────────
  {
    id: 'n6-018',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.05',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_05_107_2.jpg`,
    question: {
      de: 'Sie fahren durch eine schmale Ortsdurchfahrt mit Gegenverkehr. Wie verhalten Sie sich?',
      en: 'You drive through a narrow village road with oncoming traffic. How do you behave?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit reduzieren und bei Bedarf am rechten Rand anhalten', en: 'Reduce speed and pull right or stop if needed' } },
      { id: 'b', text: { de: 'Den Sicherheitsabstand nach vorn vergrößern', en: 'Widen the gap to the vehicle ahead' } },
      { id: 'c', text: { de: 'Auf der Mitte fahren, um besser zu sehen', en: 'Drive on the middle of the road for better view' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Im Ortsdurchgang ist die Fahrbahn schmal — auf der eigenen Spur bleiben, langsamer fahren, größeren Abstand.',
      en: 'On narrow village roads stay on your side, slow down, widen the gap.'
    }
  },

  // ─────────────── Topic 1.1.06 — Andere Verkehrsteilnehmer ───────────────────
  {
    id: 'n6-019',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.06',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_06_005.jpg`,
    question: {
      de: 'Zwei Radfahrer fahren auf der Fahrbahn hintereinander vor Ihnen. Wie überholen Sie korrekt?',
      en: 'Two cyclists are riding one behind the other on the carriageway ahead of you. How do you overtake correctly?'
    },
    options: [
      { id: 'a', text: { de: 'Innerorts mindestens 1,5 m Seitenabstand einhalten', en: 'In town keep at least 1.5 m lateral distance' } },
      { id: 'b', text: { de: 'Außerorts mindestens 2,0 m Seitenabstand einhalten', en: 'Outside town keep at least 2.0 m lateral distance' } },
      { id: 'c', text: { de: 'Knapp überholen, weil der Gegenverkehr keinen Platz lässt', en: 'Overtake closely because oncoming traffic leaves no room' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Mindestabstand zum Rad: 1,5 m innerorts, 2 m außerorts. Reicht der Platz nicht, dahinter bleiben.',
      en: 'Minimum cyclist distance: 1.5 m in town, 2 m outside. If there is no room, stay behind.'
    }
  },

  // ─────────────── Topic 1.1.07 — Vorfahrt / Verkehrsregelung ────────────────
  {
    id: 'n6-020',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_006.jpg`,
    question: {
      de: 'Sie fahren auf einer Vorfahrtstraße („Hauptstraße"). Von links kommt aus einer Seitenstraße ein PKW. Wer hat Vorfahrt?',
      en: 'You are on a priority road ("Hauptstraße") and a car emerges from a side street on the left. Who has priority?'
    },
    options: [
      { id: 'a', text: { de: 'Sie haben Vorfahrt', en: 'You have priority' } },
      { id: 'b', text: { de: 'Der einbiegende PKW hat Vorfahrt, weil er von links kommt', en: 'The car has priority because it comes from the left' } },
      { id: 'c', text: { de: 'Vorfahrt nur, wenn Sie blinken', en: 'You only have priority if you indicate' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auf einer Vorfahrtstraße haben Sie Vorrang vor Fahrzeugen aus untergeordneten Seitenstraßen — unabhängig vom Blinker.',
      en: 'On a priority road you take precedence over vehicles from subordinate side streets — regardless of indicators.'
    }
  },
  {
    id: 'n6-021',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_014.jpg`,
    question: {
      de: 'Eine rote Leitlinie führt von Ihrer Spur in eine Seitenstraße. Was bedeutet sie?',
      en: 'A red guide line leads from your lane into a side street. What does it mean?'
    },
    options: [
      { id: 'a', text: { de: 'Sie zeigt die vorgesehene Fahrlinie für Abbieger', en: 'It shows the intended driving line for turning vehicles' } },
      { id: 'b', text: { de: 'Sie ist eine Verbotsmarkierung — Abbiegen untersagt', en: 'It is a prohibition marking — turning forbidden' } },
      { id: 'c', text: { de: 'Sie hebt die Vorfahrtregel auf', en: 'It overrides the right-of-way rule' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Farbige Hilfslinien führen Fahrzeuge sicher durch unübersichtliche Stellen — sie geben die empfohlene Fahrlinie an.',
      en: 'Coloured guide lines lead vehicles safely through tricky spots — they show the recommended driving line.'
    }
  },
  {
    id: 'n6-022',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_020.jpg`,
    question: {
      de: 'Auf der vierspurigen Straße endet rechts ein für Radfahrer freigegebener Gehweg. Womit müssen Sie rechnen?',
      en: 'On the four-lane road a footpath shared with cyclists ends on the right. What must you anticipate?'
    },
    options: [
      { id: 'a', text: { de: 'Radfahrer wechseln auf die Fahrbahn', en: 'Cyclists move onto the carriageway' } },
      { id: 'b', text: { de: 'Sie müssen auf die linke Fahrspur wechseln, um die Radfahrer zu meiden', en: 'You must change to the left lane to avoid the cyclists' } },
      { id: 'c', text: { de: 'Sicherheitsabstand nach rechts vergrößern', en: 'Widen the lateral gap to the right' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Endet ein gemeinsamer Geh-/Radweg, fahren Radler weiter auf der Straße — Abstand und Aufmerksamkeit nach rechts erhöhen.',
      en: 'When a shared path ends cyclists continue on the road — increase right-side distance and attention.'
    }
  },
  {
    id: 'n6-023',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_020_1.jpg`,
    question: {
      de: 'Sie überholen eine Radfahrerin auf der rechts begleitenden Radwegfurt. Was beachten Sie besonders?',
      en: 'You overtake a female cyclist on the cycle path accompanying the right side. What do you particularly observe?'
    },
    options: [
      { id: 'a', text: { de: 'Beim Rechtsabbiegen erst nach Schulterblick und gewährtem Vorrang abbiegen', en: 'When turning right, only turn after a shoulder check and giving way to her' } },
      { id: 'b', text: { de: 'Sicherheitsabstand entsprechend Tempo wählen', en: 'Choose lateral distance based on your speed' } },
      { id: 'c', text: { de: 'Radfahrerin hat hier keinen Vorrang', en: 'The cyclist has no priority here' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Beim Rechtsabbiegen hat geradeaus fahrender Radverkehr Vorrang — immer Schulterblick und ausreichend Abstand.',
      en: 'When turning right cyclists going straight have priority — always shoulder-check and keep enough distance.'
    }
  },
  {
    id: 'n6-024',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_103_1.jpg`,
    question: {
      de: 'Sie fahren auf einer schmalen Landstraße mit Bäumen und nähern sich einer Kuppe mit eingeschränkter Sicht. Wie verhalten Sie sich?',
      en: 'On a narrow tree-lined rural road you approach a crest with limited visibility. How do you behave?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit so wählen, dass Sie auf Sichtweite halten können', en: 'Choose speed so you can stop within visible distance' } },
      { id: 'b', text: { de: 'Nicht überholen — vor und auf der Kuppe ist es verboten', en: 'Do not overtake — forbidden on and before a crest' } },
      { id: 'c', text: { de: 'Linke Fahrbahnseite nutzen, um besser zu sehen', en: 'Use the left lane for better view' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Vor unübersichtlichen Kuppen ist Überholen verboten und immer auf Sicht zu halten. Mitte oder links zu fahren ist gefährlich.',
      en: 'On crests with limited view overtaking is forbidden; always drive within sight. Driving in the middle or left is dangerous.'
    }
  },
  {
    id: 'n6-025',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_137.jpg`,
    question: {
      de: 'Auf einer dreispurigen Straße zeigt Ihre Spur die vorgeschriebene Fahrtrichtung „geradeaus oder rechts". Was bedeutet das?',
      en: 'On a three-lane road your lane shows mandatory direction "straight or right". What does that mean?'
    },
    options: [
      { id: 'a', text: { de: 'Sie dürfen aus dieser Spur nur geradeaus oder rechts fahren', en: 'From this lane you may only go straight or turn right' } },
      { id: 'b', text: { de: 'Sie dürfen auch links abbiegen, sofern Sie blinken', en: 'You may also turn left if you indicate' } },
      { id: 'c', text: { de: 'Geradeausfahrer haben Vorrang vor Rechtsabbiegern in derselben Spur', en: 'Drivers going straight take priority over right-turners in the same lane' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Pfeilmarkierungen sind bindend — nur die angegebene Richtung ist zulässig. Andere Richtungen erfordern Spurwechsel rechtzeitig vor der Kreuzung.',
      en: 'Arrow markings are binding — only the indicated direction is allowed. Other directions need a lane change before the junction.'
    }
  },
  {
    id: 'n6-026',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_139.jpg`,
    question: {
      de: 'Vor Ihnen fährt ein Motorrad auf einer verschneiten, glatten Innerortsstraße. Welcher Abstand ist richtig?',
      en: 'A motorbike rides ahead of you on a snowy, slippery urban road. What distance is appropriate?'
    },
    options: [
      { id: 'a', text: { de: 'Größer als bei trockener Fahrbahn — Bremsweg ist länger', en: 'Greater than on dry road — braking distance is longer' } },
      { id: 'b', text: { de: 'Ein Sicherheitsabstand ist hier nicht nötig', en: 'A safety gap is not necessary here' } },
      { id: 'c', text: { de: 'Mindestens den doppelten Anhalteweg einplanen', en: 'Plan at least double the stopping distance' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Auf Schnee und Eis muss der Sicherheitsabstand mehrfach vergrößert werden, sonst droht Auffahrunfall.',
      en: 'On snow and ice the safety gap must be increased several-fold, otherwise a rear-end collision is likely.'
    }
  },
  {
    id: 'n6-027',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 5,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_159_1.jpg`,
    question: {
      de: 'Sie sehen das Schild „Schulbushaltestelle" (P mit Kindersymbol) auf einer Landstraße. Womit müssen Sie rechnen?',
      en: 'On a rural road you see the "School bus stop" sign (P with child symbol). What must you anticipate?'
    },
    options: [
      { id: 'a', text: { de: 'Querende Kinder', en: 'Children crossing the road' } },
      { id: 'b', text: { de: 'Plötzlich anfahrender Schulbus', en: 'A school bus suddenly pulling out' } },
      { id: 'c', text: { de: 'Dass dort keine besonderen Risiken bestehen', en: 'That there are no special risks there' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Im Bereich von Schulbushaltestellen mit Kindern und anfahrenden Bussen rechnen — Tempo deutlich reduzieren.',
      en: 'Near school bus stops expect crossing children and pulling-away buses — cut speed clearly.'
    }
  },
  {
    id: 'n6-028',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_162.jpg`,
    question: {
      de: 'In der Stadt überquert eine Person seitlich die Straße zwischen einer Straßenbahnschiene und Ihrem Fahrzeug. Wie reagieren Sie?',
      en: 'In the city a person crosses the road sideways between a tram track and your vehicle. How do you react?'
    },
    options: [
      { id: 'a', text: { de: 'Tempo deutlich reduzieren, bremsbereit', en: 'Reduce speed clearly, ready to brake' } },
      { id: 'b', text: { de: 'Notbremsung machen, ohne den Hintermann zu beachten', en: 'Emergency-brake without regard for the vehicle behind' } },
      { id: 'c', text: { de: 'Mit weiteren Personen aus derselben Lücke rechnen', en: 'Anticipate more people from the same gap' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Personen tauchen oft in Gruppen aus Lücken auf — Tempo raus, mit Folgegruppen rechnen. Notbremsung gefährdet Hintermänner.',
      en: 'People often appear in groups from gaps — slow down, expect more. Emergency braking endangers vehicles behind.'
    }
  },
  {
    id: 'n6-029',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 5,
    topicCode: '1.1.07',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_1_07_162_1.jpg`,
    question: {
      de: 'Eine Straßenbahn nähert sich von vorne, gleichzeitig läuft eine Person zwischen Ihnen und der Bahn über die Straße. Was ist richtig?',
      en: 'A tram is approaching from the front while a person crosses the road between you and the tram. What is correct?'
    },
    options: [
      { id: 'a', text: { de: 'Anhalten und der Person das Queren ermöglichen', en: 'Stop and allow the person to cross' } },
      { id: 'b', text: { de: 'Erst weiterfahren, wenn die Fahrbahn klar ist', en: 'Only continue when the road is clear' } },
      { id: 'c', text: { de: 'Die Straßenbahn darf gefährdet werden', en: 'You may endanger the tram' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Querende Fußgänger haben Vorrang vor Ihrer Weiterfahrt — anhalten, warten, dann weiter, ohne andere zu behindern.',
      en: 'Crossing pedestrians take priority over your continued travel — stop, wait, then go without obstructing others.'
    }
  },

  // ─────────────── Topic 1.2.09 — Halten / Parken / Vorrang an Kreuzungen ────
  {
    id: 'n6-030',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.2.09',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_09_104.jpg`,
    question: {
      de: 'An einer Kreuzung ist die Querstraße rechts angedeutet (Vorfahrtsschild plus Pfeil rechts). Wer hat Vorfahrt?',
      en: 'At a junction a side road from the right is indicated (priority sign with right-arrow). Who has priority?'
    },
    options: [
      { id: 'a', text: { de: 'Sie auf der Vorfahrtstraße haben Vorrang', en: 'You on the priority road have right of way' } },
      { id: 'b', text: { de: 'Die Fahrzeuge aus der Seitenstraße müssen warten', en: 'Vehicles from the side street must wait' } },
      { id: 'c', text: { de: 'Es gilt rechts vor links', en: '"Right before left" applies' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Zeichen markiert den Hauptstraßenverlauf. Wer einmündet, muss warten.',
      en: 'The sign marks the main-road run. Anyone joining must wait.'
    }
  },
  {
    id: 'n6-031',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.2.09',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_09_113_1.jpg`,
    question: {
      de: 'Sie wollen an einer Kreuzung mit Vorfahrtstraße nach links abbiegen, ein Motorrad kommt entgegen. Wie verhalten Sie sich?',
      en: 'You want to turn left at a priority-road junction while a motorbike approaches. How do you behave?'
    },
    options: [
      { id: 'a', text: { de: 'Dem entgegenkommenden Motorrad Vorrang lassen', en: 'Give way to the oncoming motorbike' } },
      { id: 'b', text: { de: 'Erst einordnen und blinken, dann beim sicheren Abbiegen', en: 'First take position and indicate, then turn when safe' } },
      { id: 'c', text: { de: 'Schnell vor dem Motorrad einbiegen', en: 'Cut in front of the motorbike quickly' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Linksabbieger müssen dem Gegenverkehr Vorrang lassen — Geschwindigkeit von Motorrädern wird oft unterschätzt.',
      en: 'Left-turners must yield to oncoming traffic — motorcycle speed is often underestimated.'
    }
  },
  {
    id: 'n6-032',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.2.09',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_09_131_1.jpg`,
    question: {
      de: 'Auf einer Vorfahrtstraße nähert sich rechts ein Radfahrer aus einer Seitenstraße. Wer hat Vorrang?',
      en: 'On a priority road a cyclist approaches from a side road on the right. Who has right of way?'
    },
    options: [
      { id: 'a', text: { de: 'Sie haben Vorrang', en: 'You have priority' } },
      { id: 'b', text: { de: 'Der Radfahrer, da er von rechts kommt', en: 'The cyclist, because they come from the right' } },
      { id: 'c', text: { de: 'Trotzdem sollten Sie bremsbereit sein', en: 'Even so you should be ready to brake' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Vorfahrtstraße schlägt „rechts vor links". Trotzdem mit Fehlverhalten anderer rechnen.',
      en: 'A priority road overrides the "right-before-left" rule, but stay prepared for others\' mistakes.'
    }
  },

  // ─────────────── Topic 1.2.12 — Eigen- und Fremdgefährdung ─────────────────
  {
    id: 'n6-033',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.12',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_12_121.jpg`,
    question: {
      de: 'Ein PKW hat im Bereich einer Bushaltestelle geparkt. Welche Folgen kann das haben?',
      en: 'A car has parked in the area of a bus stop. What consequences can this have?'
    },
    options: [
      { id: 'a', text: { de: 'Der Bus kann nicht ordnungsgemäß halten und Fahrgäste sind gefährdet', en: 'The bus cannot stop properly and passengers are endangered' } },
      { id: 'b', text: { de: 'Ein Bußgeld kann verhängt werden', en: 'A fine can be imposed' } },
      { id: 'c', text: { de: 'Parken an Bushaltestellen ist unkritisch', en: 'Parking at bus stops is harmless' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'An Bushaltestellen (15 m beidseitig vom Schild) ist Parken verboten — Fahrgäste und Fahrplan werden gefährdet.',
      en: 'Parking is forbidden 15 m either side of a bus stop sign — passengers and schedules are at risk.'
    }
  },
  {
    id: 'n6-034',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.12',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_12_123_1.jpg`,
    question: {
      de: 'Wo dürfen Sie keinesfalls parken?',
      en: 'Where may you never park?'
    },
    options: [
      { id: 'a', text: { de: 'Auf Geh- und Radwegen, sofern es nicht ausdrücklich erlaubt ist', en: 'On pavements and cycle paths unless expressly permitted' } },
      { id: 'b', text: { de: 'Vor abgesenkten Bordsteinen für Rollstuhlfahrer', en: 'In front of dropped kerbs for wheelchair users' } },
      { id: 'c', text: { de: 'Auf gekennzeichneten Parkplätzen', en: 'On marked parking bays' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Gehwege, Radwege, abgesenkte Bordsteine, Feuerwehrzufahrten — überall, wo andere behindert werden, ist Parken verboten.',
      en: 'Pavements, cycle paths, dropped kerbs, fire-access lanes — anywhere that hinders others is forbidden for parking.'
    }
  },
  {
    id: 'n6-035',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.12',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_12_126_1.jpg`,
    question: {
      de: 'Wann gefährden Sie andere Verkehrsteilnehmer durch Ihr Parkverhalten besonders?',
      en: 'When does your parking particularly endanger other road users?'
    },
    options: [
      { id: 'a', text: { de: 'Wenn Sicht auf Fußgängerüberwege verdeckt wird', en: 'When you block sight onto pedestrian crossings' } },
      { id: 'b', text: { de: 'Wenn Radfahrer auf die Fahrbahn ausweichen müssen', en: 'When cyclists must swerve onto the carriageway' } },
      { id: 'c', text: { de: 'Wenn Sie länger als eine Stunde parken', en: 'When you park longer than one hour' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Sichtbehinderungen und Zwang zum Ausweichen erzeugen direkte Gefahr. Reine Standzeit ist nicht der Punkt.',
      en: 'Sight blockage and forcing others to swerve cause direct danger. Duration alone is not the issue.'
    }
  },

  // ─────────────── Topic 1.2.20 — Schäden / Bus an Haltestelle ────────────────
  {
    id: 'n6-036',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.2.20',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_20_108_1.jpg`,
    question: {
      de: 'Sie sehen einen haltenden Linienbus an einer Haltestelle. Wie verhalten Sie sich beim Vorbeifahren?',
      en: 'You see a stopped bus at a bus stop. How do you pass it?'
    },
    options: [
      { id: 'a', text: { de: 'Schrittgeschwindigkeit und ausreichend Seitenabstand', en: 'Walking pace and sufficient lateral distance' } },
      { id: 'b', text: { de: 'Mit Warnblinker des Busses: anhalten oder Schrittgeschwindigkeit', en: 'When the bus has hazard lights on: stop or walking pace' } },
      { id: 'c', text: { de: 'Normales Tempo ist erlaubt, weil keine Personen sichtbar sind', en: 'Normal speed is allowed because no people are visible' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Am haltenden Bus ist Schrittgeschwindigkeit Pflicht; mit Warnblinker dürfen Sie nur in Schrittgeschwindigkeit und mit Abstand vorbei.',
      en: 'At a stopped bus walking pace is mandatory; with hazard lights only pass at walking pace with clearance.'
    }
  },
  {
    id: 'n6-037',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.2.20',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_20_108_2.jpg`,
    question: {
      de: 'Ein Linienbus hält rechts an der Haltestelle. Aus seiner Sicht steigen Fahrgäste aus. Was ist verboten?',
      en: 'A bus stops on the right at a stop and passengers alight on its side. What is forbidden?'
    },
    options: [
      { id: 'a', text: { de: 'Fahrgäste behindern oder gefährden', en: 'Obstructing or endangering passengers' } },
      { id: 'b', text: { de: 'Hupen, um den Verkehr zu beschleunigen', en: 'Honking to speed up the traffic' } },
      { id: 'c', text: { de: 'Den Bus mit Schrittgeschwindigkeit zu passieren', en: 'Passing the bus at walking pace' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Behinderung oder Gefährdung von Fahrgästen ist verboten. Hupen ist hier weder geboten noch zulässig.',
      en: 'Obstructing or endangering passengers is forbidden. Honking is neither required nor permitted here.'
    }
  },

  // ─────────────── Topic 1.2.26 — Wirtschaftliches / Umweltbewusstes Fahren ──
  {
    id: 'n6-038',
    category: 'environment',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.26',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_26_009_1.jpg`,
    question: {
      de: 'Welche Fahrweise spart Kraftstoff und schont die Umwelt?',
      en: 'Which driving style saves fuel and protects the environment?'
    },
    options: [
      { id: 'a', text: { de: 'Vorausschauend fahren und unnötiges Bremsen vermeiden', en: 'Drive with anticipation and avoid unnecessary braking' } },
      { id: 'b', text: { de: 'Früh hochschalten und im hohen Gang fahren', en: 'Shift up early and drive in a high gear' } },
      { id: 'c', text: { de: 'Hohe Drehzahlen halten, um den Motor warm zu fahren', en: 'Keep high revs to warm the engine up' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Voraussicht reduziert Beschleunigungs- und Bremsspitzen, frühes Hochschalten spart Sprit.',
      en: 'Anticipation reduces accel/brake peaks; shifting up early saves fuel.'
    }
  },
  {
    id: 'n6-039',
    category: 'environment',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.26',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_26_009_2.jpg`,
    question: {
      de: 'Sie stehen länger an einer Ampel. Was ist umweltbewusst?',
      en: 'You stand at a traffic light for some time. What is environmentally conscious?'
    },
    options: [
      { id: 'a', text: { de: 'Motor abstellen, wenn der Halt länger dauert', en: 'Switch the engine off when the wait is longer' } },
      { id: 'b', text: { de: 'Im Leerlauf hochdrehen, um den Katalysator zu erhitzen', en: 'Rev the engine in neutral to heat the catalytic converter' } },
      { id: 'c', text: { de: 'Bei Start-Stopp-Automatik einfach laufen lassen', en: 'With start-stop simply let it run' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Längere Standzeiten ohne Bewegung erzeugen unnötige Emissionen — Motor aus.',
      en: 'Idling without movement creates unnecessary emissions — switch off.'
    }
  },
  {
    id: 'n6-040',
    category: 'environment',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.26',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_26_010_1.jpg`,
    question: {
      de: 'In einer Innenstadt mit Fußgängerüberwegen und ständigem Anhalten — wie fahren Sie umweltbewusst?',
      en: 'In a city centre with frequent crossings and stops — how do you drive in an environmentally conscious way?'
    },
    options: [
      { id: 'a', text: { de: 'Sanft beschleunigen und früh hochschalten', en: 'Accelerate gently and shift up early' } },
      { id: 'b', text: { de: 'Motorbremse und Schubabschaltung nutzen', en: 'Use engine braking and overrun fuel cut-off' } },
      { id: 'c', text: { de: 'Hohe Drehzahlen halten, um beim Spurt nicht zurückzuschalten', en: 'Keep high revs to avoid down-shifting on sprints' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Sanftes Gas und Motorbremse senken Verbrauch und Lärm gleichzeitig — typische Stadtfahrweise.',
      en: 'Gentle throttle and engine braking cut consumption and noise — typical city driving.'
    }
  },
  {
    id: 'n6-041',
    category: 'environment',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.26',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_26_114.jpg`,
    question: {
      de: 'Welchen Einfluss haben Dachgepäckträger und Boxen auf den Verbrauch?',
      en: 'How do roof racks and boxes affect fuel consumption?'
    },
    options: [
      { id: 'a', text: { de: 'Sie erhöhen den Luftwiderstand und damit den Verbrauch', en: 'They increase air resistance and so consumption' } },
      { id: 'b', text: { de: 'Nach Gebrauch sollten sie abgebaut werden', en: 'They should be removed after use' } },
      { id: 'c', text: { de: 'Sie haben keinen Einfluss auf den Verbrauch', en: 'They have no effect on consumption' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Aufbauten kosten je nach Tempo 10–25 % mehr Sprit. Nach Gebrauch demontieren.',
      en: 'Roof attachments add 10–25 % depending on speed. Remove after use.'
    }
  },
  {
    id: 'n6-042',
    category: 'environment',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.26',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_26_119.jpg`,
    question: {
      de: 'Wie wirkt sich der Reifendruck auf Verbrauch und Sicherheit aus?',
      en: 'How does tyre pressure affect consumption and safety?'
    },
    options: [
      { id: 'a', text: { de: 'Zu niedriger Druck erhöht den Rollwiderstand und Verbrauch', en: 'Too low pressure raises rolling resistance and consumption' } },
      { id: 'b', text: { de: 'Falscher Druck verändert Fahrverhalten und Bremsweg', en: 'Wrong pressure changes handling and braking distance' } },
      { id: 'c', text: { de: 'Reifendruck ist nur bei Autobahnfahrt wichtig', en: 'Tyre pressure only matters on motorways' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Regelmäßig prüfen — falscher Druck bedeutet mehr Verbrauch, schlechteres Fahrverhalten und höhere Pannengefahr.',
      en: 'Check regularly — wrong pressure means more fuel, worse handling and higher breakdown risk.'
    }
  },
  {
    id: 'n6-043',
    category: 'environment',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.26',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_26_119_1.jpg`,
    question: {
      de: 'Was ist beim Beladen des Fahrzeugs umweltbewusst zu beachten?',
      en: 'What is environmentally relevant when loading the vehicle?'
    },
    options: [
      { id: 'a', text: { de: 'Nur notwendiges Gewicht mitnehmen — Mehrgewicht erhöht Verbrauch', en: 'Carry only necessary weight — extra mass raises consumption' } },
      { id: 'b', text: { de: 'Schwere Ladung möglichst tief und in der Mitte sichern', en: 'Secure heavy loads low and centred' } },
      { id: 'c', text: { de: 'Volle Beladung ist generell umweltfreundlicher', en: 'Full loading is generally more environmentally friendly' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Weniger Gewicht und richtige Sicherung senken Verbrauch und steigern Sicherheit.',
      en: 'Less mass and proper securing lower consumption and raise safety.'
    }
  },

  // ─────────────── Topic 1.2.36 — Sonstige Verkehrsregeln ────────────────────
  {
    id: 'n6-044',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.36',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_36_014.jpg`,
    question: {
      de: 'In welchem Fall dürfen Sie hupen?',
      en: 'In which case may you sound the horn?'
    },
    options: [
      { id: 'a', text: { de: 'Außerorts beim Überholen, um auf sich aufmerksam zu machen', en: 'Outside town when overtaking, to draw attention' } },
      { id: 'b', text: { de: 'Bei drohender Gefahr', en: 'In the event of imminent danger' } },
      { id: 'c', text: { de: 'Um Fußgänger zur Eile zu drängen', en: 'To rush pedestrians along' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Hupen ist nur bei Gefahr und außerorts zum Überholen erlaubt — niemals zur Belästigung.',
      en: 'Horn use is only allowed in danger and on overtaking outside town — never to harass.'
    }
  },

  // ─────────────── Topic 1.2.37 — Fahrzeugtechnik ────────────────────────────
  {
    id: 'n6-045',
    category: 'tech',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.37',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_37_011_1.jpg`,
    question: {
      de: 'Eine Warnleuchte im Armaturenbrett zeigt einen Defekt an. Wie reagieren Sie?',
      en: 'A warning light on the dashboard signals a defect. How do you react?'
    },
    options: [
      { id: 'a', text: { de: 'Bedeutung im Handbuch nachschlagen und ggf. Werkstatt aufsuchen', en: 'Look up its meaning in the manual and visit a workshop if needed' } },
      { id: 'b', text: { de: 'Rote Warnleuchten erfordern sofortiges Anhalten', en: 'Red warning lights require an immediate stop' } },
      { id: 'c', text: { de: 'Warnleuchten kann man ignorieren, wenn das Fahrzeug normal fährt', en: 'Warning lights can be ignored if the car drives normally' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Rote Symbole = sofort handeln (Motor, Bremse, Öl). Gelbe = bald prüfen lassen.',
      en: 'Red symbols = act now (engine, brake, oil). Yellow = have checked soon.'
    }
  },
  {
    id: 'n6-046',
    category: 'tech',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.37',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_37_011_2.jpg`,
    question: {
      de: 'Was bedeutet eine gelbe Warnleuchte im Cockpit?',
      en: 'What does a yellow warning light in the cockpit mean?'
    },
    options: [
      { id: 'a', text: { de: 'Funktionsstörung — zeitnah prüfen lassen', en: 'A malfunction — have it checked soon' } },
      { id: 'b', text: { de: 'Sofortiger Stopp ist meist nicht erforderlich, aber Aufmerksamkeit', en: 'Immediate stop usually not required, but attention' } },
      { id: 'c', text: { de: 'Gelbe Leuchten sind ungefährlich und können dauerhaft ignoriert werden', en: 'Yellow lights are harmless and can be ignored permanently' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Gelb mahnt zur Prüfung — funktioniert oft noch, sollte aber nicht dauerhaft ignoriert werden.',
      en: 'Yellow warns to check — usually still drivable but should not be permanently ignored.'
    }
  },
  {
    id: 'n6-047',
    category: 'tech',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.2.37',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_37_012_2.jpg`,
    question: {
      de: 'Während der Fahrt leuchtet die Bremswarnleuchte auf. Was tun Sie?',
      en: 'While driving the brake warning light comes on. What do you do?'
    },
    options: [
      { id: 'a', text: { de: 'Sicher anhalten und Bremsanlage prüfen lassen', en: 'Stop safely and have the brake system checked' } },
      { id: 'b', text: { de: 'Motorbremse stärker einsetzen, um Belastung zu verringern', en: 'Use engine braking more to reduce load' } },
      { id: 'c', text: { de: 'Weiterfahren bis nach Hause', en: 'Drive on until you reach home' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Bremsdefekte sind sicherheitsrelevant — anhalten, prüfen lassen, vorsichtig fahren.',
      en: 'Brake defects are safety-critical — stop, check, drive cautiously.'
    }
  },
  {
    id: 'n6-048',
    category: 'tech',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.2.37',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_2_37_020_1.jpg`,
    question: {
      de: 'Was ist bei der Profiltiefe der Reifen zu beachten?',
      en: 'What must you observe regarding tyre tread depth?'
    },
    options: [
      { id: 'a', text: { de: 'Mindestens 1,6 mm gesetzlich vorgeschrieben', en: 'At least 1.6 mm is the legal minimum' } },
      { id: 'b', text: { de: 'Empfohlen werden 4 mm bei Winterreifen', en: '4 mm is recommended for winter tyres' } },
      { id: 'c', text: { de: 'Profiltiefe ist nur bei Schnee wichtig', en: 'Tread depth only matters on snow' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Gesetzlich 1,6 mm, sicher fahren ab 3 mm (Sommer) / 4 mm (Winter).',
      en: 'Legal minimum 1.6 mm; safer above 3 mm (summer) / 4 mm (winter).'
    }
  },

  // ─────────────── Topic 1.3.01 — Erste Hilfe / Unfallhilfe ──────────────────
  {
    id: 'n6-049',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.3.01',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_3_01_038.jpg`,
    question: {
      de: 'Sie sind erster an der Unfallstelle. Was tun Sie zuerst?',
      en: 'You are first at an accident scene. What do you do first?'
    },
    options: [
      { id: 'a', text: { de: 'Unfallstelle absichern (Warnblinker, Warndreieck, Warnweste)', en: 'Secure the scene (hazard lights, warning triangle, hi-vis vest)' } },
      { id: 'b', text: { de: 'Notruf 112 wählen', en: 'Dial emergency 112' } },
      { id: 'c', text: { de: 'Erst die Versicherung des Unfallgegners suchen', en: 'First look for the other party\'s insurance' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Reihenfolge an Unfallstelle: Absichern, Notruf, Erste Hilfe leisten.',
      en: 'Order at accident scene: secure, call emergency, give first aid.'
    }
  },
  {
    id: 'n6-050',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.3.01',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_3_01_049_1.jpg`,
    question: {
      de: 'Eine bewusstlose Person atmet noch. Wie lagern Sie sie?',
      en: 'An unconscious person is still breathing. How do you position them?'
    },
    options: [
      { id: 'a', text: { de: 'Stabile Seitenlage', en: 'Recovery (lateral) position' } },
      { id: 'b', text: { de: 'Auf den Rücken, Kopf in den Nacken überstrecken', en: 'On the back, head tilted back' } },
      { id: 'c', text: { de: 'Sitzend an die Wand lehnen', en: 'Sitting upright against a wall' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Stabile Seitenlage hält die Atemwege frei und verhindert Ersticken an Erbrochenem.',
      en: 'The recovery position keeps the airway open and prevents choking on vomit.'
    }
  },
  {
    id: 'n6-051',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 5,
    topicCode: '1.3.01',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_3_01_060_1.jpg`,
    question: {
      de: 'Eine Person ist ohne Atmung und Puls. Was ist zu tun?',
      en: 'A person has no breathing and no pulse. What do you do?'
    },
    options: [
      { id: 'a', text: { de: 'Sofort Herz-Lungen-Wiederbelebung (30 Druckmassagen, 2 Beatmungen)', en: 'Begin CPR immediately (30 compressions, 2 breaths)' } },
      { id: 'b', text: { de: '112 verständigen und bei Bedarf laienverständliche Anleitung am Telefon einholen', en: 'Call 112 and ask for phone-guided instructions if needed' } },
      { id: 'c', text: { de: 'Warten, bis ein Arzt eintrifft', en: 'Wait until a doctor arrives' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'HLW beginnt sofort und endet erst mit Eintreffen professioneller Hilfe oder Wiederkehr der Atmung.',
      en: 'CPR starts immediately and continues until professional help arrives or breathing resumes.'
    }
  },
  {
    id: 'n6-052',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '1.3.01',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_3_01_127.jpg`,
    question: {
      de: 'Was muss in einem Auto-Verbandkasten enthalten sein?',
      en: 'What must a car first-aid kit contain?'
    },
    options: [
      { id: 'a', text: { de: 'Verbandstoffe nach DIN 13164', en: 'Bandages compliant with DIN 13164' } },
      { id: 'b', text: { de: 'Rettungsdecke', en: 'A rescue blanket' } },
      { id: 'c', text: { de: 'Schmerzmittel und Tabletten', en: 'Painkillers and pills' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Inhalt nach DIN 13164 (Verbände, Pflaster, Maske, Decke). Medikamente gehören nicht hinein.',
      en: 'Content per DIN 13164 (bandages, plasters, mask, blanket). Medication does not belong inside.'
    }
  },
  {
    id: 'n6-053',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    topicCode: '1.3.01',
    topicType: 'grundstoff',
    imagePath: `${IMG}AB_1_3_01_128_1.jpg`,
    question: {
      de: 'Wann tauschen Sie den Inhalt des Verbandkastens aus?',
      en: 'When do you replace items in the first-aid kit?'
    },
    options: [
      { id: 'a', text: { de: 'Wenn das Verfallsdatum überschritten ist', en: 'When the expiry date has passed' } },
      { id: 'b', text: { de: 'Nach Gebrauch einzelner Bestandteile', en: 'After individual items have been used' } },
      { id: 'c', text: { de: 'Nur bei Hauptuntersuchung alle 2 Jahre', en: 'Only at general inspection every 2 years' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Verfallene oder verbrauchte Teile sofort ersetzen — Vollständigkeit wird bei der HU geprüft.',
      en: 'Replace expired or used items immediately — completeness is checked at the periodic inspection.'
    }
  },

  // ─────────────── Topic 1.4.41 / 1.4.42 — Spezialfälle ──────────────────────
  {
    id: 'n6-054',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    topicCode: '1.4.41',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_4_41_165.jpg`,
    question: {
      de: 'Sie fahren mit einem Anhänger. Welche Besonderheit gilt für Tempo außerorts?',
      en: 'You are driving with a trailer. What special rule applies outside town?'
    },
    options: [
      { id: 'a', text: { de: 'In der Regel 80 km/h, mit Tempo-100-Plakette bis 100 km/h', en: 'Generally 80 km/h, with the "Tempo 100" sticker up to 100 km/h' } },
      { id: 'b', text: { de: 'Immer 100 km/h erlaubt', en: 'Always 100 km/h allowed' } },
      { id: 'c', text: { de: 'Mindestabstand zum Vordermann doppelt so groß', en: 'Double the safety distance to the vehicle ahead' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Mit Anhänger gilt 80 km/h außerorts (mit „Tempo 100" 100 km/h). Anhalteweg ist deutlich länger — größerer Abstand.',
      en: 'With a trailer 80 km/h applies outside town (100 km/h with "Tempo 100" sticker). Stopping distance is much longer — wider gap.'
    }
  },
  {
    id: 'n6-055',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '1.4.42',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_1_4_42_147_1.jpg`,
    question: {
      de: 'Sie schleppen ein Pannenfahrzeug ab. Was ist zu beachten?',
      en: 'You are towing a broken-down vehicle. What must you observe?'
    },
    options: [
      { id: 'a', text: { de: 'Beide Fahrzeuge fahren mit Warnblinker', en: 'Both vehicles run with hazard lights' } },
      { id: 'b', text: { de: 'Höchstens bis zur nächsten geeigneten Werkstatt schleppen', en: 'Only tow as far as the next suitable workshop' } },
      { id: 'c', text: { de: 'Es gibt keine Geschwindigkeitsbegrenzung', en: 'There is no speed limit' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Beim Abschleppen: Warnblinker beidseitig, kurze Strecke, vorsichtig, max. 50 km/h (Empfehlung).',
      en: 'When towing: hazard lights on both, short distance, careful driving, max ~50 km/h recommended.'
    }
  },

  // ─────────────── Topic 2.1.05 / 2.1.07 / 2.1.08 / 2.1.11 — Klasse A ────────
  {
    id: 'n6-056',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 3,
    topicCode: '2.1.05',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_1_05_105.jpg`,
    question: {
      de: 'Wie reduzieren Sie als Motorradfahrer den Bremsweg im Notfall?',
      en: 'As a motorbike rider, how do you minimise braking distance in an emergency?'
    },
    options: [
      { id: 'a', text: { de: 'Vorder- und Hinterradbremse gleichzeitig kräftig betätigen', en: 'Apply front and rear brake firmly at the same time' } },
      { id: 'b', text: { de: 'Kupplung im richtigen Moment ziehen, um nicht abzuwürgen', en: 'Pull the clutch at the right moment to avoid stalling' } },
      { id: 'c', text: { de: 'Nur die Hinterradbremse benutzen', en: 'Use only the rear brake' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Maximale Verzögerung mit beiden Bremsen; Vorderrad sorgt für 70 % der Bremskraft.',
      en: 'Maximum deceleration with both brakes; the front delivers ~70 % of braking force.'
    }
  },
  {
    id: 'n6-057',
    category: 'rightOfWay',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_1_07_010_2.jpg`,
    question: {
      de: 'Als Motorradfahrer nähern Sie sich einer Kreuzung. Warum werden Sie oft übersehen?',
      en: 'As a rider approaching a junction — why are you often overlooked?'
    },
    options: [
      { id: 'a', text: { de: 'Schmale Silhouette wirkt weiter weg als sie ist', en: 'A narrow silhouette looks further away than it is' } },
      { id: 'b', text: { de: 'Andere Verkehrsteilnehmer rechnen seltener mit Motorrädern', en: 'Other road users expect motorbikes less often' } },
      { id: 'c', text: { de: 'Motorräder sind grundsätzlich nicht im toten Winkel', en: 'Motorbikes are never in the blind spot' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Die schmale Silhouette und Geschwindigkeit von Motorrädern wird oft falsch eingeschätzt — defensiv fahren, sichtbar machen.',
      en: 'Bike silhouette and speed are easily misjudged — ride defensively, make yourself visible.'
    }
  },
  {
    id: 'n6-058',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.1.08',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_1_08_005.jpg`,
    question: {
      de: 'Was beachten Sie als Motorradfahrer bei Schienen in der Straße?',
      en: 'As a rider, what do you observe regarding tram or train rails in the road?'
    },
    options: [
      { id: 'a', text: { de: 'Schienen möglichst rechtwinklig kreuzen', en: 'Cross rails at as close to a right angle as possible' } },
      { id: 'b', text: { de: 'Bei Nässe besonders rutschig', en: 'Especially slippery when wet' } },
      { id: 'c', text: { de: 'Bei Trockenheit ungefährlich', en: 'Harmless when dry' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schienen sind glatt — rechtwinklig kreuzen, bei Nässe besonders aufpassen.',
      en: 'Rails are slick — cross at a right angle, especially careful when wet.'
    }
  },
  {
    id: 'n6-059',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.1.08',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_1_08_008.jpg`,
    question: {
      de: 'Wie verhalten Sie sich als Motorradfahrer in einer engen Kurve?',
      en: 'How do you behave as a motorbike rider in a tight bend?'
    },
    options: [
      { id: 'a', text: { de: 'Schon vor der Kurve auf passendes Tempo verringern', en: 'Reduce to suitable speed before the bend' } },
      { id: 'b', text: { de: 'Blick weit in die Kurve richten', en: 'Look well into the bend' } },
      { id: 'c', text: { de: 'In der Kurvenmitte stark bremsen', en: 'Brake hard in the middle of the bend' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Brems-/Blicktechnik: vor der Kurve verzögern, in die Kurve blicken, gleichmäßig durchfahren.',
      en: 'Brake-and-look technique: slow before the bend, look into it, drive through evenly.'
    }
  },
  {
    id: 'n6-060',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.1.08',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_1_08_030_1.jpg`,
    question: {
      de: 'Warum trägt ein Motorradfahrer auffällige Schutzkleidung?',
      en: 'Why does a motorcyclist wear high-visibility protective clothing?'
    },
    options: [
      { id: 'a', text: { de: 'Sichtbarkeit für andere wird erhöht', en: 'Visibility to others is increased' } },
      { id: 'b', text: { de: 'Schutz bei einem Sturz', en: 'Protection in a fall' } },
      { id: 'c', text: { de: 'Erfüllt nur die Optik', en: 'It only fulfils style' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schutzkleidung schützt bei Stürzen und verbessert Sichtbarkeit — vor allem in Dämmerung und Regen.',
      en: 'Protective gear shields in crashes and improves visibility — especially in dusk and rain.'
    }
  },
  {
    id: 'n6-061',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.1.11',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_1_11_009_1.jpg`,
    question: {
      de: 'Sie überholen mit dem Motorrad eine Lkw-Kolonne. Was ist zu beachten?',
      en: 'You overtake a truck convoy on the motorbike. What must you observe?'
    },
    options: [
      { id: 'a', text: { de: 'Mit Wind- und Sogwirkungen rechnen', en: 'Expect wind and drag effects' } },
      { id: 'b', text: { de: 'Ausreichende Lücke vorausplanen', en: 'Plan a sufficient gap ahead' } },
      { id: 'c', text: { de: 'Möglichst dicht am Lkw fahren', en: 'Ride as close to the truck as possible' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Beim Überholen von Lkw-Kolonnen entstehen starke Luftverwirbelungen — Lücke vorausplanen, festen Griff.',
      en: 'Overtaking truck convoys creates strong turbulence — plan a gap, keep a firm grip.'
    }
  },

  // ─────────────── Topic 2.2.07 / 2.2.18 / 2.4.41 / 2.7.05 ───────────────────
  {
    id: 'n6-062',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.2.07',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_2_07_012.jpg`,
    question: {
      de: 'Warum sind Motorradfahrer in Innenstadt-Verkehrsknoten besonders gefährdet?',
      en: 'Why are motorbike riders especially vulnerable in inner-city traffic junctions?'
    },
    options: [
      { id: 'a', text: { de: 'Sie werden im Spiegel oft übersehen', en: 'They are often overlooked in mirrors' } },
      { id: 'b', text: { de: 'Knappe Abstände der Autofahrer beim Spurwechsel', en: 'Tight gaps from drivers when changing lane' } },
      { id: 'c', text: { de: 'Motorräder dürfen Ampeln ignorieren', en: 'Motorbikes may ignore traffic lights' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'In Knotenpunkten Defensiv fahren, sichtbar bleiben, Fluchtweg planen.',
      en: 'At junctions ride defensively, stay visible, plan an escape route.'
    }
  },
  {
    id: 'n6-063',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '2.2.18',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_2_18_015.jpg`,
    question: {
      de: 'Vor Ihnen staut sich der Verkehr auf der Landstraße. Wie verhalten Sie sich?',
      en: 'Traffic ahead is jamming on the rural road. How do you behave?'
    },
    options: [
      { id: 'a', text: { de: 'Frühzeitig Warnblinker einschalten', en: 'Turn on hazard lights early' } },
      { id: 'b', text: { de: 'Sicherheitsabstand strikt einhalten', en: 'Strictly keep safety distance' } },
      { id: 'c', text: { de: 'Notfalls auf den Standstreifen ausweichen, um zu überholen', en: 'If necessary use the hard shoulder to overtake' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Stau erkannt → Warnblinker, Abstand halten, Rettungsgasse, niemals auf Standstreifen.',
      en: 'Jam detected → hazards on, keep distance, emergency lane, never use hard shoulder.'
    }
  },
  {
    id: 'n6-064',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '2.2.18',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_2_18_015_1.jpg`,
    question: {
      de: 'Im Stau auf Land- oder Schnellstraße — wie bilden Sie die Rettungsgasse?',
      en: 'In a jam on a rural road or expressway — how do you form the emergency lane?'
    },
    options: [
      { id: 'a', text: { de: 'Linke Spur nach links, alle anderen nach rechts', en: 'Left lane goes left, all others to the right' } },
      { id: 'b', text: { de: 'Standstreifen freihalten, falls vorhanden', en: 'Keep the hard shoulder free if present' } },
      { id: 'c', text: { de: 'Warten, bis Einsatzfahrzeuge kommen', en: 'Wait until emergency vehicles arrive' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Rettungsgasse sofort bilden — nicht erst, wenn Blaulicht zu sehen ist.',
      en: 'Form the emergency lane immediately — not only when blue lights appear.'
    }
  },
  {
    id: 'n6-065',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '2.2.18',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_2_18_104_2.jpg`,
    question: {
      de: 'Sie nähern sich einem beschrankten Bahnübergang, die Halbschranken senken sich. Was tun Sie?',
      en: 'You approach a level crossing with half-barriers that are lowering. What do you do?'
    },
    options: [
      { id: 'a', text: { de: 'Anhalten und Schranken vollständig schließen lassen', en: 'Stop and let the barriers close fully' } },
      { id: 'b', text: { de: 'Niemals unter sich senkenden Schranken durchfahren', en: 'Never drive under lowering barriers' } },
      { id: 'c', text: { de: 'Schnell durchfahren, solange noch Platz ist', en: 'Drive through quickly while there is still space' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Bahnübergang mit sich senkenden Schranken: anhalten, warten — Lebensgefahr beim Durchfahren.',
      en: 'Level crossing with lowering barriers: stop and wait — driving through is life-threatening.'
    }
  },
  {
    id: 'n6-066',
    category: 'tech',
    classes: ['A', 'AB'],
    points: 3,
    topicCode: '2.4.41',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_4_41_004_1.jpg`,
    question: {
      de: 'Welche Pflichtausstattung muss ein Motorrad in Deutschland mitführen?',
      en: 'What mandatory equipment must a motorbike in Germany carry?'
    },
    options: [
      { id: 'a', text: { de: 'Geprüfter Sturzhelm für Fahrer und Sozius', en: 'An approved helmet for rider and pillion' } },
      { id: 'b', text: { de: 'Funktionierende Beleuchtung und Spiegel', en: 'Functioning lights and mirrors' } },
      { id: 'c', text: { de: 'Warndreieck und Verbandkasten wie beim Pkw', en: 'Warning triangle and first-aid kit as for cars' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Helmpflicht, funktionierende Lichter/Spiegel. Verbandkasten/Warndreieck sind beim Motorrad nicht vorgeschrieben.',
      en: 'Helmet mandatory, lights and mirrors must work. First-aid kit and triangle are not required on motorbikes.'
    }
  },
  {
    id: 'n6-067',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    topicCode: '2.7.05',
    topicType: 'zusatzstoff',
    imagePath: `${IMG}AB_2_7_05_001.jpg`,
    question: {
      de: 'Wie fahren Sie eine schnelle Schräglagenkurve auf dem Motorrad sicher?',
      en: 'How do you ride a fast leaned-over bend on the motorbike safely?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit vor der Kurve passend einstellen', en: 'Set speed appropriately before the bend' } },
      { id: 'b', text: { de: 'Während der Schräglage gleichmäßig Gas geben', en: 'Apply throttle evenly during the lean' } },
      { id: 'c', text: { de: 'In der Schräglage die Vorderradbremse voll betätigen', en: 'Apply full front brake while leaned over' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Vor der Kurve verzögern, dann mit konstantem Schub durchziehen — Bremsen in der Schräglage führt zum Sturz.',
      en: 'Slow before the bend then carry constant throttle — braking when leaned over causes a crash.'
    }
  },

  // ─────────────── Sign questions — previously unused sign-*.jpg files ───────
  {
    id: 'n6-sign-dip',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-dip.jpg',
    question: {
      de: 'Welche Bedeutung hat dieses Verkehrszeichen (rotes Dreieck mit Senke)?',
      en: 'What does this traffic sign mean (red triangle with a dip in the road)?'
    },
    options: [
      { id: 'a', text: { de: 'Warnung vor einer Bodenwelle bzw. Senke', en: 'Warning of a dip or hollow in the road' } },
      { id: 'b', text: { de: 'Geschwindigkeit reduzieren und federnden Stoß erwarten', en: 'Reduce speed and expect a springing jolt' } },
      { id: 'c', text: { de: 'Das Schild gilt nur für Lkw', en: 'The sign applies only to trucks' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Gefahrzeichen warnt vor einer Senke. Tempo anpassen — Federung und Bodenfreiheit beachten.',
      en: 'This warning sign signals a dip. Adjust speed — mind suspension and ground clearance.'
    }
  },
  {
    id: 'n6-sign-hairpin',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-hairpin-curve.jpg',
    question: {
      de: 'Was zeigt dieses Schild an (rotes Dreieck mit scharfer Spitzkehre)?',
      en: 'What does this sign indicate (red triangle with a sharp hairpin curve)?'
    },
    options: [
      { id: 'a', text: { de: 'Eine besonders enge, scharfe Kurve voraus', en: 'A particularly tight, sharp curve ahead' } },
      { id: 'b', text: { de: 'Schon vor dem Schild Geschwindigkeit deutlich reduzieren', en: 'Reduce speed clearly already before the sign' } },
      { id: 'c', text: { de: 'Überholverbot wird damit aufgehoben', en: 'It cancels any overtaking ban' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Spitzkehre — enge Kurve. Vorher Tempo raus, im Bogen gleichmäßig fahren.',
      en: 'Hairpin bend — tight curve. Slow well before it, take it at a steady speed.'
    }
  },
  {
    id: 'n6-sign-narrow-bridge',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-narrow-bridge.jpg',
    question: {
      de: 'Was bedeutet dieses Verkehrszeichen (Dreieck mit verengender Brücke)?',
      en: 'What does this sign mean (triangle with a narrowing bridge)?'
    },
    options: [
      { id: 'a', text: { de: 'Engstelle / verengte Fahrbahn auf einer Brücke', en: 'Bottleneck / narrowed carriageway on a bridge' } },
      { id: 'b', text: { de: 'Begegnungsverkehr kann erschwert sein', en: 'Oncoming traffic may be difficult to pass' } },
      { id: 'c', text: { de: 'Es ist eine Vorfahrt regelnde Zone', en: 'It is a zone regulating right of way' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Brücke mit Engstelle — Gegenverkehr kann eingeschränkt sein. Tempo raus, gegebenenfalls warten.',
      en: 'Bridge with bottleneck — oncoming traffic may be restricted. Slow down and wait if needed.'
    }
  },
  {
    id: 'n6-sign-narrow-one-side',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-narrow-one-side.jpg',
    question: {
      de: 'Wie reagieren Sie auf dieses Zeichen (Verengung auf einer Seite)?',
      en: 'How do you react to this sign (one-sided road narrowing)?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit reduzieren und auf Gegenverkehr achten', en: 'Reduce speed and watch for oncoming traffic' } },
      { id: 'b', text: { de: 'Vorrang regeln entsprechend StVO klären', en: 'Determine priority per the StVO rules' } },
      { id: 'c', text: { de: 'Sie haben automatisch Vorfahrt', en: 'You automatically have priority' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Einseitige Verengung — keine automatische Vorfahrt. Tempo anpassen, Gegenverkehr beachten.',
      en: 'One-sided narrowing — no automatic priority. Adjust speed and observe oncoming traffic.'
    }
  },
  {
    id: 'n6-sign-side-road-right',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-side-road-right.jpg',
    question: {
      de: 'Welche Bedeutung hat das Zeichen „Einmündung von rechts" (Dreieck mit T-Strich rechts)?',
      en: 'What does the sign "Side road from the right" mean (triangle with T-line on the right)?'
    },
    options: [
      { id: 'a', text: { de: 'Vor einer Einmündung rechts mit einbiegendem Verkehr rechnen', en: 'Expect joining traffic from a side road on the right' } },
      { id: 'b', text: { de: 'Es ist ein Gefahrzeichen, kein Vorfahrtszeichen', en: 'It is a warning sign, not a priority sign' } },
      { id: 'c', text: { de: 'Sie müssen rechts blinken', en: 'You must indicate right' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Gefahrzeichen — warnt vor einer rechts einmündenden Straße. Vorfahrt regelt sich nach „rechts vor links" oder durch Zusatzzeichen.',
      en: 'Warning sign — alerts to a road joining from the right. Priority follows "right before left" or extra signs.'
    }
  },
  {
    id: 'n6-sign-t-junction',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-t-junction.jpg',
    question: {
      de: 'Was bedeutet dieses Zeichen (T-Einmündung)?',
      en: 'What does this sign indicate (T-junction)?'
    },
    options: [
      { id: 'a', text: { de: 'Vor einer T-Einmündung — die Straße endet, Sie müssen abbiegen', en: 'Before a T-junction — the road ends and you must turn' } },
      { id: 'b', text: { de: 'Rechtzeitig einordnen und Tempo reduzieren', en: 'Sort into the correct lane early and reduce speed' } },
      { id: 'c', text: { de: 'Es zeigt eine Vorfahrtstraße an', en: 'It indicates a priority road' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'T-Einmündung: Ihre Straße endet, links oder rechts abbiegen. Vorfahrt klären — meist hat die Querstraße Vorrang.',
      en: 'T-junction: your road ends and you must turn left or right. Priority is usually with the crossing road.'
    }
  },
  {
    id: 'n6-sign-y-junction',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    topicCode: '1.1.02',
    topicType: 'grundstoff',
    imagePath: '/images/quiz/sign-y-junction.jpg',
    question: {
      de: 'Wie verhalten Sie sich an dieser Y-Einmündung (Gabelung)?',
      en: 'How do you behave at this Y-junction (fork)?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit reduzieren und Richtungsentscheidung früh treffen', en: 'Reduce speed and choose the direction early' } },
      { id: 'b', text: { de: 'Blinken Sie rechtzeitig in die gewünschte Richtung', en: 'Indicate in good time in the chosen direction' } },
      { id: 'c', text: { de: 'Sie dürfen die Spurwahl direkt vor der Gabelung treffen', en: 'You may pick the lane right at the fork' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Gabelung — Richtung früh wählen, blinken, Tempo anpassen, andere Verkehrsteilnehmer beachten.',
      en: 'Fork — pick direction early, indicate, adjust speed, watch other traffic.'
    }
  }
];
