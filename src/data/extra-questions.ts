import type { Question } from './types';

/**
 * Additional theory questions — added on top of the original mock set.
 * Categories follow the same enum: signs | rightOfWay | speed | behavior |
 * environment | tech | firstAid | alcohol. License classes default to B/AB
 * unless a question is specifically motorcycle- or Mofa-relevant.
 *
 * All questions are translated into DE, EN, AR, TR, RU, PL. The QuestionCard
 * gracefully falls back to EN if a translation is ever missing.
 */
export const extraQuestions: Question[] = [
  // ═════════════════════════════════════════════════════════════════════════
  // ALCOHOL / DRUGS
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'drugs-consequences',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Welche Folgen drohen, wenn Sie ein Kraftfahrzeug unter Einfluss von Drogen (z. B. Haschisch, Heroin, Kokain) führen?',
      en: 'What are the consequences for a person driving a motor vehicle under the influence of drugs (e.g. hashish, heroin, cocaine)?',
      ar: 'ما العواقب التي تنتظر من يقود مركبة آلية تحت تأثير المخدرات (مثل الحشيش، الهيروين، الكوكايين)؟',
      tr: 'Uyuşturucu madde (ör. esrar, eroin, kokain) etkisi altında motorlu araç kullanmanın sonuçları nelerdir?',
      ru: 'Какие последствия грозят водителю, управляющему транспортным средством под воздействием наркотиков (например, гашиш, героин, кокаин)?',
      pl: 'Jakie konsekwencje grożą osobie kierującej pojazdem mechanicznym pod wpływem narkotyków (np. haszysz, heroina, kokaina)?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Entzug der Fahrerlaubnis oder Fahrverbot',
          en: 'Confiscation of driving licence or driving ban',
          ar: 'سحب رخصة القيادة أو حظر القيادة',
          tr: 'Sürücü belgesinin geri alınması veya sürüş yasağı',
          ru: 'Лишение водительских прав или запрет на вождение',
          pl: 'Odebranie prawa jazdy lub zakaz prowadzenia'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Anordnung einer medizinisch-psychologischen Untersuchung (MPU)',
          en: 'Compulsory medical/psychological examination',
          ar: 'فحص طبي ونفسي إلزامي',
          tr: 'Zorunlu tıbbi ve psikolojik muayene',
          ru: 'Обязательное медико-психологическое обследование',
          pl: 'Obowiązkowe badanie lekarsko-psychologiczne'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Geldstrafe und/oder Freiheitsstrafe',
          en: 'Fine and/or imprisonment',
          ar: 'غرامة مالية و/أو السجن',
          tr: 'Para cezası ve/veya hapis cezası',
          ru: 'Штраф и/или лишение свободы',
          pl: 'Grzywna i/lub kara pozbawienia wolności'
        }
      }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Drogen am Steuer führen zu Fahrverbot/Entzug, MPU sowie Geld- oder Freiheitsstrafe (§ 24a StVG, § 316 StGB).',
      en: 'Driving on drugs leads to a driving ban or licence withdrawal, a mandatory MPU, plus a fine or prison sentence.',
      ar: 'تعاطي المخدرات أثناء القيادة يعرّضك للحظر/سحب الرخصة، فحص MPU، وغرامة أو سجن.',
      tr: 'Uyuşturucu ile araç kullanmak sürüş yasağı, ehliyet iptali, zorunlu MPU ve para/hapis cezasına yol açar.',
      ru: 'Вождение под наркотиками влечёт лишение прав, обязательное медико-психологическое освидетельствование, штраф или тюремное заключение.',
      pl: 'Jazda pod wpływem narkotyków oznacza zakaz/odebranie prawa jazdy, obowiązkowe badanie lekarsko-psychologiczne oraz grzywnę lub karę więzienia.'
    }
  },

  // ═════════════════════════════════════════════════════════════════════════
  // BEHAVIOR — pedestrian crossings, indicators, trams, lights, towing
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'zebra-careful',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'In welchen Fällen müssen Sie sich einem Fußgängerüberweg besonders vorsichtig nähern?',
      en: 'In which instances do you have to approach a pedestrian crossing with particular care?',
      ar: 'في أي الحالات يجب أن تقترب من ممر المشاة بحذر خاص؟',
      tr: 'Yaya geçidine hangi durumlarda özellikle dikkatli yaklaşmalısınız?',
      ru: 'В каких случаях нужно подъезжать к пешеходному переходу с особой осторожностью?',
      pl: 'W jakich przypadkach musisz zbliżać się do przejścia dla pieszych ze szczególną ostrożnością?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Wenn Fußgänger die Fahrbahn überqueren wollen',
          en: 'If pedestrians want to cross the road',
          ar: 'إذا أراد المشاة عبور الطريق',
          tr: 'Yayalar yolu geçmek istediğinde',
          ru: 'Если пешеходы хотят перейти дорогу',
          pl: 'Gdy piesi chcą przejść przez jezdnię'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Wenn die Sicht auf den Fußgängerüberweg eingeschränkt ist',
          en: 'If the view of the pedestrian crossing is restricted',
          ar: 'إذا كانت الرؤية إلى ممر المشاة مقيدة',
          tr: 'Yaya geçidi görüşü kısıtlı olduğunda',
          ru: 'Если обзор пешеходного перехода ограничен',
          pl: 'Gdy widoczność przejścia dla pieszych jest ograniczona'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Wenn ein anderes Fahrzeug bereits am Überweg wartet',
          en: 'If another vehicle is already waiting at the pedestrian crossing',
          ar: 'إذا كانت مركبة أخرى تنتظر بالفعل عند الممر',
          tr: 'Yaya geçidinde başka bir araç beklediğinde',
          ru: 'Если у перехода уже ждёт другое транспортное средство',
          pl: 'Gdy inny pojazd już oczekuje przed przejściem'
        }
      }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Erhöhte Vorsicht ist immer erforderlich, wenn die Lage unklar ist oder Fußgänger queren möchten.',
      en: 'Heightened care is always required when the situation is unclear or pedestrians want to cross.',
      ar: 'الحذر الإضافي مطلوب دائمًا عندما يكون الوضع غير واضح أو يريد المشاة العبور.',
      tr: 'Durum belirsizse veya yayalar geçmek istiyorsa daima daha dikkatli olun.',
      ru: 'Повышенная осторожность нужна всегда, когда обстановка неясна или пешеходы хотят перейти.',
      pl: 'Wzmożona ostrożność jest zawsze wymagana, gdy sytuacja jest niejasna lub piesi chcą przejść.'
    }
  },
  {
    id: 'indicator-defect',
    category: 'tech',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Woran erkennen Sie während der Fahrt, dass eine Blinkleuchte ausgefallen ist?',
      en: 'How can you tell while driving that an indicator lamp is not working?',
      ar: 'كيف تعرف أثناء القيادة أن مصباح الإشارة (الغماز) لا يعمل؟',
      tr: 'Sürüş esnasında sinyal lambasının çalışmadığını nasıl anlarsınız?',
      ru: 'Как вы заметите во время движения, что указатель поворота не работает?',
      pl: 'Po czym poznasz w trakcie jazdy, że kierunkowskaz nie działa?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Die Blinkkontrollleuchte blinkt schneller als gewohnt',
          en: 'The indicator signal light will flash faster than usual',
          ar: 'يضيء/يطرف مصباح المراقبة أسرع من المعتاد',
          tr: 'Sinyal kontrol lambası normalden hızlı yanıp söner',
          ru: 'Контрольная лампа поворотника моргает быстрее обычного',
          pl: 'Kontrolka kierunkowskazu miga szybciej niż zwykle'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Eine defekte Blinkleuchte ist während der Fahrt nicht erkennbar',
          en: 'You cannot detect a defective indicator lamp while driving',
          ar: 'لا يمكن اكتشاف عطل غماز أثناء القيادة',
          tr: 'Sürüş sırasında bozuk sinyali fark edemezsiniz',
          ru: 'Неисправный поворотник нельзя заметить во время движения',
          pl: 'Uszkodzonego kierunkowskazu nie da się rozpoznać w trakcie jazdy'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Fällt eine Blinkleuchte aus, blinkt die Kontrollleuchte im Cockpit deutlich schneller.',
      en: 'When an indicator bulb fails, the dashboard tell-tale blinks visibly faster.',
      ar: 'عند تعطل لمبة الإشارة، تبدأ لمبة لوحة القيادة بالطرف بسرعة أكبر بوضوح.',
      tr: 'Sinyal ampulü arızalanırsa gösterge panelindeki ikaz lambası belirgin şekilde hızlanır.',
      ru: 'При выходе лампы поворотника из строя контрольная лампа на панели заметно ускоряется.',
      pl: 'Przy uszkodzeniu żarówki kierunkowskazu kontrolka na desce miga zauważalnie szybciej.'
    }
  },
  {
    id: 'tram-overtake-left',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    question: {
      de: 'Wann darf eine Straßenbahn links überholt werden?',
      en: 'When may a tram be overtaken on the left?',
      ar: 'متى يجوز تجاوز الترام من اليسار؟',
      tr: 'Bir tramvayı soldan ne zaman geçebilirsiniz?',
      ru: 'Когда трамвай можно обогнать слева?',
      pl: 'Kiedy można wyprzedzić tramwaj z lewej strony?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Wenn die Fahrbahn rechts der Straßenbahn (keine Einbahnstraße) durch andere Fahrzeuge blockiert ist',
          en: 'When the roadway (not a one-way street) to the right of the tram is blocked by other vehicles',
          ar: 'عندما يكون مسار اليمين بجوار الترام (لا في طريق باتجاه واحد) محجوزًا بمركبات أخرى',
          tr: 'Tramvayın sağındaki yol (tek yönlü olmayan) başka araçlarla kapalı olduğunda',
          ru: 'Когда полоса справа от трамвая (не на односторонней) занята другими машинами',
          pl: 'Gdy jezdnia po prawej stronie tramwaju (poza ulicą jednokierunkową) jest zajęta przez inne pojazdy'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Wenn die Schienen zu weit rechts liegen',
          en: 'When the rails run too far to the right',
          ar: 'عندما تكون السكك بعيدة جدًا نحو اليمين',
          tr: 'Raylar çok sağda olduğunda',
          ru: 'Когда рельсы проходят слишком правее',
          pl: 'Gdy tory biegną zbyt blisko prawej strony'
        }
      },
      {
        id: 'c',
        text: {
          de: 'In Einbahnstraßen',
          en: 'In one-way streets',
          ar: 'في الطرق ذات الاتجاه الواحد',
          tr: 'Tek yönlü yollarda',
          ru: 'На дорогах с односторонним движением',
          pl: 'Na ulicach jednokierunkowych'
        }
      }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Grundsätzlich werden Straßenbahnen rechts überholt. Links überholen ist nur erlaubt, wenn rechts zu wenig Platz ist oder in Einbahnstraßen.',
      en: 'Trams are normally passed on the right. Overtaking on the left is only allowed when there is no room on the right, or in one-way streets.',
      ar: 'عادةً يتم تجاوز الترام من اليمين. التجاوز من اليسار مسموح فقط إذا لم يكن هناك مكان كافٍ من اليمين، أو في الطرق ذات الاتجاه الواحد.',
      tr: 'Tramvaylar genelde sağdan geçilir. Soldan geçmek yalnızca sağda yer yoksa veya tek yönlü yolda mümkündür.',
      ru: 'Трамвай обычно объезжают справа. Слева — только если справа нет места или на улице с односторонним движением.',
      pl: 'Tramwaj zwykle wyprzedza się z prawej strony. Z lewej tylko gdy z prawej brak miejsca lub na ulicy jednokierunkowej.'
    }
  },
  {
    id: 'dipped-day',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Wann müssen Sie auch am Tag mit Abblendlicht fahren?',
      en: 'When must you use dipped headlights also during the day?',
      ar: 'متى يجب استخدام الأضواء المنخفضة أيضًا أثناء النهار؟',
      tr: 'Gündüz de kısa hüzmeli farları ne zaman kullanmak zorundasınız?',
      ru: 'Когда нужно ехать с ближним светом и днём?',
      pl: 'Kiedy także w dzień musisz włączyć światła mijania?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Bei beschlagener Frontscheibe',
          en: 'When the windscreen is misted up',
          ar: 'عند تكثف الزجاج الأمامي',
          tr: 'Ön cam buğulandığında',
          ru: 'При запотевшем лобовом стекле',
          pl: 'Przy zaparowanej szybie przedniej'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Bei Regen',
          en: 'In rain',
          ar: 'في المطر',
          tr: 'Yağmurda',
          ru: 'Во время дождя',
          pl: 'Podczas deszczu'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Bei Nebel oder Schneefall',
          en: 'In fog or falling snow',
          ar: 'في الضباب أو تساقط الثلج',
          tr: 'Sis veya kar yağışında',
          ru: 'В тумане или при снегопаде',
          pl: 'We mgle lub przy opadach śniegu'
        }
      }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Bei Regen, Nebel oder Schneefall ist Abblendlicht auch am Tag Pflicht — Sie sind besser sichtbar.',
      en: 'In rain, fog or snowfall, dipped headlights are mandatory even by day — to be seen by others.',
      ar: 'في المطر أو الضباب أو الثلج، يجب تشغيل الأضواء المنخفضة حتى نهارًا لكي يراك الآخرون.',
      tr: 'Yağmur, sis veya karda gündüz de kısa hüzme zorunludur — daha iyi görünmek için.',
      ru: 'В дождь, туман или снегопад ближний свет обязателен и днём — чтобы вас лучше видели.',
      pl: 'W deszczu, mgle lub śniegu światła mijania są obowiązkowe także w dzień — by być widocznym.'
    }
  },
  {
    id: 'towing-fault-1',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Ihr Auto ist defekt und kann nicht mehr selbst fahren. Was beachten Sie beim Abschleppen?',
      en: 'Your car has a fault and can no longer be driven. What must you be aware of during towing?',
      ar: 'سيارتك معطلة ولا يمكن قيادتها. ما الذي يجب مراعاته عند القطر؟',
      tr: 'Aracınız arızalı ve sürülemez. Çekme sırasında nelere dikkat etmelisiniz?',
      ru: 'Ваш автомобиль неисправен и не может ехать сам. На что обратить внимание при буксировке?',
      pl: 'Twój samochód jest uszkodzony i nie może jechać samodzielnie. Na co zwrócić uwagę przy holowaniu?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Beim Abschleppen müssen die Nebelschlussleuchten eingeschaltet werden, um den Vorgang anzuzeigen',
          en: 'The rear fog lights should also be switched on to indicate the towing procedure',
          ar: 'يجب تشغيل مصابيح الضباب الخلفية للإشارة إلى عملية القطر',
          tr: 'Çekme işlemini göstermek için arka sis lambaları yakılmalıdır',
          ru: 'Нужно включать задние противотуманные фонари, чтобы обозначить буксировку',
          pl: 'Trzeba włączyć tylne światła przeciwmgielne, aby oznaczyć holowanie'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Wenn möglich, sollte eine Abschleppstange verwendet werden',
          en: 'A towing bar should be used where possible',
          ar: 'يجب استخدام قضيب قطر إن أمكن',
          tr: 'Mümkünse çekme demiri kullanılmalıdır',
          ru: 'По возможности следует использовать жёсткую сцепку',
          pl: 'Jeśli to możliwe, należy użyć sztywnego holu (drążka)'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Bei ausgeschaltetem Motor ist deutlich mehr Kraft am Bremspedal nötig',
          en: 'The force required to operate the brake pedal is significantly greater if the engine has failed',
          ar: 'الضغط على دواسة الفرامل يحتاج قوة أكبر بكثير عند توقف المحرك',
          tr: 'Motor çalışmazken fren pedalına çok daha fazla güç uygulanması gerekir',
          ru: 'При неработающем двигателе на педаль тормоза приходится давить значительно сильнее',
          pl: 'Przy niepracującym silniku trzeba znacznie mocniej naciskać pedał hamulca'
        }
      }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Eine Abschleppstange ist sicherer als ein Seil; ohne Bremskraftverstärker (Motor aus) braucht das Bremspedal viel mehr Kraft.',
      en: 'A tow bar is safer than a rope; without a brake servo (engine off) the pedal needs much more force.',
      ar: 'قضيب القطر أأمن من الحبل؛ بدون مكبر الفرامل (المحرك متوقف) تحتاج الدواسة لقوة أكبر بكثير.',
      tr: 'Çekme demiri halattan daha güvenlidir; fren takviyesi olmayınca (motor kapalı) pedala çok daha fazla güç gerekir.',
      ru: 'Жёсткая сцепка безопаснее троса; без усилителя тормозов (двигатель не работает) усилие на педали резко возрастает.',
      pl: 'Sztywny hol jest bezpieczniejszy niż linka; bez serwa hamulca (silnik wyłączony) pedał wymaga znacznie większej siły.'
    }
  },
  {
    id: 'towing-fault-2',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Ihr Auto ist defekt und kann nicht mehr selbst fahren. Was ist beim Abschleppen weiterhin zu beachten?',
      en: 'Your car has a fault and can no longer be driven. What else must you be aware of during towing?',
      ar: 'سيارتك معطلة ولا يمكن قيادتها. ما الأمور الإضافية التي يجب مراعاتها عند القطر؟',
      tr: 'Aracınız arızalı ve sürülemez. Çekme sırasında başka nelere dikkat etmelisiniz?',
      ru: 'Ваш автомобиль неисправен и не может ехать сам. На что ещё обратить внимание при буксировке?',
      pl: 'Twój samochód jest uszkodzony i nie może jechać samodzielnie. Na co jeszcze zwrócić uwagę przy holowaniu?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Das Abschleppseil sollte stets straff gehalten werden',
          en: 'The towing cable should be kept as taut as possible',
          ar: 'يجب أن يبقى حبل القطر مشدودًا قدر الإمكان',
          tr: 'Çekme halatı mümkün olduğunca gergin tutulmalıdır',
          ru: 'Буксировочный трос должен оставаться натянутым',
          pl: 'Lina holownicza powinna być stale napięta'
        }
      },
      {
        id: 'b',
        text: {
          de: 'An beiden Fahrzeugen muss die Warnblinkanlage eingeschaltet sein',
          en: 'The hazard lights must be switched on on both vehicles',
          ar: 'يجب تشغيل أضواء الخطر في كلتا المركبتين',
          tr: 'Her iki araçta da dörtlü uyarı lambası açık olmalıdır',
          ru: 'Аварийная сигнализация должна быть включена на обоих автомобилях',
          pl: 'Światła awaryjne muszą być włączone w obu pojazdach'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Die Autobahn darf zur Abkürzung in die nächste Werkstatt benutzt werden',
          en: 'The motorway may only be used to shorten the journey to the next car garage',
          ar: 'يجوز استخدام الأوتوبان كاختصار للوصول إلى أقرب ورشة',
          tr: 'Otoyol, en yakın servise giderken kestirme olarak kullanılabilir',
          ru: 'Автомагистрали можно использовать, чтобы сократить путь до автосервиса',
          pl: 'Z autostrady można korzystać, aby skrócić drogę do najbliższego warsztatu'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Seil immer straff halten (Ruckgefahr) und Warnblinker an beiden Fahrzeugen einschalten. Auf Autobahnen ist Abschleppen nur bis zur nächsten Abfahrt erlaubt.',
      en: 'Keep the cable taut to avoid jerks, hazards on in both cars. On the motorway, only tow as far as the next exit.',
      ar: 'احرص على شد الحبل لتجنب الصدمات وتشغيل أضواء الخطر في كلتا السيارتين. على الأوتوبان، يُسمح بالقطر فقط حتى أقرب مخرج.',
      tr: 'Halatı gergin tutun, her iki araçta dörtlü flaşörü yakın. Otoyolda yalnızca en yakın çıkışa kadar çekme yapılabilir.',
      ru: 'Держите трос натянутым (опасность рывков), включайте «аварийку» на обеих машинах. По автомагистрали — только до ближайшего съезда.',
      pl: 'Lina napięta (ryzyko szarpnięć), światła awaryjne w obu pojazdach. Autostradą wolno holować tylko do najbliższego zjazdu.'
    }
  },
  {
    id: 'sunday-truck-ban',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Kraftfahrzeuge im gewerblichen oder entgeltlichen Güterverkehr dürfen an Sonn- und Feiertagen nicht fahren?',
      en: 'Which motor vehicles engaged in the commercial or paid transport of goods are prohibited from driving on Sundays and public holidays?',
      ar: 'أي مركبات تعمل في نقل البضائع التجاري أو بمقابل، يُحظر قيادتها أيام الأحد والعطل الرسمية؟',
      tr: 'Ticari veya ücretli yük taşımacılığı yapan hangi motorlu araçların pazar ve resmî tatil günlerinde sürülmesi yasaktır?',
      ru: 'Каким коммерческим грузовым автомобилям запрещено движение в воскресенье и праздничные дни?',
      pl: 'Które pojazdy zarobkowego transportu towarów nie mogą jeździć w niedziele i święta?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Lkw mit zulässiger Gesamtmasse über 7,5 t',
          en: 'Trucks with a gross vehicle weight rating in excess of 7.5 t',
          ar: 'الشاحنات التي يزيد وزنها الإجمالي المسموح به عن 7.5 طن',
          tr: 'İzin verilen toplam ağırlığı 7,5 tonu aşan kamyonlar',
          ru: 'Грузовики с разрешённой полной массой более 7,5 т',
          pl: 'Ciężarówki o dopuszczalnej masie całkowitej powyżej 7,5 t'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Lkw mit Anhänger',
          en: 'Trucks towing a trailer',
          ar: 'الشاحنات مع مقطورة',
          tr: 'Römork çeken kamyonlar',
          ru: 'Грузовики с прицепом',
          pl: 'Ciężarówki z przyczepą'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Pkw mit Anhänger',
          en: 'Cars towing a trailer',
          ar: 'السيارات مع مقطورة',
          tr: 'Römork çeken otomobiller',
          ru: 'Легковые автомобили с прицепом',
          pl: 'Samochody osobowe z przyczepą'
        }
      }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Das Sonntagsfahrverbot gilt für gewerbliche Lkw über 7,5 t sowie für alle Lkw mit Anhänger. Pkw mit Anhänger sind ausgenommen.',
      en: 'The Sunday driving ban applies to commercial trucks over 7.5 t and to all trucks with trailers. Cars with trailers are exempt.',
      ar: 'يطبّق حظر القيادة يوم الأحد على الشاحنات التجارية فوق 7.5 طن والشاحنات مع مقطورة. السيارات مع مقطورة مستثناة.',
      tr: 'Pazar yasağı 7,5 tonu aşan ticari kamyonları ve römorklu tüm kamyonları kapsar. Römorklu otomobiller hariç tutulur.',
      ru: 'Запрет на воскресенье распространяется на коммерческие грузовики свыше 7,5 т и грузовики с прицепами. Легковые с прицепом освобождены.',
      pl: 'Zakaz niedzielny obejmuje ciężarówki zarobkowe powyżej 7,5 t oraz wszystkie ciężarówki z przyczepą. Samochody osobowe z przyczepą są wyłączone.'
    }
  },
  {
    id: 'sunday-ban-hours',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Zwischen welchen Uhrzeiten gilt das Sonn- und Feiertagsfahrverbot?',
      en: 'Between what hours does the Sunday and public holiday driving ban apply?',
      ar: 'بين أي ساعات يطبّق حظر القيادة يوم الأحد والعطلات؟',
      tr: 'Pazar ve resmî tatil sürüş yasağı hangi saatler arasında geçerlidir?',
      ru: 'В какие часы действует запрет на движение в воскресенье и праздники?',
      pl: 'W jakich godzinach obowiązuje zakaz jazdy w niedziele i święta?'
    },
    options: [
      {
        id: 'a',
        text: { de: '00:00 bis 22:00 Uhr', en: '00:00 to 22:00', ar: 'من 00:00 إلى 22:00', tr: '00:00 ile 22:00 arası', ru: 'с 00:00 до 22:00', pl: 'od 00:00 do 22:00' }
      },
      {
        id: 'b',
        text: { de: '06:00 bis 18:00 Uhr', en: '06:00 to 18:00', ar: 'من 06:00 إلى 18:00', tr: '06:00 ile 18:00 arası', ru: 'с 06:00 до 18:00', pl: 'od 06:00 do 18:00' }
      },
      {
        id: 'c',
        text: { de: '08:00 bis 20:00 Uhr', en: '08:00 to 20:00', ar: 'من 08:00 إلى 20:00', tr: '08:00 ile 20:00 arası', ru: 'с 08:00 до 20:00', pl: 'od 08:00 do 20:00' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Das Sonn- und Feiertagsfahrverbot für Lkw gilt von 00:00 bis 22:00 Uhr.',
      en: 'The Sunday/holiday driving ban for trucks runs from 00:00 to 22:00.',
      ar: 'يسري حظر القيادة على الشاحنات في الأحد والعطلات من 00:00 إلى 22:00.',
      tr: 'Kamyonlar için pazar/tatil yasağı 00:00 - 22:00 arasındadır.',
      ru: 'Запрет для грузовиков в воскресенье/праздники действует с 00:00 до 22:00.',
      pl: 'Niedzielny/świąteczny zakaz dla ciężarówek obowiązuje od 00:00 do 22:00.'
    }
  },
  {
    id: 'roadworthy-due-date',
    category: 'tech',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Woran erkennen Sie, wann die nächste Hauptuntersuchung (HU) Ihres Fahrzeugs fällig ist?',
      en: 'How can you tell when you need to bring your vehicle in for its next vehicle roadworthiness test?',
      ar: 'كيف تعرف موعد الفحص الفني الرئيسي القادم لسيارتك؟',
      tr: 'Aracınızın bir sonraki muayene tarihini nasıl anlarsınız?',
      ru: 'Как узнать, когда нужно проходить очередной техосмотр (HU)?',
      pl: 'Skąd wiesz, kiedy upływa termin następnego przeglądu technicznego?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Aus einem Eintrag in der Betriebsanleitung des Fahrzeugs',
          en: 'By reading the entry in the operating manual for my vehicle',
          ar: 'من تدوينة في دليل تشغيل السيارة',
          tr: 'Aracın kullanım kılavuzundaki kayıttan',
          ru: 'По записи в руководстве по эксплуатации автомобиля',
          pl: 'Na podstawie wpisu w instrukcji obsługi pojazdu'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Aus der Eintragung in der Zulassungsbescheinigung Teil I',
          en: 'By reading the entry made in the registration certificate Part I',
          ar: 'من التدوين في شهادة التسجيل الجزء الأول',
          tr: 'Trafik tescil belgesi Bölüm I\'deki kayıttan',
          ru: 'По записи в свидетельстве о регистрации (часть I)',
          pl: 'Z wpisu w dowodzie rejestracyjnym (Część I)'
        }
      },
      {
        id: 'c',
        text: {
          de: 'An der Prüfplakette am hinteren Kennzeichen',
          en: 'By looking at the inspection tag on the rear license plate',
          ar: 'من ملصق الفحص على لوحة الترخيص الخلفية',
          tr: 'Arka plakanın üzerindeki muayene etiketinden',
          ru: 'По наклейке техосмотра на заднем номерном знаке',
          pl: 'Po nalepce kontrolnej na tylnej tablicy rejestracyjnej'
        }
      }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Der nächste HU-Termin steht in der Zulassungsbescheinigung Teil I und auf der HU-Plakette am hinteren Kennzeichen.',
      en: 'The next inspection date is shown both in the registration certificate (Part I) and on the inspection sticker on the rear plate.',
      ar: 'تاريخ الفحص القادم مدوّن في شهادة التسجيل الجزء الأول وعلى ملصق الفحص في اللوحة الخلفية.',
      tr: 'Sonraki muayene tarihi tescil belgesi Bölüm I\'de ve arka plaka üzerindeki muayene etiketinde gösterilir.',
      ru: 'Дата следующего ТО указана в свидетельстве о регистрации (часть I) и на наклейке на заднем номере.',
      pl: 'Termin następnego przeglądu znajduje się w dowodzie rejestracyjnym (Część I) i na nalepce na tylnej tablicy.'
    }
  },
  {
    id: 'cruise-control-benefits',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Vorteile bietet ein Tempomat (Geschwindigkeitsregelanlage)?',
      en: 'What benefits does the driver of a motor vehicle have by using a cruise control system?',
      ar: 'ما الفوائد التي يحصل عليها السائق من استخدام نظام مثبّت السرعة؟',
      tr: 'Hız sabitleyici (cruise control) sürücüye hangi avantajları sağlar?',
      ru: 'Какие преимущества даёт водителю круиз-контроль?',
      pl: 'Jakie korzyści daje kierowcy tempomat?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Passt die Geschwindigkeit der Verkehrsdichte an',
          en: 'Adjusts the speed to the traffic density',
          ar: 'يضبط السرعة وفقًا لكثافة المرور',
          tr: 'Hızı trafik yoğunluğuna göre ayarlar',
          ru: 'Подстраивает скорость под плотность потока',
          pl: 'Dostosowuje prędkość do natężenia ruchu'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Hält auf ebener Fahrbahn die voreingestellte Geschwindigkeit konstant',
          en: 'Maintains a constant pre-set speed on a level carriageway',
          ar: 'يحافظ على سرعة محددة سلفًا على طريق مستوٍ',
          tr: 'Düz yolda önceden ayarlanan hızı sabit tutar',
          ru: 'Поддерживает заданную скорость на ровной дороге',
          pl: 'Utrzymuje zadaną prędkość na płaskiej jezdni'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Entlastet den Fahrer bei der Bedienung',
          en: 'Makes it easier for the driver to operate the vehicle',
          ar: 'يخفف من جهد السائق أثناء التشغيل',
          tr: 'Sürücünün araç kullanımını kolaylaştırır',
          ru: 'Облегчает управление автомобилем',
          pl: 'Ułatwia kierowcy obsługę pojazdu'
        }
      }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Ein normaler Tempomat hält die eingestellte Geschwindigkeit; er reagiert NICHT auf den Verkehr. Das Fahren wird komfortabler.',
      en: 'A standard cruise control keeps the set speed; it does NOT react to traffic. Driving becomes more comfortable.',
      ar: 'مثبت السرعة العادي يحافظ على السرعة المحددة فقط؛ لا يتفاعل مع المرور. القيادة تصبح أكثر راحة.',
      tr: 'Standart hız sabitleyici belirlenen hızı korur; trafiğe tepki vermez. Kullanım daha rahat olur.',
      ru: 'Обычный круиз-контроль удерживает заданную скорость; он НЕ реагирует на трафик. Управление становится комфортнее.',
      pl: 'Zwykły tempomat utrzymuje zadaną prędkość; nie reaguje na ruch. Jazda jest wygodniejsza.'
    }
  },
  {
    id: 'abs-cornering-wet',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 4,
    question: {
      de: 'Sie müssen in einer Kurve auf nasser Fahrbahn plötzlich bremsen. Was gilt für ein Fahrzeug mit ABS?',
      en: 'You suddenly have to brake when cornering on a wet carriageway. What special aspects exist with a vehicle equipped with an anti-lock braking system (ABS)?',
      ar: 'تضطر للفرملة فجأة في منعطف على طريق مبلل. ما الذي يميز مركبة مزودة بنظام ABS؟',
      tr: 'Islak zeminde virajda aniden frene basmak zorundasınız. ABS\'li bir araçta ne özel olarak geçerlidir?',
      ru: 'Вам приходится резко тормозить в повороте на мокрой дороге. Что особенного при наличии ABS?',
      pl: 'Musisz nagle hamować na zakręcie po mokrej jezdni. Co wyróżnia pojazd z układem ABS?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Die Lenkfähigkeit bleibt länger erhalten',
          en: 'The steering capability is retained for longer',
          ar: 'تبقى القدرة على التوجيه أطول',
          tr: 'Direksiyon hâkimiyeti daha uzun süre korunur',
          ru: 'Управляемость сохраняется дольше',
          pl: 'Zachowanie sterowności trwa dłużej'
        }
      },
      {
        id: 'b',
        text: {
          de: 'Das Fahrzeug bleibt immer stabil',
          en: 'The vehicle will always remain stable',
          ar: 'تبقى المركبة دائمًا مستقرة',
          tr: 'Araç her zaman stabil kalır',
          ru: 'Автомобиль всегда остаётся устойчив',
          pl: 'Pojazd zawsze pozostaje stabilny'
        }
      },
      {
        id: 'c',
        text: {
          de: 'Ein Ausbrechen aus der Kurve ist unmöglich',
          en: 'It is not possible for the vehicle to skid out of the bend',
          ar: 'لا يمكن للمركبة أن تنزلق خارج المنعطف',
          tr: 'Aracın virajdan savrulması mümkün değildir',
          ru: 'Снос с траектории в повороте исключён',
          pl: 'Pojazd nie może wypaść z zakrętu'
        }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'ABS verhindert das Blockieren der Räder, sodass das Fahrzeug auch beim Bremsen länger lenkbar bleibt. Die Fahrphysik (Schleudern in Kurven) wird damit nicht aufgehoben.',
      en: 'ABS prevents the wheels from locking, so the car can still be steered while braking. It does not overcome the physics of cornering.',
      ar: 'ABS يمنع قفل العجلات، فيبقى التوجيه ممكنًا أثناء الفرملة. لا يلغي قوانين الفيزياء عند المنعطفات.',
      tr: 'ABS tekerleklerin kilitlenmesini önler; frenleme sırasında direksiyon hâkimiyeti sürer. Virajdaki fizik kurallarını ortadan kaldırmaz.',
      ru: 'ABS не даёт колёсам блокироваться, поэтому при торможении остаётся управляемость. Законы физики при поворотах он не отменяет.',
      pl: 'ABS chroni przed zablokowaniem kół, dzięki czemu sterowność jest zachowana podczas hamowania. Fizyki zakrętu jednak nie zniesie.'
    }
  },

  // ═════════════════════════════════════════════════════════════════════════
  // SPEED & DISTANCE — formula recall, stopping, parking distances
  // ═════════════════════════════════════════════════════════════════════════
  {
    id: 'formula-reaction-path',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Faustformel: Welche Strecke legen Sie in 1 Sekunde Reaktionszeit zurück (Reaktionsweg)?',
      en: 'Rule of thumb: what distance do you cover in a 1-second reaction time (reaction path)?',
      ar: 'القاعدة العامة: ما المسافة التي تقطعها في ثانية واحدة من زمن رد الفعل (مسافة رد الفعل)؟',
      tr: 'Genel kural: 1 saniyelik tepki süresinde ne kadar yol alırsınız (tepki yolu)?',
      ru: 'Эмпирическая формула: какой путь пройдёшь за 1 секунду реакции (путь реакции)?',
      pl: 'Reguła kciuka: jaką drogę przejedziesz w ciągu 1 s reakcji (droga reakcji)?'
    },
    options: [
      {
        id: 'a',
        text: { de: '(Geschwindigkeit / 10) × 3', en: '(speed / 10) × 3', ar: '(السرعة / 10) × 3', tr: '(hız / 10) × 3', ru: '(скорость / 10) × 3', pl: '(prędkość / 10) × 3' }
      },
      {
        id: 'b',
        text: { de: 'Geschwindigkeit × 3', en: 'speed × 3', ar: 'السرعة × 3', tr: 'hız × 3', ru: 'скорость × 3', pl: 'prędkość × 3' }
      },
      {
        id: 'c',
        text: { de: 'Geschwindigkeit / 2', en: 'speed / 2', ar: 'السرعة / 2', tr: 'hız / 2', ru: 'скорость / 2', pl: 'prędkość / 2' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Reaktionsweg = (v / 10) × 3 in Metern bei 1 s Reaktionszeit.',
      en: 'Reaction path = (v / 10) × 3 metres at a 1-second reaction time.',
      ar: 'مسافة رد الفعل = (السرعة / 10) × 3 بالأمتار عند زمن رد فعل 1 ثانية.',
      tr: 'Tepki yolu = (hız / 10) × 3 metre, 1 saniyelik tepki için.',
      ru: 'Путь реакции = (v / 10) × 3 метра при реакции 1 с.',
      pl: 'Droga reakcji = (v / 10) × 3 metra przy 1-sekundowej reakcji.'
    }
  },
  {
    id: 'formula-braking',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Faustformel: Wie berechnet sich der Bremsweg bei normaler Bremsung?',
      en: 'Rule of thumb: how is the braking distance calculated under normal braking?',
      ar: 'القاعدة العامة: كيف تُحسب مسافة الفرملة عند فرملة عادية؟',
      tr: 'Genel kural: normal frenlemede fren yolu nasıl hesaplanır?',
      ru: 'Эмпирическая формула: как считается тормозной путь при нормальном торможении?',
      pl: 'Reguła kciuka: jak liczy się drogę hamowania przy normalnym hamowaniu?'
    },
    options: [
      {
        id: 'a',
        text: { de: '(v / 10) × (v / 10)', en: '(v / 10) × (v / 10)', ar: '(السرعة / 10) × (السرعة / 10)', tr: '(hız / 10) × (hız / 10)', ru: '(v / 10) × (v / 10)', pl: '(v / 10) × (v / 10)' }
      },
      {
        id: 'b',
        text: { de: '(v / 10) × 3', en: '(v / 10) × 3', ar: '(السرعة / 10) × 3', tr: '(hız / 10) × 3', ru: '(v / 10) × 3', pl: '(v / 10) × 3' }
      },
      {
        id: 'c',
        text: { de: 'v × 2', en: 'v × 2', ar: 'السرعة × 2', tr: 'hız × 2', ru: 'v × 2', pl: 'v × 2' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Normaler Bremsweg = (v / 10)² in Metern. Bei Gefahrbremsung ist es die Hälfte davon.',
      en: 'Normal braking distance = (v / 10)² metres. Under emergency braking it is half of that.',
      ar: 'مسافة الفرملة العادية = (السرعة / 10)² بالأمتار. الفرملة الطارئة نصف ذلك.',
      tr: 'Normal fren yolu = (hız / 10)² metre. Acil frenlemede yarısıdır.',
      ru: 'Обычный тормозной путь = (v / 10)² метров. При экстренном торможении вдвое меньше.',
      pl: 'Normalna droga hamowania = (v / 10)² metra. Przy hamowaniu awaryjnym połowa tego.'
    }
  },
  {
    id: 'formula-emergency-braking',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Faustformel: Bremsweg bei einer Gefahrbremsung?',
      en: 'Rule of thumb: braking distance under emergency braking?',
      ar: 'القاعدة العامة: مسافة الفرملة عند فرملة طارئة؟',
      tr: 'Genel kural: acil frenlemede fren yolu?',
      ru: 'Эмпирическая формула: тормозной путь при экстренном торможении?',
      pl: 'Reguła kciuka: droga hamowania przy hamowaniu awaryjnym?'
    },
    options: [
      {
        id: 'a',
        text: { de: '((v / 10) × (v / 10)) / 2', en: '((v / 10) × (v / 10)) / 2', ar: '((السرعة / 10) × (السرعة / 10)) / 2', tr: '((hız / 10) × (hız / 10)) / 2', ru: '((v / 10) × (v / 10)) / 2', pl: '((v / 10) × (v / 10)) / 2' }
      },
      {
        id: 'b',
        text: { de: '(v / 10) × (v / 10)', en: '(v / 10) × (v / 10)', ar: '(السرعة / 10) × (السرعة / 10)', tr: '(hız / 10) × (hız / 10)', ru: '(v / 10) × (v / 10)', pl: '(v / 10) × (v / 10)' }
      },
      {
        id: 'c',
        text: { de: '(v / 10) × 3', en: '(v / 10) × 3', ar: '(السرعة / 10) × 3', tr: '(hız / 10) × 3', ru: '(v / 10) × 3', pl: '(v / 10) × 3' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bei Gefahrbremsung halbiert sich der Bremsweg: ((v / 10)²) / 2.',
      en: 'Emergency braking halves the braking distance: ((v / 10)²) / 2.',
      ar: 'الفرملة الطارئة تقلل المسافة إلى النصف: ((السرعة / 10)²) / 2.',
      tr: 'Acil frenlemede fren yolu yarıya iner: ((hız / 10)²) / 2.',
      ru: 'При экстренном торможении путь сокращается вдвое: ((v / 10)²) / 2.',
      pl: 'Przy hamowaniu awaryjnym droga skraca się o połowę: ((v / 10)²) / 2.'
    }
  },
  {
    id: 'formula-stopping-distance',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Wie ist der Anhalteweg definiert?',
      en: 'How is the stopping distance defined?',
      ar: 'كيف تُعرّف مسافة التوقف الكلية؟',
      tr: 'Toplam durma yolu nasıl tanımlanır?',
      ru: 'Как определяется общий остановочный путь?',
      pl: 'Jak definiuje się drogę zatrzymania?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Reaktionsweg + Bremsweg',
          en: 'Reaction path + braking distance',
          ar: 'مسافة رد الفعل + مسافة الفرملة',
          tr: 'Tepki yolu + fren yolu',
          ru: 'Путь реакции + тормозной путь',
          pl: 'Droga reakcji + droga hamowania'
        }
      },
      {
        id: 'b',
        text: { de: 'Nur der Bremsweg', en: 'Just the braking distance', ar: 'مسافة الفرملة فقط', tr: 'Sadece fren yolu', ru: 'Только тормозной путь', pl: 'Tylko droga hamowania' }
      },
      {
        id: 'c',
        text: { de: 'Nur der Reaktionsweg', en: 'Just the reaction path', ar: 'مسافة رد الفعل فقط', tr: 'Sadece tepki yolu', ru: 'Только путь реакции', pl: 'Tylko droga reakcji' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Anhalteweg = Reaktionsweg + Bremsweg.',
      en: 'Stopping distance = reaction path + braking distance.',
      ar: 'مسافة التوقف = مسافة رد الفعل + مسافة الفرملة.',
      tr: 'Durma yolu = tepki yolu + fren yolu.',
      ru: 'Остановочный путь = путь реакции + тормозной путь.',
      pl: 'Droga zatrzymania = droga reakcji + droga hamowania.'
    }
  },
  {
    id: 'double-speed-braking',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Sie verdoppeln Ihre Geschwindigkeit. Wie wirkt sich das auf den Bremsweg aus?',
      en: 'You double the speed at which you are travelling. How does this affect the braking distance?',
      ar: 'تضاعف سرعتك. كيف يؤثر ذلك على مسافة الفرملة؟',
      tr: 'Hızınızı ikiye katlıyorsunuz. Bu fren yolunu nasıl etkiler?',
      ru: 'Скорость удваивается. Как меняется тормозной путь?',
      pl: 'Podwajasz prędkość. Jak to wpływa na drogę hamowania?'
    },
    options: [
      {
        id: 'a',
        text: { de: 'Vervierfacht sich', en: 'It quadruples', ar: 'تتضاعف أربع مرات', tr: 'Dört katına çıkar', ru: 'Увеличивается в 4 раза', pl: 'Czterokrotnie rośnie' }
      },
      {
        id: 'b',
        text: { de: 'Verdoppelt sich', en: 'It doubles', ar: 'تتضاعف', tr: 'İki katına çıkar', ru: 'Удваивается', pl: 'Podwaja się' }
      },
      {
        id: 'c',
        text: { de: 'Verdreifacht sich', en: 'It triples', ar: 'تتضاعف ثلاث مرات', tr: 'Üç katına çıkar', ru: 'Утраивается', pl: 'Potraja się' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bremsweg geht mit dem Quadrat der Geschwindigkeit — doppelte Geschwindigkeit = vierfacher Bremsweg.',
      en: 'Braking distance scales with the square of speed — double the speed means four times the braking distance.',
      ar: 'مسافة الفرملة تتناسب مع مربع السرعة — السرعة المضاعفة تعني مسافة فرملة أربع مرات.',
      tr: 'Fren yolu hızın karesiyle artar — iki kat hız, dört kat fren yolu demektir.',
      ru: 'Тормозной путь пропорционален квадрату скорости — двойная скорость даёт четырёхкратный путь.',
      pl: 'Droga hamowania rośnie z kwadratem prędkości — podwojona prędkość = czterokrotna droga hamowania.'
    }
  },
  {
    id: 'stopping-100',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Sie fahren 100 km/h, Reaktionszeit 1 s, normale Bremsung. Wie lang ist der Anhalteweg nach Faustformel?',
      en: 'You are travelling at 100 km/h with a 1-second reaction time and normal braking. What is the stopping distance by rule of thumb?',
      ar: 'تسير بسرعة 100 كم/س، زمن رد الفعل 1 ثانية، فرملة عادية. ما مسافة التوقف الكلية؟',
      tr: '100 km/s, 1 sn tepki, normal frenleme. Genel kurala göre durma yolu nedir?',
      ru: 'Скорость 100 км/ч, реакция 1 с, обычное торможение. Остановочный путь по формуле?',
      pl: 'Jedziesz 100 km/h, reakcja 1 s, normalne hamowanie. Droga zatrzymania według reguły kciuka?'
    },
    options: [
      {
        id: 'a',
        text: { de: '130 m', en: '130 m', ar: '130 م', tr: '130 m', ru: '130 м', pl: '130 m' }
      },
      {
        id: 'b',
        text: { de: '100 m', en: '100 m', ar: '100 م', tr: '100 m', ru: '100 м', pl: '100 m' }
      },
      {
        id: 'c',
        text: { de: '160 m', en: '160 m', ar: '160 م', tr: '160 m', ru: '160 м', pl: '160 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Reaktionsweg 30 m + Bremsweg 100 m = Anhalteweg 130 m.',
      en: 'Reaction path 30 m + braking distance 100 m = stopping distance 130 m.',
      ar: 'مسافة رد الفعل 30 م + مسافة الفرملة 100 م = مسافة التوقف 130 م.',
      tr: 'Tepki yolu 30 m + fren yolu 100 m = durma yolu 130 m.',
      ru: 'Путь реакции 30 м + тормозной путь 100 м = остановочный путь 130 м.',
      pl: 'Droga reakcji 30 m + droga hamowania 100 m = droga zatrzymania 130 m.'
    }
  },
  {
    id: 'braking-100',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Sie fahren 100 km/h und bremsen normal. Wie lang ist der Bremsweg nach Faustformel?',
      en: 'You are travelling at 100 km/h and brake normally. What is the braking distance by rule of thumb?',
      ar: 'تسير بسرعة 100 كم/س وتفرمل بشكل عادي. ما مسافة الفرملة؟',
      tr: '100 km/s ile normal frenleme. Genel kurala göre fren yolu nedir?',
      ru: 'Скорость 100 км/ч, обычное торможение. Тормозной путь по формуле?',
      pl: 'Jedziesz 100 km/h i normalnie hamujesz. Droga hamowania według reguły?'
    },
    options: [
      {
        id: 'a',
        text: { de: '100 m', en: '100 m', ar: '100 م', tr: '100 m', ru: '100 м', pl: '100 m' }
      },
      {
        id: 'b',
        text: { de: '50 m', en: '50 m', ar: '50 م', tr: '50 m', ru: '50 м', pl: '50 m' }
      },
      {
        id: 'c',
        text: { de: '130 m', en: '130 m', ar: '130 م', tr: '130 m', ru: '130 м', pl: '130 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: '(100 / 10)² = 100 m.',
      en: '(100 / 10)² = 100 m.',
      ar: '(100 / 10)² = 100 م.',
      tr: '(100 / 10)² = 100 m.',
      ru: '(100 / 10)² = 100 м.',
      pl: '(100 / 10)² = 100 m.'
    }
  },
  {
    id: 'reaction-100',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Sie fahren 100 km/h, Reaktionszeit 1 s. Wie lang ist der Reaktionsweg?',
      en: 'You are travelling at 100 km/h with a 1-second reaction time. What is the reaction distance?',
      ar: 'تسير بسرعة 100 كم/س مع زمن رد فعل 1 ثانية. ما مسافة رد الفعل؟',
      tr: '100 km/s, 1 sn tepki. Tepki yolu nedir?',
      ru: '100 км/ч, реакция 1 с. Путь реакции?',
      pl: '100 km/h, czas reakcji 1 s. Droga reakcji?'
    },
    options: [
      {
        id: 'a',
        text: { de: '30 m', en: '30 m', ar: '30 م', tr: '30 m', ru: '30 м', pl: '30 m' }
      },
      {
        id: 'b',
        text: { de: '15 m', en: '15 m', ar: '15 م', tr: '15 m', ru: '15 м', pl: '15 m' }
      },
      {
        id: 'c',
        text: { de: '50 m', en: '50 m', ar: '50 م', tr: '50 m', ru: '50 м', pl: '50 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: '(100 / 10) × 3 = 30 m.',
      en: '(100 / 10) × 3 = 30 m.',
      ar: '(100 / 10) × 3 = 30 م.',
      tr: '(100 / 10) × 3 = 30 m.',
      ru: '(100 / 10) × 3 = 30 м.',
      pl: '(100 / 10) × 3 = 30 m.'
    }
  },
  {
    id: 'stopping-50',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Sie fahren 50 km/h, Reaktionszeit 1 s, normale Bremsung. Wie lang ist der Anhalteweg nach Faustformel?',
      en: 'You are travelling at 50 km/h with 1 s reaction and normal braking. What is the stopping distance?',
      ar: 'تسير بسرعة 50 كم/س مع زمن رد فعل 1 ث وفرملة عادية. ما مسافة التوقف؟',
      tr: '50 km/s, 1 sn tepki, normal frenleme. Durma yolu nedir?',
      ru: '50 км/ч, реакция 1 с, обычное торможение. Остановочный путь?',
      pl: '50 km/h, reakcja 1 s, normalne hamowanie. Droga zatrzymania?'
    },
    options: [
      {
        id: 'a',
        text: { de: '40 m', en: '40 m', ar: '40 م', tr: '40 m', ru: '40 м', pl: '40 m' }
      },
      {
        id: 'b',
        text: { de: '25 m', en: '25 m', ar: '25 م', tr: '25 m', ru: '25 м', pl: '25 m' }
      },
      {
        id: 'c',
        text: { de: '55 m', en: '55 m', ar: '55 م', tr: '55 m', ru: '55 м', pl: '55 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Reaktionsweg 15 m + Bremsweg 25 m = 40 m.',
      en: 'Reaction path 15 m + braking distance 25 m = 40 m.',
      ar: 'مسافة رد الفعل 15 م + مسافة الفرملة 25 م = 40 م.',
      tr: 'Tepki yolu 15 m + fren yolu 25 m = 40 m.',
      ru: 'Путь реакции 15 м + тормозной путь 25 м = 40 м.',
      pl: 'Droga reakcji 15 m + droga hamowania 25 m = 40 m.'
    }
  },
  {
    id: 'braking-50',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Sie fahren 50 km/h und bremsen normal. Wie lang ist der Bremsweg?',
      en: 'You are travelling at 50 km/h and brake normally. What is the braking distance?',
      ar: 'تسير بسرعة 50 كم/س مع فرملة عادية. ما مسافة الفرملة؟',
      tr: '50 km/s, normal frenleme. Fren yolu nedir?',
      ru: '50 км/ч, обычное торможение. Тормозной путь?',
      pl: '50 km/h, normalne hamowanie. Droga hamowania?'
    },
    options: [
      {
        id: 'a',
        text: { de: '25 m', en: '25 m', ar: '25 م', tr: '25 m', ru: '25 м', pl: '25 m' }
      },
      {
        id: 'b',
        text: { de: '40 m', en: '40 m', ar: '40 م', tr: '40 m', ru: '40 м', pl: '40 m' }
      },
      {
        id: 'c',
        text: { de: '15 m', en: '15 m', ar: '15 م', tr: '15 m', ru: '15 м', pl: '15 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: '(50 / 10)² = 25 m.',
      en: '(50 / 10)² = 25 m.',
      ar: '(50 / 10)² = 25 م.',
      tr: '(50 / 10)² = 25 m.',
      ru: '(50 / 10)² = 25 м.',
      pl: '(50 / 10)² = 25 m.'
    }
  },
  {
    id: 'reaction-50',
    category: 'speed',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Sie fahren 50 km/h, Reaktionszeit 1 s. Wie lang ist der Reaktionsweg?',
      en: 'You are travelling at 50 km/h with a 1-second reaction time. What is the reaction distance?',
      ar: 'تسير بسرعة 50 كم/س مع زمن رد فعل 1 ث. ما مسافة رد الفعل؟',
      tr: '50 km/s, 1 sn tepki. Tepki yolu nedir?',
      ru: '50 км/ч, реакция 1 с. Путь реакции?',
      pl: '50 km/h, reakcja 1 s. Droga reakcji?'
    },
    options: [
      {
        id: 'a',
        text: { de: '15 m', en: '15 m', ar: '15 م', tr: '15 m', ru: '15 м', pl: '15 m' }
      },
      {
        id: 'b',
        text: { de: '25 m', en: '25 m', ar: '25 م', tr: '25 m', ru: '25 م', pl: '25 m' }
      },
      {
        id: 'c',
        text: { de: '30 m', en: '30 m', ar: '30 م', tr: '30 m', ru: '30 м', pl: '30 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: '(50 / 10) × 3 = 15 m.',
      en: '(50 / 10) × 3 = 15 m.',
      ar: '(50 / 10) × 3 = 15 م.',
      tr: '(50 / 10) × 3 = 15 m.',
      ru: '(50 / 10) × 3 = 15 м.',
      pl: '(50 / 10) × 3 = 15 m.'
    }
  },
  {
    id: 'narrow-road-half-sight',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Sie fahren auf einer sehr schmalen Straße und sehen 50 m weit. Wie lang darf Ihr Anhalteweg höchstens sein?',
      en: 'You are driving on a very narrow road and can see 50 m ahead. What must be your maximum stopping distance?',
      ar: 'تقود على طريق ضيق جدًا والرؤية الأمامية 50 م. ما الحد الأقصى لمسافة التوقف؟',
      tr: 'Çok dar bir yolda 50 m önünüzü görüyorsunuz. Durma yolu en fazla ne kadar olmalı?',
      ru: 'Вы едете по очень узкой дороге, видите на 50 м. Каков максимально допустимый остановочный путь?',
      pl: 'Jedziesz bardzo wąską drogą, widzisz 50 m. Maksymalna droga zatrzymania?'
    },
    options: [
      {
        id: 'a',
        text: { de: '25 m (halbe Sichtweite)', en: '25 m (half the sight distance)', ar: '25 م (نصف مسافة الرؤية)', tr: '25 m (görüş mesafesinin yarısı)', ru: '25 м (половина видимости)', pl: '25 m (połowa widzialności)' }
      },
      {
        id: 'b',
        text: { de: '50 m', en: '50 m', ar: '50 م', tr: '50 m', ru: '50 м', pl: '50 m' }
      },
      {
        id: 'c',
        text: { de: '100 m', en: '100 m', ar: '100 م', tr: '100 m', ru: '100 м', pl: '100 m' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auf sehr schmalen Straßen müssen Sie innerhalb der halben Sichtweite anhalten können (auf Begegnungsverkehr Rücksicht nehmen).',
      en: 'On very narrow roads you must be able to stop within half the visible distance (to allow for oncoming traffic).',
      ar: 'في الطرق الضيقة جدًا يجب أن تكون قادرًا على التوقف ضمن نصف مسافة الرؤية (لحساب المرور المعاكس).',
      tr: 'Çok dar yollarda görüş mesafesinin yarısı içinde durabilmelisiniz (karşıdan gelene yer).',
      ru: 'На очень узких дорогах нужно успевать остановиться в пределах половины видимости (с учётом встречки).',
      pl: 'Na bardzo wąskich drogach musisz móc się zatrzymać w połowie widzialności (z uwagi na ruch z przeciwka).'
    }
  },
  {
    id: 'snow-chains-max',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Höchstgeschwindigkeit darf ein Kraftfahrzeug mit Schneeketten fahren?',
      en: 'What is the maximum speed a motor vehicle fitted with snow chains is allowed to travel?',
      ar: 'ما السرعة القصوى المسموح بها لمركبة مزودة بسلاسل الثلج؟',
      tr: 'Kar zinciri takılı bir araç en fazla kaç km/s ile gidebilir?',
      ru: 'Какова максимальная скорость для автомобиля с цепями противоскольжения?',
      pl: 'Jaka jest maksymalna prędkość pojazdu z łańcuchami śnieżnymi?'
    },
    options: [
      {
        id: 'a',
        text: { de: '50 km/h', en: '50 km/h', ar: '50 كم/س', tr: '50 km/s', ru: '50 км/ч', pl: '50 km/h' }
      },
      {
        id: 'b',
        text: { de: '80 km/h', en: '80 km/h', ar: '80 كم/س', tr: '80 km/s', ru: '80 км/ч', pl: '80 km/h' }
      },
      {
        id: 'c',
        text: { de: '30 km/h', en: '30 km/h', ar: '30 كم/س', tr: '30 km/s', ru: '30 км/ч', pl: '30 km/h' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Mit Schneeketten gilt eine generelle Höchstgeschwindigkeit von 50 km/h.',
      en: 'With snow chains the general maximum speed is 50 km/h.',
      ar: 'مع سلاسل الثلج، السرعة القصوى العامة هي 50 كم/س.',
      tr: 'Kar zinciri ile genel azami hız 50 km/s.',
      ru: 'С цепями противоскольжения максимум 50 км/ч.',
      pl: 'Z łańcuchami śnieżnymi maksymalna prędkość to 50 km/h.'
    }
  },
  {
    id: 'truck3t-trailer-autobahn',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Höchstgeschwindigkeit gilt für einen Lkw bis 3,5 t mit Anhänger auf Autobahnen?',
      en: 'What is the maximum speed for a truck with a permissible total mass of 3.0 t and trailer on autobahns?',
      ar: 'ما السرعة القصوى لشاحنة وزنها الكلي 3.0 طن مع مقطورة على الأوتوبان؟',
      tr: 'İzin verilen toplam ağırlığı 3.0 t olan römorklu bir kamyon otoyolda en fazla kaç km/s gidebilir?',
      ru: 'Максимальная скорость грузовика до 3,5 т с прицепом на автобане?',
      pl: 'Maksymalna prędkość ciężarówki o dmc 3,0 t z przyczepą na autostradzie?'
    },
    options: [
      {
        id: 'a',
        text: { de: '80 km/h', en: '80 km/h', ar: '80 كم/س', tr: '80 km/s', ru: '80 км/ч', pl: '80 km/h' }
      },
      {
        id: 'b',
        text: { de: '100 km/h', en: '100 km/h', ar: '100 كم/س', tr: '100 km/s', ru: '100 км/ч', pl: '100 km/h' }
      },
      {
        id: 'c',
        text: { de: '130 km/h', en: '130 km/h', ar: '130 كم/س', tr: '130 km/s', ru: '130 км/ч', pl: '130 km/h' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Lkw mit Anhänger sind auf Autobahnen auf 80 km/h begrenzt.',
      en: 'Trucks with trailers are limited to 80 km/h on motorways.',
      ar: 'الشاحنات مع مقطورة محدودة بـ 80 كم/س على الأوتوبان.',
      tr: 'Römorklu kamyonlar otoyolda 80 km/s ile sınırlıdır.',
      ru: 'Грузовикам с прицепом разрешено до 80 км/ч на автобане.',
      pl: 'Ciężarówki z przyczepą na autostradzie limit to 80 km/h.'
    }
  },
  {
    id: 'car-trailer-outside',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Höchstgeschwindigkeit gilt für einen Pkw mit Anhänger außerorts?',
      en: 'What is the maximum speed for a car with trailer outside built-up areas?',
      ar: 'ما السرعة القصوى لسيارة مع مقطورة خارج المناطق المبنية؟',
      tr: 'Yerleşim dışında römorklu otomobil için azami hız?',
      ru: 'Максимальная скорость легкового автомобиля с прицепом вне населённого пункта?',
      pl: 'Maksymalna prędkość samochodu osobowego z przyczepą poza obszarem zabudowanym?'
    },
    options: [
      {
        id: 'a',
        text: { de: '80 km/h', en: '80 km/h', ar: '80 كم/س', tr: '80 km/s', ru: '80 км/ч', pl: '80 km/h' }
      },
      {
        id: 'b',
        text: { de: '100 km/h', en: '100 km/h', ar: '100 كم/س', tr: '100 km/s', ru: '100 км/ч', pl: '100 km/h' }
      },
      {
        id: 'c',
        text: { de: '60 km/h', en: '60 km/h', ar: '60 كم/س', tr: '60 km/s', ru: '60 км/ч', pl: '60 km/h' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Pkw mit Anhänger dürfen außerorts maximal 80 km/h fahren.',
      en: 'Cars with trailers may drive at most 80 km/h outside built-up areas.',
      ar: 'السيارات مع مقطورة، السرعة القصوى خارج المدن 80 كم/س.',
      tr: 'Yerleşim dışında römorklu otomobil için azami 80 km/s.',
      ru: 'Легковые с прицепом — максимум 80 км/ч вне населённого пункта.',
      pl: 'Samochody osobowe z przyczepą — maks. 80 km/h poza obszarem zabudowanym.'
    }
  },
  {
    id: 'truck3t-trailer-outside',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Höchstgeschwindigkeit gilt für einen Lkw bis 3,5 t mit Anhänger außerorts?',
      en: 'What is the maximum speed for a truck up to 3.5 t with trailer outside built-up areas?',
      ar: 'ما السرعة القصوى لشاحنة حتى 3.5 طن مع مقطورة خارج المدن؟',
      tr: 'Yerleşim dışında 3,5 t\'a kadar römorklu kamyon için azami hız?',
      ru: 'Максимальная скорость грузовика до 3,5 т с прицепом вне населённого пункта?',
      pl: 'Maksymalna prędkość ciężarówki do 3,5 t z przyczepą poza obszarem zabudowanym?'
    },
    options: [
      {
        id: 'a',
        text: { de: '80 km/h', en: '80 km/h', ar: '80 كم/س', tr: '80 km/s', ru: '80 км/ч', pl: '80 km/h' }
      },
      {
        id: 'b',
        text: { de: '100 km/h', en: '100 km/h', ar: '100 كم/س', tr: '100 km/s', ru: '100 км/ч', pl: '100 km/h' }
      },
      {
        id: 'c',
        text: { de: '60 km/h', en: '60 km/h', ar: '60 كم/س', tr: '60 km/s', ru: '60 км/ч', pl: '60 km/h' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auch ein leichter Lkw mit Anhänger ist außerorts auf 80 km/h begrenzt.',
      en: 'Even a light truck with trailer is limited to 80 km/h outside built-up areas.',
      ar: 'حتى الشاحنة الخفيفة مع مقطورة محدودة بـ 80 كم/س خارج المدن.',
      tr: 'Hafif kamyon bile römorklu olduğunda yerleşim dışında 80 km/s ile sınırlıdır.',
      ru: 'Лёгкий грузовик с прицепом тоже ограничен 80 км/ч вне города.',
      pl: 'Nawet lekka ciężarówka z przyczepą jest ograniczona do 80 km/h poza obszarem zabudowanym.'
    }
  },
  {
    id: 'recommended-130',
    category: 'speed',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Welche Richtgeschwindigkeit gilt für Pkw und Krafträder auf Autobahnen?',
      en: 'What is the recommended speed for cars and motorcycles on autobahns?',
      ar: 'ما السرعة الاسترشادية للسيارات والدراجات النارية على الأوتوبان؟',
      tr: 'Otoyolda otomobiller ve motosikletler için tavsiye edilen hız?',
      ru: 'Рекомендуемая скорость для легковых и мотоциклов на автобане?',
      pl: 'Zalecana prędkość dla samochodów i motocykli na autostradzie?'
    },
    options: [
      {
        id: 'a',
        text: { de: '130 km/h', en: '130 km/h', ar: '130 كم/س', tr: '130 km/s', ru: '130 км/ч', pl: '130 km/h' }
      },
      {
        id: 'b',
        text: { de: '100 km/h', en: '100 km/h', ar: '100 كم/س', tr: '100 km/s', ru: '100 км/ч', pl: '100 km/h' }
      },
      {
        id: 'c',
        text: { de: '120 km/h', en: '120 km/h', ar: '120 كم/س', tr: '120 km/s', ru: '120 км/ч', pl: '120 km/h' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auf Autobahnen gilt die Richtgeschwindigkeit 130 km/h.',
      en: 'On motorways the recommended speed is 130 km/h.',
      ar: 'على الأوتوبان السرعة الاسترشادية 130 كم/س.',
      tr: 'Otoyollarda tavsiye edilen hız 130 km/s.',
      ru: 'На автобане рекомендуемая скорость — 130 км/ч.',
      pl: 'Na autostradzie zalecana prędkość to 130 km/h.'
    }
  },
  {
    id: 'autobahn-min-design-speed',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche bauartbedingte Höchstgeschwindigkeit muss in den Fahrzeugpapieren eingetragen sein, damit die Autobahn benutzt werden darf?',
      en: 'What top speed must be entered in the vehicle documents to allow the vehicle\'s use on autobahns?',
      ar: 'ما السرعة القصوى البنائية التي يجب أن تكون مدوّنة في وثائق المركبة لاستخدام الأوتوبان؟',
      tr: 'Otoyol kullanımı için araç belgelerinde kayıtlı azami yapısal hız kaç olmalıdır?',
      ru: 'Какая конструктивная максимальная скорость должна быть указана в документах для допуска на автобан?',
      pl: 'Jaka maksymalna prędkość konstrukcyjna musi figurować w dokumentach pojazdu, by mógł jechać autostradą?'
    },
    options: [
      {
        id: 'a',
        text: { de: '60 km/h', en: '60 km/h', ar: '60 كم/س', tr: '60 km/s', ru: '60 км/ч', pl: '60 km/h' }
      },
      {
        id: 'b',
        text: { de: '50 km/h', en: '50 km/h', ar: '50 كم/س', tr: '50 km/s', ru: '50 км/ч', pl: '50 km/h' }
      },
      {
        id: 'c',
        text: { de: '80 km/h', en: '80 km/h', ar: '80 كم/س', tr: '80 km/s', ru: '80 км/ч', pl: '80 km/h' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Fahrzeuge müssen eine bauartbedingte Höchstgeschwindigkeit von mehr als 60 km/h haben, um die Autobahn nutzen zu dürfen.',
      en: 'Vehicles must have a design top speed of more than 60 km/h to use the autobahn.',
      ar: 'يجب أن تكون السرعة البنائية القصوى للمركبة أكثر من 60 كم/س لاستخدام الأوتوبان.',
      tr: 'Otoyol kullanımı için aracın yapısal azami hızı 60 km/s\'in üzerinde olmalıdır.',
      ru: 'Для допуска на автобан конструктивная скорость должна превышать 60 км/ч.',
      pl: 'Aby jechać autostradą, prędkość konstrukcyjna pojazdu musi przekraczać 60 km/h.'
    }
  },

  // ── Parking & stopping distances ─────────────────────────────────────────
  {
    id: 'park-zebra-5m',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Welchen Mindestabstand müssen Sie beim Halten oder Parken vor einem Fußgängerüberweg einhalten?',
      en: 'What is the minimum distance you must leave clear when stopping or parking in front of a pedestrian crossing?',
      ar: 'ما الحد الأدنى للمسافة عند الوقوف أو ركن السيارة أمام ممر مشاة؟',
      tr: 'Yaya geçidi önünde park ederken veya durduğunda bırakmanız gereken asgari mesafe?',
      ru: 'Минимальное расстояние при остановке или стоянке перед пешеходным переходом?',
      pl: 'Minimalna odległość przy zatrzymaniu lub parkowaniu przed przejściem dla pieszych?'
    },
    options: [
      { id: 'a', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'b', text: { de: '10 m', en: '10 m', ar: '10 م', tr: '10 m', ru: '10 м', pl: '10 m' } },
      { id: 'c', text: { de: '3 m', en: '3 m', ar: '3 م', tr: '3 m', ru: '3 м', pl: '3 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Vor und nach einem Fußgängerüberweg sind 5 m freizuhalten — sonst ist die Sicht versperrt.',
      en: '5 m must be kept clear in front of and behind a pedestrian crossing — otherwise the view is blocked.',
      ar: 'يجب ترك 5 م قبل وبعد ممر المشاة — وإلا تنحجب الرؤية.',
      tr: 'Yaya geçidinin önünde ve arkasında 5 m boş bırakılmalı — aksi hâlde görüş kapanır.',
      ru: 'Перед и за пешеходным переходом нужно оставлять 5 м — иначе перекрывается видимость.',
      pl: 'Przed i za przejściem dla pieszych musi pozostać 5 m — inaczej widoczność jest zasłonięta.'
    }
  },
  {
    id: 'park-junction-5m',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Bis zu welcher Entfernung vor und hinter Kreuzungen und Einmündungen ist das Parken verboten?',
      en: 'Up to what distances before and behind crossroads and junctions is parking prohibited?',
      ar: 'إلى أي مسافة قبل وبعد التقاطعات يُمنع الركن؟',
      tr: 'Kavşaklardan önce ve sonra ne kadar mesafede park yasaktır?',
      ru: 'На каком расстоянии до и после перекрёстков запрещена стоянка?',
      pl: 'Do jakiej odległości przed i za skrzyżowaniami zabronione jest parkowanie?'
    },
    options: [
      { id: 'a', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'b', text: { de: '10 m', en: '10 m', ar: '10 م', tr: '10 m', ru: '10 м', pl: '10 m' } },
      { id: 'c', text: { de: '15 m', en: '15 m', ar: '15 م', tr: '15 m', ru: '15 м', pl: '15 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bis 5 m vor und nach Kreuzungen und Einmündungen ist Parken verboten.',
      en: 'Parking is prohibited up to 5 m before and after crossroads and junctions.',
      ar: 'يُمنع الركن حتى 5 م قبل وبعد التقاطعات والمنعطفات.',
      tr: 'Kavşak ve birleşme yerlerinin 5 m öncesi ve sonrası park yasaktır.',
      ru: 'Парковка запрещена на 5 м до и после перекрёстков и пересечений.',
      pl: 'Parkowanie zabronione do 5 m przed i za skrzyżowaniem oraz włączeniem dróg.'
    }
  },
  {
    id: 'park-andrew-outside-50m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welchen Mindestabstand müssen Sie außerorts vor einem Andreaskreuz beim Parken einhalten?',
      en: 'What is the minimum distance you must leave clear when parking outside a built-up area before a St. Andrew\'s Cross?',
      ar: 'ما الحد الأدنى للمسافة قبل صليب القديس أندريا عند الركن خارج المدن؟',
      tr: 'Yerleşim dışında bir Andreas haçı önünde park ederken bırakılacak asgari mesafe?',
      ru: 'Минимальное расстояние при стоянке за городом перед знаком «Андреевский крест»?',
      pl: 'Minimalna odległość przy parkowaniu poza obszarem zabudowanym przed krzyżem św. Andrzeja?'
    },
    options: [
      { id: 'a', text: { de: '50 m', en: '50 m', ar: '50 م', tr: '50 m', ru: '50 м', pl: '50 m' } },
      { id: 'b', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'c', text: { de: '20 m', en: '20 m', ar: '20 م', tr: '20 m', ru: '20 м', pl: '20 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Außerorts müssen vor Andreaskreuzen 50 m frei bleiben.',
      en: 'Outside built-up areas 50 m must remain clear before a St. Andrew\'s Cross.',
      ar: 'خارج المدن، يجب ترك 50 م قبل صليب القديس أندريا.',
      tr: 'Yerleşim dışında Andreas haçının önünde 50 m boş kalmalı.',
      ru: 'За городом перед «Андреевским крестом» нужно 50 м свободного места.',
      pl: 'Poza obszarem zabudowanym 50 m musi pozostać wolne przed krzyżem św. Andrzeja.'
    }
  },
  {
    id: 'park-andrew-builtup-5m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welchen Mindestabstand müssen Sie innerorts vor einem Andreaskreuz beim Parken einhalten?',
      en: 'You want to park in front of a St. Andrew\'s Cross in a built-up area. What is the minimum distance you must leave clear?',
      ar: 'تريد الركن أمام صليب القديس أندريا داخل المدينة. ما الحد الأدنى للمسافة؟',
      tr: 'Yerleşim içinde bir Andreas haçı önünde park edeceksiniz. Asgari mesafe?',
      ru: 'Хотите припарковаться в городе перед «Андреевским крестом». Минимальное расстояние?',
      pl: 'Chcesz zaparkować w obszarze zabudowanym przed krzyżem św. Andrzeja. Minimalna odległość?'
    },
    options: [
      { id: 'a', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'b', text: { de: '50 m', en: '50 m', ar: '50 م', tr: '50 m', ru: '50 м', pl: '50 m' } },
      { id: 'c', text: { de: '10 m', en: '10 m', ar: '10 م', tr: '10 m', ru: '10 м', pl: '10 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Innerorts beträgt der Mindestabstand vor einem Andreaskreuz 5 m.',
      en: 'In built-up areas the minimum distance before a St. Andrew\'s Cross is 5 m.',
      ar: 'داخل المدن، الحد الأدنى أمام صليب القديس أندريا هو 5 م.',
      tr: 'Yerleşim içinde Andreas haçı önünde asgari 5 m.',
      ru: 'В городе перед «Андреевским крестом» минимум 5 м.',
      pl: 'W obszarze zabudowanym minimalna odległość przed krzyżem św. Andrzeja to 5 m.'
    }
  },
  {
    id: 'park-bus-stop-15m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Bis zu welcher Entfernung vor und hinter einem Haltestellenschild von Bus oder Straßenbahn ist das Parken verboten?',
      en: 'Up to what distance is it not allowed to park before or behind a bus or tram stop sign?',
      ar: 'إلى أي مسافة قبل وبعد لافتة موقف الحافلة أو الترام يُمنع الركن؟',
      tr: 'Otobüs veya tramvay durak tabelasının önünde ve arkasında ne kadar mesafede park yasaktır?',
      ru: 'На каком расстоянии до и после знака остановки автобуса/трамвая запрещена стоянка?',
      pl: 'Do jakiej odległości przed i za znakiem przystanku autobusu lub tramwaju nie wolno parkować?'
    },
    options: [
      { id: 'a', text: { de: '15 m', en: '15 m', ar: '15 م', tr: '15 m', ru: '15 м', pl: '15 m' } },
      { id: 'b', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'c', text: { de: '30 m', en: '30 m', ar: '30 م', tr: '30 m', ru: '30 м', pl: '30 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: '15 m vor und nach dem Haltestellenschild ist Parken verboten.',
      en: 'No parking is allowed 15 m before or behind the stop sign.',
      ar: 'يُمنع الركن 15 م قبل وبعد لافتة الموقف.',
      tr: 'Durak tabelasının 15 m öncesi ve sonrası park yasaktır.',
      ru: 'Стоянка запрещена на 15 м до и после знака остановки.',
      pl: '15 m przed i za znakiem przystanku — zakaz parkowania.'
    }
  },
  {
    id: 'bus-stop-max-3min',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Wie lange dürfen Sie an einer Bushaltestelle höchstens halten, ohne Busse zu behindern?',
      en: 'What is the maximum length of time you are allowed to stop at a bus stop provided you do not present an obstruction to buses?',
      ar: 'ما المدة القصوى للتوقف عند موقف الحافلات دون إعاقة الحافلات؟',
      tr: 'Otobüse engel olmadan otobüs durağında en fazla ne kadar duraklayabilirsiniz?',
      ru: 'Сколько времени можно стоять на остановке, не мешая автобусам?',
      pl: 'Jak długo wolno zatrzymać się na przystanku autobusowym, nie tarasując go?'
    },
    options: [
      { id: 'a', text: { de: '3 Minuten', en: '3 minutes', ar: '3 دقائق', tr: '3 dakika', ru: '3 минуты', pl: '3 minuty' } },
      { id: 'b', text: { de: '5 Minuten', en: '5 minutes', ar: '5 دقائق', tr: '5 dakika', ru: '5 минут', pl: '5 minut' } },
      { id: 'c', text: { de: '1 Minute', en: '1 minute', ar: 'دقيقة واحدة', tr: '1 dakika', ru: '1 минута', pl: '1 minuta' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bis zu 3 Minuten Halten (zum Ein-/Aussteigen) ist erlaubt, sofern Busse nicht behindert werden.',
      en: 'Stops of up to 3 minutes (drop-off/pick-up) are allowed if buses are not obstructed.',
      ar: 'يُسمح بالتوقف حتى 3 دقائق (نزول/صعود) دون إعاقة الحافلات.',
      tr: 'Otobüsleri engellemediği sürece 3 dakikaya kadar duraklamak serbest.',
      ru: 'Стоянка до 3 минут (для посадки/высадки) разрешена, если не мешает автобусам.',
      pl: 'Postój do 3 minut (wsiadanie/wysiadanie) jest dozwolony, o ile nie blokuje autobusów.'
    }
  },
  {
    id: 'load-back-1m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie weit darf eine Ladung über die Rückstrahler nach hinten hinausragen, ohne dass eine Kennzeichnung nötig ist?',
      en: 'What is the maximum distance a load may project backwards beyond the rear reflectors without a projection marker being necessary?',
      ar: 'إلى أي مسافة يجوز للحمولة أن تبرز للخلف بعد العاكسات الخلفية بدون وضع علامة بروز؟',
      tr: 'Yük, arka reflektörlerin gerisinde işaret konulmadan en fazla ne kadar taşabilir?',
      ru: 'На какое расстояние груз может выступать за задние светоотражатели без отметки?',
      pl: 'Na jaką odległość ładunek może wystawać poza tylne reflektory bez konieczności oznakowania?'
    },
    options: [
      { id: 'a', text: { de: '1 m', en: '1 m', ar: '1 م', tr: '1 m', ru: '1 м', pl: '1 m' } },
      { id: 'b', text: { de: '2 m', en: '2 m', ar: '2 م', tr: '2 m', ru: '2 м', pl: '2 m' } },
      { id: 'c', text: { de: '0,5 m', en: '0.5 m', ar: '0.5 م', tr: '0,5 m', ru: '0,5 м', pl: '0,5 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bis 1 m Überstand benötigt es keine Markierung; darüber: rote Fahne oder rotes Schild.',
      en: 'Up to 1 m overhang needs no marker; beyond that: red flag or red sign.',
      ar: 'حتى 1 م لا يحتاج لعلامة؛ ما زاد عن ذلك: علم أو لوحة حمراء.',
      tr: '1 m\'ye kadar işaret gerekmez; sonrası için kırmızı bayrak/levha.',
      ru: 'До 1 м обозначение не нужно; больше — красный флаг или щит.',
      pl: 'Do 1 m brak oznakowania; powyżej — czerwona flaga lub tablica.'
    }
  },
  {
    id: 'load-front-2-5m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Bis zu welcher Höhe darf eine Ladung nicht über die Front des Fahrzeugs ragen?',
      en: 'Up to what height is a load not allowed to project over the front of the vehicle?',
      ar: 'حتى أي ارتفاع لا يجوز للحمولة أن تبرز من أمام المركبة؟',
      tr: 'Yük, aracın önüne hangi yüksekliğe kadar taşamaz?',
      ru: 'До какой высоты груз не может выступать за переднюю часть автомобиля?',
      pl: 'Do jakiej wysokości ładunek nie może wystawać przed pojazd?'
    },
    options: [
      { id: 'a', text: { de: '2,5 m', en: '2.5 m', ar: '2.5 م', tr: '2,5 m', ru: '2,5 м', pl: '2,5 m' } },
      { id: 'b', text: { de: '1,5 m', en: '1.5 m', ar: '1.5 م', tr: '1,5 m', ru: '1,5 м', pl: '1,5 m' } },
      { id: 'c', text: { de: '3 m', en: '3 m', ar: '3 م', tr: '3 m', ru: '3 м', pl: '3 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bis 2,5 m Höhe darf eine Ladung nicht nach vorn überstehen — darüber höchstens 50 cm.',
      en: 'Below a height of 2.5 m, a load may not project forward — above that, no more than 50 cm.',
      ar: 'حتى ارتفاع 2.5 م لا يجوز بروز الحمولة للأمام — فوقه أقصى 50 سم.',
      tr: '2,5 m yüksekliğe kadar yük öne taşamaz — üstünde en fazla 50 cm.',
      ru: 'До высоты 2,5 м груз не может выступать вперёд — выше — не более 50 см.',
      pl: 'Do wysokości 2,5 m ładunek nie może wystawać do przodu — powyżej maks. 50 cm.'
    }
  },
  {
    id: 'red-light-load-1-5m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'In welcher maximalen Höhe über der Fahrbahn darf eine rote Leuchte zur Kennzeichnung einer nach hinten überstehenden Ladung angebracht sein?',
      en: 'What is the maximum height allowed above the roadway for a red light marking a load extending to the back?',
      ar: 'ما الارتفاع الأقصى فوق الطريق المسموح لمصباح أحمر يميّز حمولة بارزة للخلف؟',
      tr: 'Arkaya taşan yükü işaretleyen kırmızı lambanın yoldan en fazla yüksekliği nedir?',
      ru: 'На какой максимальной высоте над дорогой может быть красный фонарь, обозначающий выступающий назад груз?',
      pl: 'Na jakiej maksymalnej wysokości nad jezdnią może być czerwone światło oznaczające ładunek wystający do tyłu?'
    },
    options: [
      { id: 'a', text: { de: '1,5 m', en: '1.5 m', ar: '1.5 م', tr: '1,5 m', ru: '1,5 м', pl: '1,5 m' } },
      { id: 'b', text: { de: '2,0 m', en: '2.0 m', ar: '2.0 م', tr: '2,0 m', ru: '2,0 м', pl: '2,0 m' } },
      { id: 'c', text: { de: '1,0 m', en: '1.0 m', ar: '1.0 م', tr: '1,0 m', ru: '1,0 м', pl: '1,0 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Die rote Leuchte zur Kennzeichnung nach hinten überstehender Ladung darf maximal 1,5 m über der Fahrbahn angebracht sein.',
      en: 'The red light marking a load that projects rearwards may be at most 1.5 m above the road.',
      ar: 'يجب ألا يزيد ارتفاع المصباح الأحمر للحمولة البارزة عن 1.5 م فوق الطريق.',
      tr: 'Arkaya taşan yükü işaretleyen kırmızı lamba en fazla 1,5 m yükseklikte olabilir.',
      ru: 'Красный фонарь, обозначающий груз, выступающий назад, — не выше 1,5 м над дорогой.',
      pl: 'Czerwone światło oznaczające ładunek wystający do tyłu — maks. 1,5 m nad jezdnią.'
    }
  },
  {
    id: 'park-line-3m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie wollen am rechten Fahrbahnrand parken. Wie groß ist der vorgeschriebene Mindestabstand zwischen Ihrem Fahrzeug und einer durchgezogenen Fahrstreifenbegrenzungslinie?',
      en: 'You want to park on the right-hand side edge of the carriageway. How big is the mandatory minimum distance between your vehicle and a solid lane boundary line?',
      ar: 'تريد الركن على الحافة اليمنى للطريق. ما الحد الأدنى الإلزامي للمسافة بين سيارتك والخط المتصل؟',
      tr: 'Sağ kenara park edeceksiniz. Aracınızla sürekli şerit çizgisi arasında olması gereken asgari mesafe?',
      ru: 'Вы паркуетесь у правого края проезжей части. Каков минимально допустимый зазор до сплошной линии?',
      pl: 'Parkujesz przy prawej krawędzi jezdni. Jaka jest minimalna odległość pojazdu od ciągłej linii krawędziowej?'
    },
    options: [
      { id: 'a', text: { de: '3 m', en: '3 m', ar: '3 م', tr: '3 m', ru: '3 м', pl: '3 m' } },
      { id: 'b', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'c', text: { de: '1 m', en: '1 m', ar: '1 م', tr: '1 m', ru: '1 м', pl: '1 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Zwischen Ihrem Fahrzeug und einer durchgezogenen Linie müssen mindestens 3 m frei sein.',
      en: 'At least 3 m must remain free between your vehicle and a solid line.',
      ar: 'يجب ترك 3 م على الأقل بين سيارتك والخط المتصل.',
      tr: 'Aracınızla sürekli çizgi arasında en az 3 m kalmalı.',
      ru: 'Между автомобилем и сплошной линией должно оставаться не менее 3 м.',
      pl: 'Między pojazdem a linią ciągłą musi pozostać co najmniej 3 m.'
    }
  },
  {
    id: 'traffic-light-10m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welcher Mindestabstand muss zu einer Ampel eingehalten werden, wenn sie sonst von Ihrem Fahrzeug verdeckt würde?',
      en: 'What is the minimum distance a vehicle must leave clear in front of traffic lights if the lights would otherwise be concealed by the vehicle?',
      ar: 'ما الحد الأدنى للمسافة قبل إشارة المرور إذا كانت ستحجبها مركبتك؟',
      tr: 'Aracınız trafik ışığını gizleyecekse asgari ne kadar mesafe bırakılmalı?',
      ru: 'Минимальное расстояние до светофора, если он иначе скрывался бы вашим автомобилем?',
      pl: 'Minimalna odległość przed sygnalizacją świetlną, jeśli pojazd by ją zasłaniał?'
    },
    options: [
      { id: 'a', text: { de: '10 m', en: '10 m', ar: '10 م', tr: '10 m', ru: '10 м', pl: '10 m' } },
      { id: 'b', text: { de: '5 m', en: '5 m', ar: '5 م', tr: '5 m', ru: '5 м', pl: '5 m' } },
      { id: 'c', text: { de: '15 m', en: '15 m', ar: '15 م', tr: '15 m', ru: '15 м', pl: '15 m' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Vor Ampeln müssen 10 m freigehalten werden, falls Sie sie sonst verdecken würden.',
      en: 'Keep 10 m free in front of traffic lights if your vehicle would otherwise hide them.',
      ar: 'يجب ترك 10 م قبل الإشارة إن كانت ستُحجب بسبب مركبتك.',
      tr: 'Aracınız trafik ışığını gizleyecekse önünde 10 m boş bırakılmalı.',
      ru: 'Перед светофором — 10 м, если иначе он будет скрыт вашим автомобилем.',
      pl: 'Przed sygnalizacją — 10 m, jeśli pojazd by ją zasłaniał.'
    }
  },
  {
    id: 'lane-choice-builtup-3-5t',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche Kraftfahrzeuge dürfen innerorts ihre Fahrspur frei wählen?',
      en: 'Which motor vehicles may freely choose their lane inside built-up areas?',
      ar: 'أي المركبات يجوز لها داخل المدن اختيار المسار بحرية؟',
      tr: 'Yerleşim içinde hangi motorlu araçlar şerit seçimini özgürce yapabilir?',
      ru: 'Какие транспортные средства в населённых пунктах могут выбирать полосу свободно?',
      pl: 'Które pojazdy mechaniczne w obszarze zabudowanym mogą swobodnie wybierać pas?'
    },
    options: [
      { id: 'a', text: { de: 'Kraftfahrzeuge bis 3,5 t zulässige Gesamtmasse', en: 'Motor vehicles up to 3.5 t permissible total mass', ar: 'المركبات حتى 3.5 طن وزن إجمالي مسموح به', tr: 'Toplam ağırlığı 3,5 t\'a kadar olan motorlu araçlar', ru: 'Транспортные средства до 3,5 т разрешённой массы', pl: 'Pojazdy do 3,5 t dopuszczalnej masy całkowitej' } },
      { id: 'b', text: { de: 'Alle Kraftfahrzeuge', en: 'All motor vehicles', ar: 'جميع المركبات', tr: 'Tüm motorlu araçlar', ru: 'Все автомобили', pl: 'Wszystkie pojazdy mechaniczne' } },
      { id: 'c', text: { de: 'Nur Pkw mit Anhänger', en: 'Only cars with trailers', ar: 'فقط السيارات مع مقطورة', tr: 'Yalnızca römorklu otomobiller', ru: 'Только легковые с прицепом', pl: 'Tylko samochody osobowe z przyczepą' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Fahrzeuge bis 3,5 t zulässiger Gesamtmasse dürfen innerorts den Fahrstreifen frei wählen.',
      en: 'Vehicles up to 3.5 t permissible mass may pick their lane freely in built-up areas.',
      ar: 'المركبات حتى 3.5 طن يجوز لها داخل المدن اختيار المسار بحرية.',
      tr: 'Yerleşim içinde 3,5 t\'a kadar araçlar şeridi serbestçe seçebilir.',
      ru: 'В черте города машины до 3,5 т могут выбирать полосу свободно.',
      pl: 'Pojazdy do 3,5 t mogą w obszarze zabudowanym swobodnie wybrać pas.'
    }
  },
  {
    id: 'park-footpath-2-8t',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Bis zu welcher zulässigen Gesamtmasse dürfen Kraftfahrzeuge auf besonders gekennzeichneten Gehwegen geparkt werden?',
      en: 'Up to which permissible total mass may motor vehicles be parked on specially designated footpaths?',
      ar: 'حتى أي وزن إجمالي مسموح يمكن ركن المركبات على الأرصفة المخصصة لذلك؟',
      tr: 'Özel olarak işaretlenmiş kaldırımlara hangi azami toplam ağırlığa kadar park edilebilir?',
      ru: 'До какой разрешённой массы машины можно парковать на специально обозначенных тротуарах?',
      pl: 'Do jakiej dopuszczalnej masy całkowitej można parkować pojazdy na specjalnie oznaczonych chodnikach?'
    },
    options: [
      { id: 'a', text: { de: '2,8 t', en: '2.8 t', ar: '2.8 طن', tr: '2,8 t', ru: '2,8 т', pl: '2,8 t' } },
      { id: 'b', text: { de: '3,5 t', en: '3.5 t', ar: '3.5 طن', tr: '3,5 t', ru: '3,5 т', pl: '3,5 t' } },
      { id: 'c', text: { de: '2,0 t', en: '2.0 t', ar: '2.0 طن', tr: '2,0 t', ru: '2,0 т', pl: '2,0 t' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Auf gekennzeichneten Gehwegen darf nur bis 2,8 t zGM geparkt werden.',
      en: 'On marked footpaths only vehicles up to 2.8 t may park.',
      ar: 'يجوز الركن على الأرصفة المخصصة فقط للمركبات حتى 2.8 طن.',
      tr: 'İşaretli kaldırımlara yalnızca 2,8 t\'a kadar park edilebilir.',
      ru: 'На обозначенных тротуарах можно ставить только машины до 2,8 т.',
      pl: 'Na oznaczonych chodnikach mogą parkować pojazdy do 2,8 t.'
    }
  },
  {
    id: 'class-b-max-trailers-1',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Wie viele Anhänger darf ein Lkw mit der Klasse B höchstens ziehen?',
      en: 'What is the maximum number of trailers allowed to be towed by a class B truck?',
      ar: 'ما الحد الأقصى لعدد المقطورات التي يمكن لشاحنة من فئة B سحبها؟',
      tr: 'B sınıfı bir kamyon en fazla kaç römork çekebilir?',
      ru: 'Сколько прицепов может буксировать грузовик категории B максимум?',
      pl: 'Ile przyczep może maksymalnie ciągnąć ciężarówka klasy B?'
    },
    options: [
      { id: 'a', text: { de: '1 Anhänger', en: '1 trailer', ar: 'مقطورة واحدة', tr: '1 römork', ru: '1 прицеп', pl: '1 przyczepa' } },
      { id: 'b', text: { de: '2 Anhänger', en: '2 trailers', ar: 'مقطورتان', tr: '2 römork', ru: '2 прицепа', pl: '2 przyczepy' } },
      { id: 'c', text: { de: 'Beliebig viele', en: 'Any number', ar: 'أي عدد', tr: 'Sınırsız', ru: 'Любое количество', pl: 'Dowolna liczba' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Mit Klasse B darf höchstens 1 Anhänger gezogen werden.',
      en: 'Class B allows at most 1 trailer to be towed.',
      ar: 'الفئة B تسمح بسحب مقطورة واحدة فقط.',
      tr: 'B sınıfı en fazla 1 römork çekebilir.',
      ru: 'Категория B позволяет буксировать не более 1 прицепа.',
      pl: 'Kategoria B pozwala holować maksymalnie 1 przyczepę.'
    }
  },
  {
    id: 'caravan-trailer-gap-7m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wann muss ein Pkw mit Wohnwagen-Anhänger außerorts auf zweispurigen Straßen einen so großen Abstand halten, dass ein Überholer sich einordnen kann?',
      en: 'When must a car with caravan trailer outside built-up areas on roads with only one lane each direction keep a sufficient distance from the car in front so that an overtaking vehicle may pull in?',
      ar: 'متى يجب على السيارة مع مقطورة سكنية ترك مسافة كافية خارج المدن على طريق ذي مسار واحد لكل اتجاه ليتمكن متجاوز من التموضع؟',
      tr: 'Yerleşim dışında her yönde tek şeritli yolda karavanlı otomobil, sollayanın araya geçebilmesi için ne zaman yeterli mesafe bırakmalıdır?',
      ru: 'Когда автомобиль с прицепом-дачей вне города на дороге по одной полосе должен держать достаточную дистанцию, чтобы обгоняющий мог встроиться?',
      pl: 'Kiedy samochód z przyczepą kempingową poza obszarem zabudowanym, na drogach jednopasmowych w każdą stronę, musi zostawić wystarczający odstęp, by wyprzedzający mógł się włączyć?'
    },
    options: [
      { id: 'a', text: { de: 'Wenn die Fahrzeugkombination länger als 7 m ist', en: 'When the combination is longer than 7 m', ar: 'إذا كان طول السيارة + المقطورة يتجاوز 7 م', tr: 'Araç katarı 7 m\'den uzunsa', ru: 'Когда длина состава превышает 7 м', pl: 'Gdy zestaw jest dłuższy niż 7 m' } },
      { id: 'b', text: { de: 'Wenn die Kombination kürzer als 5 m ist', en: 'When the combination is shorter than 5 m', ar: 'إذا كان أقل من 5 م', tr: '5 m\'den kısaysa', ru: 'Когда состав короче 5 м', pl: 'Gdy zestaw jest krótszy niż 5 m' } },
      { id: 'c', text: { de: 'Bei jeder Anhängerkombination', en: 'For any combination', ar: 'لأي تركيبة', tr: 'Her römork katarında', ru: 'При любом составе', pl: 'Przy każdym zestawie' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bei einer Kombination länger als 7 m muss außerorts so viel Abstand gehalten werden, dass ein Überholender sich einordnen kann.',
      en: 'For combinations longer than 7 m outside built-up areas, leave enough space for an overtaker to pull back in.',
      ar: 'إذا كان طول التركيبة يزيد عن 7 م خارج المدن، اترك مسافة تكفي لعودة المتجاوز.',
      tr: '7 m\'yi aşan katar yerleşim dışında, sollayan aracın araya geçebileceği kadar mesafe gerekir.',
      ru: 'Если состав длиннее 7 м, вне города нужно оставлять место для обгоняющего, чтобы вклиниться.',
      pl: 'Gdy zestaw przekracza 7 m, poza miastem zostaw miejsce, by wyprzedzający mógł się wcisnąć.'
    }
  },
  {
    id: 'urban-50-distance-15m',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Sie fahren innerorts auf trockener Straße mit 50 km/h im Verkehr. Welcher Mindestsicherheitsabstand ist zum Vordermann zu halten?',
      en: 'You are driving in urban traffic on a dry road at 50 km/h. What is the minimum safe distance you must keep from the vehicle in front?',
      ar: 'تقود في المدينة على طريق جاف بسرعة 50 كم/س. ما الحد الأدنى للمسافة من السيارة الأمامية؟',
      tr: 'Yerleşim içinde kuru zeminde 50 km/s ile gidiyorsunuz. Önünüzdeki araçla asgari güvenli mesafe?',
      ru: 'В городе на сухой дороге 50 км/ч. Минимальная дистанция до едущего впереди?',
      pl: 'Jedziesz w mieście po suchej jezdni 50 km/h. Minimalny bezpieczny odstęp od pojazdu z przodu?'
    },
    options: [
      { id: 'a', text: { de: 'Etwa 15 m oder ca. 3 Pkw-Längen', en: '15 m or approximately 3 car lengths', ar: 'حوالي 15 م أو نحو 3 أطوال سيارة', tr: 'Yaklaşık 15 m veya yaklaşık 3 araç boyu', ru: 'Около 15 м или примерно 3 длины машины', pl: 'Około 15 m lub mniej więcej 3 długości auta' } },
      { id: 'b', text: { de: 'Etwa 10 m oder 2 Pkw-Längen', en: '10 m or approximately 2 car lengths', ar: 'حوالي 10 م أو نحو طولي سيارة', tr: 'Yaklaşık 10 m veya 2 araç boyu', ru: 'Около 10 м или 2 длины машины', pl: 'Około 10 m lub 2 długości auta' } },
      { id: 'c', text: { de: 'Etwa 5 m oder 1 Pkw-Länge', en: '5 m or approximately 1 car length', ar: 'حوالي 5 م أو طول سيارة', tr: 'Yaklaşık 5 m veya 1 araç boyu', ru: 'Около 5 м или одна длина машины', pl: 'Około 5 m lub 1 długość auta' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bei 50 km/h ist die "2-Sekunden-Regel" rund 15 m (≈ 3 Pkw-Längen).',
      en: 'At 50 km/h the 2-second rule gives roughly 15 m (about 3 car lengths).',
      ar: 'عند 50 كم/س، تعطي قاعدة الثانيتين حوالي 15 م (نحو 3 أطوال سيارة).',
      tr: '50 km/s\'de 2 saniye kuralı yaklaşık 15 m (≈ 3 araç boyu) demektir.',
      ru: 'При 50 км/ч «правило 2 секунд» — около 15 м (≈ 3 длины машины).',
      pl: 'Przy 50 km/h reguła 2 sekund to około 15 m (≈ 3 długości auta).'
    }
  },
  {
    id: 'safe-distance-80',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie fahren mit 80 km/h hinter einem Kraftfahrzeug her. Welchen Mindestsicherheitsabstand müssen Sie einhalten?',
      en: 'You are driving at 80 km/h behind a motor vehicle. What is the minimum safe distance you must observe?',
      ar: 'تسير بسرعة 80 كم/س خلف مركبة. ما الحد الأدنى للمسافة الآمنة؟',
      tr: '80 km/s ile bir aracın arkasından gidiyorsunuz. Asgari güvenli mesafe?',
      ru: 'Едете 80 км/ч за автомобилем. Минимальная безопасная дистанция?',
      pl: 'Jedziesz 80 km/h za pojazdem mechanicznym. Minimalny bezpieczny odstęp?'
    },
    options: [
      { id: 'a', text: { de: 'Eine Strecke von 15 m', en: 'A distance of 15 m', ar: 'مسافة 15 م', tr: '15 m mesafe', ru: 'Дистанция 15 м', pl: 'Odległość 15 m' } },
      { id: 'b', text: { de: 'Eine „1-Sekunden-Strecke"', en: 'A "1-second distance"', ar: '"مسافة 1 ثانية"', tr: '"1 saniyelik mesafe"', ru: '«Расстояние в 1 секунду»', pl: 'Odstęp "1 sekundy"' } },
      { id: 'c', text: { de: 'Eine „2-Sekunden-Strecke"', en: 'A "2-second distance"', ar: '"مسافة 2 ثانية"', tr: '"2 saniyelik mesafe"', ru: '«Расстояние в 2 секунды»', pl: 'Odstęp "2 sekund"' } }
    ],
    correctIds: ['c'],
    explanation: {
      de: 'Auch bei 80 km/h ist eine 2-Sekunden-Strecke (≈ halber Tachowert in Metern) der Mindestabstand.',
      en: 'At 80 km/h the minimum safe gap is also a 2-second distance (≈ half the speed in metres).',
      ar: 'حتى عند 80 كم/س الحد الأدنى هو "مسافة 2 ثانية" (تقريبًا نصف قيمة السرعة بالأمتار).',
      tr: '80 km/s\'de bile asgari mesafe "2 saniyelik" mesafe (≈ hızın yarısı m olarak).',
      ru: 'При 80 км/ч минимум — «2 секунды» (≈ половина скорости в метрах).',
      pl: 'Przy 80 km/h minimum to odstęp 2 sekund (≈ połowa wartości prędkości w metrach).'
    }
  },
  {
    id: 'distance-half-speed-outside',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welchen Mindestabstand sollten Sie außerorts zum vorausfahrenden Fahrzeug halten?',
      en: 'What is the minimum distance that should normally be maintained from the vehicle in front outside built-up areas?',
      ar: 'ما الحد الأدنى الموصى به للمسافة من المركبة الأمامية خارج المدن؟',
      tr: 'Yerleşim dışında öndeki araçtan tutulması gereken normal asgari mesafe?',
      ru: 'Какую дистанцию обычно держать вне населённого пункта до едущего впереди?',
      pl: 'Jaki odstęp należy zwykle zachować od pojazdu z przodu poza obszarem zabudowanym?'
    },
    options: [
      { id: 'a', text: { de: '1/5 des Tachowerts in Metern', en: '1/5 of the speedometer reading in metres', ar: 'خُمس قراءة العداد بالأمتار', tr: 'Hız göstergesi değerinin 1/5\'i (m)', ru: '1/5 показания спидометра в метрах', pl: '1/5 wskazania prędkościomierza w metrach' } },
      { id: 'b', text: { de: '1/2 des Tachowerts in Metern', en: '1/2 of the speedometer reading in metres', ar: 'نصف قراءة العداد بالأمتار', tr: 'Hız göstergesi değerinin yarısı (m)', ru: '1/2 показания спидометра в метрах', pl: '1/2 wskazania prędkościomierza w metrach' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Faustregel: Mindestabstand außerorts = halber Tachowert in Metern.',
      en: 'Rule of thumb outside built-up areas: minimum distance = half the speed reading in metres.',
      ar: 'القاعدة: المسافة الدنيا خارج المدن = نصف قراءة العداد بالأمتار.',
      tr: 'Yerleşim dışı kural: asgari mesafe = hız değerinin yarısı (m).',
      ru: 'Вне города: минимальная дистанция = половина значения спидометра (в метрах).',
      pl: 'Reguła: poza miastem minimum = połowa wskazania prędkościomierza w metrach.'
    }
  },
  {
    id: 'stop-within-visible',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Sie fahren auf einer gut ausgebauten Straße bei guter Sicht. Innerhalb welcher Strecke müssen Sie anhalten können?',
      en: 'You are driving on a good quality road with good visibility. Within what distance must you be able to stop?',
      ar: 'تقود على طريق جيد ورؤية واضحة. ضمن أي مسافة يجب أن تستطيع التوقف؟',
      tr: 'İyi yolda ve görüş şartlarında ne kadar mesafede durabilmelisiniz?',
      ru: 'На хорошей дороге с хорошей видимостью — в пределах какого участка нужно успевать остановиться?',
      pl: 'Na dobrej drodze przy dobrej widzialności — w jakim dystansie musisz móc się zatrzymać?'
    },
    options: [
      { id: 'a', text: { de: 'Innerhalb der sichtbaren Strecke', en: 'Within the visible stretch of road', ar: 'ضمن المسافة المرئية', tr: 'Görünen yol mesafesinde', ru: 'В пределах видимой дороги', pl: 'W zasięgu widzialności' } },
      { id: 'b', text: { de: 'Innerhalb der halben sichtbaren Strecke', en: 'Within half of the visible stretch', ar: 'ضمن نصف المسافة المرئية', tr: 'Görünen mesafenin yarısı', ru: 'В пределах половины видимости', pl: 'W połowie zasięgu widzialności' } },
      { id: 'c', text: { de: 'Innerhalb der doppelten sichtbaren Strecke', en: 'Within twice the visible stretch', ar: 'ضمن ضعف المسافة المرئية', tr: 'Görünen mesafenin iki katı', ru: 'В пределах удвоенной видимости', pl: 'W podwójnym zasięgu widzialności' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: '§ 3 StVO: Anhalteweg ≤ Sichtweite.',
      en: '§ 3 of the German road code: stopping distance ≤ visibility.',
      ar: 'مادة 3 من قانون المرور: مسافة التوقف ≤ مسافة الرؤية.',
      tr: 'KTK § 3: durma yolu ≤ görüş mesafesi.',
      ru: '§ 3 ПДД: остановочный путь ≤ видимости.',
      pl: '§ 3 niemieckiego kodeksu drogowego: droga zatrzymania ≤ widzialność.'
    }
  },

  // ── Special situations and emergency braking
  {
    id: 'child-runs-50-stop',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Sie fahren auf einer schmalen Straße. Etwa 20 m vor Ihnen läuft plötzlich ein Kind auf die Fahrbahn. Bei welcher Geschwindigkeit ist ein Zusammenstoß trotz Gefahrbremsung kaum noch zu vermeiden?',
      en: 'You are driving on a narrow road. About 20 m ahead of you a child suddenly runs onto the roadway. From what speed onward is a collision practically unavoidable despite emergency braking?',
      ar: 'تقود على طريق ضيق. على بُعد 20 م يظهر طفل فجأة في الطريق. عند أي سرعة لا يمكن تجنب الاصطدام حتى مع فرملة طارئة؟',
      tr: 'Dar bir yolda 20 m önünüze aniden bir çocuk fırlıyor. Acil frenlemeye rağmen hangi hızdan itibaren çarpışma kaçınılmazdır?',
      ru: 'На узкой дороге в 20 м впереди на проезжую часть выбегает ребёнок. С какой скорости столкновение почти неизбежно даже при экстренном торможении?',
      pl: 'Jedziesz wąską drogą. 20 m przed Tobą na jezdnię wybiega dziecko. Od jakiej prędkości zderzenie jest praktycznie nieuniknione mimo hamowania awaryjnego?'
    },
    options: [
      { id: 'a', text: { de: 'Ab 50 km/h (Anhalteweg ca. 27,5 m)', en: 'From 50 km/h (stopping distance ≈ 27.5 m)', ar: 'من 50 كم/س (مسافة التوقف نحو 27.5 م)', tr: '50 km/s\'den itibaren (durma yolu ≈ 27,5 m)', ru: 'С 50 км/ч (остановочный путь ≈ 27,5 м)', pl: 'Od 50 km/h (droga zatrzymania ≈ 27,5 m)' } },
      { id: 'b', text: { de: 'Schon ab 30 km/h', en: 'From 30 km/h already', ar: 'حتى من 30 كم/س', tr: '30 km/s\'den itibaren bile', ru: 'Уже с 30 км/ч', pl: 'Już od 30 km/h' } },
      { id: 'c', text: { de: 'Erst ab 80 km/h', en: 'Only from 80 km/h', ar: 'فقط من 80 كم/س', tr: 'Yalnızca 80 km/s\'den sonra', ru: 'Только с 80 км/ч', pl: 'Dopiero od 80 km/h' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Reaktionsweg 15 m + Gefahrbremsweg 12,5 m = 27,5 m > 20 m. Innerorts darum 30 km/h dort, wo Kinder zu erwarten sind.',
      en: 'Reaction 15 m + emergency braking 12.5 m = 27.5 m > 20 m. Hence the 30 km/h limit where children may be present.',
      ar: 'مسافة رد الفعل 15 م + فرملة طارئة 12.5 م = 27.5 م > 20 م. لذلك يُحدد 30 كم/س حيث يتوقع وجود أطفال.',
      tr: 'Tepki 15 m + acil fren 12,5 m = 27,5 m > 20 m. Bu yüzden çocukların bulunduğu yerlerde 30 km/s sınırı.',
      ru: 'Реакция 15 м + экстренный тормозной 12,5 м = 27,5 м > 20 м. Поэтому 30 км/ч там, где могут быть дети.',
      pl: 'Reakcja 15 m + hamowanie awaryjne 12,5 m = 27,5 m > 20 m. Stąd 30 km/h tam, gdzie mogą być dzieci.'
    }
  },
  {
    id: 'before-which-sign-10m',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Vor welchen Verkehrszeichen müssen Sie 10 m frei lassen, wenn das Zeichen sonst verdeckt würde?',
      en: 'Before which signs must you maintain a distance of at least 10 m if they would otherwise be concealed by your vehicle?',
      ar: 'أمام أي إشارات يجب ترك 10 م إن كانت ستحجب بسبب مركبتك؟',
      tr: 'Aracınız işareti gizleyecekse hangi tabelaların önünde 10 m boş bırakılmalı?',
      ru: 'Перед какими знаками нужно оставлять не менее 10 м, если они иначе будут закрыты автомобилем?',
      pl: 'Przed jakimi znakami trzeba zachować co najmniej 10 m, jeśli pojazd by je zasłaniał?'
    },
    options: [
      {
        id: 'a',
        text: {
          de: 'Stop-Schild, Vorfahrt-gewähren-Schild, Andreaskreuz',
          en: 'Stop sign, Give way sign, St. Andrew\'s Cross',
          ar: 'لافتة "قِف"، "أعطِ الأولوية"، صليب القديس أندريا',
          tr: 'Dur, Yol Ver ve Andreas Haçı',
          ru: 'Знак «STOP», «Уступи дорогу», «Андреевский крест»',
          pl: 'Znak STOP, „Ustąp pierwszeństwa", Krzyż św. Andrzeja'
        }
      },
      {
        id: 'b',
        text: { de: 'Nur Vorfahrtstraße', en: 'Only priority road sign', ar: 'فقط لافتة الأولوية', tr: 'Yalnızca ana yol tabelası', ru: 'Только знак главной дороги', pl: 'Tylko znak drogi z pierwszeństwem' }
      },
      {
        id: 'c',
        text: { de: 'Nur Geschwindigkeitsbegrenzungen', en: 'Only speed limit signs', ar: 'فقط لوحات حد السرعة', tr: 'Yalnızca hız sınırı tabelaları', ru: 'Только знаки ограничения скорости', pl: 'Tylko znaki ograniczenia prędkości' }
      }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Vor "Stop", "Vorfahrt gewähren" und Andreaskreuz 10 m freilassen, wenn sie sonst verdeckt würden.',
      en: 'Before Stop, Give way, and St. Andrew\'s Cross signs leave 10 m if they would otherwise be hidden.',
      ar: 'اترك 10 م قبل لوحات "قِف"، "أعطِ الأولوية" و"صليب أندريا" إذا كانت ستحجب.',
      tr: 'Dur, Yol Ver ve Andreas Haçı tabelaları gizlenecekse 10 m boş bırakın.',
      ru: 'Перед знаками «STOP», «Уступи дорогу» и «Андреевский крест» оставьте 10 м, если они иначе скрыты.',
      pl: 'Przed znakami STOP, „Ustąp pierwszeństwa" i Krzyżem św. Andrzeja zostaw 10 m, gdy byłyby zasłonięte.'
    }
  },
  {
    id: 'parking-lights-builtup',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Wo genügt beim Parken auf unbeleuchteten Straßen das Standlicht?',
      en: 'Where are parking lights sufficient when parking a car on unlit roads?',
      ar: 'أين يكفي تشغيل أضواء الوقوف فقط عند الركن في طرق غير مضاءة؟',
      tr: 'Aydınlatılmayan yollarda park ederken park lambası nerede yeterlidir?',
      ru: 'Где при стоянке на неосвещённых дорогах достаточно габаритных огней?',
      pl: 'Gdzie przy parkowaniu na nieoświetlonych drogach wystarczą światła postojowe?'
    },
    options: [
      { id: 'a', text: { de: 'Innerorts', en: 'In built-up areas', ar: 'داخل المدن', tr: 'Yerleşim içinde', ru: 'В населённых пунктах', pl: 'W obszarze zabudowanym' } },
      { id: 'b', text: { de: 'Außerorts', en: 'Outside built-up areas', ar: 'خارج المدن', tr: 'Yerleşim dışında', ru: 'Вне населённых пунктов', pl: 'Poza obszarem zabudowanym' } },
      { id: 'c', text: { de: 'Auf dem Standstreifen der Autobahn', en: 'On the hard shoulder of motorways', ar: 'على الكتف الصلب للأوتوبان', tr: 'Otoyolun emniyet şeridinde', ru: 'На обочине автобана', pl: 'Na poboczu autostrady' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Nur innerorts darf das Fahrzeug nachts mit Standlicht geparkt werden.',
      en: 'Only in built-up areas may a car be parked at night with parking lights only.',
      ar: 'فقط داخل المدن يجوز ركن السيارة ليلاً بأضواء الوقوف.',
      tr: 'Yalnızca yerleşim içinde gece park lambası ile park edilebilir.',
      ru: 'Только в населённом пункте можно парковать машину ночью с габаритами.',
      pl: 'Tylko w obszarze zabudowanym wolno parkować w nocy z włączonymi światłami postojowymi.'
    }
  },
  {
    id: 'class-b-trailer-1000kg',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie haben Klasse B. Ihr Pkw: Leermasse 1900 kg, zulässige Gesamtmasse 2400 kg, zulässige Anhängelast 1500 kg. Welcher Anhänger darf gezogen werden?',
      en: 'You hold class B. Your car: empty mass 1900 kg, permissible total mass 2400 kg, permissible towed load 1500 kg. Which trailer may you tow?',
      ar: 'تحمل فئة B. وزن السيارة الفارغ 1900 كغ، الوزن الإجمالي المسموح 2400 كغ، الحمل المسحوب المسموح 1500 كغ. أي مقطورة يمكن سحبها؟',
      tr: 'B sınıfı sürücüsünüz. Aracınız: boş kütle 1900 kg, izinli toplam ağırlık 2400 kg, izinli çekilen yük 1500 kg. Hangi römork çekilebilir?',
      ru: 'У вас категория B. Автомобиль: снаряжённая масса 1900 кг, допустимая 2400 кг, разрешённая буксируемая 1500 кг. Какой прицеп можно тащить?',
      pl: 'Masz kategorię B. Twój samochód: masa własna 1900 kg, dmc 2400 kg, dop. masa holowana 1500 kg. Którą przyczepę można holować?'
    },
    options: [
      { id: 'a', text: { de: '1500 kg', en: '1500 kg', ar: '1500 كغ', tr: '1500 kg', ru: '1500 кг', pl: '1500 kg' } },
      { id: 'b', text: { de: '1200 kg', en: '1200 kg', ar: '1200 كغ', tr: '1200 kg', ru: '1200 кг', pl: '1200 kg' } },
      { id: 'c', text: { de: '1000 kg', en: '1000 kg', ar: '1000 كغ', tr: '1000 kg', ru: '1000 кг', pl: '1000 kg' } }
    ],
    correctIds: ['c'],
    explanation: {
      de: 'Klasse B: Zugfahrzeug + Anhänger zusammen max. 3500 kg. 2400 + 1000 = 3400 kg → erlaubt; 2400 + 1200 = 3600 kg → nicht erlaubt.',
      en: 'Class B: car + trailer max 3500 kg total. 2400 + 1000 = 3400 kg → OK; 2400 + 1200 = 3600 kg → not allowed.',
      ar: 'الفئة B: مجموع السيارة + المقطورة لا يتجاوز 3500 كغ. 2400 + 1000 = 3400 → مسموح؛ 2400 + 1200 = 3600 → غير مسموح.',
      tr: 'B sınıfı: çekici + römork toplam 3500 kg. 2400 + 1000 = 3400 → uygun; 2400 + 1200 = 3600 → uygun değil.',
      ru: 'Категория B: тягач + прицеп ≤ 3500 кг. 2400 + 1000 = 3400 — можно; 2400 + 1200 = 3600 — нельзя.',
      pl: 'Kategoria B: pojazd + przyczepa łącznie do 3500 kg. 2400 + 1000 = 3400 — OK; 2400 + 1200 = 3600 — nie wolno.'
    }
  }
];
