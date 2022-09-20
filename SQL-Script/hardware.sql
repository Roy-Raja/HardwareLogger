-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 20. Sep 2022 um 10:50
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.1.2
CREATE DATABASE hardware;
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

--
-- Daten für Tabelle `cpu`
--

INSERT INTO `cpu` (`CPU_ID`, `CPU_Bezeichnung`, `CPU_Hersteller`, `CPU_Kerne`, `CPU_Mhz`) VALUES
(1, 'Ryzen 7', 'AMD', 8, 4500),
(2, 'i7 12700k', 'Intel Core', 12, 5000);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `festplattte`
--

CREATE TABLE `festplatte` (
  `FP_ID` int(11) NOT NULL,
  `FP_Speicher` varchar(11) NOT NULL,
  `FP_Bezeichnung` varchar(25) NOT NULL,
  `FP_Typ` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `festplattte`
--

INSERT INTO `festplatte` (`FP_ID`, `FP_Speicher`, `FP_Bezeichnung`, `FP_Typ`) VALUES
(1, '18TB', 'Toschiba MG09ACA', 'HDD'),
(2, '1TB', 'Samsung 970 Evo Plus', 'SSD');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `graka`
--

CREATE TABLE `graka` (
  `Graka_ID` int(11) NOT NULL,
  `Graka_Bezeichnung` varchar(25) NOT NULL,
  `Graka_Hersteller` varchar(20) NOT NULL,
  `Graka_Mhz` int(11) NOT NULL,
  `Graka_VRAM` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `graka`
--

INSERT INTO `graka` (`Graka_ID`, `Graka_Bezeichnung`, `Graka_Hersteller`, `Graka_Mhz`, `Graka_VRAM`) VALUES
(1, 'Geforce GTX 760', 'Nvidia', 3000, '2048 MB'),
(2, 'Geforce TRX 3070 Ti', 'Nvidia', 1575, '8192 MB');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `motherboard`
--

CREATE TABLE `motherboard` (
  `MB_ID` int(11) NOT NULL,
  `MB_Bezeichnung` varchar(25) NOT NULL,
  `MB_Faktor` varchar(10) NOT NULL,
  `MB_Sockel` varchar(11) NOT NULL,
  `MB_Chipsatz` varchar(10) NOT NULL,
  `MB_RAM_Slots` int(11) NOT NULL,
  `MB_RAM_Typ` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `motherboard`
--

INSERT INTO `motherboard` (`MB_ID`, `MB_Bezeichnung`, `MB_Faktor`, `MB_Sockel`, `MB_Chipsatz`, `MB_RAM_Slots`, `MB_RAM_Typ`) VALUES
(1, 'MPG B550 Gaming Plus', 'ATX', 'So.AM4', 'AMD B550', 4, 'DDR4'),
(2, 'X570-A PRO', 'ATX', 'So.AM4', 'AMD X570', 4, 'DDR4');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ram`
--

CREATE TABLE `ram` (
  `RAM_ID` int(11) NOT NULL,
  `RAM_Bezeichnung` varchar(25) NOT NULL,
  `RAM_Hersteller` varchar(20) NOT NULL,
  `RAM_Speicher` varchar(11) NOT NULL,
  `RAM_Speicherart` varchar(10) NOT NULL,
  `RAM_MHz` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `ram`
--

INSERT INTO `ram` (`RAM_ID`, `RAM_Bezeichnung`, `RAM_Hersteller`, `RAM_Speicher`, `RAM_Speicherart`, `RAM_MHz`) VALUES
(1, 'Aegis', 'G.Skill', '8192 MB', 'DDR4-3200', '3200'),
(2, 'RipJaws V', 'G.Skill', '32768 MB', 'DDR4-3600', '3600');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `raum`
--

CREATE TABLE `raum` (
  `Raum_ID` int(11) NOT NULL,
  `Raum_Nummer` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `raum`
--

INSERT INTO `raum` (`Raum_ID`, `Raum_Nummer`) VALUES
(1, 'B122'),
(2, 'B124');

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
ALTER TABLE `festplatte`
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
  MODIFY `CPU_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `festplattte`
--
ALTER TABLE `festplatte`
  MODIFY `FP_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `graka`
--
ALTER TABLE `graka`
  MODIFY `Graka_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `motherboard`
--
ALTER TABLE `motherboard`
  MODIFY `MB_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `ram`
--
ALTER TABLE `ram`
  MODIFY `RAM_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `raum`
--
ALTER TABLE `raum`
  MODIFY `Raum_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE pc(
PC_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
PC_Nummer VARCHAR(10) NOT NULL,
CPU_FK INTEGER NOT NULL,
GRAKA_FK INTEGER NOT NULL,
RAM_FK INTEGER NOT NULL,
MB_FK INTEGER NOT NULL,
FP_FK INTEGER NOT NULL,
RAUM_FK INTEGER NOT NULL,
Foreign Key (CPU_FK) REFERENCES cpu(CPU_ID),
Foreign Key (GRAKA_FK) REFERENCES graka(Graka_ID),
Foreign Key (RAM_FK) REFERENCES ram(RAM_ID),
Foreign Key (MB_FK) REFERENCES motherboard(MB_ID),
Foreign Key (FP_FK) REFERENCES festplatte(FP_ID),
Foreign Key (RAUM_FK) REFERENCES raum(Raum_ID)
);



