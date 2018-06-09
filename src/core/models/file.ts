import {Entity} from "./entity";

export enum FileFormat {
  JPG = 'JPG',
  PNG = 'PNG',
  TXT = 'TXT',
  MP3 = 'MP3',
  BGM = 'BGM',
  JS = 'JS',
}

export class File extends Entity {
  id: number
  format: FileFormat
}
