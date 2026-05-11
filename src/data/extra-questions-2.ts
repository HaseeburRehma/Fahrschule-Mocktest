import type { Question } from './types';

/**
 * Second batch of extra theory questions — tech, environment, first-aid,
 * behavior. Translated DE / EN / AR / TR / RU / PL.
 */
export const extraQuestions2: Question[] = [
  // ── Brakes / Brake fluid / Pedal ──
  {
    id: 'brake-fluid-change',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Warum muss die Bremsflüssigkeit nach Vorschrift des Herstellers gewechselt werden?',
      en: 'Why does the brake fluid have to be exchanged according to the instructions of the vehicle manufacturer?',
      ar: 'لماذا يجب تغيير زيت الفرامل وفقًا لتعليمات الشركة المصنعة؟',
      tr: 'Fren hidroliği neden üretici talimatına göre değiştirilmelidir?',
      ru: 'Почему тормозную жидкость нужно менять по инструкции производителя?',
      pl: 'Dlaczego płyn hamulcowy należy wymieniać zgodnie z zaleceniami producenta?'
    },
    options: [
      { id: 'a', text: { de: 'Damit die Bremsanlage dicht bleibt', en: 'To ensure the brake system does not leak', ar: 'لكي يبقى نظام الفرامل غير مسرّب', tr: 'Fren sistemi sızdırmasın diye', ru: 'Чтобы тормозная система не давала течь', pl: 'Aby układ hamulcowy był szczelny' } },
      { id: 'b', text: { de: 'Damit die Bremsanlage auch unter starker Belastung funktioniert', en: 'To ensure the brake system continues to function even under higher stress', ar: 'لضمان عمل الفرامل حتى تحت إجهاد عالي', tr: 'Yüksek yük altında bile fren sistemi çalışsın diye', ru: 'Чтобы тормоза работали и при высокой нагрузке', pl: 'Aby układ hamulcowy działał także przy dużym obciążeniu' } },
      { id: 'c', text: { de: 'Damit der Wasseranteil in der Bremsflüssigkeit nicht zu hoch wird', en: 'To ensure the percentage of water in the brake fluid does not reach an unacceptable level', ar: 'لكي لا يرتفع محتوى الماء في زيت الفرامل', tr: 'Fren hidroliğindeki su oranı kabul edilemez seviyeye çıkmasın diye', ru: 'Чтобы доля воды в жидкости не превысила допустимый уровень', pl: 'Aby zawartość wody w płynie nie osiągnęła niedopuszczalnego poziomu' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Bremsflüssigkeit zieht Wasser an; dadurch sinkt der Siedepunkt und die Bremswirkung lässt bei starker Belastung nach.',
      en: 'Brake fluid absorbs water, which lowers the boiling point and weakens braking under heavy load.',
      ar: 'يمتص سائل الفرامل الماء، ما يخفّض نقطة الغليان ويضعف الفرملة عند الإجهاد.',
      tr: 'Fren hidroliği su çeker; bu kaynama noktasını düşürür ve yüksek yükte frenleme zayıflar.',
      ru: 'Тормозная жидкость впитывает воду, точка кипения падает, при нагрузке тормоза слабеют.',
      pl: 'Płyn hamulcowy chłonie wodę, co obniża temperaturę wrzenia i osłabia hamowanie pod obciążeniem.'
    }
  },
  {
    id: 'brake-pedal-to-floor',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 4,
    question: {
      de: 'Beim Treten des Bremspedals geht es bis zum Boden durch und wird erst nach mehrfachem Pumpen kürzer. Was tun?',
      en: 'When you press on the brake pedal, it touches the floor. Only when you press on it several times does the pedal travel become shorter. What must you do?',
      ar: 'عند الضغط على دواسة الفرامل تنزل حتى الأرض ولا تقصر إلا بعد ضغط متكرر. ماذا تفعل؟',
      tr: 'Fren pedalı tabana kadar iniyor, ancak birkaç defa pompalayınca kısalıyor. Ne yapmalısınız?',
      ru: 'При нажатии педаль тормоза проваливается до пола, только после нескольких качков ход уменьшается. Что делать?',
      pl: 'Pedał hamulca dochodzi do podłogi i dopiero po kilkukrotnym pompowaniu skraca się skok. Co zrobić?'
    },
    options: [
      { id: 'a', text: { de: 'Bremsen reparieren lassen', en: 'Have the brakes repaired', ar: 'إصلاح الفرامل في الورشة', tr: 'Frenleri tamir ettirin', ru: 'Отремонтировать тормоза', pl: 'Naprawić hamulce w warsztacie' } },
      { id: 'b', text: { de: 'Nur Bremsflüssigkeit nachfüllen reicht aus', en: 'It is sufficient to fill up the brake fluid', ar: 'يكفي إضافة سائل الفرامل', tr: 'Sadece hidrolik eklemek yeterli', ru: 'Достаточно долить тормозную жидкость', pl: 'Wystarczy dolać płynu hamulcowego' } },
      { id: 'c', text: { de: 'Fahrzeug sofort abstellen', en: 'Park the car immediately', ar: 'إيقاف السيارة فورًا', tr: 'Aracı hemen park edin', ru: 'Немедленно остановиться и припарковаться', pl: 'Natychmiast zaparkować pojazd' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Pedal bis zum Boden = akute Bremsstörung. Fahrzeug sofort abstellen und reparieren lassen.',
      en: 'A pedal that touches the floor signals an acute brake fault. Park immediately and have it repaired.',
      ar: 'وصول الدواسة للأرض يعني عطلًا حرجًا. أوقف السيارة فورًا وأصلحها.',
      tr: 'Pedalın tabana inmesi acil fren arızasıdır. Hemen durdurup tamir ettirin.',
      ru: 'Педаль до пола — серьёзная неисправность тормозов. Сразу остановитесь и в ремонт.',
      pl: 'Pedał aż do podłogi to poważna usterka. Natychmiast się zatrzymaj i napraw.'
    }
  },
  {
    id: 'brakes-pull-side',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Die Bremsen Ihres Autos ziehen stark zu einer Seite. Welche Auswirkungen kann das beim Bremsen haben?',
      en: 'The brakes on your car are pulling strongly to one side. What effects can this have when you are braking?',
      ar: 'فرامل سيارتك تجذب بقوة إلى أحد الجانبين. ما تأثير ذلك أثناء الفرملة؟',
      tr: 'Aracın frenleri bir tarafa kuvvetlice çekiyor. Frenlemede ne etkisi olur?',
      ru: 'Тормоза тянут в одну сторону. К чему это может привести при торможении?',
      pl: 'Hamulce mocno znoszą w jedną stronę. Jakie skutki może to mieć przy hamowaniu?'
    },
    options: [
      { id: 'a', text: { de: 'ABS fällt aus', en: 'Anti-lock braking system (ABS) fails', ar: 'يتعطل نظام ABS', tr: 'ABS devre dışı kalır', ru: 'Откажет ABS', pl: 'ABS przestaje działać' } },
      { id: 'b', text: { de: 'Längerer Bremsweg', en: 'Longer braking distance', ar: 'مسافة فرملة أطول', tr: 'Daha uzun fren yolu', ru: 'Удлинённый тормозной путь', pl: 'Wydłużona droga hamowania' } },
      { id: 'c', text: { de: 'Das Fahrzeug kann ausbrechen', en: 'Your car can veer to the side', ar: 'قد تنحرف السيارة', tr: 'Araç savrulabilir', ru: 'Машина может уйти в сторону', pl: 'Pojazd może wpaść w poślizg w bok' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Einseitige Bremswirkung verlängert den Bremsweg und kann das Fahrzeug ausbrechen lassen — sofort reparieren lassen.',
      en: 'Uneven braking lengthens the braking distance and can pull the car sideways — get it fixed immediately.',
      ar: 'الفرملة غير المتساوية تطيل مسافة الفرملة وقد تسبب انحراف السيارة — أصلحها فورًا.',
      tr: 'Tek taraflı fren etkisi fren yolunu uzatır ve aracın savrulmasına yol açabilir — derhal tamir.',
      ru: 'Неравномерное торможение удлиняет путь и может сорвать машину в сторону — срочно в ремонт.',
      pl: 'Nierówne hamowanie wydłuża drogę i może znieść pojazd w bok — natychmiast napraw.'
    }
  },

  // ── Fog lamps ──
  {
    id: 'fog-headlamps-conditions',
    category: 'tech',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Die Sicht ist erheblich eingeschränkt. Wann dürfen Sie die Nebelscheinwerfer einschalten?',
      en: 'Visibility is considerably reduced. When are you allowed to switch on fog headlamps?',
      ar: 'الرؤية مقيدة كثيرًا. متى يُسمح بتشغيل الأضواء الضبابية الأمامية؟',
      tr: 'Görüş önemli ölçüde azalmış. Sis farlarını ne zaman yakabilirsiniz?',
      ru: 'Видимость существенно снижена. Когда разрешено включать передние противотуманные фары?',
      pl: 'Widoczność jest znacznie ograniczona. Kiedy wolno włączyć przednie światła przeciwmgielne?'
    },
    options: [
      { id: 'a', text: { de: 'Bei Nebel', en: 'In fog', ar: 'في الضباب', tr: 'Siste', ru: 'В тумане', pl: 'We mgle' } },
      { id: 'b', text: { de: 'Bei Regen', en: 'In rain', ar: 'في المطر', tr: 'Yağmurda', ru: 'В дождь', pl: 'W deszczu' } },
      { id: 'c', text: { de: 'Bei Schneefall', en: 'In falling snow', ar: 'أثناء تساقط الثلج', tr: 'Kar yağışında', ru: 'При снегопаде', pl: 'Podczas opadów śniegu' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Nebelscheinwerfer dürfen bei Nebel, Schneefall oder Regen eingeschaltet werden.',
      en: 'Fog headlamps may be switched on in fog, snowfall or rain.',
      ar: 'تُشغّل الأضواء الضبابية الأمامية في الضباب أو الثلج أو المطر.',
      tr: 'Sis farları sis, kar yağışı veya yağmurda yakılabilir.',
      ru: 'Передние противотуманные фары можно включать в тумане, снегопаде или дождь.',
      pl: 'Przednie światła przeciwmgielne wolno włączyć przy mgle, śniegu lub deszczu.'
    }
  },
  {
    id: 'rear-fog-lamps-50m',
    category: 'tech',
    classes: ['A', 'B', 'AB', 'Mofa'],
    points: 2,
    question: {
      de: 'Wann dürfen Sie die Nebelschlussleuchte einschalten?',
      en: 'When are you allowed to switch on rear fog lamps?',
      ar: 'متى يجوز تشغيل المصباح الضبابي الخلفي؟',
      tr: 'Arka sis lambasını ne zaman yakabilirsiniz?',
      ru: 'Когда можно включать задний противотуманный фонарь?',
      pl: 'Kiedy wolno włączyć tylne światła przeciwmgielne?'
    },
    options: [
      { id: 'a', text: { de: 'Wenn die Sichtweite durch Nebel unter 50 m liegt', en: 'When fog reduces visibility to less than 50 m', ar: 'عندما تنخفض الرؤية بسبب الضباب إلى أقل من 50 م', tr: 'Sis görüşü 50 m altına indirdiğinde', ru: 'Когда туман снижает видимость до < 50 м', pl: 'Gdy mgła obniża widoczność poniżej 50 m' } },
      { id: 'b', text: { de: 'Bei Sichtweite 100 m', en: 'When visibility is 100 m', ar: 'عند رؤية 100 م', tr: 'Görüş 100 m olduğunda', ru: 'При видимости 100 м', pl: 'Przy widoczności 100 m' } },
      { id: 'c', text: { de: 'Bei starkem Regen', en: 'When visibility is reduced by heavy rain', ar: 'في المطر الشديد', tr: 'Şiddetli yağmurda', ru: 'При сильном дожде', pl: 'Przy silnym deszczu' } }
    ],
    correctIds: ['a'],
    explanation: {
      de: 'Nebelschlussleuchte ist nur bei Nebel und Sichtweite unter 50 m erlaubt.',
      en: 'Rear fog lamps are only permitted in fog with visibility below 50 m.',
      ar: 'يُسمح بالمصباح الضبابي الخلفي فقط في الضباب وعند رؤية تحت 50 م.',
      tr: 'Arka sis lambası yalnızca 50 m altı sis görüşünde yakılabilir.',
      ru: 'Задний противотуманный — только при тумане и видимости < 50 м.',
      pl: 'Tylne światła przeciwmgielne wolno włączyć tylko we mgle przy widoczności poniżej 50 m.'
    }
  },

  // ── Loads / hazards ──
  {
    id: 'lashing-strap-torn',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie stellen während einer Pause fest, dass ein Zurrgurt gerissen ist. Was tun?',
      en: 'During a break you find out that one of the lashing straps has torn. What do you do?',
      ar: 'تكتشف أثناء استراحة أن أحد أحزمة التثبيت تمزّق. ماذا تفعل؟',
      tr: 'Mola sırasında bağlama kayışlarından birinin koptuğunu fark ediyorsunuz. Ne yaparsınız?',
      ru: 'Во время остановки вы обнаружили, что один из крепёжных ремней лопнул. Что делать?',
      pl: 'Podczas postoju zauważasz, że jeden z pasów mocujących pękł. Co robisz?'
    },
    options: [
      { id: 'a', text: { de: 'Weiterfahrt, wenn die Ladung mit anderen geeigneten Mitteln gesichert ist', en: 'Continue your trip when the load is secured by other sufficient means', ar: 'متابعة الرحلة إذا تم تثبيت الحمولة بوسائل أخرى كافية', tr: 'Yük başka yeterli yollarla emniyete alındığında yola devam edin', ru: 'Продолжить путь, если груз закреплён другими подходящими средствами', pl: 'Kontynuować jazdę, jeżeli ładunek jest zabezpieczony innymi środkami' } },
      { id: 'b', text: { de: 'Weiterfahrt, weil eine verrutschende Ladung von Bordwänden gehalten wird', en: 'Continue your trip because a slipping load will be caught by the side panels', ar: 'متابعة الرحلة لأن لوحات الجانبية ستحجز الحمولة', tr: 'Yan paneller yükü tutar diye yola devam edin', ru: 'Продолжить путь — борта удержат соскользнувший груз', pl: 'Kontynuować jazdę, bo burty zatrzymają ładunek' } },
      { id: 'c', text: { de: 'Weiterfahrt, nachdem der Gurt ersetzt wurde', en: 'Continue your trip after the lashing strap has been replaced', ar: 'متابعة الرحلة بعد استبدال الحزام', tr: 'Kayış değiştirildikten sonra yola devam edin', ru: 'Продолжить путь после замены ремня', pl: 'Kontynuować jazdę po wymianie pasa' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'Ladung muss immer ausreichend gesichert sein — entweder mit Ersatzgurt oder anderen geeigneten Mitteln.',
      en: 'Loads must always be sufficiently secured — either with a replacement strap or another suitable means.',
      ar: 'يجب تثبيت الحمولة دائمًا بشكل كافٍ — إما بحزام بديل أو وسائل أخرى مناسبة.',
      tr: 'Yük her zaman yeterince emniyete alınmalı — yedek kayışla veya başka uygun yöntemle.',
      ru: 'Груз должен быть надёжно закреплён — запасным ремнём или другими подходящими средствами.',
      pl: 'Ładunek zawsze musi być dobrze zabezpieczony — zapasowym pasem albo innym odpowiednim środkiem.'
    }
  },
  {
    id: 'load-side-mark',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie muss eine Ladung in der Dunkelheit oder bei schlechter Sicht gekennzeichnet werden, wenn sie seitlich mehr als 40 cm über die Begrenzungsleuchten hinausragt?',
      en: 'How must a load be marked in darkness or bad visibility when it extends laterally more than 40 cm beyond the side lights of the vehicle?',
      ar: 'كيف تُعلَّم الحمولة في الظلام أو الرؤية السيئة إذا تجاوزت 40 سم جانبيًا عن مصابيح التحديد؟',
      tr: 'Karanlıkta veya kötü görüşte yük, yan konum lambalarını 40 cm\'den fazla aşıyorsa nasıl işaretlenir?',
      ru: 'Как обозначать груз в темноте/плохой видимости, если он выступает в сторону более чем на 40 см за габаритные огни?',
      pl: 'Jak oznaczyć ładunek po ciemku lub przy złej widzialności, gdy wystaje bocznie powyżej 40 cm poza światła pozycyjne?'
    },
    options: [
      { id: 'a', text: { de: 'Mit einem weißen Licht nach vorn', en: 'By a white light to the front', ar: 'بضوء أبيض إلى الأمام', tr: 'Öne doğru beyaz ışıkla', ru: 'Белым огнём спереди', pl: 'Białym światłem do przodu' } },
      { id: 'b', text: { de: 'Mit einem roten Licht nach hinten', en: 'By a red light to the back', ar: 'بضوء أحمر إلى الخلف', tr: 'Arkaya doğru kırmızı ışıkla', ru: 'Красным огнём сзади', pl: 'Czerwonym światłem do tyłu' } },
      { id: 'c', text: { de: 'Mit einer orangefarbenen Warntafel', en: 'By an orange warning plate', ar: 'بلوحة تحذير برتقالية', tr: 'Turuncu uyarı levhasıyla', ru: 'Оранжевой предупредительной табличкой', pl: 'Pomarańczową tablicą ostrzegawczą' } }
    ],
    correctIds: ['a', 'b'],
    explanation: {
      de: 'Vorne weißes Licht, hinten rotes Licht — so wird der Seitüberstand sichtbar.',
      en: 'A white light to the front and a red light to the rear make the overhang visible.',
      ar: 'ضوء أبيض أمامًا وأحمر خلفًا — ليظهر البروز الجانبي.',
      tr: 'Önde beyaz, arkada kırmızı ışıkla yan taşma görünür kılınır.',
      ru: 'Белый огонь спереди и красный сзади — чтобы боковой выступ был виден.',
      pl: 'Białe światło z przodu, czerwone z tyłu — by uwidocznić wystający bok.'
    }
  },
  {
    id: 'load-rear-more-than-1m',
    category: 'behavior',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Wie muss eine Ladung, die mehr als 1 m über die Rückstrahler hinausragt, in der Dunkelheit gekennzeichnet werden?',
      en: 'How must a load projecting more than 1 m beyond the rear reflectors be marked in darkness?',
      ar: 'كيف تُعلَّم حمولة تبرز أكثر من 1 م خلف العاكسات في الظلام؟',
      tr: 'Arka reflektörleri 1 m\'den fazla aşan yük karanlıkta nasıl işaretlenir?',
      ru: 'Как обозначать груз, выступающий назад более чем на 1 м, в темноте?',
      pl: 'Jak oznaczyć ładunek wystający ponad 1 m za tylne odblaski w ciemności?'
    },
    options: [
      { id: 'a', text: { de: 'Mit einer orangefarbenen Warntafel', en: 'By an orange warning plate', ar: 'بلوحة تحذير برتقالية', tr: 'Turuncu uyarı levhasıyla', ru: 'Оранжевой предупредительной табличкой', pl: 'Pomarańczową tablicą ostrzegawczą' } },
      { id: 'b', text: { de: 'Mit eingeschalteter Nebelschlussleuchte', en: 'By switching the rear fog lamp on', ar: 'بتشغيل المصباح الضبابي الخلفي', tr: 'Arka sis lambasını yakarak', ru: 'Включением заднего противотуманного', pl: 'Włączeniem tylnego światła przeciwmgielnego' } },
      { id: 'c', text: { de: 'Mit rotem Licht und rotem Rückstrahler', en: 'By a red light and red rear reflector', ar: 'بضوء أحمر وعاكس أحمر خلفي', tr: 'Kırmızı ışık ve kırmızı reflektörle', ru: 'Красным огнём и красным светоотражателем', pl: 'Czerwonym światłem i czerwonym odblaskiem' } }
    ],
    correctIds: ['c'],
    explanation: {
      de: 'Über 1 m Überstand bei Nacht: rotes Licht plus roter Rückstrahler.',
      en: 'Over 1 m overhang at night: a red lamp plus a red rear reflector.',
      ar: 'بروز أكثر من 1 م ليلًا: ضوء أحمر مع عاكس أحمر.',
      tr: '1 m\'den fazla taşma geceleri: kırmızı lamba ve kırmızı reflektör.',
      ru: 'Свыше 1 м ночью: красный фонарь и красный светоотражатель.',
      pl: 'Powyżej 1 m w nocy: czerwone światło i czerwony odblask.'
    }
  },
  {
    id: 'roof-load',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Sie wollen Ihr Urlaubsgepäck auf dem Dach Ihres voll besetzten Pkw transportieren. Was ist zu beachten?',
      en: 'You want to transport your holiday luggage on the roof of your fully occupied car. What must you observe?',
      ar: 'تريد نقل أمتعة السفر على سقف سيارتك المكتمل الركاب. ما الذي يجب مراعاته؟',
      tr: 'Tatil eşyalarınızı tamamen dolu aracın tavanında taşıyacaksınız. Nelere dikkat etmelisiniz?',
      ru: 'Вы хотите перевезти багаж на крыше полностью заполненного автомобиля. Что учитывать?',
      pl: 'Chcesz przewieźć bagaż wakacyjny na dachu w pełni obsadzonego auta. Na co zwrócić uwagę?'
    },
    options: [
      { id: 'a', text: { de: 'Angaben zur Dachlast in der Zulassungsbescheinigung Teil I', en: 'Roof load specifications in the registration certificate Part I', ar: 'بيانات حمل السقف في شهادة التسجيل الجزء الأول', tr: 'Tescil belgesi Bölüm I\'deki tavan yükü bilgileri', ru: 'Сведения о нагрузке на крышу в свидетельстве (часть I)', pl: 'Dane o obciążeniu dachu w dowodzie rejestracyjnym (część I)' } },
      { id: 'b', text: { de: 'Zulässige Gesamtmasse des Pkw', en: 'The gross vehicle weight rating of the car', ar: 'الوزن الإجمالي المسموح للسيارة', tr: 'Aracın izinli toplam ağırlığı', ru: 'Разрешённая полная масса автомобиля', pl: 'Dopuszczalna masa całkowita pojazdu' } },
      { id: 'c', text: { de: 'Herstellerangaben zur Dachlast in der Betriebsanleitung', en: 'The manufacturer\'s roof load specifications in the operating manual', ar: 'بيانات الشركة المصنعة لحمل السقف في دليل التشغيل', tr: 'Üreticinin kullanma kılavuzundaki tavan yükü bilgileri', ru: 'Указания изготовителя о нагрузке на крышу в руководстве', pl: 'Dane producenta o obciążeniu dachu w instrukcji obsługi' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'Dachlast steht in der Betriebsanleitung — nicht im Fahrzeugschein. Außerdem darf die zGM nicht überschritten werden.',
      en: 'Roof load is listed in the operating manual, not the registration. Also the gross weight rating must not be exceeded.',
      ar: 'حمل السقف مذكور في دليل التشغيل لا في وثيقة التسجيل. ولا يجب تجاوز الوزن الإجمالي المسموح.',
      tr: 'Tavan yükü kullanım kılavuzunda yazar, tescil belgesinde değil. Ayrıca toplam izinli ağırlık aşılmamalı.',
      ru: 'Нагрузка на крышу указана в руководстве, а не в свидетельстве. Не превышайте также разрешённую массу.',
      pl: 'Obciążenie dachu znajduje się w instrukcji, nie w dowodzie. Nie wolno też przekroczyć dmc.'
    }
  },

  // ── Other ABS / steering / handling ──
  {
    id: 'abs-advantages-1',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Welche Vorteile hat das automatische Antiblockiersystem (ABS)?',
      en: 'What are the advantages of an automatic anti-locking device (ABS)?',
      ar: 'ما مزايا نظام منع انغلاق المكابح ABS؟',
      tr: 'Otomatik kilitlenme önleyici sistem (ABS)\'in avantajları nelerdir?',
      ru: 'Каковы преимущества автоматической антиблокировочной системы (ABS)?',
      pl: 'Jakie zalety ma automatyczny układ ABS?'
    },
    options: [
      { id: 'a', text: { de: 'Beim Anfahren wird Durchdrehen verhindert', en: 'On setting off, wheelspin is prevented', ar: 'يمنع تدوير العجلات عند الانطلاق', tr: 'Kalkışta patinaj önlenir', ru: 'Предотвращает пробуксовку при старте', pl: 'Zapobiega poślizgowi przy ruszaniu' } },
      { id: 'b', text: { de: 'Starkes Bremsen und Ausweichen sind gleichzeitig möglich', en: 'It is possible to brake heavily and avoid an obstacle at the same time', ar: 'يمكن الفرملة بشدة وتفادي العائق في الوقت ذاته', tr: 'Sert frenleme ve manevra aynı anda mümkündür', ru: 'Можно резко тормозить и одновременно объезжать препятствие', pl: 'Można jednocześnie mocno hamować i omijać przeszkodę' } },
      { id: 'c', text: { de: 'Beim Bremsen in Kurven ist Kippgefahr ausgeschlossen', en: 'The danger of tipping over is reduced when braking on bends', ar: 'يمنع خطر الانقلاب عند الفرملة في المنعطفات', tr: 'Virajda frenlemede devrilme tehlikesi yoktur', ru: 'Исключает опасность опрокидывания в повороте', pl: 'Eliminuje ryzyko przewrócenia podczas hamowania na zakręcie' } }
    ],
    correctIds: ['b'],
    explanation: {
      de: 'ABS verhindert Räderblockieren — Bremsen und Lenken bleiben gleichzeitig möglich. Es ist keine Anti-Schleuder-Hilfe.',
      en: 'ABS keeps wheels from locking — you can brake and steer at the same time. It is not anti-skid.',
      ar: 'ABS يمنع قفل العجلات — يمكنك الفرملة والتوجيه معًا. ليس مانعًا للانزلاق.',
      tr: 'ABS tekerleklerin kilitlenmesini önler — aynı anda fren ve manevra mümkün. Savrulmayı engellemez.',
      ru: 'ABS не даёт колёсам блокироваться — можно одновременно тормозить и рулить. Это не курсовая устойчивость.',
      pl: 'ABS chroni przed blokowaniem kół — można hamować i kierować równocześnie. To nie układ przeciwpoślizgowy.'
    }
  },
  {
    id: 'abs-effect',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was bewirkt das automatische Antiblockiersystem (ABS)?',
      en: 'What is the effect of an automatic anti-locking device (ABS)?',
      ar: 'ما تأثير نظام منع انغلاق المكابح ABS؟',
      tr: 'Otomatik kilitlenme önleyici sistem (ABS) ne yapar?',
      ru: 'Что обеспечивает антиблокировочная система (ABS)?',
      pl: 'Co daje układ ABS?'
    },
    options: [
      { id: 'a', text: { de: 'Die Lenkfähigkeit bleibt beim Bremsen weitgehend erhalten', en: 'Steering control is largely retained when braking', ar: 'يبقى التحكم في التوجيه إلى حد كبير عند الفرملة', tr: 'Frenlemede direksiyon hâkimiyeti büyük ölçüde korunur', ru: 'Управляемость при торможении в основном сохраняется', pl: 'Sterowność jest w dużej mierze zachowana przy hamowaniu' } },
      { id: 'b', text: { de: 'Aquaplaning wird verhindert', en: 'Aquaplaning is prevented', ar: 'يمنع الانزلاق المائي', tr: 'Akuaplaning önlenir', ru: 'Предотвращается аквапланирование', pl: 'Zapobiega aquaplaningowi' } },
      { id: 'c', text: { de: 'Optimale Bremswirkung auch auf nassen Fahrbahnen', en: 'The vehicle is braked in the best possible way also on wet roads', ar: 'فرملة مثلى حتى على الطرق المبللة', tr: 'Islak yolda da en iyi şekilde frenlenir', ru: 'Оптимальное торможение и на мокрой дороге', pl: 'Optymalne hamowanie także na mokrej jezdni' } }
    ],
    correctIds: ['a', 'c'],
    explanation: {
      de: 'ABS hält die Räder am Rollen — die Lenkfähigkeit bleibt erhalten, auf Nässe wird der kürzeste Bremsweg erreicht. Aquaplaning verhindert es nicht.',
      en: 'ABS keeps the wheels rolling — steering is preserved and on wet roads the shortest braking is achieved. It does not stop aquaplaning.',
      ar: 'يحافظ ABS على دوران العجلات — يبقي التوجيه ويعطي أقصر مسافة فرملة على الرطب. لا يمنع الانزلاق المائي.',
      tr: 'ABS tekerlekleri dönmede tutar — direksiyon hâkimiyeti korunur, ıslak yolda en kısa fren elde edilir. Akuaplanı durdurmaz.',
      ru: 'ABS не даёт колёсам блокироваться — управляемость сохраняется, на мокрой — оптимальный путь. Аквапланирование им не предотвратить.',
      pl: 'ABS utrzymuje obrót kół — sterowność jest zachowana, na mokrej — najkrótsza droga hamowania. Aquaplaningowi nie zapobiega.'
    }
  },
  {
    id: 'abs-advantages-2',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 2,
    question: {
      de: 'Welche weiteren Vorteile bietet ABS?',
      en: 'What further advantages does ABS provide?',
      ar: 'ما المزايا الإضافية التي يقدمها ABS؟',
      tr: 'ABS başka hangi avantajları sağlar?',
      ru: 'Какие ещё преимущества даёт ABS?',
      pl: 'Jakie inne zalety ma ABS?'
    },
    options: [
      { id: 'a', text: { de: 'Kurven können erheblich schneller durchfahren werden', en: 'Bends can be taken considerably faster', ar: 'يمكن قطع المنعطفات بسرعة أكبر بكثير', tr: 'Virajlar çok daha hızlı alınabilir', ru: 'Можно проходить повороты значительно быстрее', pl: 'Można pokonywać zakręty znacznie szybciej' } },
      { id: 'b', text: { de: 'Die Räder blockieren beim Bremsen nicht', en: 'The wheels do not lock when braking', ar: 'لا تنغلق العجلات أثناء الفرملة', tr: 'Frenlemede tekerlekler kilitlenmez', ru: 'Колёса не блокируются при торможении', pl: 'Koła nie blokują się przy hamowaniu' } },
      { id: 'c', text: { de: 'Auch bei starker Bremsung bleibt die Lenkfähigkeit erhalten', en: 'Steering control is retained even when braking heavily', ar: 'تبقى القدرة على التوجيه حتى مع الفرملة الشديدة', tr: 'Sert frenlemede bile direksiyon hâkimiyeti korunur', ru: 'Управляемость сохраняется даже при сильном торможении', pl: 'Sterowność zachowana nawet przy mocnym hamowaniu' } }
    ],
    correctIds: ['b', 'c'],
    explanation: {
      de: 'ABS verhindert das Blockieren der Räder und erhält die Lenkbarkeit auch bei Vollbremsung.',
      en: 'ABS prevents wheel lock and keeps the car steerable even at full braking.',
      ar: 'ABS يمنع قفل العجلات ويبقي التوجيه ممكنًا حتى بأقصى فرملة.',
      tr: 'ABS kilitlenmeyi önler ve tam frende bile direksiyon hâkimiyetini korur.',
      ru: 'ABS предотвращает блокировку колёс и сохраняет управляемость даже при экстренном торможении.',
      pl: 'ABS chroni przed blokowaniem kół i zachowuje sterowność nawet przy hamowaniu awaryjnym.'
    }
  },
  {
    id: 'acc-attentive',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was sollten Sie beim Einsatz eines abstandsbezogenen Tempomats (ACC) beachten?',
      en: 'What should I be aware of when using an adaptive cruise control (ACC) system?',
      ar: 'ما الذي يجب الانتباه إليه عند استخدام نظام مثبت السرعة التكيفي ACC؟',
      tr: 'Mesafe duyarlı hız sabitleyici (ACC) kullanırken nelere dikkat etmelisiniz?',
      ru: 'Что учитывать при использовании адаптивного круиз-контроля (ACC)?',
      pl: 'Na co zwrócić uwagę przy korzystaniu z adaptacyjnego tempomatu (ACC)?'
    },
    options: [
      { id: 'a', text: { de: 'Das System kann durch starken Regen oder Schneefall beeinträchtigt werden', en: 'The system can be affected by heavy rain or snow', ar: 'قد يتأثر النظام بالمطر أو الثلج الكثيف', tr: 'Sistem yoğun yağmur veya kardan etkilenebilir', ru: 'Сильный дождь или снег могут влиять на систему', pl: 'Silny deszcz lub śnieg mogą zakłócać działanie systemu' } },
      { id: 'b', text: { de: 'Betätigen von Gas- oder Bremspedal kann das System jederzeit übersteuern', en: 'Pressing the accelerator or brake pedal can always override the system', ar: 'الضغط على الدواسة يستطيع تجاوز النظام في أي وقت', tr: 'Gaz veya frene basmak sistemi her zaman geçersiz kılar', ru: 'Нажатие газа или тормоза в любой момент отключает систему', pl: 'Naciśnięcie gazu lub hamulca w każdej chwili odłącza system' } },
      { id: 'c', text: { de: 'Auch bei längerem Einsatz muss ich aufmerksam bleiben', en: 'I must remain constantly attentive even when using the system for a longer period', ar: 'يجب أن أبقى منتبهًا دائمًا حتى عند الاستخدام لفترة طويلة', tr: 'Uzun süre kullanmama rağmen sürekli dikkatli olmalıyım', ru: 'Я должен оставаться внимательным даже при длительном использовании', pl: 'Muszę pozostać uważny nawet przy długim korzystaniu' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'ACC ist nur eine Hilfe — Wetter beeinträchtigt Sensoren, das System wird durch Pedale übersteuert, der Fahrer bleibt verantwortlich.',
      en: 'ACC is only an aid — weather affects the sensors, pedal input overrides it, and the driver stays responsible.',
      ar: 'ACC مجرد مساعد — الطقس يؤثر على الحساسات، الدواسات تتجاوزه، والمسؤولية تبقى على السائق.',
      tr: 'ACC yalnızca yardımcıdır — hava sensörleri etkiler, pedallar sistemi devre dışı bırakır, sürücü her zaman sorumludur.',
      ru: 'ACC — лишь помощник: погода влияет на датчики, педали отменяют систему, ответственность на водителе.',
      pl: 'ACC to tylko wspomaganie — pogoda wpływa na czujniki, pedały odłączają system, kierowca zawsze odpowiada.'
    }
  },
  {
    id: 'cruise-off-too-late',
    category: 'tech',
    classes: ['B', 'AB'],
    points: 3,
    question: {
      de: 'Was kann passieren, wenn der Tempomat zu spät ausgeschaltet wird?',
      en: 'What could happen if the cruise control system (speed limiter) is switched off too late?',
      ar: 'ماذا قد يحدث إذا تم إيقاف مثبت السرعة متأخرًا جدًا؟',
      tr: 'Hız sabitleyici çok geç kapatılırsa neler olabilir?',
      ru: 'Что может случиться, если круиз-контроль выключить слишком поздно?',
      pl: 'Co może się stać, gdy tempomat zostanie wyłączony za późno?'
    },
    options: [
      { id: 'a', text: { de: 'Überhöhte Kurvengeschwindigkeit', en: 'Excessively high cornering speed', ar: 'سرعة منعطف عالية جدًا', tr: 'Aşırı yüksek viraj hızı', ru: 'Слишком высокая скорость в повороте', pl: 'Zbyt duża prędkość na zakręcie' } },
      { id: 'b', text: { de: 'Überschreiten der zulässigen Höchstgeschwindigkeit', en: 'Exceeding the permissible maximum speed', ar: 'تجاوز الحد الأقصى للسرعة', tr: 'İzin verilen azami hızı aşma', ru: 'Превышение разрешённой максимальной скорости', pl: 'Przekroczenie dopuszczalnej prędkości' } },
      { id: 'c', text: { de: 'Auffahren auf das vorausfahrende Fahrzeug', en: 'Tailgating', ar: 'الالتصاق بالسيارة الأمامية', tr: 'Önündeki araca yapışma', ru: 'Слишком близкое приближение к передней машине', pl: 'Najechanie na pojazd z przodu' } }
    ],
    correctIds: ['a', 'b', 'c'],
    explanation: {
      de: 'Bleibt der Tempomat zu lange aktiv, drohen zu hohe Kurvengeschwindigkeit, Geschwindigkeitsüberschreitung und gefährliche Annäherung an Vordere.',
      en: 'If cruise control stays on too long you can corner too fast, exceed the speed limit and get too close to traffic ahead.',
      ar: 'استمرار التمبومات قد يؤدي إلى سرعة منعطف مفرطة، تجاوز الحد، أو الالتصاق بالسيارة الأمامية.',
      tr: 'Çok geç kapatılırsa: aşırı viraj hızı, hız limiti aşımı ve önündeki araca yapışma riski.',
      ru: 'Если оставить круиз слишком долго — слишком быстрый поворот, превышение лимита, близкое сближение.',
      pl: 'Zostawiony za długo tempomat grozi nadmierną prędkością na zakręcie, przekroczeniem limitu i zbyt bliską jazdą.'
    }
  }
];
