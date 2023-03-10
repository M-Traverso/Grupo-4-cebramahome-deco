-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: productos_db
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'new'),(2,'bazar'),(3,'mates '),(4,'botellas termicas'),(5,'set de mates'),(6,'dispenser para cocina'),(7,'termos'),(8,'escurridor de platos'),(9,'carteles'),(10,'almohadones'),(11,'tazas'),(12,'otros'),(13,'relojes'),(14,'vasos');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `category_id` int DEFAULT NULL,
  `image` text,
  `price` decimal(5,0) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `softdelete` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'lata de galletitas','skladjaskldjklasjdklasjdklajskdljaskldjklasjdklasjdkljaskldjaskldjaskldjaklsjdlkasjdklasjdkljaskldjaskljd',2,'1678386114751.jpeg',2900,NULL,'2023-03-09 18:21:54',NULL),(2,'mate','aslkhjdklasjdklhasjkdhjkashfkjjsalkdfjklajsldjlkasjdlkasjdkljaskldfjaslkdjakls;jdlkasjdlkjaslkdjklasjdflkasjlkfjaslkfjhklashjf',3,'1678386195959.jpg',1200,NULL,'2023-03-09 18:23:15',NULL),(3,'tazón','asjkdhjkashdkjhasjkfhjklsdhkjafhkjdsahjkhafjkladshfjklhsdjklfhdjksahfjkdshfjkdshjkfhdsjkfhlajkdshfalkjadshfjklh',11,'1675360104061.jpeg',2200,NULL,NULL,NULL),(4,'shaker everlast','sajdkhasdj,ksjhfhkljsdahfjkdhsjf,hjksdhafkjhdsjkfhjkldsahfjkdshkjfhjkdshfkjdhsfjkhdsjkfhjkdshfjkhsdjkfhajkhgjkdfshjkghsdjkfghdskjhfjksdhfjksdhfjkdshjkfhsdjkfhkjdshfkjsdhfjkhdsjkfhjkdshfjkdsfhdskjfhdsjkfhdskjfhdskjfhkjasdhfjkashkjdfhaskjdhjkas',1,'1675360390065.jpeg',4000,NULL,NULL,NULL),(5,'pimentero acero','klsajdjkhaslkdjkjahskjfhLKSDJKHDSJKAfhlkasjdlkasjdlkjaskldjklasjdklajsdlkjaskldjklasjdklasjdkljaksljdkljdkljasl;kdjkljdklsajkljdsklfjdskljfkldsjlkfj',2,'1675360577535.jpeg',2800,NULL,NULL,NULL),(6,'exprimidor de metal','lksajdklsajhdfkljsljfljsdlfjkkljsdkfjdskljfkldsjfclkfsdnkjcndksjnbvbiuerhguiverhfguiehfjkehwfjkhwejkhfjkewhfiuashfsuahfkjshafh',2,'1675360692845.jpeg',2200,NULL,NULL,NULL),(7,'drunken tower','askjhdjkashjdkhkjashdhkasjkhdfjklashdkjhasjlkdhjklsahFDJKLASHFJKASHJKFHJKSDAJKFHGASKJHFKJLASHFJKGHASJKDHJKASHJKDHJKASHDKJAShdljkalshkjLDHASJKDHAJKSHDJKahsjkdfhaskjdhasjkhdasjkdhasjkhd',12,'1675360775522.jpeg',5500,NULL,NULL,NULL),(8,'botella de silicona plegable','kosaihjdkjashdjkhasjkdfhjksahdfkjhasjkcbjkscbjksdhcfjksadhfjkajksfhjkashfjkashfdjkashfjkashJKFHASKJFHJKHFJKASHDJKCVHsdjhfjkasncfdaskljhckasnkjcjkashcna',1,'1675361102681.jpeg',6000,NULL,NULL,NULL),(9,'botella termica','aslkhdjiashcdsjhfjkshdjfkdskjfhjkdshfkjdshjkfhsdjkfhjksdhjkfhkjsdhfkjhsdjkhfjksdhfjkhsadjkfhdsjkhfjksdahafjkhdsjkafhjkdshfjksdhfjkhsadjkfhjksdhfjksdf',4,'1675361192667.jpg',6000,NULL,NULL,NULL),(10,'placa antiadherente ','skajhdjkhjsklfjkdshkjfjsdjfkjhdskjfjhjksdkjfhhjlksadgfhjkashjkdfhaskjhfjkdshfjkashjkfhasjkfhasjkfhkjashfkjashfjkashfkljhaskljfhjklsahfjklashfjklahskjlfakljf',1,'1675361292419.jpg',2500,NULL,NULL,NULL),(11,'escurridor de cubiertos elefante','lkasjdjkhasjkhfdbshfjhdskfkjdshhjkfhewciruineqvwiubyybiuyqbrehfcijdebvchiebviuebriuvbeirubvebvuiebnvujhndejuvdnhev;jjehniu;hn',2,'1675361363863.jpeg',2000,NULL,NULL,NULL),(12,'reloj de pared gris','lkjhjkhkjhjgjhgghfhjghgkfhjkhhjfgjkhjgjkhhjkgjkhkhjgjkhhjgjkhgjjkghjhgkjhjkgjkhkjhjkljkljkljlkjiouioyiuytutyutuyrtyurtyrtyreryuuhmhbhjfdrtertfhjjhbjkhkjl',13,'1675361447343.jpeg',4500,NULL,NULL,NULL),(13,'saca corchos eléctricos','klshjdhsjdkljslfjsjdaejdksjfkljdskjjdklerywoifdeiwrufjoijhvkladsjfklsjfldsjflkdsjfkajdsklfjkldsjflkdsjfjkhdsgjkhdsjkgjlksdjglkjsdlkghjdsklghsdjkhgjksdhg',2,'1675361507368.jpeg',9500,NULL,NULL,NULL),(14,'paños absorbentes','dkljhfkjhsdjkfkjdlhgdfkjlhgjlkfdhgjkndfkjgfdkjvnfdjknvfdkngkjdfnjknvdfjknvjkdfnvkjdfnvjkndfjkngvjkdfjkbnvjkdfnbjkfnjneribhrekjhrenbjkndfjbndfjkbnjkfdnbklfdnbkldfnklbndfklbnfdklbnkldfnbklfdnbklfdnbklndfklbnfdklbnkldfnbklfdnblkdfnbklfdnbkldfnb',12,'1675361575102.jpeg',2000,NULL,NULL,NULL),(15,'set coctelería','askljdjklsdhfjdsfhkjdshfkldsjfklsdjkfkdsjfkldhsklfsdklfhjkdsgvjkdlsfngjfndjv nejrnvionioenerjvnoernvlkrejglkjsdlfgjlkdfsjgkldfsjsgkldfjklgj',12,'1675361635474.jpeg',7000,NULL,NULL,NULL),(16,'reloj de pared rose','askldjkshjdfjksdkhfdskjvkjnkjnfvjkndfkjnvkjdsfghgjkfsdhgjkfdskjfkldsjflkdsjfklsdjklfjdsjfdsnvcm,sncvmdsnkjvndsjknvjklnkjnvjkdsnfjdsjnfkldsjfkljsdklfjkldsgfjsklgjkldsjfgkldsjgkljdsklgjfkldsjfglksadjgkljadslkgjakldsajglksdjfgkljsdklgjlksdjglkdsjglkdsjglkjsdlkgjklsdgj',13,'1675361721160.jpeg',4500,NULL,NULL,NULL),(17,'mate prisma','askljdjsakhdfkjdsljkhfvdsnvjbjdksnvkjsadhfsdhfkldshfkhdskjfhdsjkfhjkdsahfjksklfhdsjkadfjhdjkshdfvjkdhfvjkdfhvldkshvvkldashjdsvfkldshjdsvkldfsejfdsvfklsjdvlkdsjdfsfslkefjsdklgewjsdgb',3,'1675361762673.jpg',1200,NULL,NULL,NULL),(18,'vaso de cafe','sjfksdjf,kjdsjfvdsjvfjksdhkjhdksjksfjdkljdsjklfhjklfskjhvdfsklshskjhfkjesdhfgjkjhgklsdlgkjdfklsgjkldfmgkldfjkghl;kdfl;kgdf',14,'1675361834336.jpg',1200,NULL,NULL,NULL),(19,'set tupper','kldjsakjfhshdfjknsadcbdskcvndwhvnbjwneviubhewiuvhuiehvuierhfgiueqryfinewjkhcjbwbiu bwecjkbdjkchjkdsbcjdsbvidsbv iudwhvkjwebvijnwebjkvbewjkvewjkvnwehvhiuwehvjwhejkvhsdjkhvcjkdshfjkdshfkjdshfkjdhsafhjksdfhsdjkfhsdjkfhdjksfhjdksh',12,'1675361890004.jpeg',6000,NULL,NULL,NULL),(20,'raqueta mata mosquitos','skahjfdjksadhfjhsdjkhfkjdshfghkdsfjkvdskjhvjksdbvjkdbsjkvbsdjkbvjkdsbvjkdshvjkdshfkjhdsjkfhsdkjfhdjkshfkjdshfkjdshfkjhdskjfhdsjkfhkjdshfkjdshfjkhdsjkfhsdjkhfjksdhafjkhdsjkfhdsjkhfjksdhfkjdshafkjdsfasdhfkjasdhfkjdashafkjhdsajkfhadsjkfhkjdshfjkdshfjk',12,'1678388983712.jpeg',3200,NULL,'2023-03-09 19:09:43',NULL),(21,'chispero con carga usb','salkjdsjkahnf,adsvndsknvndslkvjlkjdeslfjsdfkjsdlkjflkdsjglkdfjbmfkjdfkljblkfdkg;ldfkglkjdfklgjdfklgjkldsfjgklsdfjglksdjfgkljsdklfjdsklfjdsklfjkldsjfkldsjflksdjfklsdjflkjdsklfjdslkjfkldsjflkadsjflkdsjfkljdslkfjalsdkjflkdsjflkdsjklfjsdklfjdsklfjdsklfjkldsjfklsdjklfjdsklfjkldsjfkldsjfklj',12,'1675361995252.jpg',4000,NULL,NULL,NULL),(22,'especiero imantado','sdkljkjfhsdkfjdsjvkndskjvkjdsnvjkdnskjvndskjvnjknewjkvnsjkvnsjkdnvjksnvjkdsjnjkvsdkjvkjdshjkwehjkewhjkewhvjkhewklvjhklewjvkljwklvjklfjvjksdjkvbdkjsbvjkdsbvjkbdsjkvbjksdbvjkdsbvjkdsav',2,'1675362049100.jpg',8500,NULL,NULL,NULL),(23,'mortero de mármol','jkhsdjkasckjsbdcknsakjcnaskjcnbkajbfhjasbdhjashdhjkhasjkdhasjkdhjkahfjkdshfjkhsdjkfhasjkfhkjashckjasckzxn kin kdsb vkjdbvkjdsbvhjdsbvjkhdsjkvhdskjhvjkdshvjkhdsjkVBDSJKBVJKDSNVE',2,'1675362123790.jpg',5000,NULL,NULL,NULL),(24,'botella termica con pico','sakdjasjfdsbhcjksdnkndsncknsdcdsjkncjkdsvckjbdjkbvjkdsbvhdsbvjhvbjhdskbnvjkdnskjvdnsjkvndsjknvjkdsnvsjknvkjdnsjksnkjnskjhnksjjkdnssdkjncjksndckjnsdkcjnsakjcnkjsancjksdnckjdsnvjksdnvkjdsv',4,'1675362177206.jpeg',6200,NULL,NULL,NULL),(25,'sarten hudson','kjahsjkcnsancasbncm,nakjsbcn,manscjbnm,cansmcn,asnc,asncjknkjsdncjkhbdsjkcbdjshbchjsdbjkvbjkdsbvjkbdsjkvbdskjbvjkdsbvjkbdsjkvbdsjkbvjksdbjkvbsdjkvbjksdbVJKBDSJKVBjksdbvjldsbvjndsjvcnsdljhfjhsdjfhjewkhfn',2,'1675362229907.jpg',5800,NULL,NULL,NULL),(26,'mate porteño','sjahcjksdbvn sdkvndsknckjsdnvjksdnvkjndsjkvndjksnvjkdsnvkjdnsjkvndsjknvkdsjkbvbdhjsvbdjkbvdjksbvkjdsbvkjdsbvjkdsbvkjdsbkjvbdsjkvbjkdsbvkjdsbjkvbdskjvbkjdsbv',4,'1675362272242.jpg',5000,NULL,NULL,NULL),(27,'termometro de cocina','oksajdjaskjhdfksjjdckdjsnfjkdsnvjknjkdsnvkjdnsvjkndsjkvndskjvndsjkvndjksnvkjdsnvjkdsnvjkdsnvjkdnsjkvndskjvnjkdsnvjkdsnjkvndsjknvjkdsnvkjdnskjvndsjknvjdsnvjkndsjafvhsdjkfhdasfjioewjfioewjfiohewiojfhwnfklnsdkflndsfv',2,'1675362323896.jpeg',2000,NULL,NULL,NULL),(28,'lata decorativa','kdijshcksankjchkjscdkjsahdklashjdkjnsjkcnaskbckjacijijbhwcjkwhedjkshadjkhjkdhsajkhdjkashdjkhasjkdhjkashdjkashdkjashjkdhaskjdhjkashdkjashdkjhaskjdhasjkhdjkashdjkashdkjasjkdhasjkdhajkshdkjashdkjhaskjdhasklhdkjashdkjashdkjsahjkdhsakjdhsakjdhkjashdkjash',2,'1675362372108.jpeg',2000,NULL,NULL,NULL),(29,'planner mensual','aksojdkjasncasbckjsancibaskjchiasjdlkasjhdlkjasiodjaskldjklasnckasncjsacnaksjncakjscnbjasnckjasnbckjasbcjkabskjcbsajkcnjhsabcjksacjkdsjkhfajkshfjksahdjksadjkasdjkashdkjasjdjkashjdkhasjkdhasjkhdjkashdjksahdjksahjkdhjakshdajskhdjksahdkjsahdjkh',12,'1675362424776.jpeg',3000,NULL,NULL,NULL),(30,'reloj de pared simil madera','akshdcjksncaskjncjkascb sadcnjkashfkjasjhdfjkjaskldhjkashdjkhasjkdhasjkcfjksahfkjsdncjkasdjkcvdjksbvbdskjbkjdasbvjkbdskjvbjkdsbvjkdjksbvjksdbjkvabdsjkvbjksdbvjksdbvjkbdsjkbvjksdbvjkdsbjkvbdsjkvbkjdsbvkjdsbvkjdsbkjvbdsjkbvkjdsbvjkdsbvjkdsbvjkdsbjkvbsdjkvbdsjkvbn',13,'1675362475301.jpeg',5000,NULL,NULL,NULL),(31,'cierra bolsas','asl;jajskhncdnvjdsnvljdsvdnskjvndslkjdsakjfajdflkasjflkajskldjaskljdklasjlkdjaskljdlkasjlkdjaskljdklaskldlkasjdljaskldjaslkjdlkasjdlkjaslkdjklasjdklasjdkljasljdklasjdklasjdkljaslkdjaskldjklasjdlkasjdklsajdklasjdkljsalkdjaslkdjaslkjdlkasjdklsajdklsajdkl',12,'1675362531134.jpeg',850,NULL,NULL,NULL),(32,'vaso termico de acero','salkhjkcndscjahsjhcjasdhajdkhasjkdhjkashfkjsahjkfhasjkhdfhladsdhfjkdshfjbvjhbhjdsbvjhdsbvjhdsbvjhdsjhvbdshjvbdshjbvhjdsbvhjdsbvjhbdsvhjdbshjvbjhbvjhdsbvhjdsbvhjdhsjkhvjkasfhgkjdsjfjklsdjflkjsdkljflksjfkldjsklfjdsklfjdlksjfkljdsklfjdslkjflkdsjfkldsjflkjdslkfjlksdjfklsdajfkldsjf',14,'1675362582061.jpeg',4000,NULL,NULL,NULL),(33,'balanza de cocina','asknckjsancnsakcnasjkcdkjasncjdslakjfnfndsmfndsm,v ,mxzc vm,cxv,m xmv dsmn vmdsnvmd smnds vnmds vmn dsnv dsnmv nsknvmndsm,vnm,dsnvm,dsnvm,ndsv',2,'1675362620286.jpeg',4000,NULL,NULL,NULL),(34,'tazón infantil','sanjkfbnsaknfkdsnv,madfmvnm,sdnfv sdfkvjndjkfvdsm,nfm,nsdm,fnds,mnfm,dsnfm,ds,nf,mdsnf,mdsn,mfndsm,nfm,dsm,fds,mnf,mdsnf,mdsnf,msdnf,mnsdm,fnm,dsfm,ndsm,fndsm,fn,mdsnf,mdsnfm,dnsm,fndsm,fndsm,fnm,dsnf',11,'1675362682018.jpeg',3000,NULL,NULL,NULL),(35,'mate de madera decorado','lkjsakdjhkanscbsdjkcj;dscbfkdsfkjdsjflkjasjdfldskjfklasjfklasjflkjaslkjflksajdlaksjdklasjdlkasjdklasjdkljasdjaskjdklasjdklajskldjaskldjaskldjklasjdkljaskldjaskljdklasdlljasndcksancjkdsnvkjdsnvcjknsdkvnkldsnvkldsnvjkdsnvkljndsjklvndsjklnvjkldsnvjkdsnvjkdsnvojdsn',4,'1675362722830.jpeg',1200,NULL,NULL,NULL),(36,'humificador','kjhdskjnvmkdsnvndsknvndskjnvjkdsnvjdsnkjvndsjkvndksnvkjdsnvklmsdlkvkdlnvkjdsnjvnjdsnvjkdsnvkjsdnvlknsdkjvnsdkjnvjknsdkjvanjkdsnvjkdsjkvkjdsnvjkdsnvkjdsnvjknsdkvndsknvjkdsnvksdnvlksdnvkndsknvkldsnklvndsklvnklsdnvklsdnvklndsklvndsklvnkldsnvkldsnvkldsnvklndsklvndsklv',12,'1675362768319.jpeg',6000,NULL,NULL,NULL),(37,'manopla de silicona','kjhdsajkdamskldbaskllcjnaksjfaslkdfjlkasjdkljaskldjasklfjaklsjflkasjdlkasjdlkasjdlkasjdkljaslkdjaslkjdlkasjdlkajskldaklsdklasmdlkasmdlasmdl;asmdlsal;mdklasmfklasmfvmdsa,fvdmfmklmfdklsajfkljlksadfjklasjfklasjflkasjflkasjfklasjfklasjFLKJASLKFDJALKFJALSKJFKLJFLKASJKLFDJASLKFJALSKJFKLASJFKL',12,'1675362811370.jpeg',2800,NULL,NULL,NULL),(38,'mate ava','askljdklfmmsdlvndsmvdsjvnldsjfjdsklfvnv ndslkvdklsjfkldsjflkjdskljflkdsjflkdsjklfjkldsjflkdsjflkjdslkfjsdlkvjlkdsjvglkdsjvkldsjvlkdsjvlkdsvjlkdsjvlkdsjvkldsjvkldsjvlkjdslkvjldksjvlkdsjvlkdsjvlkjdslkvjdslkvjlkdsvnlkdsnvlkdsnvlkdsnvdklsnvlkdsnvklndsklvndsklnvlkdsnvnldsklvndslknvkldsnvlkdsnvlkdsnvnlkdsn',4,'1675362851377.jpeg',1400,NULL,NULL,NULL),(39,'taza con palabra','askhjdiashdlaksjfkjsdlfjdsjflasjfdlaksjdklasjkldjaslkjdlkajslkdjaslkjdlkasjlkdjlkasjdlkjaslkdjlkasjdlkjaslkdjalskjdlkasjdlkasjdkljaskldjklasjdklasjdlkasjlkdjaskljdklasjdlkasjdklaslkjdklasjdkljaskldjaslkdjlkasjdklasjdlkjaslkdjaskldjklasjdklasjd',11,'1675363433572.jpeg',1500,NULL,NULL,NULL),(44,'cafetera moulinex','kajshdjkashdjkhahsdhsahdkjhasjkdhasjkdhjkashdjkashjkdhasjkdhjkashdjkashdkjhaskjdhkajshdkjhaskjhdkjash',2,'1678387904508.jpg',2500,NULL,'2023-03-09 18:54:04',NULL),(46,'algo','sm,andjklashdkjsalkjdklsajkldfjsakljdklasjdkljaskldjklasjdklsajd',1,'../../img/default.png',2000,NULL,NULL,NULL),(48,'nose','akldjajHDKJahskjahDJKAhd',1,'../../img/default.png',2000,'2023-03-09 19:15:04','2023-03-09 19:15:04',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 16:18:47
