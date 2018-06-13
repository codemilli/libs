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
  ETC = 'ETC',
}

@Entity('entry')
export class Entry {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    default: EntryType.FILE,
  })
  type: EntryType

  @Column({
    type: 'varchar',
    default: FileFormatType.ETC,
  })
  file_format: FileFormatType

  @Column({
    default: 1
  })
  level: number

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
