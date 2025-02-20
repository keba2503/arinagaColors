-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `image` VARCHAR(191) NOT NULL,
    `fullDescription` TEXT NULL,
    `exactLocation` VARCHAR(191) NOT NULL,
    `mainActivities` TEXT NULL,
    `recommendations` TEXT NULL,
    `moreInfoLink` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
