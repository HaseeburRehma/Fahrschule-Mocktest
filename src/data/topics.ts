import type { LicenseClass, LocalizedText } from './types';

/**
 * Topic taxonomy for the German driving theory exam.
 *
 * Two layers:
 *   - Grundstoff (Basic Material)        — applies to ALL classes
 *   - Zusatzstoff (Additional Material)  — class-specific (here: B)
 *
 * The codes (2.1, 2.1.01, …) match the official Themenkatalog
 * numbering used by TÜV / DEKRA. The question counts are the
 * publicly published catalogue sizes (Stand 2024) and are kept
 * here purely as informational metadata — not actual questions.
 *
 * The exam engine in `src/lib/exam.ts` uses this taxonomy to
 * draw a representative 30-question paper (20 Grundstoff + 10
 * Zusatzstoff for class B), preserving topic distribution.
 */

export type TopicType = 'grundstoff' | 'zusatzstoff';

export interface SubTopic {
  /** Official catalogue code, e.g. "2.1.06". */
  code: string;
  name: LocalizedText;
  /** Official catalogue question count (informational). */
  catalogueCount?: number;
}

export interface Topic {
  /** Top-level code, e.g. "2.1". */
  code: string;
  name: LocalizedText;
  type: TopicType;
  /** Licence classes this topic applies to. */
  classes: LicenseClass[];
  /** Total questions in the official catalogue for this topic. */
  catalogueCount: number;
  subtopics?: SubTopic[];
}

// ═════════════════════════════════════════════════════════════════════════
// GRUNDSTOFF (Basic Material) — common to all classes
// ═════════════════════════════════════════════════════════════════════════

