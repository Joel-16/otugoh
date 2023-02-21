import { IsString, IsInt } from "class-validator";

export class CreateWizardDto {

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsInt()
    age: number;

    @IsString()
    level: string;

    @IsString()
    location: string
}
