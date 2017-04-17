# Dzīvības Apdrošināšana ar uzkrājumu

## Atruma
Uz šī kalkulatora pamata vien nevajadzētu veikt ieguldījumus dzīvības apdrošināšanā ar uzkrājumu. Tas tika izveidots tikai, lai ilustrētu dažādās investēšanas stratēģijas un to provizorisko ienesīgumu. Lēmumu par ieguldījumu apdrošināšanā katram ir jāpieņem individuāli izvērtējot visu pieejamo informāciju.

## Lietošana
```sh
npm install
vi src/index.js
# Nokonfigurē `grossSalary` (bruto) mainīgo
npm run build
node dist/index.js
```

## Investēšanas stratēģijas

### InvestRegularlyAndBigAtYearEndStrategy
1. Investē katru mēnesi minimālo plāna prēmiju;
2. Gada beigās veic lielu iemaksu ar trūkstošo summu, lai maksimizētu nookļu atmaksu.

### InvestBigAtYearEndStrategy
1. Atver apdrošināšanas polisi decembrī;
2. Katru gadu (ieskaitot polises atvēršanas gadu) veic maksimālo iemaksu decembrī.

### InvestBigAtYearStartStrategy
1. Atver apdrošināšanas polisi janvārī;
2. Katru gadu (ieskaitot polises atvēršanas gadu) veic maksimālo iemaksu janvārī.

### InvestEvenlyStrategy
1. Katru mēnesi iemaksā 1/12 daļu no maksimālās summas, lai maksimizētu nodokļu atmaksu.

### InvestBigAtPeriodEndStrategy
1. Atver 5 apdrošināšanas polises;
2. Veic minimālās iemaksas;
3. Katras polises pēdējā mēnesī veic trūkstošo iemaksu;
4. Ver polisi ciet.

### InvestBigAtPeriodStartStrategy
1. Atver 5 apdrošināšanas polises;
2. Katrā polisē ieliec maksimālo summu (mīnus minimālās ikmēneša iemaksas * 59);
3. Veic minimālās iemaksas turpmākos 59 mēnešus;
4. Ver polisi ciet.

## Apdrošinātāji un to piedāvājjumi
### Swedbank: konservatīvā stratēģija
Vidējais uzkrājuma pieaugums gadā: 0.4%
Minimālā ikmēneša iemaksa: 40 EUR
Iemaksu komisija: 1.5%
Ikmēneša administrēšanas komisija: 0.75% (min. 2.13 EUR)

### Swedbank: reālās vērtības stratēģija
Vidējais uzkrājuma pieaugums gadā: 3.8%
Minimālā ikmēneša iemaksa: 40 EUR
Iemaksu komisija: 1.5%
Ikmēneša administrēšanas komisija: 1% (min. 2.13 EUR)

### Swedbank: sabalansētā stratēģija
Vidējais uzkrājuma pieaugums gadā: 5.7%
Minimālā ikmēneša iemaksa: 40 EUR
Iemaksu komisija: 1.5%
Ikmēneša administrēšanas komisija: 1% (min. 2.13 EUR)

### Swedbank: pieauguma stratēģija
Vidējais uzkrājuma pieaugums gadā: 7.1%
Minimālā ikmēneša iemaksa: 40 EUR
Iemaksu komisija: 1.5%
Ikmēneša administrēšanas komisija: 1.25% (min. 2.13 EUR)

### Swedbank: aktīvā pieauguma stratēģija
Vidējais uzkrājuma pieaugums gadā: 7.4%
Minimālā ikmēneša iemaksa: 40 EUR
Iemaksu komisija: 1.5%
Ikmēneša administrēšanas komisija: 1.25% (min. 2.13 EUR)

### SEB: garantētā pieauguma stratēģija
Garantētais uzkrājuma pieaugums gadā: 0.6%
Minimālā ikmēneša iemaksa: 25 EUR
Līguma noslēgšanas komisija: 21.34 EUR
Iemaksu komisija: 3%
Ikmēneša administrēšanas komisija: 0.95%

### SEB: ieguldījums fondos
Vidējais uzkrājuma pieaugums gadā: 3.9%
Minimālā ikmēneša iemaksa: 25 EUR
Līguma noslēgšanas komisija: 21.34 EUR
Iemaksu komisija: 3%
Ikmēneša administrēšanas komisija: 0.75%

### ERGO
Vidējais uzkrājuma pieaugums gadā: 0%
Minimālā ikmēneša iemaksa: 15 EUR
Iemaksu komisija: 3%
Ikmēneša administrēšanas komisija: 2.4% + 2 EUR
