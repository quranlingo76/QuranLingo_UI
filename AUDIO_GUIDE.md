# QuranLingo Audio Files Guide

## 📁 Folder Structure

```
Client/
└── public/
    └── audio/
        ├── day-1/          # Phase 1: Foundation
        │   ├── ذلك.mp3
        │   ├── ذٰلك.mp3
        │   └── هو.mp3
        ├── day-2/          # Pointers & Negations
        │   ├── ذلك.mp3
        │   └── ...
        └── common/         # Shared words across levels
            └── ...
```

## 🎵 How to Add Audio Files

### Option 1: Generate with TTS (Recommended)
Use online tools to generate MP3 files:

1. **Google Cloud TTS** (Best Quality - Free Trial)
   - https://cloud.google.com/text-to-speech
   - Language: Arabic (ar)
   - Voice: Wavenet (highest quality)

2. **Narakeet** (Free for small files)
   - https://www.narakeet.com/
   - Select Arabic voice

3. **TTSMaker** (Free)
   - https://ttsmaker.com/
   - Select Arabic language

### Option 2: Record Human Voice
- Use a microphone to record native Arabic pronunciation
- Save as MP3 format

### Option 3: Download from Quranic Resources
- EveryAyah.com has Quran audio
- QuranComplex.gov.sa

## 📝 File Naming Rules

**Important**: Remove diacritics from filenames!

| Arabic Word (with diacritics) | Filename |
|-------------------------------|----------|
| ذَٰلِكَ                       | ذلك.mp3  |
| هُوَ                          | هو. mp3   |
| ذٰلِكَ                        | ذٰلك.mp3 |

The app automatically removes diacritics when looking for files.

## 🚀 Quick Start Example

1. Create a folder for day-1:
   ```bash
   mkdir public/audio/day-1
   ```

2. Add test audio file:
   - Generate "ذلك" pronunciation from TTSMaker
   - Save as `public/audio/day-1/ذلك.mp3`

3. Test in app - click speaker icon for that word!

## 💡 Pro Tips

- **Quality**: Use 44.1kHz, 128kbps for good quality/size ratio
- **Size**: Each file should be small (< 50KB typically)
- **Format**: MP3 is universally supported
- **Organization**: Use level folders (day-1, day-2, etc.) for easy management

## 🔧 Troubleshooting

**Audio not playing?**
- Check console: it shows which file it's trying to load
- Verify filename matches exactly (without diacritics)
- Make sure file is in `/public/audio/` folder
- Check file format is `.mp3`

**Example Console Output:**
```
Playing audio: /audio/day-1/ذلك.mp3 for text: ذَٰلِكَ
```

This shows you exactly which file to create!
