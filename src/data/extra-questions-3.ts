import type { Question } from './types';

/**
 * Third batch — horn, exhaust, centrifugal, catalytic, headlight flash,
 * warning plates, parking edge cases, lane choices, traffic lights,
 * crossings, environment, first aid.
 */
export const extraQuestions3: Question[] = [
  {
    id: 'horn-defect-reason',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Die Hupe funktioniert nicht. Welche Ursachen kommen infrage?',
      en: 'If the horn does not work, what can be the reason?',
      ar: 'البوق لا يعمل. ما الأسباب المحتملة؟',
      tr: 'Korna çalışmıyor. Nedenleri ne olabilir?',
      ru: 'Сигнал не работает. Каковы причины?',
      pl: 'Klakson nie działa. Co może być przyczyną?'
    },
    options: [
      { id: 'a', text: { de: 'Das Bedienelement der Hupe ist defekt', en: 'The horn\'s operating device is defective', ar: 'زر التشغيل معطّل', tr: 'Korna kumandası arızalı', ru: 'Неисправен орган управления сигналом', pl: 'Uszkodzony przełącznik klaksonu' } },
      { id: 'b', text: { de: 'Sicherung durchgebrannt', en: 'Blown fuse', ar: 'انصهار الفيوز', tr: 'Sigorta atmış', ru: 'Перегорел предохранитель', pl: 'Przepalony bezpiecznik' } },
      { id: 'c', text: { de: 'Anlasser defekt', en: 'Defective starter', ar: 'بادئ الحركة معطل', tr: 'Marş motoru bozuk', ru: 'Неисправен стартер', pl: 'Uszkodzony rozrusznik' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Defekter Schalter oder durchgebrannte Sicherung sind typische Ursachen — der Anlasser hat damit nichts zu tun.',
      en: 'Faulty switch or blown fuse are typical causes — the starter is unrelated.',
      ar: 'الزر التالف أو الفيوز المحترق أسباب نموذجية — المُدوّر لا علاقة له.',
      tr: 'Bozuk düğme veya atmış sigorta tipik nedendir — marşın ilgisi yoktur.',
      ru: 'Неисправный выключатель или перегоревший предохранитель — типичные причины; стартер ни при чём.',
      pl: 'Uszkodzony włącznik lub przepalony bezpiecznik to typowe przyczyny — rozrusznik nie ma z tym związku.'
    }
  },
  {
    id: 'exhaust-louder',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Das Auspuffgeräusch ist plötzlich deutlich lauter geworden. Was tun Sie?',
      en: 'The noise of the exhaust has suddenly become louder than usual. What do you do?',
      ar: 'صوت العادم أصبح أعلى فجأة. ماذا تفعل؟',
      tr: 'Egzoz sesi aniden çok daha yüksek. Ne yaparsınız?',
      ru: 'Звук выхлопа внезапно стал громче. Что делать?',
      pl: 'Hałas wydechu nagle stał się znacznie głośniejszy. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Luftfilter erneuern', en: 'Renew the engine air filter', ar: 'تغيير فلتر الهواء', tr: 'Hava filtresini değiştirin', ru: 'Заменить воздушный фильтр', pl: 'Wymienić filtr powietrza' } },
      { id: 'b', text: { de: 'Nichts unternehmen', en: 'Nothing, nobody is endangered', ar: 'لا تفعل شيئًا', tr: 'Hiçbir şey yapmayın', ru: 'Ничего не делать', pl: 'Nic nie robić' } },
      { id: 'c', text: { de: 'Auspuffanlage prüfen lassen', en: 'Check the exhaust system', ar: 'فحص نظام العادم', tr: 'Egzoz sistemini kontrol ettirin', ru: 'Проверить выхлопную систему', pl: 'Sprawdzić układ wydechowy' } }
    ],
    correctIds: ['c'],
    explanation: {
      de: 'Lauter Auspuff = wahrscheinlich defekt. Abgase und Lärm belasten — sofort prüfen lassen.',
      en: 'A loud exhaust likely means a fault. Fumes and noise are a problem — have it checked.',
      ar: 'العادم العالي يدل غالبًا على عطل. الانبعاثات والضجيج — افحصه.',
      tr: 'Yüksek ses muhtemelen arıza. Egzoz gazları ve gürültü zararlı — kontrole götürün.',
      ru: 'Громкий выхлоп — вероятно неисправность. Выхлоп вреден — проверьте.',
      pl: 'Głośny wydech zwykle oznacza usterkę. Spaliny i hałas są szkodliwe — sprawdź.'
    }
  },
  {
    id: 'centrifugal-bend',
    category: 'tech',
    classes: ['A', 'B', 'AB'],
    points: 2,
    question: {
      de: 'Was erhöht die Wirkung der Fliehkraft auf das Fahrzeug in Kurven?',
      en: 'What increases the effect of centrifugal force on the vehicle when driving round bends?',
      ar: 'ما الذي يزيد من تأثير قوة الطرد المركزي على المركبة في المنعطفات؟',
      tr: 'Virajda merkezkaç kuvvetinin etkisini ne arttırır?',
      ru: 'Что усиливает действие центробежной силы в повороте?',
      pl: 'Co zwiększa działanie siły odśrodkowej w zakręcie?'
    },
    options: [
      { id: 'a', text: { de: 'Kleinerer Kurvenradius', en: 'Smaller radius of a bend', ar: 'نصف قطر منعطف أصغر', tr: 'Daha küçük viraj yarıçapı', ru: 'Меньший радиус поворота', pl: 'Mniejszy promień zakrętu' } },
      { id: 'b', text: { de: 'Höherer Reifendruck', en: 'Higher tyre pressure', ar: 'ضغط إطارات أعلى', tr: 'Daha yüksek lastik basıncı', ru: 'Более высокое давление в шинах', pl: 'Wyższe ciśnienie w oponach' } },
      { id: 'c', text: { de: 'Höhere Geschwindigkeit', en: 'Higher speed', ar: 'سرعة أعلى', tr: 'Daha yüksek hız', ru: 'Большая скорость', pl: 'Wyższa prędkość' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Fliehkraft ∝ v² / r — sie wächst mit Geschwindigkeit und sinkt nur, wenn der Radius größer wird.',
      en: 'Centrifugal force ∝ v² / r — it grows with speed and shrinks only if the radius is larger.',
      ar: 'قوة الطرد ∝ v² / r — تزداد مع السرعة وتقل مع كبر نصف القطر.',
      tr: 'Merkezkaç ∝ v² / r — hızla artar, yarıçap büyürse azalır.',
      ru: 'Центробежная сила ∝ v² / r — растёт со скоростью и падает с увеличением радиуса.',
      pl: 'Siła odśrodkowa ∝ v² / r — rośnie z prędkością i maleje, gdy promień jest większy.'
    }
  },
  {
    id: 'catalytic-knowledge',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Was müssen Sie über Katalysatoren wissen?',
      en: 'What must you know about catalytic converters?',
      ar: 'ماذا يجب أن تعرف عن المحوّلات الحفّازة؟',
      tr: 'Katalitik konvertörler hakkında neyi bilmelisiniz?',
      ru: 'Что нужно знать о каталитическом нейтрализаторе?',
      pl: 'Co musisz wiedzieć o katalizatorze?'
    },
    options: [
      { id: 'a', text: { de: 'Anschleppen kann den Kat beschädigen oder zerstören', en: 'Towing to start can damage or destroy the catalytic converter', ar: 'القطر للتشغيل قد يتلف أو يدمّر الكتلايزر', tr: 'Çekerek çalıştırmak katı bozabilir veya yok edebilir', ru: 'Запуск буксировкой может повредить или вывести катализатор из строя', pl: 'Holowanie w celu rozruchu może uszkodzić lub zniszczyć katalizator' } },
      { id: 'b', text: { de: 'Unverbrannter Kraftstoff im Kat ist beim Start unbedenklich', en: 'Unburned fuel in the cat cannot cause damage when starting', ar: 'الوقود غير المحترق لا يضر بالكتلايزر عند البدء', tr: 'Yanmamış yakıt çalıştırmada zararsızdır', ru: 'Несгоревшее топливо в катализаторе при запуске не опасно', pl: 'Niespalone paliwo w katalizatorze nie szkodzi przy starcie' } },
      { id: 'c', text: { de: 'Mehrere erfolglose Startversuche können den Kat beschädigen', en: 'Many unsuccessful starts can damage the catalytic converter', ar: 'محاولات بدء فاشلة متعددة قد تتلف الكتلايزر', tr: 'Birçok başarısız çalıştırma denemesi katı bozabilir', ru: 'Многократные неудачные попытки запуска могут повредить катализатор', pl: 'Wiele nieudanych prób rozruchu może uszkodzić katalizator' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Unverbrannter Sprit gelangt in den heißen Kat und kann ihn beim Zünden zerstören — Anschleppen vermeiden.',
      en: 'Unburned fuel can reach the hot cat and detonate when it lights — avoid push-starting.',
      ar: 'الوقود غير المحترق قد يصل إلى الكتلايزر الساخن ويسبب التلف عند الاشتعال.',
      tr: 'Yanmamış yakıt sıcak kata ulaşıp tutuştuğunda hasara yol açabilir — çekerek çalıştırmaktan kaçının.',
      ru: 'Несгоревшее топливо попадает в горячий катализатор и при возгорании разрушает его. Не запускайте буксировкой.',
      pl: 'Niespalone paliwo dociera do gorącego katalizatora i może go zniszczyć przy zapłonie. Nie odpalaj na pych.'
    }
  },
  {
    id: 'rain-after-dry',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Worauf müssen Sie sich einstellen, wenn es nach langer Trockenheit zu regnen beginnt?',
      en: 'What must you reckon with when it starts raining after a long period of dry weather?',
      ar: 'ما الذي يجب توقعه عندما يبدأ المطر بعد فترة جفاف طويلة؟',
      tr: 'Uzun bir kuraklığın ardından yağmur başlayınca neye dikkat etmelisiniz?',
      ru: 'Что учитывать, когда после долгой засухи начинается дождь?',
      pl: 'Co przewidzieć, gdy po długim okresie suszy zaczyna padać deszcz?'
    },
    options: [
      { id: 'a', text: { de: 'Kürzeren Bremsweg', en: 'Shorter braking distance', ar: 'مسافة فرملة أقصر', tr: 'Daha kısa fren yolu', ru: 'Более короткий тормозной путь', pl: 'Krótsza droga hamowania' } },
      { id: 'b', text: { de: 'Sofort schlechte Sicht beim Einschalten der Wischer', en: 'Bad visibility immediately upon switching the windscreen wipers on', ar: 'رؤية سيئة فور تشغيل المساحات', tr: 'Silecekleri açar açmaz kötü görüş', ru: 'Сразу плохая видимость при включении дворников', pl: 'Natychmiastowo zła widoczność po włączeniu wycieraczek' } },
      { id: 'c', text: { de: 'Gefährliche Schmierschicht auf der Fahrbahn', en: 'A dangerous greasy film on the surface of the road', ar: 'طبقة دهنية خطرة على الطريق', tr: 'Yol yüzeyinde tehlikeli yağlı tabaka', ru: 'Опасная жирная плёнка на дороге', pl: 'Niebezpieczna warstwa tłuszczu na nawierzchni' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Staub und Öl mischen sich mit Wasser → rutschige Schmierschicht; die ersten Wischzüge verteilen den Schmutz, kurzzeitig wird die Sicht schlechter.',
      en: 'Dust and oil mix with water → a slippery film; first wiper strokes smear dirt and visibility briefly worsens.',
      ar: 'الغبار والزيت يختلطان بالماء → طبقة زلقة؛ أول حركات المساحات تنشر القذارة وتسوء الرؤية مؤقتًا.',
      tr: 'Toz ve yağ suyla karışıp kaygan tabaka oluşturur; ilk silecek hareketleri pisliği yayar, görüş kısa süre bozulur.',
      ru: 'Пыль и масло смешиваются с водой — образуется скользкая плёнка; первые движения дворников ухудшают видимость.',
      pl: 'Pył i olej mieszają się z wodą — śliska warstwa; pierwsze ruchy wycieraczek pogarszają widoczność.'
    }
  },
  {
    id: 'speed-selection-factors',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Was müssen Sie bei der Wahl Ihrer Geschwindigkeit berücksichtigen?',
      en: 'What must you take into consideration when selecting your speed?',
      ar: 'ما الذي يجب مراعاته عند اختيار سرعتك؟',
      tr: 'Hızınızı seçerken neleri göz önünde bulundurmalısınız?',
      ru: 'Что учитывать при выборе скорости?',
      pl: 'Co musisz uwzględnić przy wyborze prędkości?'
    },
    options: [
      { id: 'a', text: { de: 'Sicht- und Wetterverhältnisse', en: 'Visibility and weather conditions', ar: 'ظروف الرؤية والطقس', tr: 'Görüş ve hava şartları', ru: 'Видимость и погода', pl: 'Widoczność i warunki pogodowe' } },
      { id: 'b', text: { de: 'Straßen- und Verkehrsverhältnisse', en: 'Road and traffic conditions', ar: 'حالة الطريق وحركة المرور', tr: 'Yol ve trafik koşulları', ru: 'Состояние дороги и трафика', pl: 'Stan drogi i ruchu' } },
      { id: 'c', text: { de: 'Persönliche Fahrtüchtigkeit', en: 'Personal driving ability', ar: 'قدرتك الشخصية على القيادة', tr: 'Kişisel sürüş kabiliyeti', ru: 'Личное состояние водителя', pl: 'Osobiste umiejętności prowadzenia' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Geschwindigkeit immer den Verhältnissen anpassen — Wetter, Straße, eigene Verfassung.',
      en: 'Always adapt speed to conditions — weather, road, your own state.',
      ar: 'يجب دائمًا تعديل السرعة وفقًا للظروف — الطقس، الطريق، حالتك.',
      tr: 'Hızı her zaman koşullara göre uyarlayın — hava, yol, kişisel durum.',
      ru: 'Скорость всегда подстраивайте под условия — погода, дорога, состояние водителя.',
      pl: 'Prędkość zawsze dopasuj do warunków — pogoda, droga, własna forma.'
    }
  },
  {
    id: 'horse-carriage-direction',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Woran erkennen Sie, dass eine pferdebespannte Kutsche die Richtung wechseln will?',
      en: 'How can you tell if a horse-drawn carriage wants to change direction?',
      ar: 'كيف تعرف أن عربة تجرها خيول تنوي تغيير الاتجاه؟',
      tr: 'Atlı bir arabanın yön değiştirmek istediğini nasıl anlarsınız?',
      ru: 'Как понять, что конная повозка хочет изменить направление?',
      pl: 'Po czym poznasz, że bryczka konna chce zmienić kierunek?'
    },
    options: [
      { id: 'a', text: { de: 'Eingeschalteter Blinker', en: 'A flashing indicator', ar: 'إشارة الانعطاف مضاءة', tr: 'Yanıp sönen sinyal', ru: 'Включённый указатель поворота', pl: 'Włączony kierunkowskaz' } },
      { id: 'b', text: { de: 'Eine Verkehrskelle wird gezeigt', en: 'A traffic paddle is displayed', ar: 'إظهار عصا المرور', tr: 'Trafik raketi gösterilir', ru: 'Показывается жезл-указатель', pl: 'Pokazana paletka kierowania ruchem' } },
      { id: 'c', text: { de: 'Der Kutscher streckt den Arm aus', en: 'The driver extends his arm', ar: 'يمد السائق ذراعه', tr: 'Arabacı kolunu uzatır', ru: 'Кучер вытягивает руку', pl: 'Woźnica wyciąga rękę' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Kutschen können Blinker, Kelle oder Handzeichen verwenden, um den Richtungswechsel anzuzeigen.',
      en: 'Carriages may use indicator, paddle or hand signals to show direction change.',
      ar: 'يمكن للعربات استخدام الإشارات أو العصا أو إشارة اليد لإظهار تغيير الاتجاه.',
      tr: 'Atlı arabalar sinyal, raket veya el işareti kullanabilir.',
      ru: 'Конные повозки используют поворотник, жезл или жест рукой.',
      pl: 'Bryczki mogą używać kierunkowskazu, paletki lub gestu ręki.'
    }
  },
  {
    id: 'overtake-motorway-flash',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie überholen auf der Autobahn. Hinter Ihnen nähert sich schnell ein Pkw mit Lichthupe und Blinker. Wie verhalten Sie sich?',
      en: 'You are overtaking on a motorway. Behind you a car approaches at high speed, with headlights and indicators flashing. What should you do?',
      ar: 'تتجاوز على الأوتوبان. خلفك سيارة تقترب بسرعة بضوء وامض وغماز. ماذا تفعل؟',
      tr: 'Otoyolda sollarken arkanızdan farları çakan ve sinyali yakan bir araç hızla yaklaşıyor. Ne yaparsınız?',
      ru: 'Вы обгоняете на автобане. Сзади быстро приближается машина с миганием фар и поворотников. Что делать?',
      pl: 'Wyprzedzasz na autostradzie. Za Tobą szybko zbliża się auto z migającymi światłami i kierunkowskazem. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'So bald wie möglich auf die rechte Spur einscheren', en: 'Pull over into the right-hand lane as soon as possible', ar: 'العودة لليمين بأسرع ما يمكن', tr: 'Mümkün olan en kısa sürede sağ şeride geçin', ru: 'Как можно скорее уйти в правый ряд', pl: 'Jak najszybciej zjechać na prawy pas' } },
      { id: 'b', text: { de: 'Sanft abbremsen', en: 'Gently decelerate', ar: 'تخفيف السرعة بهدوء', tr: 'Yavaşça yavaşlayın', ru: 'Слегка снизить скорость', pl: 'Delikatnie zwolnić' } },
      { id: 'c', text: { de: 'Überholvorgang zügig zu Ende führen', en: 'Continue overtaking swiftly', ar: 'إكمال التجاوز بسرعة', tr: 'Sollamayı hızlıca tamamlayın', ru: 'Завершить обгон быстро', pl: 'Sprawnie dokończyć wyprzedzanie' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Überholen zügig beenden und einscheren — nicht bremsen. Drängler sind aber nie zur Nötigung berechtigt.',
      en: 'Finish overtaking quickly and pull in — do not brake. Tailgaters never have a right to bully.',
      ar: 'أنهِ التجاوز بسرعة وعد لليمين — لا تفرمل. لا حق لمن خلفك في الضغط.',
      tr: 'Sollamayı hızla bitirip sağa geçin — fren yapmayın. Sıkıştıran arkadakinin hakkı yoktur.',
      ru: 'Быстро завершите обгон и уйдите вправо — не тормозите. Подгоняющий не имеет права давить.',
      pl: 'Sprawnie zakończ wyprzedzanie i zjedź na prawo — nie hamuj. Naciskający z tyłu nie ma do tego prawa.'
    }
  },
  {
    id: 'impact-30',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Ab welcher Aufprallgeschwindigkeit ohne Sicherheitsgurt müssen Sie mit schweren oder tödlichen Verletzungen rechnen?',
      en: 'At what impact speed must you reckon with serious or fatal injuries when no safety belt is worn?',
      ar: 'من أي سرعة اصطدام دون حزام يجب توقع إصابات خطيرة أو مميتة؟',
      tr: 'Emniyet kemeri takılı değilken hangi çarpışma hızından itibaren ağır veya ölümcül yaralanma beklenir?',
      ru: 'С какой скорости столкновения без ремня — серьёзные или смертельные травмы?',
      pl: 'Od jakiej prędkości zderzenia bez pasów grożą poważne lub śmiertelne obrażenia?'
    },
    options: [
      { id: 'a', text: { de: 'Ab 30 km/h', en: 'From 30 km/h onward', ar: 'من 30 كم/س', tr: '30 km/s\'den itibaren', ru: 'С 30 км/ч', pl: 'Od 30 km/h' } },
      { id: 'b', text: { de: 'Ab 80 km/h', en: 'From 80 km/h onward', ar: 'من 80 كم/س', tr: '80 km/s\'den itibaren', ru: 'С 80 км/ч', pl: 'Od 80 km/h' } },
      { id: 'c', text: { de: 'Ab 50 km/h', en: 'From 50 km/h onward', ar: 'من 50 كم/س', tr: '50 km/s\'den itibaren', ru: 'С 50 км/ч', pl: 'Od 50 km/h' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Ab etwa 30 km/h Aufprall ohne Gurt drohen schwere Verletzungen.',
      en: 'Above roughly 30 km/h, an unbelted impact risks severe injury.',
      ar: 'فوق 30 كم/س تقريبًا، الاصطدام دون حزام يهدد بإصابات بالغة.',
      tr: 'Yaklaşık 30 km/s üstünde kemersiz çarpışma ağır yaralanma riski taşır.',
      ru: 'Уже с 30 км/ч без ремня — риск тяжёлых травм.',
      pl: 'Już od ok. 30 km/h bez pasów grożą ciężkie obrażenia.'
    }
  },
  {
    id: 'tunnel-traffic-jam',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie fahren in einen Tunnel und kommen an das Ende eines Staus. Was tun Sie?',
      en: 'You are driving in a tunnel and approach the end of a traffic jam. What do you do?',
      ar: 'تدخل النفق وتقترب من نهاية ازدحام. ماذا تفعل؟',
      tr: 'Tünelde trafik tıkanıklığının sonuna yaklaşıyorsunuz. Ne yaparsınız?',
      ru: 'В туннеле подъезжаете к концу пробки. Что делать?',
      pl: 'Jedziesz tunelem i zbliżasz się do końca korka. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Motor abstellen und Fahrzeug verlassen', en: 'Switch off the engine and leave the vehicle', ar: 'إطفاء المحرك ومغادرة السيارة', tr: 'Motoru durdurup aracı terk edin', ru: 'Заглушить двигатель и выйти', pl: 'Wyłączyć silnik i opuścić pojazd' } },
      { id: 'b', text: { de: 'Wenden und Tunnel verlassen', en: 'Make a U-turn and leave the tunnel', ar: 'العودة ومغادرة النفق', tr: 'U dönüşü yapıp tüneli terk edin', ru: 'Развернуться и выехать из туннеля', pl: 'Zawrócić i wyjechać z tunelu' } },
      { id: 'c', text: { de: 'Warnblinker einschalten', en: 'Switch on the hazard warning lights', ar: 'تشغيل أضواء الخطر', tr: 'Dörtlü flaşörü yakın', ru: 'Включить аварийную сигнализацию', pl: 'Włączyć światła awaryjne' } }
    ],
    correctIds: ['c'],
    explanation: {
      de: 'Stauende mit Warnblinker absichern — Motor läuft. Wenden ist im Tunnel verboten.',
      en: 'Mark the end of the jam with hazards — keep the engine running. U-turns in tunnels are forbidden.',
      ar: 'استخدم أضواء الخطر للتنبيه — والمحرك يعمل. الدوران في النفق ممنوع.',
      tr: 'Kuyruğun sonunu dörtlülerle işaretleyin — motor çalışmaya devam. U dönüş yasak.',
      ru: 'Обозначьте конец пробки «аварийкой», двигатель не глушите. Разворот в туннеле запрещён.',
      pl: 'Oznacz koniec korka światłami awaryjnymi — silnik pracuje. Zawracanie w tunelu zabronione.'
    }
  },
  {
    id: 'tree-avenue',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Was gilt für das Fahren auf Alleen mit Baumreihen?',
      en: 'What are the special conditions when driving along tree-lined avenues?',
      ar: 'ما الخصائص الخاصة بالقيادة في طرق المروج المشجرة؟',
      tr: 'Ağaçlı yolda sürüş için özel hususlar nelerdir?',
      ru: 'Какие особенности движения по аллеям с деревьями?',
      pl: 'Co cechuje jazdę aleją wysadzaną drzewami?'
    },
    options: [
      { id: 'a', text: { de: 'Bäume schützen vor seitlichen Gefahren', en: 'Trees protect from side hazards', ar: 'الأشجار تحمي من الجوانب', tr: 'Ağaçlar yan tehlikelere karşı korur', ru: 'Деревья защищают с боков', pl: 'Drzewa chronią z boku' } },
      { id: 'b', text: { de: 'Besonders enge und unübersichtliche Kurven', en: 'Particularly narrow and blind bends', ar: 'منعطفات ضيقة وغير واضحة', tr: 'Özellikle dar ve kör virajlar', ru: 'Особенно узкие и слепые повороты', pl: 'Wąskie i niewidoczne zakręty' } },
      { id: 'c', text: { de: 'Schmale, oft gewölbte Fahrbahn erfordert Vorsicht bei Gegenverkehr', en: 'Narrow, often cambered roadway requires care with oncoming traffic', ar: 'طريق ضيق ومحدّب يستوجب الحذر مع المرور المعاكس', tr: 'Dar ve genelde kemerli yol karşıdan gelende dikkat ister', ru: 'Узкая и часто скруглённая дорога — осторожно с встречкой', pl: 'Wąska, często wybrzuszona jezdnia wymaga ostrożności przy ruchu z przeciwka' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Alleen sind oft eng, kurvig und gewölbt — Bäume sind ein Risiko, kein Schutz.',
      en: 'Avenues are often narrow, curvy and cambered — trees are a risk, not a shield.',
      ar: 'الطرق المشجرة غالبًا ضيقة ومنعطفة ومحدبة — الأشجار خطر لا وقاية.',
      tr: 'Ağaçlı yollar genelde dar, virajlı ve kemerlidir — ağaçlar koruma değil risktir.',
      ru: 'Аллеи часто узкие, извилистые и выпуклые — деревья опасны, а не защищают.',
      pl: 'Aleje są wąskie, kręte i wybrzuszone — drzewa są zagrożeniem, nie ochroną.'
    }
  },
  {
    id: 'sold-vehicle',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Sie haben Ihr noch zugelassenes Fahrzeug verkauft, der Käufer hat bezahlt. Was tun Sie?',
      en: 'You have sold your still-registered vehicle and the buyer has paid. What must you do?',
      ar: 'بعت سيارتك المسجلة ودفع المشتري. ماذا تفعل؟',
      tr: 'Hâlâ tescilli aracınızı sattınız, alıcı ödedi. Ne yapmalısınız?',
      ru: 'Вы продали ещё зарегистрированный автомобиль и получили оплату. Что делать?',
      pl: 'Sprzedałeś jeszcze zarejestrowany pojazd, kupujący zapłacił. Co musisz zrobić?'
    },
    options: [
      { id: 'a', text: { de: 'Zulassungsstelle unverzüglich Namen und Anschrift des Käufers mitteilen', en: 'Inform the registration centre immediately of the buyer\'s name and address', ar: 'إبلاغ سلطة التسجيل فورًا باسم وعنوان المشتري', tr: 'Tescil idaresine derhal alıcının adı ve adresini bildirin', ru: 'Немедленно сообщить регистрационному органу имя и адрес покупателя', pl: 'Niezwłocznie zgłosić w wydziale komunikacji dane kupującego' } },
      { id: 'b', text: { de: 'Prüfplakette vom Kennzeichen entfernen', en: 'Remove the test stamp from the registration plate', ar: 'إزالة ملصق الفحص من اللوحة', tr: 'Muayene etiketini plakadan sökün', ru: 'Снять наклейку техосмотра с номера', pl: 'Usunąć nalepkę kontrolną z tablicy' } },
      { id: 'c', text: { de: 'Fahrzeugschein und Fahrzeugbrief gegen Empfangsbestätigung übergeben', en: 'Hand over the vehicle registration certificate (Schein/Brief) against receipt', ar: 'تسليم الوثائق مقابل إيصال', tr: 'Belgeleri imza karşılığı teslim edin', ru: 'Передать документы под расписку', pl: 'Przekazać dokumenty za potwierdzeniem odbioru' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Sofort Käuferdaten an die Zulassungsstelle melden und Papiere gegen Quittung übergeben.',
      en: 'Notify the registration office of the buyer\'s details and hand over the papers against signature.',
      ar: 'بلّغ سلطة التسجيل فورًا وسلّم الأوراق مقابل توقيع.',
      tr: 'Tescil idaresine alıcı bilgilerini hemen bildirin ve belgeleri imza karşılığı verin.',
      ru: 'Сразу сообщите данные покупателя и передайте документы под подпись.',
      pl: 'Natychmiast zgłoś dane kupującego i przekaż dokumenty za pokwitowaniem.'
    }
  },
  {
    id: 'vehicle-pulls-right',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Beim Fahren zieht Ihr Fahrzeug nach rechts. Was kann die Ursache sein?',
      en: 'While driving, your vehicle pulls to the right. What can be the reason?',
      ar: 'سيارتك تجذب نحو اليمين أثناء القيادة. ما السبب المحتمل؟',
      tr: 'Sürerken aracınız sağa çekiyor. Nedeni ne olabilir?',
      ru: 'Автомобиль уводит вправо. В чём может быть причина?',
      pl: 'Pojazd ściąga w prawo. Co może być przyczyną?'
    },
    options: [
      { id: 'a', text: { de: 'Lenkachse verbogen', en: 'Steering axle bent', ar: 'محور التوجيه ملتوٍ', tr: 'Direksiyon aksı eğilmiş', ru: 'Изогнута рулевая ось', pl: 'Wygięta oś kierowania' } },
      { id: 'b', text: { de: 'Lockerer Stoßdämpfer der Lenkung', en: 'Loose steering shock absorber', ar: 'مخمد توجيه مفكوك', tr: 'Direksiyon amortisörü gevşek', ru: 'Ослаб амортизатор рулевого', pl: 'Luźny amortyzator układu kierowniczego' } },
      { id: 'c', text: { de: 'Spureinstellung nicht in Ordnung', en: 'Wheel alignment not in order', ar: 'ضبط الميلان غير سليم', tr: 'Tekerlek hizalaması bozuk', ru: 'Нарушено схождение колёс', pl: 'Niewłaściwa zbieżność kół' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Verbogene Achse oder falsche Spur — sofort in der Werkstatt prüfen lassen.',
      en: 'A bent axle or misaligned wheels — check at the garage immediately.',
      ar: 'محور ملتوٍ أو ميلان خاطئ — افحص الورشة فورًا.',
      tr: 'Eğilmiş aks veya bozuk hizalama — hemen serviste kontrol.',
      ru: 'Изогнутая ось или сбитое схождение — на сервис.',
      pl: 'Wygięta oś lub błędna zbieżność — natychmiast do warsztatu.'
    }
  },
  {
    id: 'aquaplaning-causes',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was kann Aquaplaning auf nassen Straßen verursachen?',
      en: 'What can cause aquaplaning on wet road surfaces?',
      ar: 'ما الذي يسبب الانزلاق المائي على الطرق المبللة؟',
      tr: 'Islak yollarda akuaplaningine ne sebep olabilir?',
      ru: 'Что может вызвать аквапланирование на мокрой дороге?',
      pl: 'Co może powodować aquaplaning na mokrej jezdni?'
    },
    options: [
      { id: 'a', text: { de: 'Hohe Geschwindigkeit', en: 'High speed', ar: 'السرعة العالية', tr: 'Yüksek hız', ru: 'Высокая скорость', pl: 'Wysoka prędkość' } },
      { id: 'b', text: { de: 'Spurrillen in der Fahrbahn', en: 'Grooves in the roadway', ar: 'أخاديد على الطريق', tr: 'Yoldaki olukların', ru: 'Колеи на дороге', pl: 'Koleiny w jezdni' } },
      { id: 'c', text: { de: 'Abgefahrene Reifen', en: 'Worn tyres', ar: 'إطارات بالية', tr: 'Aşınmış lastikler', ru: 'Изношенные шины', pl: 'Zużyte opony' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Aquaplaning entsteht durch hohes Tempo, Spurrillen oder zu wenig Profil.',
      en: 'Aquaplaning is caused by high speed, ruts in the road and worn tread.',
      ar: 'الانزلاق المائي ينتج عن السرعة العالية والأخاديد والإطارات البالية.',
      tr: 'Akuaplan, yüksek hız, oluklar ve aşınmış lastikten kaynaklanır.',
      ru: 'Аквапланирование возникает из-за высокой скорости, колей и износа шин.',
      pl: 'Aquaplaning powstaje przy dużej prędkości, koleinach i zużytym bieżniku.'
    }
  },
  {
    id: 'aquaplaning-where',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wo tritt Aquaplaning besonders häufig auf?',
      en: 'Where does aquaplaning occur particularly often?',
      ar: 'أين يحدث الانزلاق المائي بشكل خاص؟',
      tr: 'Akuaplaning özellikle nerede sık olur?',
      ru: 'Где особенно часто бывает аквапланирование?',
      pl: 'Gdzie szczególnie często występuje aquaplaning?'
    },
    options: [
      { id: 'a', text: { de: 'In Spurrillen', en: 'Where there are grooves in the roadway', ar: 'في الأخاديد', tr: 'Tekerlek izlerinde', ru: 'В колеях', pl: 'W koleinach' } },
      { id: 'b', text: { de: 'An Bahnübergängen', en: 'At level crossings', ar: 'في تقاطعات السكك', tr: 'Hemzemin geçitlerde', ru: 'На железнодорожных переездах', pl: 'Na przejazdach kolejowych' } },
      { id: 'c', text: { de: 'In Senken der Fahrbahn', en: 'In dips in the roadway', ar: 'في انخفاضات الطريق', tr: 'Yoldaki çukurlarda', ru: 'В понижениях дороги', pl: 'W zagłębieniach jezdni' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'In Spurrillen und Senken sammelt sich Wasser — Aquaplaning droht.',
      en: 'Water collects in ruts and dips — aquaplaning is a real risk.',
      ar: 'يتجمع الماء في الأخاديد والانخفاضات — يخشى الانزلاق المائي.',
      tr: 'Su oluklarda ve çukurlarda birikir — akuaplaning olur.',
      ru: 'В колеях и низинах скапливается вода — высока опасность аквапланирования.',
      pl: 'Woda zbiera się w koleinach i zagłębieniach — duże ryzyko aquaplaningu.'
    }
  },
  {
    id: 'emergency-channel-3lane',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 4,
    question: {
      de: 'Auf einer dreispurigen Autobahn entsteht ein Stau. Wo muss die Rettungsgasse gebildet werden?',
      en: 'A traffic jam forms on a three-lane autobahn. Where must the channel for emergency vehicles be formed?',
      ar: 'تشكّل ازدحام على أوتوبان بثلاثة مسارات. أين يجب تشكيل ممر الطوارئ؟',
      tr: 'Üç şeritli otoyolda tıkanıklık oluşuyor. Acil koridoru nerede oluşturulmalı?',
      ru: 'На трёхполосном автобане возникла пробка. Где формировать аварийный коридор?',
      pl: 'Na trzypasmowej autostradzie tworzy się korek. Gdzie ma powstać korytarz ratunkowy?'
    },
    options: [
      { id: 'a', text: { de: 'Zwischen linker und mittlerer Spur', en: 'Between the left and the middle lanes', ar: 'بين المسار الأيسر والأوسط', tr: 'Sol ve orta şerit arasında', ru: 'Между левой и средней полосой', pl: 'Między pasem lewym a środkowym' } },
      { id: 'b', text: { de: 'Auf dem Standstreifen', en: 'On the hard shoulder', ar: 'على الكتف الصلب', tr: 'Emniyet şeridinde', ru: 'На обочине', pl: 'Na pasie awaryjnym' } },
      { id: 'c', text: { de: 'Zwischen mittlerer und rechter Spur', en: 'Between the middle and right-hand lanes', ar: 'بين الأوسط والأيمن', tr: 'Orta ve sağ şerit arasında', ru: 'Между средней и правой полосой', pl: 'Między pasem środkowym a prawym' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Rettungsgasse: immer zwischen dem äußersten linken und dem nächsten Fahrstreifen.',
      en: 'Always form the emergency lane between the leftmost lane and the next one.',
      ar: 'ممر الطوارئ: دائمًا بين أقصى يسار والمسار المجاور.',
      tr: 'Acil koridor her zaman en sol şeritle bir yanındaki şerit arasındadır.',
      ru: 'Аварийный коридор — всегда между крайней левой и соседней полосой.',
      pl: 'Korytarz ratunkowy zawsze między skrajnym lewym a sąsiednim pasem.'
    }
  },
  {
    id: 'wipers-defect',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Die Scheibenwischer Ihres Autos funktionieren nicht. Was kann die Ursache sein?',
      en: 'The windscreen wipers do not function. What can be the cause?',
      ar: 'لا تعمل المساحات. ما السبب المحتمل؟',
      tr: 'Sileceklerin çalışmıyor. Sebebi ne olabilir?',
      ru: 'Стеклоочистители не работают. Возможная причина?',
      pl: 'Wycieraczki nie działają. Co może być przyczyną?'
    },
    options: [
      { id: 'a', text: { de: 'Zu viel Wasser im Wischwasserbehälter', en: 'Too much water in the windscreen washer', ar: 'ماء أكثر من اللازم في خزان المساحات', tr: 'Cam suyu kabında çok fazla su', ru: 'Слишком много воды в бачке', pl: 'Zbyt dużo wody w zbiorniku spryskiwacza' } },
      { id: 'b', text: { de: 'Wischermotor defekt', en: 'Windscreen wiper motor defective', ar: 'محرك المساحات معطل', tr: 'Silecek motoru arızalı', ru: 'Неисправен моторчик дворников', pl: 'Uszkodzony silnik wycieraczek' } },
      { id: 'c', text: { de: 'Sicherung durchgebrannt', en: 'Blown fuse', ar: 'فيوز محترق', tr: 'Sigorta atmış', ru: 'Перегоревший предохранитель', pl: 'Przepalony bezpiecznik' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Häufig: defekter Motor oder eine durchgebrannte Sicherung.',
      en: 'Typically a faulty motor or a blown fuse.',
      ar: 'في الغالب: محرك معطل أو فيوز محترق.',
      tr: 'Çoğunlukla bozuk motor ya da atmış sigorta.',
      ru: 'Чаще всего: неисправный моторчик или сгоревший предохранитель.',
      pl: 'Najczęściej: uszkodzony silnik lub przepalony bezpiecznik.'
    }
  }
];
