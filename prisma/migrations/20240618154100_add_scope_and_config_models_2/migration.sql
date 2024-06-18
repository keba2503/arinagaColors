/*
  Warnings:

  - You are about to drop the column `path` on the `Config` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Config` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Config` DROP COLUMN `path`,
    DROP COLUMN `value`,
    ADD COLUMN `additional_text` TEXT NULL,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `subtitle` TEXT NULL,
    ADD COLUMN `title` TEXT NULL;
