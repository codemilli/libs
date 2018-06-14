import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm'
import {User} from "./user.model";

export enum EntryType {
  FILE = 'FILE',
  DIRECTORY = 'DIRECTORY',
}

export enum FileFormatType {
  DIRECTORY = 'DIRECTORY',
  TXT = 'TXT',
  PNG = 'PNG',
  JPG = 'JPG',
  GIF = 'GIF',
  LIBSCRIPT = 'LIBSCRIPT',
  ETC = 'ETC',
}

@Entity('entry')
export class Entry {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({
    type: 'varchar',
    default: EntryType.FILE,
  })
  type: EntryType

  @Column({
    type: 'varchar',
    default: FileFormatType.ETC,
  })
  format: FileFormatType

  @Column({
    nullable: true,
  })
  parent_id: number

  @Column({
    default: 1
  })
  level: number

  @Column()
  source: string

  @ManyToOne(
    () => User,
    user => user.entries
  )
  user: User

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @Column({
    type: 'datetime',
    nullable: true,
  })
  deleted_at: string
}
