import type { Question, LicenseClass } from './types';

/**
 * Original mock-style theory questions. They're inspired by the official
 * German theory exam catalogue but written from scratch — official TÜV/DEKRA
 * questions are copyrighted. Difficulty / topic mix mirrors the real test.
 *
 * Each `LocalizedText` carries DE + EN (required) and AR / TR / RU / PL
 * (optional, with EN fallback at runtime via `pickText`).
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
      en: 'How do you behave at this traffic sign?',
      ar: 'كيف تتصرف عند هذه الإشارة المرورية؟',
      tr: 'Bu trafik işaretinde nasıl davranırsınız?',
      ru: 'Как вы поступите у этого знака?',
      pl: 'Jak się zachowujesz przy tym znaku drogowym?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Anhalten und Vorfahrt gewähren',
          en: 'Stop and give way',
          ar: 'التوقف وإعطاء الأولوية',
          tr: 'Dur ve geçiş hakkı ver',
          ru: 'Остановиться и уступить дорогу',
          pl: 'Zatrzymać się i ustąpić pierwszeństwa'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Geschwindigkeit verringern und vorsichtig weiterfahren',
          en: 'Slow down and continue carefully',
          ar: 'تخفيف السرعة والمتابعة بحذر',
          tr: 'Yavaşla ve dikkatli devam et',
          ru: 'Снизить скорость и осторожно проехать',
          pl: 'Zwolnić i ostrożnie kontynuować'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur halten, wenn andere Fahrzeuge sichtbar sind',
          en: 'Stop only if other vehicles are visible',
          ar: 'التوقف فقط إذا ظهرت مركبات أخرى',
          tr: 'Sadece başka araç görünürse dur',
          ru: 'Останавливаться только если видны другие машины',
          pl: 'Zatrzymać się tylko, gdy widać inne pojazdy'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'An einem Stoppschild müssen Sie unabhängig vom Verkehr anhalten und Vorfahrt gewähren.',
      en: 'At a stop sign you must come to a complete stop regardless of traffic and yield.',
      ar: 'عند إشارة التوقف يجب أن تتوقف بالكامل بغض النظر عن حركة المرور وتعطي الأولوية.',
      tr: 'Dur tabelasında trafiğe bakmaksızın tamamen durmalı ve geçiş hakkı vermelisiniz.',
      ru: 'На знаке STOP вы обязаны полностью остановиться и уступить дорогу независимо от ситуации.',
      pl: 'Przy znaku STOP musisz całkowicie się zatrzymać i ustąpić pierwszeństwa, niezależnie od ruchu.'
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
      en: 'What does this traffic sign mean?',
      ar: 'ماذا تعني هذه الإشارة المرورية؟',
      tr: 'Bu trafik işareti ne anlama gelir?',
      ru: 'Что означает этот знак?',
      pl: 'Co oznacza ten znak drogowy?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Vorfahrt gewähren',
          en: 'Yield right of way',
          ar: 'إعطاء الأولوية',
          tr: 'Geçiş hakkı ver',
          ru: 'Уступите дорогу',
          pl: 'Ustąp pierwszeństwa'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Vorfahrtstraße',
          en: 'Priority road',
          ar: 'طريق ذو أولوية',
          tr: 'Ana yol',
          ru: 'Главная дорога',
          pl: 'Droga z pierwszeństwem'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Halt vor der Kreuzung',
          en: 'Stop before the junction',
          ar: 'توقف قبل التقاطع',
          tr: 'Kavşak öncesi dur',
          ru: 'Остановка перед перекрёстком',
          pl: 'Zatrzymaj się przed skrzyżowaniem'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das umgekehrte Dreieck weist Sie an, dem Querverkehr Vorfahrt zu gewähren — anhalten ist nur nötig, wenn andere bereits in der Kreuzung sind.',
      en: 'The inverted triangle tells you to give way to crossing traffic — you only need to stop if others are already at the junction.',
      ar: 'المثلث المقلوب يطلب منك إعطاء الأولوية للمرور المتقاطع — التوقف ضروري فقط إن كان الآخرون في التقاطع.',
      tr: 'Ters üçgen, kesişen trafiğe yol vermenizi söyler — başkaları kavşağa girdiğinde durmanız gerekir.',
      ru: 'Перевёрнутый треугольник предписывает уступить дорогу — останавливаться нужно, только если другие уже на перекрёстке.',
      pl: 'Odwrócony trójkąt nakazuje ustąpić pierwszeństwa pojazdom z poprzecznej drogi — zatrzymaj się tylko, jeśli inni są już na skrzyżowaniu.'
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
      en: 'What does this traffic sign mean?',
      ar: 'ماذا تعني هذه الإشارة المرورية؟',
      tr: 'Bu trafik işareti ne anlama gelir?',
      ru: 'Что означает этот знак?',
      pl: 'Co oznacza ten znak drogowy?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Vorfahrtstraße',
          en: 'Priority road',
          ar: 'طريق ذو أولوية',
          tr: 'Ana yol',
          ru: 'Главная дорога',
          pl: 'Droga z pierwszeństwem'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Vorfahrt gewähren',
          en: 'Give way',
          ar: 'إعطاء الأولوية',
          tr: 'Geçiş hakkı ver',
          ru: 'Уступить дорогу',
          pl: 'Ustąp pierwszeństwa'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Ende der Vorfahrtstraße',
          en: 'End of priority road',
          ar: 'نهاية الطريق ذي الأولوية',
          tr: 'Ana yolun sonu',
          ru: 'Конец главной дороги',
          pl: 'Koniec drogi z pierwszeństwem'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das gelbe Quadrat auf der Spitze zeigt eine Vorfahrtstraße an: Sie haben Vorfahrt vor querenden Straßen ohne entsprechendes Zeichen.',
      en: 'The yellow diamond marks a priority road — you have right of way over crossing roads without an equivalent sign.',
      ar: 'المعين الأصفر يدل على طريق أولوية — لديك الأولوية على الطرق المتقاطعة غير المؤشرة.',
      tr: 'Sarı eşkenar dörtgen ana yolu işaret eder — eş bir tabela olmayan kesişen yollara karşı geçiş hakkınız vardır.',
      ru: 'Жёлтый ромб обозначает главную дорогу — у вас приоритет над пересекающими дорогами без аналогичного знака.',
      pl: 'Żółty romb oznacza drogę z pierwszeństwem — masz pierwszeństwo nad drogami poprzecznymi bez takiego znaku.'
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
      en: 'You approach this roundabout. Who has the right of way?',
      ar: 'تقترب من هذه الدوّار. من له الأولوية؟',
      tr: 'Bu döner kavşağa yaklaşıyorsunuz. Kimin geçiş önceliği vardır?',
      ru: 'Вы подъезжаете к этому кольцу. Кто имеет приоритет?',
      pl: 'Zbliżasz się do tego ronda. Kto ma pierwszeństwo?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Die Fahrzeuge, die sich bereits im Kreisverkehr befinden',
          en: 'Vehicles already in the roundabout',
          ar: 'المركبات الموجودة بالفعل في الدوّار',
          tr: 'Döner kavşakta hâlihazırda bulunan araçlar',
          ru: 'Машины, уже движущиеся по кругу',
          pl: 'Pojazdy znajdujące się już na rondzie'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Die einfahrenden Fahrzeuge — rechts vor links',
          en: 'Entering vehicles — right before left',
          ar: 'المركبات الداخلة — اليمين قبل اليسار',
          tr: 'Giriş yapan araçlar — sağdan gelen önce',
          ru: 'Въезжающие машины — правый имеет приоритет',
          pl: 'Pojazdy wjeżdżające — z prawej przed lewą'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Pkw vor Lkw',
          en: 'Cars before trucks',
          ar: 'السيارات قبل الشاحنات',
          tr: 'Otomobiller kamyonlardan önce',
          ru: 'Легковые перед грузовыми',
          pl: 'Samochody osobowe przed ciężarowymi'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Beim Kreisverkehrszeichen mit „Vorfahrt gewähren" haben die Fahrzeuge im Kreis Vorrang. Sie dürfen erst einfahren, wenn niemand behindert wird.',
      en: 'When the roundabout sign is combined with a yield sign, traffic already in the circle has priority. You may only enter once nobody is impeded.',
      ar: 'عندما تجمع لوحة الدوّار مع علامة "إعطاء الأولوية"، فإن المركبات في الدوّار لها الأولوية. لا تدخل إلا إذا لم تعرقل أحدًا.',
      tr: '"Yol ver" tabelasıyla birlikte verilen döner kavşak işaretinde, kavşak içindeki araçların önceliği vardır. Kimseyi engellemeden girin.',
      ru: 'Когда знак кольца сопровождается знаком «уступи дорогу», приоритет у машин на круге. Въезжайте, только когда никому не помешаете.',
      pl: 'Gdy znak ronda jest połączony ze znakiem ustąpienia pierwszeństwa, pojazdy na rondzie mają pierwszeństwo. Wjedź dopiero, gdy nikomu nie przeszkodzisz.'
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
      en: 'What does this traffic sign indicate?',
      ar: 'ماذا تشير إليه هذه الإشارة المرورية؟',
      tr: 'Bu trafik işareti neyi gösterir?',
      ru: 'Что обозначает этот знак?',
      pl: 'Co oznacza ten znak drogowy?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Verbot der Einfahrt für Fahrzeuge aller Art',
          en: 'No entry for vehicles of any kind',
          ar: 'ممنوع الدخول لجميع المركبات',
          tr: 'Her türlü araç için giriş yasak',
          ru: 'Въезд запрещён для всех видов транспорта',
          pl: 'Zakaz wjazdu dla wszelkich pojazdów'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Einbahnstraße in Gegenrichtung',
          en: 'One-way street in the opposite direction',
          ar: 'طريق باتجاه واحد بالاتجاه المعاكس',
          tr: 'Karşı yönde tek yönlü yol',
          ru: 'Односторонняя улица во встречном направлении',
          pl: 'Ulica jednokierunkowa w przeciwnym kierunku'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur für Fußgänger',
          en: 'Pedestrians only',
          ar: 'للمشاة فقط',
          tr: 'Sadece yayalar için',
          ru: 'Только для пешеходов',
          pl: 'Tylko dla pieszych'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Schild bedeutet „Verbot der Einfahrt". Es steht häufig am verbotenen Ende einer Einbahnstraße — beides ist daher korrekt.',
      en: 'The sign means "No entry". It is often placed at the forbidden end of a one-way street — so both readings are correct in practice.',
      ar: 'الإشارة تعني "ممنوع الدخول". تُوضع عادة في الطرف الممنوع لطريق باتجاه واحد — لذا الإجابتان صحيحتان عمليًا.',
      tr: 'Tabela "giriş yasaktır" anlamına gelir. Çoğunlukla tek yönlü yolun kapalı ucuna konur — bu yüzden her iki okuma da doğrudur.',
      ru: 'Знак означает «въезд запрещён». Часто стоит на запретном конце односторонней улицы — поэтому оба ответа верны.',
      pl: 'Znak oznacza "zakaz wjazdu". Często stoi na zakazanym końcu ulicy jednokierunkowej — dlatego obie odpowiedzi są poprawne.'
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
      en: 'What do you watch out for at this traffic sign?',
      ar: 'ما الذي تنتبه إليه عند هذه الإشارة؟',
      tr: 'Bu trafik işaretinde neye dikkat edersiniz?',
      ru: 'На что обратить внимание у этого знака?',
      pl: 'Na co zwracasz uwagę przy tym znaku?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Geschwindigkeit deutlich reduzieren',
          en: 'Slow down significantly',
          ar: 'خفّف السرعة بوضوح',
          tr: 'Hızı belirgin şekilde düşür',
          ru: 'Заметно снизить скорость',
          pl: 'Wyraźnie zmniejszyć prędkość'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Mit unvorhersehbarem Verhalten von Kindern rechnen',
          en: 'Expect unpredictable behaviour from children',
          ar: 'توقّع تصرفات غير متوقعة من الأطفال',
          tr: 'Çocukların öngörülemez davranışlarını bekle',
          ru: 'Ожидать непредсказуемого поведения детей',
          pl: 'Spodziewać się nieprzewidywalnych zachowań dzieci'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur am Wochenende achtsam fahren',
          en: 'Only drive carefully on weekends',
          ar: 'القيادة بحذر في عطلة نهاية الأسبوع فقط',
          tr: 'Yalnızca hafta sonları dikkatli sür',
          ru: 'Ехать осторожно только по выходным',
          pl: 'Jeździć ostrożnie tylko w weekendy'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Gefahrenzeichen warnt vor Kindern. Reduzieren Sie die Geschwindigkeit und seien Sie bremsbereit — Kinder können plötzlich auf die Fahrbahn laufen.',
      en: 'The warning sign cautions about children. Reduce speed and be ready to brake — children may step onto the road without warning.',
      ar: 'إشارة التحذير تنبّه لوجود أطفال. خفّف السرعة وكن جاهزًا للفرملة — قد يخرج الأطفال إلى الطريق فجأة.',
      tr: 'Uyarı işareti çocuklara dikkat çeker. Hızı azaltın ve frene basmaya hazır olun — çocuklar aniden yola fırlayabilir.',
      ru: 'Предупреждающий знак указывает на детей. Снизьте скорость и будьте готовы тормозить — дети могут внезапно выбежать.',
      pl: 'Znak ostrzegawczy informuje o dzieciach. Zmniejsz prędkość i bądź gotów hamować — dzieci mogą nagle wybiec na drogę.'
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
      en: 'At a junction with no traffic signs — who has right of way?',
      ar: 'عند تقاطع بدون إشارات — من له الأولوية؟',
      tr: 'Trafik tabelası olmayan kavşakta — kimin geçiş önceliği vardır?',
      ru: 'На перекрёстке без знаков — кто имеет приоритет?',
      pl: 'Na skrzyżowaniu bez znaków — kto ma pierwszeństwo?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Wer von rechts kommt',
          en: 'Whoever comes from the right',
          ar: 'القادم من اليمين',
          tr: 'Sağdan gelen',
          ru: 'Тот, кто едет справа',
          pl: 'Ten, kto nadjeżdża z prawej'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Wer schneller fährt',
          en: 'Whoever is faster',
          ar: 'الأسرع',
          tr: 'Daha hızlı olan',
          ru: 'Тот, кто едет быстрее',
          pl: 'Ten, kto jedzie szybciej'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Pkw vor Fahrrädern',
          en: 'Cars before bicycles',
          ar: 'السيارات قبل الدراجات',
          tr: 'Otomobiller bisikletlerden önce',
          ru: 'Автомобили перед велосипедами',
          pl: 'Samochody przed rowerami'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'An ungeregelten Kreuzungen gilt „rechts vor links" — unabhängig von Fahrzeugtyp oder Geschwindigkeit.',
      en: 'At unmarked junctions the rule is "right before left" — regardless of vehicle type or speed.',
      ar: 'في التقاطعات غير المنظمة تطبّق قاعدة "اليمين قبل اليسار" — بغضّ النظر عن نوع المركبة أو السرعة.',
      tr: 'Tabelasız kavşaklarda "sağdan gelene yol ver" kuralı geçerlidir — araç türü veya hızdan bağımsız.',
      ru: 'На нерегулируемых перекрёстках действует «правый имеет приоритет» — независимо от типа машины или скорости.',
      pl: 'Na skrzyżowaniach bez znaków obowiązuje zasada "prawej ręki" — niezależnie od rodzaju pojazdu czy prędkości.'
    }
  },
  {
    id: 'right-emergency',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Ein Einsatzfahrzeug nähert sich mit Blaulicht und Martinshorn. Was tun Sie?',
      en: 'An emergency vehicle approaches with blue lights and siren. What do you do?',
      ar: 'تقترب مركبة طوارئ بالأضواء الزرقاء والصفّارة. ماذا تفعل؟',
      tr: 'Mavi ışık ve sirenle bir acil durum aracı yaklaşıyor. Ne yaparsınız?',
      ru: 'Машина с проблесковым маячком и сиреной. Ваши действия?',
      pl: 'Zbliża się pojazd uprzywilejowany z sygnałem i sygnałem dźwiękowym. Co robisz?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Sofort eine freie Gasse bilden und Platz machen',
          en: 'Form a clear lane immediately and make way',
          ar: 'افتح ممرًا فوريًا وأفسح الطريق',
          tr: 'Hemen bir kurtarma koridoru oluşturun ve yol verin',
          ru: 'Немедленно образовать «коридор» и уступить дорогу',
          pl: 'Natychmiast utworzyć korytarz ratunkowy i ustąpić'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Anhalten und das Lenkrad festhalten',
          en: 'Stop and grip the steering wheel',
          ar: 'توقف وأمسك المقود',
          tr: 'Dur ve direksiyonu sıkıca tut',
          ru: 'Остановиться и держать руль',
          pl: 'Zatrzymać się i mocno trzymać kierownicę'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Schneller fahren, um nicht im Weg zu sein',
          en: 'Drive faster to get out of the way',
          ar: 'القيادة بسرعة أكبر للابتعاد',
          tr: 'Yoldan çekilmek için daha hızlı sür',
          ru: 'Ехать быстрее, чтобы не мешать',
          pl: 'Jechać szybciej, żeby zejść z drogi'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Sie müssen unverzüglich eine Rettungsgasse bilden — auch im Stand. Schneller fahren ist gefährlich und nicht erlaubt.',
      en: 'You must immediately form an emergency lane — even when stationary. Speeding up is dangerous and not permitted.',
      ar: 'يجب فتح ممر طوارئ فورًا — حتى عند التوقف. القيادة بسرعة أكبر خطيرة وغير مسموحة.',
      tr: 'Duruyor olsanız bile derhal bir kurtarma koridoru oluşturmalısınız. Hızlanmak tehlikeli ve yasaktır.',
      ru: 'Нужно немедленно образовать коридор — даже стоя. Разгоняться нельзя, это опасно.',
      pl: 'Musisz natychmiast utworzyć korytarz ratunkowy — nawet stojąc. Przyspieszanie jest niebezpieczne i niedozwolone.'
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
      en: 'What is the general speed limit inside built-up areas?',
      ar: 'ما الحد الأقصى العام للسرعة داخل المدن؟',
      tr: 'Yerleşim yerlerinde genel azami hız nedir?',
      ru: 'Какова общая максимальная скорость в населённом пункте?',
      pl: 'Jakie jest ogólne ograniczenie prędkości w obszarze zabudowanym?'
    },
    options: [
      {
        id: 'a',
        text: { de: '30 km/h', en: '30 km/h', ar: '30 كم/س', tr: '30 km/s', ru: '30 км/ч', pl: '30 km/h' }
      },
      {
        id: 'b',
        text: { de: '50 km/h', en: '50 km/h', ar: '50 كم/س', tr: '50 km/s', ru: '50 км/ч', pl: '50 km/h' }
      },
      {
        id: 'c',
        text: { de: '70 km/h', en: '70 km/h', ar: '70 كم/س', tr: '70 km/s', ru: '70 км/ч', pl: '70 km/h' }
      }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Innerorts dürfen Sie maximal 50 km/h fahren, sofern keine niedrigere Beschilderung gilt.',
      en: 'Inside built-up areas the maximum is 50 km/h, unless a lower limit is signposted.',
      ar: 'داخل المدن الحد الأقصى هو 50 كم/س ما لم تشير لوحات إلى حد أقل.',
      tr: 'Yerleşim yerlerinde daha düşük bir tabela yoksa azami hız 50 km/s.',
      ru: 'В населённых пунктах максимум 50 км/ч, если нет меньшего ограничения.',
      pl: 'W terenie zabudowanym maksimum to 50 km/h, o ile nie oznaczono niższego limitu.'
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
      en: 'In a 30 km/h zone — what else applies besides the speed?',
      ar: 'في منطقة 30 كم/س — ما الذي ينطبق إلى جانب السرعة؟',
      tr: '30 km/s bölgesinde — hız dışında ne geçerlidir?',
      ru: 'В зоне 30 км/ч — что ещё действует, помимо скорости?',
      pl: 'W strefie 30 km/h — co poza prędkością obowiązuje?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'In der Regel gilt rechts vor links',
          en: 'Right before left applies as a rule',
          ar: 'في الغالب تطبّق قاعدة "اليمين قبل اليسار"',
          tr: 'Genelde "sağdan gelene yol ver" kuralı geçerlidir',
          ru: 'Как правило действует «правый имеет приоритет»',
          pl: 'Z reguły obowiązuje zasada prawej ręki'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Lkw über 7,5 t sind verboten',
          en: 'Trucks over 7.5 t are forbidden',
          ar: 'الشاحنات فوق 7.5 طن ممنوعة',
          tr: '7,5 tonun üstündeki kamyonlar yasaktır',
          ru: 'Грузовики свыше 7,5 т запрещены',
          pl: 'Ciężarówki powyżej 7,5 t są zakazane'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Es gilt zwingend eine Mindestgeschwindigkeit',
          en: 'A minimum speed is mandatory',
          ar: 'هناك حد أدنى إلزامي للسرعة',
          tr: 'Zorunlu bir asgari hız vardır',
          ru: 'Обязательна минимальная скорость',
          pl: 'Obowiązuje obowiązkowa prędkość minimalna'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'In Tempo-30-Zonen gibt es meist keine Vorfahrtsregelungen — es gilt rechts vor links. Aufmerksamkeit ist daher besonders wichtig.',
      en: 'In 30 km/h zones there are usually no priority signs — the right-before-left rule applies. Stay alert.',
      ar: 'في مناطق 30 كم/س لا توجد عادة لوحات أولوية — تطبّق قاعدة "اليمين قبل اليسار". الانتباه ضروري.',
      tr: '30 km/s bölgelerinde genelde öncelik tabelası yoktur — sağdan gelene yol kuralı geçerlidir. Dikkatli olun.',
      ru: 'В зонах 30 км/ч обычно нет знаков приоритета — действует «правый имеет приоритет». Будьте внимательны.',
      pl: 'W strefach 30 km/h zazwyczaj nie ma znaków pierwszeństwa — obowiązuje zasada prawej ręki. Bądź czujny.'
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
      en: 'Which safety distance is appropriate on a dry road?',
      ar: 'ما المسافة الآمنة المناسبة على طريق جاف؟',
      tr: 'Kuru yolda uygun güvenlik mesafesi nedir?',
      ru: 'Какая безопасная дистанция уместна на сухой дороге?',
      pl: 'Jaki odstęp bezpieczeństwa jest właściwy na suchej drodze?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Etwa der Weg, den Sie in 2 Sekunden zurücklegen',
          en: 'Roughly the distance you cover in 2 seconds',
          ar: 'تقريبًا المسافة التي تقطعها في ثانيتين',
          tr: 'Yaklaşık 2 saniyede aldığınız yol',
          ru: 'Примерно путь, который вы проедете за 2 секунды',
          pl: 'Mniej więcej droga przebyta w 2 sekundy'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Mindestens 5 Meter',
          en: 'At least 5 metres',
          ar: '5 أمتار على الأقل',
          tr: 'En az 5 metre',
          ru: 'Не менее 5 метров',
          pl: 'Co najmniej 5 metrów'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Der halbe Tachowert in Metern',
          en: 'Half the speedometer reading in metres',
          ar: 'نصف قراءة عداد السرعة بالأمتار',
          tr: 'Hız göstergesi değerinin yarısı kadar metre',
          ru: 'Половина показания спидометра в метрах',
          pl: 'Połowa wskazania prędkościomierza w metrach'
        }
      }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Faustregel: halber Tachowert in Metern — das entspricht etwa der Strecke, die Sie in 2 Sekunden fahren. Bei Nässe oder Glätte verdoppeln.',
      en: 'Rule of thumb: half the speedometer reading in metres — roughly your 2-second distance. Double it on wet or icy roads.',
      ar: 'القاعدة العامة: نصف قراءة العداد بالأمتار — أي مسافة ثانيتين تقريبًا. ضاعفها في الرطوبة أو الجليد.',
      tr: 'Pratik kural: hız göstergesinin yarısı kadar metre — yaklaşık 2 saniyelik mesafe. Islak ya da buzlu yolda ikiye katlayın.',
      ru: 'Правило: половина показания спидометра в метрах — примерно 2-секундная дистанция. На мокрой или скользкой удвойте.',
      pl: 'Zasada kciuka: połowa wskazania prędkościomierza w metrach — to mniej więcej droga przebyta w 2 sekundy. Na mokrej lub śliskiej drodze podwoić.'
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
      en: 'Which alcohol limit applies during the probationary period and for drivers under 21?',
      ar: 'ما هو حد الكحول خلال فترة الاختبار وللسائقين دون 21 عامًا؟',
      tr: 'Deneme süresinde ve 21 yaş altı sürücüler için alkol sınırı nedir?',
      ru: 'Какой лимит алкоголя в испытательный срок и для водителей до 21 года?',
      pl: 'Jaki limit alkoholu obowiązuje w okresie próbnym i dla kierowców poniżej 21 lat?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: '0,0 ‰ (absolutes Alkoholverbot)',
          en: '0.0 ‰ (absolute alcohol ban)',
          ar: '0.0 ‰ (حظر تام للكحول)',
          tr: '0,0 ‰ (mutlak alkol yasağı)',
          ru: '0,0 ‰ (полный запрет)',
          pl: '0,0 ‰ (całkowity zakaz alkoholu)'
        }
      },
      {
        id: 'b',
        text: { de: '0,3 ‰', en: '0.3 ‰', ar: '0.3 ‰', tr: '0,3 ‰', ru: '0,3 ‰', pl: '0,3 ‰' }
      },
      {
        id: 'c',
        text: { de: '0,5 ‰', en: '0.5 ‰', ar: '0.5 ‰', tr: '0,5 ‰', ru: '0,5 ‰', pl: '0,5 ‰' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'In der Probezeit und unter 21 Jahren gilt 0,0 ‰. Verstöße werden mit Bußgeld, Punkten und Verlängerung der Probezeit geahndet.',
      en: 'During the probationary period and for drivers under 21 the limit is 0.0 ‰. Violations lead to fines, points and an extended probation.',
      ar: 'خلال فترة الاختبار ولمن هم دون 21، الحد هو 0.0 ‰. المخالفات تستوجب غرامات ونقاط وتمديد فترة الاختبار.',
      tr: 'Deneme süresinde ve 21 yaş altı için sınır 0,0 ‰\'dir. İhlaller para cezası, puan ve uzatılmış deneme süresine yol açar.',
      ru: 'В испытательный срок и до 21 года лимит 0,0 ‰. Нарушение — штраф, баллы и продление испытательного срока.',
      pl: 'W okresie próbnym i poniżej 21 lat obowiązuje 0,0 ‰. Naruszenia oznaczają mandaty, punkty i przedłużenie okresu próbnego.'
    }
  },
  {
    id: 'firstaid-call',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Welche Notrufnummer wählen Sie nach einem Verkehrsunfall in Deutschland und der EU?',
      en: 'Which emergency number do you call after a road accident in Germany and the EU?',
      ar: 'ما رقم الطوارئ الذي تتصل به بعد حادث مروري في ألمانيا والاتحاد الأوروبي؟',
      tr: 'Almanya ve AB\'de bir kaza sonrası hangi acil numarayı ararsınız?',
      ru: 'Какой номер экстренной службы набрать после ДТП в Германии и ЕС?',
      pl: 'Pod jaki numer alarmowy dzwonisz po wypadku w Niemczech i UE?'
    },
    options: [
      { id: 'a', text: { de: '110', en: '110', ar: '110', tr: '110', ru: '110', pl: '110' } },
      { id: 'b', text: { de: '112', en: '112', ar: '112', tr: '112', ru: '112', pl: '112' } },
      { id: 'c', text: { de: '911', en: '911', ar: '911', tr: '911', ru: '911', pl: '911' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: '112 ist der einheitliche europäische Notruf für Feuerwehr und Rettungsdienst. 110 ist die Polizei in Deutschland.',
      en: '112 is the single European emergency number for fire and ambulance services. 110 is the police in Germany.',
      ar: '112 هو رقم الطوارئ الأوروبي الموحد للإطفاء والإسعاف. 110 هو الشرطة في ألمانيا.',
      tr: '112, AB genelinde itfaiye ve ambulans için tek acil durum numarasıdır. 110 Almanya\'da polistir.',
      ru: '112 — единый европейский номер для пожарных и скорой. 110 — полиция в Германии.',
      pl: '112 to jednolity europejski numer alarmowy dla straży i pogotowia. 110 to policja w Niemczech.'
    }
  },
  {
    id: 'firstaid-securing',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Was tun Sie zuerst nach einem Verkehrsunfall?',
      en: 'What do you do first after a road accident?',
      ar: 'ما الذي تفعله أولًا بعد حادث مروري؟',
      tr: 'Bir trafik kazasından sonra önce ne yaparsınız?',
      ru: 'Что вы делаете в первую очередь после ДТП?',
      pl: 'Co robisz najpierw po wypadku drogowym?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Unfallstelle absichern (Warnblinker, Warndreieck)',
          en: 'Secure the scene (hazard lights, warning triangle)',
          ar: 'تأمين موقع الحادث (أضواء التحذير، المثلث العاكس)',
          tr: 'Kaza yerini güvene al (dörtlü flaşör, uyarı üçgeni)',
          ru: 'Обозначить место ДТП (аварийка, знак)',
          pl: 'Zabezpieczyć miejsce zdarzenia (światła awaryjne, trójkąt)'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Erste Hilfe leisten',
          en: 'Provide first aid',
          ar: 'تقديم الإسعافات الأولية',
          tr: 'İlk yardım sağla',
          ru: 'Оказать первую помощь',
          pl: 'Udzielić pierwszej pomocy'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Den Notruf 112 absetzen',
          en: 'Make the 112 emergency call',
          ar: 'الاتصال بالطوارئ 112',
          tr: '112\'yi ara',
          ru: 'Позвонить 112',
          pl: 'Zadzwonić pod 112'
        }
      },
      {
        id: 'd',
        text: {
          de: 'Foto für die Versicherung machen',
          en: 'Take a photo for the insurance',
          ar: 'التقاط صورة للتأمين',
          tr: 'Sigorta için fotoğraf çek',
          ru: 'Сделать фото для страховой',
          pl: 'Zrobić zdjęcie dla ubezpieczenia'
        }
      }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Reihenfolge: Absichern → Notruf → Erste Hilfe. Versicherungsdetails kommen erst, wenn Verletzte versorgt sind.',
      en: 'Order: secure → call → first aid. Insurance details come only after the injured are cared for.',
      ar: 'الترتيب: تأمين → اتصال → إسعاف. تفاصيل التأمين بعد رعاية المصابين.',
      tr: 'Sıra: güvene al → ara → ilk yardım. Sigorta detayları yaralılar bakım altına alındıktan sonra.',
      ru: 'Порядок: обозначить → вызвать → помощь. Страховка — после того, как пострадавшие обработаны.',
      pl: 'Kolejność: zabezpiecz → zadzwoń → pierwsza pomoc. Szczegóły ubezpieczenia dopiero po zaopiekowaniu się poszkodowanymi.'
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
      en: 'Which behaviour is most environmentally friendly?',
      ar: 'ما الذي يحمي البيئة أكثر؟',
      tr: 'Hangi davranış çevreye en az zarar verir?',
      ru: 'Какое поведение наиболее экологично?',
      pl: 'Które zachowanie najbardziej chroni środowisko?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Bei längeren Wartezeiten den Motor abstellen',
          en: 'Switch the engine off during long waits',
          ar: 'إيقاف المحرك عند الانتظار الطويل',
          tr: 'Uzun beklemelerde motoru kapat',
          ru: 'Глушить двигатель при длительных остановках',
          pl: 'Wyłączyć silnik podczas dłuższego postoju'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Möglichst hochtourig fahren',
          en: 'Drive at high engine revs',
          ar: 'القيادة بدورات عالية للمحرك',
          tr: 'Mümkünse yüksek devirde sür',
          ru: 'Ехать на высоких оборотах',
          pl: 'Jeździć na wysokich obrotach'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Mit niedriger Drehzahl und vorausschauend fahren',
          en: 'Drive at low revs and look ahead',
          ar: 'القيادة بدورات منخفضة وبتوقّع',
          tr: 'Düşük devirde ve öngörülü sür',
          ru: 'Ехать на низких оборотах и предусмотрительно',
          pl: 'Jeździć na niskich obrotach i przewidująco'
        }
      }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Frühes Hochschalten, niedrige Drehzahl und Motor-Aus bei Stehzeiten reduzieren Verbrauch und Emissionen deutlich.',
      en: 'Early up-shifting, low revs and engine-off during stops cut fuel use and emissions significantly.',
      ar: 'التعشيق المبكر، الدورات المنخفضة وإيقاف المحرك عند التوقف يقلل الاستهلاك والانبعاثات.',
      tr: 'Erken vites büyütme, düşük devir ve durakta motor kapatma yakıtı ve emisyonu belirgin azaltır.',
      ru: 'Раннее переключение, низкие обороты и глушение на стоянке снижают расход и выбросы.',
      pl: 'Wczesne zmienianie biegów, niskie obroty i wyłączanie silnika na postoju znacznie obniżają zużycie i emisję.'
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
      en: 'What is the minimum tread depth for car tyres?',
      ar: 'ما الحد الأدنى لعمق نقش إطارات السيارة؟',
      tr: 'Otomobil lastiklerinde asgari diş derinliği nedir?',
      ru: 'Какая минимальная глубина протектора шин легкового авто?',
      pl: 'Jaka jest minimalna głębokość bieżnika opon samochodu?'
    },
    options: [
      { id: 'a', text: { de: '1,6 mm', en: '1.6 mm', ar: '1.6 مم', tr: '1,6 mm', ru: '1,6 мм', pl: '1,6 mm' } },
      { id: 'b', text: { de: '3,0 mm', en: '3.0 mm', ar: '3.0 مم', tr: '3,0 mm', ru: '3,0 мм', pl: '3,0 mm' } },
      { id: 'c', text: { de: '5,0 mm', en: '5.0 mm', ar: '5.0 مم', tr: '5,0 mm', ru: '5,0 мм', pl: '5,0 mm' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Gesetzliche Mindestprofiltiefe ist 1,6 mm. Empfohlen werden jedoch 3 mm bei Sommer- und 4 mm bei Winterreifen.',
      en: 'The legal minimum is 1.6 mm. However, 3 mm for summer tyres and 4 mm for winter tyres are recommended.',
      ar: 'الحد القانوني هو 1.6 مم. يُنصح بـ 3 مم للإطارات الصيفية و4 مم للشتوية.',
      tr: 'Yasal asgari 1,6 mm. Ancak yazlık için 3 mm, kışlık için 4 mm önerilir.',
      ru: 'Закон требует 1,6 мм. Рекомендуется 3 мм для летних и 4 мм для зимних шин.',
      pl: 'Minimum prawne to 1,6 mm. Zalecane jest jednak 3 mm dla opon letnich i 4 mm dla zimowych.'
    }
  },
  {
    id: 'tech-load',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was ist beim Beladen eines Pkw zu beachten?',
      en: 'What do you watch out for when loading a car?',
      ar: 'ما الذي يجب مراعاته عند تحميل السيارة؟',
      tr: 'Bir otomobili yüklerken nelere dikkat edilir?',
      ru: 'Что важно при погрузке легкового автомобиля?',
      pl: 'Na co zwracać uwagę podczas załadunku samochodu?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Schwere Gegenstände nach unten und nach vorne',
          en: 'Heavy items go down and forward',
          ar: 'الأشياء الثقيلة في الأسفل وإلى الأمام',
          tr: 'Ağır eşyalar alta ve öne',
          ru: 'Тяжёлые предметы — ниже и вперёд',
          pl: 'Ciężkie przedmioty na dół i do przodu'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Ladung muss verkehrssicher gesichert werden',
          en: 'Load must be secured safely',
          ar: 'يجب تأمين الحمولة بشكل آمن',
          tr: 'Yük güvenli şekilde sabitlenmelidir',
          ru: 'Груз должен быть надёжно закреплён',
          pl: 'Ładunek musi być bezpiecznie zamocowany'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Über die Rückbank stapeln spart Platz',
          en: 'Stack high over the rear seats to save space',
          ar: 'التكديس فوق المقعد الخلفي يوفر المساحة',
          tr: 'Arka koltuk üstüne yığmak yer kazandırır',
          ru: 'Складывать поверх заднего сиденья — экономия места',
          pl: 'Składanie nad tylnym siedzeniem oszczędza miejsce'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schwerpunkt niedrig halten und Ladung gegen Verrutschen sichern. Lose Gegenstände werden bei Bremsung zum Geschoss.',
      en: 'Keep the centre of gravity low and secure the load against shifting. Loose items become projectiles under braking.',
      ar: 'حافظ على مركز ثقل منخفض وأمّن الحمولة. الأشياء غير المثبتة تصبح قذائف عند الكبح.',
      tr: 'Ağırlık merkezini düşük tut ve yükü kaymaya karşı sabitle. Bağsız eşyalar fren anında mermiye döner.',
      ru: 'Держите центр тяжести низко и фиксируйте груз. Незакреплённые предметы при торможении превращаются в снаряды.',
      pl: 'Utrzymuj niski środek ciężkości i zabezpiecz ładunek przed przesunięciem. Luźne przedmioty stają się pociskami przy hamowaniu.'
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
      en: 'Who must wear a suitable protective helmet on a motorcycle?',
      ar: 'من يجب أن يرتدي خوذة واقية مناسبة على الدراجة النارية؟',
      tr: 'Motosiklette uygun koruyucu kaskı kim takmalıdır?',
      ru: 'Кто должен носить защитный шлем на мотоцикле?',
      pl: 'Kto musi nosić odpowiedni kask ochronny na motocyklu?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Nur der Fahrer',
          en: 'Only the rider',
          ar: 'السائق فقط',
          tr: 'Sadece sürücü',
          ru: 'Только водитель',
          pl: 'Tylko kierujący'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Fahrer und Beifahrer',
          en: 'Rider and pillion passenger',
          ar: 'السائق والراكب الخلفي',
          tr: 'Sürücü ve arka yolcu',
          ru: 'Водитель и пассажир',
          pl: 'Kierujący i pasażer'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Niemand bei kurzen Strecken',
          en: 'Nobody on short trips',
          ar: 'لا أحد في الرحلات القصيرة',
          tr: 'Kısa mesafelerde kimse',
          ru: 'Никто при коротких поездках',
          pl: 'Nikt na krótkich trasach'
        }
      }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Helmpflicht gilt für Fahrer und Sozius — unabhängig von Streckenlänge oder Geschwindigkeit.',
      en: 'Helmet requirement applies to both rider and pillion — regardless of trip length or speed.',
      ar: 'الخوذة إلزامية للسائق والراكب الخلفي — بغض النظر عن طول الرحلة أو السرعة.',
      tr: 'Kask zorunluluğu hem sürücü hem arka yolcu için geçerlidir — mesafe veya hızdan bağımsız.',
      ru: 'Шлем обязателен и для водителя, и для пассажира — независимо от длины пути и скорости.',
      pl: 'Obowiązek noszenia kasku dotyczy kierującego i pasażera — niezależnie od długości trasy czy prędkości.'
    }
  },
  {
    id: 'moto-curve',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 4,
    question: {
      de: 'Wie verhalten Sie sich beim Anfahren einer Kurve mit dem Motorrad?',
      en: 'How do you approach a curve on a motorcycle?',
      ar: 'كيف تقترب من منعطف بالدراجة النارية؟',
      tr: 'Motosikletle bir virajı nasıl alırsınız?',
      ru: 'Как подъезжать к повороту на мотоцикле?',
      pl: 'Jak podjeżdżasz pod zakręt na motocyklu?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Vor der Kurve bremsen, in der Kurve gleichmäßig Gas',
          en: 'Brake before the curve, throttle smoothly through it',
          ar: 'الفرملة قبل المنعطف وثبات الغاز خلاله',
          tr: 'Virajdan önce frenle, viraj boyunca düzenli gaz ver',
          ru: 'Тормозить до поворота, в повороте равномерно поддавать газ',
          pl: 'Hamuj przed zakrętem, w zakręcie utrzymuj równe gaz'
        }
      },
      {
        id: 'b',
        text: {
          de: 'In der Kurve hart bremsen',
          en: 'Brake hard inside the curve',
          ar: 'الفرملة بقوة داخل المنعطف',
          tr: 'Virajın içinde sert frenle',
          ru: 'Резко тормозить в повороте',
          pl: 'Hamuj mocno w środku zakrętu'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Den Blick zum Kurvenausgang richten',
          en: 'Look towards the exit of the curve',
          ar: 'وجّه النظر إلى مخرج المنعطف',
          tr: 'Bakışını virajın çıkışına çevir',
          ru: 'Смотреть на выход из поворота',
          pl: 'Patrz na wyjazd z zakrętu'
        }
      }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Geschwindigkeit vor der Kurve anpassen, gleichmäßig durchfahren und den Blick zum Kurvenausgang richten — der Blick zieht das Motorrad mit.',
      en: 'Set your speed before the curve, ride through smoothly and look at the exit — your bike follows your gaze.',
      ar: 'اضبط السرعة قبل المنعطف، اعبره بسلاسة ووجّه النظر للمخرج — الدراجة تتبع نظرك.',
      tr: 'Hızı virajdan önce ayarla, akıcı geç ve çıkışa bak — motosiklet bakışını takip eder.',
      ru: 'Сбросьте скорость до поворота, проходите ровно и смотрите на выход — мотоцикл едет туда, куда смотрите.',
      pl: 'Ustaw prędkość przed zakrętem, przejedź płynnie i patrz na wyjazd — motocykl podąża za wzrokiem.'
    }
  },
  {
    id: 'moto-gear',
    category: 'behavior',
    classes: ['A', 'AB'],
    points: 3,
    question: {
      de: 'Welche Schutzkleidung ist beim Motorradfahren empfehlenswert?',
      en: 'Which protective gear is recommended when riding a motorcycle?',
      ar: 'ما ملابس الحماية الموصى بها عند قيادة الدراجة النارية؟',
      tr: 'Motosiklet sürerken hangi koruyucu giysiler önerilir?',
      ru: 'Какая защитная экипировка рекомендуется на мотоцикле?',
      pl: 'Jaka odzież ochronna jest zalecana na motocyklu?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Motorradjacke und -hose mit Protektoren',
          en: 'Motorcycle jacket and trousers with armour',
          ar: 'سترة وبنطلون دراجة نارية مع واقيات',
          tr: 'Korumalı motosiklet ceketi ve pantolonu',
          ru: 'Мотокуртка и брюки с защитой',
          pl: 'Kurtka i spodnie motocyklowe z ochraniaczami'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Stabile Stiefel',
          en: 'Sturdy boots',
          ar: 'حذاء مرتفع متين',
          tr: 'Sağlam botlar',
          ru: 'Прочные ботинки',
          pl: 'Solidne buty'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Sandalen bei warmem Wetter',
          en: 'Sandals when warm',
          ar: 'الصنادل في الطقس الحار',
          tr: 'Sıcakta sandalet',
          ru: 'Сандалии в тёплую погоду',
          pl: 'Sandały przy ciepłej pogodzie'
        }
      },
      {
        id: 'd',
        text: {
          de: 'Geeignete Handschuhe',
          en: 'Suitable gloves',
          ar: 'قفازات مناسبة',
          tr: 'Uygun eldivenler',
          ru: 'Подходящие перчатки',
          pl: 'Odpowiednie rękawice'
        }
      }
    ],
    correctIds: ['a', 'b', 'd'],
    explanation: {
      de: 'Vollständige Schutzkleidung — Helm, Jacke, Hose mit Protektoren, Stiefel und Handschuhe — reduziert Verletzungen erheblich.',
      en: 'Full gear — helmet, jacket, armoured trousers, boots and gloves — drastically reduces injuries.',
      ar: 'الملابس الكاملة — خوذة، سترة، بنطلون بحماية، حذاء وقفازات — تقلل الإصابات بشكل كبير.',
      tr: 'Tam takım — kask, ceket, korumalı pantolon, bot ve eldiven — yaralanmaları büyük oranda azaltır.',
      ru: 'Полная экипировка — шлем, куртка, брюки с защитой, ботинки и перчатки — значительно снижает травмы.',
      pl: 'Pełna odzież — kask, kurtka, spodnie z ochraniaczami, buty i rękawice — drastycznie ogranicza obrażenia.'
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
      en: 'What is the maximum design speed of a Mofa?',
      ar: 'ما السرعة القصوى التصميمية للموبد؟',
      tr: 'Mofa\'nın yapı gereği azami hızı nedir?',
      ru: 'Какая максимальная конструктивная скорость мопеда (Mofa)?',
      pl: 'Jaka jest maksymalna prędkość konstrukcyjna Mofa?'
    },
    options: [
      { id: 'a', text: { de: '20 km/h', en: '20 km/h', ar: '20 كم/س', tr: '20 km/s', ru: '20 км/ч', pl: '20 km/h' } },
      { id: 'b', text: { de: '25 km/h', en: '25 km/h', ar: '25 كم/س', tr: '25 km/s', ru: '25 км/ч', pl: '25 km/h' } },
      { id: 'c', text: { de: '45 km/h', en: '45 km/h', ar: '45 كم/س', tr: '45 km/s', ru: '45 км/ч', pl: '45 km/h' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Ein Mofa ist auf eine bauartbedingte Höchstgeschwindigkeit von 25 km/h begrenzt.',
      en: 'A Mofa is restricted by design to a maximum speed of 25 km/h.',
      ar: 'الموبد محدود تصميميًا بسرعة قصوى 25 كم/س.',
      tr: 'Mofa, yapı gereği 25 km/s azami hızla sınırlıdır.',
      ru: 'Мопед (Mofa) конструктивно ограничен 25 км/ч.',
      pl: 'Mofa jest konstrukcyjnie ograniczona do 25 km/h.'
    }
  },
  {
    id: 'mofa-age',
    category: 'behavior',
    classes: ['Mofa'],
    points: 2,
    question: {
      de: 'Ab welchem Alter darf man in Deutschland Mofa fahren?',
      en: 'From what age may you ride a Mofa in Germany?',
      ar: 'من أي عمر يحق لك قيادة الموبد في ألمانيا؟',
      tr: 'Almanya\'da Mofa kullanma yaşı nedir?',
      ru: 'С какого возраста можно ездить на мопеде в Германии?',
      pl: 'Od jakiego wieku można w Niemczech jeździć na Mofa?'
    },
    options: [
      { id: 'a', text: { de: '14 Jahre', en: '14 years', ar: '14 سنة', tr: '14 yaş', ru: '14 лет', pl: '14 lat' } },
      { id: 'b', text: { de: '15 Jahre', en: '15 years', ar: '15 سنة', tr: '15 yaş', ru: '15 лет', pl: '15 lat' } },
      { id: 'c', text: { de: '16 Jahre', en: '16 years', ar: '16 سنة', tr: '16 yaş', ru: '16 лет', pl: '16 lat' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Die Mofa-Prüfbescheinigung darf in Deutschland ab dem 15. Lebensjahr erworben werden.',
      en: 'In Germany the Mofa certificate may be obtained from age 15.',
      ar: 'يمكن الحصول على شهادة الموبد في ألمانيا من سن 15.',
      tr: 'Almanya\'da Mofa belgesi 15 yaşından itibaren alınabilir.',
      ru: 'Удостоверение на Mofa в Германии можно получить с 15 лет.',
      pl: 'Kartę motoroweru w Niemczech można uzyskać od 15. roku życia.'
    }
  },
  {
    id: 'mofa-passenger',
    category: 'behavior',
    classes: ['Mofa'],
    points: 3,
    question: {
      de: 'Dürfen Sie auf einem Mofa Personen mitnehmen?',
      en: 'May you carry passengers on a Mofa?',
      ar: 'هل يحق لك نقل ركّاب على الموبد؟',
      tr: 'Mofa\'da yolcu taşıyabilir misiniz?',
      ru: 'Можно ли перевозить пассажиров на Mofa?',
      pl: 'Czy na Mofa wolno przewozić pasażerów?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Ja, eine Person',
          en: 'Yes, one person',
          ar: 'نعم، شخص واحد',
          tr: 'Evet, bir kişi',
          ru: 'Да, одного человека',
          pl: 'Tak, jedną osobę'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Nein — Personen­beförderung ist auf einem Mofa nicht erlaubt',
          en: 'No — carrying passengers is not allowed on a Mofa',
          ar: 'لا — نقل الركاب غير مسموح على الموبد',
          tr: 'Hayır — Mofa\'da yolcu taşımak yasaktır',
          ru: 'Нет — перевозка пассажиров на Mofa запрещена',
          pl: 'Nie — przewóz osób na Mofa jest zakazany'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nur Kinder unter 7 Jahren',
          en: 'Only children under 7',
          ar: 'فقط الأطفال دون 7 سنوات',
          tr: 'Yalnızca 7 yaş altı çocuklar',
          ru: 'Только дети до 7 лет',
          pl: 'Tylko dzieci poniżej 7. roku życia'
        }
      }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Mofas sind Einsitzer — die Mitnahme weiterer Personen ist grundsätzlich nicht erlaubt.',
      en: 'Mofas are single-seaters — carrying additional people is not permitted.',
      ar: 'الموبد لمقعد واحد — نقل أشخاص آخرين غير مسموح.',
      tr: 'Mofa tek kişiliktir — başka birini taşımak yasaktır.',
      ru: 'Mofa — одноместный, перевозка других запрещена.',
      pl: 'Mofa jest jednoosobowa — przewożenie innych osób jest zabronione.'
    }
  },
  {
    id: 'mofa-helmet',
    category: 'tech',
    classes: ['Mofa'],
    points: 3,
    question: {
      de: 'Müssen Sie auf einem Mofa einen Schutzhelm tragen?',
      en: 'Must you wear a helmet on a Mofa?',
      ar: 'هل يجب ارتداء خوذة على الموبد؟',
      tr: 'Mofa\'da kask takmak zorunlu mudur?',
      ru: 'Нужно ли надевать шлем на Mofa?',
      pl: 'Czy na Mofa trzeba nosić kask?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Ja, immer',
          en: 'Yes, always',
          ar: 'نعم، دائمًا',
          tr: 'Evet, her zaman',
          ru: 'Да, всегда',
          pl: 'Tak, zawsze'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Nur außerorts',
          en: 'Only outside built-up areas',
          ar: 'فقط خارج المدن',
          tr: 'Yalnızca yerleşim yeri dışında',
          ru: 'Только за городом',
          pl: 'Tylko poza obszarem zabudowanym'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Nein, da langsam',
          en: 'No, because it’s slow',
          ar: 'لا، لأنه بطيء',
          tr: 'Hayır, yavaş olduğu için',
          ru: 'Нет, оно медленное',
          pl: 'Nie, bo jest powolna'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auch auf dem Mofa besteht Helmpflicht. Ein geeigneter Schutzhelm reduziert Kopfverletzungen erheblich.',
      en: 'A helmet is mandatory on a Mofa as well. A proper helmet greatly reduces head injuries.',
      ar: 'الخوذة إلزامية أيضًا على الموبد، وتقلل إصابات الرأس بشكل كبير.',
      tr: 'Mofa\'da da kask zorunludur. Uygun kask kafa yaralanmalarını önemli ölçüde azaltır.',
      ru: 'На Mofa шлем тоже обязателен. Хороший шлем значительно снижает травмы головы.',
      pl: 'Także na Mofa kask jest obowiązkowy. Dobry kask znacznie ogranicza urazy głowy.'
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
      en: 'How do you behave at a pedestrian crossing (zebra crossing)?',
      ar: 'كيف تتصرف عند ممر المشاة (الخطوط البيضاء)؟',
      tr: 'Yaya geçidinde (yaya bantları) nasıl davranırsınız?',
      ru: 'Как вести себя на пешеходном переходе («зебре»)?',
      pl: 'Jak zachowujesz się na przejściu dla pieszych (pasach)?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Bremsbereitschaft, ggf. anhalten',
          en: 'Be ready to brake, stop if needed',
          ar: 'كن مستعدًا للفرملة وتوقف إن لزم',
          tr: 'Frene basmaya hazır ol, gerekirse dur',
          ru: 'Готовность затормозить, при необходимости остановиться',
          pl: 'Bądź gotów hamować, w razie potrzeby zatrzymaj się'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Fußgängern, die queren möchten, das Überqueren ermöglichen',
          en: 'Allow pedestrians who want to cross to do so',
          ar: 'اسمح للمشاة الراغبين بالعبور بذلك',
          tr: 'Geçmek isteyen yayalara izin ver',
          ru: 'Дайте пешеходам перейти',
          pl: 'Pozwól pieszym, którzy chcą przejść, przejść'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Hupen, damit Fußgänger schneller queren',
          en: 'Honk so pedestrians cross faster',
          ar: 'استخدم البوق ليعبروا أسرع',
          tr: 'Yayalar daha hızlı geçsin diye korna çal',
          ru: 'Сигналить, чтобы шли быстрее',
          pl: 'Trąbić, by pieszy szybciej przeszli'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Fußgänger, die den Überweg erkennbar nutzen wollen, haben Vorrang. Hupen oder Drängen ist nicht erlaubt.',
      en: 'Pedestrians visibly intending to cross have priority. Honking or pushing them is not allowed.',
      ar: 'المشاة الذين يبدو أنهم يريدون العبور لهم الأولوية. لا يجوز التزمير أو الإسراع.',
      tr: 'Geçme niyetini açıkça gösteren yayaların önceliği vardır. Korna veya zorlama yasak.',
      ru: 'Пешеходы, желающие перейти, имеют приоритет. Сигналить или подгонять их нельзя.',
      pl: 'Piesi wyraźnie zamierzający przejść mają pierwszeństwo. Trąbienie ani popędzanie są niedozwolone.'
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
      en: 'What does this traffic sign mean?',
      ar: 'ماذا تعني هذه الإشارة المرورية؟',
      tr: 'Bu trafik işareti ne anlama gelir?',
      ru: 'Что означает этот знак?',
      pl: 'Co oznacza ten znak drogowy?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Vorgeschriebene Fahrtrichtung rechts',
          en: 'Mandatory direction: right',
          ar: 'اتجاه السير الإلزامي: يمين',
          tr: 'Zorunlu yön: sağ',
          ru: 'Обязательное направление: направо',
          pl: 'Nakazany kierunek: w prawo'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Empfehlung zum Rechtsabbiegen',
          en: 'Suggestion to turn right',
          ar: 'اقتراح بالانعطاف يمينًا',
          tr: 'Sağa dönmek için öneri',
          ru: 'Рекомендация повернуть направо',
          pl: 'Sugestia skrętu w prawo'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Einbahnstraße nach rechts',
          en: 'One-way street to the right',
          ar: 'طريق باتجاه واحد إلى اليمين',
          tr: 'Sağa tek yönlü yol',
          ru: 'Одностороннее движение направо',
          pl: 'Ulica jednokierunkowa w prawo'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das blaue runde Zeichen schreibt die Fahrtrichtung vor — hier rechts. Es ist verbindlich, keine Empfehlung.',
      en: 'The blue circular sign prescribes the direction — here, right. It is mandatory, not advisory.',
      ar: 'الإشارة الزرقاء المستديرة تفرض اتجاه السير — هنا اليمين. هي إلزامية وليست توصية.',
      tr: 'Mavi yuvarlak işaret yönü zorunlu kılar — burada sağa. Öneri değil, zorunluluk.',
      ru: 'Синий круглый знак предписывает направление — здесь направо. Это обязательно, а не совет.',
      pl: 'Niebieski okrągły znak nakazuje kierunek — tu w prawo. Jest obowiązkowy, nie sugerujący.'
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
