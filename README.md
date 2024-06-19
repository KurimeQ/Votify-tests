# Votify Test Suite

Tento projekt obsahuje testovací sadu pro aplikaci Votify, zaměřenou na ověřování funkčnosti přihlašování a onboarding procesu. Testy jsou napsány v TypeScript pomocí knihovny [Playwright](https://playwright.dev/).

## Struktura projektu
Votify-tests
- `page-objects/`
  - `LoginPage.ts`: Obsahuje Page Object pro přihlašovací stránku.
  - `OnboardingPage.ts`: Obsahuje Page Object pro onboarding stránku.
- `tests/`
  - `login.spec.ts`: Obsahuje testy pro přihlašovací stránku.
  - `onboarding.spec.ts`: Obsahuje testy pro onboarding stránku.

## Instalace

### Instalace Visual Studio Code

1. Stáhněte a nainstalujte Visual Studio Code z [oficiálních stránek](https://code.visualstudio.com/).
2. Po instalaci otevřete VSCode.

### Instalace Node.js a NPM

1. Stáhněte a nainstalujte Node.js z [oficiálních stránek](https://nodejs.org/).
2. Po instalaci ověřte instalaci spuštěním následujících příkazů v terminálu:
   ```bash
   node -v
   npm -v

## Instalace playwrith a spouštění testů

   ```bash
   npm init playwrith@latest

   npx playwright test
    npx playwright test --ui



 ## Klonujte repozitář:
   ```bash
   git clone https://github.com/KurimeQ/Votify-tests.git
   cd Votify-tests

   Příklad TestResults : ![exampleTestResults](https://github.com/KurimeQ/Votify-tests/assets/173040943/fba3727d-cc8b-460d-aaf6-b7b3ac31aaad)
