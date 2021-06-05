# Solidabis koodihaaste

Ratkaisu on luotu React/Typescript:llä ja linttauksesta huolehtii Airbnb:n ESLint-säännöt.

Alustana koodatessa toimii Windows 10 ja editorina VSCode.

## Heroku linkki

[Fuel Consumption Calculator](https://warm-sands-25719.herokuapp.com/)

## Kuvaus ratkaisusta

Ratkaisussa bensankulutuksen kasvaminen lasketaan funktiolla `f(x) = 1.009^(x-1) * l`, missä `x` on haluttu ajonopeus ja `l` on bensakulutus `1km/h` ajonopeudella. Tästä on helppo laskea kokonaiskulutukset, yms. eri matkanpituuksille.

## Ohjeet

### Sovelluksen käynnistäminen

Kloonaa repositorio:
`git clone https://github.com/k0psutin/solidabis-koodihaaste koodihaaste`

Tämän jälkeen mene kloonattuun repositorioon ja asenna riippuvaisuudet:

```[cmd]
cd koodihaaste
npm i
```

Kun riippuvaisuudet ovat asennettu, käynnistä sovellus komennolla:

```[cmd]
npm start
```

### Testit

Testit suoritetaan komennolla:

```[cmd]
npm test
```
