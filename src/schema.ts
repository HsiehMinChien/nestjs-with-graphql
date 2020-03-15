
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AllUrl {
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

export abstract class IQuery {
    abstract getSystemInfo(): System | Promise<System>;

    abstract getAllUrl(): AllUrl | Promise<AllUrl>;
}

export class System {
    title?: string;
    describe?: string;
    buildDate?: string;
}
