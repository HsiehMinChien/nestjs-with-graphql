
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PokemonUrlPathType {
    type = "type",
    pokemon = "pokemon",
    ability = "ability"
}

export class PokemonAllUrl {
    ability?: string;
    berry?: string;
    characteristic?: string;
    gender?: string;
    generation?: string;
    item?: string;
    language?: string;
    location?: string;
    machine?: string;
    move?: string;
    nature?: string;
    pokedex?: string;
    pokemon?: string;
    region?: string;
    stat?: string;
    type?: string;
    version?: string;
}

export class PokemonInfo {
    count?: number;
    next?: string;
    previous?: string;
    results?: PokemonResults[];
}

export class PokemonResults {
    name?: string;
    url?: string;
}

export abstract class IQuery {
    abstract getPokemonAllUrl(): PokemonAllUrl | Promise<PokemonAllUrl>;

    abstract getPokemonInfo(type: PokemonUrlPathType, offset?: number, limit?: number): PokemonInfo | Promise<PokemonInfo>;

    abstract getSystemInfo(): System | Promise<System>;
}

export class System {
    title?: string;
    describe?: string;
    createdAt?: string;
    tags?: string[];
    createdBy?: string;
}
