import { IsString, IsInt } from "class-validator";

export class CreateElixirDto {

    @IsString()
    name: string;

    @IsString()
    shape: string;

    @IsInt()
    difficulty: number;
}
