import {getRepository} from "typeorm";
import {Repository} from "typeorm/repository/Repository";
import {Entry, EntryType, FileFormatType} from "../../model/entry.model";
import {UserService} from "../user/user.service";

export interface CreateEntryDTO {
  name: string
  type: EntryType
  format: FileFormatType
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

    newEntry.name = entry.name
    newEntry.type = entry.type
    newEntry.format = entry.format

    return await this.entryRepository.save(newEntry)
  }
})
