# 🗺️ Průvodce městy – Webová aplikace pro vyhledávání zajímavých míst

## 📋 Popis

Tento projekt byl **shrnutím celoroční výuky tvorby webových aplikací**. Kombinovali jsme zde znalosti z **HTML, CSS, JavaScriptu** a backendu v **Node.js (NestJS)**.  
Webová aplikace slouží jako **prohlížeč zajímavých míst v českých městech** – například restaurací, památek nebo dalších atrakcí.

### ⚙️ Funkcionalita

- **Zobrazení měst** – každé město má svou fotku a seznam míst.
- **Zajímavá místa** – každé místo obsahuje:
  - Fotku
  - Popisek
  - Hodnocení (nezávislé a nemazatelné)
  - Komentáře (s časem, jménem a obsahem)
- **Přidávání míst** – kdokoli může přidat nové místo pomocí webového formuláře:
  - Pokud město již existuje, provede se `PUT` požadavek
  - Pokud město neexistuje, použije se `POST`
- **Databázová vrstva** – využívá repozitáře v NestJS pro přístup k datům

> Podobnou úlohu jsem měl u praktické maturitní zkoušky – první den zaměřené na NestJS, druhý den na SQL (mirroring a zálohování).

## 🛠️ Technologie

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js – NestJS  
- **Databáze:** SQL (přes repozitáře v NestJS)
