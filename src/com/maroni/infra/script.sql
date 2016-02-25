DROP TABLE IF EXISTS `destaque`;

CREATE TABLE `destaque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descricao` text,
  `imagem` varchar(100) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO `destaque` VALUES (1,'Novo consolo do Sex Shop do Juca','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','banner-top.jpg','2016-02-22 14:19:00','');

DROP TABLE IF EXISTS `produto`;

CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `descricao` text,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `produto` VALUES (1,'Anel Peniano do Juca','produto-um.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:21:33',''),(2,'Boneca inflável do Juca','produto-dois.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:23:45',''),(3,'Óleo anestésico do Juca','produto-tres.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:24:48','');

DROP TABLE IF EXISTS `servico`;

CREATE TABLE `servico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `descricao` text,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `servico` VALUES (1,'Visita a domicílio','servico-um.jpg','Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:26:19',''),(2,'Messagem do Juca','servico-dois.jpg','Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur. adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi.adipiscing elit. Curabitur non lobortis mi. Maecenas non interdum tortor. Phasellus et augue lacinia, luctus mauris eget, interdum dui. Aliquam erat volutpat','2016-02-22 14:27:10','');

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `login` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `usuario` VALUES (1,'vanderson','vanderson','123456',NULL,'2016-02-25 19:22:29','');