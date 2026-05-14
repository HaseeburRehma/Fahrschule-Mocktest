import type { Question } from './types';

/**
 * Fifth batch — questions designed to fit the official mock-test pattern:
 *   - scene-image questions (use `imagePath` pointing to
 *     /images/quiz/Screenshots/q-XX.jpg). The file naming is a
 *     placeholder convention; replace each q-XX.jpg with the matching
 *     scene that you (or the client, under licence) supply.
 *   - video questions (use `videoPath` pointing to
 *     /images/quiz/trafic-video/v-XX.mp4). The player enforces a replay
 *     limit (default 5×) so it behaves like the official video question.
 *
 *  All question text and option text below is original wording covering
 *  publicly known safety rules — not copied from any catalogue.
 */
export const extraQuestions5: Question[] = [
  // ─── NIGHT / DAZZLING (topic 2.1.04) ───────────────────────────────────
  {
    id: 'scene-dazzle-1',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    topicCode: '2.1.04',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-01.png',
    question: {
      de: 'Sie werden bei Nacht durch entgegenkommendes Fernlicht geblendet. Wie reagieren Sie richtig?',
      en: 'You are dazzled at night by oncoming headlights. What is the correct response?',
      ar: 'تعرضت للانبهار ليلًا من ضوء قادم مقابل. ما التصرف الصحيح؟',
      tr: 'Geceleri karşıdan gelen farlardan kamaştınız. Doğru tepki nedir?',
      ru: 'Ночью вас ослепили встречные фары. Что делать?',
      pl: 'Zostałeś oślepiony w nocy przez nadjeżdżające światła. Co zrobić?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit reduzieren und bei Bedarf anhalten', en: 'Reduce speed and, if necessary, stop', ar: 'خفّف السرعة وتوقف عند الحاجة', tr: 'Hızı düşürün ve gerekirse durun', ru: 'Снизить скорость и при необходимости остановиться', pl: 'Zmniejszyć prędkość i w razie potrzeby zatrzymać się' } },
      { id: 'b', text: { de: 'Beschleunigen, um den Lichtkegel schnell zu verlassen', en: 'Accelerate to leave the beam quickly', ar: 'الإسراع لتخطي الضوء بسرعة', tr: 'Işıktan hızla çıkmak için hızlanmak', ru: 'Ускориться, чтобы быстрее проехать луч', pl: 'Przyspieszyć, by szybciej wyjść ze strugi światła' } },
      { id: 'c', text: { de: 'Den Blick auf den rechten Fahrbahnrand richten', en: 'Direct your gaze to the right-hand edge of the roadway', ar: 'وجّه نظرك إلى الحافة اليمنى للطريق', tr: 'Bakışınızı yolun sağ kenarına yöneltin', ru: 'Перевести взгляд на правую кромку дороги', pl: 'Skierować wzrok na prawą krawędź jezdni' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Geblendet: Tempo raus, Blick zum rechten Rand, im Zweifel anhalten. Beschleunigen verschärft die Situation.',
      en: 'When dazzled: slow down, look to the right edge of the road, stop if in doubt. Accelerating makes it worse.',
      ar: 'عند الانبهار: خفف السرعة، انظر إلى يمين الطريق، وتوقف عند الشك. التسارع يزيد الخطر.',
      tr: 'Kamaşınca: hızı düşür, sağ kenara bak, gerekirse dur. Hızlanmak durumu kötüleştirir.',
      ru: 'При ослеплении: снизьте скорость, смотрите на правую кромку, при сомнении остановитесь. Ускорение опасно.',
      pl: 'Przy oślepieniu: zwolnić, patrzeć na prawą krawędź, w razie wątpliwości zatrzymać się. Przyspieszanie pogarsza sytuację.'
    }
  },
  {
    id: 'night-wet-visibility',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    topicCode: '2.1.04',
    topicType: 'zusatzstoff',
    question: {
      de: 'Bei Regen in der Nacht ist die Sicht besonders schwierig. Worauf achten Sie?',
      en: 'Visibility is especially difficult at night in the rain. What do you watch for?',
      ar: 'الرؤية صعبة جدًا ليلًا في المطر. على ماذا تنتبه؟',
      tr: 'Yağmurlu bir gecede görüş çok zor. Nelere dikkat edersiniz?',
      ru: 'Ночью в дождь видимость особенно плохая. На что обращать внимание?',
      pl: 'Nocą w deszczu widoczność jest szczególnie trudna. Na co zwracać uwagę?'
    },
    options: [
      { id: 'a', text: { de: 'Reflexionen auf nasser Fahrbahn täuschen die Tiefenwahrnehmung', en: 'Reflections on wet asphalt distort depth perception', ar: 'الانعكاسات على الإسفلت المبلل تشوّش إدراك العمق', tr: 'Islak asfalttaki yansımalar derinlik algısını bozar', ru: 'Отражения на мокром асфальте искажают восприятие глубины', pl: 'Odbicia na mokrym asfalcie zaburzają percepcję głębi' } },
      { id: 'b', text: { de: 'Die Reichweite des Abblendlichts erscheint größer als sie ist', en: 'Dipped-beam range seems longer than it actually is', ar: 'يبدو مدى الضوء المنخفض أطول مما هو فعلًا', tr: 'Kısa farın menzili gerçekte olduğundan uzun görünür', ru: 'Дальность ближнего света кажется большей, чем есть', pl: 'Zasięg świateł mijania wydaje się większy niż jest' } },
      { id: 'c', text: { de: 'Die Geschwindigkeit darf erhöht werden, weil Reflexionen den Verkehr beleuchten', en: 'You may drive faster because reflections light up the traffic', ar: 'يمكن زيادة السرعة لأن الانعكاسات تنير المرور', tr: 'Yansımalar trafiği aydınlatır, hızlanabilirsiniz', ru: 'Можно ехать быстрее, так как отражения освещают дорогу', pl: 'Można jechać szybciej, bo odbicia oświetlają ruch' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Nasse Fahrbahn täuscht Abstände und Sichtweite. Sicherheit nur durch deutlich reduziertes Tempo.',
      en: 'Wet asphalt deceives distance and visibility cues — only lower speed gives back safety.',
      ar: 'الإسفلت المبلل يخدع الإدراك. الأمان يأتي بخفض السرعة.',
      tr: 'Islak asfalt mesafe algısını yanıltır — güvenlik için yavaşlamak şarttır.',
      ru: 'Мокрая дорога обманывает оценку дистанций — только снижение скорости вернёт безопасность.',
      pl: 'Mokra jezdnia myli odległość i widoczność — bezpieczeństwo daje tylko niższa prędkość.'
    }
  },

  // ─── FATIGUE (topic 2.1.10) ───────────────────────────────────────────
  {
    id: 'fatigue-effects',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '2.1.10',
    topicType: 'zusatzstoff',
    question: {
      de: 'Welche Auswirkungen hat Müdigkeit am Steuer?',
      en: 'What effect does fatigue have behind the wheel?',
      ar: 'ما تأثير التعب أثناء القيادة؟',
      tr: 'Yorgunluğun sürüş üzerindeki etkisi nedir?',
      ru: 'Как усталость влияет на водителя?',
      pl: 'Jaki wpływ ma zmęczenie podczas prowadzenia?'
    },
    options: [
      { id: 'a', text: { de: 'Längere Reaktionszeit', en: 'Slower reaction time', ar: 'تطول مدة رد الفعل', tr: 'Tepki süresi uzar', ru: 'Удлиняется время реакции', pl: 'Wydłuża się czas reakcji' } },
      { id: 'b', text: { de: 'Eingeschränkte Wahrnehmung des Verkehrs', en: 'Reduced awareness of surrounding traffic', ar: 'إدراك محدود لحركة المرور', tr: 'Çevredeki trafiği daha az algılarsınız', ru: 'Снижается восприятие дорожной обстановки', pl: 'Ograniczona świadomość ruchu wokół' } },
      { id: 'c', text: { de: 'Mikroschlaf — Sekunden ohne Kontrolle', en: 'Micro-sleep — seconds of complete blackout', ar: 'النوم الخاطف — ثوانٍ من فقد التحكم', tr: 'Mikro uyku — kontrolün koptuğu saniyeler', ru: 'Микросон — секунды без контроля', pl: 'Mikrosen — sekundy bez kontroli' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Müdigkeit verlängert die Reaktion, schmälert die Wahrnehmung und kann zu Sekundenschlaf führen. Pause machen!',
      en: 'Fatigue slows reactions, narrows perception, and can trigger micro-sleep. Pull over and rest.',
      ar: 'التعب يبطئ رد الفعل، يقلل الإدراك، وقد يسبب نومًا خاطفًا. خذ قسطًا من الراحة.',
      tr: 'Yorgunluk tepkiyi yavaşlatır, algıyı daraltır ve mikro uykuya yol açabilir. Mola verin.',
      ru: 'Усталость замедляет реакцию, сужает восприятие и вызывает микросон. Сделайте остановку.',
      pl: 'Zmęczenie spowalnia reakcję, zawęża percepcję i grozi mikrosenem. Zrób przerwę.'
    }
  },
  {
    id: 'fatigue-break-rule',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    topicCode: '2.1.10',
    topicType: 'zusatzstoff',
    question: {
      de: 'Nach welcher Fahrtdauer empfiehlt es sich spätestens, eine Pause einzulegen?',
      en: 'After what driving period is it recommended at the latest to take a break?',
      ar: 'بعد كم من القيادة يُنصح بأخذ استراحة على أبعد تقدير؟',
      tr: 'En geç ne kadar sürüş sonrası mola önerilir?',
      ru: 'Через какое максимум время за рулём рекомендуется делать перерыв?',
      pl: 'Po jakim najpóźniej czasie jazdy zaleca się przerwę?'
    },
    options: [
      { id: 'a', text: { de: 'Spätestens nach 2 Stunden', en: 'After 2 hours at the latest', ar: 'بعد ساعتين كحد أقصى', tr: 'En geç 2 saat sonra', ru: 'Не позднее чем через 2 часа', pl: 'Najpóźniej po 2 godzinach' } },
      { id: 'b', text: { de: 'Erst nach 6 Stunden', en: 'Only after 6 hours', ar: 'بعد 6 ساعات فقط', tr: 'Yalnızca 6 saat sonra', ru: 'Только через 6 часов', pl: 'Dopiero po 6 godzinach' } },
      { id: 'c', text: { de: 'Nur, wenn man Müdigkeit deutlich spürt', en: 'Only when fatigue is clearly noticed', ar: 'فقط عند الشعور الواضح بالتعب', tr: 'Yalnızca açıkça yorulduğunuzda', ru: 'Только при явной усталости', pl: 'Tylko gdy wyraźnie czuje się zmęczenie' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Faustregel: alle 2 Stunden 15 Minuten Pause. Müdigkeit kommt schleichend; warten bringt nichts.',
      en: 'Rule of thumb: a 15-minute break every 2 hours. Fatigue creeps up — don\'t wait.',
      ar: 'القاعدة: استراحة 15 دقيقة كل ساعتين. التعب يأتي تدريجيًا.',
      tr: 'Kural: her 2 saatte 15 dakika mola. Yorgunluk yavaş gelir.',
      ru: 'Правило: 15-минутный перерыв каждые 2 часа. Усталость нарастает незаметно.',
      pl: 'Zasada: 15 min przerwy co 2 godziny. Zmęczenie podkrada się powoli.'
    }
  },

  // ─── ALCOHOL / DRUGS / MEDICATION (topic 2.1.09) ───────────────────────
  {
    id: 'alcohol-recovery',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 5,
    topicCode: '2.1.09',
    topicType: 'zusatzstoff',
    question: {
      de: 'Wie kann die Fahrtüchtigkeit nach übermäßigem Alkoholgenuss schnell wiederhergestellt werden?',
      en: 'How can fitness to drive be quickly restored after excessive alcohol consumption?',
      ar: 'كيف يمكن استعادة اللياقة للقيادة بسرعة بعد الإفراط في الكحول؟',
      tr: 'Aşırı alkol sonrası sürüş yeterliliği nasıl hızlıca geri kazanılır?',
      ru: 'Как быстро восстановить пригодность к вождению после большого количества алкоголя?',
      pl: 'Jak szybko odzyskać zdolność do prowadzenia po nadmiernym spożyciu alkoholu?'
    },
    options: [
      { id: 'a', text: { de: 'Gar nicht — nur Zeit baut Alkohol im Körper ab', en: 'Not at all — only time breaks alcohol down in the body', ar: 'لا يمكن — الوقت فقط هو من يفكك الكحول', tr: 'Asla — yalnızca zaman alkolü vücuttan atar', ru: 'Никак — только время выводит алкоголь', pl: 'Wcale — tylko czas rozkłada alkohol w organizmie' } },
      { id: 'b', text: { de: 'Mit zwei Tassen Kaffee', en: 'With two cups of coffee', ar: 'بكوبي قهوة', tr: 'İki fincan kahveyle', ru: 'Двумя чашками кофе', pl: 'Dwiema filiżankami kawy' } },
      { id: 'c', text: { de: 'Mit 15 Minuten Sport', en: 'With 15 minutes of exercise', ar: 'بـ15 دقيقة من الرياضة', tr: '15 dakika spor yaparak', ru: 'Пятнадцатью минутами спорта', pl: 'Piętnastoma minutami ruchu' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Der Körper baut Alkohol nur mit der Zeit ab (~0,1–0,15 ‰/Stunde). Kaffee, Sport oder kalte Dusche helfen nicht.',
      en: 'Only time removes alcohol (~0.1–0.15 ‰ per hour). Coffee, exercise or a cold shower don\'t.',
      ar: 'الوقت وحده هو ما يخفض الكحول (0.1-0.15 لكل ساعة). القهوة والرياضة لا تساعدان.',
      tr: 'Alkolü yalnızca zaman düşürür (saatte 0,1–0,15 ‰). Kahve veya spor işe yaramaz.',
      ru: 'Алкоголь выводится только временем (≈ 0,1–0,15 ‰/час). Кофе и спорт не помогают.',
      pl: 'Alkohol obniża się tylko z czasem (0,1–0,15 ‰/h). Kawa i sport nie pomagają.'
    }
  },
  {
    id: 'fitness-impairers',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '2.1.09',
    topicType: 'zusatzstoff',
    question: {
      de: 'Was kann die Fahrtüchtigkeit beeinträchtigen?',
      en: 'What can impair fitness to drive?',
      ar: 'ما الذي يمكن أن يضعف القدرة على القيادة؟',
      tr: 'Sürüş yeterliliğini ne bozabilir?',
      ru: 'Что может ухудшить пригодность к вождению?',
      pl: 'Co może obniżyć zdolność do prowadzenia?'
    },
    options: [
      { id: 'a', text: { de: 'Bestimmte Medikamente', en: 'Certain medicines', ar: 'بعض الأدوية', tr: 'Bazı ilaçlar', ru: 'Некоторые лекарства', pl: 'Niektóre leki' } },
      { id: 'b', text: { de: 'Alkohol und andere Rauschmittel', en: 'Alcohol and other intoxicants', ar: 'الكحول والمخدرات الأخرى', tr: 'Alkol ve diğer uyuşturucular', ru: 'Алкоголь и другие психоактивные вещества', pl: 'Alkohol i inne środki odurzające' } },
      { id: 'c', text: { de: 'Starke Müdigkeit', en: 'Strong fatigue', ar: 'التعب الشديد', tr: 'Şiddetli yorgunluk', ru: 'Сильная усталость', pl: 'Silne zmęczenie' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Medikamente, Alkohol/Drogen und Müdigkeit setzen die Fahrtüchtigkeit deutlich herab — alle drei betreffen Aufmerksamkeit und Reaktion.',
      en: 'Medication, alcohol/drugs and fatigue all reduce fitness to drive — each impairs attention and reaction.',
      ar: 'الأدوية، الكحول/المخدرات والتعب تقلل من القدرة على القيادة — تؤثر كلها على الانتباه والاستجابة.',
      tr: 'İlaç, alkol/uyuşturucu ve yorgunluk sürüş yeterliliğini düşürür — dikkat ve tepkiyi bozar.',
      ru: 'Лекарства, алкоголь/наркотики и усталость ослабляют пригодность к вождению — все влияют на внимание и реакцию.',
      pl: 'Leki, alkohol/narkotyki i zmęczenie obniżają zdolność do jazdy — wszystkie pogarszają uwagę i reakcję.'
    }
  },
  {
    id: 'medication-driving',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '2.1.09',
    topicType: 'zusatzstoff',
    question: {
      de: 'Sie nehmen ein neues Medikament. Wer sollte einschätzen, ob Sie damit Auto fahren dürfen?',
      en: 'You have started a new medication. Who should assess whether you may drive?',
      ar: 'بدأت بتناول دواء جديد. من يقرر ما إذا كان بإمكانك القيادة؟',
      tr: 'Yeni bir ilaç almaya başladınız. Sürüş için kim onay vermeli?',
      ru: 'Вы начали принимать новый препарат. Кто должен оценить, можно ли вам водить?',
      pl: 'Zacząłeś nowy lek. Kto powinien ocenić, czy możesz prowadzić?'
    },
    options: [
      { id: 'a', text: { de: 'Ein Arzt oder Apotheker', en: 'A doctor or pharmacist', ar: 'الطبيب أو الصيدلي', tr: 'Doktor veya eczacı', ru: 'Врач или фармацевт', pl: 'Lekarz lub farmaceuta' } },
      { id: 'b', text: { de: 'Ein Freund mit Führerschein', en: 'A friend who holds a licence', ar: 'صديق لديه رخصة', tr: 'Ehliyetli bir arkadaş', ru: 'Знакомый с правами', pl: 'Znajomy z prawem jazdy' } },
      { id: 'c', text: { de: 'Sie selbst aus dem Bauch heraus', en: 'You, on gut feeling', ar: 'أنت من شعورك الذاتي', tr: 'Kendi içgüdünüze göre siz', ru: 'Вы сами, по ощущениям', pl: 'Ty sam, na wyczucie' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Beipackzettel beachten und im Zweifel Arzt/Apotheker fragen — manche Mittel machen müde, schwindlig oder verlängern die Reaktion.',
      en: 'Read the patient leaflet; when in doubt ask a doctor or pharmacist — some medicines cause drowsiness, dizziness or slower reaction.',
      ar: 'اقرأ النشرة وفي حال الشك اسأل الطبيب/الصيدلي — بعض الأدوية تسبب نعاسًا أو دوخة أو بطء استجابة.',
      tr: 'Prospektüsü okuyun; şüpheliyse doktor/eczacıya sorun — bazı ilaçlar uyku, baş dönmesi yapar.',
      ru: 'Читайте инструкцию; при сомнении — к врачу/фармацевту. Некоторые лекарства вызывают сонливость и замедляют реакцию.',
      pl: 'Czytaj ulotkę; w razie wątpliwości pytaj lekarza/farmaceutę — niektóre leki powodują senność lub spowalniają reakcje.'
    }
  },

  // ─── HAZARD PERCEPTION — SCENE-IMAGE QUESTIONS (topic 2.1.07) ──────────
  {
    id: 'scene-rural-curve',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-02.png',
    question: {
      de: 'Sie nähern sich einer unübersichtlichen Landstraße mit Hauseinfahrten. Worauf bereiten Sie sich vor?',
      en: 'You are approaching a rural road with limited view and driveways. What should you anticipate?',
      ar: 'تقترب من طريق ريفي محدود الرؤية به مداخل بيوت. ماذا تتوقع؟',
      tr: 'Görüş kısıtlı, kapı çıkışları olan bir kırsal yola yaklaşıyorsunuz. Neyi beklersiniz?',
      ru: 'Вы подъезжаете к сельской дороге с ограниченным обзором и выездами. Что предусмотреть?',
      pl: 'Zbliżasz się do wiejskiej drogi z ograniczoną widocznością i wjazdami. Co przewidzieć?'
    },
    options: [
      { id: 'a', text: { de: 'Plötzlich auf die Fahrbahn laufende Kinder', en: 'Children running onto the road unexpectedly', ar: 'أطفال يقفزون فجأة على الطريق', tr: 'Yola fırlayan çocuklar', ru: 'Внезапно выбегающих на дорогу детей', pl: 'Dzieci nagle wybiegające na drogę' } },
      { id: 'b', text: { de: 'Fahrzeuge, die aus Einfahrten ausfahren', en: 'Vehicles emerging from driveways', ar: 'مركبات تخرج من المداخل', tr: 'Çıkışlardan ayrılan araçlar', ru: 'Машины, выезжающие из дворов', pl: 'Pojazdy wyjeżdżające z bram' } },
      { id: 'c', text: { de: 'Dass Sie wegen freier Sicht beschleunigen dürfen', en: 'That you may accelerate because visibility is clear', ar: 'يحق لك الإسراع لأن الرؤية صافية', tr: 'Görüş açık olduğu için hızlanabilirsiniz', ru: 'Что можно ускоряться, раз обзор хороший', pl: 'Że można przyspieszyć, bo widoczność jest dobra' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Verdeckte Einfahrten und Wohnumfeld bedeuten erhöhte Aufmerksamkeit; mit Personen und Fahrzeugen ist jederzeit zu rechnen.',
      en: 'Hidden driveways and a residential setting demand extra care; expect people and vehicles at any moment.',
      ar: 'المداخل المخفية والبيئة السكنية تتطلب يقظة. توقع أشخاصًا ومركبات في أي وقت.',
      tr: 'Gizli çıkışlar ve yerleşim ortamı dikkat gerektirir; her an insan ve araç çıkabilir.',
      ru: 'Скрытые выезды и жилой массив требуют внимания — в любой момент могут появиться люди или машины.',
      pl: 'Niewidoczne wjazdy i osiedle wymagają czujności — w każdej chwili mogą pojawić się ludzie lub pojazdy.'
    }
  },
  {
    id: 'scene-school-bus-sign',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    topicCode: '2.1.02',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-03.png',
    question: {
      de: 'Sie sehen das Schild „Schulbushaltestelle". Worauf stellen Sie sich ein?',
      en: 'You see the "School bus stop" sign. What do you prepare for?',
      ar: 'ترى لوحة "موقف حافلة مدرسية". ماذا تتوقع؟',
      tr: '"Okul otobüsü durağı" tabelasını görüyorsunuz. Neye hazırlanırsınız?',
      ru: 'Вы видите знак «Остановка школьного автобуса». К чему готовиться?',
      pl: 'Widzisz znak „Przystanek autobusu szkolnego". Na co się przygotowujesz?'
    },
    options: [
      { id: 'a', text: { de: 'Kinder, die zwischen parkenden Fahrzeugen die Fahrbahn überqueren', en: 'Children crossing the road between parked vehicles', ar: 'أطفال يعبرون بين السيارات المتوقفة', tr: 'Park etmiş araçların arasından geçen çocuklar', ru: 'Дети, переходящие дорогу между припаркованными авто', pl: 'Dzieci przechodzące między zaparkowanymi autami' } },
      { id: 'b', text: { de: 'Wartende Schulbusse, die plötzlich anfahren', en: 'Waiting school buses pulling away suddenly', ar: 'حافلات مدرسية تنطلق فجأة', tr: 'Aniden hareket eden okul otobüsleri', ru: 'Школьные автобусы, внезапно начинающие движение', pl: 'Autobusy szkolne nagle ruszające' } },
      { id: 'c', text: { de: 'Dass dort nur außerhalb der Schulzeit etwas passiert', en: 'That something only happens there outside school hours', ar: 'أن النشاط فقط خارج أوقات الدراسة', tr: 'Yalnızca okul saatleri dışında bir şey olabileceği', ru: 'Что что-то происходит только вне школьных часов', pl: 'Że coś zdarzy się tylko poza godzinami szkolnymi' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Im Bereich von Schulbushaltestellen ist mit überquerenden Kindern und anfahrenden Bussen zu rechnen — Schrittgeschwindigkeit, Bremsbereitschaft.',
      en: 'Around school bus stops expect crossing children and buses pulling away — walking pace, ready to brake.',
      ar: 'حول مواقف الحافلات المدرسية: توقع أطفالًا يعبرون وحافلات تنطلق — سرعة المشي وجهوزية الفرملة.',
      tr: 'Okul otobüsü duraklarında karşıdan geçen çocuklar ve kalkış yapan otobüsleri bekleyin — yürüme hızı, frene hazır.',
      ru: 'Возле школьных остановок ожидайте детей-пешеходов и трогающихся автобусов — скорость пешехода, готовность тормозить.',
      pl: 'W rejonie przystanków szkolnych spodziewaj się przechodzących dzieci i ruszających autobusów — prędkość pieszego, gotowość do hamowania.'
    }
  },

  // ─── TRAM AT STOP (topic 2.1.02 / passengers) ─────────────────────────
  {
    id: 'scene-tram-stop',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    topicCode: '2.1.02',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-04.png',
    question: {
      de: 'Eine Straßenbahn hält an einer Haltestelle. Wie verhalten Sie sich gegenüber den ein- und aussteigenden Fahrgästen?',
      en: 'A tram has come to a halt at a stop. How do you behave towards boarding and alighting passengers?',
      ar: 'ترام يتوقف في موقف. كيف تتصرف تجاه الركاب الصاعدين والنازلين؟',
      tr: 'Bir tramvay durağa yanaştı. İnen ve binen yolculara nasıl davranırsınız?',
      ru: 'Трамвай остановился на остановке. Как поступать в отношении входящих и выходящих пассажиров?',
      pl: 'Tramwaj zatrzymał się na przystanku. Jak zachowujesz się wobec wsiadających i wysiadających pasażerów?'
    },
    options: [
      { id: 'a', text: { de: 'Sie dürfen nicht behindert werden', en: 'They may not be obstructed', ar: 'لا يجوز إعاقتهم', tr: 'Engellenmemeliler', ru: 'Им нельзя мешать', pl: 'Nie wolno im przeszkadzać' } },
      { id: 'b', text: { de: 'Sie dürfen nicht gefährdet werden', en: 'They may not be endangered', ar: 'لا يجوز تعريضهم للخطر', tr: 'Tehlikeye atılmamalılar', ru: 'Им нельзя создавать опасность', pl: 'Nie wolno ich narażać' } },
      { id: 'c', text: { de: 'Mit der Hupe darf darauf hingewiesen werden', en: 'You may sound the horn to warn them', ar: 'يجوز التنبيه بالبوق', tr: 'Korna ile uyarılabilirler', ru: 'Им можно сигналить', pl: 'Można je ostrzec klaksonem' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Ein- und Aussteigende dürfen weder behindert noch gefährdet werden. Hupen ist hier weder geboten noch zulässig — Schrittgeschwindigkeit oder anhalten.',
      en: 'Boarding/alighting passengers must not be obstructed or endangered. Honking is neither needed nor permitted — walking pace or stop.',
      ar: 'الركاب لا يجب إعاقتهم أو تعريضهم للخطر. التزمير غير مطلوب ولا مسموح — سرعة المشي أو التوقف.',
      tr: 'İnen/binen yolcular engellenemez ve tehlikeye atılamaz. Korna gerekmez — yürüme hızı ya da dur.',
      ru: 'Пассажиров на посадке/высадке нельзя ни задерживать, ни подвергать опасности. Сигналить нельзя — пешеходная скорость или остановка.',
      pl: 'Pasażerów nie wolno przeszkadzać ani narażać. Trąbienie zbędne i niedozwolone — prędkość pieszego lub zatrzymanie.'
    }
  },

  // ─── TRUCK TURNING RIGHT (topic 2.1.07) ───────────────────────────────
  {
    id: 'scene-truck-right',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-05.png',
    question: {
      de: 'Vor Ihnen will ein Lkw nach rechts in eine enge Straße abbiegen. Womit müssen Sie rechnen?',
      en: 'A truck in front of you wants to turn right into a narrow street. What must you anticipate?',
      ar: 'شاحنة أمامك تنوي الانعطاف يمينًا إلى شارع ضيق. بماذا تتوقع؟',
      tr: 'Önünüzdeki kamyon dar bir sokağa sağa dönmek istiyor. Neyi beklersiniz?',
      ru: 'Грузовик впереди вас собирается поворачивать направо в узкую улицу. Что предусмотреть?',
      pl: 'Ciężarówka przed Tobą chce skręcić w prawo w wąską ulicę. Czego się spodziewać?'
    },
    options: [
      { id: 'a', text: { de: 'Der Lkw schert zuerst nach links aus, bevor er rechts abbiegt', en: 'The truck first swings out to the left before turning right', ar: 'الشاحنة تنحرف يسارًا أولاً قبل الانعطاف يمينًا', tr: 'Kamyon sağa dönmeden önce sola taşar', ru: 'Грузовик сначала уйдёт влево, а затем повернёт направо', pl: 'Ciężarówka najpierw odchyla się w lewo, potem skręca w prawo' } },
      { id: 'b', text: { de: 'Der Lkw bremst stark ab', en: 'The truck brakes strongly', ar: 'الشاحنة تفرمل بقوة', tr: 'Kamyon sertçe yavaşlar', ru: 'Грузовик резко тормозит', pl: 'Ciężarówka mocno hamuje' } },
      { id: 'c', text: { de: 'Sie können den Lkw rechts überholen', en: 'You can overtake the truck on the right', ar: 'يمكنك تجاوزها من اليمين', tr: 'Kamyonu sağdan geçebilirsiniz', ru: 'Можно объехать справа', pl: 'Można wyprzedzić z prawej strony' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Rechts neben einem abbiegenden Lkw ist der gefährlichste Ort — toter Winkel. Niemals rechts dranbleiben oder überholen.',
      en: 'The right side of a turning truck is the most dangerous place — blind spot. Never sit alongside or pass on the right.',
      ar: 'يمين الشاحنة المنعطفة أخطر مكان — النقطة العمياء. لا تظل بجانبها ولا تتجاوز يمينها.',
      tr: 'Dönen kamyonun sağı en tehlikeli yerdir — kör nokta. Yanında durmayın, sağdan geçmeyin.',
      ru: 'Справа от поворачивающего грузовика — слепая зона. Не находитесь рядом, не обгоняйте справа.',
      pl: 'Po prawej skręcającej ciężarówki to martwe pole — najbardziej niebezpieczne miejsce. Nie stój i nie wyprzedzaj z prawej.'
    }
  },

  // ─── TIGHT BENDS (topic 2.7.01 / 2.1.07) ──────────────────────────────
  {
    id: 'tight-bend-technique',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 4,
    topicCode: '2.7.01',
    topicType: 'zusatzstoff',
    question: {
      de: 'Wie nehmen Sie eine enge Kurve sicher?',
      en: 'How do you take a tight bend safely?',
      ar: 'كيف تأخذ منعطفًا ضيقًا بأمان؟',
      tr: 'Dar bir virajı güvenle nasıl alırsınız?',
      ru: 'Как безопасно проходить крутой поворот?',
      pl: 'Jak bezpiecznie pokonać ciasny zakręt?'
    },
    options: [
      { id: 'a', text: { de: 'Schon vor der Kurve auf eine passende Geschwindigkeit verringern', en: 'Reduce speed to a suitable level before entering the bend', ar: 'خفّض السرعة لمستوى مناسب قبل دخول المنعطف', tr: 'Viraja girmeden önce uygun hıza inin', ru: 'Заранее перед поворотом снизить скорость', pl: 'Zwolnić przed wjazdem w zakręt' } },
      { id: 'b', text: { de: 'In der Kurvenmitte stark bremsen', en: 'Brake hard in the middle of the bend', ar: 'فرملة قوية في وسط المنعطف', tr: 'Virajın ortasında sert frenle', ru: 'Резко тормозить в середине поворота', pl: 'Mocno hamować w połowie zakrętu' } },
      { id: 'c', text: { de: 'Erst beim Verlassen der Kurve wieder beschleunigen', en: 'Only accelerate again when exiting the bend', ar: 'العودة للتسارع فقط عند الخروج من المنعطف', tr: 'Yalnızca virajdan çıkarken yeniden hızlanın', ru: 'Ускоряться только на выходе из поворота', pl: 'Przyspieszać dopiero przy wyjściu z zakrętu' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Vor der Kurve bremsen, gleichmäßig durchfahren, beim Ausgang sanft Gas geben. In der Kurve bremsen erhöht die Schleudergefahr.',
      en: 'Brake before the bend, drive through evenly, accelerate gently on exit. Braking inside a bend risks a skid.',
      ar: 'فرمل قبل المنعطف، مر بثبات، وزد السرعة برفق عند الخروج. الفرملة داخل المنعطف تسبب الانزلاق.',
      tr: 'Virajdan önce frenle, sabit hızla geç, çıkışta yumuşakça hızlan. Virajda fren savrulmaya yol açar.',
      ru: 'Тормозите до поворота, проходите равномерно, ускоряйтесь плавно на выходе. Торможение в повороте — занос.',
      pl: 'Hamuj przed zakrętem, jedź równomiernie, dodaj gazu na wyjściu. Hamowanie w zakręcie grozi poślizgiem.'
    }
  },

  // ─── BUS STOP / PASSENGERS (topic 2.1.02) ─────────────────────────────
  {
    id: 'scene-school-bus-area',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 5,
    topicCode: '2.1.02',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-06.png',
    question: {
      de: 'Vor Ihnen taucht das Schild „Schulbushaltestelle" auf. Worauf müssen Sie sich besonders einstellen?',
      en: 'A "School bus area" sign appears ahead of you. What must you particularly prepare for?',
      ar: 'تظهر أمامك لوحة "منطقة حافلة مدرسية". لما يجب التهيؤ خاصة؟',
      tr: 'Önünüzde "Okul otobüsü bölgesi" işareti çıkıyor. Özellikle neye hazırlanmalısınız?',
      ru: 'Впереди появляется знак «Зона школьного автобуса». К чему особенно готовиться?',
      pl: 'Przed Tobą pojawia się znak „Strefa autobusu szkolnego". Na co musisz się przygotować?'
    },
    options: [
      { id: 'a', text: { de: 'Auf die Fahrbahn laufende Kinder', en: 'Children walking onto the road', ar: 'أطفال يخرجون إلى الطريق', tr: 'Yola fırlayan çocuklar', ru: 'Детей, выбегающих на дорогу', pl: 'Dzieci wybiegające na jezdnię' } },
      { id: 'b', text: { de: 'Gegenverkehr, der nach links abbiegt', en: 'Oncoming traffic turning left', ar: 'مرور مقابل ينعطف يسارًا', tr: 'Karşıdan gelen ve sola dönen trafik', ru: 'Встречные, поворачивающие налево', pl: 'Ruch z naprzeciwka skręcający w lewo' } },
      { id: 'c', text: { de: 'Fahrzeuge, die in die Straße einbiegen', en: 'Vehicles turning into the road', ar: 'مركبات تنعطف إلى الطريق', tr: 'Yola dönen araçlar', ru: 'Машины, поворачивающие на дорогу', pl: 'Pojazdy skręcające w drogę' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Im Bereich Schulbus immer mit überraschendem Verhalten von Kindern und mit zusätzlichen Fahrzeugbewegungen rechnen. Tempo sofort reduzieren.',
      en: 'In a school bus area expect sudden child behaviour plus extra vehicle movements. Cut speed immediately.',
      ar: 'في منطقة حافلة المدرسة توقع تصرفات مفاجئة من الأطفال وحركات مركبات إضافية. خفض السرعة فورًا.',
      tr: 'Okul otobüsü bölgesinde çocukların ani davranışları ve ek araç hareketleri olabilir. Hızı hemen düşürün.',
      ru: 'В зоне школьного автобуса возможны внезапные действия детей и движение машин. Сразу снижайте скорость.',
      pl: 'W strefie autobusu szkolnego — niespodziewane zachowania dzieci i dodatkowy ruch pojazdów. Natychmiast zwolnij.'
    }
  },

  // ─── VIDEO QUESTIONS ──────────────────────────────────────────────────
  // The video files live in /public/images/quiz/trafic-video/. Each must
  // be original or licensed; the engine just plays whatever file is there.
  {
    id: 'video-urban-crossing',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 5,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    videoPath: '/images/quiz/trafic-video/v-01.mp4',
    videoMaxReplays: 5,
    question: {
      de: 'Sehen Sie sich die Szene an und beantworten Sie: Worauf müssen Sie an dieser Stelle besonders achten?',
      en: 'Watch the scene and answer: what must you pay particular attention to at this spot?',
      ar: 'شاهد المشهد وأجب: ما الذي يجب الانتباه له خاصة هنا؟',
      tr: 'Sahneyi izleyin: bu noktada özellikle neye dikkat etmelisiniz?',
      ru: 'Посмотрите видео и ответьте: на что особенно обратить внимание в этом месте?',
      pl: 'Obejrzyj scenę i odpowiedz: na co szczególnie zwrócić uwagę w tym miejscu?'
    },
    options: [
      { id: 'a', text: { de: 'Fußgänger, die zwischen Fahrzeugen die Fahrbahn überqueren', en: 'Pedestrians crossing between vehicles', ar: 'مشاة يعبرون بين السيارات', tr: 'Araçlar arasından geçen yayalar', ru: 'Пешеходы, переходящие между машинами', pl: 'Piesi przechodzący między pojazdami' } },
      { id: 'b', text: { de: 'Plötzlich öffnende Autotüren', en: 'Car doors opening suddenly', ar: 'أبواب سيارات تُفتح فجأة', tr: 'Aniden açılan araç kapıları', ru: 'Внезапно открывающиеся двери', pl: 'Nagle otwierające się drzwi' } },
      { id: 'c', text: { de: 'Dass kein zusätzlicher Sicherheitsabstand nötig ist', en: 'That no extra safety distance is needed', ar: 'عدم الحاجة لمسافة أمان إضافية', tr: 'Ek güvenlik mesafesi gerekmediği', ru: 'Что дополнительная дистанция не нужна', pl: 'Że dodatkowy odstęp jest niepotrzebny' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'In dichten Stadtszenen sind verdeckte Fußgänger und sich öffnende Türen die häufigsten Überraschungen. Tempo runter, Abstand vergrößern.',
      en: 'In dense urban scenes hidden pedestrians and opening doors are the most frequent surprises. Slow down, keep extra space.',
      ar: 'في المشاهد الحضرية المزدحمة، المشاة المخفيون والأبواب أكثر المفاجآت. خفض السرعة وزد المسافة.',
      tr: 'Yoğun şehir sahnelerinde gizli yayalar ve açılan kapılar en sık sürprizlerdir. Hızı düşürün, mesafeyi açın.',
      ru: 'В плотном городе главное — скрытые пешеходы и открывающиеся двери. Снижайте скорость, увеличивайте интервал.',
      pl: 'W gęstym mieście niewidoczni piesi i otwierające się drzwi to najczęstsze niespodzianki. Zwolnij, zwiększ odstęp.'
    }
  },
  {
    id: 'video-roadworks-parked-bikes',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    videoPath: '/images/quiz/trafic-video/v-02.mp4',
    videoMaxReplays: 5,
    question: {
      de: 'Im Video fahren Sie an parkenden Fahrzeugen und Fahrradständern rechts vorbei, voraus warnt ein Baustellenschild. Womit müssen Sie rechnen?',
      en: 'In the video you drive past parked cars and bicycle racks on the right while a roadworks warning sign appears ahead. What must you anticipate?',
      ar: 'في الفيديو تقود بجانب سيارات متوقفة وحاملات دراجات على اليمين، ولوحة أعمال طرق أمامك. بماذا تتوقع؟',
      tr: 'Videoda sağda park etmiş araçlar ve bisiklet rafları boyunca ilerliyorsunuz; ileride yol çalışması uyarısı var. Neyi beklemelisiniz?',
      ru: 'На видео вы проезжаете справа припаркованные машины и велопарковки, впереди — знак дорожных работ. К чему быть готовым?',
      pl: 'Na filmie mijasz z prawej zaparkowane auta i stojaki rowerowe, a przed Tobą znak robót drogowych. Czego się spodziewać?'
    },
    options: [
      { id: 'a', text: { de: 'Radfahrer, die plötzlich von den Ständern auf die Fahrbahn fahren', en: 'Cyclists suddenly moving from the racks onto the road', ar: 'دراجون يخرجون فجأة من الحاملات إلى الطريق', tr: 'Raflardan aniden yola çıkan bisikletliler', ru: 'Велосипедистов, внезапно выезжающих со стоянок на проезжую часть', pl: 'Rowerzystów nagle wyjeżdżających ze stojaków na jezdnię' } },
      { id: 'b', text: { de: 'Verengung der Fahrbahn im Bereich der Baustelle', en: 'A narrowing of the carriageway in the roadworks area', ar: 'تضييق المسار في منطقة الأشغال', tr: 'Yol çalışması bölgesinde daralma', ru: 'Сужение проезжей части в зоне работ', pl: 'Zwężenie jezdni w strefie robót' } },
      { id: 'c', text: { de: 'Dass die Baustelle keinen Einfluss auf Ihre Geschwindigkeit hat', en: 'That the roadworks have no effect on your speed', ar: 'أن الأشغال لا تؤثر على سرعتك', tr: 'Çalışmanın hızınızı etkilemediği', ru: 'Что работы не влияют на вашу скорость', pl: 'Że roboty nie wpływają na Twoją prędkość' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Baustellenschilder kündigen Verengung und Hindernisse an — Tempo reduzieren. Aus Fahrradständern können jederzeit Radfahrer ausschwenken.',
      en: 'Roadworks signs announce narrowing and obstacles — slow down. Cyclists may swing out from bike racks at any moment.',
      ar: 'لوحات الأشغال تنذر بتضييق وعوائق — خفّض السرعة. قد يخرج الدراجون من الحاملات في أي لحظة.',
      tr: 'Yol çalışması işaretleri daralma ve engelleri haber verir — hızı düşürün. Bisikletliler her an raftan çıkabilir.',
      ru: 'Знаки работ предупреждают о сужении и препятствиях — снижайте скорость. Велосипедисты могут в любой момент выехать со стоянок.',
      pl: 'Znaki robót zapowiadają zwężenia i przeszkody — zwolnij. Rowerzyści mogą w każdej chwili wyjechać ze stojaków.'
    }
  },
  {
    id: 'video-traffic-light-motorbike',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 5,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    videoPath: '/images/quiz/trafic-video/v-03.mp4',
    videoMaxReplays: 5,
    question: {
      de: 'Sie stehen an einer roten Ampel und wollen rechts abbiegen. Neben Ihnen steht ein Motorrad in der Nachbarspur. Worauf achten Sie beim Anfahren?',
      en: 'You are stopped at a red light intending to turn right. A motorbike is alongside you in the adjacent lane. What must you watch for as the light changes?',
      ar: 'تتوقف عند إشارة حمراء وتنوي الانعطاف يمينًا. بجانبك دراجة نارية في الحارة المجاورة. ما الذي يجب مراقبته عند الانطلاق؟',
      tr: 'Kırmızı ışıkta duruyorsunuz, sağa dönmek istiyorsunuz. Yanınızdaki şeritte bir motosiklet var. Işık yeşilken neye dikkat edersiniz?',
      ru: 'Вы стоите на красный, собираетесь повернуть направо. В соседней полосе мотоцикл. На что обратить внимание при трогании?',
      pl: 'Stoisz na czerwonym, chcesz skręcić w prawo. Obok Ciebie w sąsiednim pasie stoi motocykl. Na co zwracasz uwagę przy ruszaniu?'
    },
    options: [
      { id: 'a', text: { de: 'Das Motorrad könnte geradeaus weiterfahren und Ihren Abbiegeweg kreuzen', en: 'The motorbike may continue straight and cross your turning path', ar: 'قد تستمر الدراجة النارية مستقيمة وتقطع مسار انعطافك', tr: 'Motosiklet düz devam edip dönüş yolunuzu kesebilir', ru: 'Мотоцикл может ехать прямо и пересечь ваш путь поворота', pl: 'Motocykl może jechać prosto i przeciąć Twój tor skrętu' } },
      { id: 'b', text: { de: 'Fußgänger, die parallel zu Ihrer Fahrtrichtung über die Straße queren', en: 'Pedestrians crossing the side street parallel to your direction', ar: 'مشاة يعبرون الشارع الجانبي بنفس اتجاه سيرك', tr: 'Sürüş yönünüze paralel yan sokağı geçen yayalar', ru: 'Пешеходы, переходящие боковую улицу в вашем направлении', pl: 'Pieszych przechodzących boczną ulicę równolegle do Twojego kierunku' } },
      { id: 'c', text: { de: 'Dass beim Grün sofort und ohne Schulterblick beschleunigen', en: 'That you may accelerate immediately on green without a shoulder check', ar: 'أنه يجوز التسارع فور الأخضر دون النظر للخلف', tr: 'Yeşilde anında ve omuz kontrolü olmadan hızlanabileceğinizi', ru: 'Что при зелёном можно сразу разгоняться без взгляда через плечо', pl: 'Że na zielonym można ruszyć bez sprawdzenia martwego pola' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Vor dem Rechtsabbiegen Schulterblick zum Motorrad und zu querenden Fußgängern. Wer geradeaus fährt, hat Vorrang gegenüber Ihrem Abbiegevorgang.',
      en: 'Before turning right do a shoulder check for the motorbike and crossing pedestrians. Straight-ahead traffic has priority over your turn.',
      ar: 'قبل الانعطاف يمينًا انظر للخلف نحو الدراجة النارية والمشاة. للمتجهين مستقيم الأولوية على انعطافك.',
      tr: 'Sağa dönmeden önce motosiklet ve geçen yayalar için omuz kontrolü yapın. Düz gidenler dönüşünüze göre önceliklidir.',
      ru: 'Перед поворотом направо — взгляд через плечо на мотоцикл и пешеходов. Едущие прямо имеют приоритет перед вашим поворотом.',
      pl: 'Przed skrętem w prawo sprawdź martwe pole — motocykl i pieszych. Jadący prosto ma pierwszeństwo przed Twoim skrętem.'
    }
  },
  {
    id: 'video-rural-road-damage',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    topicCode: '2.1.07',
    topicType: 'zusatzstoff',
    videoPath: '/images/quiz/trafic-video/v-04.mp4',
    videoMaxReplays: 5,
    question: {
      de: 'Auf einer Landstraße sehen Sie das Schild „Straßenschäden" und Schlaglöcher in Ihrer Fahrspur. Wie verhalten Sie sich?',
      en: 'On a rural road you see the "Straßenschäden" (road damage) sign and potholes in your lane. How do you behave?',
      ar: 'على طريق ريفي ترى لوحة "تلف في الطريق" وحفر في مسارك. كيف تتصرف؟',
      tr: 'Kırsal yolda "Yol Hasarı" tabelası ve şeridinizde çukurlar görüyorsunuz. Nasıl davranırsınız?',
      ru: 'На загородной дороге вы видите знак «Повреждения дорожного покрытия» и ямы на полосе. Как вы поступите?',
      pl: 'Na drodze wiejskiej widzisz znak „Uszkodzenia jezdni" i dziury na swoim pasie. Jak się zachowujesz?'
    },
    options: [
      { id: 'a', text: { de: 'Geschwindigkeit deutlich reduzieren', en: 'Reduce speed clearly', ar: 'خفض السرعة بوضوح', tr: 'Hızı belirgin şekilde düşürmek', ru: 'Заметно снизить скорость', pl: 'Wyraźnie zmniejszyć prędkość' } },
      { id: 'b', text: { de: 'Lenkrad fest halten und ruckartige Ausweichmanöver vermeiden', en: 'Hold the steering wheel firmly and avoid jerky swerving', ar: 'إمساك المقود بإحكام وتجنب المناورات المفاجئة', tr: 'Direksiyonu sıkı tutmak ve ani şerit değişikliklerinden kaçınmak', ru: 'Крепко держать руль и избегать резких манёвров', pl: 'Mocno trzymać kierownicę i unikać gwałtownych manewrów' } },
      { id: 'c', text: { de: 'Auf die Gegenfahrbahn ausweichen, ohne den Gegenverkehr zu beachten', en: 'Swerve to the oncoming lane without regard for oncoming traffic', ar: 'الانحراف إلى المسار المقابل دون مراعاة المرور القادم', tr: 'Karşı yöne, gelen trafiği umursamadan kaçmak', ru: 'Уходить на встречную, не считаясь со встречным потоком', pl: 'Zjechać na przeciwny pas bez zwracania uwagi na ruch z naprzeciwka' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Bei Straßenschäden frühzeitig Tempo raus, Lenkrad fest greifen, nicht ruckartig ausweichen. Gegenverkehr und Seitenraum nie ignorieren.',
      en: 'When road damage is signed slow down early, hold the wheel firmly, do not swerve abruptly, and never ignore oncoming traffic.',
      ar: 'عند تلف الطريق: قلل السرعة باكرًا، أمسك المقود بإحكام، ولا تنحرف بشكل مفاجئ، ولا تتجاهل المرور المقابل.',
      tr: 'Yol hasarında erkenden yavaşlayın, direksiyonu sıkı tutun, ani manevradan kaçının, karşı trafiği asla yok saymayın.',
      ru: 'При дефектах дороги — заранее снижайте скорость, держите руль крепко, не уходите резко в сторону, не игнорируйте встречных.',
      pl: 'Przy uszkodzeniach jezdni — zwolnij wcześnie, mocno trzymaj kierownicę, nie wykonuj gwałtownych manewrów, uważaj na ruch z naprzeciwka.'
    }
  },

  // ─── ADDITIONAL HAZARD PERCEPTION (topic 2.1.01) ──────────────────────
  {
    id: 'scene-residential-area',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    topicCode: '2.1.01',
    topicType: 'zusatzstoff',
    imagePath: '/images/quiz/Screenshots/q-07.png',
    question: {
      de: 'Sie fahren durch ein Wohngebiet mit parkenden Fahrzeugen am rechten Rand. Welches Risiko ist am höchsten?',
      en: 'You are driving through a residential area with parked cars on the right. Which risk is the highest?',
      ar: 'تقود في منطقة سكنية وسيارات متوقفة على اليمين. ما الخطر الأعلى؟',
      tr: 'Sağda park etmiş araçların olduğu bir yerleşim bölgesinde sürüyorsunuz. En yüksek risk hangisi?',
      ru: 'Едете по жилой зоне с припаркованными справа машинами. Какой риск выше всего?',
      pl: 'Jedziesz przez osiedle z autami zaparkowanymi z prawej. Jakie ryzyko jest największe?'
    },
    options: [
      { id: 'a', text: { de: 'Plötzlich öffnende Türen', en: 'Suddenly opening doors', ar: 'فتح أبواب فجائي', tr: 'Aniden açılan kapılar', ru: 'Внезапно открывающиеся двери', pl: 'Nagle otwierające się drzwi' } },
      { id: 'b', text: { de: 'Zwischen Fahrzeugen heraustretende Personen', en: 'People stepping out from between vehicles', ar: 'أشخاص يظهرون من بين السيارات', tr: 'Araçlar arasından çıkan insanlar', ru: 'Люди, выходящие из-за машин', pl: 'Osoby wychodzące spomiędzy aut' } },
      { id: 'c', text: { de: 'Dass dort niemand mit Querverkehr rechnen muss', en: 'That no cross traffic should be expected there', ar: 'عدم توقع حركة عرضية هناك', tr: 'Çapraz trafik beklenmez', ru: 'Что поперечного движения там нет', pl: 'Że nie ma tu ruchu poprzecznego' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Im Wohngebiet sind unerwartete Türen und Fußgänger zwischen Autos die Hauptrisiken. Tempo runter, Sicherheitsabstand seitlich groß halten.',
      en: 'In residential streets the biggest risks are opening doors and pedestrians appearing between cars. Slow down, keep wide side clearance.',
      ar: 'في الأحياء السكنية: الأبواب المفاجئة والمشاة من بين السيارات أهم المخاطر. خفّض السرعة وزد المسافة الجانبية.',
      tr: 'Yerleşim bölgesinde ana riskler ani açılan kapılar ve araç arasından çıkan yayalardır. Hızı düşür, yan mesafeyi aç.',
      ru: 'В жилом районе главные риски — двери и пешеходы между машинами. Снижайте скорость, увеличивайте боковой интервал.',
      pl: 'W osiedlu — drzwi i piesi spomiędzy aut to największe ryzyko. Zwolnij, trzymaj szeroki odstęp boczny.'
    }
  }
];
