-- CreateTable
CREATE TABLE `Fornecedor` (
    `forn_id` INTEGER NOT NULL AUTO_INCREMENT,
    `forn_nome` VARCHAR(30) NULL,

    PRIMARY KEY (`forn_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `prod_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_nome` VARCHAR(30) NULL,
    `prod_preco` DOUBLE NULL,
    `forn_id` INTEGER NULL,

    PRIMARY KEY (`prod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Historico` (
    `hist_id` INTEGER NOT NULL AUTO_INCREMENT,
    `hist_date` DATETIME(3) NULL,
    `prod_id` INTEGER NULL,
    `forn_id` INTEGER NULL,

    PRIMARY KEY (`hist_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_forn_id_fkey` FOREIGN KEY (`forn_id`) REFERENCES `Fornecedor`(`forn_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico` ADD CONSTRAINT `Historico_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `Produto`(`prod_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico` ADD CONSTRAINT `Historico_forn_id_fkey` FOREIGN KEY (`forn_id`) REFERENCES `Fornecedor`(`forn_id`) ON DELETE SET NULL ON UPDATE CASCADE;
