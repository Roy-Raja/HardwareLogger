-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 27. Sep 2022 um 15:08
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.1.2

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
(2, 'i7 12700k', 'Intel Core', 12, 5000),
(3, 'i5 11400F', 'Intel Core', 6, 2600),
(4, 'Ryzen Threadripper 3990X', 'AMD', 64, 2900);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `festplatte`
--

CREATE TABLE `festplatte` (
  `FP_ID` int(11) NOT NULL,
  `FP_Speicher` varchar(11) NOT NULL,
  `FP_Bezeichnung` varchar(25) NOT NULL,
  `FP_Typ` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `festplatte`
--

INSERT INTO `festplatte` (`FP_ID`, `FP_Speicher`, `FP_Bezeichnung`, `FP_Typ`) VALUES
(1, '18 TB', 'Toschiba MG09ACA', 'HDD'),
(2, '1 TB', 'Samsung 970 Evo Plus', 'SSD'),
(3, '2 TB', 'Seagate IronWolf', 'HDD'),
(4, '512 GB', 'Patriot P210', 'SSD');

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
(2, 'Geforce RTX 3070 Ti', 'Nvidia', 1575, '8192 MB'),
(3, 'Radeon RX 6400', 'AMD', 2039, '4096 MB'),
(4, 'Radeon RX 6600 XT', 'AMD', 2593, '8192 MB');

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
(2, 'X570-A PRO', 'ATX', 'So.AM4', 'AMD X570', 4, 'DDR4'),
(3, 'MAG Mortar', 'mATX', 'So .1700', 'Intel B660', 4, 'DDR4'),
(4, 'X11DPi-N', 'EATX', '2x So.3647', 'Intel C621', 16, 'DDR4');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `pc`
--

CREATE TABLE `pc` (
  `PC_ID` int(11) NOT NULL,
  `PC_Nummer` varchar(10) NOT NULL,
  `CPU_FK` int(11) NOT NULL,
  `GRAKA_FK` int(11) NOT NULL,
  `RAM_FK` int(11) NOT NULL,
  `MB_FK` int(11) NOT NULL,
  `FP_FK` int(11) NOT NULL,
  `RAUM_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `pc`
--

INSERT INTO `pc` (`PC_ID`, `PC_Nummer`, `CPU_FK`, `GRAKA_FK`, `RAM_FK`, `MB_FK`, `FP_FK`, `RAUM_FK`) VALUES
(1, 'Platz 11', 2, 1, 1, 1, 3, 1),
(2, 'Platz 12', 1, 2, 2, 2, 1, 2),
(3, 'Platz 2', 4, 3, 4, 3, 2, 2),
(4, 'Platz 4', 3, 4, 3, 4, 4, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ram`
--

CREATE TABLE `ram` (
  `RAM_ID` int(11) NOT NULL,
  `RAM_Bezeichnung` varchar(25) NOT NULL,
  `RAM_Hersteller` varchar(20) NOT NULL,
  `RAM_Speicher` varchar(11) NOT NULL,
  `RAM_Standard` varchar(10) NOT NULL,
  `RAM_Mhz` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `ram`
--

INSERT INTO `ram` (`RAM_ID`, `RAM_Bezeichnung`, `RAM_Hersteller`, `RAM_Speicher`, `RAM_Standard`, `RAM_Mhz`) VALUES
(1, 'Aegis', 'G.Skill', '8192 MB', 'DDR4-3200', '3200'),
(2, 'RipJaws V', 'G.Skill', '32768 MB', 'DDR4-3600', '3600'),
(3, 'LRDIMM', 'Samsung', '128 GB', 'DDR4-3200', '3200 '),
(4, 'M3064644406ND', 'Mustang', '512 MB', 'DDR-333', '333');

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
-- Indizes für die Tabelle `festplatte`
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
-- Indizes für die Tabelle `pc`
--
ALTER TABLE `pc`
  ADD PRIMARY KEY (`PC_ID`),
  ADD KEY `CPU_FK` (`CPU_FK`),
  ADD KEY `GRAKA_FK` (`GRAKA_FK`),
  ADD KEY `RAM_FK` (`RAM_FK`),
  ADD KEY `MB_FK` (`MB_FK`),
  ADD KEY `FP_FK` (`FP_FK`),
  ADD KEY `RAUM_FK` (`RAUM_FK`);

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
  MODIFY `CPU_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `festplatte`
--
ALTER TABLE `festplatte`
  MODIFY `FP_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `graka`
--
ALTER TABLE `graka`
  MODIFY `Graka_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `motherboard`
--
ALTER TABLE `motherboard`
  MODIFY `MB_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `pc`
--
ALTER TABLE `pc`
  MODIFY `PC_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `ram`
--
ALTER TABLE `ram`
  MODIFY `RAM_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `raum`
--
ALTER TABLE `raum`
  MODIFY `Raum_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `pc`
--
ALTER TABLE `pc`
  ADD CONSTRAINT `pc_ibfk_1` FOREIGN KEY (`CPU_FK`) REFERENCES `cpu` (`CPU_ID`),
  ADD CONSTRAINT `pc_ibfk_2` FOREIGN KEY (`GRAKA_FK`) REFERENCES `graka` (`Graka_ID`),
  ADD CONSTRAINT `pc_ibfk_3` FOREIGN KEY (`RAM_FK`) REFERENCES `ram` (`RAM_ID`),
  ADD CONSTRAINT `pc_ibfk_4` FOREIGN KEY (`MB_FK`) REFERENCES `motherboard` (`MB_ID`),
  ADD CONSTRAINT `pc_ibfk_5` FOREIGN KEY (`FP_FK`) REFERENCES `festplatte` (`FP_ID`),
  ADD CONSTRAINT `pc_ibfk_6` FOREIGN KEY (`RAUM_FK`) REFERENCES `raum` (`Raum_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
