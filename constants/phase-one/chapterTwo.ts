import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 2: Negations & Exceptions
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * How the Qur'an says: No, Not, Never, Except, Nothing but
 * 
 * Examples: لا, لم, لن, ليس, إلا
 * 
 * Purpose:
 * Teaches how meanings are restricted or denied.
 * Critical for understanding rulings and statements.
 */

const words: Word[] = [
  {
    id: 'p1-ch2-w0',
    arabic: 'نَعَمْ',
    transliteration: "Na'am",
    translations: {
      en: 'Yes',
      ur: 'ہاں',
      ur_en: 'Jee haan'
    },
    examples: [
      {
        arabic: 'فَهَلْ وَجَدْتُمْ مَا وَعَدَ رَبُّكُمْ حَقًّا قَالُوا نَعَمْ',
        translation: 'Did you find what your Lord promised you to be true? They will say, "Yes."',
        translations: {
      en: 'Did you find what your Lord promised you to be true? They will say, "Yes."',
      ur: 'کیا تم نے وہ پا لیا جس کا تمہارے رب نے تم سے وعدہ کیا تھا؟ وہ کہیں گے "ہاں"',
      ur_en: 'Kya tum ne woh paa liya jis ka tumhare Rab ne tum se wada kiya tha? Woh kahenge "Haan"'
    },
        ref: '7:44'
      },
      {
        arabic: 'قَالَ نَعَمْ وَإِنَّكُمْ لَمِنَ الْمُقَرَّبِينَ',
        translation: 'He said, "Yes, and you will be among my favorites."',
        translations: {
      en: 'He said, "Yes, and you will be among my favorites."',
      ur: 'اس نے کہا "ہاں، اور تم ضرور میرے قریبی لوگوں میں سے ہو گے"',
      ur_en: 'Us ne kaha "Haan, aur tum zaroor mere qareebi logon mein se ho ge"'
    },
        ref: '7:114'
      }
    ]
  },
  {
    id: 'p1-ch2-w1',
    arabic: 'بَلَىٰ',
    transliteration: 'Balā',
    translations: {
      en: 'Yes, indeed',
      ur: 'کیوں نہیں / ضرور',
      ur_en: 'Kyun nahi / Zaroor'
    },
    examples: [
      {
        arabic: 'بَلَىٰ مَنْ كَسَبَ سَيِّئَةً وَأَحَاطَتْ بِهِ خَطِيئَتُهُ',
        translation: 'Yes indeed, whoever commits misdeeds, and becomes besieged by his iniquities',
        translations: {
      en: 'Yes indeed, whoever commits misdeeds, and becomes besieged by his iniquities',
      ur: 'ہاں کیوں نہیں، جس نے کوئی برائی کمائی اور اس کی خطا نے اسے گھیر لیا',
      ur_en: 'Haan kyun nahi, jis ne koi burai kamayi aur us ki khata ne usay gher liya'
    },
        ref: '2:81'
      },
      {
        arabic: 'بَلَىٰ مَنْ أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ',
        translation: 'Indeed, whoever submits his face in Islam to Allah while being a doer of good',
        translations: {
      en: 'Indeed, whoever submits his face in Islam to Allah while being a doer of good',
      ur: 'ہاں، جس نے اپنا چہرہ اللہ کے لیے جھکا دیا اور وہ نیکوکار بھی ہو',
      ur_en: 'Haan, jis ne apna chehra Allah ke liye jhuka diya aur woh nekokaar bhi ho'
    },
        ref: '2:112'
      }
    ]
  },
  {
    id: 'p1-ch2-w2',
    arabic: 'كَلَّا',
    transliteration: 'Kallā',
    translations: {
      en: 'Certainly not',
      ur: 'ہرگز نہیں',
      ur_en: 'Hargiz nahi'
    },
    examples: [
      {
        arabic: 'كَلَّا سَنَكْتُبُ مَا يَقُولُ',
        translation: 'No indeed! We will write what he says',
        translations: {
      en: 'No indeed! We will write what he says',
      ur: 'ہرگز نہیں، ہم لکھ لیں گے جو وہ کہتا ہے',
      ur_en: 'Hargiz nahi, hum likh lenge jo woh kehta hai'
    },
        ref: '19:79'
      },
      {
        arabic: 'كَلَّا إِنَّهَا كَلِمَةٌ هُوَ قَائِلُهَا',
        translation: 'Certainly not! It is just a word he is saying',
        translations: {
      en: 'Certainly not! It is just a word he is saying',
      ur: 'ہرگز نہیں، یہ تو بس ایک بات ہے جو وہ کہہ رہا ہے',
      ur_en: 'Hargiz nahi, yeh to bas ek baat hai jo woh keh raha hai'
    },
        ref: '23:100'
      }
    ]
  },
  {
    id: 'p1-ch2-w3',
    arabic: 'إِلَّا',
    transliteration: 'Illā',
    translations: {
      en: 'Except',
      ur: 'سوائے / مگر',
      ur_en: 'Siwaye / Magar'
    },
    examples: [
      {
        arabic: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.',
        translations: {
      en: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.',
      ur: 'اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ ہے اور قائم رکھنے والا ہے',
      ur_en: 'Allah, us ke siwa koi mabood nahi, woh zinda hai aur qaim rakhne wala hai'
    },
        ref: '3:2'
      },
      {
        arabic: 'مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ',
        translation: 'Who is he that can intercede with Him except with His permission?',
        translations: {
      en: 'Who is he that can intercede with Him except with His permission?',
      ur: 'کون ہے جو اس کے پاس سفارش کرے مگر اس کی اجازت سے؟',
      ur_en: 'Kaon hai jo us ke paas sifarish kare magar us ki ijazat se?'
    },
        ref: '2:255'
      }
    ]
  },
  {
    id: 'p1-ch2-w4',
    arabic: 'إِنْ ... إِلَّا',
    transliteration: 'In... Illā',
    translations: {
      en: 'Nothing but',
      ur: 'نہیں... مگر',
      ur_en: 'Nahi... magar'
    },
    examples: [
      {
        arabic: 'إِنْ أَرَدْنَا إِلَّا إِحْسَانًا وَتَوْفِيقًا',
        translation: 'We intended nothing but good conduct and accommodation.',
        translations: {
      en: 'We intended nothing but good conduct and accommodation.',
      ur: 'ہمارا ارادہ صرف بھلائی اور موافقت کا تھا',
      ur_en: 'Hamara irada sirf bhalai aur muafiqat ka tha'
    },
        ref: '4:62'
      },
      {
        arabic: 'وَقَالُوا إِنْ هَذَا إِلَّا سِحْرٌ مُبِينٌ',
        translation: 'And say, "This is nothing but plain magic."',
        translations: {
      en: 'And say, "This is nothing but plain magic."',
      ur: 'اور انہوں نے کہا، یہ نہیں ہے مگر کھلا جادو',
      ur_en: 'Aur unhon ne kaha, yeh nahi hai magar khula jadu'
    },
        ref: '37:15'
      }
    ]
  },
  {
    id: 'p1-ch2-w5',
    arabic: 'مَا ... إِلَّا',
    transliteration: 'Mā... Illā',
    translations: {
      en: 'Nothing but',
      ur: 'نہیں... مگر',
      ur_en: 'Nahi... magar'
    },
    examples: [
      {
        arabic: 'مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ',
        translation: 'I said not to them except what You commanded me',
        translations: {
      en: 'I said not to them except what You commanded me',
      ur: 'میں نے ان سے نہیں کہا مگر وہی جس کا تو نے مجھے حکم دیا تھا',
      ur_en: 'Main ne un se nahi kaha magar wahi jis ka tu ne mujhe hukum diya tha'
    },
        ref: '5:117'
      },
      {
        arabic: 'مَا هَذَا إِلَّا بَشَرٌ مِثْلُكُمْ',
        translation: 'This is nothing but a human like you',
        translations: {
      en: 'This is nothing but a human like you',
      ur: 'یہ تو تمہاری طرح کا ایک انسان ہی ہے',
      ur_en: 'Yeh to tumhari tarah ka ek insan hi hai'
    },
        ref: '23:24'
      }
    ]
  },
  {
    id: 'p1-ch2-w6',
    arabic: 'أَلَّا',
    transliteration: 'Allā',
    translations: {
      en: 'So as not to',
      ur: 'تاکہ نہ',
      ur_en: 'Taake na'
    },
    examples: [
      {
        arabic: 'أَمَرَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ',
        translation: 'He has commanded that you worship none but Him.',
        translations: {
      en: 'He has commanded that you worship none but Him.',
      ur: 'اس نے حکم دیا ہے کہ تم اس کے سوا کسی کی عبادت نہ کرو',
      ur_en: 'Us ne hukum diya hai ke tum us ke siwa kisi ki ibadat na karo'
    },
        ref: '12:40'
      },
      {
        arabic: 'وَمَا لَنَا أَلَّا نَتَوَكَّلَ عَلَى اللَّهِ',
        translation: 'And why should we not rely upon Allah',
        translations: {
      en: 'And why should we not rely upon Allah',
      ur: 'اور ہمیں کیا ہوا کہ ہم اللہ پر بھروسہ نہ کریں؟',
      ur_en: 'Aur humein kya hua ke hum Allah par bharosa na karein?'
    },
        ref: '14:12'
      }
    ]
  },
  {
    id: 'p1-ch2-w7',
    arabic: 'لَا',
    transliteration: 'Lā',
    translations: {
      en: 'No / Do not',
      ur: 'نہیں / نہ',
      ur_en: 'Nahi / Na'
    },
    examples: [
      {
        arabic: 'لَا تَسْمَعُ فِيهَا لَاغِيَةً',
        translation: 'Wherein they will hear no unsuitable speech.',
        translations: {
      en: 'Wherein they will hear no unsuitable speech.',
      ur: 'جس میں وہ کوئی بے ہودہ بات نہیں سنیں گے',
      ur_en: 'Jis mein woh koi behuda baat nahi sunenge'
    },
        ref: '88:11'
      },
      {
        arabic: 'لَا يُسْمِنُ وَلَا يُغْنِي مِنْ جُوعٍ',
        translation: 'That neither nourishes nor satisfies hunger.',
        translations: {
      en: 'That neither nourishes nor satisfies hunger.',
      ur: 'جو نہ موٹا کرے اور نہ بھوک مٹائے',
      ur_en: 'Jo na mota kare aur na bhook mitaye'
    },
        ref: '88:7'
      }
    ]
  },
  {
    id: 'p1-ch2-w8',
    arabic: 'مَا',
    transliteration: 'Mā',
    translations: {
      en: 'Not (past/present)',
      ur: 'نہیں',
      ur_en: 'Nahi'
    },
    examples: [
      {
        arabic: 'وَمَا يَخْدَعُونَ إِلَّا أَنْفُسَهُمْ',
        translation: 'but they deceive none but themselves',
        translations: {
      en: 'but they deceive none but themselves',
      ur: 'اور وہ دھوکہ نہیں دیتے مگر اپنے آپ کو',
      ur_en: 'Aur woh dhoka nahi dete magar apne aap ko'
    },
        ref: '2:9'
      },
      {
        arabic: 'وَمَا كَفَرَ سُلَيْمَانُ',
        translation: 'Solomon disbelieved not',
        translations: {
      en: 'Solomon disbelieved not',
      ur: 'اور سلیمان نے کفر نہیں کیا',
      ur_en: 'Aur Suleiman ne kufr nahi kiya'
    },
        ref: '2:102'
      }
    ]
  },
  {
    id: 'p1-ch2-w9',
    arabic: 'لَنْ',
    transliteration: 'Lan',
    translations: {
      en: 'Will not (future)',
      ur: 'ہرگز نہیں (مستقبل)',
      ur_en: 'Hargiz nahi (mustaqbil)'
    },
    examples: [
      {
        arabic: 'قَالَ لَنْ أُرْسِلَهُ مَعَكُمْ',
        translation: 'He said, "I will not send him with you"',
        translations: {
      en: 'He said, "I will not send him with you"',
      ur: 'اس نے کہا، "میں اسے تمہارے ساتھ ہرگز نہیں بھیجوں گا"',
      ur_en: 'Us ne kaha, "Main usay tumhare sath hargiz nahi bhejunga"'
    },
        ref: '12:66'
      },
      {
        arabic: 'فَلَنْ أَبْرَحَ الْأَرْضَ حَتَّى يَأْذَنَ لِي أَبِي',
        translation: 'I will not leave this land until my father permits me',
        translations: {
      en: 'I will not leave this land until my father permits me',
      ur: 'پس میں اس زمین سے نہیں ٹلوں گا جب تک میرا باپ مجھے اجازت نہ دے دے',
      ur_en: 'Pas main is zameen se nahi talunga jab tak mera baap mujhe ijazat na de de'
    },
        ref: '12:80'
      }
    ]
  },
  {
    id: 'p1-ch2-w10',
    arabic: 'لَمْ',
    transliteration: 'Lam',
    translations: {
      en: 'Did not (past)',
      ur: 'نہیں (ماضی)',
      ur_en: 'Nahi (maazi)'
    },
    examples: [
      {
        arabic: 'مَا لَمْ تَكُونُوا تَعْلَمُونَ',
        translation: 'that which you did not know',
        translations: {
      en: 'that which you did not know',
      ur: 'جو تم نہیں جانتے تھے',
      ur_en: 'Jo tum nahi jante thay'
    },
        ref: '2:151'
      },
      {
        arabic: 'وَلَمْ يُؤْتَ سَعَةً مِنَ الْمَالِ',
        translation: 'and he was not given plenty of wealth',
        translations: {
      en: 'and he was not given plenty of wealth',
      ur: 'اور اسے مال کی وسعت نہیں دی گئی',
      ur_en: 'Aur usay maal ki wusat nahi di gayi'
    },
        ref: '2:247'
      }
    ]
  },
  {
    id: 'p1-ch2-w11',
    arabic: 'لَيْسَ',
    transliteration: 'Laysa',
    translations: {
      en: 'Is not',
      ur: 'نہیں ہے',
      ur_en: 'Nahi hai'
    },
    examples: [
      {
        arabic: 'لَيْسَ لَهُمْ طَعَامٌ إِلَّا مِنْ ضَرِيعٍ',
        translation: 'For them, there will be no food except from a poisonous, thorny plant',
        translations: {
      en: 'For them, there will be no food except from a poisonous, thorny plant',
      ur: 'ان کے لیے کوئی کھانا نہیں ہوگا سوائے زہریلے خاردار پودے کے',
      ur_en: 'Un ke liye koi khana nahi hoga siwaye zahreely khardaar poday ke'
    },
        ref: '88:6'
      },
      {
        arabic: 'لَيْسَ عَلَيْكُمْ جُنَاحٌ أَنْ تَدْخُلُوا بُيُوتًا غَيْرَ مَسْكُونَةٍ',
        translation: 'There is no blame on you for entering uninhabited houses',
        translations: {
      en: 'There is no blame on you for entering uninhabited houses',
      ur: 'تم پر کوئی گناہ نہیں کہ تم غیر آباد گھروں میں داخل ہو جاؤ',
      ur_en: 'Tum par koi gunah nahi ke tum ghair abaad gharon mein dakhil ho jao'
    },
        ref: '24:29'
      }
    ]
  },
  {
    id: 'p1-ch2-w12',
    arabic: 'غَيْر',
    transliteration: 'Ghayr',
    translations: {
      en: 'Other than',
      ur: 'علاوہ / غیر',
      ur_en: 'Siwaye / Gair'
    },
    examples: [
      {
        arabic: 'مَنْ إِلَهٌ غَيْرُ اللَّهِ يَأْتِيكُمْ بِضِيَاءٍ',
        translation: 'What deity other than Allah could bring you light?',
        translations: {
      en: 'What deity other than Allah could bring you light?',
      ur: 'اللہ کے سوا کون سا معبود ہے جو تمہیں روشنی لا کر دے؟',
      ur_en: 'Allah ke siwa kaon sa mabood hai jo tumhein roshni la kar de?'
    },
        ref: '28:71'
      },
      {
        arabic: 'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        translation: 'not of those who have evoked [Your] anger or of those who are astray',
        translations: {
      en: 'not of those who have evoked [Your] anger or of those who are astray',
      ur: 'ایسے لوگوں کا راستہ جن پر نہ غصہ کیا گیا اور نہ وہ بھٹکے ہوئے ہیں',
      ur_en: 'Aise logon ka rasta jin par na ghussa kiya gaya aur na woh bhatkay hue hain'
    },
        ref: '1:7'
      }
    ]
  },
  {
    id: 'p1-ch2-w13',
    arabic: 'مِنْ دُونِ',
    transliteration: 'Min dūni',
    translations: {
      en: 'Apart from',
      ur: 'اس کے سوا',
      ur_en: 'Iske siwa'
    },
    examples: [
      {
        arabic: 'وَمَا لَكُمْ مِنْ دُونِ اللَّهِ مِنْ وَلِيٍّ وَلَا نَصِيرٍ',
        translation: 'And apart from Allah you have no protector or helper',
        translations: {
      en: 'And apart from Allah you have no protector or helper',
      ur: 'اور اللہ کے سوا تمہارا نہ کوئی دوست ہے اور نہ کوئی مددگار',
      ur_en: 'Aur Allah ke siwa tumhara na koi dost hai aur na koi madadgar'
    },
        ref: '29:22'
      },
      {
        arabic: 'وَقَالَ إِنَّمَا اتَّخَذْتُمْ مِنْ دُونِ اللَّهِ أَوْثَانًا',
        translation: 'And [Abraham] said, "You have only taken, apart from Allah, idols"',
        translations: {
      en: 'And [Abraham] said, "You have only taken, apart from Allah, idols"',
      ur: 'اور ابراہیم نے کہا "دراصل تم نے اللہ کے سوا بتوں کو پکڑ رکھا ہے"',
      ur_en: 'Aur Ibrahim ne kaha "Darasal tum ne Allah ke siwa buton ko pakar rakha hai"'
    },
        ref: '29:25'
      }
    ]
  }
];

export const CHAPTER_TWO: LevelNode = {
  id: 'chapter-2',
  section: 'Phase 1: Foundation',
  title: 'Negations & Exceptions',
  description: 'How the Qur\'an expresses denial, restrictions, and exceptions.',
  icon: '🚫',
  color: 'bg-emerald-500',
  locked: false,
  words: words
};
