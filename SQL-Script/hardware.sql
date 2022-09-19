-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 19. Sep 2022 um 14:50
-- Server-Version: 10.4.24-MariaDB
-- PHP-Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `hardware`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `cpu`
--

CREATE TABLE `cpu` (
  `CPU_ID` int(11) NOT NULL,
  `CPU_Bezeichnung` varchar(25) NOT NULL,
  `CPU_Hersteller` varchar(20) NOT NULL,
  `CPU_Kerne` int(11) NOT NULL,
  `CPU_Mhz` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `festplattte`
--

CREATE TABLE `festplattte` (
  `FP_ID` int(11) NOT NULL,
  `FP_Bezeichnung` varchar(25) NOT NULL,
  `FP_Typ` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `graka`
--

CREATE TABLE `graka` (
  `Graka_ID` int(11) NOT NULL,
  `Graka_Bezeichnung` varchar(25) NOT NULL,
  `Graka_Hersteller` varchar(20) NOT NULL,
  `Graka_Kerne` int(11) NOT NULL,
  `Graka_Mhz` int(11) NOT NULL,
  `Graka_VRAM` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `graka`
--

INSERT INTO `graka` (`Graka_ID`, `Graka_Bezeichnung`, `Graka_Hersteller`, `Graka_Kerne`, `Graka_Mhz`, `Graka_VRAM`) VALUES
(1, '760GTX', 'Nvidia', 2, 2200, 2000);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `motherboard`
--

CREATE TABLE `motherboard` (
  `MB_ID` int(11) NOT NULL,
  `MB_Bezeichnung` varchar(25) NOT NULL,
  `MB_Faktor` varchar(10) NOT NULL,
  `MB_Sockel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ram`
--

CREATE TABLE `ram` (
  `RAM_ID` int(11) NOT NULL,
  `RAM_Bezeichnung` varchar(25) NOT NULL,
  `RAM_Hersteller` varchar(20) NOT NULL,
  `RAM_Speicher` int(11) NOT NULL,
  `RAM_Speichertyp` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `raum`
--

CREATE TABLE `raum` (
  `Raum_ID` int(11) NOT NULL,
  `Raum_Nummer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `cpu`
--
ALTER TABLE `cpu`
  ADD PRIMARY KEY (`CPU_ID`);

--
-- Indizes für die Tabelle `festplattte`
--
ALTER TABLE `festplattte`
  ADD PRIMARY KEY (`FP_ID`);

--
-- Indizes für die Tabelle `graka`
--
ALTER TABLE `graka`
  ADD PRIMARY KEY (`Graka_ID`);

--
-- Indizes für die Tabelle `motherboard`
--
ALTER TABLE `motherboard`
  ADD PRIMARY KEY (`MB_ID`);

--
-- Indizes für die Tabelle `ram`
--
ALTER TABLE `ram`
  ADD PRIMARY KEY (`RAM_ID`);

--
-- Indizes für die Tabelle `raum`
--
ALTER TABLE `raum`
  ADD PRIMARY KEY (`Raum_ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `cpu`
--
ALTER TABLE `cpu`
  MODIFY `CPU_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `festplattte`
--
ALTER TABLE `festplattte`
  MODIFY `FP_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `graka`
--
ALTER TABLE `graka`
  MODIFY `Graka_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `motherboard`
--
ALTER TABLE `motherboard`
  MODIFY `MB_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `ram`
--
ALTER TABLE `ram`
  MODIFY `RAM_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `raum`
--
ALTER TABLE `raum`
  MODIFY `Raum_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
