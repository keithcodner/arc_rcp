-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.16-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for arc_db
DROP DATABASE IF EXISTS `arc_db`;
CREATE DATABASE IF NOT EXISTS `arc_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `arc_db`;


-- Dumping structure for table arc_db.arc_cmd_lst_table
DROP TABLE IF EXISTS `arc_cmd_lst_table`;
CREATE TABLE IF NOT EXISTS `arc_cmd_lst_table` (
  `cmd_lst_id` int(11) NOT NULL AUTO_INCREMENT,
  `cmd_lst_an_id` varchar(50) DEFAULT NULL,
  `cmd_exec_name` varchar(100) DEFAULT NULL,
  `cmd_lst_exec_description` varchar(500) DEFAULT NULL,
  `cmd_lst_status` varchar(50) DEFAULT NULL,
  `cmd_lst_type` varchar(50) DEFAULT NULL,
  `cmd_lst_date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`cmd_lst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_lst_table: ~11 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_lst_table` DISABLE KEYS */;
INSERT INTO `arc_cmd_lst_table` (`cmd_lst_id`, `cmd_lst_an_id`, `cmd_exec_name`, `cmd_lst_exec_description`, `cmd_lst_status`, `cmd_lst_type`, `cmd_lst_date_created`) VALUES
	(1, 'ABC12345', 'MOVE_UP', 'Move Robot Up', 'Active', 'Direction', '2021-03-05 00:49:04'),
	(2, 'ABC12346', 'MOVE_DOWN', 'Move Robot Down', 'Active', 'Direction', '2021-03-05 00:50:14'),
	(3, 'ABC12347', 'MOVE_LEFT', 'Move Robot Left', 'Active', 'Direction', '2021-03-05 00:50:56'),
	(4, 'ABC12348', 'MOVE_RIGHT', 'Move Robot Right', 'Active', 'Direction', '2021-03-05 00:52:11'),
	(5, 'ABC12349', 'VIBRATE_DEFAULT', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(6, 'ABC12350', 'BLINK_0', 'Blink Robot Light 0', 'Active', 'Action', '2021-03-05 00:54:27'),
	(7, 'ABC12351', 'JUMP_0', 'Jump Robot 0', 'Active', 'Action', '2021-03-05 00:54:28'),
	(8, 'ABC12352', 'WAIT_0', 'Wait Robot 0', 'Active', 'Idle', '2021-03-05 01:13:32'),
	(9, 'ABC12353', 'VIBRATE_DEFAULT', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(10, 'ABC12354', 'VIBRATE_DEFAULTz', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(12, 'fd35bd0bea', 'test', 'test_r', 'Active', 'Action', '2021-04-10 16:41:39');
/*!40000 ALTER TABLE `arc_cmd_lst_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_cmd_table
DROP TABLE IF EXISTS `arc_cmd_table`;
CREATE TABLE IF NOT EXISTS `arc_cmd_table` (
  `cmd_id` int(11) NOT NULL AUTO_INCREMENT,
  `cmd_an_id` varchar(50) DEFAULT NULL,
  `r_usr_an_id` varchar(50) DEFAULT NULL,
  `c_usr_an_id` varchar(50) DEFAULT NULL,
  `r_usr_code_name` varchar(50) DEFAULT NULL,
  `cmd_exec_name` varchar(100) DEFAULT NULL,
  `cmd_exec_params` varchar(255) DEFAULT NULL,
  `cmd_exec_data` varchar(500) DEFAULT NULL,
  `cmd_status` varchar(50) DEFAULT NULL,
  `cmd_op1` varchar(100) DEFAULT NULL,
  `cmd_op2` varchar(100) DEFAULT NULL,
  `cmd_op3` varchar(100) DEFAULT NULL,
  `cmd_date_created` datetime DEFAULT NULL,
  `cmd_date_executed` datetime DEFAULT NULL,
  PRIMARY KEY (`cmd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_table: ~120 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_table` DISABLE KEYS */;
INSERT INTO `arc_cmd_table` (`cmd_id`, `cmd_an_id`, `r_usr_an_id`, `c_usr_an_id`, `r_usr_code_name`, `cmd_exec_name`, `cmd_exec_params`, `cmd_exec_data`, `cmd_status`, `cmd_op1`, `cmd_op2`, `cmd_op3`, `cmd_date_created`, `cmd_date_executed`) VALUES
	(1, 'ABC12345', 'ASDF123', 'QWERT123', 'ARCANE', 'MOVE_UP', '0', '0', 'EXECUTED', '0', '0', '0', '2021-03-05 01:09:46', '2021-03-05 01:16:03'),
	(2, 'ABC12350', 'ASDF123', 'QWERT123', 'ARCANE', 'BLINK_1', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:10', NULL),
	(3, 'ABC12352', 'ASDF123', 'QWERT123', 'ARCANE', 'WAIT_0', '{time_sec : \'21\'}', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:12', '2021-03-05 01:16:13'),
	(4, 'ABC12351', 'ASDF123', 'QWERT123', 'ARCANE', 'JUMP_1', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:13', NULL),
	(5, 'ABC12352', 'ASDF123', 'QWERT123', 'ARCANE', 'WAIT_0', '{time_sec : \'20\'}', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:12', '2021-03-05 01:16:13'),
	(6, 'ABC12352', 'ASDF123', 'QWERT123', 'ARCANE', 'WAIT_0', '{time_sec : \'20\'}', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:12', '2021-03-05 01:16:13'),
	(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'cc8b6c2894c6c', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:08:24', '0000-00-00 00:00:00'),
	(11, 'eef1e35882b73', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:08:25', '0000-00-00 00:00:00'),
	(12, '662bb9a6c5a47', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:08:27', '0000-00-00 00:00:00'),
	(13, 'ee84e9843cc52', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12348', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:09:45', '0000-00-00 00:00:00'),
	(14, 'daa07ce30d464', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12345', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:09:46', '0000-00-00 00:00:00'),
	(15, '377d63a8e7971', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12347', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:09:47', '0000-00-00 00:00:00'),
	(16, '5f96fb0de38fd', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12346', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:09:48', '0000-00-00 00:00:00'),
	(17, '8a4d6cdeecbf7', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:10:41', '0000-00-00 00:00:00'),
	(18, 'a76eff9985f4f', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:10:58', '0000-00-00 00:00:00'),
	(19, '244ea7bbb87d9', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:03', '0000-00-00 00:00:00'),
	(20, 'b8e619f93db4a', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:03', '0000-00-00 00:00:00'),
	(21, '3677ec214bd03', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:04', '0000-00-00 00:00:00'),
	(22, '08c3cb04aab8d', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12345', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:06', '0000-00-00 00:00:00'),
	(23, 'e9218f96fab11', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12348', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:07', '0000-00-00 00:00:00'),
	(24, '76e0172281a1f', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12346', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:07', '0000-00-00 00:00:00'),
	(25, '105dc116b0494', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12347', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:08', '0000-00-00 00:00:00'),
	(26, '234ef929dfd2e', 'ASDF123', 'QWERT123', 'ARCANE', '0', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:09', '0000-00-00 00:00:00'),
	(27, 'cc52a83a2b0ec', 'ASDF123', 'QWERT123', 'ARCANE', '0', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:11', '0000-00-00 00:00:00'),
	(28, 'ecc88ec0608cd', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:12', '0000-00-00 00:00:00'),
	(29, '73ef15257a401', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:13', '0000-00-00 00:00:00'),
	(30, 'ca2d1733bb5ab', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:14', '0000-00-00 00:00:00'),
	(31, 'fa1970755645b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:14', '0000-00-00 00:00:00'),
	(32, '7974b0fe4aa3', 'ASDF123', 'QWERT123', 'ARCANE', '0', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:15', '0000-00-00 00:00:00'),
	(33, 'a74d153315993', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:18', '0000-00-00 00:00:00'),
	(34, 'c3bd196b0700b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:43', '0000-00-00 00:00:00'),
	(35, '9c9061df6802b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:43', '0000-00-00 00:00:00'),
	(36, '8a3ac5c466132', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:44', '0000-00-00 00:00:00'),
	(37, '31be28232dc0e', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:44', '0000-00-00 00:00:00'),
	(38, '5a30746cc9bbf', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:45', '0000-00-00 00:00:00'),
	(39, '4d683e7fefd21', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:45', '0000-00-00 00:00:00'),
	(40, '6b9330b05e827', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:51', '0000-00-00 00:00:00'),
	(41, 'bcb933b8a66e8', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:51', '0000-00-00 00:00:00'),
	(42, '53b26d3dfa7f6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(43, 'c107cae5adfb1', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(44, '4e0ea29fb1eac', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(45, '3da34ef20cb66', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(46, '7987f72fec1a3', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(47, 'dabadf27e2d32', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(48, 'cd6525b5a09e6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:52', '0000-00-00 00:00:00'),
	(49, '3588718fe226e', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:53', '0000-00-00 00:00:00'),
	(50, '41c8a71c655d6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:53', '0000-00-00 00:00:00'),
	(51, '44d9496275a57', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:53', '0000-00-00 00:00:00'),
	(52, 'bc81ececf0d45', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:54', '0000-00-00 00:00:00'),
	(53, 'bd7a88e7cd9bb', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:54', '0000-00-00 00:00:00'),
	(54, '29eb74f895097', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:54', '0000-00-00 00:00:00'),
	(55, '25cb434262466', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:55', '0000-00-00 00:00:00'),
	(56, '193274a9d5c9b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:56', '0000-00-00 00:00:00'),
	(57, 'ed094737e0818', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:56', '0000-00-00 00:00:00'),
	(58, 'a50a9430bb9c3', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:57', '0000-00-00 00:00:00'),
	(59, '5feb63c2b122e', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:57', '0000-00-00 00:00:00'),
	(60, '34cb57d7a4046', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:58', '0000-00-00 00:00:00'),
	(61, '0a9e0fe652545', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12348', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:11:59', '0000-00-00 00:00:00'),
	(62, 'e5fd600f45e94', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12345', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:00', '0000-00-00 00:00:00'),
	(63, '602720734b9be', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12347', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:00', '0000-00-00 00:00:00'),
	(64, '21d021183feb3', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12346', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:01', '0000-00-00 00:00:00'),
	(65, '480c2f49b3749', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12348', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:01', '0000-00-00 00:00:00'),
	(66, 'cb9c75b4a6313', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12345', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:05', '0000-00-00 00:00:00'),
	(67, 'f83debf6c122f', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:15', '0000-00-00 00:00:00'),
	(68, 'c537d699afce', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:15', '0000-00-00 00:00:00'),
	(69, '9d9f9a2b72668', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:15', '0000-00-00 00:00:00'),
	(70, 'ca734f3f8a639', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:15', '0000-00-00 00:00:00'),
	(71, '30a074049d73', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:15', '0000-00-00 00:00:00'),
	(72, '539f70a98c31e', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:15', '0000-00-00 00:00:00'),
	(73, 'd00d8a37aef95', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:16', '0000-00-00 00:00:00'),
	(74, '2d7e6e24c865d', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12352', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:16', '0000-00-00 00:00:00'),
	(75, '07e9254819644', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:16', '0000-00-00 00:00:00'),
	(76, '214f222f6f6ec', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:16', '0000-00-00 00:00:00'),
	(77, 'a1b55d4cb2a5e', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:17', '0000-00-00 00:00:00'),
	(78, '1731bc237c488', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:17', '0000-00-00 00:00:00'),
	(79, '27685eba7c802', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:17', '0000-00-00 00:00:00'),
	(80, 'a6c71427d7833', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:17', '0000-00-00 00:00:00'),
	(81, '0d8e2fa259c6a', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:17', '0000-00-00 00:00:00'),
	(82, 'f9309e475607b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:18', '0000-00-00 00:00:00'),
	(83, 'b54d19e146a8b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:18', '0000-00-00 00:00:00'),
	(84, '7a8df5c1faaab', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:18', '0000-00-00 00:00:00'),
	(85, '9bd25d2cd748d', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:18', '0000-00-00 00:00:00'),
	(86, 'f43345f7637f9', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:18', '0000-00-00 00:00:00'),
	(87, '031bfa237eef6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:19', '0000-00-00 00:00:00'),
	(88, 'dc644d71d9541', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:19', '0000-00-00 00:00:00'),
	(89, 'cc7615ff812b8', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:19', '0000-00-00 00:00:00'),
	(90, 'b68f03c3b1f98', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:19', '0000-00-00 00:00:00'),
	(91, 'f1e06bfeb0c8c', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12351', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:19', '0000-00-00 00:00:00'),
	(92, '1315d9bae84f2', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12349', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:20', '0000-00-00 00:00:00'),
	(93, '44b36f870ec9e', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:21', '0000-00-00 00:00:00'),
	(94, '2ed2ff31f7a7b', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:21', '0000-00-00 00:00:00'),
	(95, '9c288cbc325e6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(96, '3f7093ef5bf44', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(97, 'aab702d06fc6d', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(98, 'fdb3da2a34f92', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(99, '793f2e41b5b5', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(100, '2d554e74dd6da', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(101, 'cc6e0f36ea694', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:22', '0000-00-00 00:00:00'),
	(102, '45b2646c9db13', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:23', '0000-00-00 00:00:00'),
	(103, 'f382da300d263', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:23', '0000-00-00 00:00:00'),
	(104, '93ce5e2d0d6de', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:23', '0000-00-00 00:00:00'),
	(105, '8a21777041f5f', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:23', '0000-00-00 00:00:00'),
	(106, '2c212273af7d6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:23', '0000-00-00 00:00:00'),
	(107, 'f0e7976ee64af', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:23', '0000-00-00 00:00:00'),
	(108, 'f742d0626cc2c', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(109, '7baa3d3bd60fb', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(110, '4b4747462c8f', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(111, 'e1eeb94f376d3', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(112, '93e84bee4bc06', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(113, '8749006eb903d', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(114, '84ab371b89ff6', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:24', '0000-00-00 00:00:00'),
	(115, '4800b48671ce5', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:25', '0000-00-00 00:00:00'),
	(116, 'f5e00bdd0f7fa', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:25', '0000-00-00 00:00:00'),
	(117, 'ca2705e5ccc17', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:25', '0000-00-00 00:00:00'),
	(118, '380680f80b285', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:25', '0000-00-00 00:00:00'),
	(119, '61da6dc7af741', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:26', '0000-00-00 00:00:00'),
	(120, '9076bae1b9e7c', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:26', '0000-00-00 00:00:00'),
	(121, '9f31c40a231f9', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12350', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 06:12:26', '0000-00-00 00:00:00'),
	(122, '5ed45bbf8bd45', 'ASDF123', 'QWERT123', 'ARCANE', 'ABC12345', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-05-04 13:15:06', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `arc_cmd_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_ctrl_table
DROP TABLE IF EXISTS `arc_ctrl_table`;
CREATE TABLE IF NOT EXISTS `arc_ctrl_table` (
  `ctrl_id` int(11) NOT NULL AUTO_INCREMENT,
  `ctrl_an_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `c_usr_an_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_up` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_down` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_left` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_right` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_index_left` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_index_right` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_y` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_x` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_b` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_a` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_start` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_select` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_1` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_2` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_3` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_4` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_5` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_6` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  PRIMARY KEY (`ctrl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table arc_db.arc_ctrl_table: ~6 rows (approximately)
/*!40000 ALTER TABLE `arc_ctrl_table` DISABLE KEYS */;
INSERT INTO `arc_ctrl_table` (`ctrl_id`, `ctrl_an_id`, `c_usr_an_id`, `ctrl_arrow_up`, `ctrl_arrow_down`, `ctrl_arrow_left`, `ctrl_arrow_right`, `ctrl_index_left`, `ctrl_index_right`, `ctrl_btn_y`, `ctrl_btn_x`, `ctrl_btn_b`, `ctrl_btn_a`, `ctrl_btn_start`, `ctrl_btn_select`, `ctrl_combo_1`, `ctrl_combo_2`, `ctrl_combo_3`, `ctrl_combo_4`, `ctrl_combo_5`, `ctrl_combo_6`) VALUES
	(1, 'ctrl_an_id_zzzz', 'c_usr_an_id', 'ctrl_arrow_up', 'ctrl_arrow_down', 'ctrl_arrow_left', 'ctrl_arrow_right', 'ctrl_index_left', 'ctrl_index_right', 'ctrl_btn_y', 'ctrl_btn_x', 'ctrl_btn_b', 'ctrl_btn_a', 'ctrl_btn_start', 'ctrl_btn_select', 'ctrl_combo_1', 'ctrl_combo_2', 'ctrl_combo_3', 'ctrl_combo_4', 'ctrl_combo_5', 'ctrl_combo_6'),
	(7, 'd3b7735896', 'QWERT125', 'ABC12345', 'ABC12346', 'ABC12347', 'ABC12348', 'ABC12353', 'ABC12354', 'ABC12352', 'ABC12350', 'ABC12350', 'ABC12349', 'fd35bd0bea', '0', '0', '0', '0', '0', '0', '0'),
	(8, 'd9536e3e82', 'QWERT123', 'ABC12345', 'ABC12346', 'ABC12347', 'ABC12348', '0', '0', 'ABC12352', 'ABC12351', 'ABC12350', 'ABC12349', '0', '0', '0', '0', '0', '0', '0', '0'),
	(9, 'c4450fdc30', 'QWERT124', 'ABC12345', 'ABC12346', 'ABC12347', 'ABC12348', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
	(14, '83756127d2', '4e4c3096cf', 'ABC12345', 'ABC12346', 'ABC12347', 'ABC12348', '0', '0', '0', '0', '0', 'ABC12354', '0', '0', '0', '0', '0', '0', '0', '0'),
	(17, 'dee5089a16', '889d99e8db', 'ABC12345', 'ABC12346', 'ABC12347', 'ABC12348', '0', '0', '0', 'ABC12349', 'ABC12352', 'ABC12351', '0', '0', '0', '0', '0', '0', '0', '0');
/*!40000 ALTER TABLE `arc_ctrl_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_c_usr_table
DROP TABLE IF EXISTS `arc_c_usr_table`;
CREATE TABLE IF NOT EXISTS `arc_c_usr_table` (
  `c_usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_usr_an_id` varchar(50) DEFAULT '0',
  `r_usr_an_id` varchar(50) DEFAULT '0',
  `c_usr_name` varchar(50) DEFAULT '0',
  `c_usr_pwd` varchar(255) DEFAULT '0',
  `c_usr_pwd_hash` varchar(255) DEFAULT '0',
  `c_usr_email` varchar(150) DEFAULT '0',
  `c_usr_ip` varchar(20) DEFAULT '0',
  `c_usr_status` varchar(20) DEFAULT '0',
  `c_usr_op1` varchar(255) DEFAULT NULL,
  `c_usr_op2` varchar(255) DEFAULT NULL,
  `c_usr_type` varchar(20) DEFAULT NULL,
  `c_usr_date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`c_usr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_c_usr_table: ~8 rows (approximately)
/*!40000 ALTER TABLE `arc_c_usr_table` DISABLE KEYS */;
INSERT INTO `arc_c_usr_table` (`c_usr_id`, `c_usr_an_id`, `r_usr_an_id`, `c_usr_name`, `c_usr_pwd`, `c_usr_pwd_hash`, `c_usr_email`, `c_usr_ip`, `c_usr_status`, `c_usr_op1`, `c_usr_op2`, `c_usr_type`, `c_usr_date_created`) VALUES
	(1, 'QWERT123', 'ASDF123', 'Keith', 'p12345', '1q2w3e', 'codnerk@gmail.com', '1.1.1.1', 'Active', '0', '0', 'Admin', '2021-03-05 00:55:57'),
	(2, 'QWERT124', 'ASDF124', 'John', 'p12345', '1q2w3e', 'codnerkj@gmail.com', '2.2.2.2', 'Active', '0', '0', 'User', '2021-03-05 00:56:38'),
	(3, 'QWERT125', 'ASDF125', 'Valentinez_zx', 'p12345', '1q2w3e', 'codnerke@gmail.com', '3.3.3.3', 'Active', '0', '0', 'User', '2021-03-23 00:56:38'),
	(6, 'e03fb1e910', 'ASDF124', 'Joe', '124', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 04:42:20'),
	(7, '94b35f6947', 'ASDF124', 'Joey', '4321', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 14:55:07'),
	(8, '0eb216d197', 'ASDF123', 'Sammy', '1231', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 15:11:20'),
	(15, '889d99e8db', 'ASDF123', 'Dane', '44444', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 15:16:56'),
	(16, '4e4c3096cf', 'ASDF123', 'Tom', '44443', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 15:17:09');
/*!40000 ALTER TABLE `arc_c_usr_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_r_usr_table
DROP TABLE IF EXISTS `arc_r_usr_table`;
CREATE TABLE IF NOT EXISTS `arc_r_usr_table` (
  `r_usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `r_usr_an_id` varchar(50) DEFAULT '0',
  `r_usr_code_name` varchar(50) DEFAULT '0',
  `r_usr_ip` varchar(20) DEFAULT '0',
  `r_usr_status` varchar(50) DEFAULT '0',
  `r_usr_type` varchar(50) DEFAULT '0',
  `r_usr_op1` varchar(255) DEFAULT '0',
  `r_usr_op2` varchar(255) DEFAULT '0',
  `r_usr_date_created` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`r_usr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_r_usr_table: ~7 rows (approximately)
/*!40000 ALTER TABLE `arc_r_usr_table` DISABLE KEYS */;
INSERT INTO `arc_r_usr_table` (`r_usr_id`, `r_usr_an_id`, `r_usr_code_name`, `r_usr_ip`, `r_usr_status`, `r_usr_type`, `r_usr_op1`, `r_usr_op2`, `r_usr_date_created`) VALUES
	(1, 'ASDF123', 'ARCANE', '1.1.1.1', 'Offline', 'DevBot', '0', '0', '2021-03-05 01:02:48'),
	(2, 'ASDF124', 'ARCANE2', '2.3.4.6', 'Offline', 'DevBot', '0', '0', '2021-03-05 05:55:57'),
	(19, 'b9cd911c18', 'Salton', '1.1.1.1', 'Offline', 'DevBot', 'ep1', 'ep2', '2021-04-08 04:23:17'),
	(20, 'a4b28d8e1c', 'Gravitas', '1.2.1.2', 'Offline', 'DevBot', 'Blaster', 'Motor', '2021-04-08 04:23:55'),
	(21, 'd6931e111a', 'Rampage', '1.1.1.1', 'Offline', 'DevBot', 'Claws', 'Cive', '2021-04-08 04:25:47'),
	(22, '1242304861', 'Carnival', '1.1.1.1', 'Offline', 'DevBot', 'Soda', 'CottonCandy', '2021-04-08 04:27:16'),
	(23, '81282649fc', 'Carnage', '1.1.1.1', 'Offline', 'Sentenal', 'Slash', 'Stick', '2021-04-09 04:36:58');
/*!40000 ALTER TABLE `arc_r_usr_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_sys_settings
DROP TABLE IF EXISTS `arc_sys_settings`;
CREATE TABLE IF NOT EXISTS `arc_sys_settings` (
  `set_id` int(11) NOT NULL AUTO_INCREMENT,
  `set_an_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `set_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_val` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op5` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op_bulk1` longtext COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `set_op_bulk2` longtext COLLATE utf8mb4_unicode_ci DEFAULT '0',
  PRIMARY KEY (`set_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table arc_db.arc_sys_settings: ~1 rows (approximately)
/*!40000 ALTER TABLE `arc_sys_settings` DISABLE KEYS */;
INSERT INTO `arc_sys_settings` (`set_id`, `set_an_id`, `set_name`, `set_val`, `set_op1`, `set_op2`, `set_op3`, `set_op4`, `set_op5`, `set_op_bulk1`, `set_op_bulk2`) VALUES
	(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'),
	(3, 'set_an_id', 'set_name', 'set_val', 'set_op1', 'set_op2', 'set_op3', 'set_op4', 'set_op5', 'set_op_bulk1', 'set_op_bulk2');
/*!40000 ALTER TABLE `arc_sys_settings` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
