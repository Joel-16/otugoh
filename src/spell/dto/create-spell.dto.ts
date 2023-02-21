import { IsString } from "class-validator";

export class CreateSpellDto {

    @IsString()
    name: string;

    @IsString()
    type: string;
}
