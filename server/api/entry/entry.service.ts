import {getRepository} from "typeorm";
import {Repository} from "typeorm/repository/Repository";
import {Entry} from "../../model/entry.model";
import {UserService} from "../user/user.service";
import {EntryType, FileFormatType} from "../../../shared/interfaces/Entry";

export interface CreateEntryDTO {
  user_id: number
  name: string
  level: number
  type: EntryType
  format: FileFormatType
  file?: File
}

export interface EntryListOptions {
  username: string
  level: number
}

export const EntryService = new (class {
  entryRepository: Repository<Entry>

  constructor() {
    this.entryRepository = getRepository(Entry)
  }

  async getEntryList(options: EntryListOptions) {
    const user = await UserService.getUser({username: options.username})

    return await this.entryRepository.find({
      user,
      level: options.level,
    })
  }

  async createEntry(entry: CreateEntryDTO) {
    const newEntry = new Entry()

    console.log('entry : ', entry)

    newEntry.name = entry.name
    newEntry.level = entry.level
    newEntry.type = entry.type
    newEntry.format = entry.format
    newEntry.user = await UserService.getUser({id: entry.user_id})

    return await this.entryRepository.save(newEntry)
  }
})
