import { Migration } from '@mikro-orm/migrations';

export class Migration20220329062242 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
    this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "post" alter column "created_at" set default \'NOW()\';');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
    this.addSql('alter table "post" alter column "created_at" type timestamptz using ("created_at"::timestamptz);');
    this.addSql('alter table "post" alter column "created_at" set default \'2022-03-28 23:17:45.35214-07\';');
  }

}