export const grundstoffTopics: Topic[] = [
  {
    code: 'G.01',
    name: {
      de: 'Persönliche Voraussetzungen',
      en: 'Individual requirements',
      ar: 'المتطلبات الشخصية',
      tr: 'Bireysel gereksinimler',
      ru: 'Личные требования',
      pl: 'Wymagania indywidualne'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 46
  },
  {
    code: 'G.02',
    name: {
      de: 'Risikofaktor Mensch',
      en: 'Risk factor: human being',
      ar: 'العامل البشري كمصدر للخطر',
      tr: 'Risk faktörü: insan',
      ru: 'Человеческий фактор риска',
      pl: 'Czynnik ryzyka: człowiek'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 31
  },
  {
    code: 'G.03',
    name: {
      de: 'Rechtliche Rahmenbedingungen',
      en: 'Legal framework conditions',
      ar: 'الإطار القانوني',
      tr: 'Yasal çerçeve',
      ru: 'Правовая база',
      pl: 'Ramy prawne'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 30
  },
  {
    code: 'G.04',
    name: {
      de: 'Straßenverkehrssystem und Bahnübergänge',
      en: 'Road traffic system and railway crossings',
      ar: 'نظام المرور والمعابر السكك الحديدية',
      tr: 'Trafik sistemi ve hemzemin geçitler',
      ru: 'Дорожная система и ж/д переезды',
      pl: 'System ruchu drogowego i przejazdy kolejowe'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 225
  },
  {
    code: 'G.05',
    name: {
      de: 'Grundregeln, Vorfahrt und Verkehrsregelungen',
      en: 'Basic rules, right of way and traffic regulations',
      ar: 'القواعد الأساسية وأولوية المرور',
      tr: 'Temel kurallar, geçiş önceliği ve trafik düzenlemeleri',
      ru: 'Основные правила, приоритет и регулирование движения',
      pl: 'Zasady podstawowe, pierwszeństwo i przepisy ruchu'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 186
  },
  {
    code: 'G.06',
    name: {
      de: 'Verkehrszeichen und Verkehrseinrichtungen',
      en: 'Traffic signals and traffic facilities',
      ar: 'إشارات وتجهيزات المرور',
      tr: 'Trafik işaretleri ve tesisleri',
      ru: 'Дорожные знаки и средства организации движения',
      pl: 'Znaki i urządzenia drogowe'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 170
  },
  {
    code: 'G.07',
    name: {
      de: 'Verkehrsteilnehmer — Eigenschaften und Verhalten',
      en: 'Road users — characteristics and conduct',
      ar: 'مستخدمو الطريق — الصفات والسلوك',
      tr: 'Trafik katılımcıları — özellik ve davranış',
      ru: 'Участники движения — особенности и поведение',
      pl: 'Uczestnicy ruchu — cechy i zachowanie'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 194
  },
  {
    code: 'G.08',
    name: {
      de: 'Geschwindigkeit, Abstand und umweltschonendes Fahren',
      en: 'Speed, spacing and environment-friendly driving',
      ar: 'السرعة والمسافة والقيادة الصديقة للبيئة',
      tr: 'Hız, mesafe ve çevre dostu sürüş',
      ru: 'Скорость, дистанция и экологичное вождение',
      pl: 'Prędkość, odstęp i ekonomiczna jazda'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 208
  },
  {
    code: 'G.09',
    name: {
      de: 'Verkehrsbeobachtung und Verhalten während der Fahrt',
      en: 'Traffic observation and conduct while driving',
      ar: 'مراقبة المرور والسلوك أثناء القيادة',
      tr: 'Trafik gözlemi ve sürüş davranışı',
      ru: 'Наблюдение за обстановкой и поведение в пути',
      pl: 'Obserwacja ruchu i zachowanie podczas jazdy'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 217
  },
  {
    code: 'G.10',
    name: {
      de: 'Konfliktfreier Verkehr',
      en: 'Conflict-free traffic',
      ar: 'مرور خالٍ من النزاعات',
      tr: 'Çatışmasız trafik',
      ru: 'Безконфликтное движение',
      pl: 'Bezkolizyjny ruch drogowy'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 87
  },
  {
    code: 'G.11',
    name: {
      de: 'Verhalten in besonderen Situationen, Folgen von Verstößen',
      en: 'Conduct in special situations, consequences of violations',
      ar: 'السلوك في حالات خاصة ونتائج المخالفات',
      tr: 'Özel durumlarda davranış ve ihlal sonuçları',
      ru: 'Поведение в особых ситуациях и последствия нарушений',
      pl: 'Zachowanie w sytuacjach szczególnych i skutki wykroczeń'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 69
  },
  {
    code: 'G.12',
    name: {
      de: 'Lebenslanges Lernen',
      en: 'Lifelong learning for safety',
      ar: 'التعلم المستمر من أجل السلامة',
      tr: 'Yaşam boyu öğrenme',
      ru: 'Постоянное обучение ради безопасности',
      pl: 'Ciągłe uczenie się dla bezpieczeństwa'
    },
    type: 'grundstoff',
    classes: ['A', 'B', 'AB', 'Mofa'],
    catalogueCount: 14
  }
];

// ═════════════════════════════════════════════════════════════════════════
// ZUSATZSTOFF — Klasse B (Additional Material B / Official Topics)
// ═════════════════════════════════════════════════════════════════════════

export const zusatzstoffTopicsB: Topic[] = [
  {
    code: '2.1',
    name: {
      de: 'Gefahrenlehre',
      en: 'Hazard analysis',
      ar: 'دراسة المخاطر',
      tr: 'Tehlike analizi',
      ru: 'Анализ опасностей',
      pl: 'Analiza zagrożeń'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB'],
    catalogueCount: 217,
    subtopics: [
      { code: '2.1.01', name: { de: 'Grundformen der Verkehrsverhaltens', en: 'Basic forms of traffic behaviour', ar: 'الأشكال الأساسية للسلوك المروري', tr: 'Trafik davranışının temel biçimleri', ru: 'Базовые формы поведения в трафике', pl: 'Podstawowe formy zachowań w ruchu' }, catalogueCount: 7 },
      { code: '2.1.02', name: { de: 'Verhalten gegenüber Fußgängern', en: 'Behaviour towards pedestrians', ar: 'السلوك تجاه المشاة', tr: 'Yayalara karşı davranış', ru: 'Поведение по отношению к пешеходам', pl: 'Zachowanie wobec pieszych' }, catalogueCount: 7 },
      { code: '2.1.03', name: { de: 'Straßen- und Witterungsverhältnisse', en: 'Road and weather conditions', ar: 'حالة الطريق والطقس', tr: 'Yol ve hava şartları', ru: 'Состояние дороги и погоды', pl: 'Warunki drogowe i pogodowe' }, catalogueCount: 30 },
      { code: '2.1.04', name: { de: 'Dunkelheit und schlechte Sicht', en: 'Darkness and poor visibility', ar: 'الظلام والرؤية الضعيفة', tr: 'Karanlık ve düşük görüş', ru: 'Темнота и плохая видимость', pl: 'Ciemność i słaba widoczność' }, catalogueCount: 6 },
      { code: '2.1.05', name: { de: 'Geschwindigkeit', en: 'Speed', ar: 'السرعة', tr: 'Hız', ru: 'Скорость', pl: 'Prędkość' }, catalogueCount: 8 },
      { code: '2.1.06', name: { de: 'Überholen', en: 'Overtaking', ar: 'التجاوز', tr: 'Sollama', ru: 'Обгон', pl: 'Wyprzedzanie' }, catalogueCount: 47 },
      { code: '2.1.07', name: { de: 'Besondere Verkehrslagen', en: 'Special traffic situations', ar: 'حالات مرور خاصة', tr: 'Özel trafik durumları', ru: 'Особые дорожные ситуации', pl: 'Szczególne sytuacje drogowe' }, catalogueCount: 47 },
      { code: '2.1.08', name: { de: 'Autobahn', en: 'Highway / motorway', ar: 'الطرق السريعة', tr: 'Otoyol', ru: 'Автомагистраль', pl: 'Autostrada' }, catalogueCount: 31 },
      { code: '2.1.09', name: { de: 'Alkohol, Drogen, Medikamente', en: 'Alcohol, drugs, medication', ar: 'الكحول والمخدرات والأدوية', tr: 'Alkol, uyuşturucu, ilaç', ru: 'Алкоголь, наркотики, медикаменты', pl: 'Alkohol, narkotyki, leki' }, catalogueCount: 12 },
      { code: '2.1.10', name: { de: 'Müdigkeit und Ablenkung', en: 'Fatigue and distraction', ar: 'التعب والتشتت', tr: 'Yorgunluk ve dikkat dağınıklığı', ru: 'Усталость и отвлечение', pl: 'Zmęczenie i rozproszenie' }, catalogueCount: 6 },
      { code: '2.1.11', name: { de: 'Affektives Verhalten im Straßenverkehr', en: 'Affective-emotional behaviour in traffic', ar: 'السلوك العاطفي في المرور', tr: 'Trafikte duygusal davranış', ru: 'Эмоциональное поведение в трафике', pl: 'Zachowanie afektywne w ruchu' }, catalogueCount: 28 }
    ]
  },
  {
    code: '2.2',
    name: {
      de: 'Verhalten im Straßenverkehr',
      en: 'Behaviour in road traffic',
      ar: 'السلوك في حركة المرور',
      tr: 'Trafikte davranış',
      ru: 'Поведение в дорожном движении',
      pl: 'Zachowanie w ruchu drogowym'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB'],
    catalogueCount: 243,
    subtopics: [
      { code: '2.2.02', name: { de: 'Straßenbenutzung', en: 'Road use', ar: 'استخدام الطريق', tr: 'Yol kullanımı', ru: 'Использование дороги', pl: 'Korzystanie z drogi' }, catalogueCount: 4 },
      { code: '2.2.03', name: { de: 'Geschwindigkeit', en: 'Speed', ar: 'السرعة', tr: 'Hız', ru: 'Скорость', pl: 'Prędkość' }, catalogueCount: 19 },
      { code: '2.2.04', name: { de: 'Abstand', en: 'Distance', ar: 'المسافة', tr: 'Mesafe', ru: 'Дистанция', pl: 'Odstęp' }, catalogueCount: 10 },
      { code: '2.2.05', name: { de: 'Überholen', en: 'Overtaking', ar: 'التجاوز', tr: 'Sollama', ru: 'Обгон', pl: 'Wyprzedzanie' }, catalogueCount: 17 },
      { code: '2.2.06', name: { de: 'Vorbeifahren', en: 'Driving past', ar: 'المرور بجانب', tr: 'Geçiş', ru: 'Проезд мимо', pl: 'Mijanie' }, catalogueCount: 2 },
      { code: '2.2.07', name: { de: 'Benutzung von Fahrstreifen', en: 'Use of lanes by motor vehicles', ar: 'استخدام المسارات', tr: 'Şerit kullanımı', ru: 'Использование полос', pl: 'Korzystanie z pasów' }, catalogueCount: 16 },
      { code: '2.2.09', name: { de: 'Abbiegen, Wenden, Rückwärtsfahren', en: 'Turning, U-turns and reversing', ar: 'الانعطاف والدوران والرجوع', tr: 'Dönüş, U dönüş ve geri gitme', ru: 'Поворот, разворот, движение задом', pl: 'Skręcanie, zawracanie, cofanie' }, catalogueCount: 13 },
      { code: '2.2.11', name: { de: 'Besondere Verkehrslagen', en: 'Special traffic situations', ar: 'حالات خاصة', tr: 'Özel durumlar', ru: 'Особые ситуации', pl: 'Sytuacje szczególne' }, catalogueCount: 2 },
      { code: '2.2.12', name: { de: 'Halten und Parken', en: 'Stopping and parking', ar: 'الوقوف والركن', tr: 'Durma ve park', ru: 'Остановка и стоянка', pl: 'Zatrzymywanie i parkowanie' }, catalogueCount: 15 },
      { code: '2.2.13', name: { de: 'Parkzeitüberwachungseinrichtungen', en: 'Facilities for monitoring parking time', ar: 'مرافق رقابة الوقوف', tr: 'Park süresi denetim tesisleri', ru: 'Системы контроля парковки', pl: 'Urządzenia kontroli parkowania' }, catalogueCount: 5 },
      { code: '2.2.14', name: { de: 'Sorgfaltspflichten', en: 'Due diligence obligations', ar: 'واجبات الحذر', tr: 'Özen yükümlülükleri', ru: 'Обязанности по осторожности', pl: 'Obowiązki staranności' }, catalogueCount: 9 },
      { code: '2.2.15', name: { de: 'Liegenbleiben und Abschleppen', en: 'Breakdown and towing', ar: 'الأعطال والقطر', tr: 'Arıza ve çekme', ru: 'Поломка и буксировка', pl: 'Awaria i holowanie' }, catalogueCount: 8 },
      { code: '2.2.16', name: { de: 'Warnzeichen', en: 'Warning signs', ar: 'إشارات تحذير', tr: 'Uyarı işaretleri', ru: 'Предупреждающие знаки', pl: 'Znaki ostrzegawcze' }, catalogueCount: 2 },
      { code: '2.2.17', name: { de: 'Beleuchtung', en: 'Lighting', ar: 'الإضاءة', tr: 'Aydınlatma', ru: 'Освещение', pl: 'Oświetlenie' }, catalogueCount: 18 },
      { code: '2.2.18', name: { de: 'Autobahn und Kraftfahrstraße', en: 'Motorways and expressways', ar: 'الأوتوبان والطرق السريعة', tr: 'Otoyol ve hızlı yol', ru: 'Автомагистрали и скоростные', pl: 'Autostrady i drogi ekspresowe' }, catalogueCount: 32 },
      { code: '2.2.19', name: { de: 'Bahnübergänge', en: 'Level crossings', ar: 'معابر السكك الحديدية', tr: 'Hemzemin geçitler', ru: 'Ж/д переезды', pl: 'Przejazdy kolejowe' }, catalogueCount: 8 },
      { code: '2.2.21', name: { de: 'Personenbeförderung', en: 'Passenger transport', ar: 'نقل الأشخاص', tr: 'Yolcu taşımacılığı', ru: 'Перевозка пассажиров', pl: 'Przewóz osób' }, catalogueCount: 14 },
      { code: '2.2.22', name: { de: 'Ladung', en: 'Load / charge', ar: 'الحمولة', tr: 'Yük', ru: 'Груз', pl: 'Ładunek' }, catalogueCount: 17 },
      { code: '2.2.23', name: { de: 'Sonstige Pflichten des Fahrzeugführers', en: 'Other duties of the driver', ar: 'واجبات أخرى للسائق', tr: 'Sürücünün diğer görevleri', ru: 'Иные обязанности водителя', pl: 'Inne obowiązki kierowcy' }, catalogueCount: 19 },
      { code: '2.2.26', name: { de: 'Fußgängerüberwege', en: 'Pedestrian crossings', ar: 'ممرات المشاة', tr: 'Yaya geçitleri', ru: 'Пешеходные переходы', pl: 'Przejścia dla pieszych' }, catalogueCount: 4 },
      { code: '2.2.29', name: { de: 'Übermäßige Straßenbenutzung', en: 'Excessive road use', ar: 'الاستخدام المفرط للطريق', tr: 'Aşırı yol kullanımı', ru: 'Чрезмерное использование дороги', pl: 'Nadmierne korzystanie z drogi' }, catalogueCount: 1 },
      { code: '2.2.30', name: { de: 'Sonn- und Feiertagsfahrverbot', en: 'Sunday driving ban', ar: 'حظر القيادة يوم الأحد', tr: 'Pazar sürüş yasağı', ru: 'Запрет движения в воскресенье', pl: 'Niedzielny zakaz jazdy' }, catalogueCount: 1 },
      { code: '2.2.32', name: { de: 'Verkehrshindernisse', en: 'Traffic obstacles', ar: 'عوائق المرور', tr: 'Trafik engelleri', ru: 'Препятствия на дороге', pl: 'Przeszkody w ruchu' }, catalogueCount: 2 },
      { code: '2.2.34', name: { de: 'Unfall', en: 'Accident', ar: 'الحادث', tr: 'Kaza', ru: 'ДТП', pl: 'Wypadek' }, catalogueCount: 8 },
      { code: '2.2.36', name: { de: 'Zeichen und Weisungen der Polizei', en: 'Police signals and instructions', ar: 'إشارات وأوامر الشرطة', tr: 'Polis işaret ve talimatları', ru: 'Сигналы и указания полиции', pl: 'Sygnały i polecenia policji' }, catalogueCount: 3 },
      { code: '2.2.37', name: { de: 'Wechsel- und Dauerlichtzeichen', en: 'Alternating and continuous light signals', ar: 'إشارات الضوء المتغيرة والدائمة', tr: 'Değişken ve sabit ışık işaretleri', ru: 'Перемен. и постоянные световые сигналы', pl: 'Sygnały świetlne zmienne i ciągłe' }, catalogueCount: 4 },
      { code: '2.2.38', name: { de: 'Blaues und gelbes Blinklicht', en: 'Blue and yellow flashing light', ar: 'الضوء الوامض الأزرق والأصفر', tr: 'Mavi ve sarı yanıp sönen ışık', ru: 'Синий и жёлтый проблесковый', pl: 'Niebieskie i żółte światło błyskowe' }, catalogueCount: 1 }
    ]
  },
  {
    code: '2.4',
    name: {
      de: 'Verkehrszeichen',
      en: 'Traffic signs',
      ar: 'إشارات المرور',
      tr: 'Trafik işaretleri',
      ru: 'Дорожные знаки',
      pl: 'Znaki drogowe'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB', 'A', 'Mofa'],
    catalogueCount: 38,
    subtopics: [
      { code: '2.4.40', name: { de: 'Gefahrenzeichen', en: 'Warning signs', ar: 'إشارات الخطر', tr: 'Uyarı işaretleri', ru: 'Предупреждающие знаки', pl: 'Znaki ostrzegawcze' }, catalogueCount: 4 },
      { code: '2.4.41', name: { de: 'Vorschriftzeichen', en: 'Regulatory signs', ar: 'إشارات تنظيمية', tr: 'Düzenleyici işaretler', ru: 'Запрещающие/предписывающие знаки', pl: 'Znaki nakazu i zakazu' }, catalogueCount: 14 },
      { code: '2.4.42', name: { de: 'Richtzeichen', en: 'Guideposts / direction signs', ar: 'إشارات الإرشاد', tr: 'Yönlendirme işaretleri', ru: 'Указательные знаки', pl: 'Znaki informacyjne' }, catalogueCount: 19 },
      { code: '2.4.43', name: { de: 'Verkehrseinrichtungen', en: 'Traffic facilities', ar: 'تجهيزات مرورية', tr: 'Trafik tesisleri', ru: 'Дорожные сооружения', pl: 'Urządzenia drogowe' }, catalogueCount: 1 }
    ]
  },
  {
    code: '2.5',
    name: {
      de: 'Umweltschutz',
      en: 'Environmental protection',
      ar: 'حماية البيئة',
      tr: 'Çevre koruma',
      ru: 'Защита окружающей среды',
      pl: 'Ochrona środowiska'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB'],
    catalogueCount: 27
  },
  {
    code: '2.6',
    name: {
      de: 'Vorschriften zum Fahrzeugbetrieb',
      en: 'Regulations concerning vehicle operation',
      ar: 'لوائح تشغيل المركبات',
      tr: 'Araç işletim mevzuatı',
      ru: 'Правила эксплуатации ТС',
      pl: 'Przepisy dotyczące eksploatacji pojazdów'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB'],
    catalogueCount: 28,
    subtopics: [
      { code: '2.6.01', name: { de: 'Untersuchung der Fahrzeuge', en: 'Vehicle inspection', ar: 'فحص المركبات', tr: 'Araç muayenesi', ru: 'Техосмотр', pl: 'Badanie pojazdów' }, catalogueCount: 3 },
      { code: '2.6.02', name: { de: 'Zulassung, Fahrzeugpapiere, Führerschein', en: 'Registration, vehicle documents, driving licence', ar: 'التسجيل ووثائق المركبة ورخصة القيادة', tr: 'Tescil, araç belgeleri, ehliyet', ru: 'Регистрация, документы, права', pl: 'Rejestracja, dokumenty pojazdu, prawo jazdy' }, catalogueCount: 4 },
      { code: '2.6.03', name: { de: 'Anhängerbetrieb', en: 'Trailer operation', ar: 'تشغيل المقطورة', tr: 'Römork kullanımı', ru: 'Эксплуатация прицепа', pl: 'Eksploatacja przyczepy' }, catalogueCount: 13 },
      { code: '2.6.06', name: { de: 'Maße, Gewichte, Geschwindigkeitsbegrenzer', en: 'Dimensions, weights and speed limiters', ar: 'الأبعاد والأوزان ومحدد السرعة', tr: 'Boyut, ağırlık ve hız sınırlayıcı', ru: 'Размеры, массы, ограничители скорости', pl: 'Wymiary, masy, ograniczniki prędkości' }, catalogueCount: 5 },
      { code: '2.6.07', name: { de: 'Kartenlesen und Routenplanung', en: 'Map reading and route planning', ar: 'قراءة الخرائط وتخطيط المسار', tr: 'Harita okuma ve rota planlama', ru: 'Чтение карт и планирование маршрута', pl: 'Czytanie mapy i planowanie trasy' }, catalogueCount: 3 }
    ]
  },
  {
    code: '2.7',
    name: {
      de: 'Technik',
      en: 'Technology',
      ar: 'التقنية',
      tr: 'Teknik',
      ru: 'Техника',
      pl: 'Technika'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB'],
    catalogueCount: 120,
    subtopics: [
      { code: '2.7.01', name: { de: 'Fahrbetrieb, Fahrzeugphysik, Fahrtechnik', en: 'Driving operation, vehicle physics, driving technique', ar: 'القيادة، فيزياء المركبة، تقنية القيادة', tr: 'Sürüş, araç fiziği, sürüş tekniği', ru: 'Эксплуатация, физика ТС, техника вождения', pl: 'Eksploatacja, fizyka pojazdu, technika jazdy' }, catalogueCount: 59 },
      { code: '2.7.02', name: { de: 'Mängelerkennung und Fehlerlokalisierung', en: 'Defect detection and fault localisation', ar: 'كشف الأعطال', tr: 'Arıza tespiti', ru: 'Обнаружение неисправностей', pl: 'Wykrywanie usterek' }, catalogueCount: 28 },
      { code: '2.7.03', name: { de: 'Motor, Kraftstoff, Elektrik', en: 'Engine, fuel, electrical system', ar: 'المحرك والوقود والكهرباء', tr: 'Motor, yakıt, elektrik', ru: 'Двигатель, топливо, электрика', pl: 'Silnik, paliwo, elektryka' }, catalogueCount: 2 },
      { code: '2.7.04', name: { de: 'Schmierstoffe und Frostschutz', en: 'Lubricants and antifreeze', ar: 'الزيوت ومانع التجمد', tr: 'Yağlar ve antifriz', ru: 'Смазки и антифриз', pl: 'Smary i płyn niezamarzający' }, catalogueCount: 2 },
      { code: '2.7.05', name: { de: 'Reifen — Verwendung und Wartung', en: 'Tyre use and maintenance', ar: 'استخدام الإطارات وصيانتها', tr: 'Lastik kullanımı ve bakımı', ru: 'Использование и обслуживание шин', pl: 'Użycie i konserwacja opon' }, catalogueCount: 13 },
      { code: '2.7.06', name: { de: 'Bremsanlagen und Geschwindigkeitsregler', en: 'Braking systems and speed controllers', ar: 'الفرامل ومثبت السرعة', tr: 'Fren sistemi ve hız sabitleyici', ru: 'Тормоза и круиз-контроль', pl: 'Układy hamulcowe i tempomat' }, catalogueCount: 15 }
    ]
  },
  {
    code: '2.8',
    name: {
      de: 'Eignung und Befähigung von Fahrzeugführern',
      en: 'Driver suitability and competence',
      ar: 'لياقة وكفاءة السائقين',
      tr: 'Sürücü uygunluk ve yeterlilik',
      ru: 'Пригодность и компетентность водителя',
      pl: 'Zdolność i kwalifikacje kierowców'
    },
    type: 'zusatzstoff',
    classes: ['B', 'AB'],
    catalogueCount: 5
  }
];

/** All Class-B-relevant topics — handy for the exam engine. */
export const classBTopics: Topic[] = [...grundstoffTopics, ...zusatzstoffTopicsB];

/** Look up a topic by code. */
export function findTopic(code: string): Topic | undefined {
  return classBTopics.find((t) => t.code === code);
}

/** Sum of catalogue questions for a topic type and class. */
export function catalogueTotal(type: TopicType, licenseClass: LicenseClass): number {
  const list = type === 'grundstoff' ? grundstoffTopics : zusatzstoffTopicsB;
  return list
    .filter((t) => t.classes.includes(licenseClass))
    .reduce((sum, t) => sum + t.catalogueCount, 0);
}
