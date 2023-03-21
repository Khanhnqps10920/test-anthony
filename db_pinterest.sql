-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_pinterest
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `comment_date` date DEFAULT NULL,
  `comment_body` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_id` (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,5,4,'2023-03-19','Hello'),(3,1,4,'2023-03-19','Hello'),(4,1,4,'2023-03-19','Hello'),(6,5,4,'2023-03-19','Hello'),(7,8,4,'2023-03-19','Hello'),(8,9,4,'2023-03-19','Hello'),(9,9,2,'2023-03-19','Hello'),(10,3,2,'2023-03-19','Hello');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(50) DEFAULT NULL,
  `image_link` varchar(255) DEFAULT NULL,
  `image_desc` varchar(100) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'chicken 1','http://localhost:8080/public/img/pic/1679197654736-71TbQEIa7wL._AC_SL1385_ - Copy.jpg','hello',5),(3,'chicken 3','http://localhost:8080/public/img/pic/1679197751559-3JV7GM7AERDC7FV3FT4RPM3HQM.jpg','hello',5),(4,'chicken 4','http://localhost:8080/public/img/pic/1679197849033-19613887_5946244767_n.jpg','hello',2),(5,'chicken 5','http://localhost:8080/public/img/pic/1679197871147-9552521_99a444413a_n.jpg','hello',2),(6,'chicken 6','http://localhost:8080/public/img/pic/1679197891037-71TbQEIa7wL._AC_SL1385_ - Copy.jpg','hello',2),(7,'chicken 7','http://localhost:8080/public/img/pic/1679197949095-20517107_06b2d996ad_n.jpg','hello',2),(8,'chicken 8','http://localhost:8080/public/img/pic/1679197966134-7348929_3855210945_m.jpg','hello',2),(9,'chicken 9','http://localhost:8080/public/img/pic/1679198024453-21648215_c60ac6619d_m.jpg','hello',2),(10,'chicken 10','http://localhost:8080/public/img/pic/1679198042616-34688546_e425fe0009_m.jpg','hello',2),(11,'chicken 10','http://localhost:8080/public/img/pic/1679198742386-34688546_e425fe0009_m.jpg','hello',1),(12,'chicken 12','http://localhost:8080/public/img/pic/1679198783756-30896733.jpg','hello',1);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `store_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_id` (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `store_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`),
  CONSTRAINT `store_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (1,1,5,'2023-03-19'),(3,3,5,'2023-03-19'),(4,4,2,'2023-03-19'),(5,5,2,'2023-03-19'),(6,6,2,'2023-03-19'),(7,7,2,'2023-03-19'),(8,8,2,'2023-03-19'),(9,9,2,'2023-03-19'),(10,10,2,'2023-03-19'),(11,1,2,'2023-03-19'),(12,4,2,'2023-03-19'),(13,6,2,'2023-03-19'),(14,6,3,'2023-03-19'),(15,10,3,'2023-03-19'),(16,1,3,'2023-03-19'),(17,11,1,'2023-03-19'),(18,12,1,'2023-03-19'),(19,1,1,'2023-03-19'),(20,9,1,'2023-03-19');
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'evelyn@gmail.com','$2b$05$Rf1MgaJ37sPEgR2rxCseuOisFa42QdFh/ARLPNvy/V62Mj2ekoCJq','Evelyn Nguyen',17,'1679196393623-1-cop-2.jpg'),(2,'quy@gmail.com','$2b$05$R1qH5zL76EOPNe5ouJKfeeC.gERdlb8SMall41xtbO86giYiXjbki','Nguyen Quy',26,'1679202437648-61qwLGkR-NL._AC_SL1500_ - Copy.jpg'),(3,'chau@gmail.com','$2b$05$bPhyH69XlCXVHrfmcuwV4uzqd4tM.u/5WASdVxQj3M073ZAhdECtS','Nguyen Chau',2,'1679196522224-2_275.png'),(4,'quyen@gmail.com','$2b$05$kAjfxzddJ/vDOJIAfJRLJOmb/zN1u9Drgzii1FKaQOgth6mEnVD/e','Tu Quyen',26,'1679196600888-2-con-ho-trang(1).png'),(5,'anthony@gmail.com','$2b$05$O9JRKuZdXcaiydCEacCFqOJ170p9QjPzJpxNm0U2KTvszZj5bRWQi','Nguyen Anthony',56,'1679196664904-78303SCI-TIGER1-jumbo(1).jpg'),(6,'nopic@gmail.com','$2b$05$v.dpts9LHEIBA8v8eZgGdewvQX/1CGUJjjaIacg9u6W3fbn96pZFi','Nguyen Nopic',40,'1679196907979-112395123_tigers(1).jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-19 12:14:18
