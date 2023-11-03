-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2023 at 02:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ko-shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `money` int(255) NOT NULL DEFAULT 0,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=tis620 COLLATE=tis620_thai_ci;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`username`, `password`, `money`, `email`) VALUES
('admin2', '12345678', 0, 'admin2@gmail.com'),
('KAOOAT12', '12345678', 0, 'KAOOAT1213@gmail.com'),
('kooddee', '12345678', 4978607, 'doreamon@gmail.com'),
('nut', '12345678', 0, 'nut01@gmail.com'),
('nut02', '12345678', -95192, 'adminnut@gmail.com'),
('oat', '1234567', 992050, 'oat01@gmail.com'),
('p', '12345678', 1694, 'า@'),
('peter', '12345678', 61, 'peter@g.com'),
('test', '12345678', 0, 'ddd@g.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
