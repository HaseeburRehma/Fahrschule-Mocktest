import type { Question, LicenseClass } from './types';

/**
 * Original mock-style theory questions. They're inspired by the official
 * German theory exam catalogue but written from scratch — official TÜV/DEKRA
 * questions are copyrighted. Difficulty / topic mix mirrors the real test.
 */
export const questions: Question[] = [
  // ───────────────── Traffic signs ────────────────────────────────────────────
  {
    id: 'sign-stop-1',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    signId: 'stop',
    question: {
      de: 'Wie verhalten Sie sich an diesem Verkehrszeichen?',
      en: 'How do you behave at this traffic sign?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Anhalten und Vorfahrt gewähren',
          en: 'Stop and give way'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Geschwindigkeit verringern und vorsichtig weiterfahren',
          en: 'Slow down and continue carefully'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur halten, wenn andere Fahrzeuge sichtbar sind',
          en: 'Stop only if other vehicles are visible'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'An einem Stoppschild müssen Sie unabhängig vom Verkehr anhalten und Vorfahrt gewähren.',
      en: 'At a stop sign you must come to a complete stop regardless of traffic and yield.'
    }
  },
  {
    id: 'sign-yield-1',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    signId: 'yield',
    question: {
      de: 'Was bedeutet dieses Verkehrszeichen?',
      en: 'What does this traffic sign mean?'
    },
    options: [
      { id: 'a', text: { de: 'Vorfahrt gewähren', en: 'Yield right of way' } },
      { id: 'b', text: { de: 'Vorfahrtstraße', en: 'Priority road' } },
      { id: 'c', text: { de: 'Halt vor der Kreuzung', en: 'Stop before the junction' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das umgekehrte Dreieck weist Sie an, dem Querverkehr Vorfahrt zu gewähren — anhalten ist nur nötig, wenn andere bereits in der Kreuzung sind.',
      en: 'The inverted triangle tells you to give way to crossing traffic — you only need to stop if others are already at the junction.'
    }
  },
  {
    id: 'sign-priority-1',
    category: 'signs',
    classes: ['A', 'B', 'AB'],
    points: 2,
    signId: 'priorityRoad',
    question: {
      de: 'Was bedeutet dieses Verkehrszeichen?',
      en: 'What does this traffic sign mean?'
    },
    options: [
      { id: 'a', text: { de: 'Vorfahrtstraße', en: 'Priority road' } },
      { id: 'b', text: { de: 'Vorfahrt gewähren', en: 'Give way' } },
      { id: 'c', text: { de: 'Ende der Vorfahrtstraße', en: 'End of priority road' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das gelbe Quadrat auf der Spitze zeigt eine Vorfahrtstraße an: Sie haben Vorfahrt vor querenden Straßen ohne entsprechendes Zeichen.',
      en: 'The yellow diamond marks a priority road — you have right of way over crossing roads without an equivalent sign.'
    }
  },
  {
    id: 'sign-roundabout-1',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    signId: 'roundabout',
    question: {
      de: 'Sie nähern sich diesem Kreisverkehr. Wer hat Vorfahrt?',
      en: 'You approach this roundabout. Who has the right of way?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Die Fahrzeuge, die sich bereits im Kreisverkehr befinden',
          en: 'Vehicles already in the roundabout'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Die einfahrenden Fahrzeuge — rechts vor links',
          en: 'Entering vehicles — right before left'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Pkw vor Lkw',
          en: 'Cars before trucks'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Beim Kreisverkehrszeichen mit „Vorfahrt gewähren" haben die Fahrzeuge im Kreis Vorrang. Sie dürfen erst einfahren, wenn niemand behindert wird.',
      en: 'When the roundabout sign is combined with a yield sign, traffic already in the circle has priority. You may only enter once nobody is impeded.'
    }
  },
  {
    id: 'sign-noentry-1',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    signId: 'noEntry',
    question: {
      de: 'Was zeigt dieses Verkehrszeichen an?',
      en: 'What does this traffic sign indicate?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Verbot der Einfahrt für Fahrzeuge aller Art',
          en: 'No entry for vehicles of any kind'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Einbahnstraße in Gegenrichtung',
          en: 'One-way street in the opposite direction'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur für Fußgänger',
          en: 'Pedestrians only'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Schild bedeutet „Verbot der Einfahrt". Es steht häufig am verbotenen Ende einer Einbahnstraße — beides ist daher korrekt.',
      en: 'The sign means “No entry”. It is often placed at the forbidden end of a one-way street — so both readings are correct in practice.'
    }
  },
  {
    id: 'sign-children-1',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    signId: 'children',
    question: {
      de: 'Was beachten Sie an diesem Verkehrszeichen?',
      en: 'What do you watch out for at this traffic sign?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Geschwindigkeit deutlich reduzieren',
          en: 'Slow down significantly'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Mit unvorhersehbarem Verhalten von Kindern rechnen',
          en: 'Expect unpredictable behaviour from children'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur am Wochenende achtsam fahren',
          en: 'Only drive carefully on weekends'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Gefahrenzeichen warnt vor Kindern. Reduzieren Sie die Geschwindigkeit und seien Sie bremsbereit — Kinder können plötzlich auf die Fahrbahn laufen.',
      en: 'The warning sign cautions about children. Reduce speed and be ready to brake — children may step onto the road without warning.'
    }
  },

  // ───────────────── Right of way / behaviour ─────────────────────────────────
  {
    id: 'right-unmarked',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'An einer Kreuzung ohne Verkehrszeichen — wer hat Vorfahrt?',
      en: 'At a junction with no traffic signs — who has right of way?'
    },
    options: [
      { id: 'a', text: { de: 'Wer von rechts kommt', en: 'Whoever comes from the right' } },
      { id: 'b', text: { de: 'Wer schneller fährt', en: 'Whoever is faster' } },
      { id: 'c', text: { de: 'Pkw vor Fahrrädern', en: 'Cars before bicycles' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'An ungeregelten Kreuzungen gilt „rechts vor links" — unabhängig von Fahrzeugtyp oder Geschwindigkeit.',
      en: 'At unmarked junctions the rule is “right before left” — regardless of vehicle type or speed.'
    }
  },
  {
    id: 'right-emergency',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Ein Einsatzfahrzeug nähert sich mit Blaulicht und Martinshorn. Was tun Sie?',
      en: 'An emergency vehicle approaches with blue lights and siren. What do you do?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Sofort eine freie Gasse bilden und Platz machen',
          en: 'Form a clear lane immediately and make way'
        }
      },
      {
        id: 'b',
        text: { de: 'Anhalten und das Lenkrad festhalten', en: 'Stop and grip the steering wheel' }
      },
      {
        id: 'c',
        text: {
          de: 'Schneller fahren, um nicht im Weg zu sein',
          en: 'Drive faster to get out of the way'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Sie müssen unverzüglich eine Rettungsgasse bilden — auch im Stand. Schneller fahren ist gefährlich und nicht erlaubt.',
      en: 'You must immediately form an emergency lane — even when stationary. Speeding up is dangerous and not permitted.'
    }
  },

  // ───────────────── Speed ────────────────────────────────────────────────────
  {
    id: 'speed-builtup',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    signId: 'speed50',
    question: {
      de: 'Welche allgemeine Höchstgeschwindigkeit gilt innerorts?',
      en: 'What is the general speed limit inside built-up areas?'
    },
    options: [
      { id: 'a', text: { de: '30 km/h', en: '30 km/h' } },
      { id: 'b', text: { de: '50 km/h', en: '50 km/h' } },
      { id: 'c', text: { de: '70 km/h', en: '70 km/h' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Innerorts dürfen Sie maximal 50 km/h fahren, sofern keine niedrigere Beschilderung gilt.',
      en: 'Inside built-up areas the maximum is 50 km/h, unless a lower limit is signposted.'
    }
  },
  {
    id: 'speed-zone30',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    signId: 'speed30',
    question: {
      de: 'In einer Tempo-30-Zone — was ist außer der Geschwindigkeit zu beachten?',
      en: 'In a 30 km/h zone — what else applies besides the speed?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'In der Regel gilt rechts vor links',
          en: 'Right before left applies as a rule'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Lkw über 7,5 t sind verboten',
          en: 'Trucks over 7.5 t are forbidden'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Es gilt zwingend eine Mindestgeschwindigkeit',
          en: 'A minimum speed is mandatory'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'In Tempo-30-Zonen gibt es meist keine Vorfahrtsregelungen — es gilt rechts vor links. Aufmerksamkeit ist daher besonders wichtig.',
      en: 'In 30 km/h zones there are usually no priority signs — the right-before-left rule applies. Stay alert.'
    }
  },

  // ───────────────── Distance / following ─────────────────────────────────────
  {
    id: 'distance-2sec',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    question: {
      de: 'Welcher Sicherheitsabstand ist auf trockener Straße angemessen?',
      en: 'Which safety distance is appropriate on a dry road?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Etwa der Weg, den Sie in 2 Sekunden zurücklegen',
          en: 'Roughly the distance you cover in 2 seconds'
        }
      },
      {
        id: 'b',
        text: { de: 'Mindestens 5 Meter', en: 'At least 5 metres' } },
      {
        id: 'c',
        text: {
          de: 'Der halbe Tachowert in Metern',
          en: 'Half the speedometer reading in metres'
        }
      }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Faustregel: halber Tachowert in Metern — das entspricht etwa der Strecke, die Sie in 2 Sekunden fahren. Bei Nässe oder Glätte verdoppeln.',
      en: 'Rule of thumb: half the speedometer reading in metres — roughly your 2-second distance. Double it on wet or icy roads.'
    }
  },

  // ───────────────── Alcohol & first aid ──────────────────────────────────────
  {
    id: 'alcohol-novice',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 5,
    question: {
      de: 'Welche Alkoholgrenze gilt während der Probezeit und für Fahrer unter 21 Jahren?',
      en: 'Which alcohol limit applies during the probationary period and for drivers under 21?'
    },
    options: [
      { id: 'a', text: { de: '0,0 ‰ (absolutes Alkoholverbot)', en: '0.0 ‰ (absolute alcohol ban)' } },
      { id: 'b', text: { de: '0,3 ‰', en: '0.3 ‰' } },
      { id: 'c', text: { de: '0,5 ‰', en: '0.5 ‰' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'In der Probezeit und unter 21 Jahren gilt 0,0 ‰. Verstöße werden mit Bußgeld, Punkten und Verlängerung der Probezeit geahndet.',
      en: 'During the probationary period and for drivers under 21 the limit is 0.0 ‰. Violations lead to fines, points and an extended probation.'
    }
  },
  {
    id: 'firstaid-call',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Welche Notrufnummer wählen Sie nach einem Verkehrsunfall in Deutschland und der EU?',
      en: 'Which emergency number do you call after a road accident in Germany and the EU?'
    },
    options: [
      { id: 'a', text: { de: '110', en: '110' } },
      { id: 'b', text: { de: '112', en: '112' } },
      { id: 'c', text: { de: '911', en: '911' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: '112 ist der einheitliche europäische Notruf für Feuerwehr und Rettungsdienst. 110 ist die Polizei in Deutschland.',
      en: '112 is the single European emergency number for fire and ambulance services. 110 is the police in Germany.'
    }
  },
  {
    id: 'firstaid-securing',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Was tun Sie zuerst nach einem Verkehrsunfall?',
      en: 'What do you do first after a road accident?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Unfallstelle absichern (Warnblinker, Warndreieck)',
          en: 'Secure the scene (hazard lights, warning triangle)'
        }
      },
      {
        id: 'b',
        text: { de: 'Erste Hilfe leisten', en: 'Provide first aid' } },
      {
        id: 'c',
        text: { de: 'Den Notruf 112 absetzen', en: 'Make the 112 emergency call' } },
      {
        id: 'd',
        text: { de: 'Foto für die Versicherung machen', en: 'Take a photo for the insurance' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Reihenfolge: Absichern → Notruf → Erste Hilfe. Versicherungsdetails kommen erst, wenn Verletzte versorgt sind.',
      en: 'Order: secure → call → first aid. Insurance details come only after the injured are cared for.'
    }
  },

  // ───────────────── Environment ──────────────────────────────────────────────
  {
    id: 'env-idle',
    category: 'environment',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Was schont die Umwelt am meisten?',
      en: 'Which behaviour is most environmentally friendly?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Bei längeren Wartezeiten den Motor abstellen',
          en: 'Switch the engine off during long waits'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Möglichst hochtourig fahren',
          en: 'Drive at high engine revs'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Mit niedriger Drehzahl und vorausschauend fahren',
          en: 'Drive at low revs and look ahead'
        }
      }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Frühes Hochschalten, niedrige Drehzahl und Motor-Aus bei Stehzeiten reduzieren Verbrauch und Emissionen deutlich.',
      en: 'Early up-shifting, low revs and engine-off during stops cut fuel use and emissions significantly.'
    }
  },

  // ───────────────── Vehicle technology (B) ───────────────────────────────────
  {
    id: 'tech-tread',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Welche Mindestprofiltiefe ist bei Pkw-Reifen vorgeschrieben?',
      en: 'What is the minimum tread depth for car tyres?'
    },
    options: [
      { id: 'a', text: { de: '1,6 mm', en: '1.6 mm' } },
      { id: 'b', text: { de: '3,0 mm', en: '3.0 mm' } },
      { id: 'c', text: { de: '5,0 mm', en: '5.0 mm' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Gesetzliche Mindestprofiltiefe ist 1,6 mm. Empfohlen werden jedoch 3 mm bei Sommer- und 4 mm bei Winterreifen.',
      en: 'The legal minimum is 1.6 mm. However, 3 mm for summer tyres and 4 mm for winter tyres are recommended.'
    }
  },
  {
    id: 'tech-load',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was ist beim Beladen eines Pkw zu beachten?',
      en: 'What do you watch out for when loading a car?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Schwere Gegenstände nach unten und nach vorne',
          en: 'Heavy items go down and forward'
        }
      },
      {
        id: 'b',
        text: { de: 'Ladung muss verkehrssicher gesichert werden', en: 'Load must be secured safely' } },
      {
        id: 'c',
        text: {
          de: 'Über die Rückbank stapeln spart Platz',
          en: 'Stack high over the rear seats to save space'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schwerpunkt niedrig halten und Ladung gegen Verrutschen sichern. Lose Gegenstände werden bei Bremsung zum Geschoss.',
      en: 'Keep the centre of gravity low and secure the load against shifting. Loose items become projectiles under braking.'
    }
  },

  // ───────────────── Motorcycle (A) ───────────────────────────────────────────
  {
    id: 'moto-helmet',
    category: 'tech',
    classes: ['A', 'AB'],
    points: 3,
    question: {
      de: 'Wer muss auf einem Motorrad einen geeigneten Schutzhelm tragen?',
      en: 'Who must wear a suitable protective helmet on a motorcycle?'
    },
    options: [
      { id: 'a', text: { de: 'Nur der Fahrer', en: 'Only the rider' } },
      { id: 'b', text: { de: 'Fahrer und Beifahrer', en: 'Rider and pillion passenger' } },
      { id: 'c', text: { de: 'Niemand bei kurzen Strecken', en: 'Nobody on short trips' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Helmpflicht gilt für Fahrer und Sozius — unabhängig von Streckenlänge oder Geschwindigkeit.',
      en: 'Helmet requirement applies to both rider and pillion — regardless of trip length or speed.'
    }
  },
  {
    id: 'moto-curve',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    question: {
      de: 'Wie verhalten Sie sich beim Anfahren einer Kurve mit dem Motorrad?',
      en: 'How do you approach a curve on a motorcycle?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Vor der Kurve bremsen, in der Kurve gleichmäßig Gas',
          en: 'Brake before the curve, throttle smoothly through it'
        }
      },
      {
        id: 'b',
        text: { de: 'In der Kurve hart bremsen', en: 'Brake hard inside the curve' } },
      {
        id: 'c',
        text: {
          de: 'Den Blick zum Kurvenausgang richten',
          en: 'Look towards the exit of the curve'
        }
      }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Geschwindigkeit vor der Kurve anpassen, gleichmäßig durchfahren und den Blick zum Kurvenausgang richten — der Blick zieht das Motorrad mit.',
      en: 'Set your speed before the curve, ride through smoothly and look at the exit — your bike follows your gaze.'
    }
  },
  {
    id: 'moto-gear',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 3,
    question: {
      de: 'Welche Schutzkleidung ist beim Motorradfahren empfehlenswert?',
      en: 'Which protective gear is recommended when riding a motorcycle?'
    },
    options: [
      { id: 'a', text: { de: 'Motorradjacke und -hose mit Protektoren', en: 'Motorcycle jacket and trousers with armour' } },
      { id: 'b', text: { de: 'Stabile Stiefel', en: 'Sturdy boots' } },
      { id: 'c', text: { de: 'Sandalen bei warmem Wetter', en: 'Sandals when warm' } },
      { id: 'd', text: { de: 'Geeignete Handschuhe', en: 'Suitable gloves' } }
    ],
    correctIds: ['a', 'b', 'd'],
    explanation: {
      de: 'Vollständige Schutzkleidung — Helm, Jacke, Hose mit Protektoren, Stiefel und Handschuhe — reduziert Verletzungen erheblich.',
      en: 'Full gear — helmet, jacket, armoured trousers, boots and gloves — drastically reduces injuries.'
    }
  },

  // ───────────────── Mofa-specific ────────────────────────────────────────────
  {
    id: 'mofa-speed',
    category: 'tech',
    classes: ['Mofa'],
    points: 3,
    question: {
      de: 'Welche bauartbedingte Höchstgeschwindigkeit darf ein Mofa nicht überschreiten?',
      en: 'What is the maximum design speed of a Mofa?'
    },
    options: [
      { id: 'a', text: { de: '20 km/h', en: '20 km/h' } },
      { id: 'b', text: { de: '25 km/h', en: '25 km/h' } },
      { id: 'c', text: { de: '45 km/h', en: '45 km/h' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Ein Mofa ist auf eine bauartbedingte Höchstgeschwindigkeit von 25 km/h begrenzt.',
      en: 'A Mofa is restricted by design to a maximum speed of 25 km/h.'
    }
  },
  {
    id: 'mofa-age',
    category: 'behavior',
    classes: ['Mofa'],
    points: 2,
    question: {
      de: 'Ab welchem Alter darf man in Deutschland Mofa fahren?',
      en: 'From what age may you ride a Mofa in Germany?'
    },
    options: [
      { id: 'a', text: { de: '14 Jahre', en: '14 years' } },
      { id: 'b', text: { de: '15 Jahre', en: '15 years' } },
      { id: 'c', text: { de: '16 Jahre', en: '16 years' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Die Mofa-Prüfbescheinigung darf in Deutschland ab dem 15. Lebensjahr erworben werden.',
      en: 'In Germany the Mofa certificate may be obtained from age 15.'
    }
  },
  {
    id: 'mofa-passenger',
    category: 'behavior',
    classes: ['Mofa'],
    points: 3,
    question: {
      de: 'Dürfen Sie auf einem Mofa Personen mitnehmen?',
      en: 'May you carry passengers on a Mofa?'
    },
    options: [
      { id: 'a', text: { de: 'Ja, eine Person', en: 'Yes, one person' } },
      {
        id: 'b',
        text: {
          de: 'Nein — Personen­beförderung ist auf einem Mofa nicht erlaubt',
          en: 'No — carrying passengers is not allowed on a Mofa'
        }
      },
      { id: 'c', text: { de: 'Nur Kinder unter 7 Jahren', en: 'Only children under 7' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Mofas sind Einsitzer — die Mitnahme weiterer Personen ist grundsätzlich nicht erlaubt.',
      en: 'Mofas are single-seaters — carrying additional people is not permitted.'
    }
  },
  {
    id: 'mofa-helmet',
    category: 'tech',
    classes: ['Mofa'],
    points: 3,
    question: {
      de: 'Müssen Sie auf einem Mofa einen Schutzhelm tragen?',
      en: 'Must you wear a helmet on a Mofa?'
    },
    options: [
      { id: 'a', text: { de: 'Ja, immer', en: 'Yes, always' } },
      { id: 'b', text: { de: 'Nur außerorts', en: 'Only outside built-up areas' } },
      { id: 'c', text: { de: 'Nein, da langsam', en: 'No, because it’s slow' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auch auf dem Mofa besteht Helmpflicht. Ein geeigneter Schutzhelm reduziert Kopfverletzungen erheblich.',
      en: 'A helmet is mandatory on a Mofa as well. A proper helmet greatly reduces head injuries.'
    }
  },

  // ───────────────── Pedestrian crossing ──────────────────────────────────────
  {
    id: 'sign-zebra',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    signId: 'pedestrianCrossing',
    question: {
      de: 'Wie verhalten Sie sich an einem Fußgängerüberweg (Zebrastreifen)?',
      en: 'How do you behave at a pedestrian crossing (zebra crossing)?'
    },
    options: [
      {
        id: 'a',
        text: { de: 'Bremsbereitschaft, ggf. anhalten', en: 'Be ready to brake, stop if needed' }
      },
      {
        id: 'b',
        text: {
          de: 'Fußgängern, die queren möchten, das Überqueren ermöglichen',
          en: 'Allow pedestrians who want to cross to do so'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Hupen, damit Fußgänger schneller queren',
          en: 'Honk so pedestrians cross faster'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Fußgänger, die den Überweg erkennbar nutzen wollen, haben Vorrang. Hupen oder Drängen ist nicht erlaubt.',
      en: 'Pedestrians visibly intending to cross have priority. Honking or pushing them is not allowed.'
    }
  },
  {
    id: 'sign-mandatory-right',
    category: 'signs',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    signId: 'mandatoryRight',
    question: {
      de: 'Was bedeutet dieses Verkehrszeichen?',
      en: 'What does this traffic sign mean?'
    },
    options: [
      { id: 'a', text: { de: 'Vorgeschriebene Fahrtrichtung rechts', en: 'Mandatory direction: right' } },
      { id: 'b', text: { de: 'Empfehlung zum Rechtsabbiegen', en: 'Suggestion to turn right' } },
      { id: 'c', text: { de: 'Einbahnstraße nach rechts', en: 'One-way street to the right' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das blaue runde Zeichen schreibt die Fahrtrichtung vor — hier rechts. Es ist verbindlich, keine Empfehlung.',
      en: 'The blue circular sign prescribes the direction — here, right. It is mandatory, not advisory.'
    }
  }
];

/**
 * Pick the questions that should appear for a given licence class.
 * Class AB is the union of A and B (so the combined exam is broader and longer).
 */
export function getQuestionsForClass(licenseClass: LicenseClass): Question[] {
  if (licenseClass === 'AB') {
    return questions.filter(
      (q) => q.classes.includes('AB') || q.classes.includes('A') || q.classes.includes('B')
    );
  }
  return questions.filter((q) => q.classes.includes(licenseClass));
}

export function maxScoreFor(licenseClass: LicenseClass): number {
  return getQuestionsForClass(licenseClass).reduce((sum, q) => sum + q.points, 0);
}

/** Standard German theory pass threshold scaled to mock test:
 *  in the official Class B exam you may lose at most 10 error points.
 *  We use ~80% of total as the pass mark. */
export function passThresholdFor(licenseClass: LicenseClass): number {
  const total = maxScoreFor(licenseClass);
  return Math.ceil(total * 0.8);
}
