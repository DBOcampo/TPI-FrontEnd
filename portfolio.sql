-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8 ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`persInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`persInfo` (
  `id` INT NOT NULL,
  `ubicacion` VARCHAR(45) NULL,
  `edad` INT NOT NULL,
  `acercaDe` VARCHAR(200) NULL,
  `contacto` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`experiencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`experiencias` (
  `id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`skills` (
  `id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`usuario` (
  `id` INT NOT NULL,
  `pfp` BLOB NULL,
  `ocupacion` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `nombre` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `banner` BLOB NULL,
  `persInfo_id` INT NOT NULL,
  `experiencias_id` INT NOT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persInfo_id`, `experiencias_id`, `skills_id`),
  INDEX `fk_usuario_persInfo1_idx` (`persInfo_id` ASC) VISIBLE,
  INDEX `fk_usuario_experiencias1_idx` (`experiencias_id` ASC) VISIBLE,
  INDEX `fk_usuario_skills1_idx` (`skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_persInfo1`
    FOREIGN KEY (`persInfo_id`)
    REFERENCES `portfolio`.`persInfo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_experiencias1`
    FOREIGN KEY (`experiencias_id`)
    REFERENCES `portfolio`.`experiencias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `portfolio`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`socials`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`socials` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_socials_usuario_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_socials_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `portfolio`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`proyectos` (
  `id` INT NOT NULL,
  `imagen` BLOB NULL,
  `link` VARCHAR(100) NULL,
  `descripcion` VARCHAR(200) NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_proyectos_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_proyectos_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `portfolio`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`hardsoft`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`hardsoft` (
  `id` INT NOT NULL,
  `porcentaje` INT NULL,
  `skill` VARCHAR(45) NOT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`id`, `skills_id`),
  INDEX `fk_hardsoft_skills1_idx` (`skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_hardsoft_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `portfolio`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`idiomas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`idiomas` (
  `id` INT NOT NULL,
  `idoma` VARCHAR(45) NOT NULL,
  `porcentaje` INT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`id`, `skills_id`),
  INDEX `fk_idiomas_skills1_idx` (`skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_idiomas_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `portfolio`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`laboral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`laboral` (
  `id` INT NOT NULL,
  `empresa` VARCHAR(60) NOT NULL,
  `puesto` VARCHAR(60) NULL,
  `periodo` VARCHAR(45) NULL,
  `experiencias_id` INT NOT NULL,
  PRIMARY KEY (`id`, `experiencias_id`),
  INDEX `fk_laboral_experiencias1_idx` (`experiencias_id` ASC) VISIBLE,
  CONSTRAINT `fk_laboral_experiencias1`
    FOREIGN KEY (`experiencias_id`)
    REFERENCES `portfolio`.`experiencias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`academica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`academica` (
  `id` INT NOT NULL,
  `institucion` VARCHAR(100) NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `periodo` VARCHAR(100) NULL,
  `experiencias_id` INT NOT NULL,
  PRIMARY KEY (`id`, `experiencias_id`),
  INDEX `fk_academica_experiencias1_idx` (`experiencias_id` ASC) VISIBLE,
  CONSTRAINT `fk_academica_experiencias1`
    FOREIGN KEY (`experiencias_id`)
    REFERENCES `portfolio`.`experiencias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
