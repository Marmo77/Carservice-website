# 🚗 NORD-CAR Goleniów
<p align="center">
  <em>Nowoczesna wizytówka biznesowa zintegrowana z systemem zarządzania ofertami w czasie rzeczywistym.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />
  <img src="https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFF" />
  <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## 🖥 Frontend: Opis działania i technologii
Frontend projektu został zaprojektowany jako **responsywna aplikacja typu Single Page Application (SPA)**, której głównym celem jest maksymalna konwersja użytkownika oraz szybkość ładowania treści.

### Kluczowe założenia techniczne:
*   **Architektura komponentowa:** Interfejs zbudowany jest w oparciu o modułowe komponenty (React), co pozwala na łatwe utrzymanie kodu i skalowanie strony o kolejne sekcje (np. podstrona z ofertą aut).
*   **Stylizacja Mobile-First:** Wykorzystujemy **Tailwind CSS**, co gwarantuje, że strona wygląda perfekcyjnie na każdym urządzeniu – od smartfonów, przez tablety, aż po ekrany desktopowe. Stylizacja jest zorientowana na wydajność (mała waga plików CSS).
*   **Interaktywność:** Zastosowanie nowoczesnych bibliotek sprawia, że nawigacja jest płynna, a elementy takie jak "Hero Section" czy formularze kontaktowe reagują dynamicznie na akcje użytkownika.
*   **Optymalizacja zasobów:** Wszystkie grafiki w folderze `/public` są przygotowane pod kątem optymalizacji, co w połączeniu z bundlerem **Vite** zapewnia błyskawiczny czas reakcji strony ("Time to Interactive").

### Struktura widoków:
1.  **Hero Section:** Przyciągający uwagę nagłówek z jasnym wezwaniem do działania (CTA).
2.  **Sekcja Usług:** Semantyczne karty z opisami, ułatwiające skanowanie treści przez użytkownika.
3.  **Formularz Kontaktowy:** W pełni responsywny, przygotowany do integracji z zewnętrznymi serwisami obsługi maili.
4.  **Nawigacja:** Inteligentne menu (z funkcją "hamburger" dla urządzeń mobilnych).

---

## 📋 Przegląd Projektu
Projekt **NORD-CAR Goleniów** to kompleksowe rozwiązanie typu „Fullstack Lite”. Stworzone z myślą o lokalnym biznesie, łączy czytelną stronę ofertową z bezpiecznym, odizolowanym systemem zarządzania pojazdami.

| Moduł | Cel | Dostęp |
| :--- | :--- | :--- |
| **Frontend** | Prezentacja usług i oferty aut | Publiczny |
| **Admin Panel** | Dodawanie/edycja pojazdów | Prywatny (Auth) |

---

## 🛠 Podejście Programistyczne

### 🔐 Bezpieczeństwo & Architektura
*   **Separacja danych:** Wykorzystujemy architekturę **Headless**. Strona główna komunikuje się z bazą danych w trybie „Read-Only”, co eliminuje ryzyko ingerencji osób postronnych.
*   **Autoryzacja:** Dostęp do edycji ogłoszeń zabezpieczony przez **Supabase Auth**. Panel administratora jest ukryty przed robotami indeksującymi poprzez konfigurację `noindex/nofollow`.
*   **Real-time:** Dzięki silnikowi Supabase, zmiany w ofercie aut są widoczne na stronie natychmiast po zapisaniu w panelu.

### 🚀 Stack Technologiczny
*   **UI/UX:** React z Tailwind CSS (podejście *Mobile First*).
*   **Baza Danych:** PostgreSQL (przez Supabase) – bezpieczne przechowywanie danych.
*   **Storage:** Obsługa zdjęć aut poprzez dedykowany Bucket w chmurze Supabase.
*   **Hosting:** Vercel – automatyczny deployment (CI/CD).

---

## 🏗 Struktura Aplikacji
```text
/root
├── /src/components   # Moduły UI (Navbar, Hero, CarCard)
├── /src/pages        # Strony publiczne
├── /src/admin        # Panel zarządzania (chroniony)
├── /lib/supabase.js  # Konfiguracja połączenia z bazą
└── /public           # Zasoby statyczne (logo, zdjęcia)
