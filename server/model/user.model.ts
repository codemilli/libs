import * as bcrypt from 'bcrypt'
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Entry} from "./entry.model";

export enum UserAccountType {
  LOCAL = 'LOCAL',
  FACEBOOK = 'FACEBOOK',
}

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({unique: true})
  email: string

  @Column({unique: true})
  username: string

  @Column({unique: true})
  password: string

  @Column({nullable: true})
  salt: string

  @Column({
    type: 'varchar',
    default: UserAccountType.LOCAL
  })
  account_type: UserAccountType

  @OneToMany(
    () => Entry,
    entry => entry.user
  )
  entries: Entry[]

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @Column({
    type: 'datetime',
    nullable: true
  })
  deleted_at: string

  static async hashing(str, salt): Promise<any> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(str, salt, (err, hashed) => {
        if (err)
          reject(err)
        resolve(hashed)

        return hashed
      })
    })
  }

  static async getSalt(): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt = '') => {
        if (err) {
          return reject(err)
        }

        resolve(salt)
        return salt
      })
    })
  }
}
