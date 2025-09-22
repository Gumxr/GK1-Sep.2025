
# GK1-SportBook

En React Native app bygget med **Expo** og **React Navigation**.  
Formålet er at give en enkel prototype til booking af sportsfaciliteter.
Demo Video ligger i Github under navnet: 1Demovideo.mp4
Besvarelse fra survey ligger i Github under navnet: 2Booking af sports- og fritidsfaciliteter.csv


---

## Installation

1. Klon repoet eller hent zip-filen (uden `node_modules`):
   ```bash
   git clone <DIT-GITHUB-LINK>
   cd GK1-SportBook


2. Installer afhængigheder:

   ```bash
   npm install
   ```

3. Start appen:

   ```bash
   npx expo start
   ```

---

## Kørsel

Når Expo bundleren kører:

* Tryk `w` for at åbne i browseren.
* Scan QR-koden i **Expo Go** appen på Android eller iOS.

Fejlfinding (ryd cache):

```bash
npx expo start -c
```

---

## Projektstruktur

* **App.js** – Navigation (tabs og stacks)
* **index.js** – Entrypoint, registrerer `App`
* **app.json** – Expo konfiguration (ikon, splash, navn)
* **assets/** – Billeder og ressourcer

---

## Billeder

Alle billeder ligger i `assets/` og importeres relativt.

Eksempel:

```js
const images = {
  s1: require('./assets/Padel.jpg'),
  s2: require('./assets/Fodbold.jpg'),
  s3: require('./assets/Svømme.jpg'),
  s4: require('./assets/Badminton.jpg'),
  s5: require('./assets/Basket.webp'),
  s6: require('./assets/Handbold.jpg'),
  s7: require('./assets/Golf.png'),
  s8: require('./assets/Volleyball.jpg'),
};
```

Brug dem i komponenter:

```jsx
<Image source={images.s1} style={{ width: 100, height: 100 }} />
```

---

## Navigation

Appen bruger **bottom tabs** med tre sektioner:

* **Søg** – Stack med Explore → FacilityDetails → Booking
* **Bookinger**
* **Profil**

---

## Afhængigheder (udpluk)

* `expo` \~54.0.3
* `react` 19.1.0
* `react-native` 0.81.4
* `@react-navigation/native`
* `@react-navigation/bottom-tabs`
* `@react-navigation/native-stack`
* `@expo/vector-icons`

---

## Bemærk

* `node_modules` er udeladt i repo og zip (se `.gitignore`).
* Alle nødvendige billeder findes i `assets/`-mappen.

```
