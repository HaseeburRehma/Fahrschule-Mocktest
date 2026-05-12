import type { Question } from './types';

/**
 * Fourth batch — overtaking end, lateral distance, environment, downhill,
 * trailer, headlight flash, child safety, probation, parked/stopping rules,
 * tunnel, exits, dipped headlights reason, accidents and roadworthiness.
 */
export const extraQuestions4: Question[] = [
  {
    id: 'overtaking-end',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 3,
    question: {
      de: 'Wie beenden Sie einen Überholvorgang richtig?',
      en: 'What must you do to end an overtaking manoeuvre?',
      ar: 'كيف تنهي مناورة التجاوز بشكل صحيح؟',
      tr: 'Sollama manevrasını nasıl doğru bitirirsiniz?',
      ru: 'Как правильно завершить обгон?',
      pl: 'Jak prawidłowo zakończyć manewr wyprzedzania?'
    },
    options: [
      { id: 'a', text: { de: 'Direkt vor das überholte Fahrzeug auf die rechte Spur einscheren', en: 'Move right onto the lane right in front of the overtaken vehicle', ar: 'الانتقال يمينًا أمام المركبة التي تم تجاوزها مباشرة', tr: 'Sollanan aracın hemen önüne sağa geçin', ru: 'Перестроиться вправо прямо перед обгоняемым', pl: 'Włączyć się tuż przed wyprzedzonym pojazdem' } },
      { id: 'b', text: { de: 'So bald wie möglich nach rechts einscheren, ohne den Überholten zu behindern', en: 'Move right as soon as possible without inconveniencing the overtaken vehicle', ar: 'العودة لليمين بأسرع ما يمكن دون إعاقة المركبة المُتجاوزة', tr: 'Sollanan aracı engellemeden mümkün olan en kısa sürede sağa geçin', ru: 'Перестроиться вправо как можно скорее, не мешая обгоняемому', pl: 'Wrócić w prawo jak najszybciej, nie utrudniając wyprzedzanemu' } },
      { id: 'c', text: { de: 'Rechtzeitig und deutlich blinken', en: 'Signal in good time and clearly', ar: 'استخدم الإشارة في الوقت المناسب وبوضوح', tr: 'Zamanında ve net şekilde sinyal verin', ru: 'Заранее и чётко включать поворотник', pl: 'Włączyć kierunkowskaz w odpowiednim czasie i wyraźnie' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Rechtzeitig blinken und einscheren, ohne den Überholten zu behindern.',
      en: 'Signal early and pull in without making it hard for the overtaken vehicle.',
      ar: 'استخدم الإشارة باكرًا وعد إلى يمينك دون إزعاج المُتجاوز.',
      tr: 'Erken sinyal verin ve sollanan aracı sıkıştırmadan sağa geçin.',
      ru: 'Заранее сигнал, плавно перестроиться, не мешая обгоняемому.',
      pl: 'Wcześnie zasygnalizuj i wjedź, nie utrudniając wyprzedzanemu.'
    }
  },
  {
    id: 'lateral-distance-bikes',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Welche Fahrzeuge dürfen nur mit besonders großem Seitenabstand überholt werden?',
      en: 'Which vehicles may be overtaken only by maintaining a specially great lateral distance?',
      ar: 'أي المركبات لا يجوز تجاوزها إلا بمسافة جانبية كبيرة جدًا؟',
      tr: 'Hangi araçları yalnızca özellikle geniş yan mesafe bırakarak geçebilirsiniz?',
      ru: 'Какие участники движения могут быть обгоняемы лишь с особенно большим боковым интервалом?',
      pl: 'Które pojazdy wolno wyprzedzać tylko z wyjątkowo dużym odstępem bocznym?'
    },
    options: [
      { id: 'a', text: { de: 'Straßenbahnen', en: 'Trams', ar: 'الترام', tr: 'Tramvaylar', ru: 'Трамваи', pl: 'Tramwaje' } },
      { id: 'b', text: { de: 'Motorräder', en: 'Motorcycles', ar: 'الدراجات النارية', tr: 'Motosikletler', ru: 'Мотоциклы', pl: 'Motocykle' } },
      { id: 'c', text: { de: 'Fahrräder', en: 'Bicycles', ar: 'الدراجات الهوائية', tr: 'Bisikletler', ru: 'Велосипеды', pl: 'Rowery' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Motorräder und Fahrräder brauchen großen Seitenabstand (innerorts mind. 1,5 m, außerorts 2 m).',
      en: 'Motorbikes and bicycles need a wide lateral gap (≥ 1.5 m in town, 2 m outside).',
      ar: 'الدراجات النارية والهوائية تحتاج لمسافة جانبية واسعة (1.5 م داخل المدن، 2 م خارجها).',
      tr: 'Motosiklet ve bisikletlere yerleşim içi ≥ 1,5 m, dışı 2 m yan mesafe gerekir.',
      ru: 'Мотоциклам и велосипедам нужен большой боковой интервал (в городе ≥ 1,5 м, вне города 2 м).',
      pl: 'Motocyklom i rowerom — duży odstęp boczny (w mieście ≥ 1,5 m, poza miastem 2 m).'
    }
  },
  {
    id: 'cold-engine-short-trip',
    category: 'environment',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Warum sind Kurzstrecken mit kaltem Motor besonders umweltschädlich?',
      en: 'Why are short journeys performed with a cold engine especially damaging to the environment?',
      ar: 'لماذا تعتبر الرحلات القصيرة بمحرك بارد ضارة بالبيئة بشكل خاص؟',
      tr: 'Soğuk motorla yapılan kısa yolculuklar neden çevreye özellikle zararlıdır?',
      ru: 'Почему короткие поездки с холодным двигателем особо вредны для природы?',
      pl: 'Dlaczego krótkie trasy z zimnym silnikiem są szczególnie szkodliwe dla środowiska?'
    },
    options: [
      { id: 'a', text: { de: 'Die Batterie wird überladen', en: 'The battery will be over-charged', ar: 'تُشحن البطارية بشكل مفرط', tr: 'Akü aşırı şarj olur', ru: 'АКБ перезаряжается', pl: 'Akumulator zostaje przeładowany' } },
      { id: 'b', text: { de: 'Höherer Kraftstoffverbrauch', en: 'More fuel is consumed', ar: 'استهلاك وقود أعلى', tr: 'Daha çok yakıt tüketilir', ru: 'Расход топлива выше', pl: 'Większe zużycie paliwa' } },
      { id: 'c', text: { de: 'Stärkerer Verschleiß', en: 'Higher level of material wear', ar: 'تآكل أعلى للأجزاء', tr: 'Daha fazla aşınma', ru: 'Сильнее износ', pl: 'Większe zużycie elementów' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Kalter Motor verbraucht mehr Sprit und verschleißt schneller — zu Fuß oder Fahrrad nutzen.',
      en: 'A cold engine uses more fuel and wears out faster — walk or cycle instead.',
      ar: 'المحرك البارد يستهلك وقودًا أكثر وتآكلاً أسرع — اختر المشي أو الدراجة.',
      tr: 'Soğuk motor daha çok yakar ve daha fazla aşınır — yürüyüş veya bisiklet tercih edin.',
      ru: 'Холодный мотор расходует больше топлива и быстрее изнашивается — лучше пешком/велосипедом.',
      pl: 'Zimny silnik zużywa więcej paliwa i szybciej się zużywa — pieszo lub rowerem.'
    }
  },
  {
    id: 'trailer-no-brakes-downhill',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie ziehen einen ungebremsten Anhänger und nähern sich einem langen, steilen Gefälle. Was ist richtig?',
      en: 'You are towing an unbraked trailer and approach a long, steep downhill slope. What is correct?',
      ar: 'تسحب مقطورة بدون فرامل وتقترب من منحدر طويل وحاد. ما هو الصحيح؟',
      tr: 'Freni olmayan bir römork çekiyorsunuz ve uzun ve dik bir inişe yaklaşıyorsunuz. Doğrusu nedir?',
      ru: 'Тащите прицеп без тормозов и подъезжаете к длинному крутому спуску. Что правильно?',
      pl: 'Holujesz przyczepę bez hamulców i zbliżasz się do długiego, stromego zjazdu. Co jest poprawne?'
    },
    options: [
      { id: 'a', text: { de: 'Bremsen entlasten, indem Kupplung häufig getreten wird', en: 'Relieve brakes by frequently using the clutch', ar: 'تخفيف الفرامل بضغط الدبرياج كثيرًا', tr: 'Sık sık debriyaja basarak frenleri rahatlatın', ru: 'Снимать нагрузку с тормозов, часто выжимая сцепление', pl: 'Odciążać hamulce, często wciskając sprzęgło' } },
      { id: 'b', text: { de: 'Mit der Schubwirkung des Anhängers rechnen', en: 'Allow for the pushing effect of the trailer', ar: 'احتسب قوة دفع المقطورة', tr: 'Römorkun itme etkisini hesaba katın', ru: 'Учитывать толкающую силу прицепа', pl: 'Uwzględnić siłę popychającą przyczepy' } },
      { id: 'c', text: { de: 'Geschwindigkeit reduzieren, rechtzeitig in einen niedrigen Gang schalten, bremsbereit sein', en: 'Reduce speed, engage a low gear in time, be ready to brake', ar: 'خفف السرعة، انتقل لترس منخفض مبكرًا، كن جاهزًا للفرملة', tr: 'Hızı düşürün, zamanında düşük vites kullanın, frene hazır olun', ru: 'Снижать скорость, заблаговременно низкая передача, быть готовым тормозить', pl: 'Zmniejszyć prędkość, w porę niski bieg, gotowość do hamowania' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Ungebremster Anhänger schiebt — Motorbremse nutzen, vorausschauend bremsen.',
      en: 'An unbraked trailer pushes you — use engine braking, anticipate.',
      ar: 'المقطورة بدون فرامل تدفع السيارة — استخدم فرملة المحرك واستبق.',
      tr: 'Frensiz römork iter — motor freni kullanın, öngörülü olun.',
      ru: 'Прицеп без тормозов толкает — используйте торможение двигателем.',
      pl: 'Niehamowana przyczepa popycha — wykorzystaj hamowanie silnikiem, przewiduj.'
    }
  },
  {
    id: 'clutch-downhill-avoid',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Warum sollten Sie auf langem steilem Gefälle nicht mit getretener Kupplung fahren?',
      en: 'Why should you not apply the clutch when driving on a long, steep downhill slope?',
      ar: 'لماذا لا يجب القيادة على منحدر طويل والدبرياج مضغوط؟',
      tr: 'Uzun ve dik inişte neden debriyaja basılı durmamalısınız?',
      ru: 'Почему нельзя ехать с выжатым сцеплением по длинному спуску?',
      pl: 'Dlaczego nie należy jechać długim, stromym zjazdem z wciśniętym sprzęgłem?'
    },
    options: [
      { id: 'a', text: { de: 'Die Motorbremse wirkt dann nicht', en: 'The braking effect of the engine has no effect', ar: 'لن تعمل فرملة المحرك', tr: 'Motor freni etki etmez', ru: 'Не работает торможение двигателем', pl: 'Hamowanie silnikiem nie działa' } },
      { id: 'b', text: { de: 'Der Bremskraftverstärker fällt aus', en: 'The brake servo unit fails', ar: 'مضخم الفرامل لن يعمل', tr: 'Fren takviyesi devre dışı kalır', ru: 'Отказывает усилитель тормозов', pl: 'Wspomaganie hamulca przestaje działać' } },
      { id: 'c', text: { de: 'Es führt zu unnötigem Verschleiß der Bremsen', en: 'This causes unnecessary wear of the brakes', ar: 'يسبب تآكل الفرامل بلا داعٍ', tr: 'Frenler gereksiz aşınır', ru: 'Это вызывает износ тормозов', pl: 'Powoduje zbędne zużycie hamulców' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Kupplung treten = keine Motorbremse → Bremsen heißen → schnellere Abnutzung und Versagen.',
      en: 'With clutch in, no engine braking → brakes overheat → wear and possible fade.',
      ar: 'الدبرياج مضغوط = لا فرملة محرك → الفرامل تسخن وتتآكل.',
      tr: 'Debriyaj basılıyken motor freni yok → frenler ısınır ve aşınır.',
      ru: 'Сцепление выжато — нет торможения мотором → перегрев и износ тормозов.',
      pl: 'Wciśnięte sprzęgło = brak hamowania silnikiem → hamulce się przegrzewają i zużywają.'
    }
  },
  {
    id: 'overtake-cyclists',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Sie wollen Radfahrer überholen. Was beachten Sie bei der Wahl des Abstands?',
      en: 'You want to overtake cyclists. What should be noted when selecting the distance to them?',
      ar: 'تريد تجاوز راكبي الدراجات. ما الذي تراعيه عند اختيار المسافة؟',
      tr: 'Bisikletlileri sollayacaksınız. Mesafeyi seçerken nelere dikkat etmelisiniz?',
      ru: 'Хотите обогнать велосипедиста. Что учитывать при выборе дистанции?',
      pl: 'Chcesz wyprzedzić rowerzystów. Co uwzględnić przy wyborze odstępu?'
    },
    options: [
      { id: 'a', text: { de: '1,0 m sind immer ausreichend', en: '1.0 m is always sufficient', ar: '1.0 م كافية دائمًا', tr: '1,0 m her zaman yeterli', ru: '1,0 м всегда достаточно', pl: '1,0 m zawsze wystarcza' } },
      { id: 'b', text: { de: 'Die Geschwindigkeit meines Fahrzeugs', en: 'The speed of my vehicle', ar: 'سرعة مركبتي', tr: 'Aracımın hızı', ru: 'Скорость моего автомобиля', pl: 'Prędkość mojego pojazdu' } },
      { id: 'c', text: { de: 'Wie sich die Radfahrer verhalten', en: 'How the cyclists are acting', ar: 'كيف يتصرف راكبو الدراجات', tr: 'Bisikletlilerin davranışı', ru: 'Поведение велосипедистов', pl: 'Jak zachowują się rowerzyści' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Mindestens 1,5 m (innerorts) bzw. 2,0 m (außerorts) — Geschwindigkeit und Radfahrerverhalten beachten.',
      en: 'At least 1.5 m in town, 2 m outside — speed and rider behaviour matter.',
      ar: '1.5 م على الأقل داخل المدن و2 م خارجها — مع مراعاة السرعة وتصرف الراكب.',
      tr: 'Şehir içi en az 1,5 m, dışı 2 m — hız ve bisikletlinin davranışı önemli.',
      ru: 'Минимум 1,5 м в городе и 2 м вне города — учитывая скорость и поведение велосипедиста.',
      pl: 'Co najmniej 1,5 m w mieście, 2 m poza nim — z uwzględnieniem prędkości i zachowania rowerzysty.'
    }
  },
  {
    id: 'new-owner',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Sie sind neuer Halter eines zugelassenen Fahrzeugs. Was müssen Sie tun?',
      en: 'You are the new owner of a licensed vehicle. What do you have to do?',
      ar: 'أنت المالك الجديد لمركبة مسجّلة. ماذا يجب أن تفعل؟',
      tr: 'Tescilli bir aracın yeni sahibi oldunuz. Ne yapmalısınız?',
      ru: 'Вы новый владелец зарегистрированного автомобиля. Что обязаны сделать?',
      pl: 'Jesteś nowym właścicielem zarejestrowanego pojazdu. Co musisz zrobić?'
    },
    options: [
      { id: 'a', text: { de: 'Den Halterwechsel der Zulassungsstelle melden', en: 'Notify the licensing authority of the change in ownership', ar: 'إبلاغ سلطة التسجيل بتغيّر المالك', tr: 'Tescil idaresine sahip değişikliğini bildirmek', ru: 'Уведомить регистрационный орган о смене владельца', pl: 'Zgłosić zmianę właściciela w wydziale komunikacji' } },
      { id: 'b', text: { de: 'Sofort eine Hauptuntersuchung durchführen lassen', en: 'Have a roadworthiness test done immediately', ar: 'إجراء فحص فني فوري', tr: 'Hemen muayene yaptırmak', ru: 'Сразу же пройти техосмотр', pl: 'Natychmiast przeprowadzić przegląd techniczny' } },
      { id: 'c', text: { de: 'Nachweis der Haftpflichtversicherung erbringen', en: 'Present proof of liability insurance', ar: 'تقديم إثبات التأمين الإجباري', tr: 'Zorunlu sigorta belgesini sunmak', ru: 'Подтвердить наличие ОСАГО', pl: 'Przedstawić potwierdzenie OC' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Halterwechsel anmelden und eVB-Versicherungsnachweis vorlegen — keine sofortige HU nötig.',
      en: 'Register the ownership change and present insurance proof — no immediate inspection needed.',
      ar: 'سجّل تغيّر المالك وقدّم وثيقة التأمين — لا حاجة لفحص فوري.',
      tr: 'Sahip değişikliğini bildirin ve sigorta belgesini sunun — anında muayene gerekmez.',
      ru: 'Зарегистрировать смену владельца и подтвердить страховку — мгновенный ТО не нужен.',
      pl: 'Zgłoś zmianę właściciela i przedstaw OC — natychmiastowy przegląd nie jest wymagany.'
    }
  },
  {
    id: 'fwd-bend',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie reagiert ein Pkw mit Frontantrieb beim zu starken Gasgeben in der Kurve?',
      en: 'What does a front-wheel-drive car tend to do if you accelerate too much in a bend?',
      ar: 'ماذا يحدث لسيارة بدفع أمامي عند تسريع شديد في منعطف؟',
      tr: 'Önden çekişli araç virajda fazla gaz verirseniz ne yapar?',
      ru: 'Как ведёт себя переднеприводный автомобиль при сильном газе в повороте?',
      pl: 'Co robi auto z napędem na przód, gdy mocno dodasz gazu na zakręcie?'
    },
    options: [
      { id: 'a', text: { de: 'Übersteuern', en: 'Oversteers', ar: 'انحراف زائد', tr: 'Aşırı dönüş yapar', ru: 'Заносит зад', pl: 'Nadsterowny' } },
      { id: 'b', text: { de: 'Die Vorderachse schiebt nach außen (Untersteuern)', en: 'The front end pushes outward (understeer)', ar: 'يدفع الأمام للخارج (تحت توجيه)', tr: 'Ön taşar (yetersiz dönüş)', ru: 'Передок уходит наружу (недостаточная поворачиваемость)', pl: 'Przód znosi na zewnątrz (podsterowność)' } },
      { id: 'c', text: { de: 'Das Heck bricht aus', en: 'The rear breaks out', ar: 'الخلف ينحرف', tr: 'Arka savrulur', ru: 'Заносит корму', pl: 'Tył wpada w poślizg' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Frontantrieb neigt zum Untersteuern — die Vorderräder verlieren Grip.',
      en: 'FWD tends to understeer — the front tyres lose grip.',
      ar: 'الدفع الأمامي يميل إلى تحت التوجيه — العجلات الأمامية تفقد التماسك.',
      tr: 'Önden çekişte ön lastikler tutuş kaybeder — yetersiz dönüş eğilimi.',
      ru: 'Передний привод склонен к недостаточной поворачиваемости — передние шины теряют сцепление.',
      pl: 'Napęd przedni ma tendencję do podsterowności — przednie opony tracą przyczepność.'
    }
  },
  {
    id: 'rwd-bend',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie reagiert ein Pkw mit Heckantrieb beim zu starken Gasgeben in der Kurve?',
      en: 'What does a rear-wheel-drive car tend to do if you accelerate too much in a bend?',
      ar: 'ماذا يحدث لسيارة بدفع خلفي عند تسريع شديد في منعطف؟',
      tr: 'Arkadan çekişli araç virajda fazla gaz verirseniz ne yapar?',
      ru: 'Как ведёт себя заднеприводный автомобиль при сильном газе в повороте?',
      pl: 'Co robi auto z napędem na tył, gdy mocno dodasz gazu na zakręcie?'
    },
    options: [
      { id: 'a', text: { de: 'Die Vorderachse schiebt nach außen', en: 'The front end turns out to the side', ar: 'يدفع الأمام جانبًا', tr: 'Ön taşar', ru: 'Передок уходит наружу', pl: 'Przód znosi na zewnątrz' } },
      { id: 'b', text: { de: 'Das Heck bricht nach außen aus', en: 'The rear breaks out to the side', ar: 'الخلف ينحرف للخارج', tr: 'Arka savrulur', ru: 'Заносит корму наружу', pl: 'Tył wpada w poślizg na zewnątrz' } },
      { id: 'c', text: { de: 'Untersteuern', en: 'Understeer', ar: 'تحت توجيه', tr: 'Yetersiz dönüş', ru: 'Недостаточная поворачиваемость', pl: 'Podsterowność' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Heckantrieb neigt beim Gasgeben zum Übersteuern — Heck bricht aus.',
      en: 'RWD oversteers under power — the rear slides out.',
      ar: 'الدفع الخلفي ينحرف خلفًا عند تسريع كبير.',
      tr: 'Arkadan çekişte gaza basınca arka savrulur.',
      ru: 'Задний привод склонен к избыточной поворачиваемости — корму уносит.',
      pl: 'Napęd tylny przy mocnym gazie nadsterowny — tył wypada na zewnątrz.'
    }
  },
  {
    id: 'tunnel-driving-attention',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Worauf müssen Sie besonders achten, wenn Sie durch einen Tunnel fahren?',
      en: 'What must you observe particularly when driving through a tunnel?',
      ar: 'ما الذي يجب الانتباه إليه بشكل خاص عند المرور بنفق؟',
      tr: 'Tünelden geçerken nelere özellikle dikkat etmelisiniz?',
      ru: 'На что особенно обращать внимание в туннеле?',
      pl: 'Na co szczególnie zwrócić uwagę przejeżdżając przez tunel?'
    },
    options: [
      { id: 'a', text: { de: 'Hinweise auf Notausgänge und Notrufstationen', en: 'Signs for emergency exits and telephones', ar: 'لافتات المخارج والهواتف الطارئة', tr: 'Acil çıkış ve telefon işaretleri', ru: 'Указатели аварийных выходов и телефонов', pl: 'Oznakowanie wyjść awaryjnych i telefonów' } },
      { id: 'b', text: { de: 'Mögliche Ablenkung durch Lichteffekte', en: 'Possible distraction from light effects', ar: 'احتمال التشتت بسبب تأثيرات الضوء', tr: 'Işık etkilerinden dikkat dağılması', ru: 'Возможные отвлечения светом', pl: 'Możliwe rozproszenie efektami świetlnymi' } },
      { id: 'c', text: { de: 'Mögliche Ablenkung durch sehr laute Geräusche', en: 'Possible distraction from very loud noise', ar: 'احتمال التشتت بسبب ضجيج عالٍ', tr: 'Yüksek sesten dikkat dağılması', ru: 'Возможные отвлечения шумом', pl: 'Możliwe rozproszenie głośnym hałasem' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Auf Sicherheitseinrichtungen achten und sich nicht von Licht und Lärm ablenken lassen.',
      en: 'Watch the safety installations and don\'t let light or noise distract you.',
      ar: 'انتبه لتجهيزات السلامة ولا تدع الضوء أو الضجيج يلهيانك.',
      tr: 'Güvenlik tesislerine bakın, ışık ve sesin dikkatinizi dağıtmasına izin vermeyin.',
      ru: 'Следите за устройствами безопасности, не отвлекайтесь на свет и шум.',
      pl: 'Zwracaj uwagę na urządzenia bezpieczeństwa i nie rozpraszaj się światłem ani hałasem.'
    }
  },
  {
    id: 'motorway-exit-120',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie verlassen nach längerer Fahrt mit etwa 120 km/h die Autobahn. Was beachten Sie?',
      en: 'After a long journey at about 120 km/h you want to exit the motorway. What must you be aware of?',
      ar: 'بعد قيادة طويلة بسرعة 120 كم/س تنوي مغادرة الأوتوبان. ماذا يجب أن تنتبه له؟',
      tr: 'Yaklaşık 120 km/s ile uzun bir yolculuk sonrası otoyoldan çıkacaksınız. Nelere dikkat etmelisiniz?',
      ru: 'После долгой поездки при 120 км/ч вы съезжаете с автобана. На что обратить внимание?',
      pl: 'Po długiej jeździe przy 120 km/h zjeżdżasz z autostrady. Na co zwrócić uwagę?'
    },
    options: [
      { id: 'a', text: { de: 'Tachometer prüfen, um Geschwindigkeit nicht zu unterschätzen', en: 'Check the speedometer so as not to underestimate speed', ar: 'تحقق من العداد كي لا تستهين بالسرعة', tr: 'Hız göstergesini kontrol edin, hızı küçümsemeyin', ru: 'Смотреть на спидометр, чтобы не недооценивать скорость', pl: 'Sprawdzić prędkościomierz, by nie zaniżać prędkości' } },
      { id: 'b', text: { de: 'Geschwindigkeit auf der Ausfahrt halten', en: 'Maintain your speed while on the exit lane', ar: 'الإبقاء على السرعة على المخرج', tr: 'Çıkış şeridinde hızı koruyun', ru: 'Сохранять скорость на съезде', pl: 'Utrzymywać prędkość na pasie zjazdu' } },
      { id: 'c', text: { de: 'Frühzeitig blinken und auf der Ausfahrt abbremsen', en: 'Signal in good time and brake on the exit lane', ar: 'استخدم الإشارة مبكرًا وفرمل على المخرج', tr: 'Erken sinyal verin, çıkış şeridinde frenleyin', ru: 'Заранее сигнал, тормозить на съезде', pl: 'Wcześnie zasygnalizować i hamować na pasie zjazdu' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Nach langer Autobahnfahrt fühlt sich 80 km/h "langsam" an — auf den Tacho schauen und erst auf der Ausfahrt bremsen.',
      en: 'After a long stretch at high speed, 80 km/h feels slow — check the speedo and only brake on the exit lane.',
      ar: 'بعد سفر طويل سريع تبدو 80 كم/س بطيئة — راقب العداد ولا تفرمل إلا على المخرج.',
      tr: 'Uzun süre hızlı sürdükten sonra 80 km/s yavaş gelir — göstergeye bakın ve çıkış şeridinde frenleyin.',
      ru: 'После долгой быстрой езды 80 км/ч кажется медленной — следите за спидометром, тормозите на съезде.',
      pl: 'Po długiej szybkiej jeździe 80 km/h wydaje się wolne — patrz na prędkościomierz, hamuj na pasie zjazdu.'
    }
  },
  {
    id: 'main-beam-dip',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Sie fahren bei Dunkelheit mit Fernlicht. Wann müssen Sie abblenden?',
      en: 'You are driving with main beam at night. When must you dip your headlights?',
      ar: 'تقود ليلًا بالضوء العالي. متى يجب التحويل إلى الضوء المنخفض؟',
      tr: 'Geceleri uzun farla gidiyorsunuz. Ne zaman kısa hüzmeye geçmelisiniz?',
      ru: 'Ночью с дальним светом. Когда переключаться на ближний?',
      pl: 'Jedziesz nocą z drogowymi. Kiedy przełączyć na mijania?'
    },
    options: [
      { id: 'a', text: { de: 'Wenn ein Fahrzeug dicht voraus fährt', en: 'When a vehicle is driving close in front', ar: 'عند وجود مركبة قريبة أمامك', tr: 'Önünüzde yakın bir araç olduğunda', ru: 'Когда впереди близко движется автомобиль', pl: 'Gdy pojazd jedzie blisko z przodu' } },
      { id: 'b', text: { de: 'Wenn Fußgänger in gleicher Richtung gehen', en: 'When pedestrians walk in the same direction', ar: 'عند وجود مشاة في الاتجاه نفسه', tr: 'Aynı yönde yayalar varsa', ru: 'Когда впереди идут пешеходы в одном направлении', pl: 'Gdy piesi idą w tym samym kierunku' } },
      { id: 'c', text: { de: 'Wenn ein Fahrzeug entgegenkommt', en: 'When a vehicle is oncoming', ar: 'عند وجود مركبة قادمة من الأمام', tr: 'Karşıdan araç geldiğinde', ru: 'Когда есть встречный автомобиль', pl: 'Gdy nadjeżdża pojazd z naprzeciwka' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Bei Gegenverkehr oder direkt vorausfahrenden Fahrzeugen abblenden.',
      en: 'Dip the lights for oncoming vehicles or those close in front of you.',
      ar: 'استخدم الضوء المنخفض مع القادم أو القريب أمامك.',
      tr: 'Karşıdan gelen veya önünüzde yakın araç varsa kısa hüzmeye geçin.',
      ru: 'Переключайтесь на ближний при встречке или близкой машине впереди.',
      pl: 'Przyciemnij światła przy nadjeżdżających lub blisko z przodu.'
    }
  },
  {
    id: 'rear-passengers-belt',
    category: 'firstAid',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Warum ist es gefährlich, wenn Fondpassagiere keine Gurte tragen?',
      en: 'Why is it dangerous if passengers in the rear do not wear seatbelts?',
      ar: 'لماذا يعدّ خطرًا عدم ربط حزام الركاب في المقعد الخلفي؟',
      tr: 'Arka koltuk yolcuları kemer takmazsa neden tehlikelidir?',
      ru: 'Почему опасно, если задние пассажиры без ремней?',
      pl: 'Dlaczego niebezpieczne jest, gdy pasażerowie z tyłu nie zapinają pasów?'
    },
    options: [
      { id: 'a', text: { de: 'Sie können aus dem Fahrzeug geschleudert werden', en: 'They could be propelled from the vehicle', ar: 'قد يُقذفون خارج السيارة', tr: 'Araçtan fırlayabilirler', ru: 'Их может выбросить из машины', pl: 'Mogą zostać wyrzuceni z pojazdu' } },
      { id: 'b', text: { de: 'Verletzungen schon bei geringer Geschwindigkeit', en: 'Injuries even at low speeds', ar: 'إصابات حتى عند سرعات منخفضة', tr: 'Düşük hızda bile yaralanma', ru: 'Травмы возможны даже при низкой скорости', pl: 'Obrażenia nawet przy małej prędkości' } },
      { id: 'c', text: { de: 'Verletzungen der Insassen auf den Vordersitzen', en: 'Injuries to persons in the front seats', ar: 'إصابات لركاب المقاعد الأمامية', tr: 'Ön koltuktakilere zarar', ru: 'Травмы передних пассажиров', pl: 'Urazy osób siedzących z przodu' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Ungesicherte Passagiere werden im Crash zum Geschoss — Gefahr für sich selbst und Vorne sitzende.',
      en: 'Unbelted passengers become projectiles in a crash — risk for themselves and front-seat occupants.',
      ar: 'الركاب بدون حزام يصبحون كقذائف في الحادث — يعرّضون أنفسهم والركاب الأماميين للخطر.',
      tr: 'Kemer takmayan yolcular kazada mermi gibi olur — kendileri ve öndekiler için risk.',
      ru: 'Без ремня пассажиры — как снаряд: опасны и себе, и передним.',
      pl: 'Pasażerowie bez pasów stają się pociskami — zagrożenie dla siebie i siedzących z przodu.'
    }
  },
  {
    id: 'car-pulls-left',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Ihr Auto zieht beim Fahren ständig nach links. Was kann die Ursache sein?',
      en: 'While driving, your car constantly pulls to the left. What could be the cause?',
      ar: 'سيارتك تسحب نحو اليسار باستمرار. ما السبب المحتمل؟',
      tr: 'Aracınız sürekli sola çekiyor. Sebebi ne olabilir?',
      ru: 'Автомобиль постоянно уводит влево. Возможная причина?',
      pl: 'Pojazd stale ściąga w lewo. Co może być przyczyną?'
    },
    options: [
      { id: 'a', text: { de: 'Falsche Achsvermessung vorne (Spur, Sturz)', en: 'Incorrect wheel adjustment at the front axle (track, camber)', ar: 'ضبط الميلان الأمامي خاطئ', tr: 'Ön akslar hatalı (toe, kamber)', ru: 'Неправильный сход/развал передних колёс', pl: 'Niewłaściwa zbieżność/pochylenie przednich kół' } },
      { id: 'b', text: { de: 'Zu wenig Luft im linken Vorderreifen', en: 'Too little air in the front left tyre', ar: 'ضغط هواء منخفض في الإطار الأمامي الأيسر', tr: 'Sol ön lastikte hava az', ru: 'Низкое давление в переднем левом колесе', pl: 'Za niskie ciśnienie w lewej przedniej oponie' } },
      { id: 'c', text: { de: 'Linker Hinterreifen stark abgefahren', en: 'The left rear tyre is extensively worn', ar: 'الإطار الخلفي الأيسر بالٍ', tr: 'Sol arka lastik aşırı aşınmış', ru: 'Сильно изношен задний левый', pl: 'Lewa tylna opona mocno zużyta' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Falsche Spur/Sturz oder zu wenig Luft im Vorderreifen ziehen das Auto seitwärts.',
      en: 'Bad alignment or low tyre pressure on the front pull the car sideways.',
      ar: 'سوء الميلان أو نقص الهواء يجذب السيارة جانبًا.',
      tr: 'Hatalı hizalama veya ön lastikte düşük basınç aracı yana çeker.',
      ru: 'Сбитый сход или низкое давление в переднем колесе уводят машину в сторону.',
      pl: 'Zła geometria lub niskie ciśnienie z przodu znoszą pojazd w bok.'
    }
  },
  {
    id: 'probation-failed-seminar',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Nach mehreren Verstößen in der Probezeit wird ein Aufbauseminar angeordnet. Der Fahrer nimmt nicht teil. Womit muss er rechnen?',
      en: 'After multiple violations during the probationary period, an advanced seminar is ordered. The driver fails to comply. What may he expect?',
      ar: 'بعد عدة مخالفات في فترة الاختبار، يُؤمر بحضور دورة. لم يلتزم. ما الذي يتوقع؟',
      tr: 'Adaylık döneminde birkaç ihlal sonrası ileri seminer emredilir. Sürücü uymaz. Ne bekleyebilir?',
      ru: 'После нескольких нарушений в испытательный период назначен семинар. Водитель не явился. Что его ждёт?',
      pl: 'Po kilku wykroczeniach w okresie próbnym wezwano na seminarium. Kierowca nie stawił się. Czego się może spodziewać?'
    },
    options: [
      { id: 'a', text: { de: 'Entziehung der Fahrerlaubnis', en: 'The withdrawal of the driving licence', ar: 'سحب رخصة القيادة', tr: 'Sürücü belgesinin geri alınması', ru: 'Лишение прав', pl: 'Cofnięcie prawa jazdy' } },
      { id: 'b', text: { de: 'Bußgeldbescheid', en: 'A public fine notice', ar: 'إشعار غرامة', tr: 'Para cezası tebliği', ru: 'Уведомление о штрафе', pl: 'Mandat karny' } },
      { id: 'c', text: { de: 'Mehr Punkte im FAER', en: 'Additional points in the central register', ar: 'نقاط إضافية في السجل', tr: 'Sicilde ek puanlar', ru: 'Дополнительные баллы в реестре', pl: 'Dodatkowe punkty w rejestrze' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Wer das angeordnete Aufbauseminar nicht besucht, dem wird die Fahrerlaubnis entzogen.',
      en: 'Failing to attend the ordered advanced seminar leads to licence withdrawal.',
      ar: 'عدم حضور الدورة المأمور بها يؤدي إلى سحب الرخصة.',
      tr: 'Emredilen seminere katılmamak ehliyetin alınmasıyla sonuçlanır.',
      ru: 'Неявка на назначенный семинар — лишение прав.',
      pl: 'Niestawienie się na seminarium kończy się odebraniem prawa jazdy.'
    }
  },
  {
    id: 'probation-period-2y',
    category: 'alcohol',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 1,
    question: {
      de: 'Wie lange dauert die Probezeit (Fahranfänger) in der Regel?',
      en: 'What is the normal trial period for new drivers?',
      ar: 'كم تستغرق فترة الاختبار عادةً للسائقين الجدد؟',
      tr: 'Yeni sürücüler için olağan adaylık süresi ne kadardır?',
      ru: 'Сколько обычно длится испытательный период для новых водителей?',
      pl: 'Ile zwykle trwa okres próbny dla nowych kierowców?'
    },
    options: [
      { id: 'a', text: { de: '2 Jahre', en: '2 years', ar: 'سنتان', tr: '2 yıl', ru: '2 года', pl: '2 lata' } },
      { id: 'b', text: { de: '1 Jahr', en: '1 year', ar: 'سنة', tr: '1 yıl', ru: '1 год', pl: '1 rok' } },
      { id: 'c', text: { de: '5 Jahre', en: '5 years', ar: '5 سنوات', tr: '5 yıl', ru: '5 лет', pl: '5 lat' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Die Probezeit beträgt regulär 2 Jahre.',
      en: 'The probationary period is normally 2 years.',
      ar: 'فترة الاختبار عادةً سنتان.',
      tr: 'Adaylık süresi normalde 2 yıldır.',
      ru: 'Испытательный период — 2 года.',
      pl: 'Okres próbny to zwykle 2 lata.'
    }
  },
  {
    id: 'who-is-parked',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wer parkt?',
      en: 'Who is considered to be parked?',
      ar: 'من يُعتبر راكنًا؟',
      tr: 'Kim park etmiş sayılır?',
      ru: 'Кто считается припаркованным?',
      pl: 'Kogo uznaje się za parkującego?'
    },
    options: [
      { id: 'a', text: { de: 'Wer länger als 3 Minuten an geschlossenen Bahnschranken hält', en: 'Anyone who waits longer than 3 minutes at closed level crossing barriers', ar: 'من ينتظر أكثر من 3 دقائق عند حواجز سكك مغلقة', tr: 'Kapalı bariyerde 3 dakikadan uzun süre bekleyen', ru: 'Кто ждёт больше 3 минут у закрытого шлагбаума', pl: 'Kto czeka dłużej niż 3 minuty przy zamkniętym przejeździe' } },
      { id: 'b', text: { de: 'Wer länger als 3 Minuten hält', en: 'Anyone who stops for more than 3 minutes', ar: 'من يقف أكثر من 3 دقائق', tr: '3 dakikadan fazla duran', ru: 'Кто стоит более 3 минут', pl: 'Kto zatrzymuje się dłużej niż 3 minuty' } },
      { id: 'c', text: { de: 'Wer sein Fahrzeug verlässt', en: 'Anyone who leaves the vehicle', ar: 'من يغادر مركبته', tr: 'Aracını terk eden', ru: 'Кто покидает автомобиль', pl: 'Kto opuszcza pojazd' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Parken: Halten länger als 3 Minuten oder Verlassen des Fahrzeugs.',
      en: 'Parking = stopping for more than 3 minutes or leaving the vehicle.',
      ar: 'الركن = الوقوف لأكثر من 3 دقائق أو مغادرة السيارة.',
      tr: 'Park = 3 dakikadan fazla durma veya aracı terk etme.',
      ru: 'Стоянка = остановка более 3 мин или оставление машины.',
      pl: 'Parkowanie = postój dłuższy niż 3 minuty lub opuszczenie pojazdu.'
    }
  },
  {
    id: 'two-axle-trailer-changes',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Was ändert sich am Pkw, wenn ein zweiachsiger Anhänger gezogen wird?',
      en: 'What changes in a car when towing a two-axle trailer?',
      ar: 'ما الذي يتغير في السيارة عند سحب مقطورة بمحورين؟',
      tr: 'İki dingilli römork çekildiğinde otomobilde neler değişir?',
      ru: 'Что меняется при буксировке двухосного прицепа?',
      pl: 'Co się zmienia w samochodzie przy holowaniu dwuosiowej przyczepy?'
    },
    options: [
      { id: 'a', text: { de: 'Beschleunigung wird geringer', en: 'Acceleration capacity is reduced', ar: 'تقل قدرة التسارع', tr: 'Hızlanma kapasitesi azalır', ru: 'Падает разгонная динамика', pl: 'Spada przyspieszenie' } },
      { id: 'b', text: { de: 'Mehr Platzbedarf beim Abbiegen und Kurvenfahren', en: 'More space is needed for turning and cornering', ar: 'مساحة أوسع للالتفاف', tr: 'Dönüş ve virajda daha çok yer gerekir', ru: 'Нужно больше места на поворотах', pl: 'Wymaga więcej miejsca przy skręcaniu i pokonywaniu zakrętów' } },
      { id: 'c', text: { de: 'Fahrstabilität nimmt zu', en: 'Driving stability increases', ar: 'تزداد ثبات القيادة', tr: 'Sürüş stabilitesi artar', ru: 'Устойчивость растёт', pl: 'Stabilność jazdy wzrasta' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Mit Anhänger: schlechter Beschleunigen, mehr Platzbedarf, geringere Stabilität.',
      en: 'With a trailer: weaker acceleration, more space, lower stability.',
      ar: 'مع المقطورة: تسارع أبطأ، مساحة أكبر، ثبات أقل.',
      tr: 'Römorklu: daha zayıf ivme, daha çok yer, daha az stabilite.',
      ru: 'С прицепом: хуже разгон, больше места, ниже устойчивость.',
      pl: 'Z przyczepą: słabsze przyspieszenie, więcej miejsca, niższa stabilność.'
    }
  },
  {
    id: 'downhill-incline-gear',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 2,
    question: {
      de: 'Wie fahren Sie ein Gefälle sicher? Sie nehmen den Fuß vom Gas und …',
      en: 'How do you pass through a downhill slope safely? You take your foot off the accelerator and …',
      ar: 'كيف تنزل المنحدر بأمان؟ ترفع قدمك عن الوقود و…',
      tr: 'İnişten güvenle nasıl geçilir? Ayağınızı gazdan çekip…',
      ru: 'Как безопасно ехать вниз? Снимаете ногу с газа и …',
      pl: 'Jak bezpiecznie zjechać? Odejmij stopę od gazu i…'
    },
    options: [
      { id: 'a', text: { de: 'Zündung ausschalten', en: 'Switch off the ignition', ar: 'إطفاء الإشعال', tr: 'Kontağı kapatın', ru: 'Выключите зажигание', pl: 'Wyłączyć zapłon' } },
      { id: 'b', text: { de: 'In den Leerlauf rollen', en: 'Roll in neutral', ar: 'القيادة على الفاضي', tr: 'Boşa alın', ru: 'Катиться в нейтрали', pl: 'Toczyć się na luzie' } },
      { id: 'c', text: { de: 'Einen Gang wählen, in dem Sie kaum bremsen müssen', en: 'Select a gear in which you barely need to brake', ar: 'اختر ترسًا لا يحتاج فرملة كثيرة', tr: 'Az fren gerektiren bir vites seçin', ru: 'Включите передачу, чтобы почти не тормозить', pl: 'Wybrać bieg, który nie wymaga mocnego hamowania' } }
    ],
    correctIds: ['c'],
    explanation: {
      de: 'Mit niedrigem Gang nutzen Sie die Motorbremse — Zündung aus oder Leerlauf ist gefährlich (Bremskraftverstärker/Servo!).',
      en: 'A low gear uses engine braking — ignition off or neutral is dangerous (loses brake servo/steering assist).',
      ar: 'استخدم ترسًا منخفضًا للاستفادة من فرملة المحرك — إطفاء الإشعال أو الحياد خطر.',
      tr: 'Düşük vites motor frenini kullanır — kontağı kapatmak veya boşa almak tehlikelidir.',
      ru: 'Низкая передача — торможение мотором; выключение зажигания или нейтраль опасны.',
      pl: 'Niski bieg = hamowanie silnikiem; wyłączony zapłon lub luz jest groźny.'
    }
  },
  {
    id: 'steering-wobble',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Das Lenkrad Ihres Autos schlägt während der Fahrt. Welche Ursachen kommen infrage?',
      en: 'Your car\'s steering wheel wobbles while driving. What can be the reason?',
      ar: 'يهتز المقود أثناء القيادة. ما الأسباب المحتملة؟',
      tr: 'Sürerken direksiyon titreşiyor. Nedenleri ne olabilir?',
      ru: 'Руль бьёт при движении. Возможные причины?',
      pl: 'Kierownica drga podczas jazdy. Co może być przyczyną?'
    },
    options: [
      { id: 'a', text: { de: 'Räder sind nicht ausgewuchtet', en: 'Wheels are unbalanced', ar: 'العجلات غير متوازنة', tr: 'Tekerlekler dengesizdir', ru: 'Колёса не сбалансированы', pl: 'Niewyważone koła' } },
      { id: 'b', text: { de: 'Stoßdämpfer defekt', en: 'Shock absorbers are defective', ar: 'مخمدات الصدمات تالفة', tr: 'Amortisörler bozuk', ru: 'Неисправны амортизаторы', pl: 'Uszkodzone amortyzatory' } },
      { id: 'c', text: { de: 'Federbein beschädigt', en: 'Wheel suspension spring is damaged', ar: 'نابض المعلق تالف', tr: 'Süspansiyon yayı bozuk', ru: 'Поломка стойки/пружины подвески', pl: 'Uszkodzona sprężyna zawieszenia' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Unwuchtige Räder, defekte Stoßdämpfer oder Federn lösen typischen Lenkrad-Flatter aus.',
      en: 'Unbalanced wheels, faulty dampers or springs cause typical steering shimmy.',
      ar: 'عدم توازن العجلات أو تلف المخمدات أو النوابض يسبب الاهتزاز.',
      tr: 'Dengesiz tekerlek, bozuk amortisör veya yay direksiyon titremesi yapar.',
      ru: 'Дисбаланс, неисправные стойки/пружины — типичные причины биения руля.',
      pl: 'Niewyważone koła, uszkodzone amortyzatory lub sprężyny powodują drgania kierownicy.'
    }
  },
  {
    id: 'sudden-dense-fog',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was tun Sie bei plötzlich auftretendem dichten Nebel am Tag?',
      en: 'What must you do on encountering sudden dense fog during the day?',
      ar: 'ماذا تفعل عند مواجهة ضباب كثيف مفاجئ نهارًا؟',
      tr: 'Gündüz aniden yoğun sis bastığında ne yaparsınız?',
      ru: 'Что делать при внезапном плотном тумане днём?',
      pl: 'Co robisz, gdy w dzień nagle pojawi się gęsta mgła?'
    },
    options: [
      { id: 'a', text: { de: 'Abblendlicht einschalten', en: 'Switch on dipped headlights', ar: 'تشغيل الأضواء المنخفضة', tr: 'Kısa farları yakın', ru: 'Включить ближний свет', pl: 'Włączyć światła mijania' } },
      { id: 'b', text: { de: 'Geschwindigkeit sofort der Sicht anpassen', en: 'Immediately adapt speed to visibility', ar: 'تكييف السرعة فورًا مع الرؤية', tr: 'Hızı görüşe göre hemen ayarlayın', ru: 'Сразу подстроить скорость под видимость', pl: 'Natychmiast dostosować prędkość do widoczności' } },
      { id: 'c', text: { de: 'Nur das Standlicht einschalten', en: 'Only switch on parking lights', ar: 'تشغيل أضواء الوقوف فقط', tr: 'Yalnızca park lambasını yakın', ru: 'Включить только габариты', pl: 'Włączyć tylko światła pozycyjne' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Abblendlicht + Geschwindigkeit anpassen. Standlicht reicht nicht.',
      en: 'Dipped beam + adapt speed. Parking lights are not enough.',
      ar: 'الضوء المنخفض + ضبط السرعة. أضواء الوقوف غير كافية.',
      tr: 'Kısa far + hız ayarı. Park lambası yetersizdir.',
      ru: 'Ближний свет + снизить скорость. Габариты не годятся.',
      pl: 'Mijania + dostosować prędkość. Pozycyjne nie wystarczą.'
    }
  },
  {
    id: 'sunken-kerbstone',
    category: 'rightOfWay',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie biegen aus einer Straße mit abgesenktem Bordstein ab. Von links kommt ein Pkw. Was gilt?',
      en: 'You want to turn out of a road with a sunken kerbstone. A car is coming from the left. What applies?',
      ar: 'تخرج من طريق له رصيف منخفض. تأتي سيارة من اليسار. ماذا ينطبق؟',
      tr: 'Bordürü düşük bir yoldan çıkıyorsunuz. Soldan bir araç geliyor. Ne geçerlidir?',
      ru: 'Выезжаете с дороги с пониженным бордюром. Слева едет машина. Что действует?',
      pl: 'Wyjeżdżasz z drogi z opuszczonym krawężnikiem. Z lewej nadjeżdża pojazd. Co obowiązuje?'
    },
    options: [
      { id: 'a', text: { de: 'Regel „rechts vor links"', en: '"Right before left" rule', ar: 'قاعدة "اليمين قبل اليسار"', tr: '"Sağdan gelene yol" kuralı', ru: 'Правило «правый имеет приоритет»', pl: 'Reguła "prawa ręka"' } },
      { id: 'b', text: { de: 'Wer über abgesenkten Bordstein einbiegt, muss warten', en: 'Whoever turns over a sunken kerbstone must wait', ar: 'من ينعطف عبر رصيف منخفض يجب أن ينتظر', tr: 'Düşük bordürü geçerek dönenin yolu vermesi gerekir', ru: 'Кто выезжает через сниженный бордюр, уступает', pl: 'Wyjeżdżający przez opuszczony krawężnik ma ustąpić' } },
      { id: 'c', text: { de: 'Der abgesenkte Bordstein ist für die Vorfahrt unbedeutend', en: 'The sunken kerbstone is of no relevance for priority', ar: 'الرصيف المنخفض لا يؤثر على الأولوية', tr: 'Düşük bordür önceliği etkilemez', ru: 'Сниженный бордюр не влияет на приоритет', pl: 'Opuszczony krawężnik nie ma znaczenia dla pierwszeństwa' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Abgesenkter Bordstein = Grundstücksausfahrt → wartepflichtig.',
      en: 'A sunken kerbstone indicates a property exit → must yield.',
      ar: 'الرصيف المنخفض = خروج من ملكية → يجب الانتظار.',
      tr: 'Düşük bordür mülk çıkışıdır → yol verilmelidir.',
      ru: 'Сниженный бордюр = выезд с участка → уступайте.',
      pl: 'Opuszczony krawężnik = wyjazd z posesji → ustąp pierwszeństwa.'
    }
  },
  {
    id: 'bus-hazard-lights-passengers',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie nähern sich einem im Gegenverkehr an einer Haltestelle stehenden Linienbus mit eingeschaltetem Warnblinker. Womit rechnen Sie?',
      en: 'You approach a regular bus stopped at a stop on the opposite side with hazard lights on. What must you expect?',
      ar: 'تقترب من حافلة نظامية في الاتجاه المعاكس عند موقف بأضواء خطر مشغّلة. ما الذي يجب توقعه؟',
      tr: 'Karşı şeritte durakta dörtlü flaşörlü duran bir hat otobüsüne yaklaşıyorsunuz. Ne beklemelisiniz?',
      ru: 'Вы подъезжаете к рейсовому автобусу на остановке во встречном направлении с включённой «аварийкой». Что ожидать?',
      pl: 'Zbliżasz się do autobusu liniowego stojącego po drugiej stronie na przystanku z włączonymi światłami awaryjnymi. Czego się spodziewać?'
    },
    options: [
      { id: 'a', text: { de: 'Fahrgäste überqueren die Fahrbahn, um den Bus zu erreichen', en: 'Passengers cross the road to catch the bus', ar: 'يعبر الركاب الطريق للوصول إلى الحافلة', tr: 'Yolcular otobüse yetişmek için yolu geçer', ru: 'Пассажиры пересекают дорогу, чтобы сесть в автобус', pl: 'Pasażerowie przechodzą przez jezdnię, by zdążyć na autobus' } },
      { id: 'b', text: { de: 'Fahrgäste überqueren nur, wenn der Warnblinker aus ist', en: 'Passengers cross only after hazard lights are switched off', ar: 'لا يعبرون إلا بعد إطفاء الأضواء', tr: 'Dörtlüler kapanmadan geçmezler', ru: 'Пассажиры пересекают только после выключения «аварийки»', pl: 'Przechodzą dopiero, gdy światła awaryjne zgasną' } },
      { id: 'c', text: { de: 'Aussteigende Fahrgäste überqueren plötzlich die Fahrbahn', en: 'Alighting passengers suddenly cross the road', ar: 'يعبر النازلون فجأة', tr: 'İnen yolcular aniden yolu geçer', ru: 'Выходящие пассажиры внезапно пересекают дорогу', pl: 'Wysiadający pasażerowie nagle przechodzą przez jezdnię' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'An Bushaltestellen mit Warnblinker (Schulbus/Linienbus): Schrittgeschwindigkeit, mit überquerenden Fahrgästen rechnen.',
      en: 'At a bus stop with hazards on (line bus/school bus) drive at walking pace; expect crossing passengers.',
      ar: 'عند الحافلة بأضواء خطر: سرعة المشي وتوقع عبور الركاب.',
      tr: 'Dörtlü flaşörlü otobüste yürüme hızı, yolcuların aniden geçebileceğini bekleyin.',
      ru: 'У автобуса с «аварийкой» ехать со скоростью пешехода, пассажиры могут пересечь дорогу.',
      pl: 'Przy autobusie z awaryjnymi — prędkość pieszego, spodziewaj się pasażerów przechodzących przez jezdnię.'
    }
  },
  {
    id: 'five-year-old-child',
    category: 'firstAid',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Wie dürfen Sie ein fünfjähriges Kind im Auto transportieren?',
      en: 'How are you allowed to transport a five-year-old child in your car?',
      ar: 'كيف يُسمح بنقل طفل بعمر خمس سنوات في السيارة؟',
      tr: 'Beş yaşındaki bir çocuğu otomobilde nasıl taşıyabilirsiniz?',
      ru: 'Как разрешено перевозить пятилетнего ребёнка в машине?',
      pl: 'Jak wolno przewozić pięcioletnie dziecko w samochodzie?'
    },
    options: [
      { id: 'a', text: { de: 'Auf der Rückbank mit Drei-Punkt-Gurt', en: 'In a rear seat with standard 3-point belt', ar: 'في المقعد الخلفي بحزام ثلاثي', tr: 'Arka koltukta üç noktalı kemerle', ru: 'На заднем сиденье с трёхточечным ремнём', pl: 'Na tylnej kanapie z 3-punktowym pasem' } },
      { id: 'b', text: { de: 'In einem geeigneten Kindersitz mit Prüfsiegel', en: 'In a suitable approved child seat with test mark', ar: 'في مقعد طفل معتمد بعلامة فحص', tr: 'Onaylı uygun çocuk koltuğunda', ru: 'В подходящем сертифицированном детском кресле', pl: 'W odpowiednim, atestowanym foteliku dziecięcym' } },
      { id: 'c', text: { de: 'Auf der Rückbank mit Beckengurt', en: 'In a rear seat with lap belt', ar: 'في المقعد الخلفي بحزام الحوض', tr: 'Arka koltukta belden bağlı kemerle', ru: 'На заднем сиденье с поясным ремнём', pl: 'Na tylnej kanapie z pasem biodrowym' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Bis 12 Jahre und < 150 cm: Kindersitz mit ECE-Prüfsiegel.',
      en: 'Under 12 years and below 150 cm: an ECE-approved child seat is required.',
      ar: 'دون 12 سنة وأقل من 150 سم: مقعد طفل بشهادة ECE.',
      tr: '12 yaş altı ve 150 cm altında: ECE onaylı çocuk koltuğu zorunlu.',
      ru: 'Младше 12 лет и ниже 150 см — сертифицированное детское кресло.',
      pl: 'Poniżej 12 lat i 150 cm — wymagany atestowany fotelik dziecięcy.'
    }
  },
  {
    id: 'no-liability-insurance',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was muss geschehen, wenn das Fahrzeug nicht mehr haftpflichtversichert ist?',
      en: 'What is required when your vehicle is no longer covered by motor liability insurance?',
      ar: 'ما المطلوب إذا لم تعد المركبة مؤمنة بتأمين المسؤولية؟',
      tr: 'Aracın trafik sigortası kalmadıysa ne yapılmalıdır?',
      ru: 'Что требуется, если ОСАГО прекратилось?',
      pl: 'Co trzeba zrobić, gdy pojazd nie ma już ważnego OC?'
    },
    options: [
      { id: 'a', text: { de: 'Muss bei der Zulassungsstelle abgemeldet werden', en: 'Must be de-registered at the licensing office', ar: 'يجب إلغاء التسجيل لدى السلطة', tr: 'Tescil idaresinde tescilden düşürülmeli', ru: 'Нужно снять с регистрации', pl: 'Trzeba wyrejestrować w wydziale komunikacji' } },
      { id: 'b', text: { de: 'Darf am öffentlichen Straßenverkehr nicht mehr teilnehmen', en: 'May no longer be used in public traffic', ar: 'لا يجوز استخدامها على الطرق العامة', tr: 'Karayolu trafiğinde kullanılmamalı', ru: 'Запрещено использовать в дорожном движении', pl: 'Nie wolno używać w ruchu publicznym' } },
      { id: 'c', text: { de: 'Reicht eine einfache Mitteilung an die Zulassungsstelle', en: 'A simple notice to the registration office is enough', ar: 'يكفي إخطار بسيط للسلطة', tr: 'Tescil idaresine basit bir bildirim yeterli', ru: 'Достаточно простой записки в орган', pl: 'Wystarczy proste zawiadomienie' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Ohne Haftpflicht: abmelden und nicht mehr fahren.',
      en: 'Without insurance: de-register and don\'t use it on the road.',
      ar: 'بدون تأمين: ألغِ التسجيل ولا تقدها.',
      tr: 'Sigortasız: tescili düşür ve kullanma.',
      ru: 'Без страховки: снять с учёта и не использовать.',
      pl: 'Bez OC — wyrejestruj i nie używaj.'
    }
  },
  {
    id: 'towed-load-definition',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 1,
    question: {
      de: 'Was bezeichnet die Anhängelast?',
      en: 'What is designated as the towed load?',
      ar: 'ماذا يقصد بالحمل المسحوب؟',
      tr: '"Çekilen yük" ne anlama gelir?',
      ru: 'Что обозначает буксируемая нагрузка?',
      pl: 'Co oznacza obciążenie holowane?'
    },
    options: [
      { id: 'a', text: { de: 'Die tatsächlich gezogene Last', en: 'The actual load being towed', ar: 'الحمل المسحوب فعليًا', tr: 'Gerçekten çekilen yük', ru: 'Фактически буксируемая нагрузка', pl: 'Faktycznie holowany ciężar' } },
      { id: 'b', text: { de: 'Die Nutzlast des Anhängers', en: 'The useful load of the trailer', ar: 'الحمولة النافعة للمقطورة', tr: 'Römorkun faydalı yükü', ru: 'Полезная нагрузка прицепа', pl: 'Ładowność przyczepy' } },
      { id: 'c', text: { de: 'Die zulässige Gesamtmasse des Anhängers', en: 'The permissible total mass of the trailer', ar: 'الوزن الإجمالي المسموح للمقطورة', tr: 'Römorkun izinli toplam ağırlığı', ru: 'Разрешённая полная масса прицепа', pl: 'Dopuszczalna masa całkowita przyczepy' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Anhängelast = tatsächlich gezogenes Gewicht (Anhänger + Ladung).',
      en: 'Towed load = the weight actually being pulled (trailer + load).',
      ar: 'الحمل المسحوب = الوزن المسحوب فعلًا (المقطورة + الحمولة).',
      tr: 'Çekilen yük = gerçekte çekilen toplam (römork + yük).',
      ru: 'Буксируемая нагрузка = фактически тянущая масса (прицеп + груз).',
      pl: 'Obciążenie holowane = rzeczywista masa (przyczepa + ładunek).'
    }
  },
  {
    id: 'mopeds-hard-shoulder',
    category: 'behavior',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Welche Fahrzeuge müssen auf Hauptfahrbahnen wenn möglich den Seitenstreifen benutzen?',
      en: 'On main roads, which vehicles must use the hard shoulder where possible?',
      ar: 'أي المركبات يجب أن تستخدم الكتف الصلب على الطرق الرئيسية؟',
      tr: 'Ana yollarda mümkünse hangi araçlar emniyet şeridini kullanmalıdır?',
      ru: 'Какие участники должны использовать обочину на главных дорогах?',
      pl: 'Które pojazdy na drogach głównych muszą w miarę możliwości korzystać z pobocza?'
    },
    options: [
      { id: 'a', text: { de: 'Leichtkrafträder', en: 'Small-engine motorcycles', ar: 'الدراجات النارية صغيرة المحرك', tr: 'Küçük motorlu motosikletler', ru: 'Лёгкие мотоциклы', pl: 'Lekkie motocykle' } },
      { id: 'b', text: { de: 'Mofas', en: 'Mopeds', ar: 'الموفا', tr: 'Mofalar', ru: 'Мопеды', pl: 'Motorowery' } },
      { id: 'c', text: { de: 'Langsame land- oder forstwirtschaftliche Fahrzeuge', en: 'Slow agricultural and forestry vehicles', ar: 'مركبات زراعية أو حراجية بطيئة', tr: 'Yavaş tarım/orman araçları', ru: 'Медленные сельхоз- и лесные машины', pl: 'Wolne pojazdy rolnicze i leśne' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Mofas und langsame land-/forstwirtschaftliche Fahrzeuge nutzen den Seitenstreifen.',
      en: 'Mopeds and slow farm/forest vehicles should ride on the hard shoulder.',
      ar: 'الموفا والمركبات الزراعية البطيئة تستخدم الكتف الصلب.',
      tr: 'Mofalar ve yavaş tarım/orman araçları emniyet şeridini kullanır.',
      ru: 'Мопеды и медленный сельхозтранспорт едут по обочине.',
      pl: 'Motorowery i wolne pojazdy rolnicze/leśne korzystają z pobocza.'
    }
  },
  {
    id: 'exit-property-footpath',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie wollen ein Grundstück verlassen und beim Einbiegen einen Gehweg überqueren. Was beachten Sie?',
      en: 'You want to leave a property lot and turn into a road, crossing a footpath. What must you look out for?',
      ar: 'تريد الخروج من ملكية والانعطاف بعد عبور رصيف. ما الذي تنتبه له؟',
      tr: 'Bir mülkten çıkıp yola dönerken kaldırımı geçeceksiniz. Nelere dikkat etmelisiniz?',
      ru: 'Выезжаете с участка через тротуар. На что обращать внимание?',
      pl: 'Wyjeżdżasz z posesji, przecinając chodnik. Na co uważasz?'
    },
    options: [
      { id: 'a', text: { de: 'Eine Einweisperson sollte bei Bedarf einweisen', en: 'A spotter should direct if necessary', ar: 'يجب أن يوجّهك شخص عند الحاجة', tr: 'Gerekiyorsa biri yönlendirsin', ru: 'При необходимости пусть направляет помощник', pl: 'W razie potrzeby ktoś powinien naprowadzać' } },
      { id: 'b', text: { de: 'Fußgänger auf dem Gehweg dürfen nicht gefährdet werden', en: 'Pedestrians on the footpath must not be endangered', ar: 'لا يجب تعريض المشاة للخطر', tr: 'Kaldırımdaki yayalar tehlikeye atılmamalı', ru: 'Нельзя создавать опасности для пешеходов', pl: 'Pieszych na chodniku nie wolno narażać' } },
      { id: 'c', text: { de: 'Zuerst nur den fließenden Verkehr beachten', en: 'First only watch the moving traffic on the road', ar: 'الانتباه أولاً للحركة فقط', tr: 'Önce yalnızca akan trafiğe bakmak', ru: 'Сначала только смотрят на поток', pl: 'Najpierw obserwować tylko ruch drogowy' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Beim Ausfahren immer Fußgängern Vorrang lassen und ggf. einweisen lassen.',
      en: 'Always give pedestrians priority and have a spotter if needed.',
      ar: 'عند الخروج، أعطِ الأولوية للمشاة واطلب توجيهًا إن لزم.',
      tr: 'Çıkışta yayalara öncelik verin, gerekirse yönlendirilin.',
      ru: 'При выезде сперва пропустите пешеходов, при необходимости — с помощником.',
      pl: 'Przy wyjeździe zawsze ustąp pieszym i w razie potrzeby skorzystaj z naprowadzającego.'
    }
  },
  {
    id: 'short-trips-fast-accel',
    category: 'environment',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Warum sollten Sie zügiges Anfahren vermeiden?',
      en: 'Why should you avoid driving off at a rapid pace?',
      ar: 'لماذا يجب تجنب الانطلاق السريع؟',
      tr: 'Hızlı kalkıştan neden kaçınmalısınız?',
      ru: 'Почему лучше не разгоняться резко с места?',
      pl: 'Dlaczego unikać szybkiego ruszania?'
    },
    options: [
      { id: 'a', text: { de: 'Wegen höheren Reifenverschleißes', en: 'Because of heavier tyre wear', ar: 'بسبب تآكل أكبر للإطارات', tr: 'Daha fazla lastik aşınması', ru: 'Из-за повышенного износа шин', pl: 'Z powodu większego zużycia opon' } },
      { id: 'b', text: { de: 'Wegen Lärmbelästigung anderer', en: 'Because the noise annoys others', ar: 'بسبب الإزعاج بالضجيج', tr: 'Çıkardığı gürültü başkalarını rahatsız eder', ru: 'Из-за шумовой нагрузки на других', pl: 'Z powodu hałasu uciążliwego dla innych' } },
      { id: 'c', text: { de: 'Wegen starker Belastung der Hinterbremse', en: 'Because of strain on the rear brake', ar: 'بسبب إجهاد الفرامل الخلفية', tr: 'Arka frene aşırı yük', ru: 'Из-за нагрузки на задние тормоза', pl: 'Z powodu przeciążenia tylnych hamulców' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Schnelles Anfahren erhöht Reifenverschleiß und Lärm — zudem höherer Verbrauch.',
      en: 'Hard launches increase tyre wear and noise — and fuel use.',
      ar: 'الانطلاق السريع يزيد تآكل الإطارات والضجيج وحرق الوقود.',
      tr: 'Sert kalkış lastik aşınmasını ve gürültüyü artırır, yakıt da yakar.',
      ru: 'Резкий старт повышает износ шин, шум и расход топлива.',
      pl: 'Szybki start zwiększa zużycie opon, hałas i spalanie.'
    }
  },
  {
    id: 'child-door-lock',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie verhindern Sie, dass ein Kind während der Fahrt eine Tür öffnet?',
      en: 'How can you prevent a child from opening a door while the vehicle is moving?',
      ar: 'كيف تمنع طفلاً من فتح الباب أثناء السير؟',
      tr: 'Çocuğun seyir hâlinde kapıyı açmasını nasıl önlersiniz?',
      ru: 'Как помешать ребёнку открыть дверь на ходу?',
      pl: 'Jak zapobiec otwarciu drzwi przez dziecko podczas jazdy?'
    },
    options: [
      { id: 'a', text: { de: 'Kindersicherung an den hinteren Türen aktivieren', en: 'Activate child safety locks on the rear doors', ar: 'تفعيل قفل الأطفال على الأبواب الخلفية', tr: 'Arka kapı çocuk kilidini etkinleştirin', ru: 'Включить детский замок на задних дверях', pl: 'Włączyć blokadę drzwi dla dzieci z tyłu' } },
      { id: 'b', text: { de: 'Über die Zentralverriegelung', en: 'Via the central locking system', ar: 'بواسطة القفل المركزي', tr: 'Merkezi kilit ile', ru: 'Через центральный замок', pl: 'Zamkiem centralnym' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Mit der Kindersicherung lässt sich die hintere Tür nur von außen öffnen.',
      en: 'Child safety locks make rear doors openable only from outside.',
      ar: 'قفل الأطفال يسمح بفتح الباب من الخارج فقط.',
      tr: 'Çocuk kilidi arka kapıyı yalnızca dışarıdan açılır kılar.',
      ru: 'Детский замок открывает заднюю дверь только снаружи.',
      pl: 'Blokada dziecięca pozwala otworzyć drzwi tylko z zewnątrz.'
    }
  },
  {
    id: 'tyre-against-obstacle',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie sind mit Wucht mit einem Reifen gegen ein festes Hindernis gefahren. Was tun Sie?',
      en: 'You hit a tyre against a hard obstacle with force. What must you do?',
      ar: 'صدمت إطارًا بقوة على عائق صلب. ماذا تفعل؟',
      tr: 'Lastiği sert bir engele şiddetle çarptırdınız. Ne yaparsınız?',
      ru: 'Шиной с силой ударили по препятствию. Что делать?',
      pl: 'Mocno uderzyłeś oponą o twardą przeszkodę. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Radschrauben nachziehen', en: 'Retighten the wheel bolts', ar: 'إعادة شد براغي العجلة', tr: 'Bijon somunlarını sıkın', ru: 'Подтянуть колёсные болты', pl: 'Dokręcić śruby koła' } },
      { id: 'b', text: { de: 'Reifen und Felge sofort prüfen lassen', en: 'Have the tyres and rim checked immediately', ar: 'فحص الإطار والجنط فورًا', tr: 'Lastik ve jantı hemen kontrol ettirin', ru: 'Сразу проверить шину и диск', pl: 'Natychmiast sprawdzić oponę i felgę' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Bordsteinremplern können Felge und Reifen unsichtbar beschädigen — sofort prüfen lassen.',
      en: 'Kerb hits can damage rim or tyre invisibly — get them checked immediately.',
      ar: 'صدمة الرصيف قد تتلف الجنط أو الإطار دون أن يظهر — افحصهما فورًا.',
      tr: 'Bordür çarpması jant veya lastiği görünmeden bozabilir — hemen kontrol ettirin.',
      ru: 'Удар о бордюр может незаметно повредить диск или шину — проверьте.',
      pl: 'Uderzenie o krawężnik może niewidocznie uszkodzić oponę i felgę — sprawdź.'
    }
  },
  {
    id: 'environment-avoid',
    category: 'environment',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Was sollten Sie aus Gründen des Umweltschutzes vermeiden?',
      en: 'What should you avoid for reasons of environmental protection?',
      ar: 'ما الذي يجب تجنبه لحماية البيئة؟',
      tr: 'Çevre koruma için nelerden kaçınmalısınız?',
      ru: 'Чего избегать ради защиты окружающей среды?',
      pl: 'Czego unikać ze względu na ochronę środowiska?'
    },
    options: [
      { id: 'a', text: { de: 'Unnötige Fahrten', en: 'Unnecessary trips', ar: 'الرحلات غير الضرورية', tr: 'Gereksiz seyahatler', ru: 'Лишние поездки', pl: 'Niepotrzebne podróże' } },
      { id: 'b', text: { de: 'Laute Musik bei offenen Fenstern', en: 'Loud music with windows open', ar: 'الموسيقى العالية بنوافذ مفتوحة', tr: 'Camlar açıkken yüksek müzik', ru: 'Громкая музыка с открытыми окнами', pl: 'Głośna muzyka przy otwartych oknach' } },
      { id: 'c', text: { de: 'Warmlaufenlassen des Motors im Stand', en: 'Letting the engine warm up while stationary', ar: 'تشغيل المحرك للإحماء دون حركة', tr: 'Motoru durarak ısıtmak', ru: 'Прогрев двигателя на месте', pl: 'Rozgrzewanie silnika na postoju' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Alle drei verursachen unnötigen Lärm oder Emissionen.',
      en: 'All three cause unnecessary noise or emissions.',
      ar: 'الثلاثة تسبب ضجيجًا أو انبعاثات غير ضرورية.',
      tr: 'Üçü de gereksiz gürültü veya emisyon yaratır.',
      ru: 'Все три — лишний шум или выбросы.',
      pl: 'Wszystkie trzy powodują zbędny hałas lub emisje.'
    }
  },
  {
    id: 'belt-lock-defect',
    category: 'tech',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Das Schloss des Sicherheitsgurts schließt nicht. Was tun Sie?',
      en: 'A safety belt lock does not close. What do you do?',
      ar: 'قفل حزام الأمان لا يغلق. ماذا تفعل؟',
      tr: 'Emniyet kemerinin kilidi kapanmıyor. Ne yaparsınız?',
      ru: 'Замок ремня безопасности не защёлкивается. Что делать?',
      pl: 'Zamek pasa bezpieczeństwa się nie zamyka. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Schloss reparieren lassen', en: 'Have the lock repaired', ar: 'إصلاح القفل', tr: 'Kilidi tamir ettirin', ru: 'Отремонтировать замок', pl: 'Naprawić zamek' } },
      { id: 'b', text: { de: 'Nur langsam fahren', en: 'Drive only slowly', ar: 'القيادة ببطء فقط', tr: 'Sadece yavaş sürün', ru: 'Ехать только медленно', pl: 'Jechać tylko wolno' } },
      { id: 'c', text: { de: 'Nichts, weil Airbag vorhanden', en: 'Nothing, the seat has an airbag', ar: 'لا شيء، يوجد وسادة هوائية', tr: 'Hava yastığı var, gerek yok', ru: 'Ничего, есть подушка безопасности', pl: 'Nic — jest poduszka powietrzna' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Defekter Gurt = Reparaturpflicht. Airbag ersetzt keinen Gurt.',
      en: 'A faulty belt must be repaired. The airbag does not replace it.',
      ar: 'الحزام التالف يجب إصلاحه؛ الوسادة لا تعوّض الحزام.',
      tr: 'Bozuk kemer onarılmalı; hava yastığı kemeri ikame etmez.',
      ru: 'Неисправный ремень нужно починить — подушка ремень не заменяет.',
      pl: 'Uszkodzony pas wymaga naprawy — poduszka nie zastępuje pasów.'
    }
  },
  {
    id: 'stopping-prohibited',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wo ist das Halten verboten?',
      en: 'Where is stopping prohibited?',
      ar: 'أين يُمنع التوقف؟',
      tr: 'Nerede durmak yasaktır?',
      ru: 'Где запрещена остановка?',
      pl: 'Gdzie zatrzymywanie jest zabronione?'
    },
    options: [
      { id: 'a', text: { de: 'An Bushaltestellen', en: 'At bus stops', ar: 'عند مواقف الحافلات', tr: 'Otobüs duraklarında', ru: 'На автобусных остановках', pl: 'Na przystankach' } },
      { id: 'b', text: { de: 'Außerhalb von Parkflächen auf Autobahnen und Kraftfahrstraßen', en: 'Outside parking areas on motorways and clearways', ar: 'خارج مناطق الوقوف على الأوتوبان والطرق السريعة', tr: 'Otoyol ve hızlı yollarda park alanı dışında', ru: 'Вне парковок на автобанах и скоростных дорогах', pl: 'Poza miejscami parkowania na autostradach i drogach dla pojazdów silnikowych' } },
      { id: 'c', text: { de: 'In oder an scharfen Kurven', en: 'In or near sharp bends', ar: 'في أو قرب منعطفات حادة', tr: 'Keskin virajlarda', ru: 'На крутых поворотах', pl: 'Na ostrych zakrętach' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Halten auf Autobahnen außerhalb der Parkflächen und in scharfen Kurven verboten. An Haltestellen 3 min Ein-/Aussteigen erlaubt.',
      en: 'No stopping on motorways outside parking areas or near sharp bends. At bus stops 3-minute drop-off is allowed.',
      ar: 'يُمنع التوقف على الأوتوبان خارج مناطق الوقوف وقرب المنعطفات الحادة. عند المواقف يُسمح بـ3 دقائق.',
      tr: 'Otoyollarda park alanı dışında ve keskin virajlarda durmak yasak. Duraklarda 3 dakika serbest.',
      ru: 'На автобанах вне парковок и на крутых поворотах — нельзя. На остановках до 3 минут можно.',
      pl: 'Na autostradach poza miejscami parkowania i przy ostrych zakrętach — nie wolno. Na przystankach 3 min wsiadania jest OK.'
    }
  },
  {
    id: 'cross-priority-restricted',
    category: 'rightOfWay',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 3,
    question: {
      de: 'Sie wollen eine Vorfahrtstraße kreuzen. Die Sicht zu beiden Seiten ist durch parkende Fahrzeuge stark eingeschränkt. Was tun Sie?',
      en: 'You want to cross a priority road. The view to both sides is very restricted due to parked vehicles. What do you do?',
      ar: 'تريد عبور طريق ذي أولوية. الرؤية مقيدة بسبب سيارات متوقفة. ماذا تفعل؟',
      tr: 'Bir ana yolu geçeceksiniz. Park etmiş araçlar yüzünden iki yan görüş çok kısıtlı. Ne yaparsınız?',
      ru: 'Хотите пересечь главную дорогу. Из-за припаркованных машин обзор плохой. Что делать?',
      pl: 'Chcesz przeciąć drogę z pierwszeństwem. Widoczność jest ograniczona przez zaparkowane pojazdy. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Schnell über die Kreuzung fahren', en: 'Quickly cross the junction', ar: 'العبور بسرعة', tr: 'Hızla geçin', ru: 'Быстро пересечь', pl: 'Szybko przejechać' } },
      { id: 'b', text: { de: 'Mich vorsichtig in die Kreuzung hineintasten', en: 'Carefully ease into the junction', ar: 'الدخول بحذر', tr: 'Dikkatlice ilerleyin', ru: 'Аккуратно "вкатиться"', pl: 'Ostrożnie wjeżdżać' } },
      { id: 'c', text: { de: 'Mit der Hupe warnen', en: 'Sound the horn to warn', ar: 'استخدام البوق للتحذير', tr: 'Korna ile uyarmak', ru: 'Сигналом предупредить', pl: 'Trąbieniem ostrzec' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Vorsichtig hineintasten, bis Sie freie Sicht haben — niemals einfach durchfahren.',
      en: 'Ease forward until you can see — never just dart across.',
      ar: 'تقدم بحذر حتى ترى — لا تعبر بسرعة.',
      tr: 'Görüş açılana dek dikkatle ilerleyin — hızla geçmeyin.',
      ru: 'Постепенно выкатывайтесь, пока не появится обзор. Не пересекайте на скорости.',
      pl: 'Stopniowo wjeżdżaj, aż uzyskasz widoczność — nigdy nie przejeżdżaj na chybił trafił.'
    }
  },
  {
    id: 'bus-set-off',
    category: 'rightOfWay',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welchen Fahrzeugen müssen Sie das Anfahren von gekennzeichneten Haltestellen ermöglichen?',
      en: 'Which vehicles must you allow to set off from marked bus stops?',
      ar: 'لأي المركبات يجب السماح بالانطلاق من المواقف المعلَّمة؟',
      tr: 'İşaretli duraklardan kalkışa hangi araçlara izin vermelisiniz?',
      ru: 'Каким машинам обязаны давать выехать с обозначенных остановок?',
      pl: 'Którym pojazdom musisz umożliwić ruszenie z oznaczonych przystanków?'
    },
    options: [
      { id: 'a', text: { de: 'Linienbussen', en: 'Regular (line) buses', ar: 'حافلات خط منتظم', tr: 'Hat otobüsleri', ru: 'Рейсовым автобусам', pl: 'Autobusom liniowym' } },
      { id: 'b', text: { de: 'Taxis', en: 'Taxis', ar: 'سيارات الأجرة', tr: 'Taksiler', ru: 'Такси', pl: 'Taksówkom' } },
      { id: 'c', text: { de: 'Schulbussen', en: 'School buses', ar: 'حافلات المدارس', tr: 'Okul otobüsleri', ru: 'Школьным автобусам', pl: 'Autobusom szkolnym' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Linien- und Schulbussen muss das Anfahren ermöglicht werden, wenn sie blinken.',
      en: 'Line buses and school buses must be allowed to pull off when indicating.',
      ar: 'الحافلات المنتظمة والمدرسية يجب السماح لها بالانطلاق عند إشارة.',
      tr: 'Hat ve okul otobüsleri sinyal verince kalkışlarına izin verilmeli.',
      ru: 'Рейсовым и школьным автобусам нужно давать выехать со включённым поворотником.',
      pl: 'Liniowym i szkolnym autobusom z włączonym kierunkowskazem ustępujemy pierwszeństwa.'
    }
  },
  {
    id: 'roadworthy-responsibility',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wer ist für die Verkehrssicherheit eines zugelassenen Fahrzeugs verantwortlich?',
      en: 'Who is responsible for the roadworthiness of a licensed vehicle?',
      ar: 'من المسؤول عن السلامة المرورية للسيارة المسجلة؟',
      tr: 'Tescilli aracın trafik güvenliğinden kim sorumludur?',
      ru: 'Кто отвечает за исправность зарегистрированного автомобиля?',
      pl: 'Kto odpowiada za stan techniczny zarejestrowanego pojazdu?'
    },
    options: [
      { id: 'a', text: { de: 'Der Halter', en: 'The owner', ar: 'المالك', tr: 'Araç sahibi', ru: 'Владелец', pl: 'Właściciel' } },
      { id: 'b', text: { de: 'Die Haftpflichtversicherung', en: 'The liability insurer', ar: 'شركة التأمين', tr: 'Sigorta şirketi', ru: 'Страховая', pl: 'Ubezpieczyciel OC' } },
      { id: 'c', text: { de: 'Der Fahrer', en: 'The driver', ar: 'السائق', tr: 'Sürücü', ru: 'Водитель', pl: 'Kierowca' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Halter und Fahrer haften gemeinsam für den verkehrssicheren Zustand.',
      en: 'Both owner and driver are responsible for keeping the car roadworthy.',
      ar: 'المالك والسائق مسؤولان معًا عن السلامة.',
      tr: 'Sahibi ve sürücüsü birlikte sorumludur.',
      ru: 'И владелец, и водитель несут ответственность за исправность.',
      pl: 'Właściciel i kierowca odpowiadają wspólnie za stan techniczny.'
    }
  },
  {
    id: 'police-paddle',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Aus einem vorausfahrenden Fahrzeug wird eine Polizeikelle in Ihre Richtung gezeigt. Was bedeutet das?',
      en: 'A police signalling paddle is shown towards you from a vehicle driving in front. What does it mean?',
      ar: 'تُظهر مركبة أمامك عصا الشرطة باتجاهك. ماذا يعني ذلك؟',
      tr: 'Önünüzdeki araçtan polis raketi size gösteriliyor. Ne anlama gelir?',
      ru: 'С едущего впереди автомобиля показывают полицейский жезл в вашу сторону. Что это значит?',
      pl: 'Z pojazdu przed Tobą skierowano w Twoją stronę paletkę policyjną. Co to oznacza?'
    },
    options: [
      { id: 'a', text: { de: 'Sie müssen in die gezeigte Richtung abbiegen', en: 'You must turn in the indicated direction', ar: 'يجب الانعطاف في الاتجاه المُشار إليه', tr: 'Gösterilen yöne dönmelisiniz', ru: 'Вы обязаны повернуть в указанном направлении', pl: 'Musisz skręcić w pokazanym kierunku' } },
      { id: 'b', text: { de: 'Sie dürfen das Fahrzeug nicht überholen', en: 'You may not overtake the vehicle', ar: 'لا يجوز تجاوز المركبة', tr: 'Aracı sollayamazsınız', ru: 'Вам нельзя обгонять эту машину', pl: 'Nie wolno wyprzedzać tego pojazdu' } },
      { id: 'c', text: { de: 'Sie müssen folgen, bis es anhält', en: 'You must follow until it stops', ar: 'يجب أن تتبعها حتى تتوقف', tr: 'Durana dek takip etmelisiniz', ru: 'Следовать до его остановки', pl: 'Musisz jechać za nim aż się zatrzyma' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Polizeikelle = Folgen bis zum Anhalten und kein Überholen.',
      en: 'Police paddle = follow until it stops and do not overtake.',
      ar: 'عصا الشرطة = اتبعها حتى تتوقف ولا تتجاوز.',
      tr: 'Polis raketi = durana kadar takip et, sollama.',
      ru: 'Жезл = следуйте до остановки и не обгоняйте.',
      pl: 'Paletka policji = jedź za pojazdem aż się zatrzyma i nie wyprzedzaj.'
    }
  },
  {
    id: 'accident-obligations',
    category: 'firstAid',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 4,
    question: {
      de: 'Welche Pflichten haben Sie nach einem Verkehrsunfall?',
      en: 'What are you obliged to do if you are involved in a road traffic accident?',
      ar: 'ما الواجبات بعد حادث مروري؟',
      tr: 'Trafik kazasından sonra yükümlülükleriniz nelerdir?',
      ru: 'Какие обязанности у вас при ДТП?',
      pl: 'Jakie obowiązki masz po wypadku drogowym?'
    },
    options: [
      { id: 'a', text: { de: 'Erste Hilfe leisten, wenn Personen verletzt sind', en: 'Provide first aid if anyone is injured', ar: 'تقديم الإسعافات الأولية إذا أُصيب أحد', tr: 'Yaralı varsa ilk yardım yapın', ru: 'Оказать первую помощь пострадавшим', pl: 'Udzielić pierwszej pomocy poszkodowanym' } },
      { id: 'b', text: { de: 'Unfallstelle absichern', en: 'Secure the scene of the accident', ar: 'تأمين موقع الحادث', tr: 'Kaza yerini emniyete alın', ru: 'Обозначить место ДТП', pl: 'Zabezpieczyć miejsce wypadku' } },
      { id: 'c', text: { de: 'Anhalten und Unfallfolgen feststellen', en: 'Stop and determine consequences', ar: 'التوقف وتحديد النتائج', tr: 'Durup sonuçları belirleyin', ru: 'Остановиться и оценить последствия', pl: 'Zatrzymać się i ustalić skutki' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Pflichten: anhalten, absichern, Erste Hilfe, Polizei rufen, Personalien austauschen.',
      en: 'Duties: stop, secure, give first aid, call police, exchange details.',
      ar: 'الواجبات: التوقف، التأمين، الإسعاف، الاتصال بالشرطة، تبادل البيانات.',
      tr: 'Görevler: dur, emniyete al, ilk yardım yap, polisi ara, bilgi alışverişi.',
      ru: 'Обязанности: остановиться, обезопасить, оказать помощь, вызвать полицию, обменяться данными.',
      pl: 'Obowiązki: zatrzymać się, zabezpieczyć, udzielić pomocy, zawiadomić policję, wymienić dane.'
    }
  },
  {
    id: 'noise-reduction',
    category: 'environment',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie können Sie den Lärm Ihres Pkw verringern?',
      en: 'How can you reduce the noise made by a car?',
      ar: 'كيف يمكنك تقليل ضجيج سيارتك؟',
      tr: 'Aracınızın gürültüsünü nasıl azaltabilirsiniz?',
      ru: 'Как уменьшить шум автомобиля?',
      pl: 'Jak ograniczyć hałas samochodu?'
    },
    options: [
      { id: 'a', text: { de: 'Geländereifen verwenden', en: 'By using off-road tyres', ar: 'استخدام إطارات وعرة', tr: 'Arazi lastiği kullanarak', ru: 'Использовать внедорожные шины', pl: 'Stosować opony terenowe' } },
      { id: 'b', text: { de: 'Niedrige Motordrehzahlen fahren', en: 'By driving at low engine speed', ar: 'القيادة على دورات منخفضة', tr: 'Düşük devirle sürerek', ru: 'Ехать на низких оборотах', pl: 'Jeżdżąc na niskich obrotach' } },
      { id: 'c', text: { de: 'Luftfilter entfernen', en: 'By removing the air filter', ar: 'بإزالة فلتر الهواء', tr: 'Hava filtresini sökerek', ru: 'Снимая воздушный фильтр', pl: 'Wyjmując filtr powietrza' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'Frühes Hochschalten und niedrige Drehzahlen mindern Lärm und Verbrauch.',
      en: 'Shift up early and stay at low revs — less noise and less fuel.',
      ar: 'انتقل لترس أعلى مبكرًا وأبقِ على دورات منخفضة — أقل ضجيج ووقود.',
      tr: 'Erken vites büyütüp düşük devirde gitmek hem gürültüyü hem yakıtı azaltır.',
      ru: 'Раннее повышение передачи и низкие обороты — меньше шум и расход.',
      pl: 'Wczesna zmiana biegu i niskie obroty — mniej hałasu i paliwa.'
    }
  },
  {
    id: 'service-regularly',
    category: 'environment',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Was muss regelmäßig gewartet werden, um hohen Kraftstoffverbrauch und Schadstoffausstoß zu vermeiden?',
      en: 'What must be regularly serviced to prevent high fuel consumption and pollutant emissions?',
      ar: 'ما الذي يجب صيانته بانتظام لمنع استهلاك الوقود العالي والانبعاثات؟',
      tr: 'Yüksek yakıt ve emisyonu önlemek için neyin düzenli bakımı gerekir?',
      ru: 'Что нужно регулярно обслуживать, чтобы избежать высокого расхода и выбросов?',
      pl: 'Co regularnie serwisować, by ograniczyć zużycie paliwa i emisję?'
    },
    options: [
      { id: 'a', text: { de: 'Zündanlage', en: 'Ignition system', ar: 'نظام الإشعال', tr: 'Ateşleme sistemi', ru: 'Система зажигания', pl: 'Układ zapłonowy' } },
      { id: 'b', text: { de: 'Luftfilter', en: 'Engine air filter', ar: 'فلتر هواء المحرك', tr: 'Hava filtresi', ru: 'Воздушный фильтр', pl: 'Filtr powietrza' } },
      { id: 'c', text: { de: 'Vergaser oder Einspritzanlage', en: 'Carburettor or fuel-injection system', ar: 'الكاربراتير أو نظام الحقن', tr: 'Karbüratör veya yakıt enjeksiyonu', ru: 'Карбюратор или впрыск', pl: 'Gaźnik lub układ wtryskowy' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Alle drei beeinflussen Verbrauch und Emissionen direkt.',
      en: 'All three directly affect fuel use and emissions.',
      ar: 'الثلاثة تؤثر مباشرة على الاستهلاك والانبعاثات.',
      tr: 'Üçü de yakıt ve emisyonu doğrudan etkiler.',
      ru: 'Все три напрямую влияют на расход и выбросы.',
      pl: 'Wszystkie trzy bezpośrednio wpływają na spalanie i emisję.'
    }
  },
  {
    id: 'airbag-light-on',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Während der Fahrt leuchtet die Airbag-Kontrollleuchte dauerhaft. Was tun Sie?',
      en: 'While driving, the airbag warning light stays on. What must you do?',
      ar: 'يضيء مصباح وسادة الهواء باستمرار أثناء القيادة. ماذا تفعل؟',
      tr: 'Sürerken hava yastığı ikaz lambası sürekli yanıyor. Ne yapmalısınız?',
      ru: 'Лампа подушки безопасности горит постоянно. Что делать?',
      pl: 'Podczas jazdy świeci się kontrolka poduszki. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Werkstatt aufsuchen', en: 'Go to a workshop', ar: 'الذهاب إلى الورشة', tr: 'Servise götürün', ru: 'Поехать в сервис', pl: 'Udać się do warsztatu' } },
      { id: 'b', text: { de: 'Sofort stehen bleiben', en: 'Stop the vehicle immediately', ar: 'التوقف فورًا', tr: 'Aracı hemen durdurun', ru: 'Немедленно остановиться', pl: 'Natychmiast się zatrzymać' } },
      { id: 'c', text: { de: 'Nichts unternehmen', en: 'Do nothing', ar: 'لا تفعل شيئًا', tr: 'Hiçbir şey yapmayın', ru: 'Ничего не предпринимать', pl: 'Nic nie robić' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Bleibt die Leuchte an, ist das Airbag-System defekt — Werkstatt aufsuchen.',
      en: 'If the light stays on, the airbag is defective — visit a workshop.',
      ar: 'استمرار إضاءة المصباح يدل على عطل — اذهب للورشة.',
      tr: 'Lamba sürekli yanıyorsa hava yastığı arızalıdır — servise gidin.',
      ru: 'Постоянное горение лампы — неисправность подушки. Едем в сервис.',
      pl: 'Stałe świecenie kontrolki = usterka poduszki — do warsztatu.'
    }
  },
  {
    id: 'bus-stop-hazards-pass',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was tun Sie, wenn ein Bus mit eingeschaltetem Warnblinker an einer Haltestelle steht?',
      en: 'What do you do when a bus stops at a bus stop with hazard lights on?',
      ar: 'ماذا تفعل عندما تتوقف حافلة عند موقف بأضواء الخطر؟',
      tr: 'Bir otobüs dörtlü flaşörle durakta durmuşsa ne yaparsınız?',
      ru: 'Что делать, если автобус стоит на остановке с «аварийкой»?',
      pl: 'Co robisz, gdy autobus stoi na przystanku z włączonymi światłami awaryjnymi?'
    },
    options: [
      { id: 'a', text: { de: 'Mit ausreichendem Abstand vorbeifahren, um Fußgänger nicht zu gefährden', en: 'Drive past at sufficient distance so pedestrians are not endangered', ar: 'تجاوزها بمسافة كافية لعدم تعريض المشاة للخطر', tr: 'Yayaları tehlikeye atmadan yeterli mesafeyle geçin', ru: 'Проезжать на достаточной дистанции, не подвергая пешеходов опасности', pl: 'Przejechać z odpowiednim odstępem, nie narażając pieszych' } },
      { id: 'b', text: { de: 'Warten, wenn Fahrgäste behindert werden könnten', en: 'Wait if passengers could be inconvenienced', ar: 'الانتظار إن أمكن إعاقة الركاب', tr: 'Yolcular engellenebilirse bekleyin', ru: 'Подождать, если есть риск помешать пассажирам', pl: 'Czekać, jeśli można utrudnić pasażerom' } },
      { id: 'c', text: { de: 'Nur in Schrittgeschwindigkeit vorbei und ggf. anhalten', en: 'Drive past at walking pace only and, if necessary, stop', ar: 'المرور بسرعة المشي وقد تحتاج للتوقف', tr: 'Yürüme hızında geçin, gerekirse durun', ru: 'Ехать со скоростью пешехода, при необходимости остановиться', pl: 'Mijać z prędkością pieszego, w razie potrzeby zatrzymać' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Linienbus mit Warnblinker: Schrittgeschwindigkeit, großer Abstand, ggf. anhalten.',
      en: 'Bus with hazards: walking pace, big distance, stop if needed.',
      ar: 'حافلة بأضواء خطر: سرعة المشي، مسافة كبيرة، توقف إن لزم.',
      tr: 'Dörtlü flaşörlü otobüs: yürüme hızı, geniş mesafe, gerekirse durun.',
      ru: 'Автобус с «аварийкой»: пешеходная скорость, большой интервал, при необходимости — остановиться.',
      pl: 'Autobus z awaryjnymi: prędkość pieszego, duży odstęp, w razie potrzeby zatrzymać.'
    }
  },
  {
    id: 'slow-vehicle-facilitate',
    category: 'behavior',
    classes: ['A', 'B', 'AB'],
    points: 2,
    question: {
      de: 'Sie fahren langsam auf einer Hauptstraße. Wie ermöglichen Sie schnelleren Fahrzeugen das Überholen?',
      en: 'You are driving a slow vehicle on a main road. How can you make it easier for faster vehicles to overtake?',
      ar: 'تقود مركبة بطيئة على طريق رئيسي. كيف تسهل تجاوز المركبات الأسرع؟',
      tr: 'Ana yolda yavaş araç sürüyorsunuz. Daha hızlı araçların sollamasını nasıl kolaylaştırırsınız?',
      ru: 'Едете медленно по главной. Как помочь обгону?',
      pl: 'Jedziesz wolnym pojazdem na drodze głównej. Jak ułatwić wyprzedzanie?'
    },
    options: [
      { id: 'a', text: { de: 'Auf Parkflächen fahren', en: 'Pull onto a parking area', ar: 'ادخل منطقة الوقوف', tr: 'Park alanına çıkın', ru: 'Заехать на стоянку', pl: 'Wjechać na parking' } },
      { id: 'b', text: { de: 'Auf den Seitenstreifen fahren', en: 'Pull onto the hard shoulder', ar: 'انتقل للكتف الصلب', tr: 'Emniyet şeridine çekin', ru: 'Сместиться на обочину', pl: 'Zjechać na pobocze' } },
      { id: 'c', text: { de: 'In eine Haltebucht fahren', en: 'Pull into a lay-by', ar: 'دخول جيب الوقوف', tr: 'Cebe çekin', ru: 'Заехать в карман', pl: 'Wjechać w zatoczkę' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Langsame Fahrzeuge sollen Parkflächen, Seitenstreifen oder Haltebuchten nutzen, um schnellere durchzulassen.',
      en: 'Slow vehicles should use parking areas, hard shoulder or lay-bys to let faster traffic past.',
      ar: 'يستخدم البطيؤون مناطق الوقوف أو الكتف أو الجيوب للسماح بالتجاوز.',
      tr: 'Yavaş araçlar park alanı, emniyet şeridi veya cep kullanarak hızlıları geçirmeli.',
      ru: 'Медленные машины должны заезжать на стоянку, обочину или в карман, чтобы пропустить.',
      pl: 'Wolne pojazdy używają parkingu, pobocza lub zatoczki, by przepuścić szybszych.'
    }
  }
];
