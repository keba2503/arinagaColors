-- CreateTable
CREATE TABLE `Scope` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Scope_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scope_id` INTEGER NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `value` TEXT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Config_scope_id_idx`(`scope_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Config` ADD CONSTRAINT `Config_scope_id_fkey` FOREIGN KEY (`scope_id`) REFERENCES `Scope`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
